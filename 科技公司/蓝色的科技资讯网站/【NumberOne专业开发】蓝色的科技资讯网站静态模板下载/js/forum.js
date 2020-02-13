/**
 * Created by pc on 2015/8/12.
 */
var ele_name = 'name';
var ele_password = 'password';
var ele_confirmPassword = 'confirmPassword';
var ele_authenticCode = 'authenticCode';
var ele_contactPerson = 'contactPerson';
var ele_mobile="mobile";
var ele_contactTel="contactTel";
var ele_email = "email";
var ele_companyName = "companyName";
var ele_regAddr = "regAddr";
var ele_officeAddr = "officeAddr";
var ele_site = "site";
var ele_remark = "remark";

var cls_success = "success";
var cls_err = "err";
var cls_base = "reg-item clearfix";
var cls_cur = "cur";

var msg_nameFocus = '6-20个字符，支持字母、数字及“-”、“_”';
var msg_nameNotEmpty = '请输入用户名';
var msg_nameLength6To20 = '长度应为6~20位字符';
var msg_nameInvalidCode = '该用户名包含了非法字符，请重新输入';
var msg_nameCanntAllNumber = '不能为纯数字';
var msg_nameSuccess = '此用户名可用。注册成功后将不支持修改！';
var msg_passwordFocus = '6-20个字符，包含字母、数字或符号';
var msg_passwordNotEmpty = '请输入密码';
var msg_passwordLength6To20= '长度应为6-20位字符';
var msg_passwordCanntSameWord = '不能为同一字符';
var msg_passwordCanntAllNumber = '不能全为数字';
var msg_passwordInvalidCode = '非法字符，请使用字母加数字或符号的组合，6-20个字符';
var msg_confirmPasswordFocus= '请再次输入密码';
var msg_confirmPasswordNotSame= '两次密码不一致';
var msg_authenticCodeFocus = '请输入验证码';
var msg_authenticCodeNotEmpty = '请输入验证码';
var msg_authenticCodeOutOfDate = '验证码超时';
var msg_authenticCodeError = '验证码错误';
var msg_passwordCanntEqualName = '密码不能与用户名相同';
var msg_contactPersonFocus= '2-20个字符，可以由中文和英文组成';
var msg_contactPersonNotEmpty = "请输入联系人姓名";
var msg_contactPersonInvalidCode = "联系人姓名只能由中文和英文组成";
var msg_contactPersonMaxLength = "长度只能在2-20个字符之间";
var msg_contactPersonMinLength = "长度只能在2-20个字符之间";
var msg_contactPersonSuccess = "";
var msg_mobileFocus="请输入手机号码";
var msg_mobileNotEmpty = "请输入手机号码";
var msg_mobileInvalideCode = "手机格式错误，请重新输入";
var msg_mobileBeUsed = "手机号已被注册，请更换！";
var msg_mobileSuccess = "";
var msg_telephoneFocus = "正确的电话格式";
var msg_emailFocus = "请输入联系人邮箱";
var msg_emailNotEmpty = "请输入联系人邮箱";
var msg_emailInvalidCode = "请输入有效的邮箱地址";
var msg_emailSuccess = "";
var msg_companyNameFocus = "请输入工商局注册的公司全称。4-40个字符，支持中英文、数字及 - 、 _ 、（）、( )。";
var msg_companyNameNotEmpty = "请输入工商局注册的公司全称。4-40个字符，支持中英文、数字及 - 、 _ 、（）、( )。";
var msg_companyNameInvalid = "请输入工商局注册的公司全称。4-40个字符，支持中英文、数字及 - 、 _ 、（）、( )。";
var msg_companyNameInvalidLength = "长度应为4~40个字符";
var msg_companyNameSuccess = "";
var msg_regAddrFocus = "4-50个字符";
var msg_regAddrNotEmpty = "请输入公司注册地址";
var msg_regAddrInvalid = "公司注册地址长度只能在4-50位字符之间";
var msg_regAddrSuccess = "";
var msg_siteFocus = "如：http://www.gome.com.cn";
var msg_officeAddrFocus = "4-50个字符";
var msg_officeAddrInvalid = "公司办公地址长度只能在4-50位字符之间";
var msg_officeAddrNotEmpty = "请输入公司办公地址";
var msg_contactTelFocus = "按照常用的电话格式输入，如01088888888";
var msg_contactTelInvalid = "电话格式错误，请重新输入";
var msg_siteInvalid = "公司地址格式不正确";
var msg_remarkInvalid = "备注长度0-100个字符";
var msg_nameExists = '此用户名已被占用';


