$(function() {
    jQuery('.caseDemo a.itemA').bind('click', function(e) {
    var $this = jQuery(this);
    var num = jQuery(".caseDemo a.itemA").index($this);
    var thisImg = ".caseDemo a.itemA";
    openshowImg(num, thisImg);
  });    
    
  jQuery('.teamDemo').slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 860,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }]
  });
  jQuery('.teamDemo a.itemA').bind('click', function(e) {
    var $this = jQuery(this);
    var num = jQuery(".teamDemo a.itemA").index($this);
    var thisImg = ".teamDemo a.itemA";
    openshowImg(num, thisImg);
  });
  jQuery('.honorDemo').slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 860,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }]
  });
  jQuery('.honorDemo a.itemA').bind('click', function(e) {
    var $this = jQuery(this);
    var num = jQuery(".honorDemo a.itemA").index($this);
    var thisImg = ".honorDemo a.itemA";
    openshowImg(num, thisImg);
  });
  var proItem1 = 0,
    proItem2 = 0;
  jQuery(".processTop .item").each(function() {
    proItem1 = proItem1 + jQuery(this).outerWidth() + 100;
  });
  jQuery(".processBot .item").each(function() {
    proItem2 = proItem2 + jQuery(this).outerWidth() + 100;
  });
  if (!isMobile) {
    if (proItem1 > proItem2) {
      jQuery(".process-item").width(proItem1);
    } else {
      jQuery(".process-item").width(proItem2);
    }
    var nicesx = $(".processSroll").niceScroll(".processSroll .process-item", {
      touchbehavior: true,
      cursorcolor: "#4a4a4a",
      background: "#4a4a4a",
      cursoropacitymax: 1,
      cursorwidth: 0,
      cursorborderradius: 0,
      usetransition: true,
      hwacceleration: true,
      autohidemode: "hidden",
      cursordragontouch: false,
      rtlmode: "auto",
      sensitiverail: true,
      cursordragontouch: true
    });
  }
  window.onload = function() {
    getHash();
  }
})