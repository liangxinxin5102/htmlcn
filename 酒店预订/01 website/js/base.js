

/*文本框文字显隐 第一个参数是作用选择器，第二个参数是添加的类，可以不加此参数*/
function searchTxt(cla,claName){
	var cla = $(cla);
	var claName = claName;
	if(claName == undefined){
		claName = "";
	}
	cla.each(function(){
		var defTxt = $(this).val();
		$(this).bind({
			focus:function(){
				$(this).addClass(claName);
				if($(this).val() == defTxt){
					$(this).val('');
				}
			},
			blur:function(){
				$(this).removeClass(claName);
				if($(this).val() == ''){
					$(this).val(defTxt);
				}
			}
		})
	})
}

//菜单选中      
function menuCheck(obj){
	$(".nav").find("a").each(function(){
		if($(this).text()==obj){
			$(this).addClass("cur");
		}
	});
}

//提示框 一.内容 二.类型 0.提示 1.成功 2.警告 3.错误 4.等待 三.消失时间(0代表不消失) 四.是否带遮罩层 五.遮罩层透明度
var prompt_timer = "";
function prompt_frm(txt,type,s,isTop,opa){
	var scw = 0;
	if (!!window.ActiveXObject) {scw = 18};
	if(s!=0 && (!s || s=='')){
		var s = 3000;
		if(type == 1) s = 400;
	}
	$('.prompt_frm, #promptBG').remove();
	$('body').append('<div class="prompt_frm"><span><i></i></span><em></em></div>')
	clearTimeout(prompt_timer);
	$('.prompt_frm em').text(txt);
	$('.prompt_frm').show();
	function center(){
		var windowWidth = document.documentElement.clientWidth;
		var promptWidth = $(".prompt_frm").width();
		var ofLeft = (windowWidth - promptWidth)/2;
		$('.prompt_frm').css({'left':ofLeft});	//定义左距离
		$('#promptBG').width($(document).width()-scw).height($(document).outerHeight())
	}
	center();
	$(window).resize(function(){center()});
	if(type == 0){$('.prompt_frm').attr('css','prompt_frm');}
	if(type == 1){$('.prompt_frm').addClass('prompt_frm_1');}
	if(type == 2){$('.prompt_frm').addClass('prompt_frm_2');}
	if(type == 3){$('.prompt_frm').addClass('prompt_frm_3');}
	if(type == 4){$('.prompt_frm').addClass('prompt_frm_4');}
	if(s!=0){ prompt_timer = setTimeout( function(){$('.prompt_frm').hide(); $('#promptBG').remove(); }, s) }
	if(isTop){
		$('body').append('<div id="promptBG"></div>')
		$('#promptBG').width($(document).width()-scw).height($(document).outerHeight())
		.css('opacity',opa);
	}
}



//二维码 
function vm(){
	var txt = '<div id="vm"><a href="#"><img src="/images/go_top.gif"></a></div>';
	$('body').append(txt);
	$('#vm').show();
	//function isTop(){
	//	var scrTop = $(document).scrollTop();
	//	if(scrTop != 0){$('#vm').fadeIn(300);}
	//	else{$('#vm').fadeOut(300);}
	//}
	//$(window).scroll(function(){ isTop(); })
}

//返回顶部
$(function(){
	vm();
})

