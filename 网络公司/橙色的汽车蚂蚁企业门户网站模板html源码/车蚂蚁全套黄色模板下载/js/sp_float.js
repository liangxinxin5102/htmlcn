$(function(){
	$('.checkbox_item a').bind('click',function(){
		var _curcheck=$(this).find('input');
		if(_curcheck.attr("checked")){
			$(this).addClass('cur');
		}else{
			$(this).removeClass('cur');	
		}
		
	});
	$('.Radio_item a').bind('click',function(){
		$(this).addClass('cur').siblings().removeClass('cur');
	});
	if($("#sp_cmy_01").length>0){
	spCmyFloor();
	var contentTop=$("#goodsContent").offset().top;
	$('.spCmyFloor-box').DB_quickBanner({
		startTop:contentTop,      
		endTop:true,      
		moveSpeed:500     
	});
	$('.spCmyFloor-box').show();
	}
})
function spCmyFloor(){
	var spfloor=$(".sp_nav_float");
	var str="";
	spfloor.each(function(index) {
		str=str+"<li><a href='#"+$(this).attr("id")+"'><span>"+$(this).attr("title")+"</span><i></i></a></li>";
	});
	$(".spCmyFloor-box ul").html(str);
	$(".spCmyFloor-box>.price").html($("#ECS_SHOPPRICE").html());
}

$(document).bind('mouseup',function(e){
	if($("#sp_cmy_01").length>0){
	e = e||event;
	var target = e.target;
	if(target.nodeName=="A" && target.className=="test-btn1"){
		$(".spCmyFloor-box").show();
		}
	if(target.nodeName=="A" && target.className=="test-btn2"){
		$(".spCmyFloor-box").hide();
		}	
	}
})