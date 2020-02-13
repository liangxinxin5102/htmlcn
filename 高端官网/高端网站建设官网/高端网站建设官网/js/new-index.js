/*nav*/
$(function(){
	
	$(".navTag a").css({backgroundPosition: "right 0"}).mouseover(function(){
		$(this).stop().animate({
			backgroundPosition:"(right -65px)"
		},{duration:200})
	}).mouseout(function(){
		$(this).stop().animate({
			backgroundPosition:"(right 0)"
		},{duration:200})
	})
	$(".navTag a span").css({backgroundPosition:"left 0"}).mouseover(function(){
		$(this).stop().animate({
			backgroundPosition:"(0 -65px)"
		},{duration:200})
	}).mouseout(function(){
		$(this).stop().animate({
			backgroundPosition:"(left 0)"
		},{duration:200})
	})
	
});



(function($) {
	$.extend($.fx.step,{
	    backgroundPosition: function(fx) {
            if (fx.state === 0 && typeof fx.end == 'string') {
                var start = $.curCSS(fx.elem,'backgroundPosition');
                start = toArray(start);
                fx.start = [start[0],start[2]];
                var end = toArray(fx.end);
                fx.end = [end[0],end[2]];
                fx.unit = [end[1],end[3]];
			}
            var nowPosX = [];
            nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
            nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];
            fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];

           function toArray(strg){
               strg = strg.replace(/left|top/g,'0px');
               strg = strg.replace(/right|bottom/g,'100%');
               strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
               var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
               return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
           }
        }
	});
})(jQuery);

/*nav*/


/*轮番图库*/
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});



 (function($){
	$f = window.$f || {
        is: function(A, _) {
            var $ = Object.prototype.toString.call(_).slice(8, -1).toLowerCase();
            return _ !== undefined && _ !== null && $ === A.toLowerCase()
        },
		sizeOf:function(A){
			if(this.is('array',A)||this.is('string',A)){
				return A.length;
			}else if(this.is('object',A)){
				var _ = 0;
				for(var i in A){_++;}
				return _;
			}else{
				return 0;
			}
		},
		create:function(c,p){
			var _ = this;
			if(_.is("function",c))return new c(p);
		},
		extend:function(a,b){
			return $.extend(a,b);
		}
	};
	//1.slide 
	$f.slide = function(_){
		var options = {
			parent:'body',
			target:'',
			nav:'.nav',
			current:'current',
			start:0,
			auto:false,
			dir:1,
			time:3000,
			duration:1000,
			easing:'swing'
		};
		this.options = {};
		this.init(options,_);
		//this.render();
	};
	$f.slide.prototype = {
		init:function(_a,_b){
			var _ = this,__ = _.options = $f.extend(_a,_b);
			!!__.target&&(_.par = $(__.parent),_.tar = $(__.target,__.parent),_.nav = $(__.nav,__.parent))&&_.render();
		},
		render:function(){
			var _ = this,__ = _.options;
			_.tar.hide().eq(__.start).show().addClass(__.current);
			_.nav.bind('click',function(e,f){
				var _self = this;
				if(!_.CLICK&&!$(_self).hasClass(__.current)){
					var _f = _.nav.index(_.nav.filter('.'+__.current)),_t = _.nav.index(_self);
					_.slideHandler(_f,_t,f);
				}
			}).removeClass(__.current).eq(__.start).addClass(__.current);
			__.auto&&_.timerHandler();
		},
		slideHandler:function(f,t,flag,c){
			var _ = this,__ = _.options;_.CLICK = true ;
			_.nav.eq(f).removeClass(__.current);
			_.nav.eq(t).addClass(__.current);
			_.tar.eq(t).stop(true,false).addClass(__.current).css({"display":"block","left":!!flag?(f>t?"100%":"-100%"):(f>t?"-100%":"100%"),"z-index":1}).animate({left:"0%"},__.duration,__.easing,c);
			_.tar.eq(t).trigger("slideIn");
			_.tar.eq(f).trigger("slideOut");
			if(f<t&&!flag){
				_.tar.eq(t).trigger("slideInPos");
				_.tar.eq(f).trigger("slideOutPos")
			}else{
				_.tar.eq(t).trigger("slideInNeg");
				_.tar.eq(f).trigger("slideOutNeg")
			}

			_.tar.eq(f).stop(true,false).removeClass(__.current).css({"display":"block","z-index":0}).animate({left:!!flag?(f>t?"-100%":"100%"):(f>t?"100%":"-100%")},__.duration,__.easing,function(){
				$(this).hide().trigger("slideOutEnd");
				_.tar.eq(t).trigger("slideInEnd");
				_.CLICK = false;
			});
			_.tar.eq(f).removeClass(__.current);_.tar.eq(t).addClass(__.current);
		},
		slideLeftRightHanler:function(dir){
			var _ = this,__ = _.options;
			var _s = $(_.nav).size(),_i = dir==0?-1:1,_f = $(_.nav).index($(_.nav).filter('.'+__.current)),_t = _f+_i<0?_s-1:_f+_i>=_s?0:_f+_i;
			$(_.nav).eq(_t).trigger("click",(_f+_i<0||_f+_i>=_s)?true:false);
		},
		timerHandler:function(){
			var _ = this,__ = _.options,_timerStop=function(){
				_.timmer & clearTimeout(_.timmer);
			},_timerStart=function(_t){
				_timerStop();
				_.timmer = setTimeout(_timer,_t);
			},_timer=function(){
				_.slideLeftRightHanler(__.dir);
				_timerStart(__.time+__.duration);
			};
			_.par.bind("mouseenter",function(){
				_timerStop();
			}).bind("mouseleave",function(){
				_timerStart(__.time);
			}).trigger("mouseleave");
		}
	};
	
	//2.mask
	$f.mask = function(tar,_){
		if(!$(tar)[0])return;
		var isIE6 = navigator.userAgent.toLowerCase().indexOf("msie 6")>-1;
		var self=this,options = {
			closeElement : '',
			position : 'static',
			align:'center',
			valign:'middle',
			zIndex:1000,
			maskClose : true
		},$mask = $('<div class="f_mask"></div>'),_pos=['fixed','absolute','static'];
		options = $.extend(options,_);
		$mask.attr("id","f_mask_"+(!$f.mask.id?$f.mask.id=0:$f.mask.id++));
		$mask.css({
			width:document.body.scrollWidth,
			height:document.body.scrollHeight,
			position:'absolute',
			backgroundColor:'#000',
			opacity:0.5,
			left:0,top:0,
			zIndex:options.zIndex
		}).appendTo('body');
		!$f.mask.list&&($f.mask.list=[],$(window).bind("resize",function(){
			$('.f_mask').css({width:$('body').width(),
			height:document.body.scrollHeight});
		}));
		$f.mask.list.push(tar);
		switch(options.position){
			case 'fixed':
				$(tar).css({
					position:!!isIE6?'absolute':'fixed',
					left:'50%',top:!!isIE6?$(window).height()/2+$(window).scrollTop():'50%',
					marginLeft:-$(tar).width()/2,marginTop:-$(tar).height()/2,
					'z-index':$f.mask.id+options.zIndex+1
				}).show();
			break;
			case 'absolute':
				$(tar).css({
					position:'absolute',
					left:'50%',top:$(window).height()/2+$(window).scrollTop(),
					marginLeft:-$(tar).width()/2,marginTop:-$(tar).height()/2,
					'z-index':$f.mask.id+options.zIndex+1
				}).show();
			break;
			default:
				$(tar).css({'z-index':$f.mask.id+options.zIndex+1}).show();
			break;
		}
		!!options.closeElement&&$(tar).find(options.closeElement).bind("click",function(){
			self.unmask(tar);
		});
	}
	$f.unmask = function(tar){
		$(tar).hide();
		$('div').remove('.f_mask');
	}
	$f.select = function(tar,_){
		var options = {
			wrapper:'.f_select',
			formInput:'',
			showInput:'.f_select_value',
			optionContainer:'ul',
			option:'li',
			optionVlaue:'',
			optionHoverClass:'hover',
			toggleClass:'open',
			toggle:true,
			index:-1,
			onChange:null,
			context:null
		}
		options = $.extend(options,_);
		$(tar).each(function(index, element) {
			var self = this,_sel;
			$(self).bind('open',function(){
				$(self).addClass('open');
				$(options.optionContainer,self).show();
				!!_sel&&$(_sel).addClass(options.optionHoverClass);
			}).bind('close',function(){
				$(self).removeClass('open');
				$(options.optionContainer,self).hide();
			});
			if(!!options.toggle){
				$(self).hover(function(e){
					$(self).trigger('open');
				},function(e){
					$(self).trigger('close')
				});
			}
			options.opt = options.optionContainer+' '+options.option;
			$(options.optionContainer,self).delegate(options.option,"mouseenter",function(){
				$(options.opt,self).removeClass(options.optionHoverClass);
				$(this).addClass(options.optionHoverClass);
			}).delegate(options.option,"mouseleave",function(){
				$(this).removeClass(options.optionHoverClass);
			}).delegate(options.option,'click',function(){
				$(options.showInput,self).text($(this).text());
				!!options.formInput&&(_temp = $(options.formInput,self).val(),$(options.formInput,self).val(!!options.optionVlaue?$(this).attr(options.optionVlaue):$(this).text()),_temp!=$(options.formInput,self).val()&&!!options.onChange&&(!!options.context?options.onChange.call(options.context):options.onChange.call(self)));
				_sel = this ;
				$(self).trigger('close');
			});
			if(options.index>-1){
				$(options.opt,self).eq(options.index).trigger('click');
			}
		});
	}
}).call(window,jQuery)




