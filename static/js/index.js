$(document).ready(function () {
  //todo json解析问题
  $.ajax({
    url: '/blog/',
    type: 'GET',
    datatype: 'json',
    contentType:"application/json; charset=UTF-8",
    async: true,
    success: function(data){
      article_list = data['data']
      console.log(article_list)
      for (var i = 0; i < article_list.length; i++) {
        doc = article_list[i]
        addArticleDom(doc['_id']['$oid'], doc['title'], doc['post_date'])
        }
    },
    error: function(){
      alert('error');
    },
  })
})

function addArticleDom(ObjectID, title, time) {
  $("#article_list").append("<tr><td><a href='http://139.199.62.58:20301/blog/article/"+ObjectID+"' class='title'>"+title+"</a></td><td><style='float:right'><time>"+time+"</time></td></tr>")
}

//获取窗口滚动条高度
function getScrollTop() {
    var scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
}

//获取当前可是范围的高度
function getClientHeight() {
    var clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
    } else {
        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
    }
    return clientHeight;
}

//获取文档完整的高度
function getScrollHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}

var i = 2.5
window.onscroll = function () {

    if (getScrollTop() + getClientHeight() == getScrollHeight()) {
        i++;
        // console.log(i)
        $(document).ready(function () {
            $.ajax({
                url: "indexs",
                type: 'post',
                data: JSON.stringify(i),
                datatype: "json",
                contentType: 'application/json; charset=UTF-8',
                async: true,
            })

                .done(function (data, textStatus) {
                    for (var i = 0; i < data.length; i++) {
                        // console.log(typeof (data[i].timestamp))
                        $("#postindex").append("<tr>\n" +
                            "\t\t\t\t\t\t\t<td>\n" +
                            "\t\t\t\t\t\t\t\t<a href=\"/auth/showarticle/" + data[i].id + "\">" + data[i].title + "</a>\n" +
                            "\t\t\t\t\t\t\t</td>\n" +
                            "\t\t\t\t\t\t\t<td class=\"right\">\n" +
                            "\t\t\t\t\t\t\t\t<time>" + timestamptostr(data[i].timestamp) + "</time>\n" +
                            "\t\t\t\t\t\t\t</td>\n" +
                            "\t\t\t\t\t\t</tr>")
                        // console.log("statusText:" + textStatus)
                    }
                })
                .fail(function (textStatus) {
                    console.log("statusText:" + textStatus)
                })
            // .always(function () {
            //     console.log("run")
            // })
        });
    }
}

function timestamptostr(timestamp) {
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    return date.toLocaleDateString()
}
