$(function(){
	$(".sub_headbtn li").hover(function(){
		$("span",this).stop().animate({"marginTop":"-40px"},300)
	},function(){
		$("span",this).stop().animate({"marginTop":"0"},300)
	})
	$(".workpopl2").click(function(){
		if($('#loading').length > 0){
			$(document).attr("title",$(this).attr("title"));
			$("#workpop").show();
			url = $(this).attr("href");
			LoadingLeftShow(url);
			return false;
		}
	});

	$(".head_btnselect").hover(function(){
		$(".head_selectbox",this).stop().animate({"height": $(".head_selectbox li").length * 37},500);
	},function(){
		$(".head_selectbox",this).stop().animate({"height": 0},500);
	})

	$(".workpopr2").click(function(){
		if($('#loading').length > 0){
			$(document).attr("title",$(this).attr("title"));
			$("#workpop").show();
			url = $(this).attr("href");
			LoadingRightShow(url);
			return false;
		}
	});

	$(".workpopHome").click(function(){
		if($('#loading').length > 0){
			$(document).attr("title",$(this).attr("title"));
			$("#index").show();
			$("#workpop").stop(false,true).animate({"left": "100%"},1000,'easeOutExpo',
				function(){
				$('html,body').animate({scrollTop: $("#"+$(".workpopHome").attr("rel")).offset().top - 70},1000, 'easeInOutQuint');
				$("#workpop").html(''); 
				$("#workpop").css({"left":"0","display":"none"});
			});
			return false;
		}
	});

	/* weixin */
	$(".link_weixin_li").hover(function(){
		$(".link_weixin_ewm",this).stop().animate({"height":"138px"},300);
	},function(){
		$(".link_weixin_ewm",this).stop().animate({"height":"0"},300)
	})

/* 案例 */
	$(".case_list li a").hover(function(){
		$(".project_pop",this).stop(false,true).slideDown("fast");
	},function(){
		$(".project_pop",this).stop(false,true).slideUp("fast");
	})

	$(".recommend_list li a").hover(function(){
		$(".project_pop",this).stop(false,true).slideDown("fast");
	},function(){
		$(".project_pop",this).stop(false,true).slideUp("fast");
	})

})

