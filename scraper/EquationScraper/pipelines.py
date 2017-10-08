# -*- coding: utf-8 -*-

from itertools import permutations, product

from py2neo import authenticate, Graph, Node, Relationship
from scrapy import signals
from scrapy.exporters import JsonLinesItemExporter, PprintItemExporter


# recall that to unescape latex commands, just half the number of backslashes
# so that if 8 backslashes then replace with 4. If 2 then replace with 1 and so on.


class EquationscraperPipeline(object):
    def __init__(self):
        self.jsl_exporter = None
        self.pprnt_exporter = None
        self.files = {}

        authenticate('localhost:7474', 'neo4j', 'Redzone1515')
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
        self.jsl_exporter.export_item(item)

        LABEL = 'EQUATION'
        RELATION_TYPE = 'LINKS_TO'

        item_array = [item.last_item, item]

        for idx, elem in enumerate(item_array):

            for x, y in permutations(elem.maths, 2):

                node_pair = []
                for latex_item in [x, y]:
                    node_pair.append(Node(LABEL,
                                          latex=latex_item,
                                          on_page=item_array[idx].title,
                                          url=item_array[idx].url,
                                          categories=item_array[idx].categories))

                self.graph.merge(Relationship(node_pair[0], RELATION_TYPE, node_pair[1], distance=0))

        # last is equation from last_item and curr is equation from curr_item
        curr_item = 1
        last_item = 0
        for last, curr in product(*item_array):
            node_last = Node(LABEL, latex=last, on_page=item_array[last_item].title,
                             url=item_array[last_item].url, categories=item_array[last_item].categories)

            node_curr = Node(LABEL, latex=curr, on_page=item_array[curr_item].title,
                             url=item_array[curr_item].url, categories=item_array[curr_item].categories)

            self.graph.merge(Relationship(node_last, RELATION_TYPE, node_curr,
                                          distance=item_array[last_item].link_dist))

        return item
