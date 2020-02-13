// JavaScript Document

$(function(){
	$(".nav ul li:has(div)").hover(function(){
		$(this).children("div").stop(true,true).slideDown(200)
		},function(){
		$(this).children("div").stop(true,true).slideUp(200)
		})
		
})

$(function (){
	$(".nav ul li").each(function(index){//each变例，每一个a标签
		$(this).mousemove(function(){//鼠标滑过a的时候式
			$(this).addClass("hover")//给对应的a添加样式hover
		})
		$(this).mouseout(function(){//鼠标滑过a的时候式
			$(".nav ul li").removeClass("hover")//先删除所有的a的样式hover
		})
	})
})

function fast()
{
   	document.getElementById('fast_pop').style.right="0px";
}
function fast_hid()
{
   	document.getElementById('fast_pop').style.right="-151px";
}
function fast_none()
{
   	document.getElementById('fast_pop').style.display="none";
}

