//获取cookie
function local_get(key) {
	return $.cookie(key);
}
//添加cookie
function local_add(key,value) {
	$.cookie(key, value, { path: "/" , expires: 30 }); 
}

//删除cookie
function local_delete(key) {
	$.cookie(key, null, { path: "/" }); 
}

// 存储登陆信息
function add_login_cookie(json) {
	local_add("loginMsg",JSON.stringify(json));
}

// 将cookie转化JSON
function get_login_cookie() {
	if(local_get("loginMsg") == null) {
		return null;
	}
	return JSON.parse(local_get("loginMsg"));
}

// 获取token
function get_login_token() {
	if(get_login_cookie() == null) {
		return null;
	} else {
		return get_login_cookie().token;
	}
}

// 同盾科技cookie
function getTongdunCookie() {
	var value = $.cookie("tongdunkeji-uuid");
	if(isEmpty(value)) {
		saveTongdunkeji(Math.uuid());
		value = $.cookie("tongdunkeji-uuid");
	}
	return value;
}

/*if(!isEmpty(get_login_cookie())) {
	token = get_login_cookie().token;
} else {
	var hrefs = window.location.href; 
	if(hrefs.indexOf("/yunditui/Clound") < -1) {
		window.location.href = "/yunditui/Clound";
	}
}*/

//获取公司名字
function get_CompanyName() {
	return local_get("companyname");
}
// 存储公司名字
function set_CompanyName(value) {
	local_add("companyname",value);
}

//获取项目ID
function get_SpreadProjectId() {
	return local_get("spreadProjectId");
}
// 存储项目ID
function set_SpreadProjectId(value) {
	local_add("spreadProjectId",value);
}

//获取地址栏参数
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return null;
}

function valueTovalue(obj1,obj2) {
	for ( var key in obj1) {
		obj2[key] = obj1[key];
	}
	return obj2; 
}
