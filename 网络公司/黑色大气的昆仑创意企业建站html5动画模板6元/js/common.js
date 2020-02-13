function saveBusiness() {
    var comName = document.getElementById("comName").value;
    var tel = document.getElementById("tel").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mesInfo = document.getElementById("mesInfo").value;
    var code = document.getElementById("code").value;
    if (tel.trim().length == 0 && email.length == 0) {
        alert('各项不能为空');
        return;
    }
    if (comName.length >= 50) {
        alert('公司名称不能超过50个字符');
        return;
    }
    if (tel.length > 20) {
        alert('电话不能超过20个字符');
        return;
    }
    if (name.length > 10) {
        alert('姓名不能超过5个字符');
        return;
    }
    if (email.length > 20) {
        alert('邮箱不能超过20个字符');
       return;
    }
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1 || email.indexOf("@") == 0 || email.indexOf(".") == 0 || email.indexOf(".") == email.length - 1 || email.indexOf("@") == email.length - 1) {
        alert('邮箱信息错误');
        return;
    }
    if (mesInfo.length > 300) {
        alert('内容不能超过300个字符');
        return;
    }
    if (code.length > 6) {
        alert('验证码不能超过6个字符');
        return;
    }
	    
}
function reset() {
    document.getElementById("comName").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mesInfo").value = "";
}