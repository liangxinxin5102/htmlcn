/**
 * Created by Administrator on 2015/11/17 0017.
 */
$(".menulist li").click(function(){
    if($(this).hasClass("mycl")){
        $(this).find("ul").toggle();
    }else{
        $(".menulist li").removeClass("cycl");
        $(this).addClass("mycl");
        $(".menulist  li ul").hide();
        $(this).find("ul").toggle();
    }
});
