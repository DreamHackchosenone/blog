#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2018/10/9 22:23

import os
import tornado.web
from tornado.options import define, options
from my_blog.url import urls
import logging

define("port", default=20302, help="run on the given port", type=int)

if __name__ == "__main__":
    tornado.options.parse_command_line()
    app = tornado.web.Application(
        handlers=urls,
        debug=True,
        template_path=os.path.join(os.path.dirname(__file__), 'templates'),
        static_path=os.path.join(os.path.dirname(__file__), 'static'),
    )


    try:
        logging.info('Server is running at http://{host}:{port}'.format(host='127.0.0.1', port=20302))
        #app.listen(options.port, xheaders=True, max_body_size=1024 * 1024)
        http_server = tornado.httpserver.HTTPServer(app)
        http_server.listen(options.port)
        tornado.ioloop.IOLoop.instance().start()
    except KeyboardInterrupt:
        tornado.ioloop.IOLoop.instance().stop()

