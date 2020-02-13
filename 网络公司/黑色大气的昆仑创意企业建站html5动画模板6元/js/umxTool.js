/**
 * Created by UMEIXUN.COM on 14-5-18.
 */
$(document).ready(function() {
    //menu
    $("#menu a").hover(function() {
        $(this).find("p").stop().animate({
            marginTop: "-20"
        }, 200);
    },function() {
        $(this).find("p").stop().animate({
            marginTop: "0"
        }, 200);
        if( $(this).hasClass("current") ){
            $(this).find("p").stop().animate({
                marginTop: "-20"
            }, 200);
        }
    });
});
(function($){
    $.fn.umxCaseSlider = function (options){
        This = $(this);
        var defaults = {
            mainCell: '.case-list li',
            vis: 4,
            next:'.next',
            prev: '.preve'
        };
        var opts = $.extend({},defaults, options);
        var moveEle = This.find(opts.mainCell);
        var vis = opts.vis;
        var visLen = 0;
        var oNext = This.find(opts.next);
        console.log(oNext);
        var oPrev = This.find(opts.prev);
        var height = 295;
        var len = moveEle.length;
        var leftArr = [];
        var arrNum = 0;
        var num = 0;
        var bStop = false;
        var timerNum = 0;
        var timerNumLen = 4;
        var timer = null;
        //给移动元素的父级中相对定位
        moveEle.parent().css({position: 'relative', height: height});

        // 存位置
        for(var i = 0;i<vis;i++){
            leftArr.push(i*(moveEle.width()+parseInt(moveEle.css("margin-right"))));
        }

        //将要动要元素转成绝对定拉
        moveEle.css({position: 'absolute', left: -300, top: -300, opacity: 0});

        timer = setInterval(function(){
            timerNum++;
            moveEle.eq(num).animate({opacity: 1, top:0,left:leftArr[arrNum]},{queue:true,duration:1000, easing: 'easeOutBounce'});

            arrNum++;
            if(timerNum >= timerNumLen){
                clearInterval(timer);
                arrNum = 0;
                timerNum = 0;
            }
            num++;
        },200);

        oNext.on('click', function(){
            if(bStop){ return false;}
            bStop = true;
            moveEle.each(function(){
                if(Math.abs(Math.floor($(this).css('left'))) != 300){
                    $(this).animate({ opacity: 0, left: -300, top: -300},{
                        queue:true,
                        duration:1000,
                        easing: 'easeInBack'
                    })
                }
            });
            setTimeout(function(){
                moveEle.css({opacity:0})
                timer = setInterval(function(){
                    timerNum++;
                    moveEle.eq(num).animate({opacity: 1, top:0,left:leftArr[arrNum]},{queue:true,duration:1000, easing: 'easeInOutBack'});
                    num++;
                    arrNum++;
                    if(timerNum >= timerNumLen){

                        clearInterval(timer);
                        bStop = false;
                        arrNum  = 0;
                        timerNum = 0;
                        if(num>=len-1){
                            num = 0;
                        }
                    }
                    console.log(num)

                },200);
            },1000);
        });

        oPrev.on('click', function(){
            if(bStop){ return false;}
            bStop = true;
            moveEle.each(function(){
                if(parseInt($(this).css('left')) != -300){
                    $(this).animate({ opacity: 0, left: -300, top: -300},{
                        queue:true,
                        duration:1000,
                        easing: 'easeInBack'
                    })
                }
            });
            setTimeout(function(){
                moveEle.css({opacity:0})
                timer = setInterval(function(){
                    timerNum++;
                    num--;
                    moveEle.eq(num).animate({opacity: 1, top:0,left:leftArr[arrNum]},{queue:true,duration:1000, easing: 'easeInOutBack'});

                    arrNum++

                    if(timerNum >= timerNumLen){
                        clearInterval(timer)
                        bStop = false;
                        timerNum = 0;
                        arrNum = 0;
                        if(num<=0)
                        {
                            num = len;
                        }
                    }

                },200);

            },1000);
        });

    };
})(jQuery);

