$(function(){
	//幻灯片
	var w_width=$(window).width();
	var w_banner=(1920-w_width)/2;
	$('.flexslider .slides img').css('margin-left','-'+w_banner+'px');
	$('.banner_s img').css('margin-left','-'+w_banner+'px');
	
	$('.i_mainb .box dl:nth-child(5n)').css('margin-right',0+'px');
	$('.i_pro ul:nth-child(4n)').css('margin-right',0+'px');
	$('.pro_m ul li:nth-child(5n)').css('margin-right',0+'px');
	$('.pro .pro_m:last-child').css('border',0+'px');
	
	$('.p_lei .lei_m').click(function(){
		$(this).siblings('ul').slideToggle();
	});
	$('.p_lei ul li').click(function(){
		var lei=$(this).children('span').html();
		$(this).parents('ul').slideUp();
		$(this).parents('ul').siblings('.lei_m').children('span').html(lei);
	});
});

