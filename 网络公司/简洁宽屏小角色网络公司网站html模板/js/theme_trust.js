function isMobile(){
    return (
        (navigator.userAgent.match(/Android/i)) ||
		(navigator.userAgent.match(/webOS/i)) ||
		(navigator.userAgent.match(/iPhone/i)) ||
		(navigator.userAgent.match(/iPod/i)) ||
		(navigator.userAgent.match(/iPad/i)) ||
		(navigator.userAgent.match(/BlackBerry/))
    );
}

  function scrollBanner() {
    scrollPos = jQuery(this).scrollTop();
    jQuery('.mac').css({
      'margin-top' : (scrollPos/1)+"px",
      'opacity' : 1-(scrollPos/500)
    });
	
	//Scroll and fade out the banner text
    jQuery('.ipad').css({
      'margin-top' : -(scrollPos/0.5)+"px" ,
	  'opacity' : 1-(scrollPos/300)
    });
	jQuery('.iphone').css({
      'margin-top' : -(scrollPos/0.2)+"px" ,
	  'opacity' : 1-(scrollPos/200)
    });
	jQuery('.b_text').css({
      'margin-top' : -(scrollPos/1)+"px" ,
	  'opacity' : 1-(scrollPos/200)
    });
	jQuery('.b_text h4').css({
      'margin-bottom' : (scrollPos/1)+"px" ,
	  'opacity' : 1-(scrollPos/100)
    });
	
    //Scroll the background of the banner
    jQuery('.b_1').css({
      'background-position' : 'center ' + (scrollPos/5.5)+"px"
    });  
	jQuery('.b_2').css({
      'background-position' : 'center ' + (scrollPos/10.5)+"px"
    });  
	
	jQuery('.b_2 h2').css({
		//'padding-bottom' : (scrollPos/15)+"px" ,
 	  'opacity' : 0+(scrollPos/400)
    });
	jQuery('.b_2 h1').css({
		'font-size' : (scrollPos/6)+"px" ,
 	  'opacity' : 0+(scrollPos/500)
    });
	jQuery('.b_2 h5').css({
 		
 	  'opacity' : 0+(scrollPos/700)
    });
	jQuery('.ad_1').css({
 		'background-attachment' : 'fixed ', 
      'background-position' : 'center ' + (scrollPos/10)+"px"
    });  
	jQuery('.ad_1Text').css({
      	'font-size' : (scrollPos/24)+"px" ,
 	  'opacity' : 0+(scrollPos/1500)
    });  
	 jQuery('.ad_2').css({
 		'background-attachment' : 'fixed ', 
      'background-position' : 'center ' + (scrollPos/20)+"px"
    }); 
	 
	jQuery('.ad_2 h3 span').css({
      	'font-size' : (scrollPos/44)+"px" ,
 	  'opacity' : 0+(scrollPos/1500)
    });   
	 
	 jQuery('.ab_3').css({
 		'background-attachment' : 'fixed ', 
      'background-position' : 'center ' + (scrollPos/26)+"px"
    }); 
	 
	jQuery('.ab_3 h3').css({
      	'font-size' : (scrollPos/85)+"px" ,
 	  'opacity' : 0+(scrollPos/100)
    });   
	 
	 
	 
	 
	
	
	
	
  }


///////////////////////////////
// Initialize
///////////////////////////////	
	
jQuery.noConflict();
jQuery(document).ready(function(){
	if(!isMobile()) {
		jQuery(window).scroll(function() {	      
	       scrollBanner();	      
		});
	}
});