function handleFocus(ele) {
    if(!$("#" + ele + "Div").hasClass('cur')) {
        $("#" + ele + "Div").addClass('cur')
    }
    var value = $.trim($("#"+ele).val());
    if(!value) {
        showNormalTips(eval('msg_' + ele + 'Focus'), eval('ele_' + ele))
    }
}


function handleBlur(ele) {
    eval(ele+"Blur()");
}

function showErrorTips(msg, ele) {
    $("#"+ele).attr('verify', 'false');
    showTips(cls_err, msg, ele);
}

function showNormalTips(msg, ele) {
    showTips(cls_cur, msg, ele);
}

function showSuccessTips(msg, ele) {
    $("#"+ele).attr('verify', 'yes');
    showTips(cls_success, msg, ele);
}
//cls,可能只，success,err
//msg,显示消息
//ele,可能值，用户名(name)，密码(password)，确认密码(confirmPassword)，校验码(authenticCode)
function showTips(cls,msg,ele){
    var expression = "#" + ele + "Tips";

    resetElement(ele);
    if(cls == cls_success || msg) $(expression).append('<i></i>');
    if(msg) $(expression).append('<div class="msg-cnt">' + msg + '</div>');

    expression = "#" + ele + "Div";
    $(expression).addClass(cls);
}
function resetElement(ele) {
    //reset class
    $("#" + ele + "Div").attr('class', cls_base);
    //clear message
    $("#" + ele + "Tips").empty();
}
function passwordBlur(){
    $("#"+ele_password+"Tips").show();
}
function changePwdSafe(){
    //initial
    $("#"+ele_confirmPassword).attr("disabled", true);

    $("#"+ele_confirmPassword+"Div").attr('class', cls_base);
    $("#"+ele_confirmPassword+"Tips").empty();

    var password = $("#registerForm #password").val();

    //初始化为弱
    $(".pw-safe").removeClass('pw-halfstrong');
    $(".pw-safe").removeClass('pw-medium');
    $(".pw-safe").removeClass('pw-weak');
    $(".pw-safe").addClass('pw-weak');

    $("#"+ele_password+"Tips").hide();
    if(!checkPassword(password, true)) return false;

    //(d)密码强度判断的规则
    var matchs1 = password.match('[~!@#$%^&*()_+\\-=]');
    var matchs2 = password.match('[A-Za-z]');
    var matchs3 = password.match('[0-9]');
    var x = 0;
    if(matchs1) x++;
    if(matchs2) x++;
    if(matchs3) x++;
    $(".pw-safe").removeClass('pw-halfstrong');
    $(".pw-safe").removeClass('pw-medium');
    $(".pw-safe").removeClass('pw-weak');
    if(x==3) {
        $(".pw-safe").addClass('pw-halfstrong');
    } else if(x==2) {
        $(".pw-safe").addClass('pw-medium');
    } else {
        $(".pw-safe").addClass('pw-weak');
    }

    //(e)
    showSuccessTips('',ele_password);
    //激活确认密码输入
    $("#confirmPassword").removeAttr("disabled");
    $("#"+ele_password+"Div").removeClass('cur');
    return true;
}
function nameBlur(){
    //不需要去空格，空格算非法字符
    var name = $("#registerForm #name").val();
    //(b)
    if(!name) {
        showErrorTips(msg_nameNotEmpty, ele_name);
        return false;
    }

    var c = 0;
    if(!name.match('.{' + (6 - c) + ',' + (20 - c) + '}')) {
        showErrorTips(msg_nameLength6To20, ele_name);
        return false;
    }
    //(e)
    if(name.match('^[0-9]{1,}$')) {
        showErrorTips(msg_nameCanntAllNumber, ele_name);
        return false;
    }
    //(d)不能以数字开头
    var matchs = name.match('^[A-Za-z0-9_-]+$');//^[^0-9]\\w+$
    if(!matchs || matchs[0].length != name.length) {
        showErrorTips(msg_nameInvalidCode, ele_name);
        return false;
    }
    //验证用户名是否已存在
    var sendtimestamp=new Date().getTime();
    var url = "../validateExist.do?sendtimestamp="+sendtimestamp;
    $.ajax({
        type: "post",
        url: url,
        data:{login:name},
        success: function(data) {
            result =$.trim(data);
            var dataArray = result.split(':');
            var ret = dataArray[0];
            var returnMessage = dataArray[1];

            if(ret && ret=='true'){
                showErrorTips(msg_nameExists, ele_name);
                return false;
            }else if (returnMessage && returnMessage.length > 0 && returnMessage != '') {
                showErrorTips(returnMessage, ele_name);
                return false;
            } else{
                showSuccessTips(msg_nameSuccess, ele_name);
                $("#"+ele_name+"Div").removeClass('cur');
            }
        },
        error: function(){
            showSuccessTips(msg_nameSuccess, ele_name);
            $("#"+ele_name+"Div").removeClass('cur');
        }
    });
    return true;
}
function checkPassword(password, showMessage) {
    //(b)
    if(!password) {
        if(showMessage) showErrorTips(msg_passwordNotEmpty, ele_password);
        return false;
    }
    //6-20
    if(!password.match('.{6,20}')) {
        if(showMessage) showErrorTips(msg_passwordLength6To20, ele_password);
        return false;
    }
    //不能为同一字符
    if(isSameWord(password)) {
        if(showMessage) showErrorTips(msg_passwordCanntSameWord, ele_password);
        return false;
    }
    //不能全为数字
    if(password.match('^[0-9]{1,}$')) {
        if(showMessage) showErrorTips(msg_passwordCanntAllNumber, ele_password);
        return false;
    }

    if(!password.match('[A-Za-z0-9~!@#$%^&*()_+\\-=]+') || password.match('[A-Za-z0-9~!@#$%^&*()_+\\-=]+')[0].length < password.length) {
        if(showMessage) showErrorTips(msg_passwordInvalidCode, ele_password);
        return false;
    }

    //密码不能与用户名相同
    var loginName = $.trim($("#name").val());
    if(loginName==password) {
        if(showMessage) showErrorTips(msg_passwordCanntEqualName, ele_password);
        return false;
    }

    showSuccessTips('',ele_password);
    return true;
}
function enableConfirmPassword() {
    var password = $.trim($("#registerForm #password").val());
    var confirmPassword = $.trim($("#" + ele_confirmPassword).val());

    confirmPasswordDisabled(!confirmPassword);

    confirmPasswordDisabled(!checkPassword(password, false) && !confirmPassword);
}
//true or false
function confirmPasswordDisabled(disabled) {
    if(disabled) {
        $("#" + ele_confirmPassword).attr("disabled", true);
    } else {
        $("#" + ele_confirmPassword).removeAttr("disabled");
    }
    resetElement(ele_confirmPassword);
}
function isSameWord(text) {
    if(text) {
        var c = text.substr(0,1);
        for(var i = 1; i < text.length; i++) {
            var c2 = text.substr(i, 1)
            if(c != c2) {
                return false;
            }
        }
    }

    return true;
}
function confirmPasswordBlur() {
    var password = $("#registerForm #password").val();
    var confirmPassword = $("#registerForm #confirmPassword").val();

    if(!confirmPassword) {
        showErrorTips(msg_passwordNotEmpty, ele_confirmPassword);
        return false;
    }

    if(password != confirmPassword) {
        showErrorTips(msg_confirmPasswordNotSame, ele_confirmPassword);
        return false;
    }

    showSuccessTips('', ele_confirmPassword);
    $("#"+ele_confirmPassword+"Div").removeClass('cur');
    return true;
}
function contactPersonBlur() {
    $("#"+ele_contactPerson).attr('verify', 'false');
    if(checkEmpty(ele_contactPerson, msg_contactPersonNotEmpty, msg_contactPersonSuccess)
        && checkNameRule(ele_contactPerson, msg_contactPersonInvalidCode, msg_contactPersonSuccess)
        && checkMaxLength(ele_contactPerson, 20, msg_contactPersonMaxLength, msg_contactPersonSuccess)
        && checkMinLength(ele_contactPerson, 2, msg_contactPersonMinLength, msg_contactPersonSuccess)){
        $("#"+ele_contactPerson).attr('verify', 'yes');
    }
}

