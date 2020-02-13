/**
 * Created by Administrator on 2015/11/13 0013.
 */
$(function(){

    //从底部上升的遮罩效果开始
    $(".con").hover(function(){
        $(this).find(".txt").stop().animate({height:"174px"},200);
        $(this).find(".txt h3").stop().animate({paddingTop:"60px"},200);
    },function(){
        $(this).find(".txt").stop().animate({height:"45px"},200);
        $(this).find(".txt h3").stop().animate({paddingTop:"0px"},200);
    })
//从底部上升的遮罩效果结束

});