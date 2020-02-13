/*高端会所切换*/
/*$(function(){
	ClubL = $('.clubPage .previous')// 左按钮
	ClubR = $('.clubPage .next') // 右按钮
	ClubM = $('.clubTitleMain ul') //移动ul
	ClubI = 0 // 变量
	ClubLength = ClubM.find('li').length;
	ClubR.click(function(){
		ClubI++;
		ClubI= ClubI==ClubLength-3?0:ClubI;
		ClubM.css({'left':-ClubM.find('li').outerWidth(true)*ClubI+'px'})
		})
	ClubL.click(function(){
		ClubI--;
		ClubI= ClubI<0?ClubLength-4:ClubI;
		ClubM.css({'left':-ClubM.find('li').outerWidth(true)*ClubI+'px'})
		})
	$(window).resize(function () {
		ClubI = 0 ;
		ClubM.css({'left':-ClubM.find('li').outerWidth(true)*ClubI+'px'})
		})
	})*/
	
	
// 全局变量设置 左右切换插件 避免响应式使用 ，使用请修改js
	var switch_l = {}; //  左按钮
	var switch_r = {}; //  右按钮
	var switch_m = {}; // 移动div
	var switch_w = {}; //距离
	var switch_i = {};	
	var switch_legth = {};	
jQuery.extend({
    "switchA": function (l,r,m,w,n) {
    	switch_l[n] = $(l); //  左按钮
		switch_r[n] = $(r); //  右按钮
		switch_m[n] = $(m); // 移动div
		switch_w[n] = $(w); //距离
		switch_i[n] = 0;	
		switch_w[n] = switch_w[n].outerWidth(true);			
		switch_legth[n] = switch_m[n].find('li').length;	
		switch_m[n].html(switch_m[n].html()+switch_m[n].html()) ;
		switch_r[n].click(function() {
			switch_i[n]++;				
			if(switch_i[n]>switch_legth[n]){			
				switch_m[n].css({'left':'0px'});
				switch_i[n]=1;
			}				
			switch_m[n].stop().animate({'left':-switch_i[n]*switch_w[n]+'px'});			
		});		
		switch_l[n].click(function() {
			switch_i[n]--;		
			if(switch_i[n]<0){			
				switch_m[n].css({'left':-switch_legth[n]*switch_w[n]+'px'});
				switch_i[n]=switch_legth[n]-1;
			}		
			switch_m[n].stop().animate({'left':-switch_i[n]*switch_w[n]+'px'});
		});		
    }   
});
$(function(){
	$.switchA(
		'.clubPage .previous', // 左按钮
		'.clubPage .next',     // 右按钮
		'.clubTitleMain ul',  // 移动div
		'.clubTitleMain li',                   // 距离
		55                   //调用次数 0开始
	); // 
	})
	
//历史活动
$(function(){
	$('.histBRTitle  td').click(function(){
		_this = $(this);
		_height = $('.histBRContent').find('td').width();
		_this.addClass('current').siblings('td').removeClass('current');
		$('.histBRContent').find('tr').css({'left':-_this.index()*_height+'px'});
		})
	$('.btnB').click(function(){
		_this = $(this).parents('li').find('.historyBottom');
		_id = _this.attr('id')
		if(_id=='Show'){
			_this.removeAttr('id');
			}else{
				_this.attr('id','Show');
				}
		})
	$('.exclReturn').click(function(){
		_this = $(this).parents('li').find('.historyBottom');
		_this.removeAttr('id');
		})
	$(window).scroll(function(){			
		
		})
	$('#close').click(function(){
		$('.pContent').css({'left':'-999em'});
		for(i=0;i<$('.photoContent ul').find('li').length;i++){
			$('.pContent .swiper-button-prev').click();
			}		
		})
	$('.photoContent ul').find('li').click(function(){
		_this = $(this);
		$('.pContent').css({'left':'0'});		
		for(i=0;i<_this.index();i++){
			$('.pContent .swiper-button-next').click();
			}
		})
	})
//erwema	
$(function(){
  $('.histTitle .historyA .btnC').click(function(){
	  $(this).next().fadeIn(200);
	});
});	
//高端会所

	
	
	
	
	
	
	