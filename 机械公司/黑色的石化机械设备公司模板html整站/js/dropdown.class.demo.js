/**
 * Gallery
 * --------
 * 
 * author: Andrei Dinca & Alexandra Ipate
 		                    _          _   _____  _                 
		    /\             | |        (_) |  __ \(_)                
		   /  \   _ __   __| |_ __ ___ _  | |  | |_ _ __   ___ __ _ 
		  / /\ \ | '_ \ / _` | '__/ _ \ | | |  | | | '_ \ / __/ _` |
		 / ____ \| | | | (_| | | |  __/ | | |__| | | | | | (_| (_| |
		/_/    \_\_| |_|\__,_|_|  \___|_| |_____/|_|_| |_|\___\__,_|
		
 * email: andrei.webdeveloper@gmail.com
 *
 * version 1.0 release date: 2.12.2010
 *
**/
(function(c){c.fn.extend({jDropDown:function(d){d=c.extend({demo:true,effect:"",notMenu:".home",duration:{fadeIn:300,fadeOut:60,slideIn:300,slideOut:60}},d);return this.each(function(){function f(a,g){if(g=="open"){if(b.effect=="fade")a.find("div:first").css("opacity",0).css("visibility","visible").animate({opacity:1,MarginTop:3},b.duration.fadeIn);else if(b.effect=="slide"){var e=a.find("div:first").height();a.find("div:first").css("height",0).css("visibility","visible").stop(false,true).animate({height:e}, b.duration.slideIn)}else a.find("div:first").css("visibility","visible");return true}if(g=="close"){if(b.effect=="fade")a.find("div:first").animate({opacity:0},b.duration.fadeOut,function(){c(this).css("visibility","hidden")});else if(b.effect=="slide"){e=a.find("div:first").height();a.find("div:first").css("overflow","hidden").stop(false,true).animate({height:0},b.duration.slideOut,function(){c(this).css("visibility","hidden").css("height",e)})}else a.find("div:first").css("visibility","hidden"); return true}alert("Uncatch exception. Invalid effect mode!");return false}var b=d,h=c(this);h.find("> li").not(b.notMenu).hover(function(){var a=c(this);h.find(".on").removeClass("on");a.find("a").addClass("on");if(b.demo)b.effect=c("#effect").val();f(a,"open")},function(){var a=c(this);a.find("a").removeClass("on");f(a,"close")})})}})})(jQuery);

$(document).ready(function() {
	$("ul#jDropDown").jDropDown({
		effect: 'slide'
	});
});