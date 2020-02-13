/**
 * Created by www.szfangwei.cn on 15-04-17.
 */
$(document).ready(function(){
//    news_list
    var $line_top='<span class="line line_top"></span>';
    var $line_bottom='<span class="line line_bottom"></span>';
    var $line_left='<span class="line line_left"></span>';
    var $line_right='<span class="line line_right"></span>';
    $(".news_list li").hover(function(){
        $(this).append($line_top,$line_bottom,$line_left,$line_right);
        var wd=$(this).outerWidth(true);
        var hg=$(this).height();
        var time=800;
        $(this).find(".line_top").css({left:-wd,top:0,width:wd,height:1,opacity:0}).animate({left:0,opacity:1},time);
        $(this).find(".line_bottom").css({left:wd,bottom:0,width:wd,height:1,opacity:0}).animate({left:0,opacity:1},time);
        $(this).find(".line_right").css({right:0,top:-hg,width:1,height:hg,opacity:0}).animate({top:0,opacity:1},time);
        $(this).find(".line_left").css({left:0,top:-hg,width:1,height:hg,opacity:0}).animate({top:0,opacity:1},time);
    },function(){
        $(this).find(".line").remove();
    });
    $(".news_seek img").mouseenter(function(){
        $(this).siblings("input").stop().animate({width:200},600).select();
    });
    $(".inside_banner").click(function(e){
        $(this).find(".text").animate({width:0},300);
    });
    $(".news_seek").click(function(e){
        e.stopPropagation();
    });

    //enter搜索
    $('#k').bind('keypress', function(event) {
        if (event.keyCode == "13")
        {
            search_news();
        }
    })
});

//search
function search_news() {
    var k = $("#k").val();
    document.location = "../../../News/search-k=.htm"/*tpa=http://www.szfangwei.cn/News/search?k=*/ + encodeURI(k);
}