function checkEmpty(f, message, zmessage) {
    if ($.trim($("#"+f).val()).length == 0) {
        showErrorTips(message,f)
        return false;
    } else {
        showSuccessTips(zmessage,f);
        return true;
    }
}
function checkNameRule(f, message, zmessage) {
    var valideChars = /^[A-Za-z\u4e00-\u9fa5\•\·]+$/;//可以含有的字符
    var dotStarts = /^[\•\·]+/;//以点开始
    var dotEnds = /[\•\·]+$/;//以点结束
    var value = $("#"+f).val();
    if (!valideChars.test(value) || dotStarts.test(value) || dotEnds.test(value)) {
        showErrorTips(message,f)
        return false;
    } else {
        showSuccessTips(zmessage,f);
        return true;
    }
}

function checkMaxLength(f, length, message,zmessage) {
    var value = $("#"+f).val();

    if ($.trim(value).length != 0 && getStringLength(value) > length) {
        showErrorTips(message,f)
        return false;
    } else {
        showSuccessTips(zmessage,f);
        return true;
    }
}


function checkMinLength(f, length, message,zmessage) {
    var value = $("#"+f).val();
    if ($.trim(value).length != 0 && getStringLength(value) < length) {
        showErrorTips(message,f)
        return false;
    } else {
        showSuccessTips(zmessage,f);
        return true;
    }
}
function mobileBlur(){
    var mobileNumber = $.trim($("#mobile").val());
    $("#"+ele_mobile+"Div").removeClass("cur");
    if(mobileNumber.length==0){
        showErrorTips(msg_mobileNotEmpty, ele_mobile);
        return false;
    }
    if(!validateMobileNumber()){
        showErrorTips(msg_mobileInvalideCode, ele_mobile);
        return false;
    }/* else{
     var pathForMobile="../../myaccount/gadgets/validateMobile.jsp";//加入验证路径
     var pDataForMobile={
     validateMobileName:mobileNumber
     };
     $.ajax({
     type: "post",
     url: pathForMobile,
     data:pDataForMobile,
     success: function(data) {
     var dataArray=data.split("|");
     if(dataArray.length>1){
     showErrorTips(msg_mobileBeUsed, ele_mobile);
     return false;
     }else{
     showSuccessTips(msg_mobileSuccess, ele_mobile);
     return true;
     }
     }
     });
     }*/
    showSuccessTips(msg_mobileSuccess, ele_mobile);
    return true;
}
function validateMobileNumber(){
    return checkMobileNumber($("#"+ele_mobile).val());
}
function contactTelBlur(){
    var value = $("#"+ele_contactTel).val();
    resetElement(ele_contactTel);
    if(value) {
        var regTel = /^\d{11}$/;
        if(!regTel.test(value)) {
            showErrorTips(msg_contactTelInvalid, ele_contactTel);
            return false;
        }
        showSuccessTips('', ele_contactTel);
    }
    return true;
}
function emailBlur(){
    var value = $('#'+ele_email).val();
    if(value.replace(/\s/g,'') == '') {
        showErrorTips(msg_emailNotEmpty, ele_email);
        return false;
    }
    if(!checkEmail(value)){
        showErrorTips(msg_emailInvalidCode, ele_email);
        return false;
    }
    showSuccessTips(msg_emailSuccess, ele_email);
    return true;
}
function checkEmail(email){
    return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email);
}
function companyNameBlur(){
    var value = $('#'+ele_companyName).val();
    if(!value.replace(/\s/g,'')) {
        showErrorTips(msg_companyNameNotEmpty, ele_companyName);
        return false;
    }
    if(!checkMinLength(ele_companyName, 4, msg_companyNameInvalidLength, msg_companyNameSuccess)) {
        return false;
    }

    if(!checkMaxLength(ele_companyName, 40, msg_companyNameInvalidLength, msg_companyNameSuccess)) {
        return false;
    }

    var znCount = getZNCount(value);
    var minLen = (4 - znCount) < 0 ? 0 : (4 - znCount);
    var maxLen = 40 - znCount;
    var reg = '[0-9A-Za-z-_()（）\u4e00-\u9fa5]{'+minLen+','+maxLen+'}';
    if(value.match(reg) == null
        || value.match(reg)[0].length != value.length) {
        showErrorTips(msg_companyNameInvalid, ele_companyName);
        return false;
    }

    showSuccessTips('', ele_companyName);
    return true;
}
function regAddrBlur(){
    var value = $('#'+ele_regAddr).val();
    value = value.replace(/\s/g,'');
    if(!value) {
        showErrorTips(msg_regAddrNotEmpty, ele_regAddr);
        return false;
    }

    if(getStringLength(value) < 4 || getStringLength(value) > 50) {
        showErrorTips(msg_regAddrInvalid, ele_regAddr);
        return false;
    }

    showSuccessTips('', ele_regAddr);
    return true;
}
function officeAddrBlur(){
    var value = $('#'+ele_officeAddr).val();
    value = value.replace(/\s/g,'');
    if(!value) {
        showErrorTips(msg_officeAddrNotEmpty, ele_officeAddr);
        return false;
    }

    if(getStringLength(value) < 4 || getStringLength(value) > 50) {
        showErrorTips(msg_officeAddrInvalid, ele_officeAddr);
        return false;
    }

    showSuccessTips('', ele_officeAddr);
    return true;
}

