(function(c,I,B){c.fn.responsiveSlides=function(l){var a=c.extend({auto:!0,speed:1000,timeout:4E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:" ",nextText:" ",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:c.noop,after:c.noop},l);return this.each(function(){B++;var f=c(this),s,r,t,m,p,q,n=0,e=f.children(),C=e.size(),h=parseFloat(a.speed),D=parseFloat(a.timeout),u=parseFloat(a.maxwidth),g=a.namespace,d=g+B,E=g+"_nav "+d+"_nav",v=g+"_here",j=d+"_on",
w=d+"_s",k=c("<ul class='"+g+"_tabs "+d+"_tabs' />"),x={"float":"left",position:"relative",opacity:1,zIndex:2},y={"float":"none",position:"absolute",opacity:0,zIndex:1},F=function(){var b=(document.body||document.documentElement).style,a="transition";if("string"===typeof b[a])return!0;s=["Moz","Webkit","Khtml","O","ms"];var a=a.charAt(0).toUpperCase()+a.substr(1),c;for(c=0;c<s.length;c++)if("string"===typeof b[s[c]+a])return!0;return!1}(),z=function(b){a.before(b);F?(e.removeClass(j).css(y).eq(b).addClass(j).css(x),
n=b,setTimeout(function(){a.after(b)},h)):e.stop().fadeOut(h,function(){c(this).removeClass(j).css(y).css("opacity",1)}).eq(b).fadeIn(h,function(){c(this).addClass(j).css(x);a.after(b);n=b})};a.random&&(e.sort(function(){return Math.round(Math.random())-0.5}),f.empty().append(e));e.each(function(a){this.id=w+a});f.addClass(g+" "+d);l&&l.maxwidth&&f.css("max-width",u);e.hide().css(y).eq(0).addClass(j).css(x).show();F&&e.show().css({"-webkit-transition":"opacity "+h+"ms ease-in-out","-moz-transition":"opacity "+
h+"ms ease-in-out","-o-transition":"opacity "+h+"ms ease-in-out",transition:"opacity "+h+"ms ease-in-out"});if(1<e.size()){if(D<h+100)return;if(a.pager&&!a.manualControls){var A=[];e.each(function(a){a+=1;A+="<li><a href='#' class='"+w+a+"'>"+a+"</a></li>"});k.append(A);l.navContainer?c(a.navContainer).append(k):f.after(k)}a.manualControls&&(k=c(a.manualControls),k.addClass(g+"_tabs "+d+"_tabs"));(a.pager||a.manualControls)&&k.find("li").each(function(a){c(this).addClass(w+(a+1))});if(a.pager||a.manualControls)q=
k.find("a"),r=function(a){q.closest("li").removeClass(v).eq(a).addClass(v)};a.auto&&(t=function(){p=setInterval(function(){e.stop(!0,!0);var b=n+1<C?n+1:0;(a.pager||a.manualControls)&&r(b);z(b)},D)},t());m=function(){a.auto&&(clearInterval(p),t())};a.pause&&f.hover(function(){clearInterval(p)},function(){m()});if(a.pager||a.manualControls)q.bind("click",function(b){b.preventDefault();a.pauseControls||m();b=q.index(this);n===b||c("."+j).queue("fx").length||(r(b),z(b))}).eq(0).closest("li").addClass(v),
a.pauseControls&&q.hover(function(){clearInterval(p)},function(){m()});if(a.nav){g="<a href='#' class='"+E+" prev'>"+a.prevText+"</a><a href='#' class='"+E+" next'>"+a.nextText+"</a>";l.navContainer?c(a.navContainer).append(g):f.after(g);var d=c("."+d+"_nav"),G=d.filter(".prev");d.bind("click",function(b){b.preventDefault();b=c("."+j);if(!b.queue("fx").length){var d=e.index(b);b=d-1;d=d+1<C?n+1:0;z(c(this)[0]===G[0]?b:d);if(a.pager||a.manualControls)r(c(this)[0]===G[0]?b:d);a.pauseControls||m()}});
a.pauseControls&&d.hover(function(){clearInterval(p)},function(){m()})}}if("undefined"===typeof document.body.style.maxWidth&&l.maxwidth){var H=function(){f.css("width","100%");f.width()>u&&f.css("width",u)};H();c(I).bind("resize",function(){H()})}})}})(jQuery,this,0);


//滚动导航变化函数
function scroll_header(){
	var header = $(".header");
	var logo = $(".logo");
	var nav_ul = $(".nav>ul");

	if($(document).scrollTop()>100){ 
		header.addClass("header_small");
		logo.addClass("logo_small");
		nav_ul.addClass("nav_small");

	}else{
		header.removeClass("header_small");
		logo.removeClass("logo_small");
		nav_ul.removeClass("nav_small");
	};
};


