//by gyn
//官网首页js
//学科导航切换学科内容
// $(".sub_nav ul li").mouseenter(function(){
	// $(this).addClass("cur").siblings().removeClass("cur");
	// $(".course_kind").show();
	// $(".course_kind").find("li").eq($(this).index()).show().siblings().hide();
// })
// $(".sub_nav").mouseleave(function(){
	// $(this).find("li").removeClass("cur");
	// $(".course_kind").stop().hide("fast");
// })

$(".nav_txt .nav_li").mouseenter(function(){
	$(this).addClass("cur").siblings().removeClass("cur");
	$(".course_kind").show();
	$(".course_kind").find(".icon_fuli").eq($(this).index()).show().siblings().hide();
})
$(".sub_nav").mouseleave(function(){
	$(this).find(".nav_li").removeClass("cur");
	$(".course_kind").stop().hide("fast");
})

//首页推荐内容特效
var kuandu = 1220; 	//这个数字是每张图片的宽度，记得按需更改
var shijian = 700; //这个数字是动画时间
var jiangeshijian = 7000; //这个数字是间隔时间
var nowimg = 0; 	
var mytimer = null;

$("#czimg ul:first").clone().appendTo("#czimg");
var mytimer = window.setInterval(function(){youanniu();},jiangeshijian);
$("#czlunbo").mouseenter(function(){
	window.clearInterval(mytimer);
});
$("#czlunbo").mouseleave(function(){
	window.clearInterval(mytimer);
	mytimer = window.setInterval(function(){
		youanniu();
	},jiangeshijian);
});
$("#czrightbut").click(youanniu);
function youanniu(){
		if(!$("#czimg").is(":animated")){			
			if(nowimg < $("#czimg ul").length - 2){
				nowimg = nowimg + 1;
				dongzuo();
			}else{
				nowimg = 0;
				$("#czimg").animate(
					{
						"left":-kuandu*($("#czimg ul").length-1)
					},shijian,function(){
						$("#czimg").css("top",0);
					}
				);
				$(".hd_rr span").eq(nowimg).addClass("cur").siblings().removeClass("cur");
			}
		}
	}
$(".hd_rr span").click(function(){
	nowimg = $(this).index();
	dongzuo();
});
function dongzuo(){
	$("#czimg").stop().animate(
	{
		"left":-kuandu * nowimg
	}
	,shijian
	);
	$(".hd_rr span").eq(nowimg).addClass("cur").siblings().removeClass("cur");
}


//浮动导航js
$(window).scroll(function(){
	var A=$(window).scrollTop();
	if(A > 5470){	
		$(".coursefd").fadeOut();	
		return;
	}	
	if(A<=1400&&A>0){
		$(".coursefd").fadeOut();
	}
	var lay_conke = $(".lay_conke");
	for(i=0;i<lay_conke.length; i++){
		if(A >= $(lay_conke[i]).offset().top - 51){
			$(".coursefd ul li:eq("+i+")").children("div").show().parent().siblings().children("div").hide();
			$(".coursefd").fadeIn();
		}	
	}
});

var hrefMap = {
				"BEIJING":"http://d.itcast.cn/3",
				"SHANGHAI":"http://d.itcast.cn/3",
				"GUANGZHOU":"http://d.itcast.cn/3",
				"SHENZHEN":"http://d.itcast.cn/3",
				"WUHAN":"http://d.itcast.cn/7",
				"ZHENGZHOU":"http://d.itcast.cn/3",
				"XIAN":"http://d.itcast.cn/3",
				"HAERBIN":"http://d.itcast.cn/3",
				"CHANGSHA":"http://d.itcast.cn/3",
				"JINAN":"http://d.itcast.cn/3",
				"CHONGQING":"http://d.itcast.cn/3",
				"NANJING":"http://d.itcast.cn/3",
				"HANGZHOU":"http://d.itcast.cn/3",
				"CHENGDOU":"http://d.itcast.cn/3",				
			};

			
var sid = $(".city_class .cur a").attr("schoolid");
$(".city_class ul.cur a").attr({"href":hrefMap[sid]});
$(".city_tab a").attr("href","javascript:;");
$(".city_tab").children().children("a:first").addClass("cur");
$(".city_tab a").mouseenter(function(){
	$(this).addClass("cur").siblings().removeClass("cur").parent().parent().siblings(".city_class").children("div").eq($(this).index()).addClass("cur").children("ul").addClass("cur").parent().siblings().removeClass("cur").children("ul").removeClass("cur");	
	var city=$(this).parent().parent().siblings(".city_class").children(".cur").find("a");
	var sid = city.attr("schoolid");
	city.attr({"href":hrefMap[sid]});
})

