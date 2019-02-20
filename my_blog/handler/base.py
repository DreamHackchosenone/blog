#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/10/10 22:23
import json
from tornado.web import RequestHandler
import motor

class BaseHandler(RequestHandler):

    @property
    def db(self):
        client = motor.motor_tornado.MotorClient('localhost', 27017)
        return client['blog']

    def write_json(self, ret={}):
        self.set_header("Content-Type", "application/json")
        self.write(json.dumps(ret))
