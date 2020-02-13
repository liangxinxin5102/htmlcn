$(function(){

    $("#slider-1").find('.thumb').each(function(){
        var img = $(this).css('background-image').match(/url\(\"(.*?)\"\)/)[1];
        $(this).html('<img src="'+img+'" />');
    });
    $("#slider-2").find('.thumb').each(function(){
        var img = $(this).css('background-image').match(/url\(\"(.*?)\"\)/)[1];
        $(this).html('<img src="'+img+'" />');
    });
    $("#slider-3").find('.thumb').each(function(){
        var img = $(this).css('background-image').match(/url\(\"(.*?)\"\)/)[1];
        $(this).html('<img src="'+img+'" />');
    });

});


