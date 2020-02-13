


$(window).load(function(){
	$('.wap').stop(true).fadeIn(600)
	$('.foot_nav').stop(true).slideDown(300);
	$('.foot_nav_con_list').addClass('foot_nav_con_list_show');
						
	var banner_imgH=$(window).width()*788/1400;
	var ww=$(window).width();
	
if($(window).width()>1025){
	 $('.section').height($(window).height()-50);
	 
	 }else if($(window).width()>767 && $(window).width()<1025){
	 $('.section').height($(window).height()-220);}	
	
	
	$('.banner>ul>li').width($(window).width());
	$('.banner>ul>li>img').css("marginTop",-banner_imgH/2);
	$('.banner>ul').width($('.banner>ul>li').width()*$('.banner>ul>li').size());
	
	$('.heard_nav>li>ul').css("paddingRight",ww/2-500+18);
	
	  $(window).resize(function(){
		   var banner_imgH=$(window).width()*788/1400;
           $('.section').height($(window).height());
	       $('.banner>ul>li').width($(window).width());
	       $('.banner>ul>li>img').css("marginTop",-banner_imgH/2);
	       $('.banner>ul').width($('.banner>ul>li').width()*$('.banner>ul>li').size());
		   
		   $('.heard_nav>li>ul').css("paddingRight",ww/2-500+18);
		   
		  })  

$('.banner>ul>li').eq(0).find('.banner_zi>h2').stop(true).animate({top:"0",opacity:"1"},600)
$('.banner>ul>li').eq(0).find('.banner_zi>p').stop(true).delay(300).animate({top:"0",opacity:"1"},600)


$(function(){
	$('.banner_prev').hover(function(){
		$('.banner_prev').addClass('banner_change1')
		$('.banner_next').removeClass('banner_change2')
		$(this).stop(true).animate({opacity:"1"},500);
		},function(){
			$(this).stop(true).animate({opacity:"0"},500);
			})
	$('.banner_next').hover(function(){
		$('.banner_next').addClass('banner_change2')
		$('.banner_prev').removeClass('banner_change1')
		$(this).stop(true).animate({opacity:"1"},500);
		},function(){
			$(this).stop(true).animate({opacity:"0"},500);
			})
		
	$('.banner_next').click(function(){
		banner_ne();
		})
	$('.banner_prev').click(function(){
		banner_pr();
		})	
					
	})


var n=1;
var banS=$('.banner>ul>li').size();
var banH=$('.banner>ul>li').width();
function banner_ne(){
	if(n<banS){
		$('.banner>ul').stop(true).delay(100).animate({left:-banH*n},800,'easeInOutQuad');
		$('.banner_prev').fadeIn(300);
		banner_zi_ne();
		n++;
		}
		if(n==banS){
			$('.banner_next').stop(true).fadeOut(300);
			}	
	}
function banner_pr(){
	if(n>1){
		$('.banner>ul').stop(true).delay(100).animate({left:-banH*(n-2)},800,'easeInOutQuad');
		$('.banner_next').fadeIn(300);
		banner_zi_pr();
		n--;
		}
		if(n==1){
			$('.banner_prev').fadeOut(300);
			}
	}

function bannerAuto(){
	if(n<banS){
		$('.banner>ul').stop(true).delay(100).animate({left:-banH*n},800,'easeInOutQuad');
		$('.banner_prev').fadeIn(300);
		banner_zi_ne();
		n++;
		}else{
			$('.banner>ul').stop(true).delay(100).animate({left:0},800,'easeInOutQuad');
			n=1;
			$('.banner_next').stop(true).fadeIn(300);
			$('.banner_prev').stop(true).fadeOut(300);
			}
		if(n==banS){
			$('.banner_next').stop(true).fadeOut(300);
			}
	}


setInterval(function(){
	bannerAuto();
	},6000)




function banner_zi_ne(){
	$('.banner>ul>li').find('.banner_zi>h2').stop(true).animate({top:"-50px",opacity:"0"},200)
    $('.banner>ul>li').find('.banner_zi>p').stop(true).animate({top:"50px",opacity:"0"},200)
	setTimeout(function(){
		$('.banner>ul>li').eq(n-1).find('.banner_zi>h2').stop(true).delay(900).animate({top:"0px",opacity:"1"},600)
        $('.banner>ul>li').eq(n-1).find('.banner_zi>p').stop(true).delay(1200).animate({top:"0px",opacity:"1"},600)
		},210)
	}
function banner_zi_pr(){
	$('.banner>ul>li').find('.banner_zi>h2').stop(true).animate({top:"-50px",opacity:"0"},200)
    $('.banner>ul>li').find('.banner_zi>p').stop(true).animate({top:"50px",opacity:"0"},200)
	setTimeout(function(){
		$('.banner>ul>li').eq(n-1).find('.banner_zi>h2').stop(true).delay(900).animate({top:"0px",opacity:"1"},600)
        $('.banner>ul>li').eq(n-1).find('.banner_zi>p').stop(true).delay(1200).animate({top:"0px",opacity:"1"},600)
		},210)
	}	
		  
	})


