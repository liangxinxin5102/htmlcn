/*
 * @author liujiaqi@cmcm.com
 * @date 2014-10-15
 */ 
 var UA = window.navigator.userAgent,IsAndroid = (/Android|HTC/i.test(UA)),IsIPad = !IsAndroid && /iPad/i.test(UA),IsIPhone = !IsAndroid && /iPod|iPhone/i.test(UA),IsIOS = IsIPad || IsIPhone,IsphoneIE = !IsAndroid && !IsIOS && (/Windows Phone|IEMobile/i.test(UA));
;(function($, undefined){
    var win=$(window),
        doc=$(document),func=[],pages=[];

    +function(){
        if(K.isMobile){
            LazyLoad=function(page,cfg){
                pages.push(page[0]);
                func.push(cfg.callback);
            };
        }
    }()+function(){
        var pages=$('.cmltpage');
        LazyLoad($('#cmlt1'),{
            range:-300,
            callback:function(){
                $(this).addClass('animated');
                var el=$(this).find('.title, .dl, #iosTips, #playVideo');
                setTimeout(function(){
                    el.css('display','block');
                },1000);
                setTimeout(function(){
                    /* var banner=$('#cmlt1 .banner').css(K.transition,'right 500ms ease'),*/
                    var banner=$('#cmlt1 .banner').css({display:'none'}),
                        w=banner.width(),isShow;
                    win.on('resize scroll',function(){
                        var top=win.scrollTop();
                        if(isShow&&top>10){
                            banner[K.transition?'css':'animate']({'right':'-'+w+'px'});
                            isShow=false;
                        }else if(!isShow && top<10){
                            banner[K.transition?'css':'animate']({'right':0});
                            isShow=true;
                        }
                    }).resize();
                },1500);
            }
        });

        LazyLoad($('#cmlt2'),{
            range:-300,
            callback:function(){
                $(this).addClass('animated');
                var dl=$(this).find('dl'),
                    pgy=$(this).find('.pgylite');
                setTimeout(function(){
                    dl.eq(0).show();
                },300);
                setTimeout(function(){
                    dl.eq(1).show();
                },600);
                if(K.animation){
                    pgy.css('opacity',0);
                }
                pgy.each(function(i,p){
                    i+=2;
                    $(p).css(K.animation,'pgyAni 5s linear infinite '+i+'s');                    
                }).show();
            }
        });

        LazyLoad($('#cmlt3'),{
            range:-300,
            callback:function(){
                $(this).addClass('animated');
                var lis=$(this).find('li');
				if (K.isMobile) {
					lis.css(K.transform,'perspective(0) rotateY(0)').css(K.transition,K.uncamelCase(K.transform)+' 600ms ease').each(function(i,p){
						setTimeout(function(){
							$(p).fadeIn().css(K.transform,'perspective(0) rotateY(0)');
						},i*300);
					});
				} else {
					lis.css(K.transform,'perspective(900px) rotateY(-70deg)').css(K.transition,K.uncamelCase(K.transform)+' 600ms ease').each(function(i,p){
						setTimeout(function(){
							$(p).fadeIn().css(K.transform,'perspective(900px) rotateY(0)');
						},i*300);
					});
				}
                if(K.supports.touch){
                    lis.tap(function(){
                        $(this).toggleClass('hover');
                    });
                }else{
                    lis.hover(function(){
                        $(this).addClass('hover');
                    },function(){
                        $(this).removeClass('hover');
                    });
                }
                lis.find('.box div').css(K.transition,K.uncamelCase(K.transform)+' 400ms ease, opacity 400ms ease');

                
                if(win.width()<800){
                    var nav=$('<div class="nav"><i class="active"></i><i></i><i></i></div>').appendTo($(this).find('.main')).find('i').click(function(){
                            active=$(this).index();
                            ul.css(K.transform,'translateX(-'+active+'00%)');
                            nav.removeClass('active').eq(active).addClass('active');
                        }),
                        ul=lis.parent().css(K.transition,K.uncamelCase(K.transform)+' 400ms ease'),
                        active=0,x,y,move;
                    ul.on({
                        touchstart:function(ev){
                            var touches=ev.originalEvent.changedTouches;
                            x=touches.item(0).pageX;
                            y=touches.item(0).pageY;
                        },
                        touchmove:function(ev){
                            var touches=ev.originalEvent.changedTouches,
                                _x=touches.item(0).pageX,
                                _y=touches.item(0).pageY;
                            if(move==null && (x!=_x||y!=_y)){
                                move=Math.abs(_x-x)>Math.abs(_y-y);
                            }
                            if(move){
                                return false;
                            }
                        },
                        'touchend touchcancel':function(ev){
                            var touches=ev.originalEvent.changedTouches;
                            if(move){
                                var dir=touches.item(0).pageX-x;
                                if(dir>0){
                                    active-=1;
                                }else{
                                    active+=1;
                                }
                                active=Math.max(0,Math.min(2,active));
                                ul.css(K.transform,'translateX(-'+active+'00%)');
                                nav.removeClass('active').eq(active).addClass('active');
                            }
                            move=null;
                        }
                    });

                }
            }
        });

        LazyLoad($('#cmlt4'),{
            range:-300,
            callback:function(){
                $(this).addClass('animated');
                var dl=$(this).find('dl');
                setTimeout(function(){
                    dl.eq(0).show();
                },800);
                setTimeout(function(){
                    dl.eq(1).show();
                },1000);
            }
        });

    }()+function(){
        if(K.isMobile && $('.CMLITE').length > 0){
            var current,
                sliding,
                slides=$('.cmltpage'),
                length=pages.length,
                getPrevIndex=function(index){
                    return Math.max(0,index);
                },
                getNextIndex=function(index){
                    return Math.min(length-1,index);
                },
                slide=function(index){
                    var page,_page,
                        cb=function(){
                            if(!slides[index].inted){
                                func[index].call(slides[index]);
                                slides[index].inted=true;
                            }
                            sliding=false;
                        }
                    index=Math.min(length-1,Math.max(0,index));
                    if(index<current){
                        page=slides.eq(index);
                        _page=slides.eq(current);
                        if(page.is(':hidden')){
                            page.css(K.transform,'translate(0,-100%)').css('z-index',5).show();
                        }
                        setTimeout(function(){
                            page.one(K.transitionend,function(){
                                page.css(K.transition,K.cssVendor+'transform 0').css('z-index','auto');
                                _page.css(K.transition,K.cssVendor+'transform 0').hide();
                                cb();
                            }).css(K.transform,'translate(0,0)');
                            _page.css(K.transform,'perspective(500px) rotateX(-20deg)');
                        },10);
                    }else{
                        page=slides.eq(current).css('z-index',5);
                        _page=slides.eq(index);
                        if(_page.is(':hidden')){
                            _page.show();
                        }
                        var _c=current;
                        setTimeout(function(){
                            page.one(K.transitionend,function(){
                                page.css(K.transition,K.cssVendor+'transform 0').css(K.transform,'translate(0,0)').css('z-index','auto');
                                _page.css(K.transition,K.cssVendor+'transform 0');
                                if(index!=_c){
                                    page.hide();
                                }
                                cb();
                            }).css(K.transform,'translate(0,-100%)');
                            _page.css(K.transform,'perspective(500px) rotateX(0)');
                        },10);
                    }
                    sliding=true;
                    if(current==null)cb();
                    else if(page.length && page.position().top==0){
                        sliding=false;
                    }else{
                        page.css(K.transition,K.cssVendor+'transform 600ms');
                        _page.css(K.transition,K.cssVendor+'transform 600ms');
                    }
                    
                    nav.removeClass('active').eq(index).addClass('active');

                    current=index;
                },
                fixEv=function(ev){
                    if(ev.originalEvent.touches && ev.originalEvent.touches.length){
                        ev.pos={x:ev.originalEvent.touches.item(0).pageX,y:ev.originalEvent.touches.item(0).pageY};
                    }
                },stime,sPos,mPos,moved,elem,height=win.height()-91,offset;

            var nav=$('<div class="pageNav">'+$(pages).on('touchstart',function(e){
                if(!sliding){
                    fixEv(e);
                    elem=this;
                    sPos=e.pos;
                    stime=new Date();
                }
            }).map(function(){
                return '<i></i>';
            }).get().join('')+'</div>').appendTo('body').children();


            $(document).on({
                'touchmove':function(e){
                    fixEv(e);
                    mPos=e.pos;
                    if(elem && (mPos.y!=sPos.y || moved)){
                        offset=mPos.y-sPos.y;
                        if(offset>0){
                            if(current>0){
                                moved=true;
                                slides[current-1].style[K.transform]='translate(0,-'+(height-offset)+'px)';
                                slides[current-1].style.zIndex=5;
                                slides[current-1].style.display='block';
                                if(slides[current+1]){
                                    slides[current+1].style.display='none';
                                    slides[current+1].style[K.transform]='translate(0,0)';
                                }
                                elem.style.zIndex='auto';
                                elem.style[K.transform]='translate(0,0) perspective(500px) rotateX('+(1-Math.max(1,offset*2/height))*20+'deg)';
                            }
                        }else{
                            if(current<length-1){
                                moved=true;
                                elem.style[K.transform]='translate(0,'+offset+'px)';
                                elem.style.zIndex=5;
                                if(slides[current-1]){
                                    slides[current-1].style[K.transform]='translate(0,0)';
                                    slides[current-1].style.zIndex='auto';
                                    slides[current-1].style.display='none';
                                }
                                slides[current+1].style.display='block';
                                slides[current+1].style[K.transform]='perspective(500px) rotateX('+(-1+Math.min(1,-offset*2/height))*20+'deg)';
                            }
                        }   

                        return false;  
                    }
                },
                'touchend touchcancel':function(e){
                    if(moved){
                        if(offset==0){
                            sliding=false;
                        }else if(new Date-stime>500 && Math.abs(offset)<height/3){
                            var c=current;
                            if(offset>0){
                                current--;
                            }else{
                                current++;
                            }
                            slide(c);
                        }else if(offset>0){
                            slide(current-1);
                        }else{
                            slide(current+1);
                        }
                        elem=offset=moved=null;
                        return false;
                    }
                }
            });
            slide(0);
			
        }
    }();

})(jQuery);
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
;(function($, undefined){
    var downCode = '<a class="log-down" stat="log-down-btn" href="http://bj.download.ijinshan.com/clean_master/cleanmaster-release-cn.apk">下载</a>',
        logContent = $('.log_content'),
        rFunctionBar = $('#function-bar'),
        homeDowna = $('#homeDown'),
        wxOpenb = $('#wxTispb'),
        languageMenu = $('.language-menu'),
        fbBtn = rFunctionBar.find('a'),
        gCode = rFunctionBar.find('.code-gwrap'),
        dCode = rFunctionBar.find('.code-dwrap');
    if(getQueryString('f')=='100031'){
        downCode = '<a class="log-down" stat="log-down-btn" href="http://bj.download.ijinshan.com/clean_master/cleanmaster100031.apk">下载</a>'
        $('#homeDown').attr('href', 'http://bj.download.ijinshan.com/clean_master/cleanmaster100031.apk');
    }
    if(getQueryString('f')=='2010002301'){
        downCode = '<a class="log-down" stat="log-down-btn" href="http://dl.cm.ksmobile.com/static/res/6b/a6/CleanMaster_2010002301_0_1418373505.apk">下载</a>'
        $('#homeDown').attr('href', 'http://dl.cm.ksmobile.com/static/res/6b/a6/CleanMaster_2010002301_0_1418373505.apk');
    }
    if(K.isMobile){
        rFunctionBar.hide();
        $('#pgyy').attr('src','images/cmlite/t3_white.png');
    }
    if(IsIOS || IsphoneIE){
        homeDowna.attr('href', 'javascript:;');
        homeDowna.addClass('isIoss');
        $('#iosTips').html('*请在 Android 手机或在电脑上下载');
    }
    if(logContent || typeof(logContent) != 'undefined'){
        logContent.eq(0).append(downCode);
        var logDown = $('.log-down');
        var logContentHeight = logContent.outerHeight();
        logDown.css({ height: logContentHeight });
        logDown.hover(function(){
            $(this).addClass('logdhover');
        },function(){
            $(this).removeClass('logdhover');
        });
		logDown.click(function() {
            var f = (getQueryString('f') ? '-' + getQueryString('f') : '');
            try {
                _hmt.push(['_trackEvent','log-down-btn', 'click', 'log-btn-down' + f]);
            } catch (e) {}
		});
    }
    homeDowna.click(function(){
        var ua = navigator.userAgent.toLowerCase(),
            statData = $(this).attr('stat'),
			f = (getQueryString('f') ? '-' + getQueryString('f') : '');
        if(IsAndroid){
            if(ua.match(/MicroMessenger/i)=="micromessenger"){ 
                wxOpenb.show();
            }
        }
        try {
            _hmt.push(['_trackEvent','home-down', 'click', 'home-btn-down' + f]);
        } catch (e) {}
    });
    wxOpenb.click(function(event) {
        $(this).hide();
    });
    fbBtn.hover(function(){
        var _this = $(this);
        if(!_this.hasClass('fb-dcode')){
            dCode.hide();
            rFunctionBar.find('.fb-dcode').removeClass('away');
        }
        if(_this.hasClass('fb-wx')){
            gCode.show();
        }
        if(_this.hasClass('fb-dcode')){
            dCode.show();
        }
    },function(){
        var _this = $(this);
        if(_this.hasClass('fb-wx')){
            gCode.hide();
        }
        if(_this.hasClass('fb-dcode')){
            dCode.hide();
        }
    });
    languageMenu.hover(function(){
        $(this).addClass('languageAnition');
    },function(){
        $(this).removeClass('languageAnition');
    });
    /* 视频 */ 
    var iframeUrl = '<iframe height="100%" width="100%" src="http://player.youku.com/embed/XODQxMzc4MDgw" frameborder="0" allowfullscreen></iframe>', videoMain = $('.video-main'), videoWrap = $('.video-wrap'), playVideo = $('#playVideo'), closeVideo = $('.close-btn');
    playVideo.click(function(){
        $('body,html').css({
            overflow: 'hidden'
        });
        videoWrap.show().css({
            height: $(window).height()+'px'
        });
        videoMain.html(iframeUrl);
    });
    closeVideo.click(function(){
        $('body,html').css({
            overflow: 'visible'
        });
        videoWrap.hide().css({
            height: '0px'
        });
        videoMain.html('');
    });
})(jQuery);

