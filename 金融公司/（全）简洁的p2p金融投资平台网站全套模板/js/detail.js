$(document).ready(function() {
	
	$("#birthday,#birthday2").datepicker({
 	   	changeMonth: true,changeYear: true,closeText:'关闭',
		prevText : '&#x3c;上月',
		nextText : '下月&#x3e;',
		currentText : '今天',
		monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月',
				'九月', '十月', '十一月', '十二月' ],
		monthNamesShort : [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月',
				'九月', '十月', '十一月', '十二月' ],
		dayNames : [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ],
		dayNamesShort : [ '周日', '周一', '周二', '周三', '周四', '周五', '周六' ],
		dayNamesMin : [ '日', '一', '二', '三', '四', '五', '六' ],
		weekHeader : '周',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : true,
		yearSuffix : '年',
		dateFormat : "yy-mm-dd",
		yearRange:"1950:2030",
		maxDate: new Date()//最小日期
	});
	
	$("#birthday,#birthday2").change(function(){
		var value = $(this).val();
		if (value != "") {
			$(this).siblings('span').hide();
		} else {
			$(this).siblings('span').show();
		}
	});
	
	var errorCount = 0;
	// 绑定各个输入框失去焦点事件
	$("#realName").blur(function() {
		var realName = $(this).val();
		if(validateFunction.isEmpty($(this).val())) {
			$("#realNameError").removeClass("hidden").addClass("error_2").html("<i></i>真实姓名不能为空");
			errorCount++;
		} else {
			if (!validateFunction.isChinese(realName) || !validateFunction.lengthCheck(realName, 2, 15)) {
				$("#realNameError").removeClass("hidden").addClass("error_2").html("<i></i>真实姓名必须为2-15个汉字");
				errorCount++;
			} else {
				$("#realNameError").addClass("hidden").removeClass("error_2").html("");
			}
		}
	});
	
	// 移动电话
	$("#mobile").blur(function() {
		var mobile = $(this).val();
		if(validateFunction.isEmpty(mobile)) {
			$("#mobileError").removeClass("hidden").addClass("error_2").html("<i></i>移动电话不能为空");
			errorCount++;
		} else {
			if (!validateFunction.isMobile(mobile)) {
				$("#mobileError").removeClass("hidden").addClass("error_2").html("<i></i>请输入11位手机号码");
				errorCount++;
			} else {
				$("#mobileError").addClass("hidden").removeClass("error_2").html("");
			}
		}
	});
	
	// 校验生日
	$("#birthday,#birthday2").change(function() {
		var birthday = $(this).val();
		if (validateFunction.isEmpty(birthday)) {
			$("#birthdayError").removeClass("hidden").addClass("error_2").html("<i></i>出生日期不能为空");
			errorCount++;
		} else {
			if (!validateFunction.isDate(birthday)) {
				$("#birthdayError").removeClass("hidden").addClass("error_2").html("<i></i>出生日期格式有误");
				errorCount++;
			} else {
				// 校验不比现在日期大
				if (validateFunction.greaterThenNow(birthday)) {
					$("#birthdayError").removeClass("hidden").addClass("error_2").html("<i></i>出生日期不能大于当前日期");
					errorCount++;
				} else {
					$("#birthdayError").addClass("hidden").removeClass("error_2").html("");
				}
			}
		}
	});
	
	// 校验借款金额
	$("#loanAmount").blur(function() {
		var amount = $(this).val();
		if (validateFunction.isEmpty(amount)) {
			$("#amountError").removeClass("hidden").addClass("error_2").html("<i></i>借款金额不能为空");
			errorCount++;
		} else {
			if (!validateFunction.isCurrency(amount)) {
				$("#amountError").removeClass("hidden").addClass("error_2").html("<i></i>借款金额格式有误");
				errorCount++;
			} else {
				// 获取产品类型
				var productId = $("#productId").val();
				if (productId == 9 || productId == 7) {
		    		if (amount < 30000 || amount > 300000) {
		    			$("#amountError").removeClass("hidden").addClass("error_2").html("<i></i>借款金额必须为3-30万之间");
		    			errorCount++;
		    		} else {
		    			$("#amountError").addClass("hidden").removeClass("error_2").html("");
		    		}
	    		/* update by lizhi 20140912 借款频道调整（车易贷修改为嘉车贷） start */	
		        // } else if (productId == 5) {
		        //	 if (amount < 30000 || amount > 500000) { 
		    	//		$("#amountError").removeClass("hidden").addClass("error_2").html("<i></i>借款金额必须为3-50万之间");
				} else if (productId == 20) {
			        if (amount < 10000 || amount > 200000) { 
			        	$("#amountError").removeClass("hidden").addClass("error_2").html("<i></i>借款金额必须为1-20万之间");
		        /* update by lizhi 20140912 借款频道调整（车易贷修改为嘉车贷） end */	
		    			errorCount++;
		        	} else {
		    			$("#amountError").addClass("hidden").removeClass("error_2").html("");
		    		}
		        }
			}
		}
	});
	
	// 校验月收入
	$("#income").blur(function() {
		var income = $(this).val();
		if (validateFunction.isEmpty(income)) {
			$("#incomeError").removeClass("hidden").addClass("error_2").html("<i></i>月均收入不能为空");
			errorCount++;
		} else {
			if (!validateFunction.isNaturalNumber(income)) {
				$("#incomeError").removeClass("hidden").addClass("error_2").html("<i></i>月均收入必须为正整数");
				errorCount++;
			} else {
				if (!validateFunction.lengthCheck(income, 1, 8)) {
					$("#incomeError").removeClass("hidden").addClass("error_2").html("<i></i>月均收入必须小于10000万");
				} else {
					$("#incomeError").addClass("hidden").removeClass("error_2").html("");
				}
			}
		}
	});
	
	$("#save").click(function() {
		errorCount = 0;
		// 校验居住城市
		var city = $("#city").val();
		if (validateFunction.isEmpty(city)) {
			$("#cityError").removeClass("hidden").addClass("error_2").html("<i></i>请选择居住城市");
			errorCount++;
		}
		
		$("#birthday").change();
		
		var $applyForm = $("#applyForm");
		$applyForm.find("input[type='text']").each(function() {
			$(this).blur();
		});
		
		if (errorCount == 0) {
			
			// Adobe | Begin | zhenhua.xi | 20141103
			var applyFormObj = document.getElementById("applyForm");  // 表單
			var artTitleVal = $("#artTitleElem").val();
			var spObj = $("#city").attr("c-data");  // 居住城市
			var genderVal = applyFormObj.elements['gender'].value;  // 性別
			genderVal = (genderVal == 0) ? "男" : "女";
			var yearObj = $("#birthday,#birthday2").val();
			var yearArr = yearObj.split("-");
			var yearVal = yearArr[0];
			var loanAmountObj = $("#loanAmount").val();
			var dueIdVal = applyFormObj.elements['dueId'].value;  // 借款期限
			var dueIdData = {
					"1272947783684640":"12个月",
					"1272947783684641":"18个月",
					"1272947783684642":"24个月",
					"1272947783684643":"36个月"
			};
			var incomeObj = $("#income").val();  // 月均收入

			var s = s_gi(s_account);
			s.linkTrackVars="prop11,prop12,prop13,prop14,prop15,prop16,eVar41,events";
			s.linkTrackEvents="event21";
			s.eVar41 = artTitleVal;
			s.prop11 = spObj; //居住城市
			s.prop12 = genderVal; //性别
			s.prop13 = yearVal; //出生年
			s.prop14 = loanAmountObj; //贷款金额
			s.prop15 = dueIdData[dueIdVal]; //贷款期限
			s.prop16 = incomeObj;
			//月均收入
			s.events="event21";
			npo.tl(this,'o','jksqcg');
			// Adobe | End
			setTimeout(function(){
				$applyForm.submit();
			},800);
		}
	});
	
/*$(".plusBank button.btn").click(function() {
	// 关闭计算结果框
	closeAll_0();
	return false;
});

$('.padding .btn_blue').click(function() {
	var _myamount = $('#amount').val();
	if (_myamount == '') {
		//showMsg('请填写金额！');
 	   	$(".plusBank .content").html("请填写金额！");
   		// 弹出框
	   	showCon_0();
		return false;
	} else if (!_myamount.match(/^\d+$/)) {
		//showMsg('请填写正确金额！');
		$(".plusBank .content").html("请填写正确金额！");
   		// 弹出框
		showCon_0();
		return false;
	} else if (Number(_myamount) < 1) {
		//showMsg('请填写正确金额！');
		$(".plusBank .content").html("请填写正确金额！");
   		// 弹出框
		showCon_0();
		return false;
	} else if (Number(_myamount) < 2000) {
		//showMsg('申请金额必须大于2000！');
		$(".plusBank .content").html("申请金额必须大于2000！");
   		// 弹出框
		showCon_0();
		return false;
	}
	var stype = $('#stype').val();
	if(stype=='6'){
		//stype = $('.checked input[name="radio"]').val();
		stype = $('.input_out input[name="radio"]:checked').val();
		$('#stype').val(stype);
	}
	//var loanCycle = $('span .selected').html();
	var loanCycle = $(".short option:selected").val();
	$.ajax({
    	type: "post",
   	 	url: "/daikuan/quotaApply.do",
    	dataType: "text",
    	data:{
    		amount : _myamount,
    		stype:stype,
    		loanCycle: loanCycle
   		 },
    	contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    	success: function(data){
    		if(data=='1'){
    			window.location.href = "/daikuan/loanSucc.do";
    		}else if(data=='2'){
    			login();
    		}else if(data=='3'){
    			art.dialog({
    	        	content: '只需30秒，请先进行身份认证！ ',
    	        	lock:true,
    	        	ok:function(){window.location.href='/member/safetyLevel.do?doWhat=sl';},
    	        	close:function(){window.location.href='/member/safetyLevel.do?doWhat=sl';}
    	        });
    			$(".plusBank .content").html("只需30秒，请先进行身份认证！");
    	   		// 弹出框
    			showCon_0();
    		   	$(".plusBank button.btn").unbind("click");
    		   	$(".plusBank button.btn").click(function() {
    		   		window.location.href = '/member/safetyLevel.do?doWhat=sl';
    		   	});
    		   	
    		}else if(data=='4'){
    			art.dialog({
    	        	content: '只需1分钟，请先完善个人资料！',
    	        	lock:true,
    	        	ok:function(){window.location.href='/member/personalDataBasic.do';},
    	        	close:function(){window.location.href='/member/personalDataBasic.do';}
    	        });
    			$(".plusBank .content").html("只需1分钟，请先完善个人资料！");
    	   		// 弹出框
    			showCon_0();
    		   	$(".plusBank button.btn").unbind("click");
    		   	$(".plusBank button.btn").click(function() {
    		   		window.location.href = '/member/personalDataBasic.do';
    		   	});
    		}else{
    			//showMsg(data);
    			$(".plusBank .content").html(data);
    	   		// 弹出框
    			showCon_0();
    		}
    	}
	});
});*/
});

