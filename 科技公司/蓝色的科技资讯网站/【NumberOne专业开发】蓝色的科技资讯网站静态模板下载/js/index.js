// JavaScript Document
$(document).ready(function(){
	
	//登陆切换
	$("ul.tabs").tabs("div.panes > div", {event:'mouseover'});
	$("#idxpic").tabs("div.description", {event:'mouseover'});

	//延迟加载
    $("img").lazyload({
   		effect : "fadeIn",threshold:150,failurelimit :9
    });
	
	jQuery(".focusBox").slide({ titCell:".num li", mainCell:".pic",effect:"fold", autoPlay:true,trigger:"click",startFun:function(i){
		jQuery(".focusBox .txt li").eq(i).css({"bottom":0}).siblings().css({"bottom":-36});			
	}});
	
	// main vertical scroll
	$("#idxmb_main").scrollable({

        // basic settings
        vertical: true,
        // up/down keys will always control this scrollable
        keyboard: 'static',
		circular: true,
		interval: 3000

     // main navigator (thumbnail images)
     }).autoscroll({ autoplay: true }).navigator("#main_navi");
	 
	 //理事会滚动
	 jQuery(".txtMarquee-top").slide({mainCell:".bd ul",autoPlay:true,effect:"topMarquee",vis:8,interTime:70,trigger:"click"});



});