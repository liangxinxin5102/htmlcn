/*
Files list:
/js/index.js
/js/dmsearch_index.js
*/

// ===========================
//js/index.js
jq(function(){
    if(typeof(window.startBanner)=='function')
        startBanner();

    //合作伙伴循环
    jq("#partners_section").als({
        visible_items: 8,
        scrolling_items: 7,
        viewport_width: 1120,
        wrapper_width:1120,
        circular:'yes',
        autoscroll:'no'
    });
});

// ===========================
//js/dmsearch_index.js
jq(function() {
	//背景色渐变效果
	jq(".boxes .indexpro_block .item").mouseover(function(){
		jq(this).children("span").addClass("hovercss");
		jq(this).css("color","#FFFFFF");
		jq(this).children("div .item-content").children("ul").hide();
		jq(this).children("div .item-content").children(".info-box").show();
	}); 
	jq(".boxes .indexpro_block .item").mouseout(function(){
		jq(this).children("span").removeClass("hovercss");
		jq(this).css("color","#333333");
		jq(this).children("div .item-content").children("ul").show();
		jq(this).children("div .item-content").children(".info-box").hide();
	}); 
	var objs = jq(".boxes  .indexpro_block .item");
	for(var i = 0, len = objs.length; i < len; i++){
		new ColorFade(objs[i], {StartColor: "#FFFFFF", EndColor: "#046b9f", Background: true, Speed: 20});
	}
	
	
	//输入框效果
	var valText;
	jq(".domainSearch").focus(function(){
	  valText = jq(".domainSearch").val();
	  jq(".domainSearch").val("");
	});
	jq(".domainSearch").blur(function(){
	  if (jq(".domainSearch").val() == "") {
		jq(".domainSearch").val(valText);
	  }
	});
	
	//中英文选择效果
	jq(".sufSearch_zh").css("left",jq(".sufSearch").offset().left);
	jq(".sufSearch").click(function(){
		if(jq(".sufSearch_zh").css("display")=='none'){
			jq(".sufSearch_zh").show();
			
		}else if(jq(".sufSearch_zh").css("display")=='block'){
			jq(".sufSearch_zh").hide();
		}
	});
	jq(".sufSearch_zh").click(function(){
		if(jq(".sufSearch_zh").html()=='中文'){
			jq("#DomainName").val("请输入您想要注册的域名，如:飞数");
			jq(".sufSearch").html("中文");
			jq(".sufSearch_zh").html("英文");
			jq("#yingwen_tlds").hide();
			jq("#zhongwen_tlds").show();
			//切换成中文时后缀选择的checkbox
			cg_hidtlds('zh');
		}else{
			jq("#DomainName").val("请输入您想要注册的域名，如:sudu");
			jq(".sufSearch").html("英文");
			jq(".sufSearch_zh").html("中文");
			jq("#yingwen_tlds").show();
			jq("#zhongwen_tlds").hide();
			
			//切换成英文时后缀选择的checkbox
			cg_hidtlds();
		}
		jq(".sufSearch_zh").hide();
	});
	
	//后缀选择效果
	show_alltlds(slds_en_str,slds_ch_str);
	jq(".SearchPane ul li").click(function(){
		if(jq(this).attr('class')=='on'){
			jq(this).removeClass("on");
			jq(this).children("span").removeClass("glyphicon glyphicon-ok");
			var selvalue= jq(this).children("label").html().replace(/\./gi,'');
			jq("#"+selvalue).prop("checked",false);
		}else{
			jq(this).addClass("on");
			jq(this).children("span").addClass("glyphicon glyphicon-ok");
			var selvalue= jq(this).children("label").html().replace(/\./gi,'');
			jq("#"+selvalue).prop("checked",true);
		}
	});
	jq(".SearchPane ul li").mouseover(function(){
		if(jq(this).attr('class')!='on'){
			jq(this).addClass("over");
		}
	});
	jq(".SearchPane ul li").mouseout(function(){
		if(jq(this).attr('class')!='on'){
			jq(this).removeClass('over');
		}
		
	});
})

