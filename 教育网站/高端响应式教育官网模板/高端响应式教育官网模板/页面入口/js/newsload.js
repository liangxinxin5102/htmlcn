$(function(){
	$("#news_tab span[file]").click(function(){
		$(this).addClass("current").siblings().removeClass("current");
	    var path = $(this).attr("file")+ "?"+ new Date().getTime();
	    $.get(path, function(data){
		   $("#listcontent").html(data);
	    });
	});
	var allpath = $("#news_tab span[file]:first").attr("file")+ "?"+ new Date().getTime();
    $.post(allpath, function(data){
		   $('#listcontent').html(data);
	});
})