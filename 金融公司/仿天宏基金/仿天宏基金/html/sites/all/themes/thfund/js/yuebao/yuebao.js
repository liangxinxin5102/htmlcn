jQuery(document).ready(function(){
    jQuery('#checknum_image').hide();
    jQuery('#checknum').click(function(){
        if(jQuery(this).hasClass('image-hide')){
            jQuery('#checknum_image').hide();
            jQuery(this).removeClass('image-hide');
        }else{
            jQuery(this).addClass('image-hide');
            jQuery('#checknum_image').show();
        }

    });
    var stars = 400;
    var $stars = jQuery('.stars');
    var r = 800;
    for (var i = 0; i < stars; i++) {
        if (window.CP.shouldStopExecution(1)) {
            break;
        }
        var $star = jQuery('<div/>').addClass('star');
        $stars.append($star);
    }
    window.CP.exitedLoop(1);
    jQuery('.star').each(function () {
        var cur = jQuery(this);
        var s = 0.2 + Math.random() * 1;
        var curR = r + Math.random() * 300;
        cur.css({
            transformOrigin: '0 0 ' + curR + 'px',
            transform: ' translate3d(0,0,-' + curR + 'px) rotateY(' + Math.random() * 360 + 'deg) rotateX(' + Math.random() * -50 + 'deg) scale(' + s + ',' + s + ')'
        });
    });

    var circle1 = new circleDonutChart('myStat11');
    var circle2 = new circleDonutChart('myStat12');
    var circle3 = new circleDonutChart('myStat13');
    var circle4 = new circleDonutChart('myStat14');
    circle1.draw({end:76.2,start:0, maxValue:100, titlePosition:"outer-top", titleText:"", outerCircleColor:'#14b9d6', innerCircleColor:'#323a45'});
    circle2.draw({end:89.3,start:0, maxValue:100, titlePosition:"outer-top", titleText:"", outerCircleColor:'#14b9d6', innerCircleColor:'#323a45'});
    circle3.draw({end:50.1,start:0, maxValue:100, titlePosition:"outer-top", titleText:"", outerCircleColor:'#14b9d6', innerCircleColor:'#323a45'});
    circle4.draw({end:70.2,start:0, maxValue:100, titlePosition:"outer-top", titleText:"", outerCircleColor:'#14b9d6', innerCircleColor:'#323a45'});



    jQuery('#myStat').circliful();
    jQuery('#myStat2').circliful();
    jQuery('#myStat3').circliful();
    jQuery('#myStat4').circliful();

    // var storage = window.localStorage;
    // var start_date = document.dayily_return.dreturn_buy_date.value;
    // start_date = start_date[0].toString()+start_date[1]+start_date[2]+start_date[3]+start_date[5]+start_date[6]+start_date[8]+start_date[9];

    // var end_date = document.range_return.range_date.value;
    // var second_start_date = end_date[0].toString()+end_date[1]+end_date[2]+end_date[3]+end_date[5]+end_date[6]+end_date[8]+end_date[9];
    // end_date = end_date[13].toString()+end_date[14]+end_date[15]+end_date[16]+end_date[18]+end_date[19]+end_date[21]+end_date[22];

    // jQuery.ajax({
    //     url: '/thfund/incomeunit/api?start_date='+start_date,
    //     type:'GET',
    //     success:function(data){
    //         storage.setItem("incomeunit_part",data);
    //     }
    // });
    // jQuery.ajax({
    //     url: '/thfund/incomeunit/api?start_date='+second_start_date+'&end_date='+end_date,
    //     type:'GET',
    //     success:function(data){
    //         storage.setItem("incomeunit_whole",data);
    //     }
    // });
    jQuery(".animate-btn").on("click", function(){
        number = number + parseFloat((Math.random() * 1000));
        jQuery.animateToPrice(number);
    });

    function startRequest(){
        number = number + parseFloat((Math.random() * 1000));
        jQuery.animateToPrice(number);
    }

    var number = parseInt(Drupal.settings.thfund.yuebao_num);
    number = number + parseFloat((Math.random() * 1000));
    jQuery.animateToPrice(number);
    setInterval(function(){
        number = number + parseFloat((Math.random() * 1000));
        jQuery.animateToPrice(number);
    },3000);
    jQuery('.vertical-slider').unslider({
        speed: 300,
        delay: 2000,
        keys: false,
        arrows: true,
        nav: false,
        animation: 'vertical',
        autoplay: false,
        infinite: true
    });
    var options = {useEasing : true, useGrouping : true,separator : ',',decimal : '.', prefix : '', suffix : ''};
    var demo = new CountUp("balance_bao_num149", 146434341, 149000000, 0, 4434341, options);
    demo.start();
});

//yuebao section2
var d = new Date();
var today = d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate();

jQuery.ajax({
    url: 'thfund/yuebao/api',
    type:'GET',
    success:function(data){
        var x_array = new Array();
        var x_array_new = new Array();
        x_array[0] = 'x';
        var y_array = new Array();
        var y_array_new = new Array();
        y_array[0] = "历史累计收益";
        var storage = window.localStorage;

        data.forEach(function(value){
            x_array.push(value['season']);
            x_array_new.push(value['season']);
            y_array.push(value['income_total']);
            y_array_new.push(value['income']);
        });
        //console.log(y_array);
        storage.setItem("yuebao_data_season",JSON.stringify(x_array_new));
        storage.setItem("yuebao_data_",JSON.stringify(y_array_new));
        //console.log(y_array);
        var chart = c3.generate({
            data: {
                x: 'x',
                columns: [
                    x_array,
                    y_array
                ],
                type: 'area-spline'
            },
            axis : {
                x : {
                    width: '1050',
                    type : 'category',
                    tick: {
                        fit: true,
                        format: "%Y-%m"
                    }
                },
                y : {
                    tick: {
                        format: d3.format(",'亿元'") // ADD
                    }
                }
            },
            grid: {
                x: { show: false },
                y: { show: true },
                focus: { show: true }

            },
            tooltip: {
                init: {
                    show: false,
                    x: 2,
                    position: {
                        top: '100px',
                        left: '290px'
                    }
                },
                show: true
            },
            area: {
                zerobased: true
            },
            tooltip: {
                format: {
                    // title: function (d) { return 'Data ' + d; },
                    value: function (value, ratio, id) {
                        var format = d3.format(',');
                        var season = format(value);
                        return round2Fixed(season)+"亿元";
                    }
                }
            }
        });

        function round2Fixed(value) {
          value = +value;
          if (isNaN(value))
            return NaN;
          // Shift
          value = value.toString().split('e');
          value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + 2) : 2)));
          // Shift back
          value = value.toString().split('e');
          return (+(value[0] + 'e' + (value[1] ? (+value[1] - 2) : -2))).toFixed(2);
        }

        setTimeout(function () {
            chart.tooltip.show({ index: 9});
        }, 1000);
    }
});


//http://www.daterangepicker.com/
//http://blog.csdn.net/zdx1515888659/article/details/41675555
//收益计算
jQuery('input[name="dreturn_buy_date"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        maxDate:today,
        locale : {
            applyLabel : '确定',
            format: 'YYYY/MM/DD',
            cancelLabel : '取消',
            fromLabel : '起始时间',
            toLabel : '结束时间',
            customRangeLabel : '自定义',
            daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],
            monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月',
                '七月', '八月', '九月', '十月', '十一月', '十二月' ],
            firstDay : 1
        }
    },
    function(start, end, label) {
        var start_date = start.format('YYYYMMDD');
        var storage = window.localStorage;
        jQuery.ajax({
            url: '/thfund/incomeunit/api?start_date='+start_date,
            type:'GET',
            success:function(data){
                storage.setItem("incomeunit_part",data);
            }
        })
    });
jQuery('#range_date').daterangepicker({
        showDropdowns: true,
        maxDate:moment(),
        locale : {
            applyLabel : '确定',
            format: 'YYYY/MM/DD',
            cancelLabel : '取消',
            fromLabel : '起始时间',
            toLabel : '结束时间',
            customRangeLabel : '自定义',
            daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],
            monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月',
                '七月', '八月', '九月', '十月', '十一月', '十二月' ],
            firstDay : 1
        }
    },
    function(start, end, label) {
        var start_date = start.format('YYYYMMDD');
        var end_date = end.format('YYYYMMDD');
        var storage = window.localStorage;
        jQuery.ajax({
            url: '/thfund/incomeunit/api?start_date='+start_date+'&end_date='+end_date,
            type:'GET',
            success:function(data){
                storage.setItem("incomeunit_whole",data);
            }
        })
    });


function dailyReturn(){
    var storage = window.localStorage;
    var amount=document.dayily_return.dreturn_buy_amount.value;
    var date=document.dayily_return.dreturn_buy_date.value;
    var rate = storage.getItem("incomeunit_part");
    if (amount==""){

        alert("请输入购买金额!");

        document.dayily_return.dreturn_buy_amount.focus();

        window.event.returnValue = false;

        return

    }

    if(isNaN(amount)){

        alert("请输入数字!");

        document.dayily_return.dreturn_buy_amount.focus();

        window.event.returnValue = false;

        return

    }

    if(amount<=0){

        alert("请正确输入!");

        document.dayily_return.dreturn_buy_amount.focus();

        window.event.returnValue = false;

        return

    }

    if (date==""){

        alert("请选择日期!");

        document.dayily_return.dreturn_buy_date.focus();

        window.event.returnValue = false;

        return

    }

    var result=amount/10000*rate;
    result2=result.toFixed(2);
    document.getElementById('dreturnTextBox').innerHTML = result2;

    window.event.returnValue = false;

}


function rangeReturn(){
    var storage = window.localStorage;
    var range_amount2=document.range_return.range_amount.value;

    var date=document.range_return.range_date.value;

    var range_rate= storage.getItem("incomeunit_whole");;

    if (range_amount2==""){

        alert("请输入购买金额!");

        document.range_return.range_amount.focus();

        window.event.returnValue = false;

        return

    }

    if(isNaN(range_amount2)){

        alert("请输入数字!");

        document.range_return.range_amount.focus();

        window.event.returnValue = false;

        return

    }

    if(range_amount2<=0){

        alert("请正确输入!");

        document.range_return.range_amount.focus();

        window.event.returnValue = false;

        return

    }

    if (date==""){

        alert("请选择日期!");
        document.range_return.range_date.focus();
        window.event.returnValue = false;
        return

    }
    var result=range_amount2/10000*range_rate;
    result4=result.toFixed(2);
    document.getElementById('rangeTextBox').innerHTML = result4;

    window.event.returnValue = false;

}