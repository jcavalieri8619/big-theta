# -*- coding: utf-8 -*-


import logging
from itertools import product, combinations

from py2neo import authenticate, Graph, Node, Relationship
from scrapy import signals
from scrapy.exporters import JsonLinesItemExporter, PprintItemExporter

from .latex import utils as latexutils


class EquationscraperPipeline(object):
    def __init__(self):
        self.jsl_exporter = None
        self.pprnt_exporter = None
        self.files = {}

        authenticate('localhost:7474', 'neo4j', 'big-theta-team')
        self.graph = Graph('localhost:7474/db/data')

    @classmethod
    def from_crawler(cls, crawler):
        pipeline = cls()
        crawler.signals.connect(pipeline.spider_opened, signals.spider_opened)
        crawler.signals.connect(pipeline.spider_closed, signals.spider_closed)
        return pipeline

    def spider_opened(self, spider):
        file_pprnt = open('%s_pprint-items0' % spider.name, 'w+b', )
        file_jsl = open('%s_json-items0' % spider.name, 'w+b', )

        self.jsl_exporter = JsonLinesItemExporter(file_jsl)
        self.pprnt_exporter = PprintItemExporter(file_pprnt)

        self.files[spider] = [file_pprnt, file_jsl]
        self.pprnt_exporter.indent = 2
        self.pprnt_exporter.start_exporting()
        self.jsl_exporter.start_exporting()

    def spider_closed(self, spider):
        self.pprnt_exporter.finish_exporting()
        self.jsl_exporter.finish_exporting()

        for f in self.files[spider]:
            f.close()

    def process_item(self, item, spider):
        self.pprnt_exporter.export_item(item)
        # self.jsl_exporter.export_item(item)

        node_label = 'EQUATION'
        link_relation = 'LINKS_TO'
        page_relation = 'SAME_PAGE_AS'

        item_array = [item['last_item'].copy(), item.copy()]

        for idx, elem in enumerate(item_array):

            for expr_x, expr_y in combinations(elem['maths'], 2):

                expr_x = latexutils.strip_styles(expr_x)
                expr_y = latexutils.strip_styles(expr_y)

                logging.log(logging.INFO, "JPCLOG SAMELINK:" + str((expr_x, expr_y)))

                if (latexutils.contains_equality_command(expr_x) and
                        latexutils.contains_equality_command(expr_y)):
                    # we are not interested in math expressions without
                    # some form of equality. The expression sin(x)/x is meaningless
                    # but the expression lim_{x->0} sin(x)/x = 1 contains meaningful
                    # information i.e. that the LHS and RHS are related in some way--
                    # in this case they are equal.

                    node_pair = []
                    for latex_item in [expr_x, expr_y]:
                        node_pair.append(Node(node_label,
                                              equation=latex_item,
                                              title=item_array[idx]['title'],
                                              url=item_array[idx]['url'],
                                              categories=item_array[idx]['categories']))

                    R = Relationship(node_pair[0], page_relation, node_pair[1], distance=0)
                    logging.log(logging.INFO, "JPCLOG SAMELINK:" + str(R))
                    self.graph.merge(R)

        # expr_in_last is equation from last_item and expr_in_curr is equation from curr_item
        curr_item = 1
        last_item = 0

        # item_array[last_item]['maths'],
        # item_array[curr_item]['maths']
        for expr_in_last, expr_in_curr in product(*[x['maths'] for x in item_array]):

            expr_in_curr = latexutils.strip_styles(expr_in_curr)
            expr_in_last = latexutils.strip_styles(expr_in_last)

            logging.log(logging.INFO, "JPCLOG CROSSLINK:" + str((expr_in_last, expr_in_curr)))

            if latexutils.contains_equality_command(expr_in_last) and \
                    latexutils.contains_equality_command(expr_in_curr):
                node_last_expr = Node(node_label, equation=expr_in_last, title=item_array[last_item]['title'],
                                      url=item_array[last_item]['url'], categories=item_array[last_item]['categories'])

                node_curr_expr = Node(node_label, equation=expr_in_curr, title=item_array[curr_item]['title'],
                                      url=item_array[curr_item]['url'], categories=item_array[curr_item]['categories'])

                R = Relationship(node_last_expr, link_relation, node_curr_expr,
                                 distance=item_array[curr_item]['link_dist'])
                logging.log(logging.INFO, "JPCLOG CROSSLINK:" + str(R))
                self.graph.merge(R)

        return item
