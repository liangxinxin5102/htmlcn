$(function(){
	// 导航
	$(".nav li").hover(function() {
		$(this).find('.nav_son').stop(true, false).slideDown("slow");
	}, function() {
		$(this).find('.nav_son').stop(true, false).slideUp("fast");
	});
	$(".nav_son").hover(function() {
		$(this).siblings('a').addClass('nava');
	}, function() {
		 $(this).siblings('a').removeClass('nava');
	});
	// 设计赏析
	$(".sjsxdiv li").hover(function() {
		//alert($(this).find("div.hov"));
		 $(this).find(".hov").stop(true, false).animate({top:'0px'},500);
		 $(this).find(".pre").css({
		 	background: 'none',
		 	'margin-top': '-30px',
		 	'z-index':20,
		 });
	}, function() {
		$(this).find(".hov").stop(true, false).animate({top:'230px'},500);
		 $(this).find(".pre").css({
		 	'background-image': 'url(/public/index/images/sjsx_a_bg.png)',
		 	'margin-top': '0px',
		 	'z-index':1,
		 });
	});

	// 计数器
	var curindex = 0;
	var winodw,ullength;
	//var ullength = $(".sjsxdiv").find('.atlas ul li').length;
	//设计赏析弹出窗
	$(".sj_ul1").children('li').click(function(event) {
		var ind  = $(this).index();
		ullength=$(this).find(".sj_ul2 li").length;
		winodw=$(this).find(".windowbox");
		winodw1=$(this).find(".alimg");
		winodw.removeClass('none');
		winodw1.removeClass('none');
		$(this).find(".total_number").text(ullength);;

	});
	// 弹出窗关闭
	$(".close").click(function(event) {
		event.stopPropagation();
		$('.windowbox').addClass('none');
		$('.alimg').addClass('none');
	});
	$('.windowbox').click(function(event) {
		event.stopPropagation();
		$('.windowbox').addClass('none');
		$('.alimg').addClass('none');
	});
	$('.alertRight').click(function(event) {
		event.stopPropagation();
		var length = $(this).siblings(".sj_ul2").find('li').length;
		curindex++;
		if(curindex>=length){
			curindex = 0;
		}
		var number=curindex + 1;
		$('.sj_ul2').stop(true,false).animate({left: -730*curindex}, 300);
		$(this).siblings(".alertTit").find(".alert_number").text(number);
		$(this).siblings(".alertTit").find(".total_number").text(length);

	});
	$('.alertLeft').click(function(event) {
		event.stopPropagation();
		var length = $(this).siblings(".sj_ul2").find('li').length;
		if(curindex<=0){
			curindex = length;
		}
		curindex--;
		var number=curindex + 1;
		$('.sj_ul2').stop(true,false).animate({left: -730*curindex}, 300);
		$(this).siblings(".alertTit").find(".alert_number").text(number);
		$(this).siblings(".alertTit").find(".total_number").text(length);
	});
	//导航固定JS
	$(window).scroll(function(){ 
	var scrollTops=$(window).scrollTop();
	if(scrollTops>=30){
		$('.s_header_nav').css({'position':'fixed'});    //定位部分
		$('.s_header_nav').css({'left':0});    //定位部分
		$('.s_header_nav').css({'top':0});    //定位部分
		$('.s_header_nav').css({'margin-top':0});    //定位部分
		}else{
		$('.s_header_nav').css({'position':'relative'}); 
		$('.s_header_nav').css({'left':0});    //定位部分
		$('.s_header_nav').css({'top':0});    //定位部分
		$('.s_header_nav').css({'margin-top':'0px'});    //定位部分
		$("body").css({'padding-top':'0px'}); 		
			}
	});
})

