
$(document).ready(function(){
//tabbar切换搜索栏
	$(".hideSerch").click(function(){
		$(".projectSelect").hide();
		$(".creditorSelect").hide();

	});
	$(".showProserch").click(function(){
		$(".projectSelect").show();
		$(".creditorSelect").hide();
	});
	$(".showCreserch").click(function(){
		$(".creditorSelect").show();
		$(".projectSelect").hide();
	});


//----进行中的项目-------------------------------------------------------
//项目筛选 toggle
//	$(".projectSelect-toggle").click(function(){
//				if($(this).hasClass("toggleUparrow")){
//				$(".projectSelect-con").hide();
//				$(this).addClass("toggleDownarrow");
//				$(this).removeClass("toggleUparrow");
//		}else{
//			$(".projectSelect-con").show();
//			$(this).addClass("toggleUparrow");
//			$(this).removeClass("toggleDownarrow");
//		}
//
//
//	});

//按钮颜色
    $(".projectSelect-con ul li span").click(function(){
    	$(this).addClass('proSelitem-selected');
    	$(this).removeClass('proSelitem-unselected');
    	$(this).parent().siblings().children('span.proSelitem-selected').addClass('proSelitem-unselected');
   		$(this).parent().siblings().children('span.proSelitem-selected').removeClass('proSelitem-selected'); 		
    });

//添加至已筛选项目
	$(".proSel-rate").find(".proSelitem-add").click(function(){
		var selCon = $(this).text();
		$(".selectedRate-show").show();
		$(".selectedRate-show").find("b").text(selCon);
	});
	$(".proSel-time").find(".proSelitem-add").click(function(){
		var selCon = $(this).text();
		$(".selectedTime-show").show();
		$(".selectedTime-show").find("b").text(selCon);
	});
	$(".proSel-sum").find(".proSelitem-add").click(function(){
		var selCon = $(this).text();
		$(".selectedSum-show").show();
		$(".selectedSum-show").find("b").text(selCon);
	});
	$(".proSel-progress").find(".proSelitem-add").click(function(){
		var selCon = $(this).text();
		$(".selectedProgress-show").show();
		$(".selectedProgress-show").find("b").text(selCon);
		$(".selectedProgress-show").find("i").css("right","0");
	});
	$(".proSel-state").find(".proSelitem-add").click(function(){
		var selCon = $(this).text();
		$(".selectedState-show").show();
		$(".selectedState-show").find("b").text(selCon);
	});

//选择全部后隐藏已筛选项目
	$(".proSel-rate").find(".proSelitem-all").click(function(){
		$(".selectedRate-show").hide();
	});
	$(".proSel-time").find(".proSelitem-all").click(function(){
		$(".selectedTime-show").hide();
	});
	$(".proSel-sum").find(".proSelitem-all").click(function(){
		$(".selectedSum-show").hide();
	});
	$(".proSel-progress").find(".proSelitem-all").click(function(){
		$(".selectedProgress-show").hide();
	});
	$(".proSel-state").find(".proSelitem-all").click(function(){
		$(".selectedState-show").hide();
	});

//已筛选项目右侧关闭按钮
	$(".selectedRate-show i").click(function(){
		$(this).parent().css("display","none");
		$(".proSel-rate").find(".proSelitem-selected").addClass("proSelitem-unselected");
		$(".proSel-rate li span").removeClass("proSelitem-selected");
		$(".proSel-rate").find(".proSelitem-all ").addClass("proSelitem-selected");
	});
	$(".selectedTime-show i").click(function(){
		$(this).parent().css("display","none");
		$(".proSel-time").find(".proSelitem-selected").addClass("proSelitem-unselected");
		$(".proSel-time li span").removeClass("proSelitem-selected");
		$(".proSel-time").find(".proSelitem-all ").addClass("proSelitem-selected");
	});
	$(".selectedSum-show i").click(function(){
		$(this).parent().css("display","none");
		$(".proSel-sum").find(".proSelitem-selected").addClass("proSelitem-unselected");
		$(".proSel-sum li span").removeClass("proSelitem-selected");
		$(".proSel-sum").find(".proSelitem-all ").addClass("proSelitem-selected");
	});
	$(".selectedProgress-show i").click(function(){
		$(this).parent().css("display","none");
		$(".proSel-progress").find(".proSelitem-selected").addClass("proSelitem-unselected");
		$(".proSel-progress li span").removeClass("proSelitem-selected");
		$(".proSel-progress").find(".proSelitem-all ").addClass("proSelitem-selected");
	});
	$(".selectedState-show i").click(function(){
		$(this).parent().css("display","none");
		$(".proSel-state").find(".proSelitem-selected").addClass("proSelitem-unselected");
		$(".proSel-state li span").removeClass("proSelitem-selected");
		$(".proSel-state").find(".proSelitem-all ").addClass("proSelitem-selected");
	});

//重置按钮
	$(".projectReset").click(function(){
		$(".proSelitem-selected").addClass("proSelitem-unselected");
		$(".proSelitem-selected").removeClass("proSelitem-selected");
		$(".proSelected span").css("display","none");
		if($(".proSelitem-all").hasClass("proSelitem-unselected")){
			$(".proSelitem-all").removeClass("proSelitem-unselected");
			$(".proSelitem-all").addClass("proSelitem-selected");
			}
	});




//----债券转让-----------------------------------------------------
//项目筛选 toggle
	$(".creditorSelect-toggle").click(function(){
				if($(this).hasClass("toggleUparrow")){
				$(".creditorSelect-con").hide();
				$(this).addClass("toggleDownarrow");
				$(this).removeClass("toggleUparrow");
		}else{
			$(".creditorSelect-con").show();
			$(this).addClass("toggleUparrow");
			$(this).removeClass("toggleDownarrow");
		}

	});

//按钮底色
    $(".creditorSelect-con ul li span").click(function(){
    	$(this).addClass('creSelitem-selected');
    	$(this).removeClass('creSelitem-unselected');
    	$(this).parent().siblings().children('span.creSelitem-selected').addClass('creSelitem-unselected');
   		$(this).parent().siblings().children('span.creSelitem-selected').removeClass('creSelitem-selected'); 		
    });

//添加至已筛选项目
	$(".creSel-ben").find(".creSelitem-add").click(function(){
		var selCon = $(this).text();
		$(".creSelben-show").show();
		$(".creSelben-show").find("b").text(selCon);
	});

	$(".creSel-sum").find(".creSelitem-add").click(function(){
		var selCon = $(this).text();
		$(".creSelsum-show").show();
		$(".creSelsum-show").find("b").text(selCon);
	});
	$(".creSel-sta").find(".creSelitem-add").click(function(){
		var selCon = $(this).text();
		$(".creSelsta-show").show();
		$(".creSelsta-show").find("b").text(selCon);
	});


//选择全部后隐藏已筛选项目
	$(".creSel-ben").find(".creSelitem-all").click(function(){
		$(".creSelben-show").hide();
	});
	$(".creSel-sum").find(".creSelitem-all").click(function(){
		$(".creSelsum-show").hide();
	});
	$(".creSel-sta").find(".creSelitem-all").click(function(){
		$(".creSelsta-show").hide();
	});


//已筛选项目右侧关闭按钮
	$(".creSelben-show i").click(function(){
		$(this).parent().css("display","none");
		$(".creSel-ben").find(".creSelitem-selected").addClass("creSelitem-unselected");
		$(".creSel-ben li span").removeClass("creSelitem-selected");
		$(".creSel-ben").find(".creSelitem-all ").addClass("creSelitem-selected");
	});
	$(".creSelsum-show i").click(function(){
		$(this).parent().css("display","none");
		$(".creSel-sum").find(".creSelitem-selected").addClass("creSelitem-unselected");
		$(".creSel-sum li span").removeClass("creSelitem-selected");
		$(".creSel-sum").find(".creSelitem-all ").addClass("creSelitem-selected");
	});
	$(".creSelsta-show i").click(function(){
		$(this).parent().css("display","none");
		$(".creSel-sta").find(".creSelitem-selected").addClass("creSelitem-unselected");
		$(".creSel-sta li span").removeClass("creSelitem-selected");
		$(".creSel-sta").find(".creSelitem-all ").addClass("creSelitem-selected");
	});
	

//重置按钮
	$(".crejectReset").click(function(){
		$(".creSelitem-selected").addClass("creSelitem-unselected");
		$(".creSelitem-selected").removeClass("creSelitem-selected");
		$(".creSelected span").css("display","none");
		if($(".creSelitem-all").hasClass("creSelitem-unselected")){
			$(".creSelitem-all").removeClass("creSelitem-unselected");
			$(".creSelitem-all").addClass("creSelitem-selected");
			}
	});

//债券转让项目概览

//点击
/*	$(".crePro-show").click(function(){
		$(this).parents().siblings(".creTabpreview-con").toggle();
		if($(this).hasClass("crePro-gery")){
			$(this).addClass("crePro-red");
			$(this).removeClass("crePro-gery");
			$(this).parents(".creList-item").css("background-color","#F1F0F0");
		}else if($(this).hasClass("crePro-red")){
			$(this).removeClass("crePro-red");
			$(this).addClass("crePro-gery");
			$(this).parents(".creList-item").css("background-color","#FFF");
		}
	}); */

/*//分页
	$(".pageListnum").click(function(){
		$(this).siblings().removeClass("currentPage");
		$(this).addClass("currentPage");
	});

	$(".page-first").click(function(){
		$(this).siblings().removeClass("currentPage");
		$(this).parent(".pageList a:nth-child(2)").addClass("currentPage");

	});*/



});



