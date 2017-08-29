$(function () {
    //获取博客列表
    $.get("/web", function (data) {
        var html = "";
        data.forEach(function (item) {
            html += '<div class="blog_wrapper"><div class="blog clearfix"><i class="float_left"><img src="'+item.cover+'" alt="文章插图"></i><div class="blog_right float_left"> <h3 class="blog_title"><a href="">'+item.title+'</a></h3><div class="blog_content">'+item.content+'</div></div> </div> <div class="blog_info clearfix"><div class="submit_time inline"><i></i><span>'+item.create_time+'</span></div><div class="comments inline"><a href=""><i></i><span class="comments_num">2</span><span>comments</span></a></div> <a class="more active float_right" href="/web/details?id='+item._id+'">Read More</a></div></div >'
        }, this);
        $('.blogs_list').html(html);
        
      

    })



})