$(window).load(function(){
	var liload=$('.foot_nav_con_list').eq(0).offset().left-5;
	$('.bottom_nav_img').stop(true).animate({left:liload,opacity:"1"},600)
	$('.bottom_nav_img>img').attr("src","images/bottom_list1.jpg");
	$('.bottom_nav_img').removeClass('bottom_nav_img_show');
	setTimeout(function(){
			$('.bottom_nav_img').addClass('bottom_nav_img_show');
			},10)
	})


$(function(){
	$('.foot_nav_box').hover(function(){
		$('.foot_nav').stop(true).slideDown(300);
		$('.foot_nav_con_list').addClass('foot_nav_con_list_show');
		},function(){
			$('.foot_nav').stop(true).delay(300).slideUp(300);
		    $('.foot_nav_con_list').delay(300).removeClass('foot_nav_con_list_show');
			$('.bottom_nav_img').stop(true).animate({opacity:"0"},600)
			})
	
	$('.foot_nav_con_list').eq(0).hover(function(){
		var lileft=$(this).offset().left-5;
		$('.bottom_nav_img').stop(true).animate({left:lileft,opacity:"1"},600)
		$('.bottom_nav_img>img').attr("src","images/bottom_list1.jpg");
		$('.bottom_nav_img').removeClass('bottom_nav_img_show');
		setTimeout(function(){
			$('.bottom_nav_img').addClass('bottom_nav_img_show');
			},10)
		})
	$('.foot_nav_con_list').eq(1).hover(function(){
		var lileft=$(this).offset().left-5;
		$('.bottom_nav_img').stop(true).animate({left:lileft,opacity:"1"},600)
		$('.bottom_nav_img>img').attr("src","images/bottom_list2.jpg");
		$('.bottom_nav_img').removeClass('bottom_nav_img_show');
		setTimeout(function(){
			$('.bottom_nav_img').addClass('bottom_nav_img_show');
			},10)
		})
	$('.foot_nav_con_list').eq(2).hover(function(){
		var lileft=$(this).offset().left-5;
		$('.bottom_nav_img').stop(true).animate({left:lileft,opacity:"1"},600)
		$('.bottom_nav_img>img').attr("src","images/bottom_list3.jpg");
		$('.bottom_nav_img').removeClass('bottom_nav_img_show');
		setTimeout(function(){
			$('.bottom_nav_img').addClass('bottom_nav_img_show');
			},10)
		})
	$('.foot_nav_con_list').eq(3).hover(function(){
		var lileft=$(this).offset().left-5;
		$('.bottom_nav_img').stop(true).animate({left:lileft,opacity:"1"},600)
		$('.bottom_nav_img>img').attr("src","images/bottom_list4.jpg");
		$('.bottom_nav_img').removeClass('bottom_nav_img_show');
		setTimeout(function(){
			$('.bottom_nav_img').addClass('bottom_nav_img_show');
			},10)
		})			
			
	})




$(function(){
	$('.heard_nav>li').hover(function(){
		$(this).find('ul').stop(true).slideDown(300);
		$(this).find('ul>li').addClass('erji_on');
		},function(){
			$(this).find('ul').stop(true).slideUp(300);
			$(this).find('ul>li').removeClass('erji_on');
			})
	})