function cg_hidtlds(type){
 if(type=='zh'){
	var htmlstr='<input type="hidden" name="enc" value="G">';
	jq("#zhongwen_tlds li").each(function(){
	    var selvalue= jq(this).children("label").html();
		var selid= jq(this).children("label").html().replace(/\./gi,'');
		htmlstr+='<input type="checkbox" name="suffix[]" id="'+selid+'" value="'+selvalue+'">';
	});
	jq("#hidtlds").html(htmlstr);
	jq("#zhongwen_tlds .on").each(function(){
		var selvalue= jq(this).children("label").html().replace(/\./gi,'');
		jq("#"+selvalue).prop("checked",true);
	})
 }else{
	var htmlstr='<input type="hidden" name="enc" value="E">';
	jq("#yingwen_tlds li").each(function(){
	    var selvalue= jq(this).children("label").html();
		var selid= jq(this).children("label").html().replace(/\./gi,'');
		htmlstr+='<input type="checkbox" name="suffix[]" id="'+selid+'" value="'+selvalue+'">';
	});
	jq("#hidtlds").html(htmlstr);
	jq("#yingwen_tlds .on").each(function(){
		var selvalue= jq(this).children("label").html().replace(/\./gi,'');
		jq("#"+selvalue).prop("checked",true);
	})
 }
}

function show_alltlds(tlds_en,tlds_ch){
	tlds_en_arr=tlds_en.split(';');
	var i=0;
	jq("#yingwen_tlds li").each(function(){
		var temparr= tlds_en_arr[i].split('_');
	    var selvalue= jq(this).children("label").html(temparr[0]);
		if(temparr.length>1&&temparr[1]=='checked'){
			jq(this).addClass("on");
			jq(this).children("span").addClass("glyphicon glyphicon-ok");
		}
		i++;
	});
	tlds_ch_arr=tlds_ch.split(';');
	var i=0;
	jq("#zhongwen_tlds li").each(function(){
		var temparr= tlds_ch_arr[i].split('_');
	    var selvalue= jq(this).children("label").html(temparr[0]);
		if(temparr.length>1&&temparr[1]=='checked'){
			jq(this).addClass("on");
			jq(this).children("span").addClass("glyphicon glyphicon-ok");
		}
		i++;
	});
	cg_hidtlds();
}

// ===========================
//js/index_check_dm.js
//域名注册验证函数
function check_dmform(f){
	/*
	var znum = checkedCount(f,'suffix[]');
	if(znum < 1){
		jq("#DomainName").val('请选择要查询域名的后缀！');
		return false;
	}
	*/
	
	var domain = f.DomainName.value;
	if(f.enc.value=="G"){
		return check_dmform_zn2(f);
	}else{
		if(!(/^(?:[0-9a-z]+(?:-[0-9a-z]+)*)+$/i.test(domain))){
			Sudu.alert('英文域名格式错误！');
			//print_indexerr('英文域名格式错误！');
			return false;
		}
	}
	return true;
}

function check_dmform_zn2(f){
	var checkedarr = new Array();
	var checkedind = 0;
	var checkbox=f["suffix[]"]; 
	for(var i=0;i<checkbox.length;i++){
		if(checkbox[i].checked){
			checkedarr[checkedind] = checkbox[i].value;
			checkedind++;
		}
	}
	var domain = f.DomainName.value;
	if(domain.indexOf(".")>-1){
		Sudu.alert('中文域名格式错误！');
		//alert('中文域名格式错误！');
		//print_indexerr('中文域名格式错误！');
		return false;
	}
	if(/^\w+$/.test(domain)||!(/^[\u4E00-\u9FA50-9a-z]+(?:-[\u4E00-\u9FA50-9a-z]+)*$/i.test(domain))){
		for(var i=0;i<checkedarr.length;i++){
			if(checkedarr[i]==".com"||checkedarr[i]==".net"||checkedarr[i]==".cn"||checkedarr[i]==".网络"||checkedarr[i]==".公司"||checkedarr[i]==".biz"||checkedarr[i]==".cc"||checkedarr[i]==".tw"||checkedarr[i]==".name"){
				Sudu.alert('中文域名格式错误！');
				//alert('中文域名格式错误！');
				//print_indexerr('中文域名格式错误！');
				return false;
			}
		}
	}
	return true;
}

