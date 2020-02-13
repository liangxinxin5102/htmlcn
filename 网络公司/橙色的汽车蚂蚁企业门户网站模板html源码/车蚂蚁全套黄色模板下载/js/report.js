// JavaScript Document
$(function(){
	$(".report-pic").each(function(index, element) {
        var moveObj = $(this).find(".pic-list"),
			viewObj = $(this).find(".pic-view"),
			step = $(this).width();
		var length = moveObj.find("li").length-1;
		var viewLi = "",index = 0 ;
		for(var i=0;i<=length;i++){
			viewLi +="<li class='"+ (i==0 ? "cur":"")  +"'></li>"
		}
		viewObj.html(viewLi);
		setInterval(function(){
			move();
		},5000);
		function move(){
			index = index== length ? 0 : (index+1);
			moveObj.stop().animate({left:(index*step*-1)+"px"},200);
			viewObj.find("li").eq(index).addClass("cur").siblings().removeClass("cur");
		}
		
    });
})