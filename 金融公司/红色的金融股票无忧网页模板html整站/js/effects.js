
/*列表*/
   $(function(){
	$('.list-nav ul li').click(function(){
	$('.list-nav ul li').removeClass('cur');
	$(this).addClass('cur');
	var index=$('.list-nav ul li').index($(this))
	$('.zx-list').hide();
	$('.zx-list').eq(index).show();		
	})	  
 });
 
  $(function(){
	$('ul.ny-nav li').click(function(){
	$('ul.ny-nav li').removeClass('cur');
	$(this).addClass('cur');
	var index=$('ul.ny-nav li').index($(this))
	$('.contentB').hide();
	$('.contentB').eq(index).show();		
	})	  
 });
 
  $(function(){
	$('.personalBox .subNav ul li').click(function(){
	$('.personalBox .subNav ul li').removeClass('cur');
	$(this).addClass('cur');
	var index=$('.personalBox .subNav ul li').index($(this))
	$('.personalR').hide();
	$('.personalR').eq(index).show();		
	})	  
 });
 
 /*分享*/
 $(".zx-list ul li .date a#fx01").click(function(){
	$(".zx-list ul li #fx1").toggle();	
});
$(".zx-list ul li .date a#fx02").click(function(){
	$(".zx-list ul li #fx2").toggle();	
});
$(".zx-list ul li .date a#fx03").click(function(){
	$(".zx-list ul li #fx3").toggle();	
});
$(".zx-list ul li .date a#fx04").click(function(){
	$(".zx-list ul li #fx4").toggle();	
});
$(".zx-list ul li .date a#fx05").click(function(){
	$(".zx-list ul li #fx5").toggle();	
});
$(".zx-list ul li .date a#fx06").click(function(){
	$(".zx-list ul li #fx6").toggle();	
});