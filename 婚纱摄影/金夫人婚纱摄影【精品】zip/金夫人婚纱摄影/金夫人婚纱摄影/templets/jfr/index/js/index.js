// 二次修改

	//第二屏
	$('.section2 .swiper-button-next').click(function(){
		_this = $(this);
		if(_this.attr('class')=='swiper-button-next'){
			Current = $('.section2 .swiper-slide.current');
			$('.section2 .swiper-wrapper').find('.swiper-slide').eq(Current.index()+1).addClass('current').siblings('.swiper-slide').removeClass('current');
			$('.section2 .sectionSlide').find('li').eq(Current.index()+1).addClass('current').siblings('li').removeClass('current');
			}else{
				return;
				}		
	});
	$('.section2 .swiper-button-prev').click(function(){
		_this = $(this);
		if(_this.attr('class')=='swiper-button-prev'){
			Current = $('.section2 .swiper-slide.current');
			$('.section2 .swiper-wrapper').find('.swiper-slide').eq(Current.index()-1).addClass('current').siblings('.swiper-slide').removeClass('current');
			$('.section2 .sectionSlide').find('li').eq(Current.index()-1).addClass('current').siblings('li').removeClass('current');
			}else{
				return;
				}
		})



    var mySwiper1 = new Swiper ('.banner .swiper-container', {	   
	    prevButton:'.banner .swiper-button-prev',
	    nextButton:'.banner .swiper-button-next',
	    pagination : '.banner .swiper-pagination',
	    paginationClickable :true,
	    loop : true,
		autoplay : 60000,
			
    });    
    var mySwiper2 = new Swiper ('.section2 .swiper-container', { 	   
	    prevButton:'.section2 .swiper-button-prev',
	    nextButton:'.section2 .swiper-button-next', 	
		speed:500, 		
		slidesPerView : 6,
		spaceBetween : 1,
    });  
	var mySwiper3 = new Swiper ('.section3 .swiper-container', { 	   
	    prevButton:'.section3 .swiper-button-prev',
	    nextButton:'.section3 .swiper-button-next', 	
		speed:500, 		
		slidesPerView : 5,		
		autoHeight: true,
		slidesPerView: 'auto',		
		onlyExternal : true,

    }); 
	var mySwiper4 = new Swiper ('.section4 .swiper-container', { 	   
	    prevButton:'.section4 .swiper-button-prev',
	    nextButton:'.section4 .swiper-button-next', 	
		speed:500, 
    }); 
	
	var mySwiper6 = new Swiper ('.section6 .swiper-container', { 	   
	    prevButton:'.section6 .swiper-button-prev',
	    nextButton:'.section6 .swiper-button-next', 
		slidesPerView : 4,	
		spaceBetween : 8,			
		speed:500, 
    });
	var mySwiper7 = new Swiper ('.section7 .swiper-container', { 	   
	    prevButton:'.section7 .swiper-button-prev',
	    nextButton:'.section7 .swiper-button-next', 
		slidesPerView : 4,	
		spaceBetween : 45,			
		speed:500, 
    });
