
(function($,window) {
    var $scrollElem = $('html, body'),
        $win = $(window),
        isIE6 = !-[1,] && !window.XMLHttpRequest,
        isMac = window.navigator.platform.toLowerCase().indexOf('mac') > -1;

    // version
    function updateVersion(type) {
        var data = appVersion[type] || {},
            text = '版本：' + data.version + ' 更新：' + data.publishTime;
        $('#version').text(text);
    }
    window.updateVersion = updateVersion;

    var PageCtrl = function(options) {
        this.init.call(this, options);
    };

    PageCtrl.prototype = {
        init: function(options) {
            this.curIndex = 0;
            this.wrapper = options.wrapper;
            this.pages = this.wrapper.children('.page');
            this.pageCount = this.pages.length;
            this.scrollTop = 0;
            this.isScroll = false;
            this.time = null;
//            this._initPage();
            this._bindEvent();
        },

        /**
         * 根据当前scrollTop，计算curIndex
         * 浏览器刷新会记录scrollTop，所以不能确定curIndex === 0
         * @private
         */
//        _initPage: function() {
//            // 平均高度
//            var pageHeight = this.wrapper.height() / this.pageCount;
//
//            this.scrollTop = $win.scrollTop();
//            console.log(this.scrollTop / pageHeight);
//        },

        /**
         * 事件绑定
         * @private
         */
        _bindEvent: function() {
            var self = this;
            if (window.addEventListener) {
                window.addEventListener('DOMMouseScroll', function(event) {self.scroll.call(self, event)}, false);
                window.addEventListener('mousewheel', function(event) {
                    self.scroll.call(self, event);
                }, false);
                window.addEventListener('MozMousePixelScroll', function(event) {
                    event.preventDefault();
                }, false);
            } else {
                document.onmousewheel = function() {
                    self.scroll.call(self);
                };
            }
			
            // change.page事件
            var topDelta = isIE6 ? 0 : 0,
                animateName = isMac ? 'mac' : 'pc';

            var animateFn = {
                mac: function(scrollTop) {
                    $scrollElem.animate({
                        scrollTop: scrollTop
                    }, 1000,'easeInOutExpo', function() {
                        setTimeout(function() {
                            self.isScroll = false;
                        }, 500);
                    });
                },
                pc: function(scrollTop) {
                    $scrollElem.animate({
                        scrollTop: scrollTop
                    },'easeInOutExpo', function() {
                        self.isScroll = false;
                    });
                }
            };
            this.wrapper.on('changepage', function(event, data) {
                var $nextPage = self.pages.eq(data.nextIndex);
                self.pages.eq(data.prevIndex).trigger('exit');
                $nextPage.trigger('enter');
                self.scrollTop = data.nextIndex === 0 ? 0 : $nextPage.offset().top;
                self.scrollTop -= topDelta;
                animateFn[animateName](self.scrollTop);
            });

            // pages 进入/退出事件
            self.pages.on('enter', function() {
                var $this = $(this);
                self.onEnter($this);
            });
            self.pages.on('exit', function() {
                var $this = $(this);
                self.onExit($this);
            });
        },
        scroll: function(event) {
            var oEvent = event || window.event;
            if (oEvent.preventDefault) {
                oEvent.preventDefault();
            } else {
                oEvent.returnValue = false;
            }
            if (this.isScroll) {
                return;
            }
            this.isScroll = true;
            var self = this,
                delta = oEvent.wheelDelta ? oEvent.wheelDelta : -oEvent.detail;
            var curIndex = 0;
            if (delta < 0) {
                curIndex = Math.min((self.curIndex + 1), self.pageCount - 1);
            } else {
                curIndex = Math.max((self.curIndex - 1), 0);
            }
            self.setIndex(curIndex);
        },
        onEnter: function($dom) {
            $dom.addClass('active').removeClass('disappear');
        },
        onExit: function($dom) {
            $dom.removeClass('active').addClass('disappear');
        },

        setIndex: function(index) {
            var prevIndex = this.curIndex;
	    	if(index==0){
				setTimeout(function(){
					jQuery("#ipage1 .banner").addClass("hoves");
				},1200);
			}else{
				jQuery("#ipage1 .banner").removeClass("hoves");
			}
            this.curIndex = index;
            this.wrapper.trigger('changepage', {
                prevIndex: prevIndex,
                nextIndex: index
            });
        }
    };
    var pageCtrl = new PageCtrl({
        wrapper: $('.content')
    });
	var goTopTime = null, $goTop = $('.backTop'),$roll=$(".roll");
    $goTop.on('click', function() {
        pageCtrl.setIndex(0);
    });
    $roll.on('click', function() {
        pageCtrl.setIndex(1);
    });
})(jQuery, window);
jQuery(function(){
	isindex=true;
	var pageH = jQuery(".page"),
		$banner=jQuery(".banner"),
		$bannerSlide=jQuery(".bannerSlide"),
		$bannerItem=jQuery(".bannerSlide .item"),
		$bannerImg=jQuery(".banner .pimg");
	function initPro(){
		$bannerSlide.css({height:win_height});
		$banner.css({height:win_height});
		$bannerItem.css({height:win_height});
		pageInit.setImgMax($bannerImg,1920,1050,win_width,win_height);
		if(!isMobile){
			pageH.css({height:win_height}).removeClass("m-active").addClass("p-active");
			jQuery(".ibox").each(function(){
				var boxH=jQuery(this).height();
				jQuery(this).css({top:(win_height-boxH)/2});
			});
		}else{
			pageH.css({height:"auto"}).addClass("m-active").removeClass("p-active");
			jQuery(".ibox").css({top:"auto"});
		}
	}
	initPro();
	jQuery(window).resize(function () {
	    initPro();
	});
	setTimeout(function(){
		jQuery("#ipage1 .banner").addClass("hoves");
	},1200);
	$bannerSlide.bxSlider({
		auto: true, 
		pause: 5000,
		mode:"fade",
		speed: 1000,
		controls: false,
		onSliderLoad:function(currentIndex){
			jQuery(".bannerSlide .item").eq(currentIndex).addClass('slick-current');
	   	},onSlideAfter: function($slideElement, oldIndex, newIndex) {
			jQuery(".bannerSlide .item").removeClass('slick-current');
	   		jQuery(".bannerSlide .item").eq(newIndex).addClass('slick-current');
		}
	});
	jQuery('.productIbox').slick({
	 	arrows: true,
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 640,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 481,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]
	});
	jQuery('.idownList').slick({
	 	arrows: true,
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 1360,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 860,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 520,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]
	});
	
});	