$(function(){
	
	$('.weixin').hover(function(){
		$(this).stop(true).animate({width:"100px"},500);
		$(this).html('WEIXIN')
		$('.weixinxs').animate({opacity:"1"},500)
		},function(){
			$(this).stop(true).animate({width:"42px"},500);
		    $(this).html('W')
		$('.weixinxs').animate({opacity:"0"},500)			
			})
	
	$('.lang').hover(function(){
		$(this).stop(true).animate({width:"100px"},500);
		$(this).html('ENGLISH')
		},function(){
			$(this).stop(true).animate({width:"42px"},500);
		    $(this).html('E')
			})		
	
	})




$(document).ready(function (e) {
	$(".cover_pro").stop(true).animate({"top":"0"},600);
	$(".cover_wait").stop(true).animate({"top":"0"},600);
	$(".cover_activity").stop(true).animate({"top":"0"},600);
	
            var _MovePx = 25;
            var _finalWidth = 0;
            var IsResize = false;
            function calc() {
                var _overLapping = 0;
                var _imgFactWidth = 650;
                var _imgNowWidth = $(window).width() / 4 + _overLapping;
                _finalWidth = _imgNowWidth;
                $(".divimg").width(_imgNowWidth);
                $(".divimg .mr").width(_imgNowWidth + 50);

                if (IsResize == false) {
                    $(".divimg .mr").each(function (index, item) { 
                        IsResize = true;
                    });
                }
                $(".divimg").height($(window).height()-150);
                _finalLeft1 = 0,
                _finalLeft2 = _imgNowWidth - _overLapping,
                _finalLeft3 = _imgNowWidth * 2 - _overLapping * 2;
            }

            if (navigator.userAgent.indexOf("MSIE 8.0") < 0) {

                $(".divimg").hover(function () {
					if($(".cover_pro").css("top") == "0px")
					{
						
						var _nowIndex = $(".divimg").index(this);
                    var _$sibs = $(this).parent("a").siblings("a").children(".divimg");

                    $(this).stop(true).animate({ width: (_finalWidth*1.4) + "px" }, {
                        easing: "easeOutQuart", duration: 600,
                        complete: function () { }
                    });

                    _$sibs.stop(false, false).animate({ width: (_finalWidth*0.9) + "px" }, {
                        easing: "easeOutQuart", duration: 600,
                        complete: function () { }
                    });		
					}

                	}, function () {
						if($(".cover_pro").css("top") == "0px")
						{
                   	 	$(".divimg").stop().animate({ width: _finalWidth + "px" }, {
                    	    easing: "easeOutQuart", duration: 600,
                     	   complete: function () { }
                    	});
					}
                });

            } 
            calc();

            $(window).resize(calc);
        });
	
$(function(){
  
  $('.divimg').hover(function(){
	  $(this).find('.divimg_bg').stop(true).animate({opacity:"0"},500);
	  },function(){
		  $(this).find('.divimg_bg').stop(true).animate({opacity:"0.5"},500);
		  })
		  
  $('.news_list').hover(function(){
	  $(this).find('.news_bg').stop(true).animate({opacity:"0.5"},500);
	  $(this).find('.news_more').stop(true).animate({top:"50%",opacity:"1"},500);
	  },function(){
		  $(this).find('.news_bg').stop(true).animate({opacity:"0"},500);
		  $(this).find('.news_more').stop(true).animate({top:"40%",opacity:"0"},500);
		  })
  	
})










// up and down  

$(function(){  
  $('.caoz').click(function(){
	  var m=$(this).find('p').html();
	  if(m=='-'){
		 $(this).parents('.ab4_list').removeClass('ab4_list_on')
		 $(this).parents('.ab4_list_box').find('.ab4_list_show').slideUp(600)
		  $(this).find('p').html('+');
		  }else{
			  $('.ab4_list').removeClass('ab4_list_on')
			  $('.caoz').find('p').html('+');
			  $('.ab4_list_box').find('.ab4_list_show').slideUp(600)
			  $(this).parents('.ab4_list').addClass('ab4_list_on')
			  $(this).parents('.ab4_list_box').find('.ab4_list_show').slideDown(600)
			  $(this).find('p').html('-');
			  }
	  })  	
})


// up and down  /








//  pro_inner


 $(".news-list-right").hover(
       function(){
		   $(this).find('.bianan').stop(true,false).animate({"opacity":"0.5","top":"0"});
		  
		   },function(){
		   $(this).find('.bianan').stop(true,false).animate({"opacity":"0","top":"0"});
		  
		   }
   )
 
 
