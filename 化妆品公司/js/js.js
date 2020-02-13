// JavaScript Document
	
	var v;
	v=$(".search .s02").val();
	$(".search .s02").focus(function(){
		var a=$(".search .s02").val();
		if(v==a)$(this).val("");		
		else $(this).val(a);
	});
	$(".search .s02").blur(function(){
		var a=$(".search .s02").val();		
		if(a=='')$(this).val(v);
		else $(this).val(a);
	});	
	
	
	$(".nav ul li").click(function(){		
		$(this).addClass('ff').siblings().removeClass('ff');
	});
	
	
	
	
	var valW;
	valW=$("#display ul li").length*228;
	$("#display ul").css("width",valW+'px');
	tt=setInterval(function(){
		$("#display ul").animate({marginLeft:"-244px"},2000,function(){
			$("#display ul").css("margin-left","-16px").find("li:first").appendTo("#display ul");
		});
	},3000);
	
	$("#display").hover(function(){
       clearInterval(tt); 
    },function(){
		tt=setInterval(function(){
			$("#display ul").animate({marginLeft:"-244px"},2000,function(){
				$("#display ul").css("margin-left","-16px").find("li:first").appendTo("#display ul");
			});
		},3000);	
	});
	
	$("#display .next").click(function(){
		$("#display ul").animate({marginLeft:"-244px"},1000,function(){
			$("#display ul").css("margin-left","-16px").find("li:first").appendTo("#display ul");
		});		
	});
	
	$("#display .prev").click(function(){
		$("#display ul").css("margin-left","-244px").find("li:last").prependTo("#display ul");
		$("#display ul").animate({marginLeft:"-16px"},1000);
	});
	
	
	/*产品中心右侧效果一*/	
	$("#center .set02").hide();
	
	/*新闻中心右边效果*/
	$("#center .set01 ul:gt(0)").hide();
	var l=$("#center .set01 ul").length;
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
		$("#center .set01 ul").eq(j).show().siblings("ul").hide();
		$("#center .num span").eq(j).addClass("curr").siblings().removeClass("curr");
	});
	
	$("#center .num b:eq(1)").click(function(){		
		j++;
		if(j>=l)j=0;
		$("#center .set01 ul").eq(j).show().siblings("ul").hide();
		$("#center .num span").eq(j).addClass("curr").siblings().removeClass("curr");
	});
	
	
	var h1=0,h2=0;
	h1=$(".right").height();
	h2=$(".left").height();
	if(h1<=h2){$(".right").css("height","720px");}
	else{$(".right").css("height","auto");}
	$("#center .title p:eq(1)").click(function(){
		$("#center .set01").hide();	
		$("#center .set02").show();
		$("#center .title p").eq(1).addClass("curr").siblings().removeClass("curr");
		$("#center .line b").animate({marginLeft:"135px"});
		$("#center .line i").animate({marginLeft:"135px"});
		h1=$(".right").height();
		h2=$(".left").height();
		if(h1<=h2){$(".right").css("height","720px");}
		else{$(".right").css("height","auto");}
	});
	
	$("#center .title p:eq(0)").click(function(){		
		$("#center .set02").hide();
		$("#center .set01").show();
		$("#center .title p").eq(0).addClass("curr").siblings().removeClass("curr");
		$("#center .line b").animate({marginLeft:"0"});
		$("#center .line i").animate({marginLeft:"0"});
		h1=$(".right").height();
		h2=$(".left").height();
		if(h1<=h2){$(".right").css("height","720px");}
		else{$(".right").css("height","auto");}
	});
	
	/*新闻中心右边效果*/
		$("#center .set02 ul:gt(0)").hide();
		var ll=$("#center .set02 ul").length;
		var k=0;
		$("#center .num span").each(function(index){
			$(this).click(function(){
				k=index;
				$("#center .set02 ul").eq(k).show().siblings("ul").hide();
				$("#center .num span").eq(k).addClass("curr").siblings().removeClass("curr");	
			});
		});
		
		$("#center .num b:eq(0)").click(function(){		
			if(k<=0)k=ll;
			k--;
			$("#center .set02 ul").eq(k).show().siblings("ul").hide();
			$("#center .num span").eq(k).addClass("curr").siblings().removeClass("curr");
		});
		
		$("#center .num b:eq(1)").click(function(){		
			k++;
			if(k>=ll)k=0;
			$("#center .set02 ul").eq(k).show().siblings("ul").hide();
			$("#center .num span").eq(k).addClass("curr").siblings().removeClass("curr");
		});	
	
	/*子页面左边效果
	$(".main .left ul li").hover(function(){
		$(this).addClass("curr").siblings().removeClass("curr");
	},function(){
		$(".main .left ul li:eq(0)").addClass("curr").siblings().removeClass("curr");
	});*/
	
	
	