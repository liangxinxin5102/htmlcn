// JavaScript Document
$(function(){


				$('.show_list1,.show_list4,.show_list3,.con2_mid,.con3_left').hover(function(){
					$(this).find('.shimg').addClass('fd')
					$(this).find('.pic_bg').stop(true).animate({"opacity":"0"},500);
					},function(){
						$(this).find('.shimg').removeClass('fd')
						$(this).find('.pic_bg').stop(true).animate({"opacity":"0.6"},500);
						})
			
			
			
			
			
var num1=0;
var num4=0;
var num3=0;

$('.show_list1').width($('.show_list1_con').width()/8);
var li1=$('.show_list1');
var lisize1=$('.show_list1').size();
var prev1=$('.show1_prev');
var next1=$('.show1_next');
var liw1=(li1.width());
var box1=$('.show_list1_box');
var boxw1=liw1*lisize1;
$('.show_list1_box').width(boxw1);
prev1.click(function(){
    jian1();
})
next1.click(function(){
    add1();
})
function add1(){
	if(num1>lisize1/2-2){
		num1=0;
		}else{
			num1++;
			}
    box1.stop(true,true).animate({marginLeft:-liw1},500,function(){
        $('.show_list1:first-child').appendTo(this);
        $(this).css({marginLeft:0})
    });
}
function jian1(){
	if(num1<1){
		num1=lisize1/2-1;
		}else{
			num1--;
			}	
    box1.stop(true,true).animate({marginLeft:-liw1},0,function(){
        $('.show_list1:last-child').prependTo(this);
        $(this).stop(true,true).animate({marginLeft:0},500)
    });
}



$('.show_list4').width($('.show_list4_con').width()/8);
var li4=$('.show_list4');
var lisize4=$('.show_list4').size();
var prev4=$('.show4_prev');
var next4=$('.show4_next');
var liw4=(li4.width());
var box4=$('.show_list4_box');
var boxw4=liw4*lisize4;
$('.show_list4_box').width(boxw4);
prev4.click(function(){
    jian4();
})
next4.click(function(){
    add4();
})
function add4(){
	if(num4>lisize4/2-2){
		num4=0;
		}else{
			num4++;
			}	
    box4.stop(true,true).animate({marginLeft:-liw4},500,function(){
        $('.show_list4:first-child').appendTo(this);
        $(this).css({marginLeft:0})
    });
}
function jian4(){
	if(num4<1){
		num4=lisize4/2-1;
		}else{
			num4--;
			}	
    box4.stop(true,true).animate({marginLeft:-liw4},0,function(){
        $('.show_list4:last-child').prependTo(this);
        $(this).stop(true,true).animate({marginLeft:0},500)
    });
}



if($(window).width()>767){
$('.show_list3').width($(window).width()/5);
}else{
$('.show_list3').width($(window).width());
	}

var li3=$('.show_list3');
var lisize3=$('.show_list3').size();
var prev3=$('.show3_prev');
var next3=$('.show3_next');
var liw3=(li3.width());
var box3=$('.show_list3_box');
var boxw3=liw3*lisize3+100;

$('.show_list3').eq(2).find('.pic_bg').addClass('pic_bgon')

$('.show_list3_box').width(boxw3);

$('.show_list3_con').width($(window).width())

prev3.click(function(){
    jian3();
})
next3.click(function(){
    add3();
})
function add3(){
	if(num3>lisize3/2-2){
		num3=0;
		}else{
			num3++;
			}
	$('.show_list3').find('.pic_bg').removeClass('pic_bgon')
	$('.show_list3').eq(3).find('.pic_bg').addClass('pic_bgon')
	$('.history_list_zicon').stop(true).fadeOut(0);
	$('.history_list_zicon').eq(3).stop(true).fadeIn(500);
	
    box3.stop(true,true).animate({marginLeft:-liw3},500,function(){
    $('.show_list3:first-child').appendTo(this);
	$('.history_list_zicon:first-child').appendTo('.history_list_zi');
    $(this).css({marginLeft:0})
    });
}
function jian3(){
	if(num3<1){
		num3=lisize3/2-1;
		}else{
			num3--;
			}	
    box3.stop(true,true).animate({marginLeft:-liw3},0,function(){
        $('.show_list3:last-child').prependTo(this);
		$('.history_list_zicon:last-child').prependTo('.history_list_zi');
        $(this).stop(true,true).animate({marginLeft:0},500)
		$('.show_list3').find('.pic_bg').removeClass('pic_bgon')
	    $('.show_list3').eq(2).find('.pic_bg').addClass('pic_bgon')
		$('.history_list_zicon').stop(true).fadeOut(0);
	    $('.history_list_zicon').eq(2).stop(true).fadeIn(500);
    });
}









	
	
	
	
	

	
	
	






})







