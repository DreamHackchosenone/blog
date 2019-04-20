#  关于本博客
[TOC] 
## 博客介绍
&nbsp;&nbsp;&nbsp;&nbsp;一直想写一些技术文章，记录自己的成长，但是又怕制造网络垃圾，所以一直用其他的笔记软件记录一些工作经验与片段，我认为谷歌搜索比百度好的一点就是屏蔽了大量csdn,博客园的重复水文，所以每次搜索都会关键词 -csdn用来屏蔽这些网站，希望自己能尽量写出有质量的和启发性的技术文章
## 技术栈
* 前端：HTML,CSS,jQuery
* 后端：Python 3.6
* 数据库：Mongo 4.0.4
* 框架：tornado 4.5.3
* 选择tornado作为后端框架是因为自己对这个框架比较熟悉，4.*也是tornado开发历时最长，接近四年的版本，也是我在开始搭建此博客时最稳定的版本，现在最新的是5.0.1，但偶然发现github上tornado最新issue有一个内存泄露的问题，估计官方会很快修复这个bug，关于这个问题后面找时间跟一下，配合tornado的mongo数据驱动选择了motor，是一个mongo的异步数据库驱动，因为文档详细并且是pymongo官方发布的主流异步库，后端加了一个nginx配合前后分离，tornado提供API。
## 博客展示
* blog首页
![image](https://pic3.zhimg.com/80/v2-76f1c6354a9923b8e4dc932b773cfff4_hd.png)
* 文章显示页
![image](https://pic2.zhimg.com/80/v2-081722969f127c11998bfa6020885b3d_hd.png)
* 发表文章页
![image](https://pic1.zhimg.com/80/v2-8c906764a707e21b9471c69d52b289fd_hd.png)
## TODO 
* 博客的搜索功能
* 编辑文章
* 文章增加分类
* 文章置顶
* 评论
* 开源(考虑到服务器当前没有域名等因素导致的安全性)
