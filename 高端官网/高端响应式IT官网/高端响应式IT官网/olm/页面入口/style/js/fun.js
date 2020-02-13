//--
var slideV1=150;
var slideV2=50;
function slideFun(){
	$('.slide-T').each(function(i){
		if($(window).scrollTop()>$(this).offset().top-$(window).height()+slideV1-slideV2){
			$(this).addClass('slide-Ton');
			}
		})
	$('.slide-B').each(function(i){
		if($(window).scrollTop()>$(this).offset().top-$(window).height()+slideV1-slideV2){
			$(this).addClass('slide-Bon');
			}
		})
	$('.slide-L').each(function(i){
		if($(window).scrollTop()>$(this).offset().top-$(window).height()+slideV1){
			$(this).addClass('slide-Lon');
			}
		})
	$('.slide-R').each(function(i){
		if($(window).scrollTop()>$(this).offset().top-$(window).height()+slideV1){
			$(this).addClass('slide-Ron');
			}
		})
	}
//-------弹出对话框	
function prompt_fun(a){
	              $(a).after("<div id='Layer1'></div>"); 
				  $('#Layer1').fadeTo("fast",0.6); 
				  $(a).show();
				  //$(a).fadeIn("slow"); 
				  $('#Layer1').click(function(){
					  close_prompt_fun(a);
					  })	
	}
function close_prompt_fun(a){
	              //$(a).fadeOut("fast"); 
				  $(a).hide();
				  $('#Layer1').fadeOut("slow",function(){
					  $('#Layer1').remove();
					  }); 
	}