// $(window).scroll(function(){
//	if($(window).scrollTop()>($(".dan1").offset().top-700)){
//		$(".dan1-img img").animate({"opacity":"1","top":"0"},1200);
//		$(".dan1-text h5").animate({"opacity":"1","top":"0"},1200);
//		$(".dan1-text>p").delay(600).animate({"opacity":"1","top":"0"},1200);
// 	}
//	
//	if($(window).scrollTop()>($(".dan2").offset().top-700)){
//		$(".dan2-img img").animate({"opacity":"1","top":"0"},1200);
//		$(".dan2-text h5").animate({"opacity":"1","top":"0"},1200);
//		$(".dan2-text>p").delay(600).animate({"opacity":"1","top":"0"},1200);
// 	}
//	
//	if($(window).scrollTop()>($(".dan3").offset().top-700)){
//		$(".dan3-img img").animate({"opacity":"1","top":"0"},1200);
//		$(".dan3-text h5").animate({"opacity":"1","top":"0"},1200);
//		$(".dan3-text>p").delay(600).animate({"opacity":"1","top":"0"},1200);
// 	}
//	
//	if($(window).scrollTop()>($(".dan4").offset().top-700)){
//		$(".dan4-img img").animate({"opacity":"1","top":"0"},1200);
//		$(".dan4-text h5").animate({"opacity":"1","top":"0"},1200);
//		$(".dan4-text>p").delay(600).animate({"opacity":"1","top":"0"},1200);
// 	}
//	
//	if($(window).scrollTop()>($(".shuang1").offset().top-700)){
//		$(".shuang1-img img").animate({"opacity":"1","top":"0"},1200);
//		$(".shuang1-text h5").animate({"opacity":"1","top":"0"},1200);
//		$(".shuang1-text>p").delay(600).animate({"opacity":"1","top":"0"},1200);
// 	}
//	
//	if($(window).scrollTop()>($(".shuang2").offset().top-700)){
//		$(".shuang2-img img").animate({"opacity":"1","top":"0"},1200);
//		$(".shuang2-text h5").animate({"opacity":"1","top":"0"},1200);
//		$(".shuang2-text>p").delay(600).animate({"opacity":"1","top":"0"},1200);
// 	}
//	
//	if($(window).scrollTop()>($(".shuang3").offset().top-700)){
//		$(".shuang3-img img").animate({"opacity":"1","top":"0"},1200);
//		$(".shuang3-text h5").animate({"opacity":"1","top":"0" },1200);
//		$(".shuang3-text>p").delay(600).animate({"opacity":"1","top":"0"},1200);
// 	}
//	})


 $(".news-list-right").hover(
       function(){
		   $(this).find('.bianan').stop(true,false).animate({"opacity":"0.5","top":"0"});
		  
		   },function(){
		   $(this).find('.bianan').stop(true,false).animate({"opacity":"0","top":"0"});
		  
		   }
   )
 
 $(document).ready(function(){
	var ww=$(window).width();
	var lcimgH=$('.lc-img>img').eq(0).height();
	$('.lc-con').height(lcimgH)
	var neiyH=$('.neiy-l').height();
	var lcH=$('.lc-con').height();
	var honH=$('.honor-l').height();
	
	$('.cul').height(ww*899/1901);
	$('.neiy-r').height(neiyH);
	$('.lc-l').height(lcH);
	$('.honor-r').height(honH);
	
	
	$(window).resize(function(){
	 var ww=$(window).width();
	var lcimgH=$('.lc-img>img').eq(0).height();
	$('.lc-con').height(lcimgH)
	var neiyH=$('.neiy-l').height();
	var lcH=$('.lc-con').height();
	var honH=$('.honor-l').height();
	
	$('.cul').height(ww*899/1901);
	$('.neiy-r').height(neiyH);
	$('.lc-l').height(lcH);
	$('.honor-r').height(honH);
	 })
	
	
	$('.neiy-t>img').animate({top:"0",opacity:"1"},800);
	$('.neiy-l').delay(300).animate({left:"0",opacity:"1"},800);
	$('.neiy-r').delay(600).animate({right:"0",opacity:"1"},800);
	
	
	})



	
	
	
	
	
	//   products inner 3   
	
	
	// JavaScript Document

