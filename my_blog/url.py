#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/10/17 21:25
from my_blog.handler.main.views import IndexHandler, PostArticleHandler

urls = [
    [r'/', IndexHandler],
    [r'/post', PostArticleHandler]
]