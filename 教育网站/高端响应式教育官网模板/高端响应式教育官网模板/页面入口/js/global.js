//by gyn
//全局页面  头尾部  js
//快速导航鼠标悬浮校区出现
$(".top_r .li_js").mouseenter(function(){
	$(this).children("ul").slideDown();
})
$(".top_r .li_js").mouseleave(function(){
	$(this).children("ul").stop().slideUp("fast");
})

//导航处下拉列表
$(".nav .a_js").mouseenter(function(){
	$(".fdfree").slideDown().siblings('.fdcourse').hide();
})
$(".header .a3_js").mouseenter(function(){
	$(".fdcourse").slideDown().siblings('.fdfree').hide();
})
$(".header .a2_js").mouseenter(function(){
	$(".fdnav").stop().slideUp("fast");
})
$(".header").mouseleave(function(){
	$(".fdnav").stop().slideUp("fast");
})

//lay通用板块tab选项卡
$(".lay .hd_rr li").mouseenter(function(){
	$(this).addClass("cur").siblings().removeClass("cur").parent().parent().parent().siblings(".lay_con").children("ul").eq($(this).index()).show().siblings().hide();
})

//课程浮动特效
$(".coursefd ul li").click(function(){
	$("html,body").animate(
		{
			"scrollTop":$(".lay_conke").eq($(this).index()).offset().top - 50
		},500);
});

//banner新特效
var banli = $(".slideBox .bd ul li");
var banli = parseInt(banli.length) - 1;
var ban_html = "";
for(i=0;i<banli;i++){
	ban_html += "<li></li>";
}
var boxli=$(".slideBox .hd ul").html();
$(".slideBox .hd ul").html(boxli+ban_html);

//各校区开班信息tab栏
var hrefMap = {
				"BEIJING":"http://d.itcast.cn/3",
				"SHANGHAI":"http://d.itcast.cn/3",
				"GUANGZHOU":"http://d.itcast.cn/3",
				"SHENZHEN":"http://d.itcast.cn/3",
				"WUHAN":"http://d.itcast.cn/7",
				"ZHENGZHOU":"http://d.itcast.cn/3",
				"XIAN":"http://d.itcast.cn/9",
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
	$(this).addClass("cur").siblings().removeClass("cur").parent().parent().siblings(".city_class").children("ul").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
	var city=$(this).parent().parent().siblings(".city_class").children(".cur").find("a");
	var sid = city.attr("schoolid");
	city.attr({"href":hrefMap[sid]});
})
	

//各校区开班信息板块颜色奇偶
$(".city_subject ul li:odd").css("background","#F7F7F7");

//课程升级页面底部历史板块
var oli = $(".myul > li").length;
var liz=oli*130;
$(".myul").css("width",liz+"px");

//课程升级历史页面
$(".zhezhao a").click(function(){
	$(".zhezhao").hide();
})				
$(".video ul li").click(function(){
	var h = $(document).height();
	$(".zhezhao").css({"visibility":"visible","height":h+"px"});
	$(".zhezhao").fadeIn();
	$(".zhezhao").children().children().children().eq($(this).index()).show().siblings("li").hide();
})
//弹窗
var _btn = document.getElementById("webimclosebutton");		
_btn.onclick=function(){
	var _fixed = document.getElementById("webim");
	_fixed.style.display = "none";		
}
