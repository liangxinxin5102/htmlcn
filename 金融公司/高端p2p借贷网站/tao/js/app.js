/*去除最后一个margin*/
function removeMargin($obj,$direction){
	if($direction){
		$($obj).css('margin-'+$direction,'0');
	}else{
		$($obj).css('margin','0');
	}
}

/*首页banner*/
function banner(){
	jQuery("#banner").hover(function() {
		jQuery(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.5)
	},
	function() {
		jQuery(this).find(".prev,.next").fadeOut()
	});
	jQuery("#banner").slide({
		titCell: ".hd ul",
		mainCell: ".bd ul",
		effect: "fold",
		autoPlay: true,
		autoPage: true,
		trigger: "click",
		startFun: function(i) {
			var curLi = jQuery("#banner .bd li").eq(i);
			if ( !! curLi.attr("_src")) {
				curLi.css("background-image", curLi.attr("_src")).removeAttr("_src")
			}
		}
	});
}

/* 返回顶部*/
function gotoTop(){
    $(".backtop").click(//定义返回顶部点击向上滚动的动画
        function(){$('html,body').animate({scrollTop:0},700);
    });
};


//全局调用
$(function(){
	//返回顶部
	gotoTop();
})
