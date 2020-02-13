/************首页新版****************/
$(document).ready(function(){
	//tab标签
	var nav = $(".mainNewquest ul li");
	var tips = $(".mainNewtime ul");
	nav.each(function(i){
		$(nav[i]).click(function(){
			$(this).addClass('mainNewnow');
			$(this).siblings('li').removeClass('mainNewnow');
			tips.hide();
				$(tips[i]).fadeIn();
				});
		});

//页面顶部微博，微信二维码效果
	$(".mainNew-wx").hover(function(){
		$(this).children(".mainNew-ewm").fadeToggle(100);
	});
	$(".mainNew-wb").hover(function(){
		$(this).children(".mainNew-ewm").fadeToggle(100);
	});

//导航 nav
    $(".mainNewover").hover(function(){
    	$(this).children(".mainNew-bind").fadeToggle(100);
    });

//侧边栏导航
	$(".fixed-con").mouseenter(function(){
		$(this).children(".fixedHide").stop().animate({right:'0px'},300);
		});

	$(".fixedHide-nomal").mouseleave(function(){
		$(this).stop().animate({right:'-65px'},300);
		});

	$(".hide-tel").mouseleave(function(){

		$(this).stop().animate({right:'-261px'},300);
		});

	$(".hide-service").mouseleave(function(){
		$(this).stop().animate({right:'-130px'},300);
		});
	$(".fixed-con").mouseleave(function(){
		$(this).children(".fixedHide-nomal").stop().animate({right:'-65px'},300);
		$(this).children(".hide-tel").stop().animate({right:'-261px'},300);
		$(this).children(".hide-service").stop().animate({right:'-130px'},300);
	});

//快速登录部分
	$(".quickLogin").click(function(){
		$(".loginCon").stop().animate({left:'-290px'},200);
	});
	$(".singInbtn a").click(function(){
// 用户名密码正确转到第三栏
		var p = makevar(['user_name','pass_word','vcode']);
		var canSubmit = true;
		if(typeof p.user_name=="undefined"){
			$(".signIn-errMsg").html("用户名不能为空").show();
			return false;
		}
		if(typeof p.pass_word=="undefined"){
			$(".signIn-errMsg").html("密码不能为空").show();
			return false;
		}
	        if(typeof p.vcode=="undefined"){
	        	$(".signIn-errMsg").html("验证码不能为空").show();
			return false;
		}
		
		if(canSubmit!==true) return false;
		postData("/home-login-login",p,function(d){
		if(d.status==1){
			$(".loginCon").stop().animate({left:'-580px'},200);
			window.location.reload();
		   }
		else if(d.status==5){
			$(".signIn-errMsg").html(d.message).show();
			 $("#reverifyCode").click();
		}
		else{
			$(".signIn-errMsg").html(d.message).show();
		}
		});
		

	});


//返回顶部


$(window).bind('scroll', {
    fixedOffsetBottom: parseInt($('#fixed-services').css('bottom'))
},
function(e) {
    var scrollTop = $(window).scrollTop();
    var referFooter =$('#mainNewfoot');
    scrollTop > 100 ? $('#gotoTop').css("visibility","visible") : $('#gotoTop').css("visibility","hidden");
    if (!/msie 6/i.test(navigator.userAgent)) {
        if ($(window).height() - (referFooter.offset().top - $(window).scrollTop()) > e.data.fixedOffsetBottom) {
            $('#fixed-services').css('bottom', $(window).height() - (referFooter.offset().top - $(window).scrollTop()))
        } else {
            $('#fixed-services').css('bottom', e.data.fixedOffsetBottom)
        }
    }
});
$('#gotoTop').click(function() {
    $('body,html').stop().animate({
        'scrollTop': 0,
        'duration': 100,
        'easing': 'ease-in'
    })
});



});
$(function(){
	$(".mainNewtab ul li").click(function(){
	if(($(this).index()+1)<4){
    $(".mainNewtab ul li").removeClass("mainNew-light");
    $(".mainNewtab ul li a").removeClass("mainNew-light");
	$(this).addClass("mainNew-light");
	$(this).children("a").addClass("mainNew-light");
	var tabindex='.tab-'+($(this).index()+1);
	$('.tab-1,.tab-2,.tab-3').css('display','none');
	$(tabindex).css('display','block');
    }
	})
});

