//子导航~~~~~~~~~~~
function nav_sub(){
	if($(window).width()<1024){return false;};
	$('.nav li').hover(function() {
		if($(window).width()>1024){
			$('.sub-menu', this).slideDown(300);	
		};
	}, function() {
		$('.sub-menu', this).slideUp(50);
	});
};

//侧栏按钮
function side(){
	if($(window).width()<1024){
		$(".nav_icon").click(function() {
			$(".side_close").fadeIn(500);
			$(".nav>ul").slideDown(400);
		});
		$(".side_close").click(function() {
			$(".nav>ul,.side_close").fadeOut(200);
		});
	}else{
		$(".side_close,.nav_icon").css("display","none");
		$(".nav>ul").css("display","block");
	};
	if($(window).width()<1024){
		$(".nav_icon").css("display","block");
		$(".nav>ul,.side_close").css("display","none");
	};
};

function nav_ul_center(){
	var ul_h = $(".nav>ul").height();
	if($(window).width()<1024){

		$(".nav>ul").css("margin-top",-ul_h*0.6);
	}else{
		$(".nav>ul").css("margin-top","auto");
	};
	// alert(ul_h);

};

//播放器控制
function music(){
	var audio = document.getElementById('m_btn');
	$('.music').click(function(){
		// event.stopPropagation();
		if(audio.paused) {//如果当前是暂停状态
		$('.music').css("background","url(/assets/images/play.gif)");
		audio.play();//播放
		return;
	}
	//当前是播放状态
	$('.music').css("background","url(/assets/images/stop.gif)");
	audio.pause(); //暂停
	});
};

$(document).ready(function() {

	$(".header").css("background-color","rgba(0,0,0,.8)");

	if(navigator.userAgent.indexOf("MSIE 8.0")>0){$('.slider_img').cover();$('.music').css("display","none")};
	
	if($('.text').find('iframe').length>0){$('.music').remove();};

	$('.news-box .news-title iframe').remove();

		//幻灯片相应
	if($(window).width()>1024){
		$(".slider_main").height( $(window).height());
	}else{
		$(".slider_main").height( $(window).height()*0.5);

	};

	nav_sub();
	side();
	nav_ul_center();
	music();

	if ($('#gallery,#home-gallery').length >0) {

		$("#home-gallery,#gallery").justifiedGallery({
	        rowHeight: 320,
	        fixedHeight: false,
	        margins: 20,
	        cssAnimation: true
	    });

		$(".fancybox-media").fancybox({
	        openEffect  : 'fade',
	        closeEffect : 'fade',
	        index: 1200
	    });
    };

	

	if ($('div').is('.slider_main')) {

		$(".full100").css("opacity","0");
		$(".header").addClass("header_op");
		
		$(document).on("scroll",function(){
			// if($(window).width()<1024){return false;};

			if($(document).scrollTop()>100){ 
				$(".header").removeClass("header_op");

			}else{
				$(".header").addClass("header_op");
			};
		});
	};
	
	


    //幻灯片调用

    if ($('#slider').length >0) {

		$("#slider").responsiveSlides({
			manualControls: '#slider-pager',
			timeout: 5000, 
			nav: true,
			auto: true
		});
	};



	//导航滚动
	// $(document).on("scroll",function(){
	// 	if($(window).width()<1024){return false;};
	// 	// scroll_header();
	// });

	//画廊调用
	// $("#home-gallery,#gallery").each(function (i, el) {
	// 	$(el).justifiedGallery({rel: 'gal' + i}).on('jg.complete', function () {
	// 		$(this).find('a').colorbox({
	// 			maxWidth : '80%',
	// 			maxHeight : '80%',
	// 			opacity : 0.8,
	// 			transition : 'elastic',
	// 			current : ''
	// 		});
	// 	});
	// });

	



});

$(window).resize(function(){

	var header = $(".header");
	var logo = $(".logo");
	var nav_ul = $(".nav>ul");

	if($(document).scrollTop()>100){ 
		header.addClass("header_small");
		logo.addClass("logo_small");
		nav_ul.addClass("nav_small");

	}else{
		header.removeClass("header_small");
		logo.removeClass("logo_small");
		nav_ul.removeClass("nav_small");
	};


	if($(window).width()>1024){
		$(".slider_main").height( $(window).height());
	}else{
		$(".slider_main").height( $(window).height()*0.5);
	};

	nav_ul_center();
	side();
	nav_sub();

});

// $(window).load(function(){
// $('body').append('<div class="music"><audio id="m_btn" autoplay="autoplay" loop="loop" src="http://7xoppc.com1.z0.glb.clouddn.com/bg3.mp3"></audio></div>');
// });	