(function($){
    $.fn.scrollSlider = function(options){
        var defaults = {

        };

        var opts = $.extend({},defaults, options);

        var This = $(this);
        var oMoveMod = This.find('.move-mod');
        var aMoveEle = oMoveMod.find('li');
        var width = aMoveEle.outerWidth()+parseInt(aMoveEle.css("marginRight"));
        var len = aMoveEle.length;
        var next = This.find('.next');
        var prev = This.find('.preve')
        var timer = null;
        var leftArr = [];
        var bStop = false;
        var j = 0;

        aMoveEle.each(function(){
            $(this).css({ position: 'absolute', top: 0, left: $(this).index()*width});
            leftArr.push($(this).index()*width);
        })

        next.on('click', function(){
            if(bStop){ return false;};
            bStop = true;
            aMoveEle = oMoveMod.find('li');
            j = 0;
            aMoveEle.each(function(){
                $(this).css({ position: 'absolute', top: 0, left: leftArr[$(this).index()]});
            })
            timer = setInterval(function(){

                aMoveEle.eq(j).stop().animate({
                    left: (j*width)-width
                },{queue:true, duration:500,easing: 'easeInOutBack'});
                j++;
                if(j>=len-1){
                    clearInterval(timer);
                    aMoveEle.eq(len-1).after(aMoveEle.eq(0));
                    j = 0;
                    setTimeout(function(){
                        bStop = false;
                    },200)
                };
                console.log(j);
            },100);
        });

        prev.on('click', function(){
            if(bStop){ return false;};
            bStop = true;
            aMoveEle = oMoveMod.find('li');
            aMoveEle.eq(0).before(aMoveEle.eq(len-1));
            aMoveEle = oMoveMod.find('li');
            j = len-1;
            aMoveEle.each(function(){
                $(this).css({ position: 'absolute', top: 0, left: parseInt(leftArr[$(this).index()])-width});
            })
            timer = setInterval(function(){

                aMoveEle.eq(j).stop().animate({
                    left: leftArr[j]
                },{queue:true, duration:500, easing: 'easeInOutCirc'});
                j--;
                if(j<0){
                    clearInterval(timer);

                    j = len-1;
                    setTimeout(function(){
                        bStop = false;
                    },200)
                };
                console.log(j);
            },100);
        });

    };
})(jQuery);

function clientShow (obj) {
    var ele = $(obj);
    var top = ele.offset().top;
    var clientHeight = $(window).height();
    var bDown = false;

    if(clientHeight+$(window).scrollTop() > top) {
        bDown = true;
    }else{
        bDown = false;
    }
    return bDown;
};

(function($){
    $.fn.fixedNav = function(){
        var This = $(this);
        $(window).scroll(function(){


            if($(window).scrollTop()>100)
            {
                //This.css({top:'0px'});
                This.stop().animate({top: -30, height:100},150).addClass('head-shadow');
                This.find('.logo img').stop().animate({width: 130},100);
                This.find('.logo').stop().animate({'marginTop': 16},100);
                This.find('#menu ul li a').stop().animate({'paddingTop': '24px'},100);
                $('.mt140').animate({ 'margin-top': 100},150);
            }else if($(window).scrollTop()<100){
                This.find('.logo img').stop().animate({width: 180},100);
                This.find('.logo').stop().animate({'marginTop': 25},100);
                This.find('#menu ul li a').stop().animate({'paddingTop': '44px'},100);
                This.stop().animate({top:0, height:140},150).removeClass('head-shadow');
                $('.mt140').stop().animate({ 'margin-top': 140},150);
            }

        });
    };
})(jQuery);

$(function(){
    

	 //scrollbar
	  $('html').niceScroll({
		scrollspeed: 60,
		mousescrollstep: 45,
		cursorwidth: 8,
		cursorborder:"0",
		cursorcolor: '#ebebeb',
		cursorborderradius: '4px',
		zindex: 1000000,
		autohidemode: true,
		horizrailenabled: false
	  });

})

