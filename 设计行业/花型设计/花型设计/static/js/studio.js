$(document).ready(function () {
    //$('.studio_cycle').cycle({
    //     startingSlide: Math.floor(Math.random()*$('.studio_cycle a').length),
    //    timeout: 6000, speed: 2000, pager: '.studio_cycle_pages'
    //});

    $('.studio_head_nav a').hover(function(){
        if(!$(this).hasClass('onon'))
        $(this).addClass('on')
    },function(){        if(!$(this).hasClass('onon')) $(this).removeClass('on')});


     $('.studio_head_icons img').hover(function(){
        if(!$(this).hasClass('onon'))
        $(this).attr('src',$(this).attr('src').replace('.png','_on.png'))
    },function(){        if(!$(this).hasClass('onon'))   $(this).attr('src',$(this).attr('src').replace('_on.png','.png'))

         });

});

function ilikestudio(uid){
    location.href = 'http://cn.walanwalan.com/do.aspx?action=addmyindex&id='+uid+'&sign=USERUSER&back=1';
}