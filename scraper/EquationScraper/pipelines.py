# -*- coding: utf-8 -*-

from py2neo import authenticate, Graph, Node, Relationship
from scrapy import signals, exceptions
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

        if spider.settings.getbool("EXPORT_JSON"):
            self.pprnt_exporter.export_item(item)
            self.jsl_exporter.export_item(item)

        node_equation_label = 'EQUATION'
        node_subject_label = 'SUBJECT'

        link_relation = 'LINKS_TO'
        page_relation = 'SAME_PAGE_AS'

        item_array = [item['last_item'].copy(), item.copy()]
        subject_nodes_array = []

        for idx, elem in enumerate(item_array):

            subject_nodes_array.append(Node(node_subject_label,
                                            title=item_array[idx]['title'],
                                            url=item_array[idx]['url'],
                                            categories=item_array[idx]['categories']))

            for expression in elem['maths']:

                expression = latexutils.strip_styles(expression)

                if latexutils.contains_equality_command(expression):
                    latex_equation_node = Node(node_equation_label,
                                               name='Equation<' + item_array[idx]['title'] + '>',
                                               equation=expression)

                    self.graph.merge(Relationship(subject_nodes_array[idx],
                                                  page_relation,
                                                  latex_equation_node,
                                                  distance=0))

        self.graph.merge(Relationship(subject_nodes_array[0], link_relation, subject_nodes_array[1],
                                      distance=item_array[1]['link_dist']))

        del item
        raise exceptions.DropItem
