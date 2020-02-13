/************************右侧QQ在线咨询js************************/
$(document).ready(function(){
    $("#floatShow").bind("click",function(){
      $('#onlineService').animate({width: 'show', opacity: 'show'}, 'normal',function(){
        $('#onlineService').show();
      });
      $('#floatShow').attr('style','display:none');
      $('#floatHide').attr('style','display:block');
    return false;
    });
    $("#floatHide").bind("click",function(){
    $('#onlineService').animate({width: 'hide', opacity: 'hide'}, 'normal',function(){
      $('#onlineService').hide();
    });
    $('#floatShow').attr('style','display:block');
    $('#floatHide').attr('style','display:none');
    });
    $(document).bind("click",function(event){
    if ($(event.target).isChildOf("#online_qq_layer") == false){
      $('#onlineService').animate({width: 'hide', opacity: 'hide'}, 'normal',function(){
        $('#onlineService').hide();
      });
      $('#floatShow').attr('style','display:block');
      $('#floatHide').attr('style','display:none');
    }
    });
    jQuery.fn.isChildAndSelfOf = function(b){
      return (this.closest(b).length > 0);
    };
    jQuery.fn.isChildOf = function(b){
      return (this.parents(b).length > 0);
    }; 
});
