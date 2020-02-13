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
	

	
});