$(function(){
	$('.merchants ul li').each(function(){
		var e=$(this);
		e.on('mouseenter',function(){
			$(this).addClass("active").siblings().removeClass("active");
		});
	});
	$(window).load(function(){
		var h=$('#banner .item').outerHeight();
		$('#banner .item').css('height',h);
	});
});

+function($){
	'use strict';
	var carousels=function(ele,options){
		this.$element=ele,
		this.defaults={effect:"scroll",auto:"true",interval:5000,space:0,number:1,small:1,middle:1,big:1},
		this.options=$.extend({},this.defaults,options);
	};
	carousels.prototype.number=function(){
		var win=$(window).width();
		var number=this.options.number;
		if(win>760){number=this.options.small;};
		if(win>1000){number=this.options.middle;};
		if(win>1200){number=this.options.big;};
		return number;
	};
	carousels.prototype.list=function(){
		return this.$element.find('.item').length;
	};
	carousels.prototype.height=function(){
		var h=0;
		this.$element.find('.item').each(function(){
			if($(this).outerHeight()>h){h=$(this).outerHeight();}
		});
		return h;
	//	return this.$element.outerHeight();
	};
	carousels.prototype.width=function(){
		return Math.ceil((this.$element.outerWidth()-(this.number()-1)*this.options.space)/this.number());
	};
	carousels.prototype.show=function(){
		var space=this.options.space;
		if(this.number()==1){space=0;};
		var outer=this.$element.outerWidth()+space;
//		this.$element.find('.banner').css({'width':outer*3,'height':this.height(),'left':-outer});
		this.$element.find('.banner').css({'width':outer*3,'left':-outer});
		var items=this.$element.find('.item');
		items.css('width',this.width());
		items.hide();
		for(var i=0;i<this.number();i++){
			items.eq(i).show().css('left',outer+(this.width()+space)*i);
		};
	};
	carousels.prototype.page=function(){
		return Math.ceil(this.list()/this.number())-1;
	};
	carousels.prototype.nomove=function(){
		if(!this.$element.find('.banner').is(":animated")){
			return true;
		}
		else{
			return false;
		};
	};
	carousels.prototype.gonext=function(){
		var that=this;
		var index=$(that.options.triggers).find("li.active").index()+1;
		var page=this.page();
		$(window).resize(function(){
			page=that.page();
		});
		if(index>page){index=0}
		this.scroll(index,2);
	};
	carousels.prototype.pointer=function(){
		if(this.options.triggers!=null){
			var that=this;
			var page=this.page();
			var pointer='<li value="1" class="active"><span>1</span></li>';
			for (var i=1;i<page+1;i++){
				pointer=pointer+' <li value="'+(i+1)+'"><span>'+(i+1)+'</span></li>';
			};
			$(this.options.triggers).html(pointer);
		//	$(this.options.triggers).css("margin-left",-$(this.options.triggers).outerWidth()/2);
			$(this.options.triggers + " li").on('click',function(){
				var index=$(this).index();
				var current=$(that.options.triggers).find("li.active").index();
				if(that.nomove()){
					if(index>current){
						that.scroll(index,2);
					}else if(index<current){
						that.scroll(index,0);
					}else{
						return false;
					};
				};
			});
		};
	};
	carousels.prototype.prev=function(){
		var that=this;
		var page=this.page();
		$(window).resize(function(){
			page=that.page();
		});
		$(this.options.prev).on('click',function(){
			var index=$(that.options.triggers).find("li.active").index();
			if(that.nomove()){
				if(index==0){
					that.scroll(page,0);
				}else{
					$(that.options.triggers).find("li.active").prev("li").trigger("click");
				};
			};
		});
	};
	carousels.prototype.next=function(){
		var that=this;
		var page=this.page();
		$(window).resize(function(){
			page=that.page();
		});
		$(this.options.next).on('click',function(){
			var index=$(that.options.triggers).find("li.active").index();
			if(that.nomove()){
				if(index==page){
					that.scroll(0,2);
				}else{
					$(that.options.triggers).find("li.active").next("li").trigger("click");
				};
			};
		});
	};
	carousels.prototype.scroll=function(page,x){
		$(this.options.triggers).find("li").eq(page).addClass("active").siblings().removeClass("active");
		var outer=this.$element.outerWidth();
		var space=this.options.space;
		var number=this.number();
		var width=this.width();
		var items=this.$element.find('.item');
		if(number==1){space=0;};
		
		if(this.options.effect=="fade"){
			items.fadeOut(1000);
			for(var i=0;i<number;i++){
				items.eq((page)*number+i).css('left',(outer+space)+(width+space)*i).fadeIn(1000);
			};
		}else{
			for(var i=0;i<number;i++){
				items.eq((page)*number+i).show().css('left',(outer+space)*x+(width+space)*i);
			};
			this.$element.find('.banner').animate({"left":-(outer+space)*x+"px"},this.options.scroll,function(){
				items.hide();
				for(var i=0;i<number;i++){
					items.eq((page)*number+i).show().css('left',outer+space+(width+space)*i);
				};
				$(this).css({left:-outer-space});
			});
		};
	};
	carousels.prototype.auto=function(){
		var that=this;
		if(this.options.auto=="true" && this.page()!=0){
			var autoScroll=setInterval(function(){
				that.gonext();
			},that.options.interval);
			var autoPlay=function(){
				autoScroll=setInterval(function(){
					that.gonext();
				},that.options.interval);
			};
			var stopPlay=function(){clearInterval(autoScroll);};
			this.$element.hover(stopPlay,autoPlay);
		};
	};
	carousels.prototype.play=function(){
		var that=this;
		this.show();
		this.pointer();
		this.prev();
		this.next();
		this.auto();
		$(window).resize(function(){
			that.show();
			that.pointer();
		});
	};
	$.fn.carousel=function(options){
		var carousel=new carousels(this, options);
		return carousel.play();
	};
}(jQuery);
