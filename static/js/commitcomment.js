$(document).ready(function () {
    $("#commit_comment").click(function () {
        $.ajax({
            url: 'http://127.0.0.1:5000/auth/commitcomment',
            type: "post",
            data: JSON.stringify({
                article__id: article_id,
                comment: $(commit_textarea).val()
            }),
            datatype: "json",
            contentType: 'application/json; charset=UTF-8',
            async: true
        })
            .done(function (data) {
                window.location.reload()
            })
            .fail(function () {
                console.log()
            })
    })
})