/**
 * Created by Administrator on 2015/11/17 0017.
 */
//$('.menulist li').click(function(){
//    $(".menulist li").addClass("mycl");
//});

$(function(){
    $(".menulist li").click(function() {
        $(this).siblings('li').removeClass('mycl');  // 删除其他兄弟元素的样式
        $(this).addClass('mycl');                            // 添加当前元素的样式
    });
});

