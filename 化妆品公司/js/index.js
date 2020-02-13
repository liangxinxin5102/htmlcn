// JavaScript Document

$(".product ul li:gt(0)").hide();
	
	var tt,n=0,len;
	len=$(".product ul li").length;
	
	function autoPlay(){
		tt=setInterval(function(){		
			n++;
			if(n>=len)n=0;
			$(".product ul li").eq(n).show().siblings().hide();
			$(".product span").eq(n).addClass("curr").siblings().removeClass("curr");
		},3000);
	}
	autoPlay();	
	
	$(".product span").each(function(index){
		$(this).mouseover(function(){
			n=index;
			$(".product ul li").eq(n).show().siblings("li").hide();
			$(".product span").eq(n).addClass("curr").siblings().removeClass("curr");	
		});
	});
	
	$(".product").hover(function(){
		clearInterval(tt);
	},function(){
		autoPlay();
	});
	
	$(".news ul:gt(0)").hide();
	$(".news span").each(function(index){
		$(this).click(function(){
			n=index;
			$(".news >ul").eq(n).show().siblings().hide();
			$(".news >span").show();
			$(".news >span").eq(n).removeClass("cur").siblings().addClass("cur");
			$(".news >ul").removeClass("cur");
		});
	});
	
	
	/*首页内容一效果*/
	$(".goods ul:gt(0)").hide();
	len=$(".goods ul").length;
	var i=0;
	function autoPlay01(){
		t=setInterval(function(){		
			i++;
			if(i>=len)i=0;
			$(".goods ul").eq(i).show().siblings().hide();
			$(".main01 .right b").eq(i).addClass("curr01").siblings().removeClass("curr01");
		},3000);
	}
	autoPlay01();	
		
	$(".goods").hover(function(){
		clearInterval(t);
	},function(){
		autoPlay01();
	});
	
	$(".main01 .right p:eq(0)").hover(function(){
		clearInterval(t);
		$(".main01 .right p:eq(0)").addClass("curr02");
	},function(){
		autoPlay01();
		$(".main01 .right p:eq(0)").removeClass("curr02");
	});
	
	$(".main01 .right p:eq(1)").hover(function(){
		clearInterval(t);
		$(".main01 .right p:eq(1)").addClass("curr02");
	},function(){
		autoPlay01();
		$(".main01 .right p:eq(1)").removeClass("curr02");
	});	
	
	$(".main01 .right p:eq(0)").click(function(){
		clearInterval(t);
		if(i<=0)i=len;
		i--;
		$(".main01 .right p:eq(0)").addClass("curr02");
		$(".goods ul").eq(i).show().siblings().hide();
		$(".main01 .right b").eq(i).addClass("curr01").siblings().removeClass("curr01");
	});
	
	$(".main01 .right p:eq(1)").click(function(){
		clearInterval(t);
		i++;	
		if(i>=len)i=0;
		$(".main01 .right p:eq(1)").addClass("curr02");
		$(".goods ul").eq(i).show().siblings().hide();
		$(".main01 .right b").eq(i).addClass("curr01").siblings().removeClass("curr01");
	});s