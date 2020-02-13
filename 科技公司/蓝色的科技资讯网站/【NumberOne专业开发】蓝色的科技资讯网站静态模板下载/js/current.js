/**
 * Created by Administrator on 2015/11/13 0013.
 */

$(document).ready( function() {

$("li.mycl2").click(function(){
    $(this).addClass("current2").next("li.mycl2");
    $(this).siblings().removeClass("current2");
});

});
