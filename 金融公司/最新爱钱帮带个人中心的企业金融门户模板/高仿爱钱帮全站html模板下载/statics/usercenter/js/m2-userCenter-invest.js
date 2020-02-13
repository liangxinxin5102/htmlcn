$(function () {
    //加载图表
    manageChartmot(investdata);
    manageChartlev(capitalprogress);

    startDatepicker();    //加载起始时间日历
    endDatepicker();      //加载结束时间日历

    //搜索选择器按钮
    $(".m2-manageSearchsel-link1 span").click(function () {
        $("#m2-manSeadate-start,#m2-manSeadate-end").val('');
        if ($(this).hasClass('m2-manSealink-unsel')) {
            $('.m2-manageSearchsel-time1 span').removeClass('m2-manSealink-sel');
            $('.m2-manageSearchsel-time1 span').addClass('m2-manSealink-unsel');
            $(this).removeClass('m2-manSealink-unsel');
            $(this).addClass('m2-manSealink-sel');
            $(this).parent('.m2-manageSearchsel-link1').siblings().children('.m2-manSealink-sel').addClass('m2-manSealink-unsel');
            $(this).parent('.m2-manageSearchsel-link1').siblings().children('.m2-manSealink-sel').removeClass('m2-manSealink-sel');
        }
        $('.nowpages').val(1);
        var seachdata = searchdata();
        seachdata['nowpage'] = 0;
        seachdata['pagesize'] = 10;
        $.ajax({
            type: "POST",
            url: '/Usercenter-Investcontrol-investsearch',
            dataType: 'json',
            data: seachdata,
            success: function (data) {
                $('.m2-userInevst-pro,.m2-userTable-noData').remove();
                $(data['html']).insertAfter('.m2-userInevst-head');
                if (data.pages > 0 && data.pages == 10) {
                    $(".m2-manageResult-sum span").addClass('m2-manageResult-more');
                    $(".m2-manageResult-sum span").html('加载更多');
                    $(".m2-manageResult-sum span").css('color', '#fff');
                    $('.m2-manageResult-sum').show();
                } else {
                    $('.m2-manageResult-sum').hide();
                }
                fitBottom();
            }
        });
    });
//新加过滤按钮
    $(".m2-manageSearchsel-link2 span").click(function () {
        $("#m2-manSeadate-start,#m2-manSeadate-end").val('');
        if ($(this).hasClass('m2-manSealink-unsel')) {
            $('.m2-manageSearchsel-time2 span').removeClass('m2-manSealink-sel');
            $('.m2-manageSearchsel-time2 span').addClass('m2-manSealink-unsel');
            $(this).removeClass('m2-manSealink-unsel');
            $(this).addClass('m2-manSealink-sel');
            $(this).parent('.m2-manageSearchsel-link2').siblings().children('.m2-manSealink-sel').addClass('m2-manSealink-unsel');
            $(this).parent('.m2-manageSearchsel-link2').siblings().children('.m2-manSealink-sel').removeClass('m2-manSealink-sel');
        }
        $('.nowpages').val(1);
        var seachdata = searchdata();
        seachdata['nowpage'] = 0;
        seachdata['pagesize'] = 10;
        $.ajax({
            type: "POST",
            url: '/Usercenter-Investcontrol-investsearch',
            dataType: 'json',
            data: seachdata,
            success: function (data) {
                $('.m2-userInevst-pro,.m2-userTable-noData').remove();
                $(data['html']).insertAfter('.m2-userInevst-head');
                if (data.pages > 0 && data.pages == 10) {
                    $(".m2-manageResult-sum span").addClass('m2-manageResult-more');
                    $(".m2-manageResult-sum span").html('加载更多');
                    $(".m2-manageResult-sum span").css('color', '#fff');
                    $('.m2-manageResult-sum').show();
                } else {
                    $('.m2-manageResult-sum').hide();
                }
                fitBottom();
            }
        });
    });
    
    $(".m2-manageSearchsel-link3 span").click(function () {
        $("#m2-manSeadate-start,#m2-manSeadate-end").val('');
        if ($(this).hasClass('m2-manSealink-unsel')) {
            $('.m2-manageSearchsel-time3 span').removeClass('m2-manSealink-sel');
            $('.m2-manageSearchsel-time3 span').addClass('m2-manSealink-unsel');
            $(this).removeClass('m2-manSealink-unsel');
            $(this).addClass('m2-manSealink-sel');
            $(this).parent('.m2-manageSearchsel-link3').siblings().children('.m2-manSealink-sel').addClass('m2-manSealink-unsel');
            $(this).parent('.m2-manageSearchsel-link3').siblings().children('.m2-manSealink-sel').removeClass('m2-manSealink-sel');
        }
        $('.nowpages').val(1);
        var seachdata = searchdata();
        seachdata['nowpage'] = 0;
        seachdata['pagesize'] = 10;
        $.ajax({
            type: "POST",
            url: '/Usercenter-Investcontrol-investsearch',
            dataType: 'json',
            data: seachdata,
            success: function (data) {
                $('.m2-userInevst-pro,.m2-userTable-noData').remove();
                $(data['html']).insertAfter('.m2-userInevst-head');
                if (data.pages > 0 && data.pages == 10) {
                    $(".m2-manageResult-sum span").addClass('m2-manageResult-more');
                    $(".m2-manageResult-sum span").html('加载更多');
                    $(".m2-manageResult-sum span").css('color', '#fff');
                    $('.m2-manageResult-sum').show();
                } else {
                    $('.m2-manageResult-sum').hide();
                }
                fitBottom();
            }
        });
    });
    

    $(".m2-manageResult-more").click(function () {
        var seachdata = searchdata();
        seachdata['pagesize'] = 10;
        seachdata['nowpage'] = $('.nowpages').val() * seachdata['pagesize'];

        $nextpage = parseInt($('.nowpages').val()) + 1;
        $('.nowpages').val($nextpage);
        $.ajax({
            type: "POST",
            url: '/Usercenter-Investcontrol-investsearch',
            dataType: 'json',
            data: seachdata,
            success: function (data) {
                if (data.pages > 0) {
                    $(data['html']).insertBefore('.m2-manageResult-sum');
                    $(".m2-manageResult-sum span").addClass('m2-manageResult-more');
                    $(".m2-manageResult-sum span").html('加载更多');
                    $(".m2-manageResult-sum span").css('color', '#fff');
                } else {
                    $(".m2-manageResult-sum span").removeClass('m2-manageResult-more');
                    $(".m2-manageResult-sum span").html('记录已止，等待再一次超越!');
                    $(".m2-manageResult-sum span").css('color', '#868686');
                }
                fitBottom();
            }
        });
    });

});
function searchdata() {
    $timeindex = $('.m2-manageSearchsel-time1 .m2-manSealink-sel').parent().index() + 1;
    var p = {};
    switch ($timeindex) {
        case 3:
            p['seprate_time'] = 7;
            break;
        case 4:
            p['seprate_time'] = 30;
            break;
        case 5:
            p['seprate_time'] = 90;
            break;
        default:
            p['seprate_time'] = 0;
    }
    var index = $('.m2-manageSearchsel-time2 .m2-manSealink-sel').parent().index() + 1;
    switch (index) {
        case 3:
            p['type'] = 1;
            break;
        case 4:
            p['type'] = 2;
            break;
        case 5:
            p['type'] = 3;
            break;
        default:
            p['type'] = 0;
    }
    var invest_type=$('.m2-manageSearchsel-time3 .m2-manSealink-sel').parent().index() + 1;
    switch (invest_type) {
    case 3:
        p['invest_type'] = 1;
        break;
    case 4:
        p['invest_type'] = 2;
        break;
    default:
        p['invest_type'] = 0;
}
    p['start'] = $('#m2-manSeadate-start').val();
    p['end'] = $('#m2-manSeadate-end').val();
    return p;
}
function manageChartmot(data) {
    require.config({
        paths: {
            'echarts': 'statics/usercenter/js/src/echarts',
            'echarts/chart/pie': 'statics/usercenter/js/src/echarts'
        }
    });
    // 使用
    require(
            [
                'echarts',
                'echarts/chart/pie'  // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('m2-manageChart-mot'));

                var option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c}元 ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'right',
                        y: 'center',
                        data: ['超短期<=90天', '短期>90天', '长期>180天']

                    },
                    color: ['#e64648', '#fec05b', '#6495ed'],
                    toolbox: {
                        show: false,
                    },
                    calculable: false,
                    series: [
                        {
                            name: '投资明细',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    }
                                },
                                emphasis: {
                                    label: {
                                        show: true,
                                        position: 'center',
                                        textStyle: {
                                            fontSize: '18',
                                            fontWeight: 'normal',
                                            fontFamily: '微软雅黑'
                                        }
                                    }
                                }
                            },
                            data: [
                                {value: data[0], name: '超短期<=90天'},
                                {value: data[1], name: '短期>90天'},
                                {value: data[2], name: '长期>180天'}
                            ]
                        }
                    ]
                };

                // 为echarts对象加载数据 
                myChart.setOption(option);
            }
    );
}


