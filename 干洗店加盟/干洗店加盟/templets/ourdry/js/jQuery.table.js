/*
 *该插件用于幻灯片制作
 *val参数用于判断幻灯片切换效果  val(fade)淡入淡出、val(left)左右滑动
 * 
 * */
;(function($) {
	jQuery.fn.extend({
		'table': function(val) {
			//窗体加载完毕时默认选中第一个圆点
			this.children('ul:last').children('li:first').css('background', '#009d85').siblings().css("background", "rgba(255,255,255,0.7)");
			//得到所有的图片个数
			var SizePage = this.children('ul:first').children('li').size();
			//得到当前图片显示的第几个
			var Page = 0;
			//定义接收定时器的返回值
			var data;
			//得到最后一个ul
			var lastul = this.children('ul:last');
			//得到点击圆点的Ul
			var firstul=this.children('ul:last');
			if (val == "fade") {
				//初始化图片效果
				this.children('ul:first').css('position', 'relative')
				this.children('ul:first').children('li').css('position', 'absolute')
				//窗体加载完毕时只显示第一张图片
				this.children('ul:first').children('li:first').css('opacity', '1').siblings().css('opacity', '0');
				//窗体加载完毕时默认选中第一个圆点
				this.children('ul:last').children('li:first').css('background', '#009d85').siblings().css("background", "rgba(255,255,255,0.7)");
				//点击执行图片切换效果
				this.children('ul:last').children('li').click(function() {
						//获取当前点击的索引
						var index = jQuery(this).index();
						//给当前图片位置赋值
						Page = index;
						//切换图片效果
						jQuery(this).parent().siblings().children().eq(index)
							.animate({
								'opacity': '1'
							}, 500).siblings().animate({
								'opacity': '0'
							})
							//改变当前点击圆点的样式
						jQuery(this).css('background', '#009D85').siblings().css("background", "rgba(255,255,255,0.7)");
					})
				data = window.setInterval(function(){
					var contpage = (Page+1)%SizePage;
					lastul.children().eq(contpage).click();
				},3000);
				this.hover(function(){
					window.clearInterval(data);
				},function(){
					data = window.setInterval(function(){
						var contpage = (Page+1)%SizePage;
						lastul.children().eq(contpage).click();
					},3000);
				})

			} else if (val == 'left') {
				//得到屏幕分辨率
				var imgWidth = window.screen.width;
				//初始化图片摆放效果
				this.css('overflow', 'hidden');
				this.children('ul:first').css({
						'width': imgWidth*SizePage,
						'position': 'relative'
					});
				this.children('ul:first').children('li').css({
						'float':'left',
						'width':imgWidth+'px'
					});
				//点击执行图片切换效果
				this.children('ul:last').children('li').click(function() {
						//获取当前点击的索引
						var index = jQuery(this).index();
						//给当前图片位置赋值
						Page = index;
						var scrollLeft = index * imgWidth;
						console.log(imgWidth+"     "+scrollLeft);
						//切换图片效果
						jQuery(this).parent().siblings()
							.animate({
								'left': '-' + scrollLeft + 'px'
							}, 500);

						//改变当前点击圆点的样式
						jQuery(this)
							.css('background', 'rgba(255,255,255,1)')
							.siblings()
							.css("background", "rgba(255,255,255,0.3)");
					});
					data = window.setInterval(function(){
					var contpage = (Page+1)%SizePage;
					lastul.children().eq(contpage).click();
					},3000);
					this.hover(function(){
						window.clearInterval(data);
					},function(){
						data = window.setInterval(function(){
							var contpage = (Page+1)%SizePage;
							lastul.children().eq(contpage).click();
						},3000);
					})
					
				}
		}
	});
})(jQuery)