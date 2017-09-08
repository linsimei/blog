$(function(){
    $("#pre_img").click(function(){
        $("#upload_file").click();
    });
    $("#upload_file").change(function(){
        //jq dom 对象 转js dom对象
        var file = $(this)[0].files[0];
        var formData = new FormData();
        formData.append('file', file);
        
        $.ajax({
               url : '/files/upload',
               type : 'POST',
               data : formData,
               processData: false,  // tell jQuery not to process the data
               contentType: false,  // tell jQuery not to set contentType
               success : function(data) {
                   $("#pre_img").attr("src",data);
                   $("#cover").val(data);
               }
        });
    })

//ajax表单提交
    $("#submit").click(function(){
         var formdata  = $("#create_form").serialize();
         $.post("/web/add",formdata,function(data){
             alert("发表成功！");
             window.location.href = "/manage";
         })

    });

    //wangEditor
    var E = window.wangEditor;
    var editor = new E('#wangeditor');
    // 自定义菜单配置
    editor.customConfig.menus = [
        'head',
        'bold',
        'italic',
        'underline'
    ]
    editor.customConfig.onchange = function (html) {
        // html 即变化之后的内容
        $("#content").val(html);
    }
    // 或者 var editor = new E( document.getElementById('#editor') )
    editor.create()


})