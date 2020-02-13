$(function(){

	
/*	//记住密码
	$("#info").on("click",function(){
		if($(this).prop("checked")){
			var name = $("input[name='loginName']").val();
			setCookie(name,  10, basePath,1);
		}else{
			clearCookie("rememberMe1");	
			clearCookie("username1");
		}		
	})*/
	
	//表单重置
	$("#username_login")[0].reset();
	//获取cookie数据
	var rememberMe =unescape(getCookie("rememberMe1"));
	var username =unescape(getCookie("username1"));
	if("" != rememberMe && null != rememberMe&&username!=""&&username!="username1"&&rememberMe!="undefined"){
		$("#info").attr("checked",true);
		$("input[name='loginName']").val(username);
	}else{
		$("input[name='loginName']").val("");
	}
	
	//绑定回车键
	$(document).keyup(function (event) {  
	    var keycode = event.which;  
	    if (keycode == 13) {  
	    		loginFormSubmit();   
	    }  
	 }); 
	
	//登陆按钮
    $("#login_btn").click(function () {
    	loginFormSubmit();   
    });  
    
    });


/*
 * 提交登陆请求 
 * */
function loginFormSubmit(){
	var loginName=$("#loginName").val();
	var password=$("#password").val();
	var validCode=$("#validCode").val();

	if(loginName==null||loginName==""){//判断用户名
		$("#tip").html('<div class="login-error"><span class="note error">'+ "用户名不能为空"+'</span></div>');
		return false;
	}
	if(password==null||password==""){//判断密码
		$("#tip").html('<div class="login-error"><span class="note error">'+ "密码不能为空"+'</span></div>');
		return false;
	}

	if(validCode==null||validCode==""){//判断验证码
		$("#tip").html('<div class="login-error"><span class="note error">'+ "验证码不能为空"+'</span></div>');
		return false;
	}
	
	if(loginName.indexOf(' ')!=-1){
		$("#loginName").val($.trim($("#loginName").val()));
	}
	
	//请求后台
    $.ajax({
    	url:  "username/login.html",
		data: $("#username_login").serialize(),
		type: "POST",
		dataType:"json",
		success: function(data){
			if(data.isSuccess){
				
				//判断是否记住密码
				var location = (window.location+'').split('/');
				var basePath = location[0]+'//'+location[2]+'/'+location[3];
				if($("#info").prop("checked")){
					var name = $("input[name='loginName']").val();
					setCookie(name,  10, basePath,1);
				}else{
					clearCookie("rememberMe1");	
					clearCookie("username1");
				}
				window.location.href= data.url;
			}else{
				$("#tip").html('<div class="login-error"><span class="note error">'+ data.msg +'</span></div>');
				$("#login_validCode").click();   
	    		$("#validCode").val("");
			}
		}
    });
}


/*
 * 获取cookie 
 * */
function getCookie(name){
	var strCookie = document.cookie;
	var arrCookie = strCookie.split(";");
	for(var i = 0;i < arrCookie.length; i++){
		var arr = arrCookie[i].split("=");
		if($.trim(arr[0])==$.trim(name)){
			return arr[1];
		}
	}
	return "";
} 

/*
 * 记住用户名  设置cookie 
 * */
function setCookie(username1,day,path,remeberMe){
    var username = escape(username1);
    var rememberMe = escape(remeberMe);
    var expires = new Date();
     expires.setTime(expires.getTime() + day*3600000);
     _expires = (typeof hours) == "string" ? "" : ";expires=" + expires.getHours();
     
     document.cookie = ("domain=/");
     document.cookie = ("expires="+expires);
     document.cookie=("username1"+"="+username); 
     document.cookie=("rememberMe1"+"="+rememberMe);
}

//清除cookie  
function clearCookie(name) {  
    setCookie(name, "", -1);  
}  


