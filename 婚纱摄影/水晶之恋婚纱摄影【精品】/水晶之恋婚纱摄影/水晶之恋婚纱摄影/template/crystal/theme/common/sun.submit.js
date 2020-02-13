$(function(){

	//初始化from提交事件
	var obj = $("from.sun_submit");
	if(obj.length>0){
		obj.each(function(e){
			var _this = this;
			$(_this).find("[name='enroll']").on("click",function(){commonSubmit(_this);return false;});
			//$(_this).find("a[name='enroll']").on("click",function(){alert("ok");});
		});
	}

	var obe = $("form.sun_submit");
	if(obe.length>0){
		obe.each(function(e){
			var _this = this;
			$(_this).find("[name='enroll']").on("click",function(){commonSubmit(_this);return false;});
			//$(_this).find("a[name='enroll']").on("click",function(){alert("ok");});
		});
	}
});

function isEmail(str){ 
	var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
	return reg.test(str); 
}
function _chk(str){str=$.trim(str);return str!='' && str!=null && typeof str!='undefined'}
function vxxcode(xcode,n){
	var vcode = prompt(n>0?"验证码输入有误，请重新输入！":"验证码已发送至您的手机，请输入进行验证！","");
	if (_chk(vcode)){
		if(vcode==xcode){
			return true;
		}else{
			n=n+1;
			return vxxcode(xcode,n);
		}
	}
}

function commonSubmit(e){
	//alert("已收到您提交的资料，请耐心等待工作人员与您联系！");
	var n0 = $(e).find("input[name='uname']").val(),
		n1 = $(e).find("input[name='mobile']").val(),
		n2 = $(e).find("input[name='email']").val(),
		n3 = $(e).find("input[name='authcode']").val(),
		n4 = $("body").attr("data-id"),
		n5 = $(e).attr("title");
	if($(".summary_ext").length>0){
		n6 = $(".summary_ext").serialize();
	}else{
		n6 = $(e).find("[name='summary']").val();
	}

	if(_chk(n2)){
		if(!isEmail(n2)){alert("邮箱格式不正确！");return false;};
	}
	/*
	$.post("/index.php?enroll-send",{mobile:n1},function(data){			//手机短信验证；
		if(data.e==1){
			if(vxxcode(data.m,0)){
				$.post("index.php?enroll-edit",{eq0:n0,eq1:n1,eq2:n2,authcode:n3,eq4:n4,eq5:n5,eq6:n6},function(data){
					if(data.e=='1'){
						alert("已收到您提交的资料，请耐心等待工作人员与您联系！");
						parent.location.reload();
					}else{
						alert(data.m);
						$("input[name='authcode']").focus();				
					}
					return false;
				}, "json");					
			}
		}else{
			alert(data.m);
		}
 	}, "json");
	*/
				$.post("index.php?enroll-edit",{eq0:n0,eq1:n1,eq2:n2,authcode:n3,eq4:n4,eq5:n5,eq6:n6},function(data){
					if(data.e=='1'){

						layer.open({
			                title:false,
			                btn:false,
			                shadeClose:true,
			                shade:0.6,
			                area: ['705px', '426px'],
			                content:$(".layerCtn").html()
			              });
						// alert("已收到您提交的资料，请耐心等待工作人员与您联系！");
						// parent.location.reload();
						return false;
					}else{
						// alert();
						layer.msg(data.m);
						$("input[name='authcode']").focus();				
					}
					return false;
				}, "json");	
}