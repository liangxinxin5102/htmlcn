
jQuery(function(){ 
//下拉	 
function slideNav(slidewper,slidebox){
	    	 $(slidewper).toggle(function()
			 {
			 	 $(this).find(slidebox).stop(true).slideDown(300);
			 },function()
			 {
			 	$(this).find(slidebox).stop(true).slideUp(300);
			 })
	    };
	    // slideNav(".gy_nav_c_ts",".gycf_perinfo"); 
	

	$(this).css("color","#29A7E1").siblings().css("color","#red");


$(".df_member_submenu_ul li a").hover(function(){	
	$(this).addClass("gsqbtx").removeClass("df_member_submenu_bgpic").siblings().removeClass("df_member_submenu_bgpic").removeClass("gsqbtx").parent().siblings("li").find("a").removeClass("gsqbtx").siblings("span").addClass("df_member_submenu_bgpic");},
	function(){
	$(this).removeClass("gsqbtx").siblings().addClass("df_member_submenu_bgpic").removeClass("gsqbtx");
});
$(".gy_member_current_bg_border").hover(function(){
	$(this).css("color","#29A7E1").siblings().css("color","#5D5D5D");
	},function(){
		$(this).css("color","#5D5D5D").siblings().css("color","#29A7E1");
	}
);

$(document).ready(function () {	
	$('.gy_nav_c li').hover(
		function () {
			$('ul', this).fadeIn().siblings("a").css("color","#29A7E1"); 
		}, 
		function () {	
			$('ul', this).fadeOut().siblings("a").css("color","#5D5D5D");			
		}
	);
});

$(".gy_member_current div").click(function(){
			$(this).siblings("ul.df_member_submenu_ul").slideToggle();
				if($(".df_member_submenu_content li.df_member_current").hasClass("current")){
					$(this).parent("li.df_member_current").siblings("li.df_member_current").find("ul.df_member_submenu_ul").hide();
				}
		});	
		$(".df_member_submenu_ul li").click(function(){
			$(this).addClass("current").siblings("li").removeClass("current").parent("ul.df_member_submenu_ul ").parent("li.df_member_current").siblings("li.df_member_current").find(".df_member_submenu_ul li").removeClass("current");
			
		});	

  $(".gy_guide_activety_img").hover(function(){			 
	 		 	$(this).find('.gy_guide_activety_avyy_bg,.gy_guide_activety_avyy_tmdbg').css("display","block");
	 		} ,function(){
			 	$(this).find('.gy_guide_activety_avyy_bg,.gy_guide_activety_avyy_tmdbg').css("display","none");
 })



 function qiehuan(obj,objcur,boxone)
	   {
	   	  $(obj).click(function()
		   {
		   	   $(this).addClass(objcur).siblings().removeClass(objcur);
		   	   var index=$(this).index();
		   	 
		   	   $(boxone).eq(index).show().siblings().hide();
		   });
	   }

qiehuan(".gy_guide_index_xzk_bitou span","gy_guide_index_xzk_bitou1",".gy_guide_index_xzk_bid_rit");
qiehuan(".form_main_grjg_xx span","form_main_gr",".left_form");

$("#unfold").click(function(){
  $(".gy_footer_youqlj_two,.gy_footer_youqlj_three").toggle();
  });

$("#form_main_gr").click(function(){
 $(this).css("background","#29A7E1").siblings().css("background","#F3F3F3"); 
 $(this).css("color","#FFFFFF").siblings().css("color","#808080");
  });
$("#form_main_jg").click(function(){
 $(this).css("background","#29A7E1").siblings().css("background","#F3F3F3"); 
 $(this).css("color","#FFFFFF").siblings().css("color","#808080");
  });






$(".gy_guide_index_xzk_bitou span").click(function(){
 $(this).css("background","#29A7E1").siblings().css("background","#F3F3F3"); 
  });
$(".gy_guide_index_xzk_bitou span").click(function(){
 $(this).css("color","#FFFFFF").siblings().css("color","#999999"); 
  });




	$(".gy_guide_paging").click(function(){
  	 $(this).css("background","#29A7E1").siblings().css("background","#F3F3F3"); 
  	});


	$(".gy_guide_index_xzk_mleft_one li").click(function(){
  	 $(this).css("background","#29A7E1").siblings().css("background","#FFFFFF"); 
  	});

	$(".gy_guide_index_xzk_mleft_one li").click(function(){
  	 $(this).css("color","#FFFFFF").siblings().css("color","#7F7F7F"); 
  	});

	$(".gy_guide_index_xzk_mleft_two li").click(function(){
  	 $(this).css("background","#29A7E1").siblings().css("background","#FFFFFF"); 
  	});

  	$(".gy_guide_index_xzk_mleft_two li").click(function(){
  	 $(this).css("color","#FFFFFF").siblings().css("color","#7F7F7F"); 
  	});
  	$(".gy_guide_index_xzk_mleft_three li").click(function(){
  	 $(this).css("background","#29A7E1").siblings().css("background","#FFFFFF"); 
  	});
  	$(".gy_guide_index_xzk_mleft_three li").click(function(){
  	 $(this).css("color","#FFFFFF").siblings().css("color","#7F7F7F"); 
  	});





$(".gy_guide_server_guild_onesix_max1").hover(function(event){
     $(this).addClass("gy_guide_server_guild_onesix_max1_asd");
	}, function(event){
    $(this).removeClass("gy_guide_server_guild_onesix_max1_asd")
	} );
$(".gy_guide_server_guild_onesix_max2").hover(function(event){
     $(this).addClass("gy_guide_server_guild_onesix_max2_asd");
	}, function(event){
    $(this).removeClass("gy_guide_server_guild_onesix_max2_asd")
	} );
$(".gy_guide_server_guild_onesix_max3").hover(function(event){
     $(this).addClass("gy_guide_server_guild_onesix_max3_asd");
	}, function(event){
    $(this).removeClass("gy_guide_server_guild_onesix_max3_asd")
	} );
$(".gy_guide_server_guild_onesix_max4").hover(function(event){
     $(this).addClass("gy_guide_server_guild_onesix_max4_asd");
	}, function(event){
    $(this).removeClass("gy_guide_server_guild_onesix_max4_asd")
	} );



$(".gy_treasure_kind_bgpic3").hover(function(event){
    $(this).css("color", "#29A7E1");
     $(this).css("background", "url(images/gy_treasure_kind030.png) no-repeat center center");
     $("#gy_treasure_kind_bigfont3").css("color", "#29A7E1");
	}, function(event){
    $(this).css("background", "url(images/gy_treasure_kind03.png) no-repeat center center");
    $("#gy_treasure_kind_bigfont3").css("color", "#555555");
	} );
	
		
	$(".gy_treasure_kind_bgpic").hover(function(event){
    $(this).css("color", "#29A7E1");
     $(this).css("background", "url(images/gy_treasure_kind010.png) no-repeat center center");
     $("#gy_treasure_kind_bigfont1").css("color", "#29A7E1");
	}, function(event){
    $(this).css("background", "url(images/gy_treasure_kind01.png) no-repeat center center");
    $("#gy_treasure_kind_bigfont1").css("color", "#555555");
	} );

$(".gy_treasure_kind_bgpic2").hover(function(event){
    $(this).css("color", "#29A7E1");
     $(this).css("background", "url(images/gy_treasure_kind020.png) no-repeat center center");
     $("#gy_treasure_kind_bigfont2").css("color", "#29A7E1");
	}, function(event){
    $(this).css("background", "url(images/gy_treasure_kind02.png) no-repeat center center");
    $("#gy_treasure_kind_bigfont2").css("color", "#555555");
	} );
	
$(".gy_treasure_kind_bgpic4").hover(function(event){
    $(this).css("color", "#29A7E1");
     $(this).css("background", "url(images/gy_treasure_kind040.png) no-repeat center center");
     $("#gy_treasure_kind_bigfont4").css("color", "#29A7E1");
	}, function(event){
    $(this).css("background", "url(images/gy_treasure_kind04.png) no-repeat center center");
    $("#gy_treasure_kind_bigfont4").css("color", "#555555");
	} );	
$(".gy_treasure_kind_bgpic5").hover(function(event){
    $(this).css("color", "#29A7E1");
     $(this).css("background", "url(images/gy_treasure_kind050.png) no-repeat center center");
     $("#gy_treasure_kind_bigfont5").css("color", "#29A7E1");
	}, function(event){
    $(this).css("background", "url(images/gy_treasure_kind05.png) no-repeat center center");
    $("#gy_treasure_kind_bigfont5").css("color", "#555555");
	} );





});



