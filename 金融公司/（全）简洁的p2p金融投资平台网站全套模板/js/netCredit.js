$(function(){
	var amountFlag = false;
	var monthFlag = false;
	var rateFlag = false;
	
	//利息计算器
	$('#amount').blur(function(){
		var _amount = $('#amount').val();
		var _tooltype = $('#tool_type').val();
		if(!_amount || isNaN(_amount) || ((_amount < 2000 && _tooltype == 1))) {
			$("#amountMsg").html("<span class='prompt_2 error_2'><i></i>贷款金额有误，最低贷款金额2000元");
    		return false;
		}else if(_amount.indexOf(".") != -1 && _amount.substring(_amount.indexOf("."),_amount.length).length>3){
			$("#amountMsg").html("<span class='prompt_2 error_2'><i></i>金额不能超过两个小数位");
			return false;
		}else{
			$("#amountMsg").html("");
			amountFlag = true;
		}
	});
	$('#month').blur(function(){
		var _month = $('#month').val();
		if(!_month || isNaN(_month) || _month  <= 0 || _month > 36) {
			//alert('贷款期限有误，贷款期限范围1-36个月之间'); 
			$("#monthMsg").html("<span class='prompt_2 error_2'><i></i>贷款期限范围1-36个月之间");
			return false;
		}else if(_month==null||!/^\d+$/.test(_month)){
			//alert("期限必须为整数");
			$("#monthMsg").html("<span class='prompt_2 error_2'><i></i>期限必须为整数");
			return false;
		}else{
			$("#monthMsg").html("");
			monthFlag = true;
		}
	});
	$('#rate').blur(function(){
		var _rate = $('#rate').val();
		if(!_rate || isNaN(_rate) || _rate < 1 || _rate > 26.24) {
			//alert('贷款利率有误，贷款利率范围1%-26.24%之间'); 
			$("#rateMsg").html("<span class='prompt_2 error_2'><i></i>贷款利率范围1%-26.24%之间");
			return false;
		}else{
			$("#rateMsg").html("");
			rateFlag = true;
		}
	});
	
	$('#interestSubmit').click(function(){
		var _amount = $('#amount').val(); 
		var _month = $('#month').val();
		var _rate = $('#rate').val();
		var _repayment = $('#repayment').val();
		var _tooltype = $('#tool_type').val();
		
		$('#amount').blur();
		$('#month').blur();
		$('#rate').blur();
		if(amountFlag == true && monthFlag == true && rateFlag == true){
		$.ajax({
			url: '/daikuan/interestCalc.do',
			type: 'post',
            dataType: "json",
            data: {
            	amount: _amount,
            	month: _month,
            	rate: _rate,
            	repayment: _repayment,
            	tool_type: _tooltype
            },
            success: function(data){
            	if(data.code=='err'){
            		//alert(data.result);
            		/*$(".plusBank .content").html(data.result);
            		showCon_0();*/
            		//IE6下兼容问题
            		$('#repayment').css('display','none');
            	}else{
            		$("#amountTotal").html(data.blh);
        			$("#capitalSum").html(data.amount);
        			
        			var paymentList = data.list;
        			var paymentHtml = "";
        			for (var i = 0, length = paymentList.length; i < length; i++) {
            			paymentHtml += '<tr>' +
					                   	'<td class="f">' + (i+1) + '/' + length + '</td>' +
					                    '<td class="tr"><span>' + paymentList[i].zonge + '</span></td>' +
					                    '<td class="tr"><span>' + paymentList[i].bj + '</span></td>' +
					                    '<td class="tr"><span>' + paymentList[i].lx + '</span></td>' +
					                    '<td class="tr l"><span>' + paymentList[i].bal + '</span></td>' +
					                   '</tr>';
            		}
            		$("#paymentContent").html(paymentHtml);
            		// 弹出计算结果框
            		showCon_0();
            		//IE6下兼容问题
            		$('#repayment').css('display','none');
            	}
          	}
		});
		}
		return false;
	});
	
	$(".plusBank a.plus_c,.btn").click(function() {
		//IE6下兼容问题
		$('#repayment').css('display','block');
		// 关闭计算结果框
		closeAll_0();
	});
	
	$(".plusBank button.btn").click(function() {
		//IE6下兼容问题
		$('#repayment').css('display','block');
		// 关闭提示信息弹出框
		closeAll_0();
	});

});