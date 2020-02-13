function addStyle(stylePath) {
	var container = document.getElementsByTagName("head")[0];
	var addStyle = document.createElement("link");
	addStyle.rel = "stylesheet";
	addStyle.type = "text/css";
	addStyle.media = "screen";
	addStyle.href = stylePath;
	container.appendChild(addStyle);
}

function rightBar(style,style2,qq,email,web,info){
	addStyle("http://www.czxixi.com/public/ddy/ddy.css");
	var demo = "<ul class='rightBar C'> <li class='rightBar_returnTop'></li><li class='rightBar_qq'><div class='rightBar_qqBox'></div></li><li class='rightBar_mail'></li></ul><div class='order'><div class='orderClose'></div><div class='orderInner C'><p id='orderTitle'>请认真填写相关信息，我们将尽快与您取得联系！</p><form onsubmit='return chkform(this)' accept-charset='gbk' action='http://www.czxixi.com/public/sendmail.asp' method='post'><p><input type='text' class='cName' name='lxr' />&nbsp;&nbsp;姓名 * </p><p><input type='text' class='cTel' name='lxdh' />&nbsp;&nbsp;电话 * </p><p><input type='text' class='cMail1' name='dzyj' />&nbsp;&nbsp;邮箱 </p><p><textarea class='idx_youWant_2' name='qtly'></textarea>&nbsp;&nbsp;内容 </p><p><input type='submit' value='提交' class='submit_2 l' name='button1' /><input type='reset' value='重置' class='reset l' name='reset' /></p><input value='' name='mubiaoemail' type='hidden' class='rightBar_1'><input value='' name='mubiaowebsite' type='hidden' class='rightBar_2'><input value='' name='nrbt' type='hidden' class='rightBar_3'></form></div></div><div class='rightBar_mask'></div>";
	
	$("body").append(demo);

	$(".rightBar_qqBox").append(qq);
	var sWidth = $(window).width();
	var sHeight = $(window).height();
	var oT = (parseInt(sHeight) - parseInt($(".order").height())) / 2;
	var oL = (parseInt(sWidth) - 400) / 2;
	var qqStatus = false;
	$(".rightBar_returnTop").hide(1);
	$(window).scroll(function(x){
		var x = $(window).scrollTop();
		if(x > 0){
			$(".rightBar_returnTop").show(200);	
		}else{
			$(".rightBar_returnTop").hide(200);	
		}	
	});	
	$(".rightBar").css(style);
	var xx = {background:style2};
	var yy = {color:style2};
	$(".order p, .Iorder p ").css(yy);
	$(".submit_2 , .reset").css(xx);
	var gotoTopValue = 0;
	$(".rightBar_returnTop").click(function(){
		var goTop=setInterval(scrollMove,10);
		function scrollMove(){
			$(document).scrollTop(gotoTopValue / 1.1)
			if(gotoTopValue<1)clearInterval(goTop);
		}
	})		
	$(".rightBar_qqBox").css({opacity:0});
	$(".rightBar_qq").click(function(){
		if(!qqStatus){
			$(".rightBar_qqBox").css({display:"block"}).animate({left:"-99px",opacity:1},300).dequeue();
			qqStatus = true;
		}else{
			$(".rightBar_qqBox").animate({left:"0",opacity:0},300,function(){
				$(".rightBar_qqBox").css({display:"none"});	
			}).dequeue();
			qqStatus = false;
		}
	});
	$(".rightBar_qq").hover(function(){
		//if(!qqStatus){
			$(".rightBar_qqBox").css({display:"block"}).animate({left:"-99px",opacity:1},100).dequeue();
			//qqStatus = true;
		//}else{
			//$(".rightBar_qqBox").animate({left:"0",opacity:0},300,function(){
				//$(".rightBar_qqBox").css({display:"none"});	
			//}).dequeue();
			//qqStatus = false;
		//}
	},function(){
		$(".rightBar_qqBox").animate({left:"0",opacity:0},300,function(){
				$(".rightBar_qqBox").css({display:"none"});	
			}).dequeue();
	});
	$(".rightBar_mask").css({background:"#000",opacity:0,width:sWidth,height:sHeight,display:"none"});
	$(".rightBar_mail").click(function(){
		$(".order").css({left:oL,top:oT});
		$(".rightBar_mask").css({display:"block"}).animate({opacity:0.4},200).dequeue();
		$(".order").css({display:"block"});
	});
	$(".rightBar_mask , .orderClose").click(function(){
		$(".rightBar_mask").animate({opacity:0},200,function(){
			$(".rightBar_mask").css({display:"none"})	
		}).dequeue();
		$(".order").css({display:"none"});
	});
	$(".rightBar_1").attr("value",email);
	$(".rightBar_2").attr("value",web);
	$(".rightBar_3").attr("value",info);


};

function chkform(cform){
		if($(".cName").val() == "" && $(".cTel").val() == "" && $(".cMail1").val() =="" && $(".idx_youWant_2").val() ==""){
			return false;
		}	
}