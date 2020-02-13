$(function(){
	$(".pics img").hover(function(){
		$(this).css("margin-top","-30px");
	},function(){
		$(this).css("margin-top","0px");
	});
	
	$(".pics_pic img").hover(function(){
		$(this).css("margin-top","-30px");
	},function(){
		$(this).css("margin-top","0px");
	});
//	$(".pic_text .quyudingxiang").hover(function(){
//		$(this).css("background-color","#67B168");
//		$(this).children().css("color","#FFFFFF");
//	},function(){
//		$(this).css("background-color","#F8F8F8");
//		$(this).children(".pic_text_title").css("color","rgb(51,51,51)")
//		$(this).children(".pic_text_text").css("color","rgb(102,102,102)");
//	});
	
	$(".feiyong").hover(function(){
		$(this).animate({
			width:"200px"
		},1000);
	},function(){
		$(this).stop().animate({
			width:"151px"
		},0);
	});
	
	$(".tupiaos ul li").hover(function(){
		$(this).children("img").animate({
			left:'-20px'
		},200);
		$(this).children("img").animate({
			left:'20px'
		},200);
		$(this).children("img").animate({
			left:'-10px'
		},200);
		$(this).children("img").animate({
			left:'10px'
		},200);
		$(this).children("img").animate({
			left:'0px'
		},200);
	},function(){
		
		$(this).children("img").stop().animate({
			left:'0px'
		},0);
	});
	
	$(".pic_text .xiaoguozhanshi .zhezhao").hover(function(){
		$(this).css('opacity','0');
	},function(){
		$(this).css('opacity','0.3');
	});
	

	function getTop(){
        var top = $(document).scrollTop();
        if($(document).scrollTop()>180){
            $(".title").animate({
				left: 0, opacity: 'show'
			}, 800);
        }
        setTimeout(getTop);
    }
    getTop();
})