function handlerChange(ele){
    var count = 0;
    var content = $(ele).val();
    for(var i = 0; i < content.length; i++) {
        var str = content.charAt(i);
        if(str.match('[\\u4e00-\\u9fa5]')) {
            count += 2;
        }else{
            count ++;
        }
        if(count > 100){
            content = content.substring(0,i);
            break;
        }
    }
    if(count <= 100){
        $("#remarkWordTotal").html(count);
    }else{
        $(ele).val(content);
    }
}

function siteBlur(){
    resetElement(ele_site);
    var value = $('#'+ele_site).val();
    if(value.replace(/\s/g,'')) {
        var strRegex = "^((https|http|ftp|rtsp|mms)?://)"
            + "(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user
            + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.18
            + "|" // 允许IP和DOMAIN（域名
            + "([0-9a-z_!~*'()-]+\.)*" // 域名- www
            + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域
            + "[a-z]{2,6})" // first level domain- .com or .museu
            + "(:[0-9]{1,4})?" // 端口- :8
            + "((/?)|" // a slash isn't required if there is no file nam
            + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$"
        var re=new RegExp(strRegex);
        if(re.test(value)) {
            showSuccessTips('', ele_site);
            return true;
        } else {
            showErrorTips(msg_siteInvalid, ele_site);
            return true;
        }
    }
}

