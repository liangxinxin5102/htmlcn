$(document).ready(function(e) {			
    		t = $('.side-event').offset().top;
    		w = $('.side-event').width();
    		mh = $('.background-public').height();
    		fh = 580;
    		$(window).scroll(function(e){
    			s = $(document).scrollTop();	
    			if(s > t - 50){
    				$('.side-event').css({'position':'fixed','top':'50px','width':w});
    				if(s + fh+ 340 > mh){
    					$('.side-event').css('top',mh-s-fh -290 +'px');	
    				}				
    			}else{
    				$('.side-event').css('position','');
    			}
    		})
    	});