
(function(a){
    a.fn.webwidget_menu_glide=function(p){
        var p=p||{};

        var f=p&&p.menu_text_size?p.menu_text_size:"12px";
        var g=p&&p.menu_text_color?p.menu_text_color:"blue";
        var h=p&&p.menu_margin?p.menu_margin:"10px";
        var i=p&&p.menu_width?p.menu_width:"100px";
        var j=p&&p.menu_height?p.menu_height:"40px";
        var k=p&&p.menu_sprite_color?p.menu_sprite_color:"red";
        var l=p&&p.menu_background_color?p.menu_background_color:"none";
        var m=p&&p.sprite_speed?p.sprite_speed:"fast";
        f += "px";
        h += "px";
        i += "px";
        j += "px";
        var n=a(this);
        if(n.children("ul").length==0||n.find("li").length==0){
            n.append("Require menu content");
            return null
            }
            s_m(n.children("ul").children("li"),h,i,j);
        s_m_t_c(n.find("a"),g,j,f);
        n.css("background-color",l);
        if(n.children("ul").children("li").is(".current")){
            var o=n.children("ul").children("li").filter(".current").offset()
            }else{
            var o=n.children("ul").children("li:first").offset()
            }
            var q=o.left+'px';
        s_m_s_c(n.find(".webwidget_menu_glide_sprite"),k,i,j,q);
        n.children("ul").children("li").hover(function(){
            var b=$(this).offset();
            var c=b.left+'px';
            n.find(".webwidget_menu_glide_sprite").stop().animate({
                left:c
            },m)
            },function(){
            n.find(".webwidget_menu_glide_sprite").stop().animate({
                left:q
            },m)
            });
        n.children("ul").children("li").children("ul").children("li").hover(function(){},function(){});
        function s_m_t_c(a,b,c,d){
            a.css("color",b);
            a.css("line-height",c);
            a.css("font-size",d)
            }
            function s_m(a,b,c,d){
            style="margin-right:"+b+"; width: "+c+"; height: "+d+";";
            a.attr("style",style)
            }
            function s_m_s_c(a,b,c,d,e){
            a.css("background-color",b);
			a.css("opacity", 0.04);
			a.css("border-radius", "50px");
            a.css("width",c);
            a.css("height",d);
            a.css("left",e)
            }
        }
})(jQuery);

//placeholder功能实现
var placeholder = {
add: function (el) {
if (!('placeholder' in document.createElement('input'))) {
var self = placeholder;
el.each(function (e) {
if (IsEmpty(e.value()) || e.value() == e.attr('placeholder')) {
e.value(e.attr('placeholder'));
e.css('color', 'gray');
}
else {
e.css('color', 'black');
}
});
el.bind('focus', self._onfocus);
el.bind('click', self._onfocus);
el.bind('blur', self._onblur);
el.bind('keyup', self._onkeyup);
}
},
remove: function (el) {
if (!('placeholder' in document.createElement('input'))) {
var self = placeholder;
el.unbind('focus', self._onfocus);
el.unbind('click', self._onfocus);
el.unbind('blur', self._onblur);
}
},
check: function (el) {
if (!('placeholder' in document.createElement('input'))) {
el.each(function (tar) {
if (IsEmpty(tar.value())) {
tar.value(tar.attr('placeholder'));
}
});
}
},
clear: function () {
if (!('placeholder' in document.createElement('input'))) {
$('input[type="text"]').each(function (el) {
if (el.value() == el.attr('placeholder')) {
el.value('');
}
});
$('textarea').each(function (el) {
if (el.value() == el.attr('placeholder')) {
el.value('');
}
});
}
},
_onfocus: function () {
if ($(this).value() == $(this).attr('placeholder'))
$(this).value('');
},
_onblur: function () {
if (IsEmpty($(this).value()) || $(this).value() == $(this).attr('placeholder')) {
$(this).value($(this).attr('placeholder'));
$(this).css('color', 'gray');
}
else {
$(this).css('color', 'black');
}
},
_onkeyup: function () {
if (IsEmpty($(this).value())) {
$(this).css('color', 'gray');
}
else {
$(this).css('color', 'black');
}
}
}; 

$(document).ready(function()    {      
    $("input").focusin(function() {
        if($(this).val() =="请输入"){  
            $(this).val("");
        }
    });
    $("input").focusout(function() {
        if($(this).val() ==""){ 
            $(this).val("请输入");
        }
    });
});

/***********************/
/*右侧悬浮*/
$(function(){

	var tophtml="<div id=\"izl_rmenu\" class=\"izl-rmenu\"><a href=\"http://q.url.cn/s/IygMzVm\" target=\"_blank\"  class=\"btn btn-qq\" id=\"webqq\"></a><div class=\"btn btn-wx\"><img class=\"pic\" src=\"images/weixin.jpg\" onclick=\"window.location.href=\'index.html\'\"/></div><div class=\"btn btn-phone\"><div class=\"phone\">Tel: 4001-021-758</div></div><div class=\"btn btn-top\"></div></div>";
	$("#top").html(tophtml);
	$("#izl_rmenu").each(function(){
		$(this).find(".btn-wx").mouseenter(function(){
			$(this).find(".pic").fadeIn("fast");
		});
		$(this).find(".btn-wx").mouseleave(function(){
			$(this).find(".pic").fadeOut("fast");
		});
		$(this).find(".btn-phone").mouseenter(function(){
			$(this).find(".phone").fadeIn("fast");
		});
		$(this).find(".btn-phone").mouseleave(function(){
			$(this).find(".phone").fadeOut("fast");
		});
		$(this).find(".btn-top").click(function(){
			$("html, body").animate({
				"scroll-top":0
			},"fast");
		});
	});
	var lastRmenuStatus=false;
	$(window).scroll(function(){//bug
		var _top=$(window).scrollTop();
		if(_top>200){
			$("#izl_rmenu").data("expanded",true);
		}else{
			$("#izl_rmenu").data("expanded",false);
		}
		if($("#izl_rmenu").data("expanded")!=lastRmenuStatus){
			lastRmenuStatus=$("#izl_rmenu").data("expanded");
			if(lastRmenuStatus){
				$("#izl_rmenu .btn-top").slideDown();
			}else{
				$("#izl_rmenu .btn-top").slideUp();
			}
		}
	});
});







