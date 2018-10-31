#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/10/10 22:23
import json
from tornado.web import RequestHandler


class BaseHandler(RequestHandler):

    @property
    def _db(self):
        return self.application.settings['mongo_client']['q2-ums']

    def write_json(self, ret={}):
        self.set_header("Content-Type", "application/json")
        self.write(json.dumps(ret))
