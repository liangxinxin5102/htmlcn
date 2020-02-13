function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*1*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(name) {
    var cookie = " " + document.cookie;
    var search = " " + name + "=";
    var setStr = null;
    var offset = 0;
    var end = 0;
    if (cookie.length > 0) {
        offset = cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = cookie.indexOf(";", offset)
            if (end == -1) {
                end = cookie.length;
            }
            setStr = unescape(cookie.substring(offset, end));
        }
    }
    return(setStr);
}

// Detect Click in Iframe
function detectIframeClick() {
    var overiFrame = -1;

    $('#demo-iframe-holder').find('iframe').hover( function() {
        overiFrame = 1;
    }, function() {
        overiFrame = -1
    });
    $(window).on('blur', function() {
        if( overiFrame != -1 ) {
            $('#cuselBox').css('display', 'none');
            $('.select-styled').removeClass('cuselOpen');
            $('.colorpicker-wheel').addClass('hidden');
        }
    });
}
function get_colors_parameters(){
    if(TFvar.theme=='collective' || TFvar.theme=='cloudhost' || TFvar.theme=='beatheaven' || TFvar.theme=='autotrader' || TFvar.theme=='metro-vibes' || TFvar.theme=='interakt'){
        // for colopickers
        var cookie_color1 = getCookie(TFvar.theme+'_color1');
        var cookie_color2 = getCookie(TFvar.theme+'_color2');
        var suffix_link = '';
        if(cookie_color1!=null){
            suffix_link = '?color1='+cookie_color1;
            if(cookie_color2!=null) suffix_link += '&color2='+cookie_color2;
        }
        return suffix_link;
    }
    else if(TFvar.theme=='gameszone' || TFvar.theme=='conexus' || TFvar.theme=='newssetter' || TFvar.theme=='homequest' || TFvar.theme=='coffeelounge' || TFvar.theme=='writer' || TFvar.theme=='envision'){
        // for predefined colors
        var suffix_link = 'default_color';
        var predefined_color = jQuery('#color').val();
        if(predefined_color!=null && predefined_color!=''){
            suffix_link = predefined_color;
        }
        return suffix_link;
    }
    else return '';
}
function get_new_iframe_url(iframeSrc){
    var color_parameters = get_colors_parameters();
    if(color_parameters=='default_color'){
        var get_link = window.location.href;
        if( get_link.indexOf("page=") != -1 ){
            // for safari
            var res = get_link.substring(get_link.indexOf("page=")+5);
            return res;
        }

        var a = document.createElement("a");
        a.href=iframeSrc;
        var slash = '';
        if((a.pathname).charAt(0)!='/')  slash = '/';
        iframeSrc = a.protocol+'//'+a.hostname+slash+a.pathname
        return iframeSrc;
    }
    if(color_parameters!=''){
        // if exists color parameters need to create the iframe link again
        var a = document.createElement("a");
        a.href=iframeSrc;
        var slash = '';
        if((a.pathname).charAt(0)!='/')  slash = '/';
        iframeSrc = a.protocol+'//'+a.hostname+slash+a.pathname
        return iframeSrc+color_parameters;
    }
    else return iframeSrc;
}
function show_device(device, previous_device){
    var iframeContainer = $('#demo-iframe-holder');
    iframeContainer.removeClass().addClass(device);

    var screenWidth = $(window).width(),
        screenHeight = $(window).height(),
        marginTop = 0,
        marginLeft = 0;

    if(device == 'ipad-portrait') {
        marginTop = (screenHeight - 1385) < 0 ? -30 : (screenHeight - 1335) / 2 - 30;
        marginLeft = (screenWidth - 964) < 0 ? 0 : (screenWidth - 964) / 2;
    } else if (device == 'ipad-landscape') {
        marginTop = (screenHeight - 1014) < 0 ? 0 : (screenHeight - 964) / 2 - 20;
        marginLeft = (screenWidth - 1335) < 0 ? 0 : (screenWidth - 1335) / 2;
    } else if (device == 'iphone-landscape') {
        marginTop = (screenHeight - 444) < 0 ? 0 : (screenHeight - 394) / 2 - 30;
        marginLeft = (screenWidth - 815) < 0 ? 0 : (screenWidth - 815) / 2;
    } else if (device == 'iphone-portrait') {
        marginTop = (screenHeight - 865) < 0 ? 0 : (screenHeight - 815) / 2 - 30;
        marginLeft = (screenWidth - 394) < 0 ? 0 : (screenWidth - 394) / 2;
    }
    iframeContainer.css({'margin-top': marginTop, 'margin-left': marginLeft});

    var prev_device_substring = previous_device.substring(0, 4);
    var device_substring = device.substring(0, 4);

    if( (previous_device == '') || (prev_device_substring != device_substring) ) {
        //iframeContainer.one('webkitTransitionEnd mozTransitionEnd MSTransitionEnd otransitionend', function(){
        iframeContainer.one('webkitTransitionEnd mozTransitionEnd MSTransitionEnd otransitionend transitionend', function () {
            screenDimentions();

            var iframeSrc = iframeContainer.find('iframe').attr('src');
            iframeSrc = get_new_iframe_url(iframeSrc);

            iframeContainer.find('iframe').remove();
            var iframe = $('<iframe width="100%" height="100%" class="invisible-test" src="' + iframeSrc + '"></iframe>');
            //loader = $('<div class="spinner"><div class="wBall" id="wBall_1"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_2"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_3"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_4"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_5"><div class="wInnerBall"></div></div></div>');

            iframeContainer.find('.inner').append(iframe);//.append(loader);

            iframe.on('load', function () {
                //iframeContainer.find('.spinner').remove();
                //$(this).removeClass('invisible').addClass('animated fadeIn');

                // Hack To Show Custom ScrollBar
                iframeContainer.find('iframe').attr('width', '99%');
                setTimeout(function () {
                    iframeContainer.find('iframe').attr('width', '100%');
                }, 0);
                detectIframeClick();
            });
        });
    }
}
function getQueryParams () {
    function identity (e) { return e; }
    function toKeyValue (params, param) {
        var keyValue = param.split('=');
        var key = keyValue[0], value = keyValue[1];

        params[key] = params[key]?[value].concat(params[key]):value;
        return params;
    }
    return decodeURIComponent(window.location.search).
        replace(/^\?/, '').split('&').
        filter(identity).
        reduce(toKeyValue, {});
}
jQuery(document).ready(function() {
    var cookie_device = getCookie('themefuse_demo');
    var get_link = window.location.href;
    var get_device = '';
    if( get_link.indexOf("device") != -1 ){
        var get_params = getQueryParams();
        get_device = get_params.device;
    }
    if(get_device != '') cookie_device = get_device;
    if(cookie_device != null){
        jQuery('.demo-panel-responsive a.active').removeClass('active');
        var item = jQuery('.demo-panel-responsive a[data-device="'+cookie_device+'"]');
        item.addClass('active');
        if(cookie_device=='ipad-portrait' || cookie_device=='iphone-landscape'){
            item.removeClass('inactive').siblings().addClass('inactive');
        }
        show_device(cookie_device, '');
    }

    var $ = jQuery;
    var screenRes = $(window).width(),
        screenHeight = $(window).height(),
        html = $('html');

// IE<8 Warning
    if (html.hasClass("oldie")) {
        $("body").empty().html('Please, Update your Browser to at least IE8');
    }

// Remove outline in IE
    $("a, input, textarea").attr("hideFocus", "true").css("outline", "none");

// Main Slider Vertical centered controls
    var msControlsHeight = $('#main-slider .carousel-indicators').innerHeight();
    $('#main-slider .carousel-indicators').css('margin-top' , -msControlsHeight/2);

// styled Select, Radio, Checkbox
    if ($(".select-styled").length) {
        cuSel({changedEl: ".select-styled", visRows: 7});
    }

// Tabs with Doubled Bullets
    $('.tabs').on('click', '[data-toggle="tab"]', function() {
        var target = $(this).attr('href');
        $('a[href="'+target+'"]').tab('show');
    });

// prettyPhoto lightbox, check if <a> has atrr data-rel and hide for Mobiles
    if($('a').is('[data-rel]') && screenRes > 600) {
        $('a[data-rel]').each(function() {
            $(this).attr('rel', $(this).data('rel'));
        });
        $("a[rel^='prettyPhoto']").prettyPhoto({theme: 'dark_square', social_tools:false, horizontal_padding: 80});
    }

// Banners on Top
    $('#header-banners-close').on('click', function() {
        $(this).closest('.header-banners').slideUp(300);
    });

// Back To Top Button
    $(window).on('scroll', function() {

        if(parseInt($(window).scrollTop(), 10) > 600){
            $('#toTop').fadeIn(500);
        }
        else {
            $('#toTop').fadeOut(500);
        }
    });
});

