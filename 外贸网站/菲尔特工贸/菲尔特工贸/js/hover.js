// JavaScript Document
$(window).load(function(){  
   var s4=$('.sec4_con').width(); 
   $('.sec1_l').height($('.sec1_r').height());
   $('.sec4_con').css("margin-left",-s4/2);
  
   
   $(window).resize(function(){
      var s4=$('.sec4_con').width();
	  $('.sec1_l').height($('.sec1_r').height());
	  $('.sec4_con').css("margin-left",-s4/2);
	  
	        
   })
  	
})


$(function(){
  $('.sec1_r').hover(function(){
	  $(this).find('.sec1_r_bg').stop(true).animate({opacity:"0.6"},300);
	  },function(){
		  $(this).find('.sec1_r_bg').stop(true).animate({opacity:"0"},300);
		  })	
})








