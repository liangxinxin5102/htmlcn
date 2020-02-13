$(function(){
	$(".imageRotation").each(function(){
        // 获取有关参数
        var imageRotation = this,  // 取得 图片轮换容器
            imageBox = $(imageRotation).children(".imageBox")[0],  // 取得 图片容器
            icoBox = $(imageRotation).children(".icoBox")[0],  // 取得 图标容器
            icoArr = $(icoBox).children(),  // 取得所有图标，并保存为数组
            imageWidth = $(imageRotation).width(),  // 图片宽度
            imageNum = $(imageBox).children().size(),  // 图片数量
            imageReelWidth = imageWidth*imageNum,  // 图片容器宽度
            activeID = parseInt($($(icoBox).children(".active")[0]).attr("rel")),  // 当前图片ID
            nextID = 0,  // 下张图片ID
            setIntervalID,  // setInterval() 函数ID
            intervalTime = 4000,  // 间隔时间
            speed =500;  // 执行速度
         
        // 设置 图片容器 的宽度
        $(imageBox).css({'width' : imageReelWidth + "px"});
        var imgNb = $(imageRotation).children(".imageBox").children(".imgsize").length;
		var lft = (imageWidth-$('.icoBox').width())/2;
		$('.icoBox').attr('style','left:'+lft+'px');
        // 图片轮换函数
        var rotate=function(clickID){
            if(clickID){ nextID = clickID; }
            else{ nextID=activeID< imgNb ? activeID+1 : 1; }
             
            $(icoArr[activeID-1]).removeClass("active");
            $(icoArr[nextID-1]).addClass("active");
            $(imageBox).animate({left:"-"+(nextID-1)*imageWidth+"px"} , speed);
             
            activeID = nextID;
        }
        setIntervalID=setInterval(rotate,intervalTime);
         
        $(imageBox).hover(
            function(){ clearInterval(setIntervalID); },
            function(){ setIntervalID=setInterval(rotate,intervalTime); }
        );  
         
        $(icoArr).click(function(){
            clearInterval(setIntervalID);
            var clickID = parseInt($(this).attr("rel"));
            rotate(clickID);
            setIntervalID=setInterval(rotate,intervalTime);
        });
    });

});
function getClass(oParent,sClass)
{
	var value=[];
	var Ele=oParent.getElementsByTagName('*');
	for (var i=0; i<Ele.length; i++)
	{
		var aClass=Ele[i].className.split(' ');
		for (n=0; n<aClass.length; n++)
		{
			if (aClass[n]==sClass)
			{
				value.push(Ele[i]);
			}
		}
	}
	return value;
}
function getStyle(obj,name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj,false)[name];
	}
}
function Running(obj,json,fnEnd)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function()
	{
		var now=0;
		var bStop=true;
		for (var attr in json)
		{
			if(attr=='opacity')
			{
				now=Math.round(parseFloat(getStyle(obj,attr))*100);
			}
			else
			{
				now=parseInt(getStyle(obj,attr));
			}
			var speed=(json[attr]-now)/5;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(now!=json[attr])bStop=false;
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+now+speed+')';
				obj.style.opacity=(now+speed)/100;
			}
			else
			{
				obj.style[attr]=speed+now+'px';
			}
		}
		if(bStop)
		{
			clearInterval(obj.timer);
			if(fnEnd)fnEnd();
		}
	}, 30);
}
window.onload=function()
{
	var oBox=document.getElementById('box');
	// var oTitle=getClass(oBox,'title');
	var closed='';
	var opened='';
	var i=1;
	
	// oTitle[0].onclick=function()
	// {
	// 	i++;
	// 	(i%2)?Running(oBox,{right:0},function()
	// 	{
	// 		oTitle[0].innerHTML=closed;			
	// 	})
	// 	:Running(oBox,{right:-138},function()
	// 	{
	// 		oTitle[0].innerHTML=opened;
	// 	});	
	// }
}
$(function(){	
	$("#box").find(".main").find('.info').click(function(){
		$(this).parents(".main").find("ul").toggle();
		 var m=$(this).parents(".main").find("ul");
		 if(m.css("display")=="block"){
			 m.parents(".main").find(".info i").removeClass('i_1');
			 m.parents(".main").find(".info i").addClass('i_2');
			 }
			 else{
			 m.parents(".main").find(".info i").removeClass('i_2');
			 m.parents(".main").find(".info i").addClass('i_1');
				 }
		})
	$('.login_chease .login_packbox').hover(function(){
		$(this).addClass('cur');
	},function(){
		$(this).removeClass('cur');
	});
})

