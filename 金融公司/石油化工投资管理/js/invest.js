var index=0;
var autoPlay;

$(document).ready(function(){
						   
	$(".inv-team-box").mouseenter(function(){
		$(this).children(".inv-team-box1").animate({top:"0px"},200);
		$(this).children(".inv-team-box2").animate({top:"80px"},200);
	});
	
	$(".inv-team-box").mouseleave(function(){
		$(this).children(".inv-team-box1").animate({top:"315px"},200);
		$(this).children(".inv-team-box2").animate({top:"315px"},200);
	});
	
	$(".inv-law-left div").mouseenter(function(){
		$(this).children().children(".law-pic2").css("display","block");
	});
	
	$(".inv-law-left div").mouseleave(function(){
		$(this).children().children(".law-pic2").css("display","none");
	});
	
    $("#slide span").on("mouseenter",change);
	$("#slide").on("mouseenter",function(){
		$(".o-control").show();
		clearInterval(autoPlay);
	}).on("mouseleave",function(){
		$(".o-control").hide();
		autoPlay=setInterval(forward,2000);
	});
	
	$("#goback").on("click",goBack);
	$("#forward").on("click",forward);
	autoPlay=setInterval(forward,2000);
	
});

function change(){
	index=$(this).index(); //获取索引 
	$("#slide ul").animate({left:-index*400});
};

function goBack(){
	if(index==0){
		index=4;
	}; 
	$("#slide ul").animate({left:-(--index)*400});
};

function forward(){
	if(index==3){
		index=-1;
	}; 
	$("#slide ul").animate({left:-(++index)*400});
};