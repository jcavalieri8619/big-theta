# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class EquationscraperItem(scrapy.Item):
    url = scrapy.Field()
    title = scrapy.Field()
    categories = scrapy.Field()
    maths = scrapy.Field()
    last_item = scrapy.Field()
    link_dist = scrapy.Field()
    link_relationship = scrapy.Field()
