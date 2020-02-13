//无下拉的菜单取消hover样式
$(function(){
 var $menuli=$("#Menu").children("ul").children("li");
 if($menuli.size()==0){return;}
 $menuli.bind('mouseenter',function(){
   if($(this).children("ul").size()==0)
    {
     $(this).removeClass("hover");
    }
 });
});

//右侧返回顶部图标
$(function(){
     var icon='<a class="gotoptop_icon" id="gotoptop_icon" href="#" title="返回顶部"></a>';
     $("body").append(icon);
     var $window=$(window);
     var $gotoptop_icon=$("#gotoptop_icon");
     var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); // opera fix
     $(window).bind('scroll resize',function(){
        if($window.scrollTop()>0)
         {
          $gotoptop_icon.show();
         }
        else
         {
          $gotoptop_icon.hide();
         }
     });
     $gotoptop_icon.bind('click',function(){
        $body.animate({scrollTop:'0px'},"fast");
         return false;
     });
});



