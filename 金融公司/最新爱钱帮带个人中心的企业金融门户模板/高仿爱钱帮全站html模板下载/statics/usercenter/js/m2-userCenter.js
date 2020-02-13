var monthData;
var monthCate;
var dailyData;
var dailyCate;

$(function(){
	//日月收益切换
	$(".m2-profitChart-tit span").click(function(){
		var chartId = 'm2-chartDay'
		if ($(this).hasClass('m2-chart-unsel')){
			$(this).removeClass('m2-chart-unsel').addClass('m2-chart-sel');	
			$(this).siblings('.m2-chart-sel').removeClass('m2-chart-sel').addClass('m2-chart-unsel')
			if ($(this).hasClass('m2-chartItemtit-day')){
				$('.m2-chart-con').append('<div class="m2-chartItemuser" id="m2-chartDay"></div>');
				$('#m2-chartMonth').remove();
				loadChartday(dailyData,dailyCate);                     //加载日收益图表                
			}
			else if($(this).hasClass('m2-chartItemtit-mon')){
				$('.m2-chart-con').append('<div class="m2-chartItemuser" id="m2-chartMonth"></div>');
				$('#m2-chartDay').remove();
				loadChartmonth(monthData,monthCate);                   //加载月收益图表
			}
		}

	});
	//关闭通知按钮
	$('.m2-msgBox-close').click(function(){
		$(this).parent(".m2-msgBox").hide();
	});
});
/*----个人中心日收益线型图表----*/
function loadChartday(ddata,dcate){
    // 路径配置
    require.config({
        paths:{ 
            'echarts' : './src/echarts',
            'echarts/chart/line' : './src/echarts'
        }
    });        
    require(
        [
            'echarts',
            'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
        ],
        function loadchart(ec) {
            // 基于准备好的dom，初始化echarts图表
            myChart  = ec.init(document.getElementById('m2-chartDay')); 

            var option = {				
				    tooltip : {
				        trigger: 'axis'
				    },
				    legend: {
				        data:['日收益']
				    },
				    toolbox: {
				        show : false,
				        feature : {
				            mark : {show: true},
				            dataView : {show: true, readOnly: false},
				            magicType : {show: true, type: ['line', 'bar']},
				            restore : {show: true},
				            saveAsImage : {show: true}
				        }
				    },
				    calculable : false,
				    xAxis : [
				        {
				            type : 'category',
				            boundaryGap : false,
				            data : dcate
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value',
				            axisLabel : {
				                formatter: '{value} 元'
				            }
				        }
				    ],
				    series : [
				        {
				            name:'日收益',
				            type:'line',
				            data:ddata,
				            markLine : {
				                data : [
				                    {type : 'average', name: '平均值'}
				                ]
				            }
				        }
				    ]
			};        
	        // 为echarts对象加载数据 
	        myChart.setOption(option); 
        }          
    );
};
/*----个人中心月益线型图表----*/
function loadChartmonth(mdata,mcate){
	// 路径配置
    require.config({
        paths:{ 
            'echarts' : 'statics/usercenter/js/src/echarts',
            'echarts/chart/line' : 'statics/usercenter/js/src/echarts'
        }
    });
   // 使用
   require(
        [
            'echarts',
            'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('m2-chartMonth')); 
			var option = {
				    tooltip : {
				        trigger: 'axis'
				    },
				    legend: {
				        data:['月收益']
				    },
				    toolbox: {
				        show : false,
				        feature : {
				            mark : {show: true},
				            dataView : {show: true, readOnly: false},
				            magicType : {show: true, type: ['line', 'bar']},
				            restore : {show: true},
				            saveAsImage : {show: true}
				        }
				    },
				    calculable : false,
				    xAxis : [
				        {
				            type : 'category',
				            boundaryGap : false,
				            data : mcate
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value',
				            axisLabel : {
				                formatter: '{value} 元'
				            }
				        }
				    ],
				    series : [
				        {
				            name:'月收益',
				            type:'line',
				            data:mdata,
				            markLine : {
				                data : [
				                    {type : 'average', name: '平均值'}
				                ]
				            }
				        }
				    ]
			};        
            // 为echarts对象加载数据 
            myChart.setOption(option); 
        }          
    );
};