//幻灯片
function slide(cla){
	function slideDown(){
		var currentBt = $(cla).find('.slideshow_footbar .slideshow-bt.bt-on');
		if (currentBt.length <= 0) return;
		var nxt = currentBt.get(0).previousSibling;
		slideTo(nxt?nxt:$(cla).find('.slideshow_footbar .slideshow-bt:last').get(0));
	}
	function slideTo(o){
		if (!o) return;
		var currentIndex = $(cla).find('.slideshow_footbar .slideshow-bt.bt-on').attr('index'),
			current = $(cla).find('.slideshow_photo a[index='+currentIndex+']');
		var nxt = $(cla).find('.slideshow_photo a[index='+$(o).attr('index')+']');
		if (currentIndex == $(o).attr('index')) return;
		
		if (nxt.find('img[imgsrc]').length > 0){
			var img =nxt.find('img[imgsrc]');
			img.attr('src',img.attr('imgsrc')).removeAttr('imgsrc');
		}
		
		$(cla).find('.slideshow_footbar .slideshow-bt.bt-on').removeClass('bt-on');
		$(o).addClass('bt-on');
		
		nxt.css('z-index',2);
		
		var textVal=nxt.attr('title')
		$(cla).find('.slideshow_footbar_val').text(textVal)
	
		current.css('z-index',3).fadeOut(500,function(){
			$(this).css('z-index','1').show();
			var img = nxt.next('a').find('img[imgsrc]');
			if (img.length > 0){
				img.attr('src',img.attr('imgsrc')).removeAttr('imgsrc');
			}
		});
	}
	
	$(cla).find('.slideshow_footbar').html("");
	if($(cla).find('.slideshow_photo a').attr('index')==1){
		var defVal=$(cla).find('.slideshow_photo a').attr('title')
	}
	$(cla).find('.slideshow_footbar_val').text(defVal);
	//生成下部小按钮
	var length = $(cla).find('.slideshow_photo a').length;
	for(var i = length; i >0; i--){
		$('<div class="slideshow-bt" index="'+i+'">'+i+'</div>').appendTo($(cla).find('.slideshow_footbar'));
    }
    $(cla).find('.slideshow_footbar .slideshow-bt:last').addClass('bt-on');
    $(cla).find('.slideshow_footbar .slideshow-bt').mouseenter(function(e){
		slideTo(this);
    });

    var indexAllowAutoSlide = true;
    $(cla).mouseenter(function(){
		indexAllowAutoSlide = false;
    }).mouseleave(function(){
		indexAllowAutoSlide = true;
    });
	//滚动
    setInterval(function(){
		if (indexAllowAutoSlide) slideDown();
    },3000);
}

//手风琴
function accordion(){
	var cla = $('#accordion');
	var maxW = 352;
	var defW = 214;
	cla.find('li').last().find('a').css('border-right','none');
	cla.find('li a').find('.bg').fadeTo(0,0.15).hide();
	cla.find('a').hover(function(){
		$(this).stop().animate({'width':maxW},200)
		.find('.bg').fadeOut(0);
		$(this).parents('li').siblings().find('a').stop().animate({'width':defW},200)
		.find('.bg').fadeIn(0);
	},function(){
		$(this).parents('ul').find('li a .bg').fadeOut(0);
	})
}


$(function(){
	//活动
	$('.action_list li').hover(function(){
		$(this).find('.txt_bg, .txt_main').stop().animate({'bottom':'0'},200);
		$(this).addClass('hover');
	},function(){
		$(this).find('.txt_bg, .txt_main').stop().animate({'bottom':'-35px'},200);
		$(this).removeClass('hover');
	})
	var guideTime = '';
	//电商导航
	$('.shop_guide_list li').hover(function(){
		$(this).css('z-index','500').siblings().css('z-index','400');
		$(this).find('.img_store').css('border-color','#f4781e');
		var cla = $(this);
		cla.addClass('hover');
		guideTime = setTimeout(function(){
			var w = $(document).width() - $('.shop_guide_list').width();
			var l = cla.offset().left - w/2;
			var h = cla.find('.inject_store').outerHeight();
			cla.find('.inject_bg').height(h);
			if(l>490){ cla.addClass('rightS'); cla.find('.img_store').css('border-left-color','#fff'); }
				else{ cla.removeClass('rightS'); cla.find('.img_store').css('border-right-color','#fff'); }
			cla.find('.arr_ico, .inject_bg').fadeTo(0,0.9).hide();
			cla.find('.arr_ico, .inject_bg, .inject_store').stop().fadeIn(200);
		},200)
	},function(){
		clearTimeout(guideTime);
		$(this).find('.img_store').css('border-color','#fff');
		$(this).removeClass('hover');
		$(this).find('.arr_ico, .inject_bg, .inject_store').fadeOut(0);
	})
})

//左侧边栏定位
function leftPos(){
	var leftP = 0;
	var relW = 20;//相对主div距离
	var cilW = $(document).width();
	var divW = $('.mar1000').width();
	var selfW = $('#slide_bar').width();
	//leftP = (cilW - divW) / 2 - selfW - relW;
	leftP = (cilW - divW) /2 - selfW - relW + 1170;
	$('#slide_bar').animate({'left':leftP},0).fadeIn(100);
}

