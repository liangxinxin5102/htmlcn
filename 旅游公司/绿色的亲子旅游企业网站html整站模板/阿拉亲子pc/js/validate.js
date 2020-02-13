/**
 * @author Administrator
 */
function initValidator(base){
	
	$("#thisForm").validate({
		onkeyup:false,
		//设置验证规则   
		rules: {
			"userName": {
				required: true,
				userNameCheck: true
			},
			"passWord": {
				required: true,
				rangelength: [6, 12]
			},
			"passWordAgain": {
				required: true,
				rangelength: [6, 12],
				equalTo: "#passWord"
			},
			"corpName": {
				required: true
			},
			"sms": {
				required: true,
				isMobile: true
			},
			"email": {
				required: true,
				isEmail: true
			}
		},
		//设置错误信息  
		messages: {
			"userName": {
				required: "请输入用户名",
				userNameCheck: "请输入4-20位字母开头的字母或数字和下划线"
			},
			"passWord": {
				required: "请输入密码",
				rangelength: "密码长度为6-12位"
			},
			"passWordAgain": {
				required: "请再次输入密码",
				rangelength: "密码长度为6-12位",
				equalTo: "两次输入密码不相同"
			},
			"corpName": {
				required: "请输入公司名称"
			},
			"sms": {
				required: "请输入手机号码",
				isMobile: "请输入有效的手机号码"
			},
			"email": {
				required: "请输入邮箱",
				isEmail: "请正确填写邮箱格式"
			}
		},
		errorElement:"font",
		errorPlacement: function(error, element){
			error.appendTo(element.parent().find(".tipinfo"));
		},success:"valid"
	});

}
