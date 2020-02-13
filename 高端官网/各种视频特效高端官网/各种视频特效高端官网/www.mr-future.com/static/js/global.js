$(function(){
  var footerlink = $('.footerlink ul li').length;
  if(footerlink>1){
  $(".footerlink").addClass("footerlinkC")
  };
  $('.ProductList ul li,.storeSelector,.share').hover(
    function (){
      $(this).addClass("hover");
    },
    function (){
      $(this).removeClass("hover");
    }
  );
  /*下拉菜 */
  $("#category_container").hover(
    function(){
	  $(".cate_bd").stop().animate({
	    height:'525px'
	  }, 200)
	},
	function(){
	  $(".cate_bd").stop().animate({
	    height:'0'
	  },200);
	}
  );
  $("#category_container .item_hd").hover(
    function(){
	  $(this).find('dd').stop().animate({
		height:'50px'
	  }, 200);
	  $(".cate_bd").stop().animate({
	    height:'550px'
	  }, 200);
	},
	function(){
	  $(this).find('dd').stop().animate({
		height:'25px'
	  }, 200);
	  $(".cate_bd").stop().animate({
	    height:'525px'
	  }, 200)
	}
  );
  $("#category_container dl").hover(
    function(){
	  $(this).css('background','#222');
	},
	function(){
	  $(this).css('background','');
	}
  );
  /*下拉菜开始*/
  
  $('.catschoose dl:last').addClass('last');
  $('#goods_taste label:first').addClass('cur');
  $("#goods_taste label").click(function(){
	$("#goods_taste label").removeClass('cur');
	$(this).addClass('cur');
  });
});

$(document).ready(function(){
  $(window).scroll( function(){
	var scrollheight=$(window).scrollTop();
	var showContentH = $('.showContent').height();	
	var tuanContentH = $(".top").outerHeight()+$(".headerBj").outerHeight()+$(".pathinfo").innerHeight()+25+$(".showContent").outerHeight();  
	if(scrollheight>showContentH+228){
	  $(".fixed_bar").css({position:'fixed',top:'0px'});
	  $(".statusBtn").css('display','block');
	}else{
	  $(".fixed_bar").css({position:'',top:''});
	  $(".statusBtn").css('display','none');
	}
	
	if(scrollheight>tuanContentH){
	  $(".fixed_barTuan").css({position:'fixed',top:'0px'});
	}else{
	  $(".fixed_barTuan").css({position:'',top:''});
	}
	
  });
});
