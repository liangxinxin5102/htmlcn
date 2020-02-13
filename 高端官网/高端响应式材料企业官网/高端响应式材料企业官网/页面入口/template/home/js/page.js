var isTouch = Modernizr.touchevents,
	isMobile = false,
	mobile = false,
	win_width = 0,
	win_height = 0,
	navItem = 0,
	serachItem = 0,
	scrollH = 0,
	atH = 0,
	$menuBtn = jQuery('.menu-handler'),
	$menuBox = jQuery(".menuBox"),
	$menuMobile = jQuery("#navMobile"),
	menuboxW = 390,
	danNum = 0,
	isindex = false;
var pageInit = {
    init: function () {
        win_width = $(window).width();
        win_height = $(window).height();
        menuboxW = win_width - 76;
        if (win_width <= 1024) {
            isMobile = true;
            atH = 60;
            jQuery(".cpnav").bind("click", function () {
                if (danNum == 0) {
                    jQuery(this).next(".pnavbox").fadeIn();
                    danNum = 1;
                } else {
                    jQuery(this).next(".pnavbox").fadeOut();
                    danNum = 0;
                }
            });
            jQuery(".top").unbind("mouseleave");
        } else if (win_width > 1024) {
            isMobile = false;
            atH = 73;
            danNum = 0;
            jQuery(".cpnav").unbind("click");
            jQuery(".cpnav").next(".pnavbox").fadeIn();
            jQuery(".nav").mouseleave(function () {
                if ($cuur.length >= 1) {
                    jQuery('.arrow', $nav).stop(false, false).animate({ left: $cuur.position().left, opacity: "show", width: $cuur.width() });
                } else {
                    jQuery('.arrow', $nav).stop(false, false).animate({ left: 0, opacity: "hide", width: 0 });
                }
            });
        };
        if (win_width <= 640) {
            mobile = true;
        } else if (win_width > 640) {
            mobile = false;
        };
        var $nav = jQuery('#nav');
        var $cuur = jQuery('.act', $nav);
        if ($cuur.length >= 1) {
            jQuery('.arrow', $nav).css({ left: $cuur.position().left, width: $cuur.width() });
        } else {
            jQuery('.arrow', $nav).stop(false, false).animate({ left: 0, opacity: "hide", width: 0 });
        }
        jQuery(".nav li").mouseover(function () {
            jQuery('.arrow', $nav).stop(false, false).animate({ left: jQuery(this).position().left, opacity: "show", width: jQuery(this).width() }, 300);
        });
    },
    setImgMax: function (img, imgW, imgH, tW, tH) {
        var tWidth = tW || win_width;
        var tHeight = tH || win_height;
        var coe = imgH / imgW;
        var coe2 = tHeight / tWidth;
        if (coe < coe2) {
            var imgWidth = tHeight / coe;
            img.css({ height: tHeight, width: imgWidth, left: -(imgWidth - tWidth) / 2, top: 0 });
        } else {
            var imgHeight = tWidth * coe;
            img.css({ height: imgHeight, width: tWidth, left: 0, top: -(imgHeight - tHeight) / 2 });
        };
    }
},
   	menu = {
   	    init: function () {
   	        $menuBtn.bind("click", function () {
   	            if (navItem == 0 && !mobile) {
   	                jQuery(this).addClass("active");
   	                $menuBox.width(390);
   	                $menuBox.css({ "transform": "translate(0px,0px)", "-webkit-transform": "translate(0px,0px)" });
   	                jQuery(".pusher").css({ "transform": "translate(-390px,0px)", "-webkit-transform": "translate(-390px,0px)" });
   	                jQuery(".top").css({ "transform": "translate(-390px,0px)", "-webkit-transform": "translate(-390px,0px)" });
   	                jQuery("html").addClass("menuOpen");
   	                navItem = 1;
   	            } else if (navItem == 1 && !mobile) {
   	                jQuery(this).removeClass("active");
   	                jQuery("html").removeClass("menuOpen");
   	                $menuBox.css({ "transform": "translate(390px,0px)", "-webkit-transform": "translate(390px,0px)" });
   	                jQuery(".pusher").css({ "transform": "translate(0px,0px)", "-webkit-transform": "translate(0px,0px)" });
   	                jQuery(".top").css({ "transform": "translate(0px,0px)", "-webkit-transform": "translate(0px,0px)" });
   	                navItem = 0;
   	            } else if (navItem == 0 && mobile) {
   	                jQuery(this).addClass("active");
   	                $menuBox.width(menuboxW);
   	                jQuery("html").addClass("menuOpen");
   	                $menuBox.css({ "transform": "translate(0px,0px)", "-webkit-transform": "translate(0px,0px)" });
   	                jQuery(".pusher").css({ "transform": "translate(-" + menuboxW + "px,0px)", "-webkit-transform": "translate(-" + menuboxW + "px,0px)" });
   	                jQuery(".top").css({ "transform": "translate(-" + menuboxW + "px,0px)", "-webkit-transform": "translate(-" + menuboxW + "px,0px)" });
   	                navItem = 1;
   	            } else if (navItem == 1 && mobile) {
   	                jQuery(this).removeClass("active");
   	                jQuery("html").removeClass("menuOpen");
   	                $menuBox.css({ "transform": "translate(" + menuboxW + "px,0px)", "-webkit-transform": "translate(" + menuboxW + "px,0px)" });
   	                jQuery(".pusher").css({ "transform": "translate(0px,0px)", "-webkit-transform": "translate(0px,0px)" });
   	                jQuery(".top").css({ "transform": "translate(0px,0px)", "-webkit-transform": "translate(0px,0px)" });
   	                navItem = 0;
   	            };
   	        });
   	        jQuery(".pusher-black").bind("click", function () {
   	            if (navItem == 1 && !mobile) {
   	                $menuBtn.removeClass("active");
   	                jQuery("html").removeClass("menuOpen");
   	                $menuBox.css({ "transform": "translate(390px,0px)", "-webkit-transform": "translate(390px,0px)" });
   	                jQuery(".pusher").css({ "transform": "translate(0px,0px)", "-webkit-transform": "translate(0px,0px)" });
   	                jQuery(".top").css({ "transform": "translate(0px,0px)", "-webkit-transform": "translate(0px,0px)" });
   	                navItem = 0;
   	            } else if (navItem == 1 && mobile) {
   	                $menuBtn.removeClass("active");
   	                jQuery("html").removeClass("menuOpen");
   	                $menuBox.css({ "transform": "translate(" + menuboxW + "px,0px)", "-webkit-transform": "translate(" + menuboxW + "px,0px)" });
   	                jQuery(".pusher").css({ "transform": "translate(0px,0px)", "-webkit-transform": "translate(0px,0px)" });
   	                jQuery(".top").css({ "transform": "translate(0px,0px)", "-webkit-transform": "translate(0px,0px)" });
   	                navItem = 0;
   	            };
   	        });
   	        $(document).on("click", ".navMobile .nav-link", function (e) {
   	            var mnavcur = $(this);
   	            var mnavbox = $(this).parents("li");
   	            if (mnavbox.find(".subnav").size() > 0) {
   	                if (mnavcur.hasClass("cur")) {
   	                    mnavbox.find(".subnav").stop(false, false).slideUp();
   	                    mnavcur.removeClass("cur");
   	                } else {
   	                    jQuery(".navMobile a.nav-link").removeClass("cur");
   	                    jQuery(".subnav").stop(false, false).slideUp();
   	                    mnavbox.find(".subnav").stop(false, false).slideDown();
   	                    mnavcur.addClass("cur");
   	                    e.preventDefault();
   	                }
   	            }
   	        });
   	    }
   	},
	dock = {
	    init: function () {
	        var dock = 0;
	        jQuery(".switchdock").bind("click", function () {
	            if (dock == 0) {
	                jQuery(this).addClass("active");
	                jQuery(".dockCon").stop(false, false).animate({ right: "-60", "opacity": "hide" }, 300);
	                dock = 1;
	            } else if (dock == 1) {
	                jQuery(this).removeClass("active");
	                jQuery(".dockCon").stop(false, false).animate({ right: 0, "opacity": "show" }, 300);
	                dock = 0;
	            }
	        });
	        jQuery(".dockCon li").mouseenter(function () {
	            jQuery(this).find(".con").stop(false, false).animate({ right: 52, "opacity": "show" }, 300);
	        }).mouseleave(function () {
	            jQuery(this).find(".con").stop(false, false).animate({ right: 0, "opacity": "hide" }, 300);
	        });
	    }
	};