/**
 * 检查表单的多选项选中的数目(通常用来限制查询域名时的数目)
 * @param string form 表单id或表单元素
 * @param string name 表单元素的name. 只能是checkbox或允许多选的select元素的name
 * @return int 当前选中的数目
 */
function checkedCount(form,name){
    var f = form;
    if('string' == typeof(form)){
        f = document.getElementById(form);
        if(!f){
			Sudu.alert(form + ' is not a Form');
			//alert(form + ' is not a Form');
            //print_indexerr(form + ' is not a Form');
            return;
        }
    }
    var param,eles,tagName,ele;
    eles = f[name];
    if(!eles['length']){
		Sudu.alert(name+' num is 0!');
		//alert(name+' num is 0!');
        //print_indexerr(name+' num is 0!');
        return;
    }
    ele = eles[0];
    tagName = (ele['tagName']).toLowerCase();
    if('input' == tagName) tagName = ele['type'];
    if('option' == tagName){
        eles = eles['options'];
        param = 'selected';
    }else if('checkbox' == tagName){        
        param = 'checked';
    }else{
		Sudu.alert(name+' is not a checkbox or a select Element!');
		//alert(name+' is not a checkbox or a select Element!');
        //print_indexerr(name+' is not a checkbox or a select Element!');
        return;
    }
    
    var num = 0;
    var len = eles['length'];
    for(var i=0;i<len;++i){
        if(eles[i][param]) ++num;
    }
    return num;
}

function print_indexerr(errstr){
	jq("#DomainName").val(errstr);
	shake(jq("#DomainName"),"domainSearch_red",3);
}

function shake(ele,cls,times){
	var i = 0,t= false ,o=ele.attr("class")+" ",c ="",times=times||2;
	if(t) return;
	t= setInterval(function(){
		i++;
		c = i%2 ? o+cls : o;
		ele.attr("class",c);
		if(i==2*times){
			clearInterval(t);
			ele.removeClass(cls);
		}
	},200);
};

function checkCn(){
	var DomainName = document.getElementById("DomainName").value;
	if(!(/.*[\u4e00-\u9fa5]+.*$/.test(DomainName))){
		document.getElementById("zgcheck").checked = true;
		
		document.getElementById("comcheck").checked = false;
		document.getElementById("netcheck").checked = false;
		document.getElementById("cncheck").checked = false;
		document.getElementById("wlcheck").checked = false;
		document.getElementById("namecheck").checked = false;
		document.getElementById("gscheck").checked = false;
		document.getElementById("bizcheck").checked = false;
		document.getElementById("cccheck").checked = false;
		document.getElementById("twcheck").checked = false;
	}else{
		document.getElementById("comcheck").checked = true;
		document.getElementById("netcheck").checked = true;
		document.getElementById("cncheck").checked = true;
		document.getElementById("wlcheck").checked = true;
		document.getElementById("zgcheck").checked = true;
		
		document.getElementById("namecheck").checked = false;
		document.getElementById("gscheck").checked = false;
		document.getElementById("bizcheck").checked = false;
		document.getElementById("cccheck").checked = false;
		document.getElementById("twcheck").checked = false;
	}
}

//中文域名注册验证函数
function check_dmform_zn3(f){
	var checkedarr = new Array();
	var checkedind = 0;
	var checkbox=f["suffix[]"]; 
	for(var i=0;i<checkbox.length;i++){
		if(checkbox[i].checked){
			checkedarr[checkedind] = checkbox[i].value;
			checkedind++;
		}
	}
    var sld = f.DomainName.value;
	if(sld.indexOf(".")>-1){
		Sudu.alert('中文域名格式错误！');
		//alert('中文域名格式错误！');
		return false;
	}
    var reg = /^(?:[\u4E00-\u9FA50-9a-z]+(?:-[\u4E00-\u9FA50-9a-z]+)*)+$/;
   if(!reg.test(sld) || sld.length<1 || !(/[\u4E00-\u9FA5]/ig.test(sld,1)) )
	{
		for(var i=0;i<checkedarr.length;i++){
			if(checkedarr[i]==".com"||checkedarr[i]==".net"||checkedarr[i]==".cn"||checkedarr[i]==".网络"||checkedarr[i]==".公司"||checkedarr[i]==".biz"||checkedarr[i]==".cc"||checkedarr[i]==".tw"||checkedarr[i]==".name"){
				Sudu.alert('中文域名格式错误！');
				//alert('中文域名格式错误！');
				return false;
			}
		}
    }
    f['DomainName'].setAttribute('readonly','readonly');
    return true;
}