// Demo Api
// --------------------------------------------------------------------------------- //

// Detect Screen Size
function screenDimentions() {
    var screenWidth = jQuery(window).width(),
        screenHeight = jQuery(window).height(),
        demoPanelHeight = jQuery('.demo-panel').height(),
        demoIframeHolder = jQuery('#demo-iframe-holder');

    demoIframeHolder.css({
        'width': screenWidth
    });

    // pt a corecta scroll-ul care apare in plus
    if(jQuery('.panel-is-close').length > 0){
        demoIframeHolder.css({
            'height': screenHeight
        });
    }
    else {
        screenHeight = screenHeight - demoPanelHeight;
        demoIframeHolder.css({
            'height': screenHeight
        });
    }
}
screenDimentions();

jQuery(window).on('resize', function(){
    setTimeout(function(){
        screenDimentions();
    }, 1000);
});

//jQuery('.spinner').removeClass('invisible');

jQuery(document).ready(function($) {
    var current_theme = TFvar.theme,
        screenWidth = $(window).width(),
        screenHeight = $(window).height(),
        intervalId;

    // Add <em> in cuSel Labels
    if ($('.demo-panel-select .select-styled').length) {
        $('.demo-panel-select .select-styled label').each(function(){
            var $this = $(this),
                text = $this.text().split('-');

            if(text[1]===undefined)
                $this.html(text[0]);
            else
                $this.html(text[0] + '<em>-' + text[1] + '</em>');
        });
    }

    // Customize sideBar
    if(screenWidth > 1199){
        $('.demo-list').niceScroll({
            autohidemode: false,
            smoothscroll: true,
            cursorborder: "none",
            cursorwidth: "7px",
            cursoropacitymin: 0.7,
            cursoropacitymax: 0.2,
            cursorcolor: "#9aa0a3",
            cursorborderradius: "7px",
            railpadding: { top: 0, right: 10, left: 5, bottom: 10 }
        });
    }

    // Animate Button DemoList
    function animateButton(){
        var animateButtonsDemo = $('.demo-list-button');
        animateButtonsDemo.addClass('animate-button');

        setTimeout(function(){
            animateButtonsDemo.removeClass('animate-button');
        }, 1500);
    }
    animateButton();
    intervalId = setInterval(animateButton, 7000);


    // Open & Close Demo List
    $('.demo-list-button').click(function(event){
        event.preventDefault();
        var button_demo_list = $(this),
            demo_list = $('.wrap-demo-list');

        // Open Function
        function openDemo(){
            demo_list.removeClass('close-list').addClass('open-list');
            button_demo_list.addClass('demo-button-open');
            button_demo_list.children('i').removeClass('icon-chevron-down').addClass('icon-chevron-up');
            $('#page').prepend('<div class="overlay-page"></div>');
        }
        // Close Function
        function closeDemo(){
            demo_list.removeClass('open-list').addClass('close-list');
            button_demo_list.removeClass('demo-button-open');
            button_demo_list.children('i').removeClass('icon-chevron-up').addClass('icon-chevron-down');
            $('.overlay-page').remove();
        }
        // Open/Close Logical
        if(button_demo_list.next(demo_list).hasClass('close-list')){
            openDemo();
            clearInterval(intervalId);
        }
        else{
            closeDemo();
            intervalId = setInterval(animateButton, 7000);
        }
        // Close Demo List if Click Outside List
        $('.overlay-page').click(function(event2){
            event2.preventDefault();
            closeDemo();
            intervalId = setInterval(animateButton, 7000);
        });
        // Close Demo List if Click on the bar
        $("#demo-panel").click(function(event2){
            var target = $( event2.target );
            if ( ! target.parents( ".demo-list-button-wrap" ).length ) {
                closeDemo();
                intervalId = setInterval(animateButton, 7000);
            }
        });
    });

    // Open Panel, Close Panel
    $('#demo-panel-close').on('click', function(e) {
        e.preventDefault();
        $('#demo-panel').addClass('closed');
        $('#panelBack').removeClass('closed');
        $('body').removeClass('panel-is-open').addClass('panel-is-close');
    });

    $('#panelBack').on('click', function(e) {
        e.preventDefault();
        $('#panelBack').addClass('closed');
        $('#demo-panel').removeClass('closed');
        $('body').removeClass('panel-is-close').addClass('panel-is-open');
    });

    detectIframeClick();

    $('#demo-panel-close, #panelBack').on('click', function(){
        var demoPanelHeight = $('#demo-panel').height(),
            screenHeight = $(window).height();

        if($(this).parents('body').hasClass('panel-is-close')){
            $('#demo-iframe-holder').css({
               'height': screenHeight
            });
        }
        else{
            $('#demo-iframe-holder').css({
                'height': screenHeight - demoPanelHeight
            });
        }
    });

    // Responsive Buttons, Iframe Control
    $('body').append('<img src="themefuse_ribon/images/ipad.png" alt="" class="hidden">' +
        '<img src="themefuse_ribon/images/ipad-landscape.png" alt="" class="hidden">' +
        '<img src="themefuse_ribon/images/iphone.png" alt="" class="hidden">' +
        '<img src="themefuse_ribon/images/iphone-landscape.png" alt="" class="hidden">');

    /*$('#demo-iframe-holder').find('iframe').on('load', function(){
     $('#demo-iframe-holder').find('.spinner').remove();
     $(this).removeClass('invisible').addClass('animated fadeIn');
     });*/

    $('.demo-panel-responsive').on('click', 'a', function(e) {
        e.preventDefault();
        var $this = $(this),
            device = $this.data('device'),
            previous_device = jQuery('.demo-panel-responsive li a.active').data('device');
        //iframeContainer = $('#demo-iframe-holder');

        /*if(!$this.hasClass('active')) {
         iframeContainer.find('iframe').addClass('invisible');
         }*/
        $this.closest('.demo-panel-responsive').find('a').removeClass('active');
        $this.removeClass('inactive').addClass('active').siblings().addClass('inactive');
        // set cookie
        //document.cookie = 'themefuse_demo' + "="+device; // this is old method
        setCookie("themefuse_demo", device, 1);
        show_device(device, previous_device);
    });

    // change theme in cusel select
    jQuery('#theme').on('change', function(){
        var val = jQuery(this).val();
        window.location.href = '?theme='+val;
    });

    // ColorPicker
    var canvas = document.getElementById('picker');
    if(canvas!=null){
        var ctx = canvas.getContext('2d');

        // drawing active image
        var image = new Image();
        image.onload = function () {
            ctx.drawImage(image, 0, 0, image.width, image.height); // draw the image on the canvas
        };
        // select desired colorwheel
        var imageSrc = 'themefuse_ribon/images/colorwheel1.png';
        switch ($(canvas).attr('var')) {
            case '2':
                imageSrc = 'themefuse_ribon/images/colorwheel2.png';
                break;
            case '3':
                imageSrc = 'themefuse_ribon/images/colorwheel3.png';
                break;
            case '4':
                imageSrc = 'themefuse_ribon/images/colorwheel4.png';
                break;
            case '5':
                imageSrc = 'themefuse_ribon/images/colorwheel5.png';
                break;
        }
        image.src = imageSrc;
    }

    $('#picker').on('mousemove', function(e) {
        // get coordinates of current position
        var canvasOffset = $(canvas).offset();
        var canvasX = Math.floor(e.pageX - canvasOffset.left);
        var canvasY = Math.floor(e.pageY - canvasOffset.top);

        // get current pixel
        var imageData = ctx.getImageData(canvasX, canvasY, 1, 1);
        var pixel = imageData.data;

        // update preview color
        var pixelColor = "rgb("+pixel[0]+", "+pixel[1]+", "+pixel[2]+")",
            colorPickerNumber = $(this).closest('.colorpicker-wheel').attr('data-colorpicker');

        $("[data-colorpicker='"+colorPickerNumber+"']").find('.colorpicker-preview').css('backgroundColor', pixelColor);

        // update controls
        /*$('#rVal').val(pixel[0]);
         $('#gVal').val(pixel[1]);
         $('#bVal').val(pixel[2]);
         $('#rgbVal').val(pixel[0]+','+pixel[1]+','+pixel[2]);*/

        var dColor = pixel[2] + 256 * pixel[1] + 65536 * pixel[0];
        $('#hexVal').val('#' + ('0000' + dColor.toString(16)).substr(-6));
    });

    // Select Color
    $('#picker').on('click', function(e) {
        var selectedValue = $('#hexVal').val(),
            colorPickerNumber = $(this).closest('.colorpicker-wheel').attr('data-colorpicker');

        $("[data-colorpicker='"+colorPickerNumber+"']").attr('val', selectedValue);
        cuselSetValue("#color", $('#cuselBox').find('.cuselItem').first().attr('val')); // Reset to first item
        //cuselSetValue("#color", selectedValue);                                         // And then put new color
        jQuery('#color').val(selectedValue).trigger('change');
    });

    $('.cuselItem').hover(function() {
        $('.colorpicker-wheel').addClass('hidden');
    });

    $('.colorpicker').hover(function() {
        var colorPickerNumber = $(this).data('colorpicker');
        $('.colorpicker-wheel').removeClass('hidden').attr('data-colorpicker', colorPickerNumber);
    });

    $('body').on('click', function() {
        $('.colorpicker-wheel').addClass('hidden');
        $('.colorpicker-preview').css('backgroundColor', $('#color').val());
        /*setTimeout(function(){
         $(".cuselItem.colorpicker").attr('val', $('#color').val()).trigger('change');
         }, 0);*/
        $('.colorpicker-preview').each(function(){
            var thisValue = $(this).closest('.colorpicker').attr('val');
            $(this).css('backgroundColor', thisValue);
        });
    });

    // --------------------------------- Apply Selected Color to iFrame ------------------------------------- //\

    var iframeSrc = $('#demo-iframe-holder').find('iframe').attr('src');

    $('body').on('change', '#color', function() {
        setTimeout(function(){
            $('.colorpicker-wheel').addClass('hidden');
        }, 0);

        // Reload Iframe
        $('#demo-iframe-holder').find('iframe').remove();

        if(current_theme=='collective' || current_theme=='cloudhost' || current_theme=='beatheaven' || current_theme=='autotrader' || current_theme=='metro-vibes' || current_theme=='interakt'){
            var color1 =jQuery('#cuselBox span[data-colorpicker="1"]').attr('val').substr(1);
            var color2 = jQuery('#cuselBox span[data-colorpicker="2"]').attr('val').substr(1);
            document.cookie = current_theme+"_color1="+color1;
            document.cookie = current_theme+"_color2="+color2;
        }
        iframeSrc = get_new_iframe_url(iframeSrc);
        var iframe = $('<iframe width="100%" height="100%" class="invisible" src="' + iframeSrc + '"></iframe>');

        var loader = $('<div class="spinner"><div class="wBall" id="wBall_1"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_2"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_3"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_4"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_5"><div class="wInnerBall"></div></div></div>');

        $('#demo-iframe-holder').find('.inner').append(iframe).append(loader);

        iframe.on('load', function(){
            $('#demo-iframe-holder').find('.spinner').remove();
            $(this).removeClass('invisible').addClass('animated fadeIn');

            // Hack To Show Custom ScrollBar
            $('#demo-iframe-holder').find('iframe').attr('width', '99%');
            setTimeout(function(){
                $('#demo-iframe-holder').find('iframe').attr('width', '100%');
            }, 0);
            detectIframeClick();
        });
    });

});