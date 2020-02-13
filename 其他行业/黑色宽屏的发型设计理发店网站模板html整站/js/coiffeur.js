/*jslint browser: true*/
/*jslint white: true */
/*global $,jQuery,headerType,Parallax,alert,$WP_AJAX_URL,$WP_IS_HOME,$WP_HOME_URL,addthis*/

/* Coiffeur WordPress Theme Main JS File */

/**
* Call Close Fancybox
*/
function close_fancybox(){
	"use strict";
	jQuery.fancybox.close();
}

/* 
Some of dynamic elements like essential grid are not
sizing correctly when you refresh the page and jump to
another tab and back. Following handlers will fix it.
*/
window.onblur = function(){ jQuery(window).resize(); }  
window.onfocus = function(){ jQuery(window).resize(); }

/**
* Read cookie
*
* @key - Cookie key
*/
function getCookieValue(key) {
	"use strict";
    var currentcookie = document.cookie, firstidx, lastidx;
    if (currentcookie.length > 0)
    {
        firstidx = currentcookie.indexOf(key + "=");
        if (firstidx !== -1)
        {
            firstidx = firstidx + key.length + 1;
            lastidx = currentcookie.indexOf(";", firstidx);
            if (lastidx === -1)
            {
                lastidx = currentcookie.length;
            }
            return decodeURIComponent(currentcookie.substring(firstidx, lastidx));
        }
    }
    return "";
}

/**
* Cookie checker for like system
*
* @post_id - WordPress post ID
*/
function check_favorite_like_cookie(post_id) {
	"use strict";	
	var str = getCookieValue( "post_id" );
	if(str.indexOf("[" + post_id + "]") > -1) {
		return true;
	}
	
	return false;
}

/**
* Cokie writer for like system
*
* @post_id - WordPress post ID
*/
function write_favorite_like_cookie(post_id) {
	"use strict";	
	var now = new Date();
	now.setMonth( now.getYear() + 1 ); 
	post_id = "[" + post_id + "]," + getCookieValue("post_id");
	document.cookie="post_id=" + post_id + "; expires=" + now.toGMTString() + "; path=/; ";
}

/**
* Like buttons handler
*
* @post_id - WordPress post ID
* @p_post_type
* @p_vote_type
* @$obj
*/
function ajax_favorite_like(post_id, p_post_type, p_vote_type, $obj) {
	"use strict";	
	if( !check_favorite_like_cookie( post_id ) ) { //check, if there is no id in cookie
		jQuery.ajax({
			url: $WP_AJAX_URL,
			data: { action: 'ozy_ajax_like', vote_post_id: post_id, vote_post_type: p_post_type, vote_type: p_vote_type },
			cache: false,
			success: function(data) {
				//not integer returned, so error message
				if( parseInt(data,0) > 0 ){
					write_favorite_like_cookie(post_id);
					jQuery('span', $obj).text(data);
				} else {
					alert(data);
				}
			},
			error: function(MLHttpRequest, textStatus, errorThrown){  
				alert("MLHttpRequest: " + MLHttpRequest + "\ntextStatus: " + textStatus + "\nerrorThrown: " + errorThrown); 
			}  
		});
	}
}

/**
* Popup window launcher
*
* @url - Url address for the popup window
* @title - Popup window title
* @w - Width of the window
* @h - Height of the window
*/
function ozyPopupWindow(url, title, w, h) {
	"use strict";
	var left = (screen.width/2)-(w/2), top = (screen.height/2)-(h/2);
	return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
}

/**
* To check iOS devices and versions
*/
function ozyGetOsVersion() {
	"use strict";
    var agent = window.navigator.userAgent.toLowerCase(),
        start = agent.indexOf( 'os ' );

    if ( /iphone|ipod|ipad/.test( agent ) && start > -1 ) {
        return window.Number( agent.substr( start + 3, 3 ).replace( '_', '.' ) );
    }
   
	return 0;
}

/**
* ozy_full_row_fix
* 
* Set sections to document height which matches with selector
*/
function ozy_full_row_fix() {
	"use strict";
	jQuery('.ozy-custom-fullheight-row').each(function() {
		jQuery(this).css('min-height', jQuery(window).innerHeight() - ((jQuery(this).outerHeight() - jQuery(this).height())) + 'px' );
    });
}

/**
* ozy_floating_box_init
*
* Floating box compnent fix
*/
function ozy_floating_box_init() {
	"use strict";
	setTimeout(function(){
		jQuery('.ozy-floating-box').each(function() {
			var h = jQuery(this).parents('.wpb_row').css('min-height') !== '0px'? jQuery(this).parents('.wpb_row').css('min-height') : jQuery(this).parents('.wpb_row').height()+'px';
			jQuery(this).css('height', h);
		});
		
	}, (parseInt(ozyGetOsVersion()) <= 0 ? 0 : 1000));
}

