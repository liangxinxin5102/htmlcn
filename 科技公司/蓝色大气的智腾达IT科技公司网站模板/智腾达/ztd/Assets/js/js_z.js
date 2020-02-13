$(function(){
	var w_w=$(window).width();
	var m_l=(1920-w_w)/2;
	
	$('.nav_m .n_icon').click(function(){
		$(this).siblings('ul').slideToggle();
	});
	
	$('.i_ma .ip_l li:nth-child(3n)').css('margin-right',0+'px');
	$('.i_mb dl:nth-child(3n)').css('margin-right',0+'px');
	$('.s_nav li:last-child').css('border',0+'px');
	$('.pro li:nth-child(2n)').css('border-left','1px dashed #ddd');
	
//滑动门
	$(".tabBox .tabCont:first").css("display","block");
	$(".tabBox .tabNav li").mouseover(function(){
		$(this).siblings("li").removeClass("now");
		$(this).addClass("now");
		$(this).parents(".tabBox").find(".tabCont").css("display","none");
		var i=$(this).index();
		$(this).parents(".tabBox").find(".tabCont:eq("+i+")").css("display","block");
	});
	
})