//导航定位
//function slide_nav(){
//	if($('#slide_bar_m')[0]){
//		var length = $('#slide_bar_m a').length;
//		var marT = new Array();
//		var otherH = 15;
//		marT[1] = $('#recomActive').offset().top - otherH;
//		marT[2] = $('#ing_active').offset().top - otherH;
//		marT[3] = $('#pre_active').offset().top - otherH;
//		marT[4] = $('#active_goods').offset().top - otherH;
//		marT[5] = $('#shop_guide').offset().top - otherH;
//		marT[6] = 0;
//		$('#slide_bar_m a').each(function() {
//			var index = $(this).index() + 1;
//			$(this).click(function(){
//				$(this).addClass('cur').siblings('a').removeClass('cur');
//				$('html,body').animate({scrollTop:marT[index]+'px'}, 500);
//			})
//		});
//		$(window).scroll(function(){
//			var hei = document.body.scrollTop;
//			if ($.browser.msie || $.browser.mozilla){
//				var hei = document.documentElement.scrollTop;
//			}
//			for(var i = 1; i<=length; i++){
//				if(hei<marT[i+1]){
//					$('#slide_bar_m a').eq(i-1).addClass('cur').siblings('a').removeClass('cur');
//					break;
//				}
//			}
//		})
//	}
//}

function pos(){
	//随移固定 1.作用id 2.起始高度 3.结束高度 4.上边距or下边距 5.垂直边距
	scr_fixed('slide_bar',670,650,'t',0);
	
	//slide_nav();
	leftPos();
	$(window).scroll(function(){
		leftPos();
	})
	var resizeTimer = '';
	$(window).resize(function(){
		clearTimeout(resizeTimer)
		resizeTimer = setTimeout(function(){
			//侧边栏定位
			leftPos();
		},200);
	})
}


//随移固定 1.作用id 2.起始高度 3.结束高度 4.上边距or下边距 5.垂直边距
function scr_fixed(id,startH,finishH,vertical_type,mar){
	var obj=document.getElementById(id);
	if (document.all){
		var browser=navigator.appName 
		var b_version=navigator.appVersion 
		var version=b_version.split(";"); 
		var trim_Version=version[1].replace(/[ ]/g,""); 
		if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0") {var llq="ie6"}else{var llq="ie"}
	}else{var llq="noie"}
	var inNun=false;
	var inNun2=false;
	var inNun3=false;
	$(window).scroll(function(){
		var allH=document.body.scrollHeight-finishH;
		var scroH=document.documentElement.scrollTop+document.body.scrollTop;
		//右侧移动
		if(scroH >startH && scroH <allH){
			if (llq=="ie6") {
				if(vertical_type=="t"){
					obj.style.cssText="margin-top:"+mar+"px;position:absolute;top:"+scroH+"px";
				}else if(vertical_type=="b"){
					obj.style.cssText="margin-bottom:"+mar+"px;position:absolute;top:"+scroH+"px";
				}
				}else{
					if (!inNun){
						if(vertical_type=="t"){
							obj.style.cssText="margin-top:"+mar+"px;top:0px;position:fixed;";
						}else if(vertical_type=="b"){
							obj.style.cssText="margin-bottom:"+mar+"px;top:auto;bottom:0px;position:fixed;";
						}
						inNun=true; 
						}else return false;
					}
					inNun2=false; 
					inNun3=false; 
					}else if(scroH >allH){
						if (!inNun3){
							if(vertical_type=="t"){
								obj.style.cssText="margin-top:0px;position:absolute;top:"+allH+"px";
							}else if(vertical_type=="b"){
								obj.style.cssText="margin-bottom:0px;position:absolute;top:auto;bottom:"+allH+"px";
							}
							inNun3=true; 
							}else return false;
							inNun=false;
					}else{
						inNun=false;
						if (llq=="ie6") {
							if(vertical_type=="t"){
								obj.style.cssText="margin-top:0px;position:absolute;";
							}else if(vertical_type=="b"){
								obj.style.cssText="margin-bottom:0px;position:absolute;";
							}
							}else{
								if (!inNun2){
									if(vertical_type=="t"){
										obj.style.cssText="margin-top:0px;position:absolute;";
									}else if(vertical_type=="b"){
										obj.style.cssText="margin-bottom:0px;position:absolute;";
									}
									inNun2=true; 
							}else return false;
						}
					}
		})
}