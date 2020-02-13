$(function(){
	//页面导入
	$.get("head.html",function(html){$("body").prepend(html);});
	$.get("foot.html",function(html){$("body").append(html);nav();});	
})