$(document).ready(function(){
  

  $('.pro_xximg').height(($('.pro_xximg').width()*608/938))
  
  $(window).resize(function(){
  $('.pro_xximg').height(($('.pro_xximg').width()*608/938))
	  })
    
})


$(function(){
	
	var n=0;
	
	$('.pro_xx_s>li').click(function(){
		var pro_num=$(this).index();
		$('.pro_xximg>li').removeClass('pro_xximg_z');
		$('.pro_xximg>li').eq(pro_num).addClass('pro_xximg_z');
		$('.pro_xximg>li').eq(pro_num).addClass('pro_xximg_show');
		$('.pro_xx_s>li').removeClass('pro_xx_son')
		$(this).addClass('pro_xx_son')
		
		setTimeout(function(){
			$('.pro_xximg>li').removeClass('pro_xximg_show');
			$('.pro_xximg>li').eq(pro_num).addClass('pro_xximg_show');
			},300)
		
		})
	
	$('.pro_xx_s>li').hover(function(){
		$(this).find('.line_t').stop(true).animate({width:"100%"},300)
		$(this).find('.line_r').stop(true).animate({height:"100%"},300)
		$(this).find('.line_b').stop(true).animate({width:"100%"},300)
		$(this).find('.line_l').stop(true).animate({height:"100%"},300)
		},function(){
			$(this).find('.line_t').stop(true).animate({width:"0"},300)
		    $(this).find('.line_r').stop(true).animate({height:"0"},300)
		    $(this).find('.line_b').stop(true).animate({width:"0"},300)
		    $(this).find('.line_l').stop(true).animate({height:"0"},300)
			})	
    
	$('.pro_xx_s>li').width($('.pro_xx_s_box').width()/4-12);
    var xx=$('.pro_xx_s>li').width()+12;
	var ss=$('.pro_xx_s>li').size();
    
	$('.pro_xx_s').width(xx*ss+10)

   
    $('.pro_xx_next').click(function(){
		if(n>(ss-5)){
			$('.pro_xx_s').stop(true).animate({left:0},300)
			n=0;
			}else{
				$('.pro_xx_s').stop(true).animate({left:-xx*(n+1)},300)
			    n++;
				}
		})
	
	
	$('.pro_xx_prev').click(function(){
		if(n<1){
			$('.pro_xx_s').stop(true).animate({left:-(ss-4)*xx},300)
			n=ss-4;
			}else{
				$('.pro_xx_s').stop(true).animate({left:-xx*(n-1)},300)
			    n--;
				}
		})	
    

	
	})



//  products inner3  /





//*******加盟优势*************//

$(document).ready(function() {
	
	
	$('.youshi_con_r').height(($('.youshi_con_r').width()*483/836));
	$('.youshi_con_l').height($('.youshi_con_r').height());
	$('.youshi_num').width($('.youshi_num>ul').width());
	
	$(window).resize(function(){
		$('.youshi_con_r').height(($('.youshi_con_r').width()*483/836));
		$('.youshi_con_l').height($('.youshi_con_r').height());
		$('.youshi_num').width($('.youshi_num>ul').width());
		})
			
})



$(function(){

$('.youshi_num>ul>li').click(function(){
	var num=$(this).index();
	$('.youshi_num>ul>li').stop(true).removeClass('num_on')
	$(this).stop(true).addClass('num_on')
	$('.youshi_con_img').stop(true).fadeOut(1000);
	$('.youshi_con_img').eq(num).stop(true).fadeIn(1000);
	$('.youshi_con_zi').stop(true).fadeOut(1000);
	$('.youshi_con_zi').eq(num).stop(true).fadeIn(1000);
	})
	
})












