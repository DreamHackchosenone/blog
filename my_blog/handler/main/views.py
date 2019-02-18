#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/10/17 21:22
import json
import datetime
from my_blog.handler.base import BaseHandler


class PostArticleHandler(BaseHandler):
    def post(self):
        data = json.loads(self.request.body)
        title = data.get('title')
        article = data.get('article')
        doc = {
            'title': title,
            'article': article,
            'post_date': datetime.datetime.now(),
        }
        self.db['post'].insert_one(doc)
        self.write_json({'ret': 0, 'msg': 'ok'})


class GetArticleListHandler(BaseHandler):
    def get(self):
        # todo: 游标转为json格式
        print('#')
        post = self.db['post'].find()
        print(post)
        print('*'*100)
        self.write_json({'ret': 0, 'msg': post})


class ShowArticleDetailHandler(BaseHandler):
    def get(self):
        data = json.loads(self.request.body)
        articl_id = data.get('article_id')
        post = self.db['post'].find_one({'articl_id':articl_id})
        if not post:
            self.write_json({'ret': -1, 'msg': 'post not exist'})
        self.write_json({'ret': 0, 'msg': post})