jQuery(window).resize(function () {
    pageInit.init();
});
function getHash() {
    var hash = location.href.split("#")[1];
    if (hash) {
        setScroll("#" + hash);
    }
};
function setScroll(anchorCur) {
    jQuery("html,body").delay(300).animate({ scrollTop: jQuery(anchorCur).offset().top - atH }, 800, 'easeInOutExpo');
};
if (jQuery(".pageNav").length >= 1) {
    scrollH = jQuery(".pageNav").offset().top - atH;
}
$(document).ready(function () {
    pageInit.init();
    menu.init();
    dock.init();
    jQuery(window).scroll(function () {
        var windowTop = jQuery(window).scrollTop();
        if (windowTop > 0 && !isMobile) {
            jQuery(".top").addClass("topfix");
        } else {
            jQuery(".top").removeClass("topfix");
        };
        if (windowTop > scrollH && isMobile) {
            jQuery(".pageNav").addClass("fixed");
        } else if (windowTop < scrollH) {
            jQuery(".pageNav").removeClass("fixed");
        };
    });
    jQuery(".pnavbox a").click(function () {
        if (isMobile) {
            jQuery(this).parent().fadeOut();
        }
        danNum = 0;
        $('.cpnav .name').html($(this).text());
    });
    setPopUp(jQuery(".sharpBox .a2"), "官方微信");
    function setPopUp(obj, title) {
        obj.click(function () {
            var str = '<div class="popUpblack"><div class="popUp"><div class="t">' + title + '<span class="close">关闭</span></div><div class="img"><img src="' + obj.attr("href") + '"/></div></div></div>';
            $("body").append(str);
            jQuery(".popUpblack").fadeIn();
            jQuery(".popUp").animate({ marginTop: "-127" }, 400);
            $(".popUp .close").click(function () {
                $(".popUpblack").remove();
            });
            jQuery(".popUpblack").click(function () { $(".popUpblack").remove(); });
            return false;
        });
    };
});
jQuery(".backTop").bind("click", function () {
    if (!isindex) {
        jQuery('html, body').stop().animate({ scrollTop: 0 }, 800, 'easeInOutExpo');
    }
});
$(document).on('click', '.overlayClose', function () {
    $('.imgShowBox').removeClass('img-show');
    jQuery('html').removeClass('openImg');
    setTimeout(function () { jQuery('.imgShowBox').remove(); }, 800);
});
function openshowImg(num, imgthis) {
    jQuery('html').addClass('openImg');
    jQuery("body").append('<div class="imgShowBox"><div class="imgShowDemo imgShowDemo2"></div><a class="overlayClose"><i></i></a>');
    var imgList = jQuery(imgthis);
    for (var i = 0 ; i < imgList.length ; i++) {
        jQuery('.imgShowDemo').append('<div class="item"><img src="" class="img"/><div class="txt"><p class="i"></p></div></div>')
        var imgurl = imgList.eq(i).attr('data-img');
        var imgtitle = imgList.eq(i).attr('data-title');
        jQuery('.imgShowDemo .item').eq(i).find(".img").attr("src", imgurl);
        jQuery('.imgShowDemo .item').eq(i).find('.i').html(imgtitle);
    }
    jQuery(".imgShowBox").css({ height: win_height });
    jQuery('.imgShowDemo').css({ height: win_height });
    jQuery('.imgShowDemo .item').css({ height: win_height });

    jQuery(window).resize(function () {
        jQuery(".imgShowBox").css({ height: win_height });
        jQuery('.imgShowDemo').css({ height: win_height });
        jQuery('.imgShowDemo .item').css({ height: win_height });
    });
    var imgowl = jQuery(".imgShowDemo").slick({
        autoplay: false,
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        pauseOnHover: false
    });

    jQuery(".imgShowDemo").slick('slickGoTo', num);
    //				jQuery(".ovnum").html(num);
    //				jQuery(".maxNum").html(jQuery(".imgShowDemo .item").length);
    //				jQuery(".imgShowDemo").on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //					jQuery(".ovnum").html(nextSlide+1);
    //				});
    setTimeout(function () { $('.imgShowBox').addClass('img-show'); }, 300);
//changeMpnav();
	function gotoProAjax(item,address){
		$.ajax({
			url: address,
			dataType: "html",
			success: function (data) {
				if (data == "" || data == null) {
					return;
				}else {
					$('.footer').after(data);
					$('html').addClass('open');	
					setTimeout(function(){
						$('.pdpanel').addClass('show');
					},100);
					
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				$('.pdpanel').remove();
			}
		});
	};
	$(document).on('click','.pdajax',function(e){
		e.preventDefault();
		var $this=$(this);
		gotoProAjax($this, $this.attr("chref"));
	});
	$(document).on('click','.pdpanel .backList',function(){
		$('.pdpanel').removeClass('show');
		setTimeout(function(){
			$('.pdpanel').remove();
			$('html').removeClass('open');
		},800);
	});
};
