$(document).ready(function () {
    $("#keywords").focus(function () {
        $(document).keydown(function (event) {
            if (event.keyCode == 13) {
                $("#search").click();
            }
        });
    })
    $("#search").click(function () {
        $.ajax({
            url:"search",
            type: "post",
            data: JSON.stringify($(keywords).val()),
            datatype: "json",
            contentType: 'application/json; charset=UTF-8',
            async: true,
        })
            .done(function (data, status) {
                $("#postindex").empty()
                for (var i = 0; i < data.length; i++) {
                    // console.log((data[i]))
                    $("#postindex").append("<tr>\n" +
                        "\t\t\t\t\t\t\t<td>\n" +
                        "\t\t\t\t\t\t\t\t<a href=\"/auth/showarticle/" + data[i].id + "\">" + data[i].title + "</a>\n" +
                        "\t\t\t\t\t\t\t</td>\n" +
                        "\t\t\t\t\t\t\t<td class=\"right\">\n" +
                        "\t\t\t\t\t\t\t\t<time>" + timestamptostr(data[i].timestamp) + "</time>\n" +
                        "\t\t\t\t\t\t\t</td>\n" +
                        "\t\t\t\t\t\t</tr>")
                    console.log("status:" + status)
                }
            })
            .fail(function (statusText) {
                console.log("status:" + status)
            })

    })

})
