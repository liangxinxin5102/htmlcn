/*---------------------------------jQuery.easing-------------------------------------*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
var sina={$:function(objName){if(document.getElementById){return eval('document.getElementById("'+objName+'")')}else{return eval('document.all.'+objName)}},isIE:navigator.appVersion.indexOf("MSIE")!=-1?true:false,addEvent:function(l,i,I){if(l.attachEvent){l.attachEvent("on"+i,I)}else{l.addEventListener(i,I,false)}},delEvent:function(l,i,I){if(l.detachEvent){l.detachEvent("on"+i,I)}else{l.removeEventListener(i,I,false)}},readCookie:function(O){var o="",l=O+"=";if(document.cookie.length>0){var i=document.cookie.indexOf(l);if(i!=-1){i+=l.length;var I=document.cookie.indexOf(";",i);if(I==-1)I=document.cookie.length;o=unescape(document.cookie.substring(i,I))}};return o},writeCookie:function(i,l,o,c){var O="",I="";if(o!=null){O=new Date((new Date).getTime()+o*3600000);O="; expires="+O.toGMTString()};if(c!=null){I=";domain="+c};document.cookie=i+"="+escape(l)+O+I},readStyle:function(I,l){if(I.style[l]){return I.style[l]}else if(I.currentStyle){return I.currentStyle[l]}else if(document.defaultView&&document.defaultView.getComputedStyle){var i=document.defaultView.getComputedStyle(I,null);return i.getPropertyValue(l)}else{return null}}};

$(function() {
	if($.support.transition){
		$(".index_pro_container>ul>li").hover(function(){
			//$("img",this).stop(false,true).transition({
//				perspective: '300px',
//				rotateY: '180deg',
//				opacity: '0'
//			});
			$("p",this).css({display:'block',opacity:'0',rotateY: '-180deg'}).stop(false,true).transition({
				perspective: '300px',
				rotateY: '0deg',
				opacity: '1'
			});
		},function(){
			//$("img",this).show().stop(false,true).transition({
//				perspective: '300px',
//				rotateY: '0deg',
//				opacity: '1'
//			});
			$("p",this).stop(false,true).transition({
				perspective: '300px',
				rotateY: '180deg',
				opacity: '0'
			});
		});
	}else{
		$(".index_pro_container>ul>li").hover(function(){
//			$("img",this).stop(false,true).slideUp("fast");
			$("p",this).stop(false,true).slideDown("fast");
		},function(){
//			$("img",this).stop(false,true).slideDown("fast");
			$("p",this).stop(false,true).slideUp("fast");
		});
	}

})

/*---------------------------------Png透明-------------------------------------*/
function correctPNG() 
{ 
    var arVersion = navigator.appVersion.split("MSIE") 
    var version = parseFloat(arVersion[1]) 
    if ((version >= 5.5) && (document.body.filters)) 
    { 
       for(var j=0; j<document.images.length; j++) 
       { 
          var img = document.images[j] 
          var imgName = img.src.toUpperCase() 

          if (imgName.substring(imgName.length-3, imgName.length) == "PNG") 
          { 
             var imgID = (img.id) ? "id='" + img.id + "' " : "" 
             var imgClass = (img.className) ? "class='" + img.className + "' " : "" 
             var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' " 
             var imgStyle = "display:inline-block;" + img.style.cssText 
             if (img.align == "left") imgStyle = "float:left;" + imgStyle 
             if (img.align == "right") imgStyle = "float:right;" + imgStyle 
             if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle 
             var strNewHTML = "<span " + imgID + imgClass + imgTitle 
             + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";" 
             + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader" 
             + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>" 
             img.outerHTML = strNewHTML 
             j = j-1 
          } 
       } 
    }    
} 
if (window.ActiveXObject) {
  var ua = navigator.userAgent.toLowerCase();
  var ie=ua.match(/msie ([\d.]+)/)[1]
  if(ie==6.0){
  	 window.attachEvent("onload", correctPNG);
  }
}
function quiver(ele,times){
	for(var i = 0; i < times ;i++){
		$(ele).animate({top:'-15px'},100);
		$(ele).animate({top:'15px'},100);
		$(ele).animate({top:'0px'},100);
	}	
}
$(function(){
	$(".topTag").css({opacity:0.7}); //标签透明
	$(".contactBelow").animate({opacity:0.6},600); //联系我们背景透明
	$(".Logo").mouseover(function(){ //logo跳动
		quiver($(".Logo"),1);
	})
/*---------------------------------下拉菜单-------------------------------------*/
	$(".Nav li").hover(function(){
		$(this).children(".subMenu").animate({height:'200px'},200).dequeue().css({borderBottom:"3px solid #EC054B"});
	},function(){
		$(this).children(".subMenu").animate({height:'0'},200).dequeue().css({borderBottom:"none"});
	});
	$(".subMenu").hover(function(){
		$(this).siblings("a").css({background:"#f3f3f3",color:"#EC054B"});
	},function(){
		$(this).siblings("a").attr("style","")
	});
	$(".subMenu a").hover(function(){
		$(this).css({color:"#fff"}).animate({backgroundPositionY:"-90px"},400).dequeue();	
	},function(){
		$(this).css({color:"#888"}).animate({backgroundPositionY:"-210px"},400,function(){
				$(this).css({backgroundPositionY:0});	
		}).dequeue();	
	})
/*---------------------------------右侧导航的效果-------------------------------------*/	
	$(".ItemUnHovered").hover(function(){
		$(this).find(".dnRightItem").animate({left:0},500,'easeOutBounce').dequeue();	
	},function(){
		$(this).find(".dnRightItem").animate({left:'-203px'},500,'easeInQuint').dequeue();
	});
/*---------------------------------返回顶部-------------------------------------*/
	var sHeight = $(window).height();
	var gotoTopValue = 0;
	$(".gotoTop").click(function(){
		var goTop=setInterval(scrollMove,10);
		function scrollMove(){
			$(document).scrollTop(gotoTopValue / 1.1)
			if(gotoTopValue<1)clearInterval(goTop);
		}
        
	})
    $(window).scroll(function(){
		gotoTopValue = $(window).scrollTop();
		$(".gotoTop").css({top:gotoTopValue+sHeight*0.8})
	    if( gotoTopValue > 200 ){
			$(".gotoTop").css({visibility:"visible"}).dequeue();	
		}else{
			$(".gotoTop").css({visibility:"hidden"});
		}
	})
/*---------------------------------右侧联系QQ-------------------------------------*/
	$(".contactBox").css({display:"block"}).animate({marginTop:"20px"},1200,'easeOutElastic').dequeue();
/*---------------------------------联系我们-------------------------------------*/
	$(".contactLeft").animate({marginLeft:0},800);
	$(".contactRight").animate({marginRight:0},800);
/*---------------------------------footerOrder-------------------------------------*/
	$(".idx_name , .idx_email , .idx_phone , .idx_youWant , .idx_submit").hover(function(){
		$(this).animate({opacity:0.7},200).dequeue();
	},function(){
		$(this).animate({opacity:1},200).dequeue();
	})
/*---------------------------------footerNews-------------------------------------*/	
	$(".footerContent li").hover(function(){
		$(this).find("span").first().animate({textIndent:"20px"},300).parent().find("span").css({color:"#ec054b"}).dequeue();
	},function(){
		$(this).find("span").first().animate({textIndent:"0"},300).parent().find("span").css({color:"#979797"}).dequeue();
	})
/*---------------------------------Contact-------------------------------------*/	
	$(".contactLeft li").not(".sp").hover(function(){
		$(this).css({background:"#EC054B",color:"#fff"});	
	},function(){
		$(this).css({background:"#fff",color:"#666"});	
	});
/*---------------------------------MBX-------------------------------------*/	
	var mbxT = 0;
	$(".mbxMk , .mbxMk2").css({opacity:0.3});
	$(".mbxContent").animate({width:$(window).width()*0.4},1200,'easeOutElastic',function(){
		$(".mbxContent2").animate({width:$(window).width()*0.3},800,'easeOutElastic').dequeue();
	});
	$(".mbxCorner").click(function(){
		var x = mbxT % 2 == 0 ? 0 : $(window).width()*0.4;
		var y = mbxT % 2 == 0 ? "/images/mbxLeft.png" : "/images/mbxLeft3.png";
		$(".mbxContent").animate({width:x},1200,'easeOutElastic',function(){
			$(".mbx").find("img").attr("src",y);
		});
		mbxT++;
	});
/*---------------------------------info_next-------------------------------------*/	
	$(".info_next").hover(function(){
		$(this).css({background:"#EC054B",color:"#fff"}).find("a").css({color:"#fff"});	
	},function(){
		$(this).css({background:"#e5e5e5",color:"black"}).find("a").css({color:"#EC054B"});	
	})	
})