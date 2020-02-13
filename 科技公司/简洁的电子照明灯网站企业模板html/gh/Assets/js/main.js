$(function(){
	//幻灯片
	var w_width=$(window).width();
	var w_banner=(1920-w_width)/2;
	$('.hot-event .event-item img').css('margin-left','-'+w_banner+'px');
	$('.banner_s img').css('margin-left','-'+w_banner+'px');
	$('.i_boxa li:nth-child(3n)').css('margin-right',0+'px');
	$('.scd_rm .pro li:nth-child(3n)').css('margin-right',0+'px');
})