function ozy_fix_row_video(){
	"use strict";
	if(parseInt(ozyGetOsVersion()) <= 0) {
		jQuery('.wpb_row>video').each( function() {
			var videoAspectRatio,viewportWidth,viewportHeight,viewportAspectRatio;
			videoAspectRatio = jQuery(this).outerWidth() / jQuery(this).outerHeight();
			viewportWidth = jQuery(this).parent('div.wpb_row').outerWidth();
			viewportHeight = jQuery(this).parent('div.wpb_row').outerHeight();
			viewportAspectRatio = viewportWidth / viewportHeight;
			if (viewportAspectRatio > videoAspectRatio) {
				// Very-wide viewport, so use the width
				jQuery(this).css({width: viewportWidth + 'px', height: 'auto'});
			}else {
				// Very-tall viewport, so use the height
				jQuery(this).css({width: 'auto', height: viewportHeight + 'px'});
			}			
		});
	}
}

function ozy_share_button() {
	"use strict";
	jQuery(document).on('click', '.post-submeta>div>div.button>a', function(e) {
		e.preventDefault();
		ozyPopupWindow(jQuery(this).attr('href'), 'Share', 640, 440);		
	});	
}

/**
* ozy_hash_scroll_fix
*
* Check if there is a hash and scrolls to there, onload
*/
function ozy_hash_scroll_fix() {
	"use strict";
	setTimeout(function(){
	if(window.location.hash) {
		var hash = window.location.hash;
		if(jQuery(hash).length && !jQuery(hash).hasClass('real3dflipbook')) {
			jQuery('html,body').animate({scrollTop: jQuery(hash).offset().top}, 1600, 'easeInOutExpo');
		}
	}}, 200);	
}

// Header Padding Fix
function ozy_fix_header_padding_height() {
	if(jQuery(window).width()<=1024) {
		jQuery('#main').css('margin-top', jQuery('#header').outerHeight(true) + 'px');
	}else{
		jQuery('#main').css('margin-top', '');
	}
}

// Function Primary Menu Fix for Mobile Devices
function ozy_primary_menu_fix() {
	if(!jQuery('body').hasClass('ozy-alternate-menu') && jQuery(window).width() < 960 ) {
		jQuery('body').addClass('ozy-alternate-menu ozy-page-locked ozy-menu-script');
	}else if(jQuery('body').hasClass('ozy-menu-script') && jQuery(window).width() > 960) {
		jQuery('body').removeClass('ozy-alternate-menu ozy-page-locked ozy-menu-script');
	}
}

/* Resets windows scroll position if there is a hash to make it work smooth scroll*/
var windowScrollTop = jQuery(window).scrollTop();
window.scrollTo(0, 0);
setTimeout(function() {
	"use strict";
	window.scrollTo(0, windowScrollTop);
}, 1);

jQuery(window).resize(function() {
	"use strict";
	
	ozy_full_row_fix();
	ozy_floating_box_init();
	ozy_fix_row_video();
	/*ozy_fix_footer_widget_height();*/
	ozy_primary_menu_fix();
	
	ozy_fix_header_padding_height();

	if('classic' === headerType.menu_type) { // superfish
		jQuery('ul.sf-menu').supersubs({minWidth:8,maxWidth:16,extraWidth:1}).superfish({
			delay:       200,
			animation:   {height:'show'},
			speed:       125,
			autoArrows:  true
		});
	}
});

jQuery(window).load(function(){
	if (jQuery().masonry) {
		/* Search page */
		if(jQuery('body.search-results').length) {
			jQuery('body.search-results .post-content>div').imagesLoaded( function(){				
				jQuery('body.search-results .post-content>div').masonry({
					itemSelector : 'article.result',
					gutter : 20
				});
			});
		}
		
		/*pag-masonry-gallery.php*/
		if(jQuery('body.page-template-page-masonry-gallery-php').length) {
			jQuery('.ozy-grid-gallery div.thumb>a').imagesLoaded( function(){				
				jQuery('.ozy-masonry-gallery').masonry({
					itemSelector : 'div.thumb',
					gutter : 0,
					animate: true
				});
			});
		}
	}
	
	if(jQuery('#ozy_announcement_window').length>0) {
		jQuery.fancybox({
			'content' : jQuery("#ozy_announcement_window").html(),
			helpers:  {
				overlay: {
					locked: false
				}
			}
		});		
	}	
});

