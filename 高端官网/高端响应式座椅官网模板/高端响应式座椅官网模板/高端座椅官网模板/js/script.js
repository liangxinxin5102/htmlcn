// JavaScript Document

//按需写入所需的函数名
$(function() {

    browserRedirect();
	path();
	sizewidth();
	forms();
	gototop();
	$("select.relselet").customSelect();
	pos('.proul li');
	
	/*友情链接*/
	$('#list').change(function(){
		var url=$(this).val();
		if(url){
			window.open(url,'_blank');
			$('#list').val('');
			history.go(0);
		}
	});
		
	/*二维码*/
	$('.floorimg li a').hover(function(){
		$(this).find('div').stop(true, true).fadeIn();
	}, function(){
		$(this).find('div').stop(true, true).fadeOut();
	});

	$('.indexFloatCon .online').hover(function() {
        $(this).stop(true, true).animate({
            left: '-130px'
        });
    }, function() {
        $(this).stop(true, true).animate({
            left: 0
        });
    });
	
	$('.indexFloatCon .phone').hover(function() {
        $(this).stop(true, true).animate({
            left: '-130px'
        });
    }, function() {
        $(this).stop(true, true).animate({
            left: 0
        });
    });

    $('.indexFloatCon .ewmLi').hover(function() {
        $(this).find('.ewmCon').stop(true, true).fadeIn();
    }, function() {
        $(this).find('.ewmCon').stop(true, true).fadeOut();
    })
	
	
})

//面包屑导航
function path(){
	
	$(".lang a:not(':first-child')").before("<span>&nbsp;</span>");
	//$(".nav ul li:not(':first-child')").before("<span>&nbsp;</span>");/*1014*/
	$(".patha a:not(':first-child')").before("<span>&gt;</span>");
	$(".patha a:last-child").addClass('on');
	
	$('.proul li:nth-child(2n)').find('.protext').addClass('fr');
	
	/*1014 start*/
	$('.navboxlist .navbox:nth-child(2n)').find('a').addClass('noright');
	//$('.navboxlist .navbox:nth-child(2)').find('a').addClass('notop');
	//$('.navboxlist .navbox').eq(0).find('a').addClass('notop');

	//var len = $('.navbox').length;
	
	
	
	/*$('.nav ul li').each(function() {
		var len = $(this).find('.navbox').length;
		console.log(len);
		if(len%2 !==0){
			$(".navboxlist").append('<div class="navbox"><a class="noright">&nbsp;</a></div>');
		}
        
    });
	*/
	

	
	/*1014 end*/
	
}

/*页面宽度*/
function sizewidth(){
	
	var n = $(window).width();
	if(n <= 1024){
		textOverFlow('.newslist li a p', 100);
		textOverFlow('.prodes p', 60);
		textOverFlow('.newsbox li a p', 70);
		textOverFlow('.caseinfo', 120);
		if(n <= 640){
			textOverFlow('.slideBox .bd ul li .news-txt p', 30);
			textOverFlow('.caseinfo', 100);
			if(n <= 540){
				textOverFlow('.newslist li a p', 30);
				textOverFlow('.newstit span', 30);
				textOverFlow('.protext p', 50);
				textOverFlow('.newsbox li a p', 50);	
				textOverFlow('.caseinfo', 80);
				if(n <= 480){
					textOverFlow('.slideBox .bd ul li .news-txt h2', 10);
					textOverFlow('.slideBox .bd ul li .news-txt p', 20);
					
					textOverFlow('.newsbox li a p', 40);
					if(n <= 414){
						textOverFlow('.prospan', 66);
						textOverFlow('.newslist li a p', 20);	
						textOverFlow('.caseinfo', 60);
						
						textOverFlow('.protext p', 30);
						textOverFlow('.newsbox li a p', 28);
						if(n <= 375){
							textOverFlow('.prospan', 50);
							textOverFlow('.jobtit b', 10);
			
							if(n <=360){
								textOverFlow('.newstitle', 30);
								if(n <= 320){
									textOverFlow('.newslist li a p', 18);
									textOverFlow('.protext p', 20);
									textOverFlow('.newsbox li a p', 14);
								}
							}
						}
					}
				}
			}
		}
	}
	
}

