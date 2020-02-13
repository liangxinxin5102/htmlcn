$(function(){
        $(".nav ul li").hover(function() {
            $(this).find(".subnav").stop(true, true);
            $(this).find(".subnav").slideDown(200);
        }, function() {
            $(this).find(".subnav").stop(true, true);
            $(this).find(".subnav").slideUp(200);
        });
	$(window).scroll(function() {
		var scTop=$(window).scrollTop();
		var windW=$(window).innerWidth();
		var fixLft=(windW-1334)/2; 
		//$(".bb1").html(scTop);
		//$(".bb2").html(windW);
		if(scTop>580){
			$(".bb").css({"position":"fixed","top":"20px","left":fixLft+"px"})
		}else{
			$(".bb").css({"position":"absolute","top":"0px","left":"-167px"})
		}
	});
	
});

 