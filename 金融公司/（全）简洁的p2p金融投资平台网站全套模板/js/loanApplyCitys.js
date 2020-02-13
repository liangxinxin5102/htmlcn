$(function(){
	citys = [
			["2108"	,	"安庆"],
			["1003"	,	"鞍山"],
			["1606"	,	"保定"],
			["1"	,	"北京"],
			["811"	,	"常州"],
			["1201"	,	"成都"],
			["1002"	,	"大连"],
			["510"	,	"东莞"],
			["513"	,	"佛山"],
			["601"	,	"福州"],
			["1107"	,	"赣州"],
			["501"	,	"广州"],
			["2601"	,	"贵阳"],
			["2001"	,	"哈尔滨"],
			["701"	,	"杭州"],
			["2101"	,	"合肥"],
			["19"	,	"吉林"],
			["901"	,	"济南"],
			["909"	,	"济宁"],
			["707"	,	"金华"],
			["1405"	,	"荆州"],
			["2501"	,	"昆明"],
			["914"	,	"临沂"],
			["2311"	,	"柳州"],
			["1503"	,	"洛阳"],
			["1206"	,	"绵阳"],
			["1101"	,	"南昌"],
			["801"	,	"南京"],
			["2310"	,	"南宁"],
			["809"	,	"南通"],
			["702"	,	"宁波"],
			["902"	,	"青岛"],
			["605"	,	"泉州"],
			["602"	,	"厦门"],
			["2"		,	"上海"],
			["1111"	,	"上饶"],
			["706"	,	"绍兴"],
			["502"	,	"深圳"],
			["1001"	,	"沈阳"],
			["1601"	,	"石家庄"],
			["813"	,	"苏州"],
			["710"	,	"台州"],
			["1701"	,	"太原"],
			["1602"	,	"唐山"],
			["3"	,	"天津"],
			["906"	,	"潍坊"],
			["703"	,	"温州"],
			["812"	,	"无锡"],
			["2102"	,	"芜湖"],
			["1401"	,	"武汉"],
			["3114"	,	"西安"],
			["907"	,	"烟台"],
			["807"	,	"扬州"],
			["1406"	,	"宜昌"],
			["1901"	,	"长春"],
			["2201"	,	"长沙"],
			["810"	,	"镇江"],
			["1501"	,	"郑州"],
			["4"	,	"重庆"],
			["903"	,	"淄博"]
	];
	
	var csDd=$('.citySelect dl dd');
	if (csDd.size() > 0) {
		var cityArray = [];
		for (var index = 0, length =  citys.length; index < length; index++) {
			var city = citys[index];
			var cityHtml = '<a href="javascript:void(0);" value="' + city[0] +'">' + city[1] + '</a>';
			cityArray.push(cityHtml);
		}
		csDd.html(cityArray.join(""));
	}
	
	//地址select
	var csDt=$('.citySelect dl dt');
	var csDd=$('.citySelect dl dd a');
	csDt.on('click',function(){
		var oC=$(this).siblings('dd');
		if(oC.is(':visible')){
			oC.hide();
		}else{
			oC.show();
		}
		return false;
	});
	
	$(document).on('click',function(){
		csDt.siblings().hide();
	});
	
	csDd.live("click", function(){
		var _index=($(this).html());
		
		var cityCode = $(this).attr("value");
		
		$("#city").val(cityCode);
		$("#city").attr("c-data",$(this).html());
		
		if ($("#cityError").size() > 0) {
			$("#cityError").addClass("hidden").removeClass("error_2").html("");
		}
		
		csDt.html('<i></i><span class="sp">'+_index+'</span>');
		setTimeout(function(){
				csDt.siblings('dd').hide();
		});
	});
});