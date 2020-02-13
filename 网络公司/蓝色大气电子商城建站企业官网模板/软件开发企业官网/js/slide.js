//menu
$(document).ready(function(){
  
  $('li.mainlevel').mousemove(function(){
  $(this).find('ul').slideDown();//you can give it a speed
  });
  $('li.mainlevel').mouseleave(function(){
  $(this).find('ul').slideUp("fast");
  });
  
});
$(document).ready(function(){
	$(".picList ").hover(function() {
		$(this).find(".thumb-info-title").stop()
		.animate({left: "0", opacity:1}, "fast")
		.css("display","block")

	}, function() {
		$(this).find(".thumb-info-title").stop()
		.animate({left: "0", opacity: 0}, "fast")
	});

});
/*********案例***********/
$(document).ready(function(){
	$(".Case_info ").hover(function() {
	    $(this).addClass("hover");
		$(this).find(".Case_contect").stop()
		.animate({bottom: "15px", opacity:1 , height:"220px"}, "fast")
		.css("display","block")

	}, function() {
	    $(this).removeClass("hover");  
		$(this).find(".Case_contect").stop()
		.animate({bottom: "15px", opacity: 1,height:"70px"}, "fast")
		.css("display","block")
	});

});
$(window).scroll(function() {
		var topToolbar = $("#dd_Section");
		var headerH = $("#Group_outerHeight").outerHeight();
		var headers = $("#header").outerHeight();
		var scrollTop =$(document.body).scrollTop();	
			if( scrollTop >= headerH + headers ){
				topToolbar.stop(false,true).addClass("fixToTop");
			}else if( scrollTop < headerH + headers ){
				topToolbar.stop(false,true).removeClass("fixToTop"); 
			}
});
$(document).ready(function(){
	$(".p_case_name ").hover(function(){
			$(this).addClass("hover");
		},function(){
			$(this).removeClass("hover");  
		}
	); 
	$(".NEW_function_first ").hover(function(){
			$(this).addClass("hover");
		},function(){
			$(this).removeClass("hover");  
		}
	); 
		$("#iam .wrapper-dropdown-1").toggle(function(){
			 $(this).andSelf().addClass('active');
			$(".Choose").show();
		
		},function(){
			 $(this).andSelf().removeClass('active');
		 $(".Choose").hide();
		
		}
	); 
		$("#iwant .wrapper-dropdown-1").toggle(function(){
			 $(this).andSelf().addClass('active');
			$(".Choose1").show();
		
		},function(){
			 $(this).andSelf().removeClass('active');
		 $(".Choose1").hide();
		
		}
	); 
});
//计价器
$(document).ready(function(){
	$(".Offer_OpenBg,.OfferBox").bind("click",function() {
		$(".Offer_OpenBg").show();
		$(".OfferBox").hide();

	}, function() {  
		$(".OfferBox").show();
	    $(".Offer_OpenBg").hide();
	});
	$(".OfferBox_Close ").toggle(function() {
		$(".OfferBox").hide();
		$(".Offer_OpenBg").show();

	}, function() {  
		$(".OfferBox").show();
		$(".Offer_OpenBg").hide();
	});
});
//三级栏目
$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});
