$(function(){
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

    function animateTop(item, time,callback) {
        if ($(item).attr('init') == 'false'&& isScrolledIntoView($(item).parent()) ){
            $(item).attr('init', 'true');
            setTimeout(function(){
                $(item).animate({'bottom': '0'}, 800, 'easeOutCubic');
                callback;
            },time)
        }
    }

    function ftAnimate(item, time) {
        if ($(item).attr('init') == 'false'&& isScrolledIntoView($(item))) {
            $(item).attr('init', 'true');
            setTimeout(function(){
                $(item).animate({'bottom': '0'}, 800, null);
            },time)
        }
    }


    function animateBot(item, time, callback) {
        $(item).delay(time).animate({'top': '650px'}, 1200, 'easeOutCubic', callback)
    }

    var floor1Init = false,
        boxElemets = $('.J_Box'),
		certs = $('.box_b');
		
     $.each(boxElemets, function () {
        $(this).attr('init', 'false');
    });
	 
	  $.each(certs, function () {
        $(this).attr('init', 'false');
    });
	 
	 function animateInit(){
        $.each(boxElemets, function () {
            if ($(this).attr('init') == 'false' && isScrolledIntoView($(this))) {
                $(this).attr('init', 'true');
                $(this).animate({'left': '50%','top':'10%'}, 1000, 'easeOutCubic');
            }
        });
	 }
	 
	 
	 
	 animateInit();
    $(window).scroll(function () {
        animateInit();
    });

})