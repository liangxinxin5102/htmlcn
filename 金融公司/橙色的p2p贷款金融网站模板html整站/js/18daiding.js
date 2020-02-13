$(function() {
	/*banner*/
	var tu = 0;
	var dd = 0;
	var spend = 0;
	$(".if2-box .bn-qie li").click(function(event) {
		var liid= $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$(".da-info1 .box-tu").animate({"top":-liid*300},spend);
		$(".da-info1 .box-tu").fadeToggle();
		$(".da-info1 .box-tu").fadeIn();
	});
	/*定时器 开启*/
	var time20=setInterval(dsq,5000);
	function dsq(){
		tu++;
		if(tu>4){
				tu=1;
				$(".da-info1 .box-tu").css("top",0);
		}
		$(".da-info1 .box-tu").animate({"top":-tu*300},spend);
		$(".da-info1 .box-tu").fadeToggle();
		$(".da-info1 .box-tu").fadeIn();
		dd++;
		if(dd>3){
			dd=0;
		}
		$(".if2-box .bn-qie li").eq(dd).addClass("current").siblings().removeClass("current");
	}
	/*清除定时器*/
	$(".banner").hover(function(){
			clearInterval(time20);	
	},function(){
		clearInterval(time20);
		time20=setInterval(dsq,5000);
	});
	


	/*banner 固定搜索栏 js*/
	$(".gd-hd .gd-li1").click(function(){
		$(this).addClass("li1-current");
		$(".gd-hd .gd-li2").removeClass("li2-current");
		$(".gd-hd .gd-li3").removeClass("li3-current");
		$(".gd-bd .gd-show1").show();
		$(".gd-bd .gd-show2").hide();
		$(".gd-bd .gd-show3").hide();
	});
	$(".gd-hd .gd-li2").click(function(){
		$(this).addClass("li2-current");
		$(".gd-hd .gd-li1").removeClass("li1-current");
		$(".gd-hd .gd-li3").removeClass("li3-current");
		$(".gd-bd .gd-show1").hide();
		$(".gd-bd .gd-show2").show();
		$(".gd-bd .gd-show3").hide();
	});
	$(".gd-hd .gd-li3").click(function(){
		$(this).addClass("li3-current");
		$(".gd-hd .gd-li1").removeClass("li1-current");
		$(".gd-hd .gd-li2").removeClass("li2-current");
		$(".gd-bd .gd-show1").hide();
		$(".gd-bd .gd-show2").hide();
		$(".gd-bd .gd-show3").show();
	});
	
	/*****************首页贷款信息 js********************/

	/*tabl 切换*/
	$(".xm-hd li").click(function(event) {
		var xm = $(this).index();
		$(".xm-banner .xm-box").css("left",0);
		$(this).addClass('xm-current').siblings().removeClass("xm-current");
		$(".xm-bd .div1").eq(xm).show().siblings().hide();
	});


	/***************首页贷款信息轮播******************/
	var tu2 = 0;
	var dd2 = 0;
	var time2 = 1000;
	$(".xm-banner .xm-right").click(function(event) {
		autoplay();
	});
	$(".xm-banner .xm-left").click(function(event) {
		tu2--;
		if(tu2<0){
			tu2=2;
			//$(".xm-banner .xm-box").css("left",-720);
			$(this).siblings(".xm-box").css("left",-720);
		}
		//$(".xm-banner .xm-box").stop().animate({"left":-tu2*240},time2);
		$(this).siblings(".xm-box").stop().animate({"left":-tu2*240},time2);
	});

	 /*定时器开始*/
      var timer=setInterval(autoplay, 2000);
      function autoplay(){
        tu2++;
		if(tu2>3){
			tu2=1;
			//$(".xm-banner .xm-box").css("left",0);
			$(this).siblings(".xm-box").css("left",0);
		}
		$(".xm-banner .xm-box").stop().animate({"left":-tu2*240},time2);
		//$(this).siblings(".xm-box").stop().animate({"left":-tu2*240},time2);
      }
      /*清除定时器*/
      $(".xm-banner").hover(function() {
        clearInterval(timer);
      }, function() {
      	clearInterval(timer);
      	timer=setInterval(autoplay,2000);
      });
      /*************首页贷款信息 js END***************/
	  
	/**************贷款专区 js***************/
	$(".zq-hd-ul1-1 li").click(function(){
		var idli = $(this).index();
		$(this).addClass("zq-current").siblings().removeClass("zq-current");
		$(".zql-bd .zql-info").eq(idli).show().siblings().hide();
	});
	
	/**************合作机构 js***************/
	$(".zq-hd-ul1-2 li").click(function(){  
		var idli = $(this).index();
		$(this).addClass("zq-current").siblings().removeClass("zq-current");
		$(".hzjg-bd .hzjg-info").eq(idli).show().siblings().hide();
	});
	
	var zhtu1 = 0;
	var zhtime1 = 1000;
	$(".hzjg-info .hzjg-right").click(function(){
		zhtu1++;
		if(zhtu1>3){
			zhtu1=1;
			//$(".hz-box ul").css("left",0);
			$(this).siblings(".hz-box").children("ul").css("left",0);
		}
		//$(".hz-box ul").stop().animate({"left":-zhtu1*990},zhtime1);
		$(this).siblings(".hz-box").children("ul").stop().animate({"left":-zhtu1*990},zhtime1);
	});
	$(".hzjg-info .hzjg-left").click(function(){
		zhtu1--;
		if(zhtu1<0){
			zhtu1=2;
			//$(".hz-box ul").css("left",-2970);
			$(this).siblings(".hz-box").children("ul").css("left",-2970);
		}
		//$(".hz-box ul").stop().animate({"left":-zhtu1*990},zhtime1);
		$(this).siblings(".hz-box").children("ul").stop().animate({"left":-zhtu1*990},zhtime1);
	});
	
	/*footer  返回顶部 js*/
	$(".return-top").click(function(){
		//alert($("body").index());
		//$("body").style.css();
	});
	
	/*********************城市切换  js ***************************/
	
	$(".cs-tab-nav li").click(function(){
		var ind = $(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(".cs-tab-content .cs-tab-info").eq(ind).show().siblings().hide();
	});

	$(".cs-tab-info dl").hover(function() {
		$(this).addClass('current');
	}, function() {
		$(this).removeClass('current');
	});
	
	/*******************18贷房贷  js  *********************/
		/*toutiao信息 js*/
	$(".fangdai-tit1 li").click(function(){
		var li1 = $(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(".fd-if3-con .fd3-kuai").eq(li1).show().siblings().hide();	
	});
	
		/*楼市信息  js */
	$(".fangdai-tit2 li").click(function(){
		var li2 = $(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(".fd-if4-con .fd-if4-dl1").eq(li2).show().siblings().hide();	
	});
	
	/*******************18贷房贷  js  END  ************************/
	
	/*********************18车贷列表页  js**************************/
	$("[shuo]").hover(function() {
		$(this).parent("p").siblings(".shuoming").show();
	}, function() {
		$(this).parent("p").siblings(".shuoming").hide();
	});

	$("[spp1]").hover(function() {
		var sp = $(this).attr("spp1");
		$("[spp2="+sp+"]").show()
	});
	$(".danbao1 .del a").click(function(event) {
		$(".danbao1").hide();
	});
	$(".chedai-bt-title1 li").click(function(event) {
		var lid = $(this).index();
		$(this).addClass('currrent').siblings().removeClass("currrent");
		$(".chedai-bt-con .bt-ul1").eq(lid).show().siblings().hide();
	});
	$(".dai-box-ifon2 .dai-if2-ul1").hover(function() {
		$(this).addClass('current');
	}, function() {
		$(this).removeClass("current");
	});
	/*********************18车贷列表页  END**************************/
	$(".dai-box-ifon3 .dai3-kuai").hover(function() {
		$(this).addClass('current');
	}, function() {
		$(this).removeClass('current');
	});
	$(".dai-r-ft li .g-p1").hover(function() {
		$(this).children('.g-p1-tan').show();
	}, function() {
		$(this).children('.g-p1-tan').hide();
	});

	/*********************18房贷详情页  END**************************/
	$(".fd-l3-title li").click(function(event) {
		//alert("message");
		var indexli1 = $(this).index();
		$(this).addClass('current').siblings().removeClass("current");
		$(".fd-l3-con .fd3-ind").eq(indexli1).show().siblings().hide();
	});

	/**************************客户经理中我的账户**********************************/
	$(".hy-tit-ul1 li").click(function(event) {
		var indexli2 = $(this).index();
		$(this).addClass('current').siblings().removeClass("current");
		$(".khjl1 .khjl-if1").eq(indexli2).show().siblings().hide();
	});

	/*客户经理中心我的店铺 js */
	$(".kehu-tit-ul1 li").click(function(event) {
		var indexli3 = $(this).index();
		$(this).addClass('current').siblings().removeClass("current");
		$(".kehu-content .kehu-con-kuai").eq(indexli3).show().siblings().hide();
	});

	/*客户经理中心推广 js*/
	$(".tg-title1 li").click(function(event) {
		var indexli4 = $(this).index();
		$(this).addClass('current').siblings().removeClass("current");
		$(".tg-content .tg-info").eq(indexli4).show().siblings().hide();
	});

	/*客户经理中充值 js*/
	$(".cz-if2-tab1 td").click(function(event) {
		$(".cz-if2-tab1 tr td").removeClass("current");
		$(this).addClass('current');
	});

	/*客户经理中心客户管理 js*/
	$(".gl-if2-ul1 li").click(function(event) {
		var indexli5 = $(this).index();
		$(this).addClass('current').siblings().removeClass("current");
		$(".gl-if2-con .gl-if2-k1").eq(indexli5).show().siblings().hide();
	});

	$(".gl-ul1 li").click(function(event) {
		var indexli6 = $(this).index();
		$(this).addClass('current').siblings().removeClass("current");
		$(".guanli-con-box .guanli-box-kuai").eq(indexli6).show().siblings().hide();
	});

	$(".glk3-title li").click(function(event) {
		var indexli7 = $(this).index();
		$(this).addClass('current').siblings().removeClass("current");
		$(".glk3-box1 .glk3-b1").eq(indexli7).show().siblings().hide();
	});
	
	/*上传头像  js*/
		$(".img1").change(function(){
			if($(this).val()){
				var objUrl = getObjectURL(this.files[0]) ;
				console.log("objUrl = "+objUrl) ;
				var objUrl = getObjectURL(this.files[0]) ;
				$(this).prev("img").attr("src",objUrl)
			}
		})
		function getObjectURL(file) {
			var url = null ; 
			if (window.createObjectURL!=undefined) { // basic
				url = window.createObjectURL(file) ;
			} else if (window.URL!=undefined) { // mozilla(firefox)
				url = window.URL.createObjectURL(file) ;
			} else if (window.webkitURL!=undefined) { // webkit or chrome
				url = window.webkitURL.createObjectURL(file) ;
			}
			return url ;
		}
		/*上传头像  js END*/
	
	/*********************18文章列表页  js**************************/
	var wz1 = 0;
	var wz2 = 0;
	var wzspend = 500;
	$(".wzlb-banner .wzlb-ban-ol1 li").click(function(event) {
		var liid1= $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$(".wzlb-banner .wzlb-ban-ul1").animate({"left":-liid1*1120},wzspend);
	});
	/*定时器 开启*/
	var time=setInterval(dsq1,3000);
	function dsq1(){
		wz1++;
		if(wz1>5){
				wz1=1;
				$(".wzlb-banner .wzlb-ban-ul1").css("left",0);
		}
		$(".wzlb-banner .wzlb-ban-ul1").animate({"left":-wz1*1120},wzspend);
		wz2++;
		if(wz2>4){
			wz2=0;
		}
		$(".wzlb-banner .wzlb-ban-ol1 li").eq(wz2).addClass("current").siblings().removeClass("current");
	}
	/*清除定时器*/
	$(".wzlb-banner").hover(function(){
			clearInterval(time);	
	},function(){
		clearInterval(time);
		time=setInterval(dsq1,2000);
	});
	
	/*固定nav  js*/
	var gao = $(".herder-top").height();
	$(window).scroll(function(event){
		//alert("ddd");	
		var tou = $(document).scrollTop();
		if(tou>=gao)
		{
			$(".qie-nav").css({"position":"fixed","top":0});
		}
		else
		{
			$(".qie-nav").css({"position":"static"});
		}
	});
	
	

});