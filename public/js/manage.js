$(function () {
    //获取博客列表
    $.get("/web", function (data) {
        var html = "";
        data.forEach(function (item) {
            html += '<div class="manage_blog clearfix"><div class="manage_title"><a href="">' + item.title + '</a></div><div class="manage_items float_right"><a class="edit" href="/web/edit/' + item._id + '">修改</a> <a class="delete" href="/web/delete/' + item._id + '">删除</a></div></div>';
        }, this);
        $('#manage_wrapper').html(html);
        //删除确认
        $('.delete').on('click', function () {
            return confirm('确认删除博客?');
        });


    })
    


})