# -*- coding: utf-8 -*-
import scrapy
from scrapy.linkextractors import LinkExtractor

from . import URLs
from ..items import EquationscraperItem


class WikiEquationSpider(scrapy.Spider):
    name = "WikiEquationCrawler"
    allowed_domains = ["en.wikipedia.org"]

    def start_requests(self):
        for pageType, urlList in URLs.start_url_dict.items():
            for url in urlList:
                yield scrapy.Request(url=url,
                                     callback=getattr(self, f'parse_{pageType}'))

    def parser_dispatch(self, response):
        pass

    def parse(self, response):
        pass

    def parse_portals(self, response):

        for article_link in LinkExtractor(allow=r'https://en[.]wikipedia[.]org/wiki/',
                                          deny=URLs.global_deny,
                                          unique=True).extract_links(response):
            yield scrapy.Request(url=article_link.url, callback=self.parse_articles)

        for category_link in LinkExtractor(allow=r'https://en[.]wikipedia[.]org/wiki/Category:.*',
                                           deny=URLs.global_deny, ).extract_links(response):
            request = scrapy.Request(url=category_link.url, callback=self.parse_categories)
            request.meta['category_depth'] = 0
            yield request

    def parse_wikiprojects(self, response):

        for article_link in LinkExtractor(allow=r'https://en[.]wikipedia[.]org/wiki/',
                                          deny=URLs.global_deny).extract_links(response):
            yield scrapy.Request(url=article_link.url, callback=self.parse_articles)

    def parse_articles(self, response):

        latex_math = (set(response.css('img.mwe-math-fallback-image-inline').css('img::attr(alt)').extract())
                      .union(set(response.css('img.mwe-math-fallback-image-display').css('img::attr(alt)').extract()))
                      .union(set(response.css('img.mwe-math-mathml-a11y').css('img::attr(alt)').extract())))

        if latex_math:

            curr_item = EquationscraperItem()
            curr_item['url'] = response.url
            curr_item['title'] = response.css('#firstHeading::text').extract_first()
            curr_item['categories'] = response.css("#mw-normal-catlinks > ul > li > a").css("a::text").extract()

            curr_item['maths'] = list(latex_math)

            if response.meta.get('last_item', None):
                # using current curr_item and last_item, we can yield
                # the curr_item into pipeline and construct relationship
                # last_item <LINKS_TO> curr_item

                # if no equation maths on current article, then
                # continue crawling links until finding article
                # with maths and maintain most recent last_item
                # that contained math and increment link_dist

                # link_dist is measured between pages with maths so only increase
                # dist if last_item exists then if current article
                # has latex_maths, list_dist==1 otherwise
                # increment link_dist

                # last_item exists --> link_dist exists

                curr_item['last_item'] = response.meta['last_item'].copy()
                curr_item['link_dist'] = response.meta['link_dist']
                curr_item['link_relationship'] = f'{curr_item["last_item"]["url"]} LINKS TO {curr_item["url"]}'

                yield curr_item

        for article_link in LinkExtractor(allow=r'https://en[.]wikipedia[.]org/wiki/',
                                          deny=URLs.global_deny).extract_links(response):

            request = scrapy.Request(url=article_link.url, callback=self.parse_articles)

            # if current page contains no equations then hold onto curr_item from
            # most recent page that did contain equations.
            if latex_math:
                # doesn't matter whether last_item true or false in here b/c set to None

                # set curr_item[last_item] = None before copying to request
                # to maintain single-link connections otherwise last_item element
                # will start to accumulate items
                curr_item['last_item'] = None
                curr_item['link_relationship'] = None
                request.meta['link_dist'] = 1

                request.meta['last_item'] = curr_item.copy()

            elif response.meta.get('last_item', None):
                # here we are passing on last_item until we find a page with maths

                request.meta['last_item'] = response.meta['last_item'].copy()
                request.meta['link_dist'] = response.meta.get('link_dist', 0) + 1

            yield request

    def parse_categories(self, response):

        for article_link in LinkExtractor(allow=r'https://en[.]wikipedia[.]org/wiki/',
                                          deny=URLs.global_deny).extract_links(response):
            yield scrapy.Request(url=article_link.url, callback=self.parse_articles)

        for category_link in LinkExtractor(allow=r'https://en[.]wikipedia[.]org/wiki/Category:.*',
                                           deny=URLs.global_deny, ).extract_links(response):

            if response.meta['category_depth'] > self.settings.getint('WIKI_CATEGORY_DEPTH'):
                self.log(f'maximum category depth reached on {response.url}')
                # break

            # else:
            request = scrapy.Request(url=category_link.url, callback=self.parse_categories)
            request.meta['category_depth'] += 1
            yield request
