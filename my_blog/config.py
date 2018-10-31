#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/10/10 22:16

from tornado.options import options, parse_config_file, parse_command_line
import motor

import logging


# log config
FORMAT = '[%(asctime)s] [%(levelname)s] %(message)s'
logging.basicConfig(format=FORMAT, level=logging.INFO, datefmt='%Y-%m-%d %H:%M:%S')
logger = logging.getLogger(__name__)


def load_options(args=None):
    parse_command_line(args=args)
    if options.config_file:
        parse_config_file(options.config_file)

def connect_db():
    logger.info("mongodb_uri is: {}".format(options.mongodb_uri))
    return motor.MotorClient(options.mongodb_uri)
