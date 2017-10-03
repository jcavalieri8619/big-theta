# -*- coding: utf-8 -*-
import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.link import Link
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

    def parse_portals(self, response):
        self.log('INSIDE PARSE_PORTALS')

        for article_link in LinkExtractor(allow=r'https://en[.]wikipedia[.]org/wiki/',
                                          deny=URLs.global_deny).extract_links(response):
            yield scrapy.Request(url=article_link.url, callback=self.parse_articles)

        for category_link in LinkExtractor(allow=r'https://en[.]wikipedia[.]org/wiki/Category:.*',
                                           deny=URLs.global_deny, ).extract_links(response):
            request = scrapy.Request(url=category_link.url, callback=self.parse_categories)
            request.meta['category_depth'] = 0
            yield request

    def parse_wikiprojects(self, response):
        self.log('INSIDE PARSE_WIKIPROJECTS')
        for article_link in LinkExtractor(allow=r'https://en[.]wikipedia[.]org/wiki/',
                                          deny=URLs.global_deny).extract_links(response):
            yield scrapy.Request(url=article_link.url, callback=self.parse_articles)

    def parse_articles(self, response):
        self.log('INSIDE PARSE_ARTICLES')
        latex_eqns = (set(response.css('img.mwe-math-fallback-image-inline').css('img::attr(alt)').extract())
                      .union(set(response.css('img.mwe-math-fallback-image-display').css('img::attr(alt)').extract()))
                      .union(set(response.css('img.mwe-math-mathml-a11y').css('img::attr(alt)').extract())))

        if latex_eqns:

            item = EquationscraperItem()
            item['url'] = response.url
            item['title'] = response.css('#firstHeading::text').extract_first()
            item['categories'] = response.css("#mw-normal-catlinks > ul > li > a").css("a::text").extract()

            item['equations'] = latex_eqns

            if 'last_item' in response.meta:
                # using current item and last_item, we can yield
                # the item into pipeline and construct relationship
                # curr_item <LINKS_TO> last_item

                # if no latex eqns on current article, then
                # continue crawling links until finding article
                # with eqns and maintain most recent last_item
                # that contained eqns and increment link_dist

                # link_dist is measured between eqns so only increase
                # dist if last_item exists then if current article
                # has latex_eqns, list_dist==1 otherwise
                # increment link_dist

                # last_item exists --> link_dist exists

                response.meta['link_dist'] += 1

                item['last_item'] = response.meta['last_item']
                item['link_dist'] = response.meta['link_dist']

                self.log(f'{item["last_item"]["url"]} LINKS TO {item["url"]}')

                yield item

        for article_link in LinkExtractor(allow=r'https://en[.]wikipedia[.]org/wiki/',
                                          deny=URLs.global_deny).extract_links(response):

            request = scrapy.Request(url=article_link.url, callback=self.parse_articles)

            # if current page contains no equations then hold onto item from
            # most recent page that did contain equations.
            if latex_eqns:
                request.meta['last_item'] = item
                request.meta['link_dist'] = 0
            else:
                request.meta['last_item'] = response.meta.get('last_item', None)
                request.meta['link_dist'] = response.meta.get('link_dist', 0)

            yield request

    def parse_categories(self, response):
        self.log('INSIDE PARSE_CATEGORIES')
        for article_link in LinkExtractor(allow=r'https://en[.]wikipedia[.]org/wiki/',
                                          deny=URLs.global_deny).extract_links(response):
            yield scrapy.Request(url=article_link.url, callback=self.parse_articles)

        for category_link in LinkExtractor(allow=r'https://en[.]wikipedia[.]org/wiki/Category:.*',
                                           deny=URLs.global_deny, ).extract_links(response):

            if response.meta.set_default('category_depth', 0) > self.settings.WIKI_CATEGORY_DEPTH:
                self.log(f'maximum category depth reached on {response.url}')

            else:
                request = scrapy.Request(url=category_link.url, callback=self.parse_categories)
                request.meta['category_depth'] = 0
                yield request
