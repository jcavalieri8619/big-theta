import hashlib
import os

from scrapy.dupefilters import RFPDupeFilter
from scrapy.utils.python import to_bytes
from w3lib.url import canonicalize_url


class LinkFilter(RFPDupeFilter):
    def __init__(self, *args, **kwargs):
        super(LinkFilter, self).__init__(*args, **kwargs)

    def request_seen(self, request):

        fp = self.request_fingerprint(request)
        if (request.url == request.meta.get('url-from')) or fp in self.fingerprints:
            return True
        self.fingerprints.add(fp)
        if self.file:
            self.file.write(fp + os.linesep)

    def request_fingerprint(self, request):

        fp = hashlib.sha1()
        fp.update(to_bytes(request.method))
        # if 'url-from' in request.meta:
        fp.update(to_bytes(canonicalize_url(request.meta['url-from'])))
        fp.update(to_bytes(canonicalize_url(request.url)))
        fp.update(request.body or b'')

        return fp.hexdigest()
