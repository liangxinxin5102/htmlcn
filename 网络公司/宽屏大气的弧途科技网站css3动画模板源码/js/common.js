var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?c3a498c27c2d383df3db9827d1a2b1f2";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

function isEmpty(value) {//判空
	if(value == null || value == undefined || value == '' || value == 'null' || value == 'undefined') {
		return true;
	}
	return false;
}

function postAjax(url , data) {
	// 添加真是地址
	var realUrl = url;
	// 添加访问种类
	data.appKey='QTSHE_WEB';
	data.token = get_login_token();
	
	// 移步处理函数
	var p = new promise.Promise();
	$.ajax({
		url:realUrl,
		type:"post",
		data:data,
		dataType:'json',
		success:function(result) {
			if(result.errCode != null) {
				switch (result.errCode) {
					case 4004:
						local_delete("loginMsg");
						local_delete("spreadProjectId");
						window.location.href="/yunditui/Clound";
//						pc_router(ROUTER_YUNDITUI_CLOUND);
						return;
					case 4006:
						//pc_router(ROUTER_ACCOUNT_LOGIN_LOGIN);
						return;
					case 4021:
						//pc_router(ROUTER_YUNDITUI_CLOUND);
						break;
					default:
						break;
				}
				
			}
			
    		p.done(result);
		},error:function() {
			
		}});
	
    return p;
}


function postAsyncAjax(url , data) {
	// 添加真是地址
	var realUrl = url;
	// 添加访问种类
	data.appKey='QTSHE_WEB';
	
	data.token = get_login_token();
	// 移步处理函数
	var p = new promise.Promise();
	$.ajax({
		url:realUrl,
		type:"post",
		data:data,
		dataType:'json',
		async: false,
		success:function(result) {
			if(result.errCode != null) {
				switch (result.errCode) {
					case 4004:
						local_delete("loginMsg");
						local_delete("spreadProjectId");
						pc_router(ROUTER_YUNDITUI_CLOUND);
						return;
					case 4006:
						pc_router(ROUTER_ACCOUNT_LOGIN_LOGIN);
						return;
					default:
						break;
				}
				
			}
			
    		p.done(result);
		},error:function() {
			
		}});
	
    return p;
}


function loginAjax(url , data) {
	// 添加真是地址
	var realUrl = url;
	// 添加访问种类
	data.appKey='QTSHE_WEB';
	
	// 移步处理函数
	var p = new promise.Promise();
	$.ajax({
		url:realUrl,
		type:"post",
		data:data,
		dataType:'json',
		success:function(result) {
			
			console.log(result);
			if(result.errCode != null && result.errCode == 4004) {
				pc_router(ROUTER_YUNDITUI_CLOUND);
				return;
			}
    		p.done(result);
		},error:function() {
			
		}});
	
    return p;
}

function ajaxSubmit(formId,url,data) {
	
	data.appKey='QTSHE_WEB';
	data.version = "2.3.0";
	
	// 同步上传图片和数据的封装处理函数
	var p = new promise.Promise();
	 $("#" + formId).ajaxSubmit({
         type: "post",						 // 提交方式 get/post
         url: url, 		 // 需要提交的 url
         data:data,
         success: function(data) {
        	 p.done(data);
         },
         error:function() {
           alert('发生了错误，请稍后重试！');
         }
       });
	 return p;
}

function showLoading() {
    var maskDiv = ['<div class="maskloading" style="height: {{=height}}px">',
        '<img style="margin-top: {{=imgtop}}" src="/resources/img/loading_g72X72.gif">',
        '</div>'].join('');

    var height = $(window).height();
    var imgtop = (height - 66) / 2 + 'px';

    var maskTpl = template.compile(maskDiv)({height: height, imgtop: imgtop});
    $('body').append(maskTpl);

    // 加载超时的话就把菊花转转干掉
    function loadingTimeout() {
        if ($('.maskloading').size() > 0) {
            $('.maskloading').remove();
        }
    }

    setTimeout(loadingTimeout, 15000);
};

// 移除loading菊花转转效果
function hideLoading() {
    $('.maskloading').remove();
};

//搜索url
function searchParam(par) {
	var param = {};
	if(isEmpty(par)) {
		return param;
	} else {
		if(par.indexOf("?") != -1) {
			par = par.substring(1,par.length);
		}
		
		par = par.replace("#","");
		
		var array = par.split("&");
		for (var i = 0; i < array.length; i++) {
			var array2 = new Array();
			var ss = array[i].toString();
			array2[0] = ss.substring(0,array[i].indexOf("="));
			array2[1] = array[i].substring(array[i].indexOf("=") + 1,array[i].length);
			param[array2[0]] = array2[1];
		}
		return param;
	}
}

// 验证金额
function moneyCheck(num) {
	
	if(num == null) {
		return false;
	}
	//检查是否是非数字值
	if (isNaN(num)) {
		return false;
	}
	// 检查小数点后是否对于两位
	if (num.toString().split(".").length > 1 && num.toString().split(".")[1].length > 2) {
		return false;
	}
	
	if(num.toString().indexOf("-1") == 1) {
		return false;
	}
	
	return true;
}