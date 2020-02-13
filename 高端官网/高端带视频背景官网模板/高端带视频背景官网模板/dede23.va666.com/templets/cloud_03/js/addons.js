$(function(){
	if (window.console) {
		console.info(">>Join us? Email：psd2html@qq.com");
	}		
	
	/*触屏*/
	$(".slider .inner").bind("swipeleft",function(){
		
	});
	
	$(".slider .inner").bind("swiperight",function(){
		
	});
	
	$('.page2 li').hover(function(){
		$(this).addClass('selected');
	},
	function(){
		$(this).removeClass('selected');
	})
	
	$('.gh').click(function(){
		if($(this).hasClass('selected')){
			$(this).removeClass('selected');
			$('#nav').addClass('hide');
		}
		else{
			$(this).addClass('selected');
			$('#nav').removeClass('hide');
		}
	})
		
//	imagesLoaded( $('body'), function(){
//		
//	})
		
//	滑屏
	$('.page-wrap').fullpage({
		//sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
		anchors: ['hero', 'services', 'cases', 'news','about','contact','footer'],
//		'navigation': true,
//		'navigationPosition': 'right',
		verticalCentered: !1,
		navigation: !0,
		//'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],
		afterLoad: function(anchorLink, index){
		
		//alert(index);
			if(index == 1){
				$('#fp-nav').addClass('selected');
				$('.gb-nav').removeClass('show');
				$('.gb-header').addClass('show');
			}
			if(index == 2){
				
				$('.gb-nav').addClass('show');
				$('.gb-header').removeClass('show');
				$('#fp-nav').addClass('selected');
			}
			if(index == 3){
				$('#fp-nav').removeClass('selected');
				$('.gb-nav').addClass('show');
				$('.gb-header').removeClass('show');
				$('#fp-nav').addClass('selected');
			}
			if(index == 4){
				$('#fp-nav').addClass('selected');
				$('.gb-nav').addClass('show');
				$('.gb-header').removeClass('show');
			}
			if(index == 5){
				$('#fp-nav').removeClass('selected');
				$('.gb-nav').addClass('show');
				$('.gb-header').removeClass('show');
			}
			if(index == 6){
				$('#fp-nav').addClass('selected');
				$('.gb-nav').addClass('show');
				$('.gb-header').removeClass('show');
			}
			if(index == 7){
				$('#fp-nav').addClass('selected');
				$('.gb-nav').addClass('show');
				$('.gb-header').removeClass('show');
			}
		},
		onLeave: function(index, nextIndex, direction){
			if(index == 1 && direction == 'down'){
				
				
			}
		}
	});
		
//	头部幻灯片
	function currVideoPlay(){
		$('.slide-wrap video').get(0).pause();
		$('.slide-wrap li.selected video').get(0).play();
	}
	$('#slide-nav li.nav-bullet-container').click(function(){
		$('#slide-nav li.nav-bullet-container').removeClass('active').eq($(this).index()).addClass('active');
		
		$('.slide-wrap li').removeClass('selected').eq($(this).data('index')).addClass('selected');
		currVideoPlay();
	})
	$.extend({
		slideAutoChange:function(){
			curr = $('.slide-wrap li.selected');
			if(curr.next().size()>0){
        		next = curr.next(); 
        	}
			else{
				next = $('.slide-wrap li:first');
			}
    		curr.removeClass('selected');
        	next.addClass('selected');
        	
    		$('#slide-nav li.nav-bullet-container').removeClass('active').eq(next.index()).addClass('active');
    		currVideoPlay();
		}
	})
	//_slideAutoChange = setInterval("$.slideAutoChange()",15000);
	
	
	$('.page1').mousewheel(function(event, delta) {

        //loghandle(event, delta);

        //console.log('pageX: ' + event.pageX + ' pageY: ' + event.pageY );
        
        //alert(delta);
        curr = $('.slide-wrap li.selected');
        
        if(delta>0){
        	//alert('up');
        	if(curr.prev().size()>0){
        		prev = curr.prev();
        	}
        	else{
        		prev = $('.slide-wrap li:last');
        	}
        	curr.removeClass('selected');
        	prev.addClass('selected');
        	
        	$('#slide-nav li.nav-bullet-container').removeClass('active').eq(prev.index()).addClass('active');
        	currVideoPlay();
        	return false;
        }
        else{
        	//alert('down');
        	if(curr.next().size()>0){
        		next = curr.next();
        	}
        	else{
        		next = $('.slide-wrap li:first');
        	}
        	if(curr.next().size()>0){
	        	
	        	curr.removeClass('selected');
	        	next.addClass('selected');
	        	
        		$('#slide-nav li.nav-bullet-container').removeClass('active').eq(next.index()).addClass('active');
	        	currVideoPlay();
	        	return false;
	        }
	        else{
	        	
	        }
        }

    });
    
    $('#nav, #loader').mousewheel(function(event, delta) {
    	return false;
    });
    
//  进度条
	$('.myStat').circliful();
    
})