function notEmptyValidate(e, msg_notEmpty, msg_success) {
    var value = $('#'+e).val();
    if(value.replace(/\s/g,'') == '') {
        showErrorTips(msg_notEmpty, e);
        return false;
    }
    showSuccessTips(msg_success, e);
    return true;
}

function authenticCodeBlur() {
    var authenticCode = $.trim($("#authenticCode").val());
    if(!authenticCode) {
        showErrorTips(msg_authenticCodeNotEmpty, ele_authenticCode);
    }
}
function validateAuthenticCode() {
    var authenticCode = $.trim($("#authenticCode").val());
    if(authenticCode.length != 4) {
        return;
    }

    var options = {
        async: false,
        data:{type : 'validate',code : authenticCode},
        url: storeSite+"/global/captchaContainer.jsp",
        success: function(data){
            var verifyFlag = $.trim(data);
            if(verifyFlag==1||verifyFlag=="1"){
                showSuccessTips('', ele_authenticCode);
                $("#"+ele_authenticCode+"Div").removeClass('cur');
            }else if(verifyFlag==0||verifyFlag=="0"){
                showErrorTips(msg_authenticCodeError, ele_authenticCode);
            }else if(verifyFlag==2||verifyFlag=="2"){
                showErrorTips(msg_authenticCodeOutOfDate, ele_authenticCode);
            }else{
                showErrorTips(msg_authenticCodeOutOfDate, ele_authenticCode);
            }
        },
        error: function(){
            showErrorTips(msg_authenticCodeOutOfDate, ele_authenticCode);
        }
    };
    $.ajax(options);
}
function remarkBlur() {
    var value = $('#'+ele_remark).val();
    if(getStringLength(value) > 100) {
        showErrorTips(msg_remarkInvalid, ele_remark);
        return false;
    }
    resetElement(ele_remark);
}
function getStringLength(text) {
    var len = 0;
    if(text) {
        len = text.length + getZNCount(text) + getFullWidthCount(text);
    }
    return len;
}
//获取中文数量
function getZNCount(text) {
    var count = 0;

    if(text) {
        for(var i = 0; i < text.length; i++) {
            var str = text.charAt(i);
            if(str.match('[\\u4e00-\\u9fa5]')) {
                count = count + 1;
            }
        }
    }
    return count;
}
//获取全角数量
function getFullWidthCount(text) {
    var count = 0;
    if(text) {
        var m = text.match('[\uFF00-\uFFFF]+');
        if(m) {
            count = m[0].length;
        }
    }
    return count;
}
function changeImageAuthenticCode(contextPath, containerId) {
    function refreshOthers() {
        $(".captcha-container").each(function() {
            var currentId = $(this).attr("id");
            if (containerId == currentId) {
                return
            }
            loadImageAuthenticCode(contextPath, currentId, "display")
        })
    };
    loadImageAuthenticCode(contextPath, containerId, "generate", refreshOthers)
}
function refreshImageAuthenticCode(contextPath, containerId) {
    loadImageAuthenticCode(contextPath, containerId, "display")
};

function loadImageAuthenticCode(contextPath, containerId, type, callback) {
    var imageAuthenicAttr = $("#" + containerId + " .captcha-attr");
    var path = contextPath + "/images/generatorCode.no?type=" + type + "&containerId=" + containerId;
    var height = imageAuthenicAttr.attr("img-height");
    if (height != undefined) {
        path = path + "&height=" + height
    };
    var width = imageAuthenicAttr.attr("img-width");
    if (width != undefined) {
        path = path + "&width=" + width
    };
    var codeSize = imageAuthenicAttr.attr("codeSize");
    if (codeSize != undefined) {
        path = path + "&codeSize=" + codeSize
    };
    var availableTime = imageAuthenicAttr.attr("availableTime");
    if (availableTime != undefined) {
        path = path + "&availableTime=" + availableTime
    };
    var noteTitle = imageAuthenicAttr.attr("noteTitle");
    if (noteTitle != undefined) {
        path = path + "&noteTitle=" + noteTitle
    };
    path = path + "&refreshkey=" + Math.random();
    $("#" + containerId).load(path, callback)
}
