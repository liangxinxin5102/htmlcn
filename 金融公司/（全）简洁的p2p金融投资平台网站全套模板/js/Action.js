$(window).load(function(){
	size();
	//会员首页
	$(".Record-tab tr:even").addClass("bg");
	//站内消息
	$(".Station-news .btn").click(function(){
		if($(this).find(".text").text()=='展开'){
			$(this).find(".text").text("收起").siblings(".myfont").html("&#xe61a;");
			$(this).parents("dl").siblings("dl").find(".text").text("展开").siblings(".myfont").html("&#xe609;");
		}
		else{
			$(this).find(".text").text("展开").siblings(".myfont").html("&#xe609;");
			$(this).parents("dl").siblings("dl").find(".text").text("展开").siblings(".myfont").html("&#xe609;");
		}		
		$(this).parents("dt").siblings("dd").toggle().parents("dl").siblings("dl").find("dd").hide();
	})
	
})
function size(){
	var w=$(window).width(),
	   r=(w-1100)*0.5;
	$(".regbox").css("right",r);
}
//导航高亮
function nav(){
	var _nav = $("body").attr("cur");
	if (_nav != "" && (!isNaN(_nav))) {
		$(".nav>li").eq(_nav).addClass("active");
	}
}
//判断路径，给左边菜单加样式
function GetRequest() {
	var str=location.pathname;
	a=str.substr(str.lastIndexOf("/")+1);
	$(".side-nav a").each(function() {
		var a_h=$(this).attr("href");
		if(a==a_h){
			$(this).parents("li").addClass("active");
		}
	});
}
//产品页面条件筛选为选中的条件加样式
function initclass() {
	var id = getQueryStringByName("id");
	if (!isNaN(id)) {
		$(".Grouplist .job").eq(id).find(".job-bd").show().siblings(".job-hd").addClass("active");/*
		var url = "Group.html?id=" + id;
		$(".nav-pills li a[href='" + url + "']").parents("li").addClass("active").siblings("li").removeClass("active");*/
	}
}
//根据QueryString参数名称获取值
function getQueryStringByName(name) {
	var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
	if (result == null || result.length < 1) {
		return "";
	}
	return result[1];
}		
//字数限制
function words_deal(){var a=$("#TextArea1").val().length;if(a>500){var b=$("#TextArea1").val().substr(0,500);$("#TextArea1").val(b),alert("\u8d85\u8fc7\u5b57\u6570\u9650\u5236\uff0c\u591a\u51fa\u7684\u5b57\u5c06\u88ab\u622a\u65ad\uff01")}else $("#textCount").text(500-$("#TextArea1").val().length)}
