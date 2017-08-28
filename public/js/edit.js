$(function () {
    $("#pre_img").click(function () {
        $("#upload_file").click();
    });
    $("#upload_file").change(function () {
        //jq dom 对象 转js dom对象
        var file = $(this)[0].files[0];
        var formData = new FormData();
        formData.append('file', file);

        $.ajax({
            url: '/files/upload',
            type: 'POST',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,  // tell jQuery not to set contentType
            success: function (data) {
                $("#pre_img").attr("src", data);
                $("#cover").val(data);
            }
        });
    })


    $("#submit").click(function () {

        var formdata = $("#create_form").serialize();
        $.post("/web/edit", formdata, function (data) {
            alert("修改成功！");
            window.location.href = "/manage";
        })

    });


})


$(function () {
    var url = new URL(window.location.href);
    var id = url.searchParams.get("id");
    $("#id").val(id);
    $.get("/web/item/" + id, function (data) {
        $("#pre_img").attr("src", data.cover);
        $("#cover").val(data.cover);
        $("#title").val(data.title);
        $("#content").val(data.content);

        //wangEditor
        var E = window.wangEditor;
        var editor = new E('#wangeditor')
        editor.customConfig.onchange = function (html) {
            // html 即变化之后的内容
            $("#content").val(html);
        }
        // 或者 var editor = new E( document.getElementById('#editor') )
        editor.create();
        editor.txt.html(data.content);

    })
})