//***********banner_video*********************//
$(document).ready(function() {
   
   if($(window).width()>767){
       $('.content_know').height($(window).width()*750/1920);	   
	   }else{
		   $('.content_know').height($(window).width()*620/768);
		   }
   	
   var vw1=$('.about_video').width()/3.5;
   var vw2=vw1*1.5;
   var vs=$('.about_video_box>ul>li').size();
   $('.about_video_box>ul>li').width(vw1);
   $('.about_video_box>ul>li').eq(1).width(vw2);
   $('.about_video_box>ul').width(vw1*(vs-1)+vw2+1000);
   $('.about_video_box>ul>li').eq(1).height(vw2*261/501);
   $('.about_video_box>ul>li').height($('.about_video_box>ul>li').eq(1).height());
   
   
   $(window).resize(function(){
	   if($(window).width()>767){
       $('.content_know').height($(window).width()*750/1920);	   
	   }else{
		   $('.content_know').height($(window).width()*620/768);
		   }
	   
	   var vw1=$('.about_video').width()/3;
       var vw2=vw1*1.5;
       var vs=$('.about_video_box>ul>li').size();
	   $('.about_video_box>ul>li').width(vw1);
	   $('.about_video_box>ul>li').eq(1).width(vw2);
	   $('.about_video_box>ul').width(vw1*(vs-1)+vw2+1000);
	   $('.about_video_box>ul>li').eq(1).height(vw2*261/501);
	   $('.about_video_box>ul>li').height($('.about_video_box>ul>li').eq(1).height());
	   
	   })    
	   
   
$('.video_next').click(function(){
	$('.about_video_box>ul>li').eq(1).stop(true,true).animate({width:vw1},500);
	$('.about_video_box>ul>li').eq(2).stop(true,true).animate({width:vw2},500);
	$('.about_video_box>ul').stop(true,true).animate({marginLeft:-vw1},500,function(){
    $('.about_video_box>ul').find('li:first-child').appendTo($('.about_video_box>ul'));
    $('.about_video_box>ul').css({marginLeft:0})
	})
})


$('.video_prev').click(function(){
    $('.about_video_box>ul').stop(true,true).animate({marginLeft:-vw1},0,function(){
    $('.about_video_box>ul').find('li:last-child').prependTo($('.about_video_box>ul'));
    $('.about_video_box>ul').stop(true,true).animate({marginLeft:0},500)
	$('.about_video_box>ul>li').eq(2).stop(true,true).animate({width:vw1},500);
	$('.about_video_box>ul>li').eq(1).stop(true,true).animate({width:vw2},500);
    })
})   
   	     
  	
})



/*************banner_honor*******/

$(document).ready(function(){
  $('.content_honor_list_box>ul>li').width($('.content_honor_list').width());
  var hw=$('.content_honor_list_box>ul>li').width();
  var hs=$('.content_honor_list_box>ul>li').size();
  $('.content_honor_list_box>ul').width(hw*hs+100);	
  
  $(window).resize(function(){
	  $('.content_honor_list_box>ul>li').width($('.content_honor_list').width());
      var hw=$('.content_honor_list_box>ul>li').width();
      var hs=$('.content_honor_list_box>ul>li').size();
      $('.content_honor_list_box>ul').width(hw*hs+100);		
	  })
 
 $('.honnr_next').click(function(){ 
	 $('.content_honor_list_box>ul').stop(true,true).animate({marginLeft:-hw},800,function(){
     $('.content_honor_list_box>ul').find('li:first-child').appendTo($('.content_honor_list_box>ul'));
     $('.content_honor_list_box>ul').css({marginLeft:0})
	 })
 })
 
 $('.honnr_prev').click(function(){
    $('.content_honor_list_box>ul').stop(true,true).animate({marginLeft:-hw},0,function(){
    $('.content_honor_list_box>ul').find('li:last-child').prependTo($('.content_honor_list_box>ul'));
    $('.content_honor_list_box>ul').stop(true,true).animate({marginLeft:0},800)
	})
 }) 
 
 
 
    
  });
  




$(document).ready(function(){
	
 $("#jPanelMenu-menu>ul>li").click(function(){
		if($(this).find("ul").css("display")=="none"){			
			$(this).find("ul").slideDown();	
		}else{
			$(this).find("ul").slideUp();
		}
		
	});

 $("#jPanelMenu-menu>ul>li>ul>li").click(function(){
	 $('#jPanelMenu-menu').toggleClass('jPanelMenu')
	 $('#jPanelMenu-menu>ul').stop(true).slideUp(1000)
	 })

$('.xpnav-btn').click(function(){
	$('#jPanelMenu-menu').toggleClass('jPanelMenu')
	$('#jPanelMenu-menu>ul').stop(true).slideToggle(1000)
	})
})





















