// JavaScript Document

$(window).scroll(function(){	
  if($(window).scrollTop()>($('.section2').offset().top-500)){
	  $('.sec2_1').animate({top:"15%",opacity:"1"},600);
	  $('.sec2_2').delay(300).animate({top:"26%",opacity:"1"},600);
	  }
  if($(window).scrollTop()>($('.sec3_top').offset().top-500)){
	  $('.sec3_top>img').animate({top:"0",opacity:"1"},600)
	  }
  if($(window).scrollTop()>($('.pro_box').offset().top-500)){
	  $(".cover_pro").animate({"top":"0"},600);
	  $(".cover_wait").animate({"top":"0"},600);
	  $(".cover_activity").animate({"top":"0"},600);
	  }	
  if($(window).scrollTop()>($('.sec4_top').offset().top-500)){
	  $('.sec4_top>img').animate({top:"0",opacity:"1"},600)
	  }
  if($(window).scrollTop()>($('.sec4_con').offset().top-500)){
	  var ns=$('.news_list').size();
	  for(var i=0; i<ns; i++){
		  $('.news_list_box').eq(i).find('.news_list').delay(i*300).animate({top:"0",opacity:"1"},600)
		  }
	  }
  if($(window).scrollTop()>($('.section5').offset().top-500)){
	  $('.sec5_1').animate({marginLeft:"0",opacity:"1"},600)
	  $('.sec5_2').animate({marginRight:"0",opacity:"1"},600)
	  }	  	  	    		  	  
})



















 