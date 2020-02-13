/*TAB栏切换*/
$(function(){
	var delay = 5000; //自动切换延迟时间
	var current = 0; //当前显示的索引
	var t1;
	$head = $(".tab-head-div");
	$body = $(".tab-body-ul");
	setAutoChange();
	function autoChange(){
		current++;
		if(current >= $head.length){
			current = 0;
		}
		changeTo($head.eq(current));
		changeTo($body.eq(current));
	}
	function changeTo($obj){
		$obj.addClass("current").siblings().removeClass("current");
	}
	function setAutoChange(){
		t1 = setInterval(autoChange,delay);
	}
	$head.hover(function(){
		current = $(this).index();
		changeTo($(this));
		changeTo($body.eq(current));
		
		clearInterval(t1);
	},setAutoChange);
	$body.hover(function(){
		clearInterval(t1);
	},setAutoChange);
});
/*焦点图切换*/
$(function(){
	var height = 384; //每张图片的高度
	var speed = 700;  //动画时间
	var delay = 6000; //自动切换的间隔时间
	var now = 0;      //当前显示的图片索引
	var $picsUl = $('.hdhot-pics-ul');  //获取对象
	
	//复制列表中的第一个图片，追加到列表最后
	$picsUl.find('.hdhot-pics-li:first').clone().appendTo($picsUl);
	var $picsLi = $picsUl.find('.hdhot-pics-li'); //获取对象

	//自动创建小圆点
	$('.hdhot-bar').append('<ul>'+new Array($picsLi.length).join('<li></li>')+'</ul>');
	var $barLi = $('.hdhot-bar li');    //获取对象
	$barLi.eq(0).addClass('current');
	
	var max = $picsLi.length-2;  //图片的最大索引
	var timer = null;            //计时器
	//设置周期计时器，实现图片自动切换
	timer = setInterval(change_auto,delay);
	//鼠标滑过时暂停移动，移出时恢复移动
	$('.hdhot').on({
		mouseenter:function(){
			clearInterval(timer);
		},
		mouseleave:function(){
			clearInterval(timer);
			timer = setInterval(change_auto,delay);
		}
	});
	//鼠标滑过小圆点切换图片
	$barLi.mouseenter(function(){
		now =  $(this).index(); //当前要显示的索引
		$picsUl.stop(); //先停止动画
		change_next(); //切换图片
		change_bar(); //切换小圆点
	});
	
	//图片自动切换
	function change_auto(){
		if(!$picsUl.is(':animated')){
			//判断是否达到图片列表末尾
			if(now < max){
				now += 1;
				change_next();
			}else{
				now = 0;
				change_reset();
			}
			change_bar();
		}
	}
	//切换到下一张图片
	function change_next(){
		$picsUl.animate({top:-height*now},speed);
	}
	//切换到第一张图片
	function change_reset(){
		$picsUl.animate({top:-height*(max+1)},speed,function(){
			$(this).css("top",0);
		});
	}
	//小圆点切换
	function change_bar(){
		$barLi.eq(now).addClass("current").siblings().removeClass("current");
	}
});
