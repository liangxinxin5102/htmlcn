// JavaScript Document

/**
* 点选可选属性或改变数量时修改商品价格的函数
*/
function changePrice(is_zc)
{
	var attr = getSelectedAttributes(document.forms['ECS_FORMBUY']);
	var qty = document.forms['ECS_FORMBUY'].elements['number'].value;

	Ajax.call('goods.php', 'act=price&id=' + goodsId + '&attr=' + attr + '&number=' + qty + '&value1=' + is_zc, changePriceResponse, 'GET', 'JSON');
}

/**
* 接收返回的信息
*/
function changePriceResponse(res)
{
	if (res.err_msg.length > 0)
	{
		alert(res.err_msg);
	}
	else
	{
		document.forms['ECS_FORMBUY'].elements['number'].value = res.qty;

		/*if (document.getElementById('dg_money'))
		document.getElementById('dg_money').innerHTML = res.result;*/
		if (document.getElementById('ECS_GOODS_AMOUNT'))
		document.getElementById('ECS_GOODS_AMOUNT').innerHTML = res.result;
		
	}
}

function dg_price(number,id)
{
	if( /.*[^0-9]+.*$/.test(number)) {
		document.getElementById('number').value=number.replace(/[^\d]/g,'');
	}
	else {
		var act = '';
		var userAgentInfo = navigator.userAgent;
	    var Agents = ["Android", "iPhone",
	                "SymbianOS", "Windows Phone",
	                "iPad", "iPod"];
	    var flag = true;
	    for (var v = 0; v < Agents.length; v++) {
	        if (userAgentInfo.indexOf(Agents[v]) > 0) {
	            flag = false;
	            break;
	        }
	    }
		if(id == '544'){
			act = 'dg_price'
		} else {
			act = 'dg_price_NRate'
		}
	    if(flag){
			Ajax.call('/do.php', 'act='+act+'&id='+id+'&number=' + number, changedgPriceResponse, 'GET', 'JSON');
	    	
	    }else{
			Ajax.call('/mobile/do.php', 'act='+act+'&id='+id+'&number=' + number, changedgPriceResponse, 'GET', 'JSON');
	    	
	    }
	}
}

function changedgPriceResponse(res)
{
	if (res.err_msg.length <= 0)
	{
		if (document.getElementById('dg_money'))
		document.getElementById('dg_money').innerHTML = res.result;
	}
}