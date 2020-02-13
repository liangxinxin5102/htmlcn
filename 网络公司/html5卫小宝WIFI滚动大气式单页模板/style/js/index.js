$(function(){
    $("#erm").mousemove(function(){
        $(".x_ewm").fadeIn(1200)
        $(".x_ewm2").fadeIn(1200)
    })
    $("#erm").mouseleave(function(){
        $(".x_ewm").fadeOut(1000)
        $(".x_ewm2").fadeOut(1000)
    })
    $(".img_bot").mouseenter(function(){
        $(this).attr("class","img_bot_yes")

    })
    $(".img_bot").mouseleave(function(){
        $(this).attr("class","img_bot")
    })
})