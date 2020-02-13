/*蓝科企业网站系统PHP版
http://www.lankecms.com*/

$(document).ready(function(){
      //返回顶部
      $("#gototop").click(function(){
          $("html,body").animate({scrollTop :0}, 800);return false;
      });
      $("#gotocate").click(function(){
           $("html,body").animate({scrollTop:$("#categories").offset().top},800);return false;
      });


      // 搜索
      $("#small_search").click(function(){
          $("#topsearch").slideToggle();
      });

      if($(window).width()>768){
          //鼠标划过就展开子菜单
          $('ul.nav li.dropdown').hover(function() {
            $(this).find('.dropdown-menu').stop(true, true).slideDown();
          }, function() {
            $(this).find('.dropdown-menu').stop(true, true).slideUp();
          });

          //scrollTop
          // $(window).scroll(function(){
          //     var scrolls = $(window).scrollTop()
          //     if (scrolls > 10) {
          //       $(".navbar").addClass("small-nav")
          //     }else{
          //       $(".navbar").removeClass("small-nav")
          //     }
          // });
          
      }

      //左侧导航菜单
      // if ($("#firstpane .menu_body:eq(0)").text().replace(/[\r\n ]/g,"").length>0) {
      //   $("#firstpane .menu_body:eq(0)").show().prev().html("-").prev().addClass("left_active");
      // };
      $("ul.menu_body").each(function(){
       if ($(this).text().replace(/[\r\n ]/g,"").length<=0) {$(this).prev().remove();} //去掉span
      });

      $("#firstpane span.menu_head").click(function(){
          var spanatt = $(this).next("ul.menu_body").css('display');
          if (spanatt == "block"){
              var spantext = "+";
               $(this).prev().removeClass("left_active");
          }else{
              var spantext = "-";
              $(this).prev().addClass("left_active");
          }
          $(this).html(spantext).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body");
      });

      //菜单选中高亮
      var urlstr = location.href;  
      var urlstatus=false; 
      var urlnum = 1;
      $("#navbar a").each(function () {  
        if ((urlstr + '/').indexOf($(this).attr('href').replace(/[\r\n ]/g,"")) > -1 && $(this).attr('href')!='' && urlnum != 1) {  
          $(this).addClass('active'); urlstatus = true;
        }else {  
          $(this).removeClass('active');  
        } 
        urlnum++;
      });  
     if (!urlstatus) {$("#navbar a").eq(0).addClass('active'); }  

  
});