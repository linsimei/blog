$(function () {
    //获取url的参数id
    var url = new URL(window.location.href)
    var id = url.searchParams.get("id");
    $.get("/web/item/"+id, function (data) {
       
        $(".content_title").html(data.title);
        $(".sumit_time").html(data.createDate);
        $(".blogs_content").html(data.content);
        $(".blogs_content").html(data.content);
        $(".views_num").html(data.visit);
        
      

    })



})