//首页浏览器宽度变换 修改轮播效果  autoHeight: true, //高度随内容变化
$(function(){
	function bodyFn(){
		boyd_width = parseInt($(document.body).width());
		//笔记本
		if(boyd_width<=1440){
			var mySwiper7 = new Swiper ('.section7 .swiper-container', { 	   
				prevButton:'.section7 .swiper-button-prev',
				nextButton:'.section7 .swiper-button-next', 
				slidesPerView : 3,	
				spaceBetween : 25,			
				speed:500, 
			});
			}
		
		//ipad   参数
		if(boyd_width<=992){
			// 第二屏
			var mySwiper1 = new Swiper ('.section2 .swiper-container', { 	   
				prevButton:'.section2 .swiper-button-prev',
				nextButton:'.section2 .swiper-button-next', 	
				speed:500, 		
				slidesPerView : 4,
				spaceBetween : 1,
			}); 
			
			
			var mySwiper3 = new Swiper ('.section3 .swiper-container', { 	   
				prevButton:'.section3 .swiper-button-prev',
				nextButton:'.section3 .swiper-button-next', 	
				speed:500, 
				spaceBetween : 1,	
				slidesPerView : 3,					
			});
			$('.section3 .swiper-slide').eq(2).removeClass('current');
			
			var mySwiper5 = Swiper ('.section5 .swiper-container', { 	   
				prevButton:'.section5 .swiper-button-prev',
				nextButton:'.section5 .swiper-button-next',				
				spaceBetween : 20,	
				slidesPerView : 2,	
				slidesPerColumn : 2,		
				speed:500, 
			});
			
			}
		//phone  参数
		if(boyd_width<=768){
			// 第二屏
			var mySwiper1 = new Swiper ('.section2 .swiper-container', { 	   
				prevButton:'.section2 .swiper-button-prev',
				nextButton:'.section2 .swiper-button-next', 	
				speed:500, 						
				slidesPerView : 2,
				spaceBetween : 1,
			}); 			
			var mySwiper6 = new Swiper ('.section6 .swiper-container', { 	   
				prevButton:'.section6 .swiper-button-prev',
				nextButton:'.section6 .swiper-button-next', 
				slidesPerView : 3,	
				spaceBetween : 8,			
				speed:500, 
			});
			var mySwiper7 = new Swiper ('.section7 .swiper-container', { 	   
				prevButton:'.section7 .swiper-button-prev',
				nextButton:'.section7 .swiper-button-next', 
				slidesPerView :1,	
				spaceBetween : 0,			
				speed:500, 
			});
			
			}
		//最外新加
		if(boyd_width>768){
			var mySwiper5 = new Swiper ('.section5 .swiper-container', { 	   
				prevButton:'.section5 .swiper-button-prev',
				nextButton:'.section5 .swiper-button-next', 
				slidesPerView : 4,	
				spaceBetween : 20,			
				speed:500, 
			});
			
			}
		
	}
	
	bodyFn();	
})
function GetQueryString(name)
{
var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
var r = window.location.search.substr(1).match(reg);
if (r!=null) return unescape(r[2]); return null;
}
//效果函数
$(function(){
	$('.section2 .swiper-slide').click(function(){
		_this = $(this);		
		_this.parents('.content').find('ul').find('li').eq(_this.index()).addClass('current').siblings('li').removeClass('current')
		_this.addClass('current').siblings('.swiper-slide').removeClass('current');
		})
	$('.section2 .swiper-slide').eq(0).addClass('current')
	$('.section2 ul li').eq(0).addClass('current')
	_id = GetQueryString("id");
	// 判断地址链接
	if(parseInt(_id)!=""){		
			setTimeout(function(){$('#fp-nav ul li a').eq(parseInt(_id)).click()},300);
		}
	window.onload = function(){ 
		$('.section3 .swiper-slide').eq(2).addClass('current');
		addr2 = $('.section3 .swiper-wrapper').height();
		$('.section3 .swiper-wrapper').css({'cssText':'max-height:'+addr2+'px'});	
		$(window).resize(function () {
			addr2 = $('.section3 .swiper-wrapper').height();
			$('.section3 .swiper-wrapper').css({'cssText':'max-height:'+addr2+'px'});	
		})
		$('.section2 .content,.section3 .content,.section4 .content,.section6 .content,.section7 .content').each(function(){
		$this = $(this);
		$this.css({'marginTop':-$this.height()/2+'px','transform':'translateY(0)'});
		})
		
	}
	
	$('.section3 .swiper-button-next').click(function(){
		_swiper = $('.section3 .swiper-slide');
		_current = $('.section3 .current.swiper-slide');		
		if(_current.index()<_swiper.length-4){
			_current.removeClass('current');
			_swiper.eq(_current.index()+1).addClass('current');
			}else{
				return;
				}		
		})
	$('.section3 .swiper-button-prev').click(function(){
		_swiper = $('.section3 .swiper-slide');
		_current = $('.section3 .current.swiper-slide');		
		if(_current.index()>1){
			_current.removeClass('current');
			_swiper.eq(_current.index()-1).addClass('current');
			}
		})
	$('#returntop').click(function(){
		$('#fp-nav').find('a').eq(0).click();
		})
	// 手机页居中
	
	})
//加a	
$(function(){ 
   $(".section4 li").click(function(){
		$(this).find('a').each(function(){
		window.location.href = $(this).attr("href");
		})
	});

})	
$(function(){ 
   $(".section3 .swiper-slide").click(function(){
		$(this).find('a').each(function(){
		window.location.href = $(this).attr("href");
		})
	});

})
$(function(){ 
   $(".section2 .sectionSlide li").click(function(){
		$(this).find('a').each(function(){
		window.location.href = $(this).attr("href");
		})
	});
	$('.section2 .content,.section3 .content,.section4 .content,.section6 .content,.section7 .content').each(function(){
		$this = $(this);
		$this.css({'marginTop':-$this.height()/2+'px','transform':'translateY(0)'});
		})
	

})

















