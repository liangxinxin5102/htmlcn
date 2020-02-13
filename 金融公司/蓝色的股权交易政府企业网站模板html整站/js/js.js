// JavaScript Document
$(function(){
      //下拉导航
		$(".nav li").hover(function(){
          $(this).children(".chilNav").stop(true,true).show();
          },function(){
           $(this).children(".chilNav").stop(true,true).hide();
         });
       //二级下拉导航
		/* $(".nav .chilNav a").mouseover(function(){
			 $(this).next("span").stop(true,true).show().siblings("span").hide();
			 })*/
	   //新闻加线
	   $(".inNewList").hover(function(){
		   $(this).addClass("inNewListbor");
		   },function(){
			   $(this).removeClass("inNewListbor");
			   })
	//.teams dl偶数没有margin
	$(".teams dl:odd").css("margin-right","0")
	//inNewBox没有margin
	$(".inNewBox:eq(1) .inNewList:last").css("margin-right","0");
	$(".inNewBox:eq(2) .inNewList:last").css("margin-right","0");
	$(".inNewBox:eq(3) .inNewList:last").css("margin-right","0");
	//左下拉菜单
	$("#leftNav .lnNur").next("dd").stop(true,true).slideDown();
	$(".leftNav dt").mouseover(function(){
		$(this).next("dd").stop(true,true).slideDown().siblings("dd").stop(true,true).slideUp();
		})
	$(".lastchild").hover(function(){
		$(this).children("a").fadeIn();
		},function(){$(this).children("a").fadeOut();})
	//.download li
	$(".download li").hover(function(){
		$(this).addClass("dwla");
		},function(){$(this).removeClass("dwla");})	
	//网页宽度
	var bodyWidth=$("body").width();
	if(bodyWidth<1366){
		$(".mainCont").width(1040)
		$(".mctLeft").width(800);
		$(".mctLeft").height(700);
		$(".mctBottom .inNewBox").height(331);
		$(".mctLeft .title ul").width(385);
		$(".link").height(128);
		$(".foot").width(1020)
		}	
});	
	
	