$(function(){
	        var container = document.querySelector('#slider-list');
    var temp = document.querySelector('#temp');
    var elems = temp.querySelectorAll('.slider-item');
    var msnry = new Masonry( container);


    var imgs = $("#temp").find('img');
    imgs.one("load", function() {

        var item = $(this).closest('.slider-item');
        console.log(item);
        item.appendTo(container);
        msnry.appended(item[0]);
        msnry.layout();
    }).each(function() {
        if(this.complete){
            $(this).load();
        }
    });
	    });

$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'fade',
		closeEffect	: 'fade',
		index: 1200
	});
});