//表单相关
function forms(){

	//输入框文字清空还原，控制value
	// <input type="text" value="请输入关键字" />
	$(".stext").focus(function(){
		if($(this).val() ==this.defaultValue){  
			$(this).val("");	
		} 
	}).blur(function(){
		if ($(this).val() == '') {
			$(this).val(this.defaultValue);
		}
	});
	
}

//返回顶部
function gototop(){

	$backToTopEle = $(".back2up").click(function() {
		$("html, body").animate({
			scrollTop: 0
		},300);
	}),
	$backToTopFun = function() {
		var st = $(document).scrollTop(),
		winh = $(window).height(); (st > 0) ? $backToTopEle.show() : $backToTopEle.hide();
		//IE6下的定位   
		if (!window.XMLHttpRequest) {
			$backToTopEle.css("top", st + winh - 160);
		}
	};

	$backToTopSH = function() {
		var st = $(document).scrollTop(),
		winh = $(window).height(); (st > 0) ? $('#floor_select').show() : $('#floor_select').hide();
		//IE6下的定位   
		if (!window.XMLHttpRequest) {
			$('#floor_select').css("top", st + winh - 160);
		}
	};
	$(window).bind("scroll", $backToTopSH);
	$(function() {
		$backToTopSH();
	});
}

/*弹出层图片*/

function imgscroll(box){

	var myScroll;
	
	$(box).click(function() {
		var hh = $(window).height();
		
		var top = $(window).scrollTop();
		//$('.imgdiv').height(hh);
		$('.imgdiv').css({'top':top+'px','height':hh+'px'});
		
		$('.imgdiv').show();
		document.addEventListener('touchmove', func, false);
		var str = $(this).attr('src');
		$('.imgdiv img').attr('src',str);
		var stitle = $('.caselist li a p').html();
		$('.imgtitle').html(stitle);
		myScroll = new iScroll('wrapper', { zoom:true,zoomMax:2,wheelAction:'scroll',hScrollbar:false,vScrollbar:false,hScroll:true,vScroll:true});
    });
	
	$('.close').click(function() {
		$('.imgdiv').hide();
		document.removeEventListener('touchmove', func, false);
    });	
	
	
	
}



/*截取字符数*/
function textOverFlow(dom, max) {
    var tof = $(dom);
    // 定义最大字符数
    var maxwidth = max;

    tof.each(function() {
        if ($(this).text().length > maxwidth) {
            $(this).text($(this).text().substring(0, maxwidth));
            $(this).html($(this).text() + '...');
        };
    });
}


