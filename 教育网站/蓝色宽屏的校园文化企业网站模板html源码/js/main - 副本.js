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
	var ullength = $(".sjsxdiv").find('li').length;
	//设计赏析弹出窗
	$(".sjsxdiv li").click(function(event) {
		//alert(111);
		curindex = $(this).index();
		var number=curindex + 1;
		var img=$(this).find('.sjsx_img').attr("src");
		$(".windowbox .alimg").find(".big_imgc").attr("src",img);
		var alert_title=$(this).find(".pre").text();
			$(".alert_title").text(alert_title);
		$(".windowbox").removeClass('none');
		$(".alert_number").text(number);
	});
	// 弹出窗关闭
	$(".close").click(function(event) {
		$(this).parents(".windowbox").addClass('none');
	});

	$('.alertRight').click(function(event) {
		curindex++;
		if(curindex >= ullength){
			curindex = 0;
		}
		var number=curindex + 1;
		var thisObj=$('.sjsxdiv').find('li').eq(curindex);
		var imgsrc = thisObj.find('.sjsx_img').attr('src');
		//console.log(imgsrc);
		$(".windowbox .alimg").find(".big_imgc").attr("src",imgsrc);
		var alert_title=thisObj.find(".pre").text();
		var alert_number=thisObj.find(".pre").text();
			$(".alert_title").text(alert_title);
			$(".alert_number").text(number);
	});
	$('.alertLeft').click(function(event) {
		console.log(curindex);
		curindex--;		
		if(curindex < 0){
			curindex = ullength-1;
			var number=ullength;
		}else{
			var number=curindex + 1;
		}
		//console.log(curindex);
		var thisObj=$('.sjsxdiv').find('li').eq(curindex);
		var imgsrc =thisObj.find('.sjsx_img').attr('src');
		//console.log(imgsrc);
		$(".windowbox .alimg").find(".big_imgc").attr("src",imgsrc);
		var alert_title=thisObj.find(".pre").text();
			$(".alert_title").text(alert_title);
			$(".alert_number").text(number);
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

