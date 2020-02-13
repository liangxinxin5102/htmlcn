$(function(){
    if($('#home-slider').length>0 && $('#home-slider-nav').length>0)
	{
		$('#home-slider').cycle({
			fx: 'fade', //scrollHorz
			speed: 500,
			timeout: 6000,			
			pager: '#home-slider-nav', 
            pagerEvent: 'mouseover',
            pagerAnchorBuilder: function(idx, slide) {	
                return '#home-slider-nav dl:eq(' + idx + ')';
			}
		});
                
        var totalW = parseInt($(window).width());
		//$(".slider-item").css("max-width",totalW+"px");
		$("#home-slider").css("width",totalW+"px");
		
        $('.slider-item img').each(function(){
            var imgObj = $(this);
            var parentBox = $('.slider-item');
            var objImagePreloader = new Image();            
            objImagePreloader.onload = function() {
                width =$(".slider-item img").width();  
				//alert(width+"--"+totalW);
                var leftpos = (totalW-parseInt(width))/2;
                leftpos = leftpos.toFixed(0);
                parentBox.css({
                    'margin-left' : leftpos+'px'
                    
                });
            };
            objImagePreloader.src = $(this).attr('src');
        });
	};
	
	
	 function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        if (elemTop + 50 < docViewBottom) {
            return true
        } else {
            return false
        }
    }
    function animateShow(item, time,callback) {
        if ($(item).attr('init') == 'false'&& isScrolledIntoView($(item).parent()) ){
            $(item).attr('init', 'true');
            setTimeout(function(){
                $(item).fadeIn(800);
				
            },time)
        }
        }
		function animateFade(item, time,callback) {
        if ($(item).attr('init') == 'false'&& isScrolledIntoView($(item).parent()) ){
            $(item).attr('init', 'true');
            setTimeout(function(){
                $(item).animate({opacity:1.0},500);
				
            },time)
        }
        }
		
    $(window).scroll(function () {
		animateFade('.cases_dl',300);
		animateShow('.partners_table',300);
       
    });
    

	
	//$('.img_case').adipoli({
//                'startEffect' : 'transparent',
//                'hoverEffect' : 'boxRandom'
//            });
	
	//$('.img_partner').adipoli({
//                'startEffect' : 'grayscale',
//                'hoverEffect' : 'normal'
//            });
})

function banner_hover(i)
{
	$("#home-slider-nav>dl").each(function(index){
			if(i==index){
			   $(this).addClass("sel");
			}
			else
			{
				 $(this).removeClass("sel");
			}
										   }
    )
}
function banner_out()
{
	$("#home-slider-nav>dl").each(function()
										   {
								  $(this).removeClass("sel");
										   }
    )
}