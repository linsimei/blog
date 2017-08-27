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


    $("#submit").click(function(){

         var formdata  = $("#form").serialize();
         $.post("/web/add",formdata,function(data){
             alert("发表成功");
             window.location.href = "/manage";
         })

    });


})