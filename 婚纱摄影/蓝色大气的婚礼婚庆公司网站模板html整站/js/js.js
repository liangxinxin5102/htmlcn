// JavaScript Document
$(function(){
	//设计师推荐
	//$(".nav li:eq(6)").css("padding","0 5px 0 5px")
	//.team dl
	$(".team dl").hover(function(){
		$(this).find("dd").stop(true,true).slideDown();
		},function(){
			$(this).find("dd").stop(true,true).fadeOut();
			})
	//.tishi dl
	$(".tishiList dl:even").css("float","right")	
	//.scene dl
	$(".scene dl:eq(1)").addClass("dingbian");
	$(".scene dl:eq(1),.scene dl:eq(4)").css("margin","40px 42px");
	
	$(".scene dl").hover(function(){
		$(this).find(".sceBg").fadeIn();
		$(this).find(".sceneMore").fadeIn();
		$(this).addClass("sceneCur");
		},function(){
			$(this).find(".sceBg").fadeOut();
		    $(this).find(".sceneMore").fadeOut();
			$(this).removeClass("sceneCur");
			})
	//.decoration dl
	$(".decoration dl").hover(function(){
		$(this).find("dd").fadeIn();
		$(this).find(".decMore").fadeIn();
		},function(){
			$(this).find("dd").fadeOut();
		    $(this).find(".decMore").fadeOut();
			})
	})
	
	
	