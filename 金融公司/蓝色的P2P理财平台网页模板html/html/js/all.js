
jQuery(function(){ 

(function(){
	if(!Function.prototype.bind){
		Function.prototype.bind = function(obj){
			var owner = this,args = Array.prototype.slice.call(arguments),callobj = Array.prototype.shift.call(args);
			return function(e){e=e||top.window.event||window.event;owner.apply(callobj,args.concat([e]));};
		};
	}
})();
var banner_tabs = function(id){
	this.ctn = document.getElementById(id);
	this.adLis = null;
	this.btns = null;
	this.animStep = 0.2;//动画速度0.1～0.9
	this.switchSpeed = 3;//自动播放间隔(s)
	this.defOpacity = 1;
	this.tmpOpacity = 1;
	this.crtIndex = 0;
	this.crtLi = null;
	this.adLength = 0;
	this.timerAnim = null;
	this.timerSwitch = null;
	this.init();
};
banner_tabs.prototype = {
	fnAnim:function(toIndex){
		if(this.timerAnim){window.clearTimeout(this.timerAnim);}
		if(this.tmpOpacity <= 0){
			this.crtLi.style.opacity = this.tmpOpacity = this.defOpacity;
			this.crtLi.style.filter = 'Alpha(Opacity=' + this.defOpacity*100 + ')';
			this.crtLi.style.zIndex = 0;
			this.crtIndex = toIndex;
			return;
		}
		this.crtLi.style.opacity = this.tmpOpacity = this.tmpOpacity - this.animStep;
		this.crtLi.style.filter = 'Alpha(Opacity=' + this.tmpOpacity*100 + ')';
		this.timerAnim = window.setTimeout(this.fnAnim.bind(this,toIndex),50);
	},
	fnNextIndex:function(){
		return (this.crtIndex >= this.adLength-1)?0:this.crtIndex+1;
	},
	fnSwitch:function(toIndex){
		if(this.crtIndex==toIndex){return;}
		this.crtLi = this.adLis[this.crtIndex];
		for(var i=0;i<this.adLength;i++){
			this.adLis[i].style.zIndex = 0;
		}
		this.crtLi.style.zIndex = 2;
		this.adLis[toIndex].style.zIndex = 1;
		for(var i=0;i<this.adLength;i++){
			this.btns[i].className = '';
		}
		this.btns[toIndex].className = 'cur'
		this.fnAnim(toIndex);
	},
	fnAutoPlay:function(){
		this.fnSwitch(this.fnNextIndex());
	},
	fnPlay:function(){
		this.timerSwitch = window.setInterval(this.fnAutoPlay.bind(this),this.switchSpeed*1000);
	},
	fnStopPlay:function(){
		window.clearTimeout(this.timerSwitch);
	},
	init:function(){
		this.adLis = this.ctn.getElementsByTagName('li');
		this.btns = this.ctn.getElementsByTagName('cite')[0].getElementsByTagName('span');
		this.adLength = this.adLis.length;
		for(var i=0,l=this.btns.length;i<l;i++){
			with({i:i}){
				this.btns[i].index = i;
				this.btns[i].onclick = this.fnSwitch.bind(this,i);
				this.btns[i].onclick = this.fnSwitch.bind(this,i);
			}
		}
		this.adLis[this.crtIndex].style.zIndex = 2;
		this.fnPlay();
		this.ctn.onmouseover = this.fnStopPlay.bind(this);
		this.ctn.onmouseout = this.fnPlay.bind(this);
	}
};
var player1 = new banner_tabs('banner_tabs');

$(".cp_eight_function_pic").hover(function(){
	$(this).find(".cp_hover_this").addClass("show").removeClass("hide");
},function(){
	$(this).find(".cp_hover_this").removeClass("show").addClass("hide");
});


$(document).ready(function() {
     // $(".cp_accordion-desc").fadeOut(0);
    // $(".cp_accordion-descasd").css("display":"block").parent().siblings().find(".cp_accordion-desc").css("display":"none");
     $(".cp_accordion").click(function() {
          $(".cp_accordion-desc").not($(this).next()).slideUp('fast');
          $(this).next().slideToggle(400);
          $(this).find("h4").addClass("cp_color30b").removeClass("cp_color999")
          .parent().parent().parent().siblings().find("h4").addClass("cp_color999").removeClass("cp_color30b");

          $(this).addClass("cp_acc_bg2").removeClass("cp_acc_bg1")
          .parent().siblings().find(".cp_accordion").addClass("cp_acc_bg1").removeClass("cp_acc_bg2");

     });


});


 

			var cp_arr = ['#cp_qh_a1','#cp_qh_a2','#cp_qh_a3','#cp_qh_a4'];

			$(function(){

				$('.cp_dianji_hover').hover(function(){
					 $(this).find("span").addClass("cp_dianji_hover_span").removeClass("cp_dianji_hover_span1").parent().siblings().find("span").addClass("cp_dianji_hover_span1").removeClass("cp_dianji_hover_span");

					var k=$(this).index();

					var path=cp_arr[k];

					$(path).show().siblings().hide();

				})
				
			})


	
$(function(){
    // 监听滚动事件

    $(window).scroll(function(){
         // 获得div的高度

         var h = $(".cp_hyz_hjza").offset().top;
         if($(this).scrollTop()>h && $(this).scrollTop() < h+100){

            // 滚动到指定位置

            $("#cp_tu_three").addClass("show").removeClass("hide");
            $("#cp_tu_four").addClass("show").removeClass("hide");
            $("#cp_tu_five").addClass("show").removeClass("hide");
            $("#cp_tu_six").addClass("show").removeClass("hide");
            $("#cp_tu_seven").addClass("show").removeClass("hide");
            
           	$("#cp_tu_three").animate({top:'158px'},400);
    		$("#cp_tu_four").animate({top:'286px'},800);
    		$("#cp_tu_five").animate({top:'158px'},1200);
    		$("#cp_tu_six").animate({top:'28px'},1600);
    		$("#cp_tu_seven").animate({top:'-102px'},2000);
 			
        } 
        else {}
    });

});



});