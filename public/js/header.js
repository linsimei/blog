

//nav li active style
$(function(){
    var pathname = window.location.pathname;
    $(".nav_item").mouseover(function(){
        $(".nav_item").removeClass("current");
        $(this).addClass("current");
    })
    $(".nav_item").mouseout(function(){
        $(".nav_item").removeClass("current");
        var href = $(".nav_item")[0].getAttribute("href");
        if(href==pathname){
            $(this).addClass("current");
        } else {
            $(this).removeClass("current");
        }
    })
})