// JavaScript Document
$(document).ready(function(){
	
		$(".nav ul li").hover(function(){
			$(this).find(".navbox").show();
			$(this).find("a").addClass("navhover");
		},function(){
			$(this).find(".navbox").hide();
			$(this).find("a").removeClass("navhover");
		});
		
		$(".abtnav .navl dl dd").hover(function(){
			$(this).parents("div.navlist").addClass("abtwidth");
		});
		
	
		$("input[type='text']").focus(function(){
			var dftval = $(this).val();
			var titval = $(this).attr("title");
			if(dftval=="" || dftval==titval){
				$(this).val("").css("color","#333");
			}
		});
		$("input[type='text']").blur(function(){
			var dftval = $(this).val();	
			if(dftval==""){
				cgeval=$(this).attr("title");
				$(this).val(cgeval).css("color","#c6c6c6");
			}
		});
		
	//右侧工具栏
 	$(window).scroll(function(){
                if ($(window).scrollTop()>100){
                    $(".gotop").fadeIn(500);
                }
                else
                {
                    $(".gotop").fadeOut(100);
                }
				});

	$(".gotop").click(function() {
		$(document).scrollTop(0)
	});
	
	$("#ewm span").click(function(){
		$("#ewm").remove();
	});
	
	$("#sidebar li").hover(function() {
		$(this).addClass("current");
	},
	function() {
		$(this).removeClass("current");
	});
	
	$(".weixin .close").click(function(){
	  $(".weixin").hide();
	});
	
	//加入收藏
	function AddFavorite(sURL, sTitle) {
            sURL = encodeURI(sURL); 
        	try{   
 				window.external.addFavorite(sURL, sTitle);   
 			}catch(e) {   
				try{   
			 		window.sidebar.addPanel(sTitle, sURL, "");   
				}catch (e) {   
		     		alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
				}   
 			}
 	}
	
	
});
