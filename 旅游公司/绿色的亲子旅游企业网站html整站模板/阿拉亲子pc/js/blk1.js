	
$(document).ready(function(){

	//示例9，综合效果
	var t7 = new PopupLayer({
		trigger:".ele7",
		popupBlk:"#blk7",
		closeBtn:"#close7",
		useOverlay:true,
		useFx:true,
		offsets:{
			x:0,
			y:-41
		}
	});
	t7.doEffects = function(way){
		if(way == "open"){
			this.popupLayer.css({opacity:0.3}).show(300,function(){
				this.popupLayer.animate({
					left:(document.documentElement.clientWidth- this.popupLayer.width())/2,
					top:(document.documentElement.clientHeight - this.popupLayer.height())/2-(50),
					opacity:0.8
				},300,function(){this.popupLayer.css("opacity",1)}.binding(this));
			}.binding(this));
		}
		else{
			this.popupLayer.animate({
				left:this.trigger.offset().left,
				top:this.trigger.offset().top,
				opacity:0.1
			},{duration:200,complete:function(){this.popupLayer.css("opacity",1);this.popupLayer.hide()}.binding(this)});
		}
	}
	
	
	var t3 = new PopupLayer({
		trigger:".ele3",
		popupBlk:"#blk3",
		closeBtn:".close3",
		useOverlay:true,
		useFx:true,
		offsets:{
			x:0,
			y:-41
		}
	});
	t3.doEffects = function(way){
		if(way == "open"){
			this.popupLayer.css({opacity:0.3}).show(300,function(){
				this.popupLayer.animate({
					left:(document.documentElement.clientWidth- this.popupLayer.width())/2,
					top:(document.documentElement.clientHeight - this.popupLayer.height())/2+(50),
					opacity:0.8
				},300,function(){this.popupLayer.css("opacity",1)}.binding(this));
			}.binding(this));
		}
		else{
			this.popupLayer.animate({
				left:this.trigger.offset().left,
				top:this.trigger.offset().top,
				opacity:0.1
			},{duration:200,complete:function(){this.popupLayer.css("opacity",1);this.popupLayer.hide()}.binding(this)});
		}
	}
	
	

	
});
