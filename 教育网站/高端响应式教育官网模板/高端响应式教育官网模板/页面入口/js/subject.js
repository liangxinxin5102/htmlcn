//by gyn
//学院页面js
//浮动导航js
//课程浮动特效
/*$(".sub_nav ul li").click(function(){
	$("html,body").animate(
		{
			"scrollTop":$(".lay").eq($(this).index()).offset().top - 40
		},500);
});
$(window).scroll(function(){
	var A=$(window).scrollTop();	
	if(A<=153&&A>=0){		
		$(".sub_nav").removeClass("sub_fixd");
		return;
	}else{
		$(".sub_nav").addClass("sub_fixd");
	}
}); */
$(".ocp_full").parent().css("background","none");
$(".ocp_complete").parent().css("background","none");
