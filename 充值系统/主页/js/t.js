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
		$('#number').val(1);
		$('#number').keyup();
		//document.forms['ECS_FORMBUY'].elements['number'].value = 1;
		//document.forms['ECS_FORMBUY'].elements['number'].blur();
		//document.getElementById('ECS_GOODS_AMOUNT').innerHTML = '{$goods.shop_price_formated}';
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

function dg_price(number)
{
	var obj    = document.getElementById('number');
	var cat_id =  document.getElementById('cat_id');
	var goods_money = document.getElementById('goods_money');
	var type = '';
	if( /.*[^0-9]+.*$/.test(number)) {
		obj.value=number.replace(/[^\d]/g,'');
	}
	else
	{
		if(cat_id==236){
			type = 'wx';
			var totalnum = number*goods_money;
			if(totalnum>20000){
				alert('微信自动充值，单笔充值金额不得超过2万元');
				var num = parseInt(20000/goods_money);
				obj.value=num
				number = num;
			}
		}else{
			number = number;
		}
		/*if(goodsId==1458 && number>20000){
			obj.value=20000;
			number = 20000;
			alert('微信自动充值，单笔充值金额不得超过2万元');
		} else {
			number = number;
		}*/
		Ajax.call('do.php', 'act=dg_price&id=' + goodsId +  '&number=' + number + '&type=' + type +  '&goods_money=' + goods_money, changedgPriceResponse, 'GET', 'JSON');
	}
}

function changedgPriceResponse(res)
{
	var obj = document.getElementById('number');
	if (res.err_msg.length > 0)
	{
		alert(res.err_msg);
		obj.value = '';
		document.getElementById('dg_money').innerHTML = '$0.00USD';
	}
	else
	{
		if (document.getElementById('dg_money'))
		document.getElementById('dg_money').innerHTML = res.result;
	}
}