//设备判断
function browserRedirect() {

    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {

      TouchSlide({ slideCell:"#leftTabBox",effect:"leftLoop" }); 
	  
	  /*弹出层调用*/
	  imgscroll('.introduce img');
      imgscroll('.content img');
	  
		/*工厂设备*/
		$( '#pic' ).sliderPro({
			width: 860,
			height: 515,
			fade: true,
			arrows: false,
			fadeThumbnailArrows: false,
			buttons: false,
			fullScreen: true,
			shuffle: true,
			smallSize: 500,
			mediumSize: 1000,
			largeSize: 3000,
			thumbnailArrows: true,
			autoplay: false,
			thumbnailWidth: 136,
			thumbnailHeight: 81,
			breakpoints: {
				500: {
					thumbnailWidth: 120,
					thumbnailHeight: 72
				},
				375: {
					thumbnailWidth: 100,
					thumbnailHeight:60
				}
			}
		});
		
		/*产品详情*/
		$( '#pic2' ).sliderPro({
			width: 750,
			height: 750,
			fade: true,
			arrows: false,
			fadeThumbnailArrows: false,
			buttons: false,
			fullScreen: false,
			shuffle: true,
			smallSize: 500,
			mediumSize: 1000,
			largeSize: 3000,
			thumbnailArrows: true,
			autoplay: false,
			thumbnailWidth: 100,
			thumbnailHeight: 100,
			breakpoints: {
				500: {
					thumbnailWidth: 80,
					thumbnailHeight: 80
				},
				375: {
					thumbnailWidth: 60,
					thumbnailHeight:60
				}
			}
		});
		
		
       var imgScroll;

        $('.sp-slide').click(function() {
            var src = $(this).find('img').attr('src');
            console.log(src);
            $('.picWrapperBg').find('img').attr('src', src);
            $('.picWrapperBg').show();
            imgScroll = new IScroll('#picWrapper', {
                zoom: true,
                scrollX: true,
                scrollY: true,
                mouseWheel: true,
                wheelAction: 'zoom'
            });
            document.addEventListener('touchmove', func, false);
        });

        $('.picWrapperBg .close').click(function(){
            $('.picWrapperBg').hide();
            imgScroll.destroy();
            document.removeEventListener('touchmove', func, false);
        });


		/*案例*/
		/*if($(window).width()<=1200){
			$(".group1").colorbox({rel:'group1', innerWidth:'80%', innerHeight:'100%'});
			if($(window).width()<=540){
				$(".group1").colorbox({rel:'group1', innerWidth:'80%', innerHeight:'52%'});
				if($(window).width()<=480){
					$(".group1").colorbox({rel:'group1', innerWidth:'80%', innerHeight:'70%'});
					if($(window).width()<=414){
						$(".group1").colorbox({rel:'group1', innerWidth:'80%', innerHeight:'55%'});
						if($(window).width()<=414){
							$(".group1").colorbox({rel:'group1', innerWidth:'80%', innerHeight:'65%'});
						}
					}
				}
			}
		}*//*1014*/
	
		// mobile
        var navScroll;

        $('#nav > li').each(function() {
            if ($(this).hasClass('on')) {
                var tit = $(this).find('h3 a').text();
                $('.mobileNavTit').text(tit);
            };
        });

        $('.mobileNav li').each(function() {
            if ($(this).find('.sub').length > 0) {
                $(this).children('a').after('<span>+</span>');
            };
        });

        $('.mobileNavTit').click(function() {
            document.addEventListener('touchmove', func, false);
            var st = $(window).scrollTop();

            $('.mobileNavCon').css({
                'top': st,
                'display': 'block'
            });

            navScroll = new IScroll('#navScroll', {
                mouseWheel: true,
                click: true
            });

            setTimeout(function() {
                $('.mobileNavBox').addClass('on');
            }, 0);
        });

        touch.on('.mobileNavCon', 'swipeleft', function() {
            console.log('←');
            $('.mobileNavBox').removeClass('on');

            setTimeout(function() {
                $('.mobileNavCon').css('display', 'none');
            }, 500);

            document.removeEventListener('touchmove', func, false);
            navScroll.destroy();
        });

        touch.on('#mobileNavBg', 'tap', function() {
            console.log('←');
            $('.mobileNavBox').removeClass('on');

            setTimeout(function() {
                $('.mobileNavCon').css('display', 'none');
            }, 500);

            document.removeEventListener('touchmove', func, false);
            navScroll.destroy();
        });

        $('.mobileNav li span').click(function() {
            if ($(this).hasClass('on')) {
                $(this).removeClass('on');
                $(this).next('.sub').css('height', '0');
                navScroll.refresh();
            } else {
                $(this).addClass('on');
                $(this).next('.sub').css('height', 'auto');
                navScroll.refresh();
            };
        });
		
		
		

   } else {
        // PC

        //导航
		//$('.nav').addClass('bgsize');
        $('.nav ul li').hover(function(){
			$(this).find('.navmenu').stop(true, true).fadeIn();
		}, function() {
			$(this).find('.navmenu').stop(true, true).fadeOut();
		});

		/*右侧导航*/
		$('.sidemenu ul li a').hover(function(){
		  $(this).find('img').addClass('shake');  
		});
				
		jQuery(".tabBox").slide();
		//$(".group1").colorbox({rel:'group1', innerWidth:1135, innerHeight:642});/*案例*//*1014*/
		
		/*产品详情和设备*/
		jQuery(".imgTab").slide({ titCell:".smallImg li", mainCell:".bigImg", effect:"fold", delayTime:200,
			startFun:function(i,p){
				//控制小图自动翻页
				if(i==0){ jQuery(".imgTab .sPrev").click() } else if( i%5==0 ){ jQuery(".imgTab .sNext").click()}
			}
		});

		//小图左滚动切换
		jQuery(".imgTab .smallScroll").slide({ mainCell:"ul",delayTime:100,vis:5,scroll:5,effect:"left",autoPage:true,prevCell:".sPrev",nextCell:".sNext",pnLoop:false });
		
		
	
	
      
    }
}

