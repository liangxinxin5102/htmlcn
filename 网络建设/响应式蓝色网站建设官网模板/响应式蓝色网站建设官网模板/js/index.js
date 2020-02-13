$(function(){
	var qqreg = /^[1-9]{1}[0-9]{4,8}$/;
	$('#messageform').submit(function(){
		if($(".message_name").val()=="请输入您的姓名" || $(".message_name").val()==""){
			$(".message_about").html("请输入您的姓名");
			return false;
		}else if($(".message_tel").val()=="请输入您的QQ" || !qqreg.test($(".message_tel").val()) ){
			$(".message_about").html("请输入您的QQ");
			return false;
		}else if($(".message_content").val()=="请输入您的留言" || $(".message_content").val()==""){
			$(".message_content").html("请输入您的留言");
			return false;
		}else{
		$.ajax({
			url: "index.php?a=form",
			type:'POST',
			data:"title="+$(".message_name").val()+"&qq="+$(".message_tel").val()+"&content="+$(".message_content").val(),
			success:function(data){
				if(data == 1){
					$(".message_about").html("提交成功,我们将在1个工作日内回复。");
					$(".message_name").val('请输入您的姓名');
					$(".message_tel").val('请输入您的QQ');
					$(".message_content").val('请输入您的留言');
				}else{
					$(".message_about").html("提交失败,请直接联系QQ客服。");
				}
			}
		})
		}
		return false;
	})
})


$(window).scroll(function(){
	if($(window).height() + $(window).scrollTop() - $("#project").offset().top > 100 && $(window).height() + $(window).scrollTop() - $("#project").offset().top < $(window).height() -30){
		$(".project_title_more").stop().animate({"left":"50%"},500);
	}else{
		$(".project_title_more").stop().animate({"left":"100%"},500);
	}
	if($(window).height() + $(window).scrollTop() - $(".about_int").offset().top > 100 && $(window).height() + $(window).scrollTop() - $(".about_int").offset().top < $(window).height() -30){
		$(".about_btn").stop().animate({"left":"50%"},500);
	}else{
		$(".about_btn").stop().animate({"left":"-5%"},500);
	}
	index1 = $("#services").offset().top;
	index2 = $("#project").offset().top;
	index3 = $("#about").offset().top;
	index4 = $("#news").offset().top;
	index5 = $("#contact").offset().top;
	var scrolltop = $(window).scrollTop() + 71;
	if(scrolltop < index1){
		indexnum = 0;
	}else if(index1 < scrolltop && scrolltop < index2){
		indexnum = 1;
	}else if(index2 < scrolltop && scrolltop < index3){
		indexnum = 2;
	}else if(index3 < scrolltop && scrolltop < index4){
		indexnum = 3;
	}else if(index4 < scrolltop && scrolltop < index5){
		indexnum = 4;
	}else if(scrolltop > index5){
		indexnum = 5;
	}
	$("#nav li").removeClass("active").eq(indexnum).addClass("active");
})

function navmove(id,index){
	if(id == "#index"){ var headheight = 0; }else{ var headheight = 70; }
	var offsettop = $(id).offset().top - headheight;
	$('html,body').stop().animate({scrollTop: offsettop},1500, 'easeInOutQuint');
	return false;
}

function selfmove(){
	var navId = "";
	if(window.location.href.indexOf("#services") > 0 ){navId = "#services";}
	if(window.location.href.indexOf("#project") > 0 ){navId = "#project";}
	if(window.location.href.indexOf("#about") > 0 ) {navId = "#about";}
	if(window.location.href.indexOf("#news") > 0 ){navId = "#news";}
	if(window.location.href.indexOf("#contact") > 0 ){navId = "#contact";}
	if (navId != ""){
		$(window).scrollTop(0);
		$('html,body').animate({scrollTop:$(navId).offset().top - 70},2000, 'easeInOutQuint');
	}
}

function LoadingHidden(){
	$("#loading").animate({"opacity":"0"},500,function(){ $("#loading").css({"left":"100%"})});
}

$(function(){
	$(".in_banner").hover(function(){
		$(".slide_left",this).stop().animate({"left":"0"},300)
		$(".slide_right",this).stop().animate({"right":"0"},300)
	},function(){
		$(".slide_left",this).stop().animate({"left":"-50px"},300)
		$(".slide_right",this).stop().animate({"right":"-50px"},300)
	})
})

