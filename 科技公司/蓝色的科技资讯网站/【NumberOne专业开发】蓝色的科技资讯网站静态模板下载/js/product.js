/**
 * Created by Administrator on 2015/11/13 0013.
 */
$(document).ready( function() {
    var $submenu = $('.submenu');
    var $menulist = $('.menulist');
    $submenu.hide();
    $submenu.first().delay(400).slideDown(700);
    $submenu.on('click','li', function() {
        $submenu.siblings().find('li').removeClass('chosen');
        $(this).addClass('chosen');
    });
    $menulist.on('click', 'li', function() {
        $(this).next('.submenu').slideToggle().siblings('.submenu').slideUp();
    });
    $menulist.children('li:last-child').on('click', function() {
        $menulist.fadeOut().delay(500).fadeIn();
    });

    $("li.mycl").click(function(){
        $(this).addClass("current").next("li.mycl").slideToggle(300).siblings("li.mycl").slideUp("slow");
        $(this).siblings().removeClass("current");
    });

    $("li.mycl").click(function(){
        $(this).addClass("current").next("li.mycl").slideToggle(300).siblings("li.mycl").slideUp("slow");
        $(this).siblings().removeClass("current");
    });

});