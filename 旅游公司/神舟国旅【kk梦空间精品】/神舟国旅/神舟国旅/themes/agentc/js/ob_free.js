$(document).ready(function(){
	var $scroll_nav_top = $('#scroll_nav').offset();
	var offset=50;
	var row_1=0,row_2=0,row_3=0,row_4=0,row_5=0,row_6=0,row_7=0,row_8=0,row_9=0,row_10=0;
	function scrollLocation () {
		row_1 = $('#row_1').offset()?$('#row_1').offset().top-offset:0;
		row_2 = $('#row_2').offset()?$('#row_2').offset().top-offset:0;
		row_3 = $('#row_3').offset()?$('#row_3').offset().top-offset:0;
		row_4 = $('#row_4').offset()?$('#row_4').offset().top-offset:0;
		row_5 = $('#row_5').offset()?$('#row_5').offset().top-offset:0;
		row_6 = $('#row_6').offset()?$('#row_6').offset().top-offset:0;
		row_7 = $('#row_7').offset()?$('#row_7').offset().top-offset:0;
		row_8 = $('#row_8').offset()?$('#row_8').offset().top-offset:0;
		row_9 = $('#row_9').offset()?$('#row_9').offset().top-offset:0;
		row_10 = $('#row_10').offset()?$('#row_10').offset().top-offset:0;
	}
	
	var li = $("#scroll_nav li");
	var $scroll_nav = $('#scroll_nav');
	var $scroll_nav_top = $scroll_nav.offset().top;
	
	var status = -1;
	$(window).on('selectTp load',function(){
		scrollLocation ();
	}).resize(function() {
		scrollLocation ();
	}).scroll(function(){//监听滚动条
		//return;
		var $scrollTop = $(this).scrollTop();
		
		if($scrollTop>$scroll_nav_top){
			if(!$scroll_nav.hasClass("scroll_nav")){
				if($.browser.msie){
					if($.browser.version=="6.0"){
						$scroll_nav.css({position:"absolute",top:$scrollTop-145,left:$scroll_nav.offset().left})
					}else{
						var left = ($(window).width() - $scroll_nav.width())/2;
						left = left>0?left:0;
						$scroll_nav.css("left",left);
					}
				}
				$scroll_nav.addClass('scroll_nav');
			}
		}else{
			if($scroll_nav.hasClass("scroll_nav")){
				if($.browser.msie && $.browser.version=="6.0"){
					$scroll_nav.css({position:"static"});
				}
				$scroll_nav.removeClass('scroll_nav');
			}
		}
        
        if(row_10>0&&$scrollTop >= row_10) {
			if(status!=10){
				li.filter(".scroll_nav_current").removeClass("scroll_nav_current");
				li.filter('.row_10').addClass('scroll_nav_current');
				status = 10;
			}
		}
		else if(row_9>0&&$scrollTop >= row_9) {
			if(status!=9){
				li.filter(".scroll_nav_current").removeClass("scroll_nav_current");
				li.filter('.row_9').addClass('scroll_nav_current');
				status = 9;
			}
		}
		else if(row_8>0&&$scrollTop >= row_8) {
			if(status!=8){
				li.filter(".scroll_nav_current").removeClass("scroll_nav_current");
				li.filter('.row_8').addClass('scroll_nav_current');
				status = 8;
			}
		}
		else  if(row_7>0&&$scrollTop >= row_7) {
			if(status!=7){
				li.filter(".scroll_nav_current").removeClass("scroll_nav_current");
				li.filter('.row_7').addClass('scroll_nav_current');
				status = 7;
			}
		}
		else  if(row_6>0&&$scrollTop >= row_6) {
			if(status!=6){
				li.filter(".scroll_nav_current").removeClass("scroll_nav_current");
				li.filter('.row_6').addClass('scroll_nav_current');
				status = 6;
			}
		}
		else  if(row_5>0&&$scrollTop >= row_5) {
			if(status!=5){
				li.filter(".scroll_nav_current").removeClass("scroll_nav_current");
				li.filter('.row_5').addClass('scroll_nav_current');
				status = 5;
			}
		}
		else  if(row_4>0&&$scrollTop >= row_4) {
			if(status!=4){
				li.filter(".scroll_nav_current").removeClass("scroll_nav_current");
				li.filter('.row_4').addClass('scroll_nav_current');
				status = 4;
			}
		}
		else  if(row_3>0&&$scrollTop >= row_3) {
			if(status!=3){
				li.filter(".scroll_nav_current").removeClass("scroll_nav_current");
				li.filter('.row_3').addClass('scroll_nav_current');
				status = 3;
			}
		}
		else  if(row_2>0&&$scrollTop >= row_2) {
			if(status!=2){
				li.filter(".scroll_nav_current").removeClass("scroll_nav_current");
				li.filter('.row_2').addClass('scroll_nav_current');
				status = 2;
			}
		}
		else if(row_1>0&&$scrollTop >= row_1) {
			if(status!=1){
				li.filter(".scroll_nav_current").removeClass("scroll_nav_current");
				li.filter('.row_1').addClass('scroll_nav_current');
				status = 1;
			}
		}
	});
	$('.scroll_nav_ul li').removeClass('scroll_nav_current')
	.first().addClass('scroll_nav_current').end()
	.live('click', function (event) {
	    //$(this).off('click');
	    var $scroll_nav_ul_li = $('.scroll_nav_ul li');
	    var li_id = $(this).attr("class");
	    var $li = $('#' + li_id);
	    if ($li.length) {
	        $(window).scrollTop($li.offset().top);
	    }

	    event.stopPropagation();
	});
	
	
	/*pp*/
	$(window).load(function(){
		big_banner(".dtl_focusbox",".dtl_crtimg",".dtl_focuslist","dtl_focus_crt")//banner	
	
	})
	//优惠活动切换
		var allNum = 0;
	var i, j;
	var indexNum = $(".youhui_tab li:last-child").index();
	$(".youhui_tab li:first-child").fadeIn(1000);
	function imgScroll(){
		allNum += 1;
		if(allNum>indexNum) allNum=0;
		$(".youhui_tab li").eq(allNum).fadeIn(1000).siblings().hide();
	}
	var anima = setInterval(imgScroll,5000);
	$(".youhui_tab").hover(
	function () {
		clearInterval(anima);
	}
	,
	function () {
		anima = setInterval(imgScroll,5000);
	}
	);
	// 起价说明
	$qjsm=$(".qijiashuoming");
	$sm=$(".shuoming");
	$(".qijiashuoming,.shuoming").hover(
		function(e){
			$sm.css({
				display:"block",
				left:($qjsm.offset().left-50) + "px",
				top:($qjsm.offset().top + 5) + "px"
			})
		},function(){
			$sm.hide();
		}
	)//
});
/*$(".qijiashuoming").mouseover(function(){
   $(".shuoming").css({display:"block"})
   })
  .mouseout(function(){
	$(".shuoming").css({display:"none"});
	})
  .mousemove(function(__e){
	$(".shuoming").css({
		display:"block",
		left:(__e.pageX - 220) + "px",
		top:(__e.pageY + 5) + "px"
	   })
	});
})(jQuery);*/
/*add*/
var close_evt=function(close_btn,black_bg){
	$(close_btn).bind("click",function(){
		$(this).parent().hide();
		$(black_bg).hide();
	});
}//弹出层关闭
var free_popshow=function(showPop,black_bg){
	var w_scroll =parseInt(document.body.offsetWidth/2);
	var w_object =parseInt($(showPop).width()/2);
	var h_scroll =parseInt(window.screen.availHeight/2);
	var h_object =parseInt($(showPop).height()/2);
	var l_obj =w_scroll-w_object;
	var t_obj =h_scroll-h_object-40;
	$(showPop).css("left",l_obj);
	$(showPop).css("top",t_obj);
	$(showPop).show();
	var dh=document.body.scrollHeight;
	var wh=window.screen.availHeight;
	var yScroll;
	if(dh>wh){
		yScroll =dh;
	}
	else{
		yScroll = wh;
	}
	$(black_bg).css("height", yScroll);
	$(black_bg).show();
}//弹出层	
/*add*/	
//peng
// JavaScript Document
/*pp*/
var big_banner=function(banner_panel,img_panel,bar_list,bar_crt){
	var allNum = 0;
	var i, j;
	var indexNum = $(img_panel).find("li:last-child").index();
	$(img_panel).find("li:first-child").fadeIn(1000);
	            $(bar_list).find("li").mouseover(function(){
		var num = $(this).index();
		allNum= num;
		$(this).addClass(bar_crt).siblings().removeClass(bar_crt);
		$(img_panel).find("li").eq(num).fadeIn(800).siblings().hide();
	});
	function imgScroll(){
		$(bar_list).find("li").eq(allNum).addClass(bar_crt).siblings().removeClass(bar_crt);
		$(img_panel).find("li").eq(allNum).fadeIn(1000).siblings().hide();
		allNum += 1;
		if(allNum>indexNum) allNum=0;
	}
	var anima = setInterval(imgScroll,3000);
	$(banner_panel).hover(
	function () {
		clearInterval(anima);
	}
	,
	function () {
		anima = setInterval(imgScroll,3000);
	}
	);
}//banner  
var tabC=function(o,classname,num){
	var tabCrt=num;
	$(o).each(function(){
		$(this).bind("click",function(){
			$(this).siblings().removeClass(classname);
			$(this).addClass(classname);
			tabCrt=$(this).index();
		}).bind("mouseover",function(){
			$(this).siblings().removeClass(classname);
			$(this).addClass(classname);
			// $(this).parent().children().eq(tabCrt).addClass(classname);
			            }).bind("mouseout",function(){
			$(this).parent().children().removeClass(classname);
			$(this).parent().children().eq(tabCrt).addClass(classname);
			;
		})   
	
	})       

}//记忆点击项tab切换
