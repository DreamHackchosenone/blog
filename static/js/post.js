$(document).ready(function () {
    $("#post").click(function () {
        $.ajax({
            url: "/blog/post",
            type: 'post',
            data: $(".editormd-html-textarea").attr("name", "html"),
            datatype: "json",
            contentType: 'application/json; charset=UTF-8',
            async: true,
        })
            .success(function (data, status) {
                alert(data['msg'])
            })
            .fail(function (statusText) {
                alert('ajax 失败')
            })
    })
})