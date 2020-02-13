//by gyn
//其他页面js

//报名流程页面城市银行信息切换
$(".box_flow .city_tab a").mouseenter(function(){
	$(".bank .bank_list").eq($(this).index()).addClass("bank_list_cur").siblings().removeClass("bank_list_cur");
})

//课程详情页面右侧导航
$(".h_list_js .view_nav").click(function(){
    var posL = $(this).position().top;
   	$(this).parent().siblings(".curBg").stop().animate({
	"top":posL+11,
   	 }, "fast");	
	$("html,body").animate(
		{
			"scrollTop":$(".view_hd").eq($(this).index()).offset().top
		},200);
});  
$(window).scroll(function(){
	var top=$(window).scrollTop();
	if(top<=600&&top>0){
		$(".view_con .con_r").removeClass("con_r_fixd");	
	}
	var win_h=$(window).height();
	var box_h=$(".view_con .con_r").height();
	var con_r_top=win_h-box_h;
	var con_r_top=con_r_top/3; 	
 	var view_hd = $(".view_hd");	
	for(i=0;i<view_hd.length; i++){
		if(top >= $(view_hd[i]).offset().top-50){
			var this_nav=$(".view_nav:eq("+i+")");
			var this_mm =  this_nav.position().top;
			this_nav.parent().siblings(".curBg").stop().animate({
			"top":this_mm+11,
		 	 }, "fast");	
		 	
			$(".view_con .con_r").addClass("con_r_fixd");
			$(".con_r_fixd").animate(
				{
					"top":con_r_top,
				},200);	
		}
	}
});

//通用右侧广告位banner特效
jQuery(".slideBox").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true,trigger:"click"});



