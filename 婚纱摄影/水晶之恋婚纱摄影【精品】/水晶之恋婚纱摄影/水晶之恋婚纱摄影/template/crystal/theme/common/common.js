$(function(){

	
	//head-list
	$(".head li").hover(function(){
		var num=$(this).index();
		$(this).addClass("current").find(".navbox").stop().slideDown("fast");	
	},function(){
		$(this).removeClass("current").find(".navbox").stop().slideUp("fast");	
	});

    // sns
    $('[ fancy=image ]').fancybox({
        openEffect  : 'fade',
        closeEffect : 'fade',
        prevEffect : 'fade',
        nextEffect : 'fade',
        mouseWheel:true,
        closeBtn  :true
    });
    BizQQWPA.addCustom({aty: '0', a: '0', nameAccount: 4007087688, selector: 'BizQQWPA'});
    BizQQWPA.addCustom({aty: '0', a: '0', nameAccount: 4007087688, selector: 'BizQQWPA2'});
    BizQQWPA.addCustom({aty: '0', a: '0', nameAccount: 4007087688, selector: 'BizQQWPA3'});


	//jsScroll = current
	$("[jsScroll=current]").on("click",function(){

		var _posT = $(this).parents(".column-h").position().top;

		$('html, body').animate({scrollTop:_posT},'slow');

	})

    //jsScroll = top
    $("[jsScroll=top]").on("click",function(){

        $('html, body').animate({scrollTop:0},'slow');

    })

	//jsHover = opacity
	$("[jsHover=opacity] img").hover(function(){

		$(this).parents("[jsHover=opacity]").children("a").children("img").not($(this)).stop().animate({"opacity":"0.5"});

	},function(){
		$(this).parents("[jsHover=opacity]").children("a").children("img").stop().animate({"opacity":"1"});
	});


	// jsHover = hover
    $("[jsHover=hover]>*").hover(function(){

      $(this).addClass("hover");

    },function(){

      $(this).removeClass("hover");

    })


	// jsOddEven = odd
    $("[jsOddEven=odd]>:odd").addClass("odd");

    


    // jsTab
    $("[jsTab=b]:not(:eq(0))").hide();
    $("[jsTab=t]:eq(0)").addClass("act");
    $("[jsTab=t]").on("click",function(){

    	var _obj = $(this).parents("[jsTab=tab]");
    	var _index = $(this).index();

    	$(this).addClass("act").siblings("[jsTab=t]").removeClass("act");
    	_obj.children("[jsTab=box]").children("[jsTab=b]").eq( _index ).show().siblings("[jsTab=b]").hide();

    })


    //jsAdd
    $("[jsAdd=fav]").on("click",function(){

    	var _val = parseInt( $(this).children("span").text() );

    	$(this).toggleClass("on");

    	if( $(this).hasClass("on") ){

    		$(this).children("span").text( _val + 1 );

    	}else{

    		$(this).children("span").text( _val-1 );
    	}
    	

    })

   
    // ie9及以下 添加方法
    if( document.all && !document.addEventListener ){

        $("[jsIe=8]>*:last").addClass("last-child");

    }

    // ie8及以下 添加辅助样式
    if( document.all && !window.atob ){
        placeholder();  

    }


})


function placeholder() {
     //placeholder
    $(":input[placeholder]").each(function(){


      var self = $(this), txt = self.attr('placeholder'),_paddingT=self.css("padding-top"),_paddingL=self.css("padding-left");
        self.wrap($('<div></div>').css({display:"inline-block",position:'relative', zoom:'1', border:'none', background:'none', padding:'none', margin:'none'}));
        var pos = self.position(), h = self.outerHeight(true), paddingleft = self.css('padding-left');
        var holder = $('<span></span>').text(txt).css({"font-size":"18px","line-height":"22px","font-family":"\5FAE\8F6F\96C5\9ED1","position":"absolute","top":0,"left":0,"color":"#666","text-transform":"uppercase","text-indent":_paddingL,"padding-top":_paddingT}).appendTo(self.parent());
        self.focusin(function(e) {
            holder.hide();
        }).focusout(function(e) {
            if(!self.val()){
                holder.show();
            }
        });
        holder.click(function(e) {
            holder.hide();
            self.focus();
        });



    })
}

//导航滚动
$(window).scroll(function(){

    var topNav = 148;

    // console.log( $(window).scrollTop() );

    if( $(window).scrollTop() >= topNav ){

        $(".floatHead").show();

    }else{

        $(".floatHead").hide();

    }

})
