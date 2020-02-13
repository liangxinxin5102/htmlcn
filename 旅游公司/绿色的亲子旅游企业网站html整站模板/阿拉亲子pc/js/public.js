
				
$(document).ready(function(){
        jQuery(".sideMenu").slide({
				titCell:"h3", //鼠标触发对象
				targetCell:"ul", //与titCell一一对应，第n个titCell控制第n个targetCell的显示隐藏
				effect:"slideDown", //targetCell下拉效果
				delayTime:300 , //效果时间
				triggerTime:150, //鼠标延迟触发时间（默认150）
				defaultPlay:true,//默认是否执行效果（默认true）
				returnDefault:false //鼠标从.sideMen移走后返回默认状态（默认false）
				});
		$(".nav ul li").click(function(){
	  	$(this).siblings().removeClass('wbg');
			$(this).addClass("wbg");
        });
		
		
		$(".content2-main .hd ul li").click(function(){
	  	$(this).siblings().removeClass('on');
			$(this).addClass("on");
        });
		
		$(".table-right-b-t1 span").click(function(){
	  	$(this).siblings().removeClass('table-span');
			$(this).addClass("table-span");
        });
		
		$(".qzhd-all-d a").click(function(){
	  	$(this).siblings().removeClass('all-p-a');
			$(this).addClass("all-p-a");
        });
		
		$(".top-line-box a").click(function(){
	  	$(this).siblings().removeClass('top-line-a-on');
			$(this).addClass("top-line-a-on");
        });
		
});