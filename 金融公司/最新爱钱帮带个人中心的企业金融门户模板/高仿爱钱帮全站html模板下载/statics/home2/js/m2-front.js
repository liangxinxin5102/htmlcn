//左侧菜单栏随动
		$(window).scroll(function(){
		if ($(window).scrollTop()>133){
		$(".m2-frontHead").stop().animate({top:"0px"},300);
		}
		else
		{
		if($(window).scrollTop()<133){
			$(".m2-frontHead").stop().css('top',133-$(window).scrollTop());
		}
		}
	});
			