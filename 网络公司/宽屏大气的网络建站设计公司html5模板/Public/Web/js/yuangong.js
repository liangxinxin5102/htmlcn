$(function(){
	var move = -20;
	var zoom = 1.1;
	$(".news_list_yuangong li.li.htm"/*tpa=http://www.szfangwei.cn/Public/Web/js/.news_list_yuangong li.li*/).each(function(){
		var that=this
		$(that).bind({
			mouseenter:function(){
				item4Timer=setTimeout(function(){
					width = $(that).width() * zoom;
					height = $(that).height() * zoom;
					$(that).find('img').animate({'width':width, 'height':height, 'top':move, 'left':move},500);
					$(that).find('div.caption').fadeIn(500);
				},200);
			},
			mouseleave:function(){
				clearTimeout(item4Timer);
				$(that).find('img').animate({'width':$(that).width(), 'height':$(that).height(), 'top':'0', 'left':'0'},500);	
				$(that).find('div.caption').fadeOut(500);
				}
		});
            });
            $(".news_list_yuangong li.li2.htm"/*tpa=http://www.szfangwei.cn/Public/Web/js/.news_list_yuangong li.li2*/).each(function(){
		var that=this
		$(that).bind({
			mouseenter:function(){
				item4Timer=setTimeout(function(){
					width = $(that).width() * zoom;
					height = $(that).height() * zoom;
					$(that).find('div.li2_caption').fadeIn(500);
					//$(that).find('.item4-txt').fadeOut(500);
				},200);
			},
			mouseleave:function(){
				clearTimeout(item4Timer);
				$(that).find('div.li2_caption').fadeOut(500);
				}
		});
	})	
});