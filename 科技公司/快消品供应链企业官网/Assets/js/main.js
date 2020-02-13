$(function(){
	//幻灯片
	var w_width=$(window).width();
	var w_banner=(1920-w_width)/2;
	$('.hot-event .event-item img').css('margin-left','-'+w_banner+'px'		);
	
	$('.nav .now').next('.line').hide();
	$('.nav .now').prev('.line').hide();
	$('.scd_ml .sidenav li:first-child').css('border-top',0+'px');
	$('.scd_ml .sidenav li:last-child').css('border-bottom',0+'px');
	$('.scd_ml .sidenav li.now').prev('li').css('border-bottom',0+'px');
	$('.scd_ml .sidenav li.now').next('li').css('border-top',0+'px');
	
	$('.case dl:nth-child(2n)').css('float','right');
	
	//滑动门
	$(".tabBox .tabCont:first").css("display","block");
	$(".tabBox .tabNav li").mouseover(function(){
		$(this).siblings("li").removeClass("now");
		$(this).addClass("now");
		$(this).parents(".tabBox").find(".tabCont").css("display","none");
		var i=$(this).index();
		$(this).parents(".tabBox").find(".tabCont:eq("+i+")").css("display","block");
	});
	
	$('.system .tabBox .tabNav li:first-child').css('background','none');
})