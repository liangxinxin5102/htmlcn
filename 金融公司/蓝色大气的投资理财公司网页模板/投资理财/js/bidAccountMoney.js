$(function() {
    var d = new Date(),
    vYear = d.getFullYear(),
    vMon = d.getMonth() + 1,
    vDay = d.getDate(),
    s = vYear + "-" + (vMon < 10 ? "0" + vMon: vMon) + "-" + (vDay < 10 ? "0" + vDay: vDay);
    $("#toubiaoshijian").val(s);
    $("#zhaoshangbiaozhong").change(function() {
        $("#anyue").prop("checked", true);
        $("#antian").prop("checked", false);
        var optionValue = $(this).val();
        $("#xuetoujiangli").val("0.00");
        if (optionValue == 1) {
            $("#jiekuanqixian").val("1");
            $("#lianlilv").val("18");
            $("#toubiaojiangli").val("0.00");
        } else {
            if (optionValue == 2) {
                $("#jiekuanqixian").val("2");
                $("#lianlilv").val("19");
                $("#toubiaojiangli").val("0.00");
            } else {
                if (optionValue == 3) {
                    $("#jiekuanqixian").val("3");
                    $("#lianlilv").val("20");
                    $("#toubiaojiangli").val("0.00");
                } else {
                    if (optionValue == 6) {
                        $("#jiekuanqixian").val("6");
                        $("#lianlilv").val("20.6");
                        $("#toubiaojiangli").val("0.00");
                    } else {
                        $("#jiekuanqixian").val("");
                        $("#lianlilv").val("");
                        $("#toubiaojiangli").val("");
                    }
                }
            }
        }
    });
    $(".but_js").click(function() {
    	calc();
    });
    $(".close_btn").click(function(){
    	$(".calc_result").animate({left: '0px'}, "slow", function(){
    		$(".calwrap").slideUp("slow");
    	});
    });
    $("#calc").click(function(){
    	$(".calwrap").slideDown("slow");
	});
});
function calc2(toubiaojine, borrowType, lianlilv, month){
	/*var toubiaojine = 10000,
	borrowType = 1,  //还款方式  0 按月  1 按天
    lianlilv = 21.6,
    month = 2,*/
    var fee = parseFloat(10 / 100),
    toubiaojiangli = 0,
    xuetoujiangli = 0,
    prize = Number(toubiaojiangli) + Number(xuetoujiangli),
    jiangliTotal = toubiaojine * prize * 0.01,
    monthBackArray,
    monthTotalBack,
    zongshouyi,
    nianhuayuelilv,
    nianhualilv,
    fulililv,
    fuliyuelilv,
    lixi;
	
	if (borrowType == 0){
		var objArray = Borrow(toubiaojine, lianlilv, month);
	     monthBackArray = objArray[4];
	     monthTotalBack = objArray[5];
	     lixi = "0";
	     for (var i = 0; i < monthBackArray.length; i++) {
	         lixi = Number(lixi) + Math.round(monthBackArray[i] * 100) / 100
	     }

		var zongshouyi = Math.round(lixi * 100) / 100 - Math.round(lixi * fee * 100) / 100 + Number(jiangliTotal);
		return Math.round(zongshouyi * 100) / 100;
		//alert();
	}else{
		 lixi = lianlilv / 360 * 0.01 * month * toubiaojine;
         var daishoujine = Number(lixi) + Number(toubiaojine);
         var zongshouyi = Math.round(lixi * 100) / 100 - Math.round(lixi * fee * 100) / 100 + Number(jiangliTotal);
         return Math.round(zongshouyi * 100) / 100;
	}
	 
	
}
function calc(){
	var toubiaojine = $("#toubiaojine").val(),
    lianlilv = $("#lianlilv").val(),
    month = $("#jiekuanqixian").val(),
    fee = parseFloat($("#lixiguanlifei").val() / 100),
    toubiaojiangli = $("#toubiaojiangli").val(),
    xuetoujiangli = $("#xuetoujiangli").val(),
    prize = Number(toubiaojiangli) + Number(xuetoujiangli),
    jiangliTotal = toubiaojine * prize * 0.01,
    monthBackArray,
    monthTotalBack,
    zongshouyi,
    nianhuayuelilv,
    nianhualilv,
    fulililv,
    fuliyuelilv,
    lixi;
    var flag = checkToubiaoJine(toubiaojine);
    flag = checkJieKuanQiXian($("#jiekuanqixian").val()) && flag;
    flag = checkLianlilv($("#lianlilv").val()) && flag;
    flag = checkToubiaoLilv($("#toubiaojiangli").val()) && flag;
    flag = checkXuebiaoLilv($("#xuetoujiangli").val()) && flag;
    flag = checkLixiguanlifei($("#lixiguanlifei").val()) && flag;
    if (!flag) {
        return
    } else {
        var html = '<div class="calNum">' + '<div class="caltips">如果以' + $("#toubiaoshijian").val() + "日&nbsp;投标 " + toubiaojine + "元&nbsp;";
        if ($("#huankuanfangshi").val() == "0") {
            html += "（偿还方式：按月还款）"
        } else {
            if ($("#huankuanfangshi").val() == "1") {
                html += "（偿还方式：按季还款）"
            } else {
                if ($("#huankuanfangshi").val() == "2") {
                    html += "（偿还方式：到期还本）"
                } else {
                    html += "（偿还方式：到期还款）"
                }
            }
        }
        html += "，待收明细如下" + "</div>" + '<table class="calTabNum" width="100%" border="0" cellspacing="0" cellpadding="0">' + "<tbody>" + '<tr class="titr">' + '<td width="20%">期号</td>' + '<td width="20%">本期待收</td>' + '<td width="20%">含：利息</td>' + '<td width="20%">含：本金</td>' + '<td width="20%">到期日期</td>' + "</tr>";
        if ($("#huankuanfangshi").val() == "0") {
            if ($('input[name = "jiekuanType"]:checked').val() == "0") {
                var objArray = Borrow(toubiaojine, lianlilv, month);
                monthBackArray = objArray[4];
                monthTotalBack = objArray[5];
                lixi = "0";
                for (var i = 0; i < monthBackArray.length; i++) {
                    lixi = Number(lixi) + Math.round(monthBackArray[i] * 100) / 100
                }
                for (var i = 0; i < month; i++) {
                    html += "<tr>" + "<td>" + Number(i + 1) + "/" + month + "</td>" + "<td>" + Math.round(objArray[0] * 100) / 100 + "</td>" + "<td>" + Math.round(monthBackArray[i] * 100) / 100 + "</td>" + "<td>" + Math.round(monthTotalBack[i] * 100) / 100 + "</td>" + "<td>" + timeAddMonth(i + 1, $("#toubiaoshijian").val()) + "</td>" + "</tr>"
                }
                var zongshouyi = Math.round(lixi * 100) / 100 - Math.round(lixi * fee * 100) / 100 + Number(jiangliTotal);
                var monthtemp = Number(month) + Number(1);
                nianhualilv = Number(prize * 24 / monthtemp) + Number(lianlilv * (1 - fee));
                fulililv = (Math.pow((1 + nianhualilv / 1200), 12) - 1) * 100
            }
        } else {
            if ($("#huankuanfangshi").val() == "1") {
                if ($('input[name = "jiekuanType"]:checked').val() == "0") {
                    if ($("#jiekuanqixian").val() % 3 > 0) {
                    	showErrorMessageDialog("请输入正确的借款期限，如3、6、9、12...等");
                        return
                    } else {
                        var leaveToubiaojine = toubiaojine;
                        var totolLixi = "0";
                        var resultTotalAddtoubiaojine = "0";
                        for (var i = 1; i <= month; i++) {
                            lixi = lianlilv / 12 * 0.01 * leaveToubiaojine;
                            totolLixi = Number(totolLixi) + Number(lixi);
                            resultTotalAddtoubiaojine = Number(leaveToubiaojine) + Number(resultTotalAddtoubiaojine);
                            if (i % 3 != 0) {
                                daishoujine = lixi;
                                html += "<tr>" + "<td>" + Number(i) + "/" + month + "</td>" + "<td>" + Math.round(daishoujine * 100) / 100 + "</td>" + "<td>" + Math.round(lixi * 100) / 100 + "</td>" + "<td>" + 0 + "</td>" + "<td>" + timeAddMonth(i, $("#toubiaoshijian").val()) + "</td>" + "</tr>"
                            } else {
                                daishoujine = Number(lixi) + Number(toubiaojine / ($("#jiekuanqixian").val() / 3));
                                leaveToubiaojine = Number(leaveToubiaojine) - Number(toubiaojine / ($("#jiekuanqixian").val() / 3));
                                html += "<tr>" + "<td>" + Number(i) + "/" + month + "</td>" + "<td>" + Math.round(daishoujine * 100) / 100 + "</td>" + "<td>" + Math.round(lixi * 100) / 100 + "</td>" + "<td>" + Math.round(toubiaojine / ($("#jiekuanqixian").val() / 3) * 100) / 100 + "</td>" + "<td>" + timeAddMonth(i, $("#toubiaoshijian").val()) + "</td>" + "</tr>"
                            }
                        }
                        lixi = totolLixi;
                        var zongshouyi = Math.round(lixi * 100) / 100 - Math.round(lixi * fee * 100) / 100 + Number(jiangliTotal);
                        var temp = lianlilv * (1 - fee) * 3;
                        var temp1 = 24 * prize / ((month / 3) + 1);
                        nianhualilv = (Number(temp) + Number(temp1)) / 3;
                        fulililv = (Math.pow((1 + nianhualilv / 400), 4) - 1) * 100
                    }
                }
            } else {
                if ($("#huankuanfangshi").val() == "2") {
                    if ($('input[name = "jiekuanType"]:checked').val() == "0") {
                        lixi = lianlilv / 12 * 0.01 * toubiaojine;
                        for (var i = 1; i <= month; i++) {
                            if (i != month) {
                                var daishoujine = lixi;
                                html += "<tr>" + "<td>" + Number(i) + "/" + month + "</td>" + "<td>" + Math.round(daishoujine * 100) / 100 + "</td>" + "<td>" + Math.round(lixi * 100) / 100 + "</td>" + "<td>" + 0 + "</td>" + "<td>" + timeAddMonth(i, $("#toubiaoshijian").val()) + "</td>" + "</tr>"
                            } else {
                                var daishoujine = Number(lixi) + Number(toubiaojine);
                                html += "<tr>" + "<td>" + Number(i) + "/" + month + "</td>" + "<td>" + Math.round(daishoujine * 100) / 100 + "</td>" + "<td>" + Math.round(lixi * 100) / 100 + "</td>" + "<td>" + toubiaojine + "</td>" + "<td>" + timeAddMonth(i, $("#toubiaoshijian").val()) + "</td>" + "</tr>"
                            }
                        }
                        lixi = lixi * month;
                        var zongshouyi = Math.round(lixi * 100) / 100 - Math.round(lixi * fee * 100) / 100 + Number(jiangliTotal);
                        nianhualilv = (Number(lianlilv * (1 - fee) * month) + Number(12 * prize)) / month;
                        fulililv = (Math.pow((1 + nianhualilv / 1200 * month), 12 / month) - 1) * 100
                    }
                } else {
                    if ($('input[name = "jiekuanType"]:checked').val() == "0") {
                        lixi = lianlilv / 12 * 0.01 * toubiaojine * month;
                        var daishoujine = Number(lixi) + Number(toubiaojine);
                        html += "<tr>" + "<td>1/1</td>" + "<td>" + Math.round(daishoujine * 100) / 100 + "</td>" + "<td>" + Math.round(lixi * 100) / 100 + "</td>" + "<td>" + toubiaojine + "</td>" + "<td>" + timeAddMonth(Number(month), $("#toubiaoshijian").val()) + "</td>" + "</tr>";
                        var zongshouyi = Math.round(lixi * 100) / 100 - Math.round(lixi * fee * 100) / 100 + Number(jiangliTotal);
                        nianhualilv = Number(lianlilv * (1 - fee)) + Number((12 * prize) / month);
                        fulililv = (Math.pow((1 + nianhualilv / 1200 * month), 12 / month) - 1) * 100
                    }
                }
            }
        }
        if ($('input[name = "jiekuanType"]:checked').val() == "1") {
            lixi = lianlilv / 360 * 0.01 * $("#jiekuanqixian").val() * toubiaojine;
            var daishoujine = Number(lixi) + Number(toubiaojine);
            html += "<tr>" + "<td>1/1</td>" + "<td>" + Math.round(daishoujine * 100) / 100 + "</td>" + "<td>" + Math.round(lixi * 100) / 100 + "</td>" + "<td>" + toubiaojine + "</td>" + "<td>" + timeAddDay($("#jiekuanqixian").val(), $("#toubiaoshijian").val()) + "</td>" + "</tr>";
            var zongshouyi = Math.round(lixi * 100) / 100 - Math.round(lixi * fee * 100) / 100 + Number(jiangliTotal);
            nianhualilv = lianlilv * (1 - fee) + prize / month * 365;
            fulililv = (Math.pow((1 + nianhualilv / 36500 * month), 365 / month) - 1) * 100
        }
        html += "</tbody>" + "</table>" + "</div>";
        $("#calNumContent").empty();
        $("#calNumContent").append(html);
        nianhuayuelilv = nianhualilv / 12;
        fuliyuelilv = fulililv / 12;
        var calWinHtml = '<p class="w1">' + "年化利率" + Math.round(nianhualilv * 100) / 100 + "%" + "<br>" + "复利利率 " + Math.round(fulililv * 100) / 100 + "%" + "</p>" + '<p class="w2">' + "年化月利率 " + Math.round(nianhuayuelilv * 100) / 100 + "%" + "<br>" + "复利月利率" + Math.round(fuliyuelilv * 100) / 100 + "%" + "</p>" + '<p class="w3">' + "总收益  " + Math.round(zongshouyi * 100) / 100 + "<br>" + '<span class="font12">' + '<span class="spanNum">' + "<font>利      息：</font>" + Math.round(lixi * 100) / 100 + "</span>" + '<span class="spanNum">' + "<font>投标奖励：</font>" + Math.round(toubiaojine * toubiaojiangli * 0.01 * 100) / 100 + "</span>" + '<span class="spanNum">' + "<font>续标奖励：</font>" + Math.round(toubiaojine * xuetoujiangli * 0.01 * 100) / 100 + "</span>" + '<span class="spanNum">' + "<font>手  续 费：</font>" + Math.round(lixi * fee * 100) / 100 + "</span>" + "</span>" + "</p>";
        $(".calWin").empty();
        $(".calWin").append(calWinHtml)
    }
    $(".calc_result").animate({left: '-625px'}, "slow");
}
function Borrow(original, yearratio, month) {
    month = parseInt(month);
    original = parseFloat(original);
    yearratio = parseFloat(yearratio);
    var timeSpan = month,
    active = yearratio * 10 / 12 * 0.001,
    t1 = Math.pow(1 + active, timeSpan),
    t2 = t1 - 1,
    tmp = t1 / t2,
    monthratio = active * tmp,
    monthBack = original * monthratio,
    totalBack = monthBack * timeSpan,
    totalInterest = totalBack - original,
    monthInterest = totalInterest / timeSpan;
    var objArray = new Array();
    objArray[0] = monthBack;
    objArray[1] = totalBack;
    objArray[2] = monthInterest;
    objArray[3] = totalInterest;
    var firstMonthBack = original * active;
    var monthBackArray = new Array();
    monthBackArray.push(firstMonthBack);
    if (month >= 2) {
        for (var i = 1; i < month; i++) {
            if (i == 1) {
                var iMonthBack = (original - (monthBack - monthBackArray[0])) * active;
                monthBackArray.push(iMonthBack)
            } else {
                var remainBack;
                var temp = "0";
                for (var j = 0; j < monthBackArray.length; j++) {
                    temp = (monthBack - monthBackArray[j]) + Number(temp)
                }
                remainBack = original - temp;
                var iMonthBack = remainBack * active;
                monthBackArray.push(iMonthBack)
            }
        }
    }
    var monthTotalBack = new Array();
    for (var i = 0; i < month; i++) {
        if (i != month - 1) {
            var imonthTotalBack = Math.round(monthBack * 100) / 100 - Math.round(monthBackArray[i] * 100) / 100;
            monthTotalBack.push(imonthTotalBack)
        } else {
            var temp = "0";
            for (var j = 0; j < monthTotalBack.length; j++) {
                temp = Number(temp) + monthTotalBack[j]
            }
            var imonthTotalBack = Number(original) - Number(temp);
            monthTotalBack.push(imonthTotalBack)
        }
    }
    objArray[4] = monthBackArray;
    objArray[5] = monthTotalBack;
    return objArray
}
function timeAddMonth(month, currentTime) {
    var ymd = new Array();
    ymd = currentTime.split("-");
    var d = new Date(ymd[0], ymd[1], ymd[2]),
    vYear = d.getFullYear(),
    vMon = d.getMonth(),
    vDay = d.getDate();
    var endDate = new Date(vYear, vMon + month, vDay),
    endY = endDate.getFullYear(),
    endM = endDate.getMonth(),
    endD = endDate.getDate();
    if (endM == "0") {
        endM = "12";
        endY = endY - 1
    }
    var s = endY + "-" + (endM < 10 ? "0" + endM: endM) + "-" + (endD < 10 ? "0" + endD: endD);
    return s
}
function timeAddDay(day, currentTime) {
    var d = new Date(currentTime),
    n = new Date(d.getTime() + 86400000 * day),
    endY = n.getFullYear(),
    endM = n.getMonth() + 1,
    endD = n.getDate();
    var s = endY + "-" + (endM < 10 ? "0" + endM: endM) + "-" + (endD < 10 ? "0" + endD: endD);
    return s
}
function checkToubiaoJine(tvalue) {
    var flag = false;
    if (tvalue == "") {
        $(".toubiaojine-alert").html('<font color="red">投标金额不能为空！</font>');
        flag = false
    } else {
        if (!tvalue.match(/^\+?(:?(:?\d+\.\d+)|(:?\d+))$/)) {
            $(".toubiaojine-alert").html('<font color="red">投标金额不合法！</font>');
            flag = false
        } else {
            if (!/^([^0]|.{2,})$/.test(tvalue)) {
                $(".toubiaojine-alert").html('<font color="red">投标金额不合法！</font>');
                flag = false
            } else {
                $(".toubiaojine-alert").html("");
                flag = true
            }
        }
    }
    return flag
}
function checkJieKuanQiXian(jvalue) {
    if (jvalue == "") {
        $(".jiekuanqixian-alert").html('<font color="red">借款期限不能为空！</font>');
        flag = false
    } else {
        if (!jvalue.match(/^\d+$/)) {
            $(".jiekuanqixian-alert").html('<font color="red">借款期限不合法！</font>');
            flag = false
        } else {
            if (jvalue <= 0) {
                $(".jiekuanqixian-alert").html('<font color="red">借款期限不能小于0！</font>');
                flag = false
            } else {
                $(".jiekuanqixian-alert").html("");
                flag = true
            }
        }
    }
    return flag
}
function checkLianlilv(lvalue) {
    var flag = false;
    if (lvalue == "") {
        $(".lianlilv-alert").html('<font color="red">年利率不能为空！</font>');
        flag = false
    } else {
        if (!lvalue.match(/^\+?(:?(:?\d+\.\d+)|(:?\d+))$/)) {
            $(".lianlilv-alert").html('<font color="red">年利率不合法！</font>');
            flag = false
        } else {
            if (!/^([^0]|.{2,})$/.test(lvalue)) {
                $(".lianlilv-alert").html('<font color="red">年利率不合法！</font>');
                flag = false
            } else {
                $(".lianlilv-alert").html("");
                flag = true
            }
        }
    }
    return flag
}
function checkToubiaoLilv(tvalue) {
    var flag = false;
    if (!tvalue.match(/^\+?(:?(:?\d+\.\d+)|(:?\d+))$/) && tvalue != "") {
        $(".toubiaojiangli-alert").html('<font color="red">投标奖励利率不合法！</font>');
        flag = false
    } else {
        if (!/^([^0]|.{2,})$/.test(tvalue) && tvalue != "") {
            $(".toubiaojiangli-alert").html('<font color="red">投标奖励利率不合法！</font>');
            flag = false
        } else {
            $(".toubiaojiangli-alert").html("");
            flag = true
        }
    }
    return flag
}
function checkXuebiaoLilv(xvalue) {
    var flag = false;
    if (!xvalue.match(/^\+?(:?(:?\d+\.\d+)|(:?\d+))$/) && xvalue != "") {
        $(".xubiaojiangli-alert").html('<font color="red">续标奖励利率不合法！</font>');
        flag = false
    } else {
        if (!/^([^0]|.{2,})$/.test(xvalue) && xvalue != "") {
            $(".xubiaojiangli-alert").html('<font color="red">续标奖励利率不合法！</font>');
            flag = false
        } else {
            $(".xubiaojiangli-alert").html("");
            flag = true
        }
    }
    return flag
}
function checkLixiguanlifei(xvalue) {
    var flag = false;
    if (!xvalue.match(/^\+?(:?(:?\d+\.\d+)|(:?\d+))$/) && xvalue != "") {
        $(".lixiguanlifei-alert").html('<font color="red">利息管理费不合法！</font>');
        flag = false
    } else {
        if (!/^([^0]|.{2,})$/.test(xvalue) && xvalue != "") {
            $(".lixiguanlifei-alert").html('<font color="red">利息管理费不合法！</font>');
            flag = false
        } else {
            $(".lixiguanlifei-alert").html("");
            flag = true
        }
    }
    return flag
};