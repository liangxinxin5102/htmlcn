$(document).ready(function(){   
$("#nogallery_enter").children(".list-h, #enter_xz").remove();
  
$('#nav .menu_nav li').not(".sub-menu li").append('<div class="hover"><\/div>');
$('#nav .menu_nav li .sub-menu li').children("ul").addClass("block")
$('#nav .menu_nav li').hover(
function() {
$(this).children(".sub-menu").not(".block").stop(true, true).fadeIn('200');},
function() {
$(this).children(".sub-menu").not(".block").stop(true, true).fadeOut('1000');
	}
)
$('#nav .menu_nav li').not(".current-menu-item,.current-menu-ancestor,.current-category-ancestor").hover(
function() {
$(this).children('.hover').stop(true, true).fadeIn('200');
},
function() {
$(this).children('.hover').stop(true, true).fadeOut('1000');
});


	$(".top_in span").stop().mouseenter(function() {$(this).children("b").animate({"bottom":"-29px"},600,'easeOutElastic');});
    $(".top_in span").stop().mouseleave(function(){$(this).children("b").animate({"bottom":"0"},600,'easeOutElastic');});
	$("#Language").stop().mouseenter(function() {$(this).next(".Language_c").fadeIn(300)});
    $(".Language_c").stop().mouseleave(function(){$(this).fadeOut(300)});
	
	
	$("#pic,#enter_xz").stop().mouseenter(function() {$(this).children("a.prve").animate({"left":"0"},600,'easeOutElastic');});
    $("#pic,#enter_xz").stop().mouseleave(function(){$(this).children("a.prve").animate({"left":"-100px"},600);});
	$("#pic,#enter_xz").stop().mouseenter(function() {$(this).children("a.next").animate({"right":"0"},600,'easeOutElastic');});
    $("#pic,#enter_xz").stop().mouseleave(function(){$(this).children("a.next").animate({"right":"-100px"},600);});

    $(".kefu_d").stop().mouseenter(function() {$(this).children("div").fadeIn(300);});
    $(".kefu_d").stop().mouseleave(function() {$(this).children("div").fadeOut(300);});
  

   $(".Categories_bd_in a span").stop().mouseenter(function() {$(this).children("img").animate({"width":"205px","height":"205px","left":"-20px","top":"-20px"},400);});
   $(".Categories_bd_in a span").stop().mouseleave(function(){$(this).children("img").animate({"width":"165px","height":"165px","left":"0","top":"0"},400);});
   
   $(".news_loop_01 li#fist .news_001_pic").mouseenter(function() {$(this).children("img").animate({"width":"150px","height":"150px","left":"-10px","top":"-10px"},400);});
   $(".news_loop_01 li#fist .news_001_pic").mouseleave(function(){$(this).children("img").animate({"width":"130px","height":"130px","left":"0","top":"0"},400);});
   
    $(".news_loop_01 li#ohter .news_001_pic").mouseenter(function() {$(this).children("img").animate({"width":"108px","height":"108px","left":"-10px","top":"-10px"},400);});
   $(".news_loop_01 li#ohter .news_001_pic").mouseleave(function(){$(this).children("img").animate({"width":"88px","height":"88px","left":"0","top":"0"},400);});
   
    $("ul li#big a").mouseenter(function() {$(this).children("img").animate({"width":"230px","height":"230px","left":"-17.5px","top":"-17.5px"},400);});
   $("ul li#big a").mouseleave(function(){$(this).children("img").animate({"width":"195px","height":"195px","left":"0","top":"0"},400);});
     $("#cat_news ul li#smoll a,#cat_news ul li.firest a").mouseenter(function() {$(this).children("img").animate({"width":"111px","height":"111px","left":"-10px","top":"-10px"},400);});
   $("#cat_news ul li#smoll a,#cat_news ul li.firest a").mouseleave(function(){$(this).children("img").animate({"width":"91px","height":"91px","left":"0","top":"0"},400);});
   
   $(document).scroll(function () { 
 $(".about_b_fix").css({"top":($("#about_index").offset().top /4)-(($(document).scrollTop()/2))})
   
   });
   
$(".lsit_hover ul.list-h li a").stop().mouseover(function() {     

$(".product_pic img").attr("src",$(this).attr("rel"));
if($(".product_pic img").load){$(".product_pic .loading").fadeOut(); }else{$(".product_pic .loading").fadeIn();}

if($(this).attr("rel") ==  $(".product_pic img").attr("src")){
	$(".lsit_hover ul.list-h li").removeClass("bodee");
	$(this).parent("li").addClass("bodee");
	}

});

	
   



var sumWidth =0;
$(".lsit_hover").children("ul").each(function(){
         $(this).css("width", 66*$(this).children("li").length+"px");
});


$(".right_mian .product .list .next").click(function() {
	if($(".lsit_hover").children("ul").width() >=610){
	$(this).prev(".lsit_hover").children("ul").animate({"margin-left":"-620px"},600,'easeInOutQuint')
}
});
	$(".right_mian .product .list .prve").click(function() {
	if($(".lsit_hover").children("ul").width() >=610){
	$(this).next(".lsit_hover").children("ul").animate({"margin-left":0},600,'easeInOutQuint')
}
	});

$("#full_prodcts_single .product .list .next").click(function() {
	if($(".lsit_hover").children("ul").width() >=896){
	$(this).prev(".lsit_hover").children("ul").animate({"margin-left":"-858px"},890,'easeInOutQuint')
}
});
	$("#full_prodcts_single .product .list .prve").click(function() {
	if($(".lsit_hover").children("ul").width() >=896){
	$(this).next(".lsit_hover").children("ul").animate({"margin-left":0},890,'easeInOutQuint')
}
	});	
	
//$("#enter_xz,#enter_xz ul li").css("width",$("#enter_xz").children("ul li img").width());
//$("#enter_xz,#enter_xz ul li").css("hight",$("#enter_xz").children("ul li img").hight());
//搜索控件
$('.search span').hover(function(){
	$('.search ul').show()},function(){
	$('.search ul').hide()
	})
$('.search').find('li').click(function(){
	var md=$(this).text();
	$('.search em').text(md);
	$('.search ul').hide();
})
});  


function AddFavorite(sURL, sTitle) {
        sURL = encodeURI(sURL);
	try{
	    window.external.addFavorite(sURL, sTitle);
		}catch(e) {
    try{
	    window.sidebar.addPanel(sTitle, sURL, "");
		}catch (e) {
    alert("您的浏览器不支持自动加入收藏夹，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
	    }   }    }
    //设为首页
    function SetHome(url){
	if (document.all) {
        document.body.style.behavior='url(#default#homepage)';
	    document.body.setHomePage(url);
	}else{             
	    alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");
		} 
        }
