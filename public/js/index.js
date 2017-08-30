$(function () {
    //获取博客列表
    $.get("/web", function (data) {
        var html = "";
        data.forEach(function (item) {

            html += '<div class="blog_wrapper"><div class="blog clearfix"><i class="float_left"><img src="' + item.cover + '" alt="文章插图"></i><div class="blog_right float_left"> <h3 class="blog_title"><a href="">' + item.title + '</a></h3><div class="blog_content">' + item.content + '</div></div> </div> <div class="blog_info clearfix"><div class="submit_time inline"><i></i><span>' + new Date(item.createDate).format('yyyy-MM-dd') + '</span></div><div class="views inline"><i></i><span>浏览量</span><span class="views_num">（' + item.visit + '）</span></div> <a class="more active float_right" href="/web/details?id=' + item._id + '">Read More</a></div></div >'
        }, this);
        $('.blogs_list').html(html);
    })
})
//blog recommend
$(function () {
    $.get("/web/recommend_top10", function (recommend_data) {
        var str1 = "";
        recommend_data.forEach(function (recommend_item) {
            str1 +='<li><a href="/web/details?id='+recommend_item._id+'">'+recommend_item.title+'</a></li>'
        }, this);
        $('.recommend_blogs').html(str1);
    })
})
//blog hot
$(function () {
    $.get("/web//visit_top10", function (hot_data) {
        var str2 = "";
        hot_data.forEach(function (hot_item) {
            str2 +='<li><a href="/web/details?id='+hot_item._id+'">'+hot_item.title+'</a></li>'
        }, this);
        $('.hot_blogs').html(str2);
    })
})