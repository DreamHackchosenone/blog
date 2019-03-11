#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/10/17 21:22
import json
import bson
from bson import json_util
import datetime
from my_blog.handler.base import BaseHandler
from bson import json_util, errors
from bson.objectid import ObjectId

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
    async def get(self):
        # todo: 游标转为json格式
        cursor = self.db['post'].find()
        cursor.sort('post_date', -1)
        doc_list = []
        async for doc in cursor:
            # objectid无法序列化，需要导入bson
            doc_list.append(json.loads(json_util.dumps(doc)))
        self.write_json({'ret': 0, 'msg': 'OK', 'data': doc_list})


class ShowArticleDetailHandler(BaseHandler):
    async def get(self, articl_id):
        try:
            doc = await self.db['post'].find_one({'_id':ObjectId(articl_id)})
            if not doc:
                self.write_json({'ret': -1, 'msg': 'post is not exist'})
            #self.write_json({'ret': 0, 'msg': json_util.dumps(doc)})
            self.render('article_detail.html', title=doc['title'], content=doc['article'])
        except bson.errors.InvalidId:
            self.write_json({'ret': -1, 'msg': 'wrong article Id'})
        except:
            self.write_json({'ret': -1, 'msg': 'unknown error'})