/* jquery.easing.1.3.js */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('h.j[\'J\']=h.j[\'C\'];h.H(h.j,{D:\'y\',C:9(x,t,b,c,d){6 h.j[h.j.D](x,t,b,c,d)},U:9(x,t,b,c,d){6 c*(t/=d)*t+b},y:9(x,t,b,c,d){6-c*(t/=d)*(t-2)+b},17:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t+b;6-c/2*((--t)*(t-2)-1)+b},12:9(x,t,b,c,d){6 c*(t/=d)*t*t+b},W:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t+1)+b},X:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t+b;6 c/2*((t-=2)*t*t+2)+b},18:9(x,t,b,c,d){6 c*(t/=d)*t*t*t+b},15:9(x,t,b,c,d){6-c*((t=t/d-1)*t*t*t-1)+b},1b:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t+b;6-c/2*((t-=2)*t*t*t-2)+b},Q:9(x,t,b,c,d){6 c*(t/=d)*t*t*t*t+b},I:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t*t*t+1)+b},13:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t*t+b;6 c/2*((t-=2)*t*t*t*t+2)+b},N:9(x,t,b,c,d){6-c*8.B(t/d*(8.g/2))+c+b},M:9(x,t,b,c,d){6 c*8.n(t/d*(8.g/2))+b},L:9(x,t,b,c,d){6-c/2*(8.B(8.g*t/d)-1)+b},O:9(x,t,b,c,d){6(t==0)?b:c*8.i(2,10*(t/d-1))+b},P:9(x,t,b,c,d){6(t==d)?b+c:c*(-8.i(2,-10*t/d)+1)+b},S:9(x,t,b,c,d){e(t==0)6 b;e(t==d)6 b+c;e((t/=d/2)<1)6 c/2*8.i(2,10*(t-1))+b;6 c/2*(-8.i(2,-10*--t)+2)+b},R:9(x,t,b,c,d){6-c*(8.o(1-(t/=d)*t)-1)+b},K:9(x,t,b,c,d){6 c*8.o(1-(t=t/d-1)*t)+b},T:9(x,t,b,c,d){e((t/=d/2)<1)6-c/2*(8.o(1-t*t)-1)+b;6 c/2*(8.o(1-(t-=2)*t)+1)+b},F:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.u(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6-(a*8.i(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b},E:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.u(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6 a*8.i(2,-10*t)*8.n((t*d-s)*(2*8.g)/p)+c+b},G:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d/2)==2)6 b+c;e(!p)p=d*(.3*1.5);e(a<8.u(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);e(t<1)6-.5*(a*8.i(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b;6 a*8.i(2,-10*(t-=1))*8.n((t*d-s)*(2*8.g)/p)*.5+c+b},1a:9(x,t,b,c,d,s){e(s==v)s=1.l;6 c*(t/=d)*t*((s+1)*t-s)+b},19:9(x,t,b,c,d,s){e(s==v)s=1.l;6 c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},14:9(x,t,b,c,d,s){e(s==v)s=1.l;e((t/=d/2)<1)6 c/2*(t*t*(((s*=(1.z))+1)*t-s))+b;6 c/2*((t-=2)*t*(((s*=(1.z))+1)*t+s)+2)+b},A:9(x,t,b,c,d){6 c-h.j.w(x,d-t,0,c,d)+b},w:9(x,t,b,c,d){e((t/=d)<(1/2.k)){6 c*(7.q*t*t)+b}m e(t<(2/2.k)){6 c*(7.q*(t-=(1.5/2.k))*t+.k)+b}m e(t<(2.5/2.k)){6 c*(7.q*(t-=(2.V/2.k))*t+.Y)+b}m{6 c*(7.q*(t-=(2.16/2.k))*t+.11)+b}},Z:9(x,t,b,c,d){e(t<d/2)6 h.j.A(x,t*2,0,c,d)*.5+b;6 h.j.w(x,t*2-d,0,c,d)*.5+c*.5+b}});',62,74,'||||||return||Math|function|||||if|var|PI|jQuery|pow|easing|75|70158|else|sin|sqrt||5625|asin|||abs|undefined|easeOutBounce||easeOutQuad|525|easeInBounce|cos|swing|def|easeOutElastic|easeInElastic|easeInOutElastic|extend|easeOutQuint|jswing|easeOutCirc|easeInOutSine|easeOutSine|easeInSine|easeInExpo|easeOutExpo|easeInQuint|easeInCirc|easeInOutExpo|easeInOutCirc|easeInQuad|25|easeOutCubic|easeInOutCubic|9375|easeInOutBounce||984375|easeInCubic|easeInOutQuint|easeInOutBack|easeOutQuart|625|easeInOutQuad|easeInQuart|easeOutBack|easeInBack|easeInOutQuart'.split('|'),0,{}))