$(function(){
	$(".infocus").focus();
	$(".infocus").hover(function(){
		$(".left_btn",this).stop().animate({"left":"0"},300)
		$(".right_btn",this).stop().animate({"right":"0"},300)
	},function(){
		$(".left_btn",this).stop().animate({"left":"-50px"},300)
		$(".right_btn",this).stop().animate({"right":"-50px"},300)
	})
})
$(function(){
	$("#services_ul li").hover(function(){
		$(".services_ico div",this).stop().animate({"opacity":"1"},300);
	},function(){
		$(".services_ico div",this).stop().animate({"opacity":"0"},300);
	})
	$("#services_con").mousemove(function(e) {
		if($(window).width() > $(this).width()){
			var leftWidth = ($(window).width() - $(this).width())/2;
		}else{
			var leftWidth = 0;
		}
		var offset=e.clientX - leftWidth;
		var x=0;
		var y=0;
		$("#services_ul",this).css({"margin-left": -( ($("#services_ul",this).width() - $(this).width()) / $(this).width())*offset +"px"});
	});
	$(".services_popclose").click(function(){
		$(this).parents("#services_pop").slideUp(200);
	})
})
function services_tab(popindex,slide){
	$(".services_poptabcon li").css("zIndex","1").hide().eq(popindex).css("zIndex","2").show();
	$(".services_poptabbtn a").removeClass("active").eq(popindex).addClass("active");
	if(slide == "true"){
		$("#services_pop").slideDown(200);
	}
}

$(function(){
	$(".project_pic li a").hover(function(){
		$(".project_pop",this).stop(false,true).slideDown("fast");
	},function(){
		$(".project_pop",this).stop(false,true).slideUp("fast");
	})
})
function project_tab(popindex){
	$(".project_pic li").hide().eq(popindex).fadeIn(300);
	$(".project_btn a").removeClass("active").eq(popindex).addClass("active");
}

$(function(){
	$(".about_btn").hover(function(){
		$("span",this).stop().animate({"opacity":"1"},300);
	},function(){
		$("span",this).stop().animate({"opacity":"0"},300);
	})
	$(".about_btn").click(function(){
		$(".about_int").addClass("about_intbg");
		$(".about_int").stop().animate({"height":"245"},1000,function(){
			$("#about_pop").slideDown(500);
			$(".about_int").stop().animate({"height":"1"},500,function(){
				$(".about_int").removeClass("about_intbg");
				var abouttop = $("#about_pop").offset().top - 70;
				$('html,body').stop().animate({scrollTop: abouttop},1000, 'easeInQuint');
			});
		});

	})
	$(".about_popclose").click(function(){
		$("#about_pop").slideUp(500);
		abouttop = $("#about").offset().top - 70;
		$('html,body').animate({scrollTop: abouttop},1200, 'easeInOutQuint',function(){
			$(".about_int").stop().animate({"height":"45"},1000)
		});
	})
})

function aboutpop_tab(popindex){
	$(".about_pop_con li").slideUp(300).eq(popindex).slideDown(300);
	$(".about_pop_tab li").removeClass("active").eq(popindex).addClass("active");
}

$(function(){
	$(".link_weixin_li").hover(function(){
		$(".link_weixin_ewm",this).stop().animate({"height":"138px"},300);
	},function(){
		$(".link_weixin_ewm",this).stop().animate({"height":"0"},300)
	})
})

$(function(){
	$(".workpopl").click(function(){
		$(document).attr("title",$(this).attr("title"));
		$("#workpop").show();
		url = $(this).attr("href");
		LoadingLeftShow(url);
		return false;
	});
	$(".workpopr").click(function(){
		$(document).attr("title",$(this).attr("title"));
		$("#workpop").show();
		url = $(this).attr("href");
		LoadingRightShow(url);
		return false;
	});
	$("#news li a").click(function(){
		$(document).attr("title",$(this).attr("title"));
		$("#workpop").show();
		url = $(this).attr("href");
		LoadingLeftShow(url);
		return false;
	});
})

function workpop(url){
	$("#index").hide();
	$("#workpop").html('');
	$(window).scrollTop(0);
	$.ajax({
		url: url,
		success:function(data){
			var html = data.substring(data.indexOf('<body>')+'<body>'.length,data.indexOf('</body>'));
			$("#workpop").html(html);
			$("#workpop").show();
			LoadingHidden();
		}
	})
}
function LoadingLeftShow(url){
	$("#loading").css({"opacity":"1","left":"-100%"});
	$("#loading").stop(false,true).animate({"left": "0"},1000,'easeOutExpo',function(){ workpop(url); });
}
function LoadingRightShow(url){
	$("#loading").css({"opacity":"1","left":"100%"});
	$("#loading").stop(false,true).animate({"left": "0"},1000,'easeOutExpo',function(){ workpop(url); });
}