$(function() {
	var y, i = $(".toggle-regsss"),
		l = $(".toggle-login"),
		a = $("#dialog-bg"),
		o = $("#dialog-reg"),
		j = $(".form-group", o),
		e = $("#dialog-login"),
		z = $(".form-group", e),
		f = $(".close", o),
		b = $(".close", e),
		r = $("#login-username"),
		m = $("#login-password"),
		A = $("#login-remember"),
		x = $("#login-submit"),
		w = $("#loading-bg"),
		q = $("#loading");
	$("#contact_us").show().click(function() {
		if ($(this).hasClass("ccc")) {
			$(this).removeClass("ccc");
		} else {
			$(this).addClass("ccc");
		}
	});
	i.click(function() {
		e.hide();
		d(o, a);
		return false;
	});
	l.click(function() {
		o.hide();
		d(e, a);
		return false;
	});
	f.click(function() {
		c(o, a);
		return false;
	});
	b.click(function() {
		c(e, a);
		return false;
	});
	x.click(function() {
		var B = {
			username: r.val(),
			password: m.val(),
			remember: A.prop("checked") ? 1 : 0
		};
		h(B, function(C) {
			if (C) {
				if (parseInt(C.status) == 1) {
					k(e);
					window.location.href = "/start.html";
				} else {
					k(e, C.errorMsg);
				}
			} else {
				k(e, "网络错误");
			}
		}, "/ajaxDoLogin.html");
	});

	function h(C, E, B) {
		k(e);
		k(o);
		p("正在操作……");
		var D = B || location.href;
		$.ajax({
			url: D,
			type: "post",
			data: C,
			dataType: "json",
			success: function(F) {
				p(false);
				E(F);
			},
			error: function() {
				p(false);
				E(false);
			}
		});
	}
	function p(B) {
		if (B === false) {
			c(q, w);
		} else {
			q.html(B);
			d(q, w, 1);
		}
	}
	function k(B, F) {
		var D = "",
			C = 0,
			E;
		z.removeClass("has-error");
		j.removeClass("has-error");
		if (typeof(F) === "string") {
			$(".action", B).find(".form-msg").html(msg);
		} else {
			if (F) {
				$.each(F, function(J, I) {
					var H = $("#" + J),
						G = H.closest(".form-group");
					if (!E) {
						E = H;
					}
					G.addClass("has-error");
					G.find(".form-msg").html(I);
				});
				E.focus();
			}
		}
	}
	function d(B, J, C) {
		var I = B.outerWidth(),
			F = B.outerHeight(),
			H = $(window).width(),
			E = $(window).height(),
			D = (H - I) / 2 + (C ? 0 : $(window).scrollLeft()),
			G = (E - F) / 3 + (C ? 0 : $(window).scrollTop());
		if (D < 0) {
			D = 0;
		}
		if (G < 10) {
			G = 10;
		}
		J.stop(1, 1).fadeTo(123, 0.2);
		B.css({
			left: D,
			top: G
		}).stop(1, 1).fadeIn(345);
	}
	function c(C, B) {
		C.stop(1, 1).fadeOut(345, function() {
			B.stop(1, 1).fadeOut(123);
		});
	}
	window._loading = p;
});


