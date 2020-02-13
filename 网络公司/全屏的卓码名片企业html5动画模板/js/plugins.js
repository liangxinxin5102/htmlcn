 /* ==============================================
================== Page Loader ===================
=============================================== */

    //<![CDATA[
    $(window).load(function() { // makes sure the whole site is loaded
      //$('#status').fadeOut(); // will first fade out the loading animation
      //$('#preloader').delay(0).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(0).css({'overflow':'visible'});
    })
  //]]>

/* ==============================================
========== Navigation Scroll Effect =============
=============================================== */


$(document).ready(function () {
	'use strict';

    var menu = $('#navigation');

    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = $('.waypoint').offset().top - 200;

        if (y >= z) {
            menu.removeClass('not-visible-nav').addClass('visible-nav');
        }
        else{
            menu.removeClass('visible-nav').addClass('not-visible-nav');
        }
    });

});

/* ==============================================
Active Navigation Calling
=============================================== */

$('body').scrollspy({ 
	target: '.nav-menu',
	offset: 95
})


/* ==============================================
Scroll Navigation
=============================================== */	

$(function() {
		'use strict';

		$('.scroll').bind('click', function(event) {
			var $anchor = $(this);
			var headerH = $('#navigation').outerHeight();
			$('html, body').stop().animate({
				scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
			}, 1200, 'easeInOutExpo');

			event.preventDefault();
		});
	});

/* ==============================================
Drop Down Menu Fade Effect
=============================================== */	

$('.nav-toggle').hover(function() {
	'use strict';
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(250);
    }, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(250)
 });

/* ==============================================
Mobile Menu Button
=============================================== */	

$('.mini-nav-button').click(function() {
    $(".nav-menu").slideToggle("9000");
 });

$('.nav a').click(function () {
	if ($(window).width() < 970) {
    	$(".nav-menu").slideToggle("2000")}
	
});

/* ==============================================
Wow Animation
=============================================== */

 wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();


/* ==============================================
Counter
=============================================== */

// Count elements
    $('.count').each(function() {
        var $this   = $(this);
        $this.data('target', parseInt($this.html()));
        $this.data('counted', false);
        $this.html('0');
    });
    $(window).bind('scroll', function() {
        var speed   = 3000;
        $('.count').each(function() {
            var $this   = $(this);
            if(!$this.data('counted') && $(window).scrollTop() + $(window).height() >= $this.offset().top) {
                $this.data('counted', true);
                $this.animate({dummy: 1}, {
                    duration: speed,
                    step:     function(now) {
                        var $this   = $(this);
                        var val     = Math.round($this.data('target') * now);
                        $this.html(val);
                        if(0 < $this.parent('.value').length) {
                            $this.parent('.value').css('width', val + '%');
                        }
                    }
                });
            }
        });
    }).triggerHandler('scroll');

/* ==============================================
Testimonials
=============================================== */

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});


$(window).load(function() {
  $('.flexslider-client').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 210,
    itemMargin: 5
  });
});

/*----------------------------------------
MAGNIFIC POPUP VIMEO VIDEO
----------------------------------------*/
$(document).ready(function() {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: false,
            type: 'iframe',
            iframe: {
                markup: '<div class="mfp-iframe-scaler">'+
                        '<div class="mfp-close"></div>'+
                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                        '<div class="mfp-title">Some caption</div>'+
                        '</div>',
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: 'http://player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%output=embed'
                    }
                },
                srcAction: 'iframe_src',
            },
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });

/*----------------------------------------
Screenshots AppShowcase
----------------------------------------*/
$(function() {
        AppShowcase.init();
      });

/*----------------------------------------
Required Attribute
----------------------------------------*/
/*$('input').attr('required', true);*/

