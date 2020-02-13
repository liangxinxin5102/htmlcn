// JavaScript Document
$(function(){
	$("#Login").click(function(){
		$(this).colorbox({inline:true,href:"#formLoginRegis"});
		setTimeout(function(){
			$(".formLoginRegis-tab span").eq(0).trigger("click");
			},500);
		});
	$("#Register").click(function(){
		$(this).colorbox({inline:true,href:"#formLoginRegis"});
		setTimeout(function(){
			$(".formLoginRegis-tab span").eq(1).trigger("click");
			},500);
		});
	//登录注册切换
	$(".formLoginRegis-tab span").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		var index = $(this).index();
		$(".formLoginRegis-box").css("margin-left",$(this).index() * -372+"px");
		$(".formLoginRegis-tab-bg").css({"left":$(this).index()*136 + 50 +"px"});
	});
	//登录注册输入框获得焦点
	$(".formLoginRegis-box input[type=text]").focus(function(){
		$(this).parents(".inputbox").addClass("focus").removeClass("error");
		if($(this).val() == $(this).attr("normal")||$(this).val() == $(this).attr("tip")||$(this).val() == $(this).attr("error")){
			$(this).val("");
			}
		if($(this).attr("name")=="formLoginPsw"){
			$(this).hide().siblings("input[type=password]").show().focus().val("");
			}
		});
	//登录注册输入框失去焦点
	$(".formLoginRegis-box input[type=text]").blur(function(){
		$(this).parents(".inputbox").removeClass("focus");
		if($(this).val() == ""){
			$(this).val($(this).attr("normal"));
			}
		});
	$(".formLoginRegis-box input[type=password]").blur(function(){
		$(this).parents(".inputbox").removeClass("focus");
		if($(this).val() == ""){
			$(this).hide().siblings("input[type=text]").show();
			}
		});
	//两周内自动登录选择
	$(".form-Login em").click(function(){
		$(this).toggleClass("cur");
		var obj = $(this).find("input[type=checkbox]");
		var checked = obj.attr("checked");
		if(checked){
			obj.removeAttr("checked");
			}
			else{
				obj.attr("checked","checked");
				}
		});
	$(".form-Login .remember span.fl").click(function(){
		$(".form-Login em").trigger("click");
	});
	//同意用户协议
	$(".form-Regis em").click(function(){
		$(this).toggleClass("cur");
		var obj = $(this).find("input[type=checkbox]");
		var checked = obj.attr("checked");
		if(checked){
			obj.removeAttr("checked");
			}
			else{
				obj.attr("checked","checked");
				}
		});
	//验证错误点击×号关闭错误提示
	$(".formLoginRegis-box .inputbox i").click(function(){
		$(this).parents(".inputbox").removeClass("error");
		});
	//关闭弹窗
	$(".formLoginRegis-close").click(function(){
		$("#cboxClose").trigger("click");
		});	
	//登录验证
	TestAndVerify("Login",TestAndVerifyCallback);
	//注册验证
	TestAndVerify("Regis",TestAndVerifyCallback);
	
	//退出登录
	$("#LoginOut").click(function(){
		$.ajax({
			type:"POST",
			url:DomainConfig.main_site_domain+"/login.php?act=logOut",
			data:{ajax:1},
			dataType:"jsonp",
			jsonpCallback:function(data){
				TopLoginOut();
				if($(".main_loginbox").length>0){
					IndexLoginOut();
					}
				}
			});
		});
	$('#formLoginRegis input').bind('keyup', function(e){
		if(e.which == 13){
			var left = parseInt($(".formLoginRegis-box").css("margin-left"));
			if(left==0){
				$("button.formLoginBtn").trigger("click");
				}
			else{
				$("button.formRegisBtn").trigger("click");
				}
		}
	});
});



function TestAndVerifyCallback(objjson){
	$("#cboxClose").show();
	AjaxRefreshHead(objjson);
	if($(".main_loginbox").length>0){
		AjaxRefreshIndexUser(objjson);
		}
	if($(".flow_loginbox").length>0){
		window.location.reload();
		}  
                
	};
