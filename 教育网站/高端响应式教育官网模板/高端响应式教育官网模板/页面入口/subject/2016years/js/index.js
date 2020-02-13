<!-- banner头部特效 -->
	$(function(){
		$(".ban .img1").animate({
			left:"431"
		},700);	
		$(".ban .img2").animate({
			right:"317"
		},700);	
		$(".ban .img3").delay(900).fadeIn("slow");
	});	
<!--视频播放代码-->
	$(function(){
		$(".conr li span").click(function(){
			$(this).hide().siblings(".video_in").show();
		})	
	});
	$(function(){
		$(".video span").click(function(){
			$(this).hide().siblings(".video_in").show();
		})	
	});
<!--节目单切换-->
	$(function(){
		$('#tab .conl .txt p').click(function(){
			$(this).addClass('cur').siblings().removeClass('cur');
			$('#tab .conr li').eq($(this).index()).addClass('curs').siblings().removeClass('curs');
		});
	});
	$(function(){
		$('#tab1 .conl .txt p').click(function(){
			$(this).addClass('cur').siblings().removeClass('cur');
			$('#tab1 .conr li').eq($(this).index()).addClass('curs').siblings().removeClass('curs');
		});
	});
	$(function(){
		$('#tab2 .conl .txt p').click(function(){
			$(this).addClass('cur').siblings().removeClass('cur');
			$('#tab2 .conr li').eq($(this).index()).addClass('curs').siblings().removeClass('curs');
		});
	})
<!--十年历史切换-->
	$(function(){
		$('#hispro ul li').mouseenter(function(){
			$(this).addClass('current').siblings().removeClass('current');
			$('#hispro .histxt p').eq($(this).index()).addClass('currents').siblings().removeClass('currents');
		});
	})
<!--影集切换代码-->
	$(document).ready(
		function(){
			var kuandu = 600; 	//这个数字是每张图片的宽度，记得按需更改
			var shijian = 2; //这个数字是动画时间
			
			//============================================================
			//				          不用更改下面
			//============================================================
			var nowimg = 0; 	//信号量
			var mytimer = null;

			//将图片列表中的第一个节点复制，然后追加到队列的最后。
			$("#czimg ul li:first").clone().appendTo("#czimg ul");

			$("#czxinxi ul li").click(
				function(){
					nowimg = $(this).index();
					dongzuo();
					$(this).addClass("cur").siblings().removeClass("cur");
				}
			);

			function dongzuo(){
				//【业务1】根据信号量，来改变ul的left值
				$("#czimg ul").animate(
					{
						"left":-kuandu * nowimg
					}
					,shijian
				);
			}
			$(".years li").click(function(){
				$(".years_con ul").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
				$(this).addClass("current").siblings().removeClass("current");
			})
		}
	);
<!-- 回到头部js代码 -->
	$(document).ready(
		function(){
		jQuery.extend( jQuery.easing, {
				easeOutQuint: function (x, t, b, c, d) {
					return c*((t=t/d-1)*t*t*t*t + 1) + b;
				}
				});		
		$(window).scroll(function(){
			changeBack();
		}).resize(function(){
			changeBack();
		});
		var backBar = null;
		function changeBack(){
			clearTimeout(backBar);
			backBar = setTimeout(function(){
				var A = $(window).scrollTop(),
					h = $(window).height() - 120;
	
				if(A > 0){
					$("#back").fadeIn().animate({top: A + h}, 'normal', 'easeOutQuint');
				}else{
					$("#back").fadeOut();
				}
			}, 200);
		}
			$("#back").click(
				function(){
					$("html,body").animate(
						{
							"scrollTop":0
						},1000
					);
				}
			);
			$("#back").mouseenter(
				function(){
					$("#back").css({"background":"#FEFFAB","color":"#AB0F13"});
				}
			)
			$("#back").mouseleave(
				function(){
					$("#back").css({"background":"#AB0F13","color":"#FEFFAB"});
				}
			)

		}
	);
