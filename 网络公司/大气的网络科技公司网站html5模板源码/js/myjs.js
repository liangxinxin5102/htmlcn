//banner
$(function(){
    $('#slides').slides({
        container: 'slides-container',
        preload: true,
        play: 4000,
        pause: 1500,
        hoverPause: true,
        effect: 'slide',
        slideSpeed: 850
    })

})


$(document).ready(function(){
        $(".announce-info").Scroll({line:1,speed:500,timer:3000,up:"announce-btn-up",down:"announce-btn-down"});//公告滚动
});

//无缝滚动
function marquee(i, direction){
    var obj = document.getElementById("marquee" + i);
    var obj1 = document.getElementById("marquee" + i + "_1");
    var obj2 = document.getElementById("marquee" + i + "_2");
    if (direction == "up"){
        if (obj2.offsetTop - obj.scrollTop <= 0){
            obj.scrollTop -= (obj1.offsetHeight + 30);
        }else{
            var tmp = obj.scrollTop;
            obj.scrollTop++;
            if (obj.scrollTop == tmp){
                obj.scrollTop = 1;
            }
        }
    }else{
        if (obj2.offsetWidth - obj.scrollLeft <= 0){
            obj.scrollLeft -= obj1.offsetWidth;
        }else{
            obj.scrollLeft++;
        }
    }
}


function marqueeStart(i, direction){
    var obj = document.getElementById("marquee" + i);
    var obj1 = document.getElementById("marquee" + i + "_1");
    var obj2 = document.getElementById("marquee" + i + "_2");

    obj2.innerHTML = obj1.innerHTML;
    var marqueeVar = window.setInterval("marquee("+ i +", '"+ direction +"')", 30);
    obj.onmouseover = function(){
        window.clearInterval(marqueeVar);
    }
    obj.onmouseout = function(){
        marqueeVar = window.setInterval("marquee("+ i +", '"+ direction +"')", 30);
    }
}

//同页跳转
//首页的
$(function () {
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();
        var contentItems = $("#body").find(".item");
        var currentItem = "";

        if (scrollTop+windowHeight==documentHeight) {
            currentItem= "#" + contentItems.last().attr("id");
        }else{
            contentItems.each(function () {
                var contentItem = $(this);
                var offsetTop = contentItem.offset().top;
                if (scrollTop > offsetTop - 200) {
                    currentItem = "#" + contentItem.attr("id");
                }
            });
        }
        if (currentItem != $("#go").find(".fon2").attr("href")) {
            $("#go").find(".fon2").removeClass("fon2");
            $("#go").find("[href=" + currentItem + "]").addClass("fon2");
        }
    });
});

// 安全中心的
$(function () {
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();
        var contentItems = $(".main").find(".item");
        var currentItem = "";

        if (scrollTop+windowHeight==documentHeight) {
            currentItem= "#" + contentItems.last().attr("id");
        }else{
            contentItems.each(function () {
                var contentItem = $(this);
                var offsetTop = contentItem.offset().top;
                if (scrollTop > offsetTop - 100) {
                    currentItem = "#" + contentItem.attr("id");
                }
            });
        }
        if (currentItem != $(".til").find(".pon").attr("href")) {
            $(".til").find(".pon").removeClass("pon");
            $(".til").find("[href=" + currentItem + "]").addClass("pon");
        }
    });
});


// 产品中心的
$(function () {
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();
        var contentItems = $(".probox-content-in").find(".type-box");
        var currentItem = "";

        if (scrollTop+windowHeight==documentHeight) {
            currentItem= "#" + contentItems.last().attr("id");
        }else{
            contentItems.each(function () {
                var contentItem = $(this);
                var offsetTop = contentItem.offset().top;
                if (scrollTop > offsetTop - 100) {
                    currentItem = "#" + contentItem.attr("id");
                }
               
            });
          
        }
    
         
        if (currentItem != $(".til").find(".on").attr("href")) {
            $(".til").find(".on").removeClass("on");
            $(".til").find("[href=" + currentItem + "]").addClass("on");
        }
    });
    $(".s").click(function () {
        $(".til").find(".on").removeClass("on");
        $(this).addClass("on");
    });
});
// JavaScript Document
jQuery.fn.anchorGoWhere = function(options){
    var obj = jQuery(this);
    var defaults = {target:1, timer:300};
    var o = jQuery.extend(defaults,options);
    /*
    var scrollPos;
    if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') { 
        scrollPos = document.documentElement; 
    }else if (typeof document.body != 'undefined') { 
        scrollPos = document.body; 
    }*/

    obj.each(function(i){
        jQuery(obj[i]).click(function(){
            var _rel = jQuery(this).attr("href").substr(1);
            switch(o.target){
                case 1: 
                    var targetTop = jQuery("#"+_rel).offset().top;
                    jQuery("html,body").animate({scrollTop:targetTop}, o.timer);
                    break;
                case 2:
                    var targetLeft = jQuery("#"+_rel).offset().left;
                    jQuery("html,body").animate({scrollLeft:targetLeft}, o.timer);
                    break;
            }
            return false;
        });
    });
};

/*tab*/
function setTab(m,n){
var tli=document.getElementById("menu"+m).getElementsByTagName("li");
var mli=document.getElementById("main"+m).getElementsByTagName("ul");
for(i=0;i<tli.length;i++){
   tli[i].className=i==n?"con":"";
   mli[i].style.display=i==n?"block":"none";
}
}

/*固定区块*/
$(document).ready(function(e) {         
    t = $('.til').offset().top;
    fh = $('.til').height();
    $(window).scroll(function(e){
        s = $(document).scrollTop();    
        if(s > t - 10){
            $('.til').css('position','fixed');      
        }else{
            $('.til').css('position','');
        }
    })
});

//
$(document).ready(function(e) {         
    $(window).scroll(function(e){
        s_2 = $(document).scrollTop();    
        if(s_2 > 350){
            $('#go').css('display','block');    
        }else{
            $('#go').css('display','none');
        }none
    })
});

