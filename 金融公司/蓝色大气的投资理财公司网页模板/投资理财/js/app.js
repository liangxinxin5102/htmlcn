$(function(){
	$(".backtop").click(function(){$('body,html').animate({scrollTop:0},1000);return false;});
	
	$('.merchants ul li').each(function(){
		var e=$(this);
		e.on('mouseenter',function(){
			$(this).addClass("active").siblings().removeClass("active");
		});
	});
	$('.tab .tab-nav li').each(function(){
		var e=$(this);
		var index=e.index();
		e.on('click',function(){
			$(this).addClass("active").siblings().removeClass("active");
			$(this).closest(".tab").children().children(".item").eq(index).addClass("active").siblings().removeClass("active");
		});
	});
	
	$('.dialog .close').on("click",function(){
		$(this).closest(".dialog").toggleClass("hide");
		$('.mask').toggleClass("hide");
	});

	$(".fixed").each(function(){
		var e=$(this);
		var style=e.attr("data-style");
		var top=e.attr("data-offset-fixed");
		if(top==null){top=e.offset().top;}else{top=e.offset().top - parseInt(top);};
		if(style==null){style="fixed-top";};
		if(style=="fixed-bottom") e.addClass("fixed-bottom");

		$(window).bind("scroll",function(){
			var thistop=top - $(window).scrollTop();
			if(style=="fixed-top" && thistop<0){
				e.addClass("fixed-top");
			}else{
				e.removeClass("fixed-top");
			};

			var thisbottom=top - $(window).scrollTop()-$(window).height();
			if(style=="fixed-bottom" && thisbottom>0){
				e.addClass("fixed-bottom");
			}else{
				e.removeClass("fixed-bottom");
			};
		});

	});
});