//Adobe数据收集 | Begin | zhenhua.xi | 2014113
var dataTrack4Adobe = {
		"city":[0,"借款表单：居住城市"],
		"realName":[0,"借款表单：真实姓名"],
		"mobile":[0,"借款表单：移动电话"],
		"gender":[0,"借款表单：称谓"],
		"birthday":[0,"借款表单：出生日期"],
		"loanAmount":[0,"借款表单：借款金额"],
		"dueId":[0,"借款表单：借款期限"],
		"income":[0,"借款表单：月均收入"]
};
$("#realName,#mobile,#birthday,#loanAmount,#income").change(function(){
	var key = $(this).attr("id");
	if(dataTrack4Adobe[key][0] > 0){
		return;
	}
	// 发送默认性别
	if(dataTrack4Adobe["gender"][0] == 0){
		s.prop10 = dataTrack4Adobe["gender"][1];
		npo.t();
		dataTrack4Adobe["gender"][0] += 1;
	}
	
	// 发送数据
	s.prop10 = dataTrack4Adobe[key][1];
	npo.t();
	// 最后一步计数
	dataTrack4Adobe[key][0] += 1;
});
$("#js_city").click(function(){
	// 将数据赋值到hidden控件，有一定延时
	setTimeout(function(){
		if($("#city").val() != "" && dataTrack4Adobe["city"][0] == 0){
			// 发送数据
			s.prop10 = dataTrack4Adobe["city"][1];
			npo.t();
			dataTrack4Adobe["city"][0] += 1;
		}
	},300);
});
$("#js_dueId").click(function(){
	// 将数据赋值到hidden控件，有一定延时
	setTimeout(function(){
		if(dataTrack4Adobe["dueId"][0] == 0){
			// 发送数据
			s.prop10 = dataTrack4Adobe["dueId"][1];
			npo.t();
			dataTrack4Adobe["dueId"][0] += 1;
		}
	},300);
});
//Adobe数据收集 | End

function login() {
	// 清空登陆框内容
	clear();
	
	showCon_1();
	return false;
}