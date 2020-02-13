jQuery(document).ready(function(){
	
//Scrol
jQuery('#menu li a, #logo').click(function() {
	var elementClicked = jQuery(this).attr("href");
	var destination = jQuery(elementClicked).offset().top;
	jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination-0}, 1000 );		   
	return false;
});	

var current_nav = 'home';

scroll_function = function(){
	
	jQuery(".scrol-page,").each(function(index) {
		var h = jQuery(this).offset().top;
		var y = jQuery(window).scrollTop();
					
		if(y + 360 >= h && y < h + jQuery(this).height() && jQuery(this).attr('id') != current_nav) {
			
			current_nav = jQuery(this).attr('id');
			
			jQuery('#menu a').removeClass('current');
			jQuery('.nav_' + current_nav).addClass('current').show("fast");	
				
		}
	});	
}
jQuery(window).scroll(function(){
		scroll_function();
});

 
//Scrol
//jQuery('#menu a, #logo, .scrol').click(function() {
	//var elementClicked = jQuery(this).attr("href");
	//var destination = jQuery(elementClicked).offset().top;
	//jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination-0}, 1000 );		   
	//return false;
//});	
		
});


 