//刷新头部
function AjaxRefreshHead(objjson){
	/*$(".alreadylogin").removeClass("hide");
	$(".unlogin").addClass("hide");
	$(".alreadylogin .login").html(objjson.username);
	$(".top-select-car-type").html("点击更换车型")
		.before(objjson.carType?"<font>"+ objjson.carType +"</font>":"");
	$(".buycar-count").html(objjson.cartCount?objjson.cartCount : 0);*/
	$("a.welcome").html("您好");
	$(".login").hide().next().hide();
	var info = "<a class='login' href='http://"+ document.domain.replace("mall","member") +"/index.html' phone='"+ objjson.mobile +"'>"+ objjson.username +"</a>&nbsp;";
	if(objjson.roleid>0){
		info += "<a><img src='http://img."+ document.domain +"/version63/common/vip.png'/></a>";
	}
		info += "<a href='http://"+ document.domain.replace("mall","www") +"/login/logOut.html'>退出</a>";
	$(".com_top_l").append(info);
	
	if(objjson.carType){
		$('.choose_car_model_btn').prev('font').html(objjson.carType);
	}
};
//刷新主页banner右侧用户信息
function AjaxRefreshIndexUser(objjson){
	$(".main_alreadyLogin").removeClass("hide");
	$(".main_unLogin").addClass("hide");
	var mainbox = $(".main_alreadyLogin");
	mainbox.find("img").attr("src",objjson.userPhoto);
	mainbox.find(".info b").html(objjson.username);
	};
function jsonpCallback(data){
		var objson = data;
	  if(objson.errCode){
		  if(objson.errCode == 1){
			  callUser.val(callUser.attr("error")).parent().addClass("error");
			  };
		  if(objson.errCode == 2){
			  if(Elename=="Regis"){alert("注册失败");return;};
			  if(Elename=="Login"){
				  callPassword.show().siblings("input[type=password]").hide().val("");
				  }
			  callPassword.val(callPassword.attr("error")).parent().addClass("error");
			  };
		  if(objson.errCode == 3){
			  callUser.val(callUser.attr("tip")).parent().addClass("error");
			  };
		  }
	  else{
		  win_CallBack(objson);
		  $("#cboxClose").trigger("click");
		  }
}
//封装登录注册验证
var callUser,callPassword,Elename;
function TestAndVerify(elename,callback){
	return $(".form"+ elename +"Btn").bind('click',function(){
		var obj = $(this).parents(".formBox"),
			user = callUser = obj.find("input[name=form"+ elename +"User]"),
			password = callPassword = obj.find("input[name='form"+ elename +"Psw']"),
			name = user.val(),
			password_obj = elename =="Login" ? obj.find("input[type=password]"):password;
			psw = password_obj.val(),
			cookie_time = false;
			Elename = elename;
		var reg = /^1[3578]\d{9}$/;
		if(name=="" || !reg.test(name)){
			user.val(user.attr("tip")).parent().addClass("error");
			return;
			};
		if(psw=="" || psw==password.attr("normal")||psw==password.attr("tip")||psw==password.attr("error")){
			password.val(password.attr("tip")).parent().addClass("error");
			return;
			};
		if(elename =="Regis" && psw.length<6){
			password.val(password.attr("error")).parent().addClass("error");
			return;
			};
		if(elename == "Regis" && !obj.find("input[type=checkbox]").attr("checked") ){
			$.notice("请接受用户协议",3);
			return;
			}
		var post_url = elename == "Login" ? "/login.php?act=doLogin" : "/register.php?act=doRegister";
		if(elename=="Login" && obj.find("input[type=checkbox]").attr("checked")){
			cookie_time = true;
			};
		var dataParm = elename == "Login" ? {login_user:name,login_pwd:psw,cookie_time:cookie_time,ajax:1,ec_post:1} : {register_mobile:name,register_pwd:psw,ajax:1,ec_post:1};
		win_CallBack = callback;
		$.ajax({
			type : "POST",
			async: true,
			data : dataParm,
			dataType:"jsonp",
			url:DomainConfig.main_site_domain + post_url
			});
		});
		
	};
function TopLoginOut(){
	$(".alreadylogin").addClass("hide");
	$(".unlogin").removeClass("hide");
	$(".alreadylogin .login").html("");
	$(".top-select-car-type").css("margin-left","0px").html("选择车型").siblings("font").remove();
	$(".buycar-count").html(0);
};
function IndexLoginOut(){
	$(".main_alreadyLogin").addClass("hide");
	$(".main_unLogin").removeClass("hide");
	$('.front_user').val("");
	$('.front_pwd').val("");
};
