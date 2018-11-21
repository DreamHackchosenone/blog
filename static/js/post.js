$(document).ready(function () {
    var Editor;
    Editor = editormd("editormd", {
            width: "90%",
            height: 640,
            syncScrolling: "single",
            emoji: true,
            path: "../editormd/lib/",
            /*
                // 开启上传图片功能
                imageUpload : true,
                imageFormats : ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
                imageUploadURL : "/upload/image/",
                */
            saveHTMLToTextarea: true,    // 保存 HTML 到 Textarea
            searchReplace: true,
            flowChart: true,             // 开启流程图支持，默认关闭
            sequenceDiagram: true       // 开启时序/序列图支持，默认关闭,
        });

    
    $("#post").click(function () {
        $.ajax({
            url: "/blog/post",
            type: 'post',
            data:Editor.getMarkdown(),
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
