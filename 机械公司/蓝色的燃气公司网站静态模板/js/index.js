// JavaScript Document
//无缝滚动
var leng=$('.main4b_ ul li').length;
var ulW=313*leng;
$('.main4b_ ul').css({'width':ulW+'px'});
var i=0;
var tt;
function autoMove(){
	tt=setInterval(function(){
		$('.main4b_ ul').animate({marginLeft:'-313px'},function(){
			$(this).css({'margin-left':'0'}).find('li:first').appendTo('.main4b_ ul');	
		})	
	},2000)	
}
autoMove();
$('.main4b').hover(function(){
	//
	clearInterval(tt);
},function(){
	autoMove();
})
$('.box a.right').click(function(){
		$('.main4b_ ul').animate({marginLeft:'-313px'},function(){
			$(this).css({'margin-left':'0'}).find('li:first').appendTo('.main4b_ ul');	
		})		
})
$('.box a.left').click(function(){
	$('.main4b_ ul').css({'margin-left':'-313px'}).find('li:last').prependTo('.main4b_ ul');
	$('.main4b_ ul').animate({marginLeft:'0'});
})

//文本框获得焦点事件
$('.bottom_l form input').focus(function(){
	var searchs=$('.bottom_l form input').val(); 
	if(searchs=='请输入关键字'){
		$(this).val('');
	}
})
//文本框失去焦点
$('.bottom_l form input').blur(function(){
	var searchs=$('.bottom_l form input').val();
	if(searchs==''){
		$(this).val('请输入关键字');
	}
})

/*轮播图*/
//隐藏第一张以外的图片
$('.banner_box ul li:gt(0)').hide();
var n=0;
var len=$('.banner_box ul li').length;  //获取的是li的长度 数量
var t;
function play(){
	//alert(n)
	$('.banner_box ul li').eq(n).show().siblings().hide();
		//给当前的span增加on样式，移除
	$('.white span').eq(n).addClass('on').siblings().removeClass('on');
}
function autoPlay(){
	//自动播放
	t=setInterval(function(){
		//alert(1)	
		n++;
		if(n>=len){
			n=0;
		}
		play();
	},2000)
}
//alert(len)
autoPlay(); //调用自动播放函数

//鼠标经过banner停止播放，移开继续播放
$('.banner_box').hover(function(){
	clearInterval(t)
},function(){
	autoPlay();
})
//点击数字显示相应的图片
$('.white span').each(function(index) {
	//alert(index)
	$(this).click(function(){
		//alert(index)	
		n=index;
		play();
	})
});
	