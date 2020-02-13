$(function(){
	var href=14;
	$("#new_li li").click(function(){
		
		href=$(this).data("value");
		//alert(href);
	});
	$('#new').on("click",function(){
		//window.location.href="${basePath}/article/getNewsList.html?classId="+href;
		window.location.href=getRootPath()+"/article/getNewsList.html?classId="+href;
	});
	
});



//js获取项目根路径
function getRootPath(){
    //获取当前网址
    var curWwwPath=window.document.location.href;
    //获取主机地址之后的目录
    var pathName=window.document.location.pathname;
    var pos=curWwwPath.indexOf(pathName);
    //获取主机地址
    var localhostPaht=curWwwPath.substring(0,pos);
    //获取带"/"的项目
    var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
    return(localhostPaht+projectName);
}
function newBidCountDown(con){
	var show_container = $(con).find(".nb_show");
	var intDiff = $(con).find(".nb_value").text();
	if (intDiff > 0 ){
		window.setInterval(function(){
			var hour=0,
				minute=0,
				second=0;//默认值		
			if(intDiff > 0){
				day = Math.floor(intDiff / (60 * 60 * 24));
				hour = Math.floor(intDiff / (60 * 60));
				minute = Math.floor(intDiff / 60) - (hour * 60);
				second = Math.floor(intDiff)- (hour * 60 * 60) - (minute * 60);
				if (hour <= 9) hour = '0' + hour;
				if (minute <= 9) minute = '0' + minute;
				if (second <= 9) second = '0' + second;
				$(show_container).html('倒计时'+hour+'小时' + minute+'分'+second+'秒');
				intDiff--;
			}else{
				$(show_container).html('00小时00分00秒');
			}
			}, 1000);
	}else{
		$(show_container).html("结束");
	}
}
				
//倒计时 intDiff 倒计时总秒数 show_container 显示时间容器 如 ".class" "#id"
function timer(con){
	var show_container=$(con).find("a");
	var intDiff =$(show_container).attr("countDown");
	
	var count_down = window.setInterval(function(){
			var	day=0,
				hour=0,
				minute=0,
				second=0;//默认值		
			if(intDiff > 0){
				day= Math.floor(intDiff / (60 * 60*24));
				hour = Math.floor(intDiff / (60 * 60))-(day*24);
				minute = Math.floor(intDiff / 60) - (hour * 60)-(day*60*24);
				second = Math.floor(intDiff)- (hour * 60 * 60) - (minute * 60)-(day*60*60*24);
				if (hour <= 9) hour = '0' + hour;
				if (minute <= 9) minute = '0' + minute;
				if (second <= 9) second = '0' + second;
				if(day>0){
					$(show_container).html('倒计时'+day+"天 "+hour+':' + minute+':'+second);
				}else{
					$(show_container).html('倒计时'+hour+':' + minute+':'+second);
				}
				
				intDiff--;
			}else{
				var borrowId =show_container.attr('borrowId');
				show_container.html("立即投资");
				show_container.attr("href",jsPath+"/borrow/tender.html?id="+borrowId);
				show_container.attr("class","button bg-sub" );
			//	var a_href="<a href=${basePath}/borrow/tender.html?id="+borrowId+">立即投资</a>";
				window.clearInterval(count_down);
			}
			}, 1000);

}


var xx = "";
var yy ="";
$(function(){
	//设置金额显示格式
/*	$(".borrowAmount").each(function(index,obj){
		var borrowAmount = $.trim($(this).html());
		$(this).html(count_ary(borrowAmount));
	});*/
});

function count_ary(num){
	if(num.length > 4 && num.length < 8){
		return parseInt((parseFloat(num) / 10000)) + "万";
	}else if(num.length > 8){
		return (num / 100000000) + "亿";
	}else{
		return parseInt(num);
	}
}
