#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/10/17 21:22
import json

from my_blog.handler.base import BaseHandler


class IndexHandler(BaseHandler):
    def get(self):
        self.render('index.html')


class PostArticleHandler(BaseHandler):
    def post(self):
        data = json.loads(self.request.body)
        print(data)
        self.render('post.html')
