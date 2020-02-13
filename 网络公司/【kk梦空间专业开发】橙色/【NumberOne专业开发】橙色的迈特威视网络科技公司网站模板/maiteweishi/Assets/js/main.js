$(function(){
	//幻灯片
	var w_width=$(window).width();
	var w_banner=(1920-w_width)/2;
	$('.hot-event .event-item img').css('margin-left','-'+w_banner+'px');
	$('.banner_s img').css('margin-left','-'+w_banner+'px');
	$('.header .top').css('margin-left','-'+w_banner+'px');
	$('.nav li.now').next('li').css('border-left','0px');
	$('.i_about .i_bg').css('left','-'+w_banner+'px');
	//返回顶部
	$(".back_ico").live("click", function(){
		var _this = $(this);
		$('html,body').animate({ scrollTop: 0 });
	});

})