/*轮番图库*/




				/**
 * 婊戝姩鍏敤 js
 * @authors Your Name (you@example.org)
 * @date    2014-08-20 15:14:28
 * @version $Id$
 */
var Slide = Object();

Slide.SlideMovie = function(obj)
{
    var l = parseInt($(this.SlideParams.l_map).css(this.SlideParams.l_path));
    // alert(this.SlideParams.l_path);
    //闃叉瀹㈡埛杩炵画蹇€熺偣鍑�
    if(l%this.SlideParams.l_width != 0) return;
    //鍒ゆ柇褰撳墠鏄惁鏄摢涓€涓寜閽�
    if(this.SlideParams.reg.test(obj.attr("class")))
    {
        if(Math.abs((this.SlideParams.l_totals - this.SlideParams.l_nums)*this.SlideParams.l_width) == Math.abs(l) || this.SlideParams.l_totals <= this.SlideParams.l_nums){
            return ;
        } 
        this.SlideParams.l_now = l - this.SlideParams.l_width;
    }else{
        if(l == 0) return;
        this.SlideParams.l_now = l + this.SlideParams.l_width;
    }
    // var path = this.SlideParams.l_path;
    if(this.SlideParams.l_path == 'top'){
        $(this.SlideParams.l_map).animate({top:this.SlideParams.l_now+'px'},'normal');
    }else if(this.SlideParams.l_path == 'left'){
        $(this.SlideParams.l_map).animate({left:this.SlideParams.l_now+'px'},'normal');
    }
}


					$(function(){
					jQuery("#slideBox11").slide({mainCell:".bd ul",effect:"left"});
					});


