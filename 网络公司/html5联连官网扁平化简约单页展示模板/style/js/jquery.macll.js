$(function() {	
	function g() {
		location.href = "#"
	}
	var e,
	h,
	i,
	j,
	k,
	d = navigator.userAgent.toLowerCase(),
	c; (c = d.match(/msie ([\d.]+)/)) ? e = c[1] : (c = d.match(/firefox\/([\d.]+)/)) ? h = c[1] : (c = d.match(/chrome\/([\d.]+)/)) ? i = c[1] : (c = d.match(/version\/([\d.]+).*safari/)) ? j = c[1] : ((c = d.match(/version.([\d.]+)/)) || (c = d.match(/opera.([\d.]+)/))) && (k = c[1]);
	setTimeout(function() {
		$("#topBar").show();
		$("#pageContent").show();
		
	},
	4E1);
	  $("#gotop").click(function() {
		  $("html, body").animate({
			  scrollTop: 0
		  },
		  1E3)
	  });
	$("#pageNav a").each(function(a, b) {
		$(b).click(function(a) {
			var b = $(this);
			a.preventDefault();
			a = b.attr("href");
			a = $(a).offset().top - 77;
			$("#pageNav a").removeClass("active");
			b.addClass("active");
			$("html, body").animate({
				scrollTop: a
			},
			1E3)
		})
	});
	$(".faqMore").click(function(a) {
		a.preventDefault();
		$(".windows").show();
		$("#products .manualList li").eq(0).click()
	});
	$("#video-i").click(function() {
		$(".windows-video").show();	
	});
	$(".closeDiv").click(function(a) {
		a.preventDefault();
		$("#bodyMask").fadeOut();
		$(".windows").hide();
		$(".windows-video").hide()
	});
	$("#btn1").click(function() {
		$("#androiddeploy").addClass("anim-androiddeploy");
		$("#androidcont").addClass("anim-androidcont");
		$("#andriod-word").addClass("anim-con2");
	});
	$("#btn2").click(function() {
		$("#inphonecont").addClass("anim-iphonecont");
		$("#iphone-word").addClass("anim-con3");
	});
	$("#video-i").hover(function() {
		$("#video-i").addClass("anim-videoscale");
	},function(){
		$("#video-i").removeClass("anim-videoscale");
		});
		
	function showPage1(){
		current=1;
		$(".bann1").show();
		$("#banner01").addClass("anim-banner01");
		$("#banner02").addClass("anim-banner02");
		$("#banner03").addClass("anim-banner03");
		$("#banner04").addClass("anim-banner04");
		$("#dot1").addClass("anim-dot1");
		$("#bann2").hide();
		$("#banner05").removeClass("anim-banner05");
		$("#banner06").removeClass("anim-banner06");
		$(".bann2-bg").removeClass("anim-bann2-bg");
		$("#dot2").removeClass("anim-dot1");
			
		};
	function showPage2(){
		current=2;
		$(".bann2").show();
		$("#banner05").addClass("anim-banner05");
		$("#banner06").addClass("anim-banner06");
		$(".bann2-bg").addClass("anim-bann2-bg");
		$("#dot2").addClass("anim-dot1");
		$(".bann1").hide();
		$("#banner01").removeClass("anim-banner01");
		$("#banner02").removeClass("anim-banner02");
		$("#banner03").removeClass("anim-banner03");
		$("#banner04").removeClass("anim-banner04");
		$("#dot1").removeClass("anim-dot1");
		};
		
	function switchPage() {			
		if(current==1){
			showPage2();
		} else{
			showPage1();
		}
	}
	var current=NaN;
	var interval = 4500;
	showPage1();
	window.intervalCode = setInterval(switchPage,interval);
	
	var dot1 = document.querySelector('#dot1');
	var dot2 = document.querySelector('#dot2');
	var isIE=!!window.ActiveXObject;
    var isIE6=isIE&&!window.XMLHttpRequest;
    var isIE8=isIE&&!!document.documentMode;
    var isIE7=isIE&&!isIE6&&!isIE8;
            
    if(isIE8 || isIE7){
	   dot1.attachEvent('click', function () {//attachEvent
		//console.log('dot1 clicked!');
		clearInterval(window.intervalCode);
		window.intervalCode = setInterval(switchPage,interval);
		showPage1();
	    });
	   dot2.attachEvent('click', function () {
		//console.log('dot2 clicked!');
		clearInterval(window.intervalCode);
		window.intervalCode = setInterval(switchPage,interval);
		showPage2();
	   });   
     }else{
        dot1.addEventListener('click', function () {//addEventListener
		//console.log('dot1 clicked!');
		clearInterval(window.intervalCode);
		window.intervalCode = setInterval(switchPage,interval);
		showPage1();
	    });
	   dot2.addEventListener('click', function () {
		//console.log('dot2 clicked!');
		clearInterval(window.intervalCode);
		window.intervalCode = setInterval(switchPage,interval);
		showPage2();
	   });
     }
	
	
	$(window).scroll(function() {
		var a = $(window).scrollTop();
		var pTop1 = $("#function").offset().top - 77,
			pTop2 = $("#side").offset().top - 77,
			pTop3 = $("#homepage").offset().top - 77,
			pTop4 = $("#resource").offset().top - 77,
			pTop5 = $("#faq").offset().top - 77,
			pTop6 = $("#update").offset().top - 77;
		0 <= a && a < pTop1 && ($("#pageNav a").removeClass("active"), $("a[href='#machome']").addClass("active"));
		pTop1 <= a && a < pTop5 && ($("#pageNav a").removeClass("active"), $("a[href='#function']").addClass("active"));
		pTop5 <= a && a < pTop6 && ($("#pageNav a").removeClass("active"), $("a[href='#faq']").addClass("active"));
		pTop6 <= a && ($("#pageNav a").removeClass("active"), $("a[href='#update']").addClass("active"));
			

       var ba=$("#function").offset().top - $("#function").height() / 8 ;
       pTop1 <= a && a < pTop2 && ($("#androiddeploy").addClass("anim-androiddeploy"), $("#androidcont").addClass("anim-androidcont"), $("#andriod-word").addClass("anim-con2"));
	   (pTop2 <= a || a < ba) && ($("#androiddeploy").removeClass("anim-androiddeploy"), $("#androidcont").removeClass("anim-androidcont"), $("#andriod-word").removeClass("anim-con2"));
		    

        var aa = $("#side").offset().top - $("#side").height() * 3 / 4 ,
		ab = $("#homepage").offset().top + $("#homepage").height() / 4 ,
		ac = $("#homepage").offset().top - $("#homepage").height() * 3 / 4 ,
		ad = $("#resource").offset().top + $("#resource").height() / 4 ,
		ae = $("#resource").offset().top - $("#resource").height() * 3 / 4 ,
		af = $("#faq").offset().top + $("#faq").height() / 4 ,
		ag = $("#faq").offset().top - $("#faq").height() * 3 / 4 ,
		ah = $("#update").offset().top - $("#update").height()  / 4 ,
		ai = $("#update").offset().top - $("#update").height() * 3 / 4 ;
		aa <= a && a < ab && ($("#side-page").addClass("anim-side-page"), $("#scanning").addClass("anim-scanning"), $("#side-person").addClass("anim-side-person"), $("#side-word").addClass("anim-side-word"));
		(ab <= a || a < pTop1 ) && ($("#side-page").removeClass("anim-side-page"), $("#scanning").removeClass("anim-scanning"), $("#side-person").removeClass("anim-side-person"), $("#side-word").removeClass("anim-side-word"));
		ac <= a && a < ad && ($("#homepage-page").addClass("anim-homepage-page"), $("#homepage-word").addClass("anim-side-word"));
		(ad <= a || a < pTop2) && ($("#homepage-page").removeClass("anim-homepage-page"), $("#homepage-word").removeClass("anim-side-word"));	
		ae <= a && a < af && ($("#resourcecont").addClass("anim-resource-cont"), $("#resource-word").addClass("anim-resource-word"));
		(af <= a || a < pTop3) && ($("#resourcecont").removeClass("anim-resource-cont"), $("#resource-word").removeClass("anim-resource-word"));
		ag <= a && a < ah && ($("#faq-title").addClass("anim-faq-title"),setTimeout(function() {$("#dl1").addClass("anim-dl1")},200),setTimeout(function() {$("#dl2").addClass("anim-dl2")},300),setTimeout(function() {$("#dl3").addClass("anim-dl3")},400),setTimeout(function() {$("#dl4").addClass("anim-dl4")},500));
		(ah <= a || a < pTop4) && ($("#faq-title").removeClass("anim-faq-title"),setTimeout(function() {$("#dl1").removeClass("anim-dl1")},200),setTimeout(function() {$("#dl2").removeClass("anim-dl2")},300),setTimeout(function() {$("#dl3").removeClass("anim-dl3")},400),setTimeout(function() {$("#dl4").removeClass("anim-dl4")},500));
		ai <= a && ($("#update-android").addClass("anim-update-android"),$("#update-ios").addClass("anim-update-ios"));
		a < pTop5 && ($("#update-android").removeClass("anim-update-android"),$("#update-ios").removeClass("anim-update-ios"));
		
		
	});	
	setTimeout(function () {
		window.scroll(0,0);
	}, 100);
});
