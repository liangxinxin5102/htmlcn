// JavaScript Document
//nav
$(function(){
  $('.nav li').mouseover(function(){
		$(this).find('dl').stop().slideDown(200);
  });
   $('.nav li').mouseout(function(){
		$(this).find('dl').stop().slideUp(200);
  });
});
$(function(){
  $('.mob-nav').click(function(){
	  if($(this).hasClass('selected')){
		  $(this).removeClass('selected');
		  }
		  else{
		  $(this).addClass('selected');	  
		 }
	 });
});
$(function(){
 $('.mob-nav').click(function(){
	 $('.mob-down').slideToggle(300);
	});
});
//asss
$(function(){ 
   $(".botom-video ul li").click(function(){
		$(this).find('a').each(function(){
		window.location.href = $(this).attr("href");
		})
	});
   $(".top-video dl").click(function(){
		$(this).find('a').each(function(){
		window.location.href = $(this).attr("href");
		})
	});
})
//sz
$(function(){
	$(".sub-testmor").each(function(){
	$(this).find("li").each(function(i){
	$(this).addClass("zx" + (i+1));
});
})
});
