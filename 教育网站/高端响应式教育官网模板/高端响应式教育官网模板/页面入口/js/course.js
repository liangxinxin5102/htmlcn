//by gyn
//课程中心js
//学科导航切换学科内容
var shijian = 500; //呼吸速度
var jiange = 4000; //自动运动间隔时间

var nowimg = 0;
var mytimer = null;

//设置定时器的
mytimer = window.setInterval(dongdong,jiange);
$("#czrightbut").click(dongdong);

$("#czhuxi").mouseenter(function(){
	window.clearInterval(mytimer);
});
$("#czhuxi").mouseleave(function(){
	mytimer = window.setInterval(dongdong,jiange);
});
$("#czimg ul li:first").addClass("first");
function dongdong(){
	if(nowimg < $("#czimg ul li").length - 1){
		nowimg = nowimg + 1;
	}else{
		nowimg = 0;
	}
	$("#czimg ul li").eq(nowimg - 1).animate({"opacity":0},shijian).hide();
	$("#czimg ul li").eq(nowimg).animate({"opacity":1},shijian).show();

	//设置banner旁白内容
	$("#czxinxi ul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
}

$("#czleftbut").click(function(){
	if(nowimg > 0){
		nowimg = nowimg - 1;
	}else{
		nowimg = $("#czimg li").length - 1;
	}
	
	if(nowimg == $("#czimg li").length - 1){
		$("#czimg ul li").eq(0).animate({"opacity":0},shijian);
		$("#czimg ul li").eq(nowimg)    .animate({"opacity":1},shijian).show();
	}else{
		$("#czimg ul li").eq(nowimg + 1).animate({"opacity":0},shijian).hide();
		$("#czimg ul li").eq(nowimg)    .animate({"opacity":1},shijian).show();
	}
	//设置banner旁白内容
	$("#czxinxi ul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
});
$("#czxinxi ul li").click(function(){
	$("#czimg ul li").eq(nowimg).animate({"opacity":0},shijian).hide();
	nowimg = $(this).index();
	$("#czimg ul li").eq(nowimg).animate({"opacity":1},shijian).show();

	//设置banner旁白内容
	$("#czxinxi ul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
});

//浮动导航js
$(window).scroll(function(){
	var A=$(window).scrollTop();
	if(A > 3600){	
		$(".coursefd").fadeOut();	
		return;
	}	
	if(A<=583&&A>0){
		$(".coursefd").fadeOut();
		return;
	}
	var lay_conke = $(".lay_conke");
	for(i=0;i<lay_conke.length; i++){
		if(A >= $(lay_conke[i]).offset().top - 51){
			$(".coursefd ul li:eq("+i+")").children("div").show().parent().siblings().children("div").hide();
			$(".coursefd").fadeIn();
		}	
	}
});
