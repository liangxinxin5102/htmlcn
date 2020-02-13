
//change fontsize
$(function(){
  change_fontsize(); 
});
$(window).resize(function(){
  change_fontsize();
});
function change_fontsize() {
   var width = $('body').width();
   var font_size = width/640*16;
   $('html').css('font-size',font_size+'px');	
   //alert(font_size);
   //alert($('body').width());
}
// top nav
function show_top_nav() {
   if($(".top_nav").is(":visible")) {
	   $(".top_nav").slideUp();
   } else {
       $(".top_nav").slideDown();
   }
}


