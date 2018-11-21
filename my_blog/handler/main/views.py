#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/10/17 21:22
import json
import datetime
from my_blog.handler.base import BaseHandler


class IndexHandler(BaseHandler):
    def get(self):
        self.render('index.html')


class PostArticleHandler(BaseHandler):
    def post(self):
        post = self.request.body
        doc = {
            'article': post,
            'post_date': datetime.datetime.now(),
        }
        self.db['post'].insert_one(doc)
        self.write_json({'ret': 0, 'msg': 'ok'})
