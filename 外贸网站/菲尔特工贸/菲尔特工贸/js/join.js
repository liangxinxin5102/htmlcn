// JavaScript Document

if($(window).width()>767){
$(window).scroll(function(){
  if($(window).scrollTop()>($('.join_liuc').offset().top-600)){
	  $('.liuc1').animate({top:"0",opacity:"1"},600);
	  $('.liuc4').delay(300).animate({top:"0",opacity:"1"},600);
	  $('.liuc2').delay(600).animate({top:"0",opacity:"1"},600);
	  $('.liuc5').delay(900).animate({top:"0",opacity:"1"},600);
	  $('.liuc3').delay(1200).animate({top:"0",opacity:"1"},600);
	  }	  		  	  
})
}else{
	
	
	
$(window).scroll(function(){
  if($(window).scrollTop()>($('.join_liuc').offset().top-600)){
	  $('.liuc1').animate({top:"0",opacity:"1"},600);
	  $('.liuc4').delay(300).animate({top:"-570",opacity:"1"},600);
	  $('.liuc2').delay(600).animate({top:"20",opacity:"1"},600);
	  $('.liuc5').delay(900).animate({top:"-550",opacity:"1"},600);
	  $('.liuc3').delay(1200).animate({top:"40",opacity:"1"},600);
	  }	  		  	  
})
	
	}
