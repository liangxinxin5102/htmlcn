$(function(){
	$(".nav ul li").hover(function(){
	$(this).find(".subNav1").toggle();
	if($(this).hasClass("on")){
		$(this).removeClass("on");
		}else{
		$(this).addClass("on")
		}
	$(this).siblings().removeClass("on").find(".subNav1").stop(true,true).hide();
	})
	$(".nav ul li .subNav1").click(function(e){
	e.stopPropagation();
	})
  });
 