// JavaScript Document
var unloginSelectedCarModelId = getCookie('uncmodelid');
var unloginSelectedCarModelName = getCookie('uncmodelname');
var uncmodelimg = getCookie('uncmodelimg');
var uncmodelbrand = getCookie('uncmodelbrand');
var submitCarModelResponse = function(){
	var contents = $.trim($('input[name=car_model_response]').val());
	if(!contents){
		$.notice('请输入您的车型!', 'error');
		return false;
	}

	$.post(urlCmy('car', 'newCarModel'), {'contents':contents}, function(){
		$.notice('您的车型已提交到后台!');
	});
	
}

var CarType ={
	ajaxUrl :"",
	key :[],
	choose : []	
}

$('.sel_stepbox .cur').live('click', function(){
	var step = $(this).find('em').text();
	var type = '';
	if(step == 1){
		type = 'brand';
	}else if(step == 2){
		type = 'series';
	}else if(step == 3){
		type = 'year';
	}

	if(!type) return;
	if($('.sel_mainbox:visible').find(".cartype a:eq(" + parseInt(step-1) + ")").length){
		$('.sel_mainbox:visible').find(".cartype a:eq(" + parseInt(step-1) + ")").trigger('click');
	}
	
}); 
function jsonpCallback2(data){
	$('#selected_car_logs').html(data);
}
$(function(){
	
	function brandBox(firstWord){
		if(!firstWord){
			firstWord = 'hot';
		}
		$('#car_info_brands_list').load(urlCmy('car', 'new_load', 'ajax=1&type=brand&firstWord=' + firstWord));
	}
	$(".choose_car_model_btn").colorbox({href:'#selectcarbox', inline:true, width:"810px",title:"请选择您的车辆信息",opacity:0.3});
	$('.choose_car_model_btn').live('click', function(){
		brandBox('hot');
		// 浏览车型记录
		//$('#selected_car_logs').load(urlCmy('car', 'getChoosedLogs','&ajax=1'));
		$.ajax({
				type:"POST",
				url:urlCmy('car', 'getChoosedLogs','&ajax=1&ec_post=1'),
				dataType:"jsonp"
				/*jsonpCallback : function(data){
					console.log(response);
					$('#selected_car_logs').html(data);
					}*/
				})
	});
	$('.sel_tab .tabli').live('click',function(){
		$(this).siblings().removeClass('cur');
		$(this).addClass('cur');
		var obj = $("#selectcarbox .sel_box");
		obj.addClass("hide");
		obj.eq($(this).index()).removeClass("hide");
	});
	$('#sel_bynum dd').live('click',function(){
		$(this).siblings().removeClass('cur');	
		$(this).addClass('cur');
		brandBox($(this).attr('word'));
	});
	
	function showNextCarTypeList(obj, type){
		var _obj = obj.parents(".sel_mainbox_info"),
			index = $(".sel_mainbox_info").index(_obj)+1;

		var url = '';
		var nextobj = '';
		if(type == 'brand'){
			url = urlCmy('car', 'new_load', 'ajax=1&type=series&pid=' + obj.attr('brand_id'));
			nextobj = $('.car_info_series_list');
		}else if(type == 'series'){
			url = urlCmy('car', 'new_load', 'ajax=1&type=year&pid=' + obj.attr('series_id'));
			nextobj = $('.car_info_year_list');
		}else if(type == 'year'){
			url = urlCmy('car', 'new_load', 'ajax=1&type=model&pid=' + obj.attr('year_id'));
			nextobj = $('.car_info_size_list');
		}

		if(!type) return false;
		nextobj.load(url, function(){
			AddCarTypeHas(obj,type);
			$(".sel_stepbox li").addClass("cur");
			$(".sel_stepbox li").eq(index).nextAll().removeClass("cur");
			$(".sel_mainbox_info").addClass("hide");
			$(".sel_mainbox_info").eq(index).removeClass("hide");
			
		});
		
	}
	function AddCarTypeHas(obj,typestr){
		var modelid = obj.attr(typestr+"_id"),
			name = obj.attr(typestr+"_name"),
			_type= typestr.charAt(0).toUpperCase()+ typestr.substring(1,typestr.length);
		var str ="<span class='cartype'>"+
                	"<a modelid="+ modelid +">"+
                	"<img src='themes/1hdshop/__IMG__/version6/common/sel_close.png'>"+
                	"</a>"+
                	"<span>"+ name +"</span>"+
            		"</span>";
		$(".sel_has").append(str);
		CarType.choose.push(name);
	}
	$(".cartype a").live('click',function(){
		var _index = $(this).parent().index()-1;
		var arr =[];
		for(var i=0;i<_index;i++){
			arr.push(CarType.choose[i]);
			}
		CarType.choose = arr;
		if(_index==0){
			$("input.cartypehide").removeAttr("modelid").removeAttr("value");
		}
		else{
			$("input.cartypehide").eq(_index-1).nextAll("input").removeAttr("modelid").removeAttr("value");
			}
		$(".sel_has").each(function(index, element) {
            if(_index==0){
				$(this).find(".cartype").remove();
			}
			else{
				$(this).find(".cartype").eq(_index-1).nextAll(".cartype").remove();
				}
        });
		$(".sel_mainbox_info").addClass("hide");
		$(".sel_mainbox_info").eq(_index).removeClass("hide");
		$(".sel_stepbox li").addClass("cur");
		$(".sel_stepbox li").eq(_index).nextAll().removeClass("cur");
	});
	
	$("#car_info_brands_list li").live('click',function(){
		showNextCarTypeList($(this), 'brand');
	});
	$(".car_info_series_list li").live('click',function(){
		showNextCarTypeList($(this), 'series');
	});
	$(".car_info_year_list li").live('click',function(){
		showNextCarTypeList($(this), 'year');
	});
	$(".car_info_size_list li").live('click',function(){
		var modelid = $(this).attr("model_id");
		var name = $(this).attr("model_name");
		var MyCarType = CarType.choose[0] + " " + name;
		var errorMsg = '';
		var carModel = modelid;
		if($('.car_lib:visible').length){// 车型库
			$.get(urlCmy('car', 'saveMemberCarModel', 'carModel=' + carModel + '&ajax=1&car_lib=1'), function(data){
				if(data == 1){
					errorMsg = '对不起, 您已提交过该车型!';
					$.notice(errorMsg, 'error');
				}else{
					updatePageCarBrandImg();
					$('.my-cartype-list').html(data);
					$.notice('车型保存成功!');
				}
				// 隐藏弹窗
				$("#cboxClose").click();
			});
                }else if($('.mt5:visible').length){
                    $.ajax({
                        type : "get",
                        //async:false,
                        url : urlCmy('car', 'saveMemberCarModelForFlow', 'carModel=' + carModel+'&ajax=1&car_lib=1'),
                        dataType : "jsonp",
                        jsonp: "callback",
                        jsonpCallback:"success_jsonpCallback",
                        success : function(json){
                            if(json.success == 1){
                                $('.mt5').html('<span class="check_info">'+json.name+'<a href="javascript:void(0)" onclick="chooseModel();">修改</a></span>')
                                $("#cboxClose").click();
                            }else{
                                errorMsg = '对不起，操作失败，请重试!';
				$.notice(errorMsg, 'error');
                            }
                        },
                        error:function(){
                            errorMsg = '对不起，操作失败，请重试!';
                            $.notice(errorMsg, 'error');
                        }
                    });


		}else{
			$('.choose_car_model_btn:not(.car_lib)').siblings('font').remove();
			$('.choose_car_model_btn:not(.car_lib)').before('<font>' + MyCarType + '</font>');
			$('input[name=car_model]').val(carModel);
			$('.choose_car_model_btn:not(.car_lib)').html('点击更换车型');
			$.ajax({
				type:"POST",
				url:urlCmy('car', 'saveMemberCarModel', 'carModel=' + carModel+'&ajax=1'),
				dataType:"jsonp",
				jsonpCallback : function(){
					updatePageCarBrandImg();
					$.notice('车型保存成功!');
					$("#cboxClose").click();
					}
				})
		}
		
	});

	$("input[name=vin]").live('keyup',function(){
		var val = $(this).val();
		var reg = new RegExp("/^[0-9a-zA-Z]+/g");
		if(!reg.test(val)){
			val = val.substring(0,val.length);
			$(this).val(val);
			}
		if(val.length==$(this).attr("maxlength")){
			var index = $("li.style1").index($(this).parents(".style1"));
			$("input[name=vin]").eq(index+1).focus();
		}
	});


	// vin 检测
	$('#vin_btn_confirm').live('click', function(){
		var str = "";
		$(".vin_num_bot input").each(function() {
            str += $(this).val();
		});
		if(strlen(str) < 17){
			$('.vin_num_error_tip').show();
			return false;
		}
		$('.vin_num_error_tip').hide();
		$.get(urlCmy('car', 'identifyVin', 'vin=' + str), function(data){
			if(data == 4){
				$.notice('您查询过多请改天再来!', 'error');	
				return false;
			}
			var carInfo = $.parseJSON(data);
			
			if(carInfo.length > 0){
				
				if(carInfo.length > 1){
					var errorMsg = '';
					var MyCarType = carInfo[0]['name'] + ' ' + carInfo[3]['name'];
					
					if($('.car_lib:visible').length){ // 车型库
						$.get(urlCmy('car', 'saveMemberCarModel', 'carModel=' + carInfo[3]['id'] + '&car_lib=1&ajax=1'), function(data){
							if(data == 1){
								errorMsg = '对不起, 您已提交过该车型!';
								$.notice(errorMsg, 'error');
							}else{
								updatePageCarBrandImg();
								$('.my-cartype-list').html(data);
								$.notice('您的VIN码对应的车型为' + MyCarType);
							}
							// 隐藏弹窗
							$("#cboxClose").click();
						});
					}else{
						$('.choose_car_model_btn:not(.car_lib)').siblings('font').remove();
						$('.choose_car_model_btn:not(.car_lib)').before('<font>' + MyCarType + '</font>');
						$('input[name=car_model]').val(carInfo[3]['id']);
						$('.choose_car_model_btn:not(.car_lib)').html('点击更换车型');
						$.get(urlCmy('car', 'saveMemberCarModel', 'ajax=1&carModel=' + carInfo[3]['id']), function(){
							updatePageCarBrandImg();
							$.notice('您的VIN码对应的车型为' + MyCarType);
							// 隐藏弹窗
							$("#cboxClose").click();
						});
						
					}
					
				}else{
					$.notice('对不起, 未找到该VIN码的匹配数据, 请手动选择!', 'error');
				}
			}else{
				$.notice('对不起, 未找到该VIN码的匹配数据, 请手动选择!', 'error');
			}
		});
	});

	if(!getCookie('member_info') && 0){
		if(unloginSelectedCarModelId && unloginSelectedCarModelName){
			var MyCarType = decodeURIComponent(unloginSelectedCarModelName).replace(/\+/g, ' ');
			$('.choose_car_model_btn:not(.car_lib)').first().siblings('font').remove();
			$('.choose_car_model_btn:not(.car_lib)').first().before('<font>' + MyCarType + '</font>');
			$('input[name=car_model]').val(unloginSelectedCarModelId);
			$('.phy_pic img').attr('src', uncmodelimg);
			$('.phy_left .brand').html(uncmodelbrand);
			$('.phy_left .type').html(unloginSelectedCarModelName);
			$('.choose_car_model_btn:not(.car_lib)').html('点击更换车型');
		}
	}

	$('#selected_car_logs dd').live('click', function(){
		var MyCarType = $(this).attr('car_brand_name') + ' ' + $(this).attr('car_model_name');
		var errorMsg = '';
		if($('.car_lib:visible').length){ // 车型库
			$.get(urlCmy('car', 'saveMemberCarModel', 'carModel=' + $(this).attr('car_model') + 'ajax=1&&car_lib=1'), function(data){
				if(data == 1){
					errorMsg = '对不起, 您已提交过该车型!';
					$.notice(errorMsg, 'error');
				}else{
					updatePageCarBrandImg();
					$('.my-cartype-list').html(data);
					$.notice('车型保存成功!');
				}
				// 隐藏弹窗
				$("#cboxClose").click();
			});
		}else{
			$('.choose_car_model_btn:not(.car_lib)').siblings('font').remove();
			$('.choose_car_model_btn:not(.car_lib)').before('<font>' + MyCarType + '</font>');
			$('input[name=car_model]').val($(this).attr('car_model'));
			$('.choose_car_model_btn:not(.car_lib)').html('点击更换车型');
			$.get(urlCmy('car', 'saveMemberCarModel', 'ajax=1&carModel=' + $(this).attr('car_model')), function(){
				updatePageCarBrandImg();
				$.notice('车型保存成功!');
				// 隐藏弹窗
				$("#cboxClose").click();
			});
			
		}
		
	});
	
	// 更新页面上车型品牌logo
	var updatePageCarBrandImg = function(){
		var brandId = $('.sel_mainbox:visible').find(".cartype a:eq(0)").attr('modelid');
		var modelName = $('.choose_car_model_btn:not(.car_lib)').siblings('font').html();
		var brandName = $('.sel_mainbox:visible').find(".cartype span:eq(0)").html();
		
		if(brandId){
			$.get(urlCmy('car', 'loadCarLogo', 'no_thumb=1&ajax=1&brandId=' + brandId), function(data){
				$('.phy_pic img').attr('src', data);
				$('.phy_left .brand').html(brandName);
				$('.phy_left .type').html(modelName);
			});
		}
	}

	
});
