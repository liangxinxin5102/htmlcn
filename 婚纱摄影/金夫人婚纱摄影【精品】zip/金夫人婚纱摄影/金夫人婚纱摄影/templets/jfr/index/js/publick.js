// JavaScript Document

$(function(){
	$('#dowebok').fullpage({
		sectionsColor: ['#565855', '#f2f2f2', '#1ac4c4', '#ebebeb','#EC6C84', '#EBEBEB', '#39BB93', '#fff'],
		anchors:['1','2','3','4','5','6','7','8'],
		'navigation': true,
		afterLoad: function(anchorLink, index){
			if(index == 2){		
				$('.section2 .TitleEn h2').addClass('artive');
				$('.section2 .TitleEn font').addClass('artive');
				$('.section2 .TitleEn small').addClass('artive');
				$('.section2 .TitleEn span').addClass('artive');
				$('.section2 .TitleCh p').addClass('artive');
				$('.section2 .TitleCh font').addClass('artive');				
				$('.section2 .TitleCh span').addClass('artive');
				$('.section2 .copyright').addClass('artive');
			}
			if(index == 3){	
				$('.section3 .TitleEn h2').addClass('artive');
				$('.section3 .TitleEn font').addClass('artive');
				$('.section3 .TitleEn small').addClass('artive');
				$('.section3 .TitleEn span').addClass('artive');
				$('.section3 .TitleCh p').addClass('artive');
				$('.section3 .TitleCh font').addClass('artive');				
				$('.section3 .TitleCh span').addClass('artive');
				$('.section3 .copyright').addClass('artive');			
			}
			if(index == 4){		
				$('.section4 .TitleEn h2').addClass('artive');
				$('.section4 .TitleEn font').addClass('artive');
				$('.section4 .TitleEn small').addClass('artive');
				$('.section4 .TitleEn span').addClass('artive');
				$('.section4 .TitleCh p').addClass('artive');
				$('.section4 .TitleCh font').addClass('artive');				
				$('.section4 .TitleCh span').addClass('artive');	
				$('.section4 .copyright').addClass('artive');	
			}
			if(index == 5){	
				$('.section5 .TitleEn h2').addClass('artive');
				$('.section5 .TitleEn font').addClass('artive');
				$('.section5 .TitleEn small').addClass('artive');
				$('.section5 .TitleEn span').addClass('artive');
				$('.section5 .TitleCh p').addClass('artive');
				$('.section5 .TitleCh font').addClass('artive');				
				$('.section5 .TitleCh span').addClass('artive');	
				$('.section5 .copyright').addClass('artive');		
			}
			if(index == 6){	
				$('.section6 .TitleEn h2').addClass('artive');
				$('.section6 .TitleEn font').addClass('artive');
				$('.section6 .TitleEn small').addClass('artive');
				$('.section6 .TitleEn span').addClass('artive');
				$('.section6 .TitleCh p').addClass('artive');
				$('.section6 .TitleCh font').addClass('artive');				
				$('.section6 .TitleCh span').addClass('artive');	
				$('.section6 .copyright').addClass('artive');		
			}
			if(index == 7){	
				$('.section7 .TitleEn h2').addClass('artive');
				$('.section7 .TitleEn font').addClass('artive');
				$('.section7 .TitleEn small').addClass('artive');
				$('.section7 .TitleEn span').addClass('artive');
				$('.section7 .TitleCh p').addClass('artive');
				$('.section7 .TitleCh font').addClass('artive');				
				$('.section7 .TitleCh span').addClass('artive');	
				$('.section7 .copyright').addClass('artive');		
			}
			if(index == 8){	
				$('.section8 .TitleEn h2').addClass('artive');
				$('.section8 .TitleEn font').addClass('artive');
				$('.section8 .TitleEn small').addClass('artive');
				$('.section8 .TitleEn span').addClass('artive');
				$('.section8 .TitleCh p').addClass('artive');
				$('.section8 .TitleCh font').addClass('artive');				
				$('.section8 .TitleCh span').addClass('artive');	
				$('.section8 .copyright').addClass('artive');		
			}
		},
		onLeave: function(index, direction){
			if(index == 2){
				$('.section2 .TitleEn h2').removeClass('artive');
				$('.section2 .TitleEn font').removeClass('artive');
				$('.section2 .TitleEn small').removeClass('artive');
				$('.section2 .TitleEn span').removeClass('artive');
				$('.section2 .TitleCh p').removeClass('artive');
				$('.section2 .TitleCh font').removeClass('artive');				
				$('.section2 .TitleCh span').removeClass('artive');
				$('.section2 .copyright').removeClass('artive');		
			}
			if(index == 3){	
				$('.section3 .TitleEn h2').removeClass('artive');
				$('.section3 .TitleEn font').removeClass('artive');
				$('.section3 .TitleEn small').removeClass('artive');
				$('.section3 .TitleEn span').removeClass('artive');
				$('.section3 .TitleCh p').removeClass('artive');
				$('.section3 .TitleCh font').removeClass('artive');				
				$('.section3 .TitleCh span').removeClass('artive');	
				$('.section3 .copyright').removeClass('artive');				
			}
			if(index == 4){	
				$('.section4 .TitleEn h2').removeClass('artive');
				$('.section4 .TitleEn font').removeClass('artive');
				$('.section4 .TitleEn small').removeClass('artive');
				$('.section4 .TitleEn span').removeClass('artive');
				$('.section4 .TitleCh p').removeClass('artive');
				$('.section4 .TitleCh font').removeClass('artive');				
				$('.section4 .TitleCh span').removeClass('artive');	
				$('.section4 .copyright').removeClass('artive');				
			}
			if(index == 5){	
				$('.section5 .TitleEn h2').removeClass('artive');
				$('.section5 .TitleEn font').removeClass('artive');
				$('.section5 .TitleEn small').removeClass('artive');
				$('.section5 .TitleEn span').removeClass('artive');
				$('.section5 .TitleCh p').removeClass('artive');
				$('.section5 .TitleCh font').removeClass('artive');				
				$('.section5 .TitleCh span').removeClass('artive');	
				$('.section5 .copyright').removeClass('artive');				
			}
			if(index == 6){		
				$('.section6 .TitleEn h2').removeClass('artive');
				$('.section6 .TitleEn font').removeClass('artive');
				$('.section6 .TitleEn small').removeClass('artive');
				$('.section6 .TitleEn span').removeClass('artive');
				$('.section6 .TitleCh p').removeClass('artive');
				$('.section6 .TitleCh font').removeClass('artive');				
				$('.section6 .TitleCh span').removeClass('artive');
				$('.section6 .copyright').removeClass('artive');				
			}
			if(index == 7){	
				$('.section7 .TitleEn h2').removeClass('artive');
				$('.section7 .TitleEn font').removeClass('artive');
				$('.section7 .TitleEn small').removeClass('artive');
				$('.section7 .TitleEn span').removeClass('artive');
				$('.section7 .TitleCh p').removeClass('artive');
				$('.section7 .TitleCh font').removeClass('artive');				
				$('.section7 .TitleCh span').removeClass('artive');	
				$('.section7 .copyright').removeClass('artive');				
			}
			if(index == 8){	
				$('.section8 .TitleEn h2').removeClass('artive');
				$('.section8 .TitleEn font').removeClass('artive');
				$('.section8 .TitleEn small').removeClass('artive');
				$('.section8 .TitleEn span').removeClass('artive');
				$('.section8 .TitleCh p').removeClass('artive');
				$('.section8 .TitleCh font').removeClass('artive');				
				$('.section8 .TitleCh span').removeClass('artive');	
				$('.section8 .copyright').removeClass('artive');				
			}
		}
	});
});