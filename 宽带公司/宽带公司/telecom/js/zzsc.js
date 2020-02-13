// JavaScript Document
function b(){	
	t = parseInt(x.css('top'));
	y.css('top','31px');	
	x.animate({top: t - 31 + 'px'},'slow');	//19为每个li的高度
	if(Math.abs(t) == h-31){ //19为每个li的高度
		y.animate({top:'0px'},'slow');
		z=x;
		x=y;
		y=z;
	}
	setTimeout(b,3000);//滚动间隔时间 现在是3秒
}
$(document).ready(function(){
	$('.swap').html($('.news_li').html());
	x = $('.news_li');
	y = $('.swap');
	h = $('.news_li li').length * 31; //19为每个li的高度
	setTimeout(b,3000);//滚动间隔时间 现在是3秒
	
})