var Class = {
  create: function() {
    return function() {
      this.initialize.apply(this, arguments);
    }
  }
}
Object.extend = function(destination, source) {
    for (var property in source) {
        destination[property] = source[property];
    }
    return destination;
}
function addEventHandler(oTarget, sEventType, fnHandler) {
    if (oTarget.addEventListener) {
        oTarget.addEventListener(sEventType, fnHandler, false);
    } else if (oTarget.attachEvent) {
        oTarget.attachEvent("on" + sEventType, fnHandler);
    } else {
        oTarget["on" + sEventType] = fnHandler;
    }
};
var ColorFade = Class.create();
ColorFade.prototype = {
  initialize: function(Obj, options) {
    this._obj = "string" == typeof Obj ? jq(Obj) : Obj;
    this._timer = null;
    this.SetOptions(options);
    this.Step = Math.abs(this.options.Step);
    this.Speed = Math.abs(this.options.Speed);
    this.StartColor = this._color = this.GetColors(this.options.StartColor);
    this.EndColor = this.GetColors(this.options.EndColor);
    this._arrStep = [this.GetStep(this.StartColor[0], this.EndColor[0]), this.GetStep(this.StartColor[1], this.EndColor[1]), this.GetStep(this.StartColor[2], this.EndColor[2])];
    this._set = !this.options.Background ? function(color){ this._obj.style.color = color; } : function(color){ this._obj.style.backgroundColor = color; };
    this._set(this.options.StartColor);
    var oThis = this;
    addEventHandler(this._obj, "mouseover", function(){ oThis.Fade(oThis.EndColor); });
    addEventHandler(this._obj, "mouseout", function(){ oThis.Fade(oThis.StartColor); });
  },
  //默认属性
  SetOptions: function(options) {
    this.options = {
  StartColor:    "#000",
  EndColor:        "#DDC",
  Background:    false,
    Step:            20,
  Speed:        10
    };
    Object.extend(this.options, options || {});
  },
  //颜色    
  GetColors: function(sColor) {
    sColor = sColor.replace("#", "");
    var r, g, b;
    if (sColor.length > 3) {
        r = Mid(sColor, 0, 2); g = Mid(sColor, 2, 2); b = Mid(sColor, 4, 2);
    } else {
        r = Mid(sColor, 0, 1); g = Mid(sColor, 1, 1); b = Mid(sColor, 2, 1); r += r; g += g; b += b;
    }
    return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)];
  },
  //渐变颜色
  GetColor: function(c, ec, iStep) {
    if (c == ec) { return c; }
    if (c < ec) { c += iStep; return (c > ec ? ec : c); }
    else { c -= iStep; return (c < ec ? ec : c); }
  },
  //渐变级数
  GetStep: function(start, end) {
    var iStep = Math.abs((end - start) / this.Step);
    if(iStep > 0 && iStep < 1) iStep = 1;
    return parseInt(iStep);
  },
  //颜色渐变
  Fade: function(rColor) {
    clearTimeout(this._timer);
    var er = rColor[0], eg = rColor[1], eb = rColor[2], r = this.GetColor(this._color[0], er, this._arrStep[0]), g = this.GetColor(this._color[1], eg, this._arrStep[1]), b = this.GetColor(this._color[2], eb, this._arrStep[2]);
    this._set("#" + Hex(r) + Hex(g) + Hex(b));
    this._color = [r, g, b];
    if(r != er || g != eg || b != eb){ var oThis = this; this._timer = setTimeout(function(){ oThis.Fade(rColor); }, this.Speed); }
  }
};
//返回16进制数
function Hex(i) {
    if (i < 0) return "00";
    else if (i > 255) return "ff";
    else { var str = "0" + i.toString(16); return str.substring(str.length - 2); }
}
//仿asp的mid 截字
function Mid(string, start, length) {
    if (length) return string.substring(start, start + length);
    else return string.substring(start);
}
// ===========================