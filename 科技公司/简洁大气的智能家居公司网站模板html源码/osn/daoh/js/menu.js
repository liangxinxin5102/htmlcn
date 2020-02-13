(function(){
		  
	var depth2_bg = document.getElementById("depth2_bg");
	var oldTop = parseInt(depth2_bg.style.top);
	
	function start_move(oDiv, target) {
		clearInterval(oDiv.timer);
	
		oDiv.timer = setInterval(function (){
			var top = parseInt(oDiv.style.top);
			var speed=(target-top)/5;
	
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
	
			if (Math.abs(target - top) < 2) {
				oDiv.style.top=target+'px';	
				clearInterval(oDiv.timer);
			} else {
				oDiv.style.top=top+speed+'px';
			}
	
		}, 30);
	}
	
	function highlight(index) {
		$(".introduce li").each(function(){
			var this_index = $(this).attr('navindex');
			if(this_index == index) {
				var img = $(this).children('a').children('img');
				var src = img.attr('src').replace('_off', '_on');
				img.attr('src', src);
			} else {
				var img = $(this).children('a').children('img');
				var src = img.attr('src').replace('_on', '_off');
				img.attr('src', src);
			}
		});
	}
	
	$(".introduce li").mouseover(function(){
		var index = $(this).attr('navindex');
		var targetTop = 95 + index * 29;
		highlight(index);
		start_move(depth2_bg, targetTop);
	});
	
	// recover
	$("#navigation").mouseout(function(){
		highlight(1);
		start_move(depth2_bg, oldTop);
	});

})();