jQuery(document).ready(function($) {
	"use strict";
	
	//*******DEMO******//
	setTimeout(function(){
		$('#demo-switcher').animate({bottom: '-300px'}, 600, 'easeInOutExpo', function(){ $('#demo-switcher').css('width', '200px'); });
	}, 1000);
	$('#demo-switcher>a').click(function(e) {		
		var bottom_pos = 0;
		if(parseInt($('#demo-switcher').css('bottom'))===0) {
			bottom_pos = '-300';
			$('#demo-switcher').css('width', '200px');
		}else{
			$('#demo-switcher').css('width', '100%');
		}
		$('#demo-switcher').animate({bottom: bottom_pos + 'px'}, 600, 'easeInOutExpo');
		e.preventDefault();
	});
	//*******DEMO END******//
	
	var ozyIosVersion;
	ozyIosVersion = parseInt(ozyGetOsVersion());	

	ozy_share_button();

	ozy_hash_scroll_fix();
	
	ozy_full_row_fix();
	
	ozy_floating_box_init();
	
	ozy_primary_menu_fix();
	
	ozy_fix_header_padding_height();	

	/* Primary navigation menu init*/
	jQuery('ul.sf-menu').supersubs({minWidth:8,maxWidth:16,extraWidth:1}).superfish({
		delay:       200,
		animation:   {height:'show'},
		speed:       125,
		autoArrows:  true
	});
		
	/* fix for if last item is not side menu */
	$('#nav-primary>nav>div>ul>li:visible:last>a').css('padding', '0');
	
	/* Checks elements matches with hashes or not */
	function ozy_click_hash_check($this) {
		if (location.pathname.replace(/^\//,'') == $this.pathname.replace(/^\//,'') 
			|| location.hostname == $this.hostname) {
	
			var target = $($this.hash);
			target = target.length ? target : $('[name=' + $this.hash.slice(1) +']');
		   	if (target.length) {
				$('html,body').animate({
					 scrollTop: target.offset().top
				}, 1600, 'easeInOutExpo');
				return false;
			}
		}
	}
	
	/* Menu Link */	
	$('#nav-primary>nav>div>ul>li>a[href*=#]:not([href=#])').click(function(e) {
		e.preventDefault();
		ozy_click_hash_check(this);
	});		

	/* full page */
	if (jQuery().fullpage) {
		$('#content.full-row-slider').fullpage({
			verticalCentered: false,
			'css3': false,
			'scrollingSpeed': 1e3,
			'easing': 'easeInOutCubic',
			anchors: fullPageParams.anchors.split(','),
			sectionSelector: '#full-page>.wpb_row',
			slideSelector: '#full-page>.wpb_row>div>div>div>.wpb_row',
			'navigation': true,
			'navigationPosition': 'right',
			//slidesNavigation: false
			afterLoad : function(anchorLink, index)	{
				var $elm = $('#full-page>.wpb_row').eq(index-1);
				$elm.find('.wpb_appear').addClass('wpb_start_animation');
			},
			onLeave : function(index, nextIndex, direction)	{
				var $elm = $('#full-page>.wpb_row').eq(index-1);
				setTimeout(function(){
					$elm.find('.wpb_appear').removeClass('wpb_start_animation');
				}, 1000);
			}
		});
	}
	
	/* page-grid-gallery.php */
	
	//ttp://www.8bit-code.com/tutorials/direction-aware-image-gallery-effect
	if($('body.page-template-page-grid-gallery-php').length>0) {
		$(function () {
			$(".ozy-grid-gallery li").on("mouseenter mouseleave", function(e){
				var w = $(this).width();
				var h = $(this).height();
				var x = (e.pageX - this.offsetLeft - (w/2)) * ( w > h ? (h/w) : 1 );
				var y = (e.pageY - this.offsetTop  - (h/2)) * ( h > w ? (w/h) : 1 );
				var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180 ) / 90 ) + 3 )  % 4;
				switch(direction) {
					case 0:
						var slideFrom = {"top":"-100%", "right":"0"};
						var slideTo = {"top":0};
						var imgSlide = "0, 60";
						break;
					case 1: //
						var slideFrom = {"top":"0", "right":"-100%"};
						var slideTo = {"right":0};
						
						var imgSlide = "-60, 0";
						break;
					case 2:
						var slideFrom = {"top":"100%", "right":"0"};
						var slideTo = {"top":0};
						var imgSlide = "0, -60";
						break;
					case 3:
						var slideFrom = {"top":"0", "right":"100%"};
						var slideTo = {"right":0};
						var imgSlide = "60, 0";
					break;
				}
				if( e.type === 'mouseenter' ) {
					var element = $(this);
					element.find(".info").removeClass("transform").css(slideFrom);
					element.find("img").addClass("transform").css("transform","matrix(1, 0, 0, 1,"+imgSlide+")");
					setTimeout(function(){element.find(".info").addClass("transform").css(slideTo);},1);
				}else {
					var element = $(this);
					element.find(".info").addClass("transform").css(slideFrom);
					element.find("img").removeClass("transform").css("transform","matrix(1, 0, 0, 1,"+imgSlide+")");
					setTimeout(function(){element.find("img").addClass("transform").css("transform","matrix(1, 0, 0, 1,0,0)");},1);			
				}		
			});		
		});	
	}
	
	// Search Button & Stuff
	var main_margin_top = $('#main').css('margin-top');
	$(document).on('touchstart, click', '#ozy-close-search,.menu-item-search>a', function(e) {
		if($('#top-search').hasClass('open')){
			$('#top-search').removeClass('open').delay(200);
			$('#main').animate({'margin-top': parseInt(main_margin_top) + 'px'}, 300, 'easeInOutExpo');
			$('#top-search').animate({height:'0px'}, 200, 'easeInOutExpo');
			//$('#top-search').animate({height:'0px', opacity:0}, 200, 'easeInOutExpo',function(){$('#top-search>form>input').focus();$('#top-search').removeClass('open');});
		}else{
			$('#main').animate({'margin-top':  (parseInt(main_margin_top) + 120) + 'px'}, 300, 'easeInOutExpo');
			$('#top-search').animate({height:'120px', opacity:1}, 200, 'easeInOutExpo',function(){$('#top-search>form>input').focus();$('#top-search').addClass('open');});
		}
		e.preventDefault();
	});
	
	/* Sticky Menu, only works on desktop devices */
	if(!$('body').hasClass('ozy-alternate-menu') && !$('body').hasClass('ozy-menu-script')) {
		var headerMenuFixed = false;	
		$(window).scroll(function() {
			if($(this).scrollTop() >= 50) {
				if(!headerMenuFixed) {
					$('body').addClass('ozy-alternate-menu');
				}
			} else {
				$('body').removeClass('ozy-alternate-menu');
				headerMenuFixed = false;
			}
		});	
	}
	
	var sidr_animated_button = jQuery('#sidr-menu').find('button');
	jQuery('#sidr-menu').sidr( { 
		side: (headerType.menu_align !== 'center' ? headerType.menu_align : 'right'),
		name: 'sidr',
		displace: !$('body').hasClass('ozy-page-model-boxed'),
		speed: 400,
		onOpen: function() {
			if (jQuery().royalSlider) {
				$('#sidr .ozy-testimonials:not(.fixed)').each(function() {
					var slider = $(this).data('royalSlider');
					slider.updateSliderSize(true);
					$(this).addClass('fixed');
				});
			}			
			setTimeout(function(){ sidr_animated_button.addClass('close') }, 300);			
		},
		onClose: function() {
			setTimeout(function(){ sidr_animated_button.removeClass('close') }, 300);
		}
	} );

	$(window).resize(function() {
		$.sidr('close', 'sidr'); // Close
    });
	
	$(document).on("click", function(e) {
		if(parseInt(ozyIosVersion) === 0 || 
		parseInt(ozyIosVersion) >= 7 ) {
			var sidr_div = $("#sidr");
			if (!sidr_div.is(e.target) && !sidr_div.has(e.target).length) {
				$.sidr('close', 'sidr'); // Close
			}
		}
	});
	
	/* on mobile devices */
	$(document).on("touchstart", function(e) {
		var sidr_div = $("#sidr");
		if (!sidr_div.is(e.target) && !sidr_div.has(e.target).length) {
			$.sidr('close', 'sidr'); // Close
		}		
	});

	/* this block help to sidr work as expected on iOS devices. */
    if (parseInt(ozyIosVersion) > 0) {
		jQuery('#sidr-menu').click(function(e){
			if($(this).data('opened') == '1') {
				if(parseInt(ozyIosVersion) < 7) { //ios 6 need special process, since header and footer position as fixed
					$('#header,#footer').css('left', '0px');
				}
				$.sidr('close', 'sidr'); // Close
				$(this).data('opened', '0');
			}else{
				if(parseInt(ozyIosVersion) < 7) { //ios 6 need special process, since header and footer position as fixed
					$('#header,#footer').css('left', '-260px');
				}
				$.sidr('open', 'sidr'); // Open
				$(this).data('opened', '1');
			}
			e.preventDefault();
		});
	}	
	
	/**
	* Sidr (side menu) 'Custom Menu' widget handler, turns it into an accordion menu
	*/
	$('#sidr .menu li a').click(function (e) {
		$(this).parent('li').toggleClass('close');
		if($(this).parent('li').hasClass('menu-item-has-children')) {
			e.preventDefault();
		}
		var ullist = $(this).parent().children('ul:first');
		ullist.slideToggle();
	}).click();	
	
	function ozy_visual_stuff() {
		/* copies Email Address label of Mail Chimp form into Subscribe field as a placeholder */
		if($('#mc_signup_form').length>0) {
			$('input[name="mc_mv_EMAIL"]').each(function() {
				$(this).attr('placeholder', $('.mc_header_email').first().text() ); 
            });			
			$('#mc_signup_submit.button').removeClass('button');
		}
	
		/* row scrolling effect */
		$('.wpb_row[data-bgscroll]').each(function() {
			var params = $(this).data('bgscroll').split(',');
			$(this).ozyBgScroller({direction:params[0], step:params[1]});
		});
	
		/* flipbox requires to parent has overflow hidden on chrome to work as expected */
		$('.flip-container').each(function() {
			$(this).parents('.wpb_row').css('overflow', 'hidden');
		});
	
		/* title with icon connected border color fix */
		var inline_style = '';
		$('.title-with-icon-wrapper.connected').each(function() {
			inline_style += '#' + $(this).attr('id') + ':before{border-color:'+ $(this).data('color') +';}';
		});
		if(inline_style) { $('head').append('<style>'+ inline_style +'</style>'); }
		
		if(ozyIosVersion <= 0) {
			$('.wpb_row.ozy-custom-row.parallax').each( function() { //,.wide-row-inner.parallax
				$(this).rParallax("center", 0.3, true);
			});
			/* bouncing arrow row bottom button */
			$('.row-botton-button').addClass('animation animated bounce');
		}else{
			$('.wpb_row.ozy-custom-row.parallax').each( function() {
				$(this).css('background-repeat','repeat');
			});
		}
		
		/* Blog Share Button*/
		$(document).on('click', '.post-submeta>a.post-share', function(e) {
			if($(this).data('open') !== '1') {
				$(this).data('open', '1').next('div').stop().animate({'margin-left': '0', opacity: 'show'}, 300, 'easeInOutExpo');
			}else{
				$(this).data('open', '0').next('div').stop().animate({'margin-left': '30px', opacity: 'hide'}, 300, 'easeInOutExpo');
			}
			e.preventDefault();
		});
		$(document).on("click", function(e) {
			var post_share_button = $(".post-submeta>a.post-share");
			if (!post_share_button.is(e.target) && !post_share_button.has(e.target).length) {
				post_share_button.data('open', '0').next('div').stop().animate({'margin-left': '30px', opacity: 'hide'}, 300, 'easeInOutExpo');
			}
		});
		
		/* Tooltip plugin init */	
		$(function(){
			$('.tooltip-top').tooltipsy({className:'tooltipsy white', offset: [0, 20]});
			$('.tooltip').tooltipsy();
		});
	
		/* Inline royal slider init */	
		if (jQuery().royalSlider) {
			$('.postGallerySlider').royalSlider({
				transitionSpeed: 800,
				slidesSpacing: 0,
				autoHeight: true,
				autoScaleSlider: false,
				arrowsNav: true,
				arrowsNavAutoHide: false,
				fadeinLoadedSlide: false,
				controlNavigationSpacing: 0,
				imageScaleMode: 'fill',
				imageAlignCenter: true,
				blockLoop: true,
				loop: false,
				numImagesToPreload: 2,
				keyboardNavEnabled: true,
				block: {
					delay: 400
				},
				autoPlay: {
					enabled: true,
					pauseOnHover: true,
					delay: 3300
				}
			});
		}
				
		/*google maps scroll fix*/
		$('.wpb_map_wraper').each(function() {
			$(this).append(
				$('<div class="gmaps-cover"></div>').click(function(){ $(this).remove(); })
			);
        });
		
		/* Fancy Blog List */
		$('.ozy-fancyaccordion-feed>a').click(function(e){
			e.preventDefault();
			var $that = $(this).find('.plus-icon'), ullist = $(this).next('div.panel');
	
			if($that.hasClass('open')) {$that.removeClass('open').addClass('close');}else{$that.removeClass('close').addClass('open');}
			if(!$(this).hasClass('open')) {
				$(this).parent('div.ozy-fancyaccordion-feed').find('a.open').each(function() {
					$(this).removeClass('open');
					$(this).next('div.panel').slideToggle(400, 'easeInOutExpo');
					$(this).find('.plus-icon').removeClass('open').addClass('close');
				});
			}
			$(this).toggleClass('open');
			ullist.slideToggle(400, 'easeInOutExpo');
		});		
	}
	
	ozy_visual_stuff();
	
	function ozy_vc_components() {
		/* Textilate */
		$('.ozy-tlt').each(function() {        
			$(this).textillate({
				minDisplayTime: $(this).data('display_time'), 
				selector: '.ozy-tlt-texts', 
				loop: true, 
				in: { 
					effect: $(this).data('in_effect'),
					sync: ($(this).data('in_effect_type') == 'sync' ? true:false), 
					shuffle: ($(this).data('in_effect_type') == 'shuffle' ? true:false), 
					'reverse': ($(this).data('in_effect_type') == 'reverse' ? true:false), 
					sequence: ($(this).data('in_effect_type') == 'sequence' ? true:false)
				},
				out: { 
					effect: $(this).data('out_effect'),
					sync: ($(this).data('out_effect_type') == 'sync' ? true:false), 
					shuffle: ($(this).data('out_effect_type') == 'shuffle' ? true:false), 
					'reverse': ($(this).data('out_effect_type') == 'reverse' ? true:false), 
					sequence: ($(this).data('out_effect_type') == 'sequence' ? true:false)
				} 			
			});
		});
		
		/* Icon Shadow */
		$('.title-with-icon-wrapper>div>span[data-color],.ozy-icon[data-color]').flatshadow({angle: "SE", fade: false, boxShadow: false });
		
		/* Morph Text */
		$('.ozy-morph-text').each(function() {
			$(this).find(".text-rotate").Morphext({
				animation: $(this).data('effect'),
				separator: $(this).data('separator'),
				speed: $(this).data('speed')
			});	
		});		
		
		/* Owl Carousel */
		$('.ozy-owlcarousel').each(function() {
			var $owl = $(this);
			$owl.owlCarousel({
				lazyLoad : true,
				autoPlay: $(this).data('autoplay'),
				items : $(this).data('items'),
				singleItem : $(this).data('singleitem'),
				slideSpeed : $(this).data('slidespeed'),
				autoHeight : $(this).data('autoheight'),
				//paginationSpeed: $(this).data('autoheight'),
				itemsDesktop : [1199,3],
				itemsDesktopSmall : [979,3],
				addClassActive: true,
				navigation: ($owl.hasClass('single') ? true : false),
				navigationText : ($owl.hasClass('single') ? ['<i class="oic-left-open-mini"></i>','<i class="oic-right-open-mini"></i>'] : false),
				//afterAction : ($owl.hasClass('single') ? owlAfterAction : null),
				afterInit:function(elem){
					owlCreateBar(this);
					setTimeout(function(){ $owl.find('.owl-item>.item').css({'width': '', 'height': ''}); }, 3000);
				},
				afterLazyLoad: function() {
					
				},
				afterUpdate:function(elem){
					owlCreateBar(this);
					owlMoveBar(this, elem);
					$(window).trigger('resize');
				},
				afterMove:function(elem){
					owlMoveBar(this, elem);				
				}				
			});
		});
		function owlAfterAction() {
			//$(this.owl.userItems.context).find('.owl-item').removeClass('active').eq(this.owl.currentItem).addClass('active');
		}
		function owlCreateBar(owl){
			var owlPagination = owl.owlControls.find('.owl-pagination');
			owlPagination.append( "<span class='progressbar'></span>" );
	  	}	  
	  	function owlMoveBar(owl, elem){
			var owlPagination = owl.owlControls.find('.owl-pagination');
			var ProgressBar = owlPagination.find('.progressbar');
			var currentIndex = owlPagination.find($('.active')).index(); 
			var totalSlide = $(elem).find($('.owl-item')).length;
			ProgressBar.css({width: ( currentIndex * 100 / (totalSlide-1) ) + '%' });
	  	}
	
		/* Counter */
		if ('undefined' !== typeof jQuery.fn.waypoint) {
			jQuery('.ozy-counter>.timer').waypoint(function() {
				if(!$(this).hasClass('ran')) {
					$(this).addClass('ran').countTo({
						from: $(this).data('from'),
						to: $(this).data('to'),
						speed: 5000,
						refreshInterval: 25,
						sign: $(this).data('sign'),
						signpos: $(this).data('signpos')
					});
				}
			},{ 
				offset: '85%'
			});
		}

		/* Google Map */
		if ('undefined' !== typeof jQuery.fn.prettyMaps) {
			$('.ozy-google-map').each(function(index, element) {
				$(this).parent().append(
					$('<div class="gmaps-cover"></div>').click(function(){ $(this).remove(); })
				);
				$(this).prettyMaps({
					address: $(this).data('address'),
					zoom: $(this).data('zoom'),
					panControl: true,
					zoomControl: true,
					mapTypeControl: true,
					scaleControl: true,
					streetViewControl: true,
					overviewMapControl: true,
					scrollwheel: true,
					image: $(this).data('icon'),
					hue: $(this).data('hue'),
					saturation: $(this).data('saturation'),
					lightness: $(this).data('lightness')
				});		
			});
		}

		/* Before / After */
		jQuery('.ozy-before_after').imagesLoaded(function() {
			if (jQuery().twentytwenty) { jQuery(".ozy-before_after").twentytwenty().css('visibility','visible').hide().fadeIn('slow'); }
		});
		
		/* Royal Slider */	
		if (jQuery().royalSlider) {
			
			$('.visibleNearby').royalSlider({
				slidesSpacing: 0,
				addActiveClass: true,
				arrowsNav: false,
				controlNavigation: 'none',
				autoScaleSlider: false,
				loop: true,
				fadeinLoadedSlide: true,
				globalCaption: true,
				keyboardNavEnabled: true,
				globalCaptionInside: false,
				visibleNearby: {
					enabled: true,
					centerArea: 0.5,
					center: true,
					breakpoint: 650,
					breakpointCenterArea: 0.64,
					navigateByCenterClick: true
				},
				autoPlay: {
					enabled: true,
					pauseOnHover: true,
					delay: 1300
				}
			}).data('royalSlider');	
			
			$('.ozy-testimonials').royalSlider({
				slidesSpacing: 0,
				autoScaleSlider:false,
				autoHeight: true,
				imageScaleMode: 'none',
				arrowsNav: false,
				fadeinLoadedSlide: false,
				controlNavigationSpacing: 0,
				controlNavigation: 'bullets',
				imageAlignCenter:false,
				loop: false,
				loopRewind: true,
				numImagesToPreload: 2,
				keyboardNavEnabled: false,
				usePreloader: false,
				autoPlay: {
					enabled: true,
					pauseOnHover: true,
					delay: 3300
				}
			});		
			
			$('.ozy-slider.auto-height-slider').each(function() {
				$(this).royalSlider({
					slidesSpacing: 0, 
					transitionSpeed: 800, 
					autoHeight: true,	
					autoScaleSlider:false, 
					arrowsNav: true, 
					arrowsNavAutoHide: false, 
					fadeinLoadedSlide: false,	
					controlNavigationSpacing: 0, 
					controlNavigation: 'bullets', 
					imageScaleMode: 'fill', 
					imageAlignCenter:false, 
					blockLoop: true, 
					loop: false, 
					numImagesToPreload: 2, 
					keyboardNavEnabled: true,
					block: {
						delay: 400
					},
					autoPlay: {
						enabled: true,
						pauseOnHover: true,
						delay: 1300
					}
				});
            });
			
			$('.ozy-slider.auto-height-slider-vertical').royalSlider({
				slidesSpacing: 0,
				arrowsNav: true,
				arrowsNavAutoHide: false,
				fadeinLoadedSlide: true,
				controlNavigation: 'none',
				imageScaleMode: 'fill',
				imageAlignCenter:true,
				loop: false,
				loopRewind: true,
				numImagesToPreload: 4,
				slidesOrientation: 'vertical',
				keyboardNavEnabled: true, 
				video: {
					autoHideArrows:true,
					autoHideControlNav:true
				},
				autoScaleSlider: true
			});
			
			$('.ozy-slider.fixed-slider').royalSlider({
				slidesSpacing: 0,
				transitionSpeed: 800,
				autoHeight: false,
				autoScaleSlider:false,
				arrowsNav: true,
				arrowsNavAutoHide: false,
				fadeinLoadedSlide: false,
				controlNavigationSpacing: 0,
				controlNavigation: 'bullets',
				imageScaleMode: 'fill',
				imageAlignCenter:false,
				blockLoop: true,
				loop: false,
				numImagesToPreload: 2,
				keyboardNavEnabled: true, 
				block: {
					delay: 400
				},
				autoPlay: {
					enabled: true,
					pauseOnHover: true,
					delay: 1300
				}
			});		
		}		
	}
	
	ozy_vc_components();
	
	/* Check if section ID and menu target is match */
	$('.wpb_row').bind('inview', function (event, visible) {
		//console.log(event);
		var $elm = $('#nav-primary a[href*=#'+ jQuery(this).attr('id') +']:not([href=#])').parent();
		if (visible == true) {
			$elm.addClass('current_page_item');
		}else{
			$elm.removeClass('current_page_item');
		}
	});
	
	/* Fix Element min-height */
	$('.ozy-custom-fullheight-row').each(function() {
		$(this).css('min-height', $(window).innerHeight() - (($(this).outerHeight() - $(this).height())) + 'px' );
    });
	
	/* Contact Form 7 Date Time Picker */
	if ('undefined' !== typeof jQuery.fn.datetimepicker) {
		$('input.datetimepicker').datetimepicker({minDate:0,minTime:0});
	}

	function ozy_click_hash_check($this) {
		if (location.pathname.replace(/^\//,'') == $this.pathname.replace(/^\//,'') 
			|| location.hostname == $this.hostname) {
	
			var target = $($this.hash);
			target = target.length ? target : $('[name=' + $this.hash.slice(1) +']');
		   	if (target.length) {
				$('html,body').animate({
					 scrollTop: target.offset().top - ($('#header').height())
				}, 1600, 'easeInOutExpo');
				return false;
			}
		}
	}
	
	/* Drag scroll to section whenever an anchor clicked with mathcing section ID */
	$('#content a.row-botton-button[href*=#]:not([href=#]), .master-slider a.ms-layer[href*=#]:not([href=#])').click(function(e) {
		e.preventDefault();
		if($('body').hasClass('page-template-page-row-slider-php')) {
			$.fn.fullpage.moveSectionDown();
		}else{
			ozy_click_hash_check(this);
		}
	});

	/* Waypoint animations */
	if ('undefined' !== typeof jQuery.fn.waypoint) {
	    jQuery('.ozy-waypoint-animate').waypoint(function() {
			jQuery(this).addClass('ozy-start-animation');
		},{ 
			offset: '85%'
		});
	}
	
	/* Blog post like function */
	$(document).on('click', '.blog-like-link', function(e) {
		ajax_favorite_like($(this).data('post_id'), 'like', 'blog', this);
		e.preventDefault();
    });
	
	/* FancyBox initialization */
	$('.woocommerce-page a.zoom').each(function() { $(this).attr('rel', 'product-gallery'); }); //WooCommerce Version 2.1.6 fancybox fix
	$(".wp-caption>p").click(  function(){ jQuery(this).prev('a').attr('title', jQuery(this).text()).click(); } ); //WordPress captioned image fix
	$(".fancybox, .wp-caption>a, .woocommerce-page .zoom,.single-image-fancybox a").fancybox({
		beforeLoad: function() {
		},
		padding : 0,
		helpers		: {
			title	: { type : 'inside' },
			buttons	: {}
		}
	});
	$('.fancybox-media').fancybox({openEffect  : 'none',closeEffect : 'none',helpers : {title	: { type : 'inside' }, media : {}}});
	
	$('.menu-item-wc').click(function(e){
		e.preventDefault();
		$("#woocommerce-lightbox-cart-wrapper").addClass("active");
	});	

	$('#woocommerce-lightbox-cart #woocommerce-cart-close,#woocommerce-lightbox-cart-wrapper').click(function(e) {
		$("#woocommerce-lightbox-cart-wrapper").removeClass("active");
    });
	
	/* Back to top button */
	$(window).scroll(function() {
		if($(this).scrollTop() >= 100) {
			$('#to-top-button').stop().animate({bottom:'32px', opacity: 1}, 200, 'easeInOutExpo');
		} else {
			$('#to-top-button').stop().animate({bottom:'-32px', opacity: 0}, 200, 'easeInOutExpo');
		}
	});

	$('#to-top-button').click(function(e) {
		e.preventDefault();
		$('body,html').animate({scrollTop:0},800);
	});

	/* Menu WPML language switcher */
	jQuery('#ozy-language-selector-title').click(function(e) {
		e.preventDefault();
		jQuery('#ozy-language-selector').slideToggle(500, 'easeInOutExpo',function(){
			jQuery(this).toggleClass('open');
		});		
	});


	//http://decodize.com/css/site-preloading-methods/
	/* Loading Screen */
	if(!Array.prototype.indexOf){Array.prototype.indexOf=function(b){var a=this.length>>>0;var c=Number(arguments[1])||0;c=(c<0)?Math.ceil(c):Math.floor(c);if(c<0){c+=a}for(;c<a;c++){if(c in this&&this[c]===b){return c}}return -1}};
	if(jQuery('#loaderMask').length>0 && parseInt(ozyGetOsVersion())<=0){
		var bgImg = [], img = [], count=0, percentage = 0;
		$('*').filter(function(){var val=$(this).css('background-image').replace(/url\(/g,'').replace(/\)/,'').replace(/"/g,'');var imgVal = $(this).not('script').attr('src');if(val !== 'none' && !/linear-gradient/g.test(val) && bgImg.indexOf(val) === -1){bgImg.push(val)}if(imgVal !== undefined && img.indexOf(imgVal) === -1){img.push(imgVal)}});
		var imgArray = bgImg.concat(img); 
		$.each(imgArray, function(i,val){$("<img />").attr("src",val).bind("load",function(){completeImageLoading();});$("<img />").attr("src", val).bind("error", function(){imgError(this);});})
	}else if(parseInt(ozyGetOsVersion())>0){
		jQuery('#loaderMask').remove();
	}
	function completeImageLoading(){count++;percentage = Math.floor(count / imgArray.length * 100);$('#loaderMask>span').html(percentage + '%');if(percentage === 100){$('#loaderMask>span').html('100%');$('body').addClass('loaded');}}
	function imgError (arg) {$('body').addClass('loaded');}
});