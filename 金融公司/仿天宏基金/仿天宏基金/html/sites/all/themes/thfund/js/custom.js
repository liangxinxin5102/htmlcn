/* Theme Name:super - Clean & Powerful Bootstrap Theme
 * Author:Super
 * Author URI:http://www.she-power.tv
 * Author e-mail:she-power.tv@gmail.com
 * Version:1.0.0
 * Created:October 2014
 * License URI:http://wrapbootstrap.com
 * File Description: Place here your custom scripts
 */

jQuery(document).ready(function(){
    //jQuery("ul.navbar-nav li:nth-child(4) li.last a").attr("target","_blank");
    var menuList = jQuery("#navbar-collapse-1 li a");
    var obj = jQuery()
    menuList.each(function(){
        var title = jQuery(this).attr('title');
        if(title == 'essence'){
            jQuery(this).attr("title",'');
            jQuery(this).append('<small class="jing">精</small>');
        }
        if(title == '_blank'){
            jQuery(this).attr("title",'');
            jQuery(this).attr("target","_blank");
        }
        //console.log(jQuery(this).text());
    });

    jQuery("#tab-owl-carousel li a").hover(
        function(){
          var hover_background= 'url('+jQuery(this).data('hover')+')';
            jQuery(this).css("background-image",hover_background);
        },function(){
            var not_hover_background= 'url('+jQuery(this).data('nothover')+')';
            jQuery(this).css("background-image",not_hover_background);
        }
    );
});


