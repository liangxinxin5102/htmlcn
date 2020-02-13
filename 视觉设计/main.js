
$(function(){
    var body=$('body');
    var header = $("#header");
    var navbar = header.find('.navbar-collapse');
    var sider = $('<div id="sider"></div>').appendTo(body);
    navbar.clone().appendTo(sider);
    $("#slider-1").slider_1();
    $("#slider-3").slider_3();

    $("#navbar-toggle").click(function(){
        if(body.hasClass('side-active')){
            body.removeClass('side-active');
        }else{
            body.addClass('side-active');
        }
    });
});




;(function($){
    $.fn.slider_1 = function(options){
        var _self = this;
        var outer = this.find('.slider-list');
        var items = this.find('.slider-item');
        var navbar;
        var auto;
        var zIndex = 10;
        //默认设置
        var defaults = {
            auto:true,          //自动播放
            delay:10000,         //10秒自动切换
            className:'j-slider', //类名
            navbar:true,        //导航栏
            active:0            //默认显示第几张
        };
        $.extend(defaults,options);


        var display = function(index){
            var cur = items.eq(index);
            cur.addClass('active').css({
                'z-index':zIndex++,
                'display':'block'
            });
            setTimeout(function(){
                cur.addClass('fadeIn');
                setTimeout(function(){
                    cur.siblings().removeClass('active fadeIn')
                },1000);
            },100);

            defaults.active = index;

            if(defaults.navbar){
                navbar.find('.slider-nav-item')
                    .eq(index)
                    .addClass('active')
                    .siblings()
                    .removeClass('active');
            }

            //自动播放
            if(defaults.auto){
                autoPlay();
            }

        };
        //生成导航栏
        var buildNav = function(){
            var html = [];
            html.push('<ul class="slider-nav">');
            items.each(function(){
                html.push('<li class="slider-nav-item"></li>');
            });
            html.push('</ul>');
            navbar = $(html.join(' ')).appendTo(_self);
            navbar.find('.slider-nav-item').click(function(){
                display($(this).index());
            });
        };



        var autoPlay = function(){
            clearTimeout(auto);
            auto = setTimeout(function(){
                var next = defaults.active < items.length-1 ? defaults.active+1 : 0;
                display(next);
            },defaults.delay);
        };





        var init = function(){

            _self.addClass('j-slider');

            if(typeof navbar == 'undefined' && defaults.navbar){
                buildNav();
            }


            display(defaults.active);

        };





        init();
    };


    $.fn.slider_3 = function(options){
        var _self = this;
        var outer = this.find('.slider-list');
        var items = this.find('.slider-item');
        var prev = this.find('.prev');
        var next = this.find('.next');
        var navbar;
        var position = {};
        var timer = 0;
        //默认设置
        var defaults = {
            auto:false,          //自动播放
            delay:3000,         //3秒自动切换
            direction:'x',      //横向滚动
            className:'j-slider', //类名
            navbar:true,        //导航栏
            trigger:20,         //触发距离
            active:0            //默认显示第几张
        };
        $.extend(defaults,options);


        var display = function(index){
            if(defaults.direction == 'x'){
                var left = -index*_self.width()/3;
                outer.css({
                    left:left
                });
                defaults.active = index;
            }



            //自动播放
            if(defaults.auto){
                autoPlay();
            }

        };




        var autoPlay = function(){
            clearTimeout(auto);
            auto = setTimeout(function(){
                var next = defaults.active < items.length-1 ? defaults.active+1 : 0;
                display(next);
            },defaults.delay);
        };


        var eventBind = function(){
            prev.click(function(){
                if(defaults.active>0){
                    display(defaults.active-1);
                }
                checkIndex(defaults.active)
            });
            next.click(function(){
                if(defaults.active<items.length-3){
                    display(defaults.active+1);
                }
                checkIndex(defaults.active)
            });

            $(window).on('resize',init);
        };

        var checkIndex = function(index){
            prev.show();
            next.show();
            if(index==0){
                prev.hide();
            }
            if(index==items.length-3 || items.length<3){
                next.hide();
            }

        }


        var init = function(){
            _self.addClass('j-slider');
            var width = _self.width()/3;
            var winWidth = $(window).width();
            if(winWidth >1024){
                outer.width(width*items.length);
                items.width(width);
            }else{
                outer.removeAttr('style');
                items.removeAttr('style');
            }


            display(defaults.active);
        };





        init();
        eventBind();
        checkIndex(0);
    };


})(jQuery);