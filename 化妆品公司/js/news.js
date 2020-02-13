// JavaScript Document

	var h1=0,h2=0;
	h1=$(".right").height();
	h2=$(".left").height();
	if(h1<=h2){$(".right").css("height","720px");}
	else{$(".right").css("height","auto");}

$("#center ul:gt(0)").hide();
	var l=$("#center ul").length;
	var j=0;
	$("#center .num span").each(function(index){
		$(this).click(function(){
			j=index;
			$("#center .set01 ul").eq(j).show().siblings("ul").hide();
			$("#center .num span").eq(j).addClass("curr").siblings().removeClass("curr");	
		});
	});
	
	$("#center .num b:eq(0)").click(function(){		
		if(j<=0)j=l;
		j--;
		$("#center ul").eq(j).show().siblings("ul").hide();
		$("#center .num span").eq(j).addClass("curr").siblings().removeClass("curr");
	});
	
	$("#center .num b:eq(1)").click(function(){		
		j++;
		if(j>=l)j=0;
		$("#center ul").eq(j).show().siblings("ul").hide();
		$("#center .num span").eq(j).addClass("curr").siblings().removeClass("curr");
	});
	
	/*子页面左边效果
	$(".main .left ul li").hover(function(){
		$(this).addClass("curr").siblings().removeClass("curr");
	},function(){
		$(".main .left ul li:eq(0)").addClass("curr").siblings().removeClass("curr");
	});*/