function func(e) {
    e.preventDefault();
}
/*0908*/
function pos(dom){
	var length = $(dom).length + 1;
	for(var j=0; j <= length; j++){
		$(dom).eq(j).addClass(function(){
			if(j>5){return 'pli5';}
			else{return 'pli' + (j+1);}
		})
	}
		
}

/*产品详情页*/
//pro2_options
$(function() {
var imgsrc = $(".pro_opt_list .smalloptimg div:first-child").children("img").attr("src");
$("#optionsTitle").html($(".pro_opt_list .smalloptimg div:first-child").children("img").attr("alt"));
	$(".bigoptimg img").attr("src", function() { return imgsrc });
	$(".pro_opt_list .smalloptimg div").hover(function() {
		var aaa = $(this).children("img").attr("src");
		$(this).addClass("on").siblings().removeClass("on");
		$(".bigoptimg img").attr("src", function() { return aaa; });
		
		$("#optionsTitle").html($(this).children("img").attr("alt"));
	});
});


//pro_fin
//<![CDATA[
$(function() {
	var x = -200;
	var y = 30;
	$("a.tooltip").mouseover(function(e) {
		this.myTitle = this.title;
		this.title = "";
		var imgTitle = this.myTitle ? "<br/>" + this.myTitle : "";
		var tooltip = "<div id='tooltip'><img src='" + this.href + "'/>" + imgTitle + "<\/div>"; //创建 div 元素
		$("body").append(tooltip); //把它追加到文档中						 
		$("#tooltip")
		.css({
			"top": (e.pageY + y) + "px",
			"left": (e.pageX + x) + "px"
		}).show("fast");   //设置x坐标和y坐标，并且显示
	}).mouseout(function() {
		this.title = this.myTitle;
		$("#tooltip").remove();  //移除 
	}).mousemove(function(e) {
		$("#tooltip")
		.css({
			"top": (e.pageY + y) + "px",
			"left": (e.pageX + x) + "px"
		});
	});
});
//]]>


$(function(){
	
});

function Hover(obj, calssName) {
	obj.hover(function(){
		$(this).addClass(calssName);
	},function(){
		$(this).removeClass(calssName);
	})
}

$(window).scroll(function () {

	var _ismobile = false;
	var windowTop = $(window).scrollTop();
	var windowBottom = windowTop + $(window).height();
	var showNum = !_ismobile ? 4 : 16;
	$('.ani-view').each(function(){

		var pageQ1 = $(this).offset().top + $(this).height() / showNum;
		var pageQ3 = $(this).offset().top  + $(this).height() / 1;


		if( ( pageQ1 <= windowBottom ) && ( pageQ3 >= windowTop ) ){

			if( $(this).hasClass("fade-in-down") ) $(this).addClass('fadeInDown');
			if( $(this).hasClass("fade-in-left") )  $(this).addClass('fadeInLeft');
			if( $(this).hasClass("fade-in-right") )  $(this).addClass('fadeInRight');
				
		}else {

			if( $(this).hasClass('fadeInDown') ) $(this).removeClass('ani-view fade-in-down fadeInDown');
			if( $(this).hasClass('fadeInLeft') ) $(this).removeClass('ani-view fade-in-left fadeInLeft');
			if( $(this).hasClass('fadeInRight') ) $(this).removeClass('ani-view fade-in-right fadeInRight');
		}

	});
});
