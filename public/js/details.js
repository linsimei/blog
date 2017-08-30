$(function () {
    //获取url的参数id
    var url = new URL(window.location.href)
    var id = url.searchParams.get("id");
    $.get("/web/item/"+id, function (data) {
        $(".content_title").html(data.title);
        var time= new Date(data.createDate).format('yyyy-MM-dd')
        $(".sumit_time").html(time);
        $(".blogs_content").html(data.content);
        $(".views_num").html(data.visit);
        
      

    })



})