function manageChartlev(data) {
    require.config({
        paths: {
            'echarts': 'js/src/echarts',
            'echarts/chart/pie': 'js/src/echarts'
        }
    });
    // 使用
    require(
            [
                'echarts',
                'echarts/chart/pie'  // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('m2-manageChart-lev'));

                var option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'right',
                        y: 'center',
                        data: ['已回款', '回款中']

                    },
                    color: ['#48c1b8', '#9b9cb3'],
                    toolbox: {
                        show: false,
                    },
                    calculable: false,
                    series: [
                        {
                            name: '回款进度',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    }
                                },
                                emphasis: {
                                    label: {
                                        show: true,
                                        position: 'center',
                                        textStyle: {
                                            fontSize: '18',
                                            fontWeight: 'normal',
                                            fontFamily: '微软雅黑'
                                        }
                                    }
                                }
                            },
                            data: [
                                {value: data[0], name: '已回款'},
                                {value: data[1], name: '回款中'}
                            ]
                        }
                    ]
                };

                // 为echarts对象加载数据 
                myChart.setOption(option);
            }
    );
}


/*起始时间日历*/
function startDatepicker() {
    $('#m2-manSeadate-start').datetimepicker({
        lang: 'ch',
        timepicker: false,
        format: 'Y-m-d',
        allowBlank: true,
        onShow: function () {
//    	$('.m2-manageSearchsel-time li span').removeClass('m2-manSealink-sel');
        },
        onClose: function () {
            $('.m2-manageSearchsel-time li span').removeClass('m2-manSealink-sel');
            $('.m2-manageSearchsel-time li span').addClass('m2-manSealink-unsel');
            if ($('#m2-manSeadate-start').val() == 0 && $('#m2-manSeadate-end').val() == 0) {
                $('.m2-manageSearchsel-time li span').eq(0).removeClass('m2-manSealink-unsel');
                $('.m2-manageSearchsel-time li span').eq(0).addClass('m2-manSealink-sel');
            }
            var seachdata = searchdata();
            seachdata['nowpage'] = 0;
            seachdata['pagesize'] = 10;
            $.ajax({
                type: "POST",
                url: '/Usercenter-Investcontrol-investsearch',
                dataType: 'json',
                data: seachdata,
                success: function (data) {
                    $('.m2-userInevst-pro,.m2-userTable-noData').remove();
                    $(data['html']).insertAfter('.m2-userInevst-head');
                    fitBottom();
                }
            });
        }
    });
}
;

/*结束时间日历*/
function endDatepicker() {
    $('#m2-manSeadate-end').datetimepicker({
        lang: 'ch',
        timepicker: false,
        format: 'Y-m-d',
        allowBlank: true,
        onShow: function () {
//	   $('.m2-manageSearchsel-time li span').removeClass('m2-manSealink-sel');
        },
        onClose: function () {
            $('.m2-manageSearchsel-time li span').removeClass('m2-manSealink-sel');
            $('.m2-manageSearchsel-time li span').addClass('m2-manSealink-unsel');
            if ($('#m2-manSeadate-start').val() == 0 && $('#m2-manSeadate-end').val() == 0) {
                $('.m2-manageSearchsel-time li span').eq(0).removeClass('m2-manSealink-unsel');
                $('.m2-manageSearchsel-time li span').eq(0).addClass('m2-manSealink-sel');
            }
            var seachdata = searchdata();
            seachdata['nowpage'] = 0;
            seachdata['pagesize'] = 10;
            $.ajax({
                type: "POST",
                url: '/Usercenter-Investcontrol-investsearch',
                dataType: 'json',
                data: seachdata,
                success: function (data) {
                    $('.m2-userInevst-pro,.m2-userTable-noData').remove();
                    $(data['html']).insertAfter('.m2-userInevst-head');
                    fitBottom();
                }
            });
        }
    });
}
;