$(function(){
    /***Page-Swiper*/
    swiperHome = new Swiper("#swiperH5", {
        paginationClickable: false,
        direction: "vertical",
        speed: 350,
        resistance: true,
        resistanceRatio: 0,
        onSlideChangeStart: function (swiper) {
            if(swiper.activeIndex == 4) { //Logo cut
                $(".home-foot-arrow").hide();   //2015-12-9 randan add
                compLogoCut();
            } else {
                $(".home-foot-arrow").show();   //2015-12-9 randan add
                clearTimeout(compLogoCut.time);
            }
        },
        onSlideChangeEnd: function(swiper){
            if(swiper.activeIndex == 1) { //数字滚动-Start
                digit();
            }
        }
    });

    /***About-Swiper*/
    $("#swiperAbout").swiper({
        paginationClickable: false,
        pagination: '.swiper-pagination',
        speed: 300,
        slidesPerView: "auto",
    });

    $(window).on("load resize", function(){
        joinLineHeight(); //Join line height
    });
});


/***Digit num*/
var digit = function(){
    digit.num1.reset();
    digit.num2.reset();
    digit.num1.start();
    digit.num2.start();
};
digit.options = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
    prefix: '',
    suffix: ''
};
digit.num1 =  new CountUp("digitNum1", 0, 126000, 0, 1.5, digit.options);
digit.num2 =  new CountUp("digitNum2", 0, 2400000, 0, 1.5, digit.options);


/***Join line height*/
function joinLineHeight(){
    var _box = $("#listJoin").find("div");
    _box.css("lineHeight", _box.height()+"px");
}


/***Logo cut*/
var compLogoCut = {};
compLogoCut = function(){
    var _box    = $("#lis"),
        _ite    = _box.find("li").find("span"),
        speed   = 3000, //U.ms
        isFsh   = true,
        TIME    = 0,
        aryTmp  = new Array(),
        imgLen  = 36,
        sign = true;

    var m = {
        random: function(len){
            return parseInt(Math.random() * len);
        },
        delay: function(i, t){
            TIME = setTimeout(function(){
                var sign = true;
                do{
                    idx = m.random(imgLen) + 1;
                    sign = m.redo(idx);
                } while(sign);
                m.load(i, idx, i == _ite.length - 1);
            }, t);
        },
        redo: function(idx){
            var sign = false;
            for(var i in aryTmp){
                if(aryTmp[i] == idx) {
                    sign = true;
                    break;
                }
            }
            if(!sign) {
                aryTmp.push(idx);
            }
            return sign;
        },
        load: function(i, idx, isEnd){
            var image = new Image();
            image.onload = function() {
                _ite.eq(i).css("backgroundImage", "url(images/5/" + idx + ".png)");
                if(isEnd) {
                    isFsh = true;
                    clearTimeout(TIME);
                    aryTmp.length = 0;
                }
            };
            image.onerror = function(){
                return false;
            };
            setTimeout(function(){
                image.src = "images/5/" + idx + ".png";
            }, 50);
        },
        auto: function(){
            var t = 0;
            if(sign) {
                sign = false;
                for(var i=0; i<_ite.length; i++) {
                    m.delay(i, t += 150);
                }
            } else {
                sign = true;
                for(var i=_ite.length - 1; i>=0; i--) {
                    m.delay(i, t += 150);
                }
            }
            compLogoCut.time = setTimeout(function(){ m.auto();}, speed);
        }
    };

    compLogoCut.time = setTimeout(function(){ m.auto();}, 600);
};
compLogoCut.time = 0;