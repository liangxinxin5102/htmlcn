$(function(){
    $(".top_one ul li").click(function(){
    	$(this).addClass("active");
    	$(this).find("img").attr("src" , $(this).attr("data-selected"));
        $(".top_one ul li").not($(this)).removeClass("active");
        $(".top_one ul li").not($(this)).each(function(e){
			$(this).find("img").attr("src" , $(this).attr("data-unselected"));
		});
    });
    
    $(".top_one ul li").each(function (i) {
    	if(i == 2) {
			$(this).click(function(){
		    	$("#yanfa_whole").show();
		    	$("#yunying_whole").hide();
		    	$("#shichang_whole").hide();
		    	$("#zhineng_whole").hide();
		    	
		    	$("#yanfa_bottom").show();
		    	$("#yunying_bottom").hide();
		    	$("#shichang_bottom").hide();
		    	$("#zhineng_bottom").hide();
			});
		}
    	if(i == 1) {
			$(this).click(function(){
		    	$("#yanfa_whole").hide();
		    	$("#yunying_whole").show();
		    	$("#shichang_whole").hide();
		    	$("#zhineng_whole").hide();
		    	
		    	$("#yanfa_bottom").hide();
		    	$("#yunying_bottom").show();
		    	$("#shichang_bottom").hide();
		    	$("#zhineng_bottom").hide();
			});
		}
    	if(i == 0) {
			$(this).click(function(){
		    	$("#yanfa_whole").hide();
		    	$("#yunying_whole").hide();
		    	$("#shichang_whole").show();
		    	$("#zhineng_whole").hide();
		    	
		    	$("#yanfa_bottom").hide();
		    	$("#yunying_bottom").hide();
		    	$("#shichang_bottom").show();
		    	$("#zhineng_bottom").hide();
			});
		}
    	if(i == 3) {
			$(this).click(function(){
		    	$("#yanfa_whole").hide();
		    	$("#yunying_whole").hide();
		    	$("#shichang_whole").hide();
		    	$("#zhineng_whole").show();
		    	
		    	$("#yanfa_bottom").hide();
		    	$("#yunying_bottom").hide();
		    	$("#shichang_bottom").hide();
		    	$("#zhineng_bottom").show();
			});
		}
    });
    
    
    $("#yanfa_whole .whole span").click(function(){
    	$(this).addClass("activey");
        $("#yanfa_whole .whole span").not($(this)).removeClass("activey");
    });
    $("#yanfa_whole .whole span").each(function (i) {
    	if(i == 0) {
			$(this).click(function(){
		    	$("#yanfa_bottom_one").show();
			});
		}
    	if(i == 1) {
			$(this).click(function(){
		    	$("#yanfa_bottom_one").show();
			});
		}
    });
    
    $("#yunying_whole .whole span").click(function(){
    	$(this).addClass("activey");
        $("#yunying_whole .whole span").not($(this)).removeClass("activey");
    });
    $("#yunying_whole .whole span").each(function (i) {
    	if(i == 0) {
			$(this).click(function(){
		    	$("#yunying_bottom_one").show();
		    	$("#yunying_bottom_two").show();
		    	$("#yunying_bottom_three").show();
			});
		}
    	if(i == 1) {
			$(this).click(function(){
		    	$("#yunying_bottom_one").show();
		    	$("#yunying_bottom_two").hide();
		    	$("#yunying_bottom_three").hide();
			});
		}
    	if(i == 2) {
			$(this).click(function(){
		    	$("#yunying_bottom_one").hide();
		    	$("#yunying_bottom_two").show();
		    	$("#yunying_bottom_three").hide();
			});
		}
    	if(i == 3) {
			$(this).click(function(){
		    	$("#yunying_bottom_one").hide();
		    	$("#yunying_bottom_two").hide();
		    	$("#yunying_bottom_three").show();
			});
		}
    });
    
    $("#shichang_whole .whole span").click(function(){
    	$(this).addClass("activey");
        $("#shichang_whole .whole span").not($(this)).removeClass("activey");
    });
    $("#shichang_whole .whole span").each(function (i) {
    	if(i == 0) {
			$(this).click(function(){
		    	$("#shichang_bottom_one").show();
		    	$("#shichang_bottom_two").show();
		    	$("#shichang_bottom_three").show();
			});
		}
    	if(i == 1) {
			$(this).click(function(){
		    	$("#shichang_bottom_one").show();
		    	$("#shichang_bottom_two").hide();
		    	$("#shichang_bottom_three").hide();
			});
		}
    	if(i == 2) {
			$(this).click(function(){
		    	$("#shichang_bottom_one").hide();
		    	$("#shichang_bottom_two").show();
		    	$("#shichang_bottom_three").hide();
			});
		}
    	if(i == 3) {
			$(this).click(function(){
		    	$("#shichang_bottom_one").hide();
		    	$("#shichang_bottom_two").hide();
		    	$("#shichang_bottom_three").show();
			});
		}
    });
    
    $("#zhineng_whole .whole span").click(function(){
    	$(this).addClass("activey");
        $("#zhineng_whole .whole span").not($(this)).removeClass("activey");
    });
    $("#zhineng_whole .whole span").each(function (i) {
    	if(i == 0) {
			$(this).click(function(){
		    	$("#zhineng_bottom_one").show();
			});
		}
    	if(i == 1) {
			$(this).click(function(){
		    	$("#zhineng_bottom_one").show();
			});
		}
    });
});