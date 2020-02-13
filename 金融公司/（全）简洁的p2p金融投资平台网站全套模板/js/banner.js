$(function() {
	var bn_alp; // 定义动画变量
	var Time = 3000, // 自动播放间隔时间 毫秒
	    num = 1000, // 切换图片间隔的时间 毫秒
	    page = 0, // 定义变量
	    len=$(".hot-event .event-item").length, // 获取图片的数量
		ic=1;
	for(ic = 1; ic <= len; ic++){
		$('<a href="#" onclick="return false;">'+ic+'</a>').appendTo(".switch-tab");
	}
	$( ".hot-event .event-item").css( "opacity", 0 ); // 设置全部的图片透明度为0
  
	$(".hot-event .event-item:first").css("opacity", 1); // 设置默认第一张图片的透明度为1
	$(".switch-tab a").eq(0).addClass("current");
	function fun() // 封装
	{
		$( ".switch-tab a" ).eq(page).addClass("current").siblings('a').removeClass( "current" );     // 切换小点
		$( ".hot-event .event-item" ).eq(page).addClass("current").animate({"opacity":1},num).siblings('.event-item').removeClass( "current" ).animate({"opacity":0},num)
	}
	function run() // 封装
	{
		if (!$(".hot-event .event-item").is(":animated")) // 判断event-item是否在动画
		{
			if (page == len - 1) // 当图片切换到了最后一张的时候
			{
				page = 0; // 把page设置成0 又重新开始播放动画
				fun();
			} else { // 继续执行下一张
				page++;
				fun();
			}
		}
	}
	$(".switch-tab a").click(function() // 点击小点
	{
		if (!$(".hot-event .event-item").is(":animated")) // 判断event-item是否在动画
		{
			var index = $(".switch-tab a").index(this); // 获取点击小点的位置
			page = index; // 同步于page
			fun();
		}
	});
	$(".hot-event .event-item").hover(function(){
		 // 鼠标放上去图片的时候清除动画
		clearInterval( bn_alp );
	},function(){
		// 鼠标移开图片的时候又开始执行动画
		bn_alp = setInterval(run, Time);
	})
	//暂停/播放
	$(".hot-event .Pause").click(function(){
		$(this).toggleClass("active");
		if($(this).text()=="暂停"){
		  $(this).text("开始");
		  clearInterval( bn_alp );
		}
		else{
			$(this).text("暂停");
			bn_alp = setInterval(run,Time);
		}
	});
});