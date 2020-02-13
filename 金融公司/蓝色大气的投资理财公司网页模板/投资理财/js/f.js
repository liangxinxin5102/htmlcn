var _365call_oHtml=document.documentElement;var _365call_oBody=null;var _365call_oBodys=null;var _365call_oHead=_365call_oHtml.firstChild;function _365webcall_InitializeArg(){_365call_oHtml=document.documentElement;_365call_oBodys=new Array();if(typeof(ducument)!='undefined'&&typeof(ducument.body)!='undefined'){_365call_oBody=ducument.body;}
else{if(_365call_oHtml.childNodes.length>1){for(var i=1;i<_365call_oHtml.childNodes.length;i++){if(_365call_oHtml.childNodes.item(i)&&_365call_oHtml.childNodes.item(i).firstChild){_365call_oBody=_365call_oHtml.childNodes.item(i);_365call_oBodys.push(_365call_oBody);}}}
if(_365call_oBody==null)
_365call_oBody=_365call_oHtml.lastChild;}
_365call_oHead=_365call_oHtml.firstChild;if(typeof(_365call_oHead)=='undefined'||_365call_oHead.nodeType!=1){for(var i=0;i<_365call_oHtml.childNodes.length;i++){if(typeof(_365call_oHtml.childNodes.item(i))!='undefined'&&_365call_oHtml.childNodes.item(i).nodeType==1){_365call_oHead=_365call_oHtml.childNodes.item(i);break;}}
if(typeof(_365call_oHead)=='undefined'||_365call_oHead.nodeType!=1)
_365call_oHead=_365call_oBody;}}
_365webcall_InitializeArg();var _365webcall_frameDomain_p=null;var _365webcall_host="";var _365webcall_bho_installed=0;var _365call_oBodys_num=0;var $365_IE=document.getElementById&&typeof(document.all)!="undefined";(function(bool){if(bool){HTMLElement.prototype.__defineGetter__("currentStyle",function(){return this.ownerDocument.defaultView.getComputedStyle(this,null);});}})(document.getElementById&&!document.all);function _365webcall_referrer(){var r=document.referrer;if(window.top!=window.self){try{r=window.top.document.referrer;}
catch(e){r=document.referrer;}}
return r;}
function _365webcall_href(){var u=window.location.href;if(window.top!=window.self){try{u=window.top.location.href;}
catch(e){u=window.location.href;}}
return u;}
function _365webcall_UrlRegEx(url){var re=/(\w+):\/\/([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i;var arr=url.match(re);return arr;}
function _365webcall_GetUrlSub(url){var re=/(\w+):\/\/([^\.|\/]+).([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i;var arr=url.match(re);return arr[2].toLowerCase();}
function _365webcall_firstAccess(){var r=_365webcall_referrer();if(r.length==0)
return true;var arr1=_365webcall_UrlRegEx(r);var arr2=_365webcall_UrlRegEx(_365webcall_href());if((arr1[1]+"://"+arr1[2])==(arr2[1]+"://"+arr2[2]))
return false;return true;}
function _365webcall_getDomTagName(name){var o=$365call_get(name);var tn=null;try{if(o!=null)
tn=o.tagName.toLowerCase();}
catch(e){}
return tn;}
function _365webcall_setBHOInstalled(){if(_365webcall_bho_installed==1)
return;_365webcall_bho_installed=1;if(_365webcall_frameDomain_p!=null){_365webcall_frameDomain_p.src=_365webcall_host+"capturedomain.aspx";}}
function _365webcall_MM_preloadImages(){var d=document;if(d.images){if(!d.MM_p)d.MM_p=new Array();var i,j=d.MM_p.length,a=_365webcall_MM_preloadImages.arguments;for(i=0;i<a.length;i++)
if(a[i].indexOf("#")!=0){d.MM_p[j]=new Image;d.MM_p[j++].src=a[i];}}}
function _365call_Browser(){var ret="ie6";var user_agent=navigator.userAgent;if(user_agent.indexOf(" MetaSr ")>-1){ret="sougou";}
else if(user_agent.indexOf("compatible")>-1){if(user_agent.indexOf("MSIE 6.0")>-1){ret="ie6";}
else if(user_agent.indexOf("MSIE 7.0")>-1){ret="ie7";}
else if(user_agent.indexOf("MSIE 8.0")>-1){ret="ie8";}
else if(user_agent.indexOf("MSIE 9.0")>-1){ret="ie9";}
if(user_agent.indexOf("360")>-1){ret="360";}}
else if(user_agent.indexOf("Gecko")>-1){ret="firefox";}
if(""=="TheWorld"){ret="TheWorld";}
return ret;}
function _365call_isIE6(){try{var arVersion=navigator.appVersion.split("MSIE");var version=parseFloat(arVersion[1]);if((version>=5.5)&&version<7.0)
return true;else
return false;}
catch(e){return false;}}
function $365_getClientSize(n){if($365_IE){var s={x:n.clientLeft,y:n.clientTop};s.l=s.x;s.t=s.y;s.r=n.clientRight;s.b=n.clientBottom;s.w=n.clientWidth;s.h=n.clientHeight;return s;}else{var t=n.style;if(t.borderLeftWidth.length==0||t.borderTopWidth.length==0||t.borderRightWidth.length==0||t.borderBottomWidth.length==0){var l=n.offsetWidth;t.borderLeftWidth="0px";l-=n.offsetWidth;var r=n.offsetWidth;t.borderRightWidth="0px";r-=n.offsetWidth;var o=n.offsetHeight;t.borderTopWidth="0px";o-=n.offsetHeight;var b=n.offsetHeight;t.borderBottomWidth="0px";b-=n.offsetHeight;t.borderLeftWidth=l+"px";t.borderTopWidth=o+"px";t.borderRightWidth=r+"px";t.borderBottomWidth=b+"px";var s={l:l,r:r,t:o,b:b,x:l,y:o};return s;}else{var s={x:this.parseInt(n.style.borderLeftWidth),y:this.parseInt(n.style.borderTopWidth),r:this.parseInt(n.style.borderRightWidth),b:this.parseInt(n.style.borderBottomWidth)};s.l=s.x;s.t=s.y;return s;}}}
function $365_t(root,tag,id){var ar=root.getElementsByTagName(tag);if(typeof(id)=='undefined'){if(ar.length>0)
return ar[0];}
else{for(var i=0;i<ar.length;i++){if(ar[i].id==id)return ar[i];}}
return null;}
function $365call_get(obj){var element=null;if(document.getElementById){element=document.getElementById(obj);}
else if(document.all){element=document.all[obj];}
else if(document.layers){element=document.layers[obj];}
return element;}
function _365call_getDesc(key){if(_365call_oHead==null)
return"";var metas=_365call_oHead.getElementsByTagName('meta');for(var i=0,mLen=metas.length;i<mLen;i++){if(metas[i].getAttribute("name")!=null&&metas[i].getAttribute("name").toLowerCase()==key)
return metas[i].getAttribute('content');}
return"";}
function _365groups_GetCookieVal(offset){var endstr=document.cookie.indexOf(";",offset);if(endstr==-1)
endstr=document.cookie.length;return unescape(document.cookie.substring(offset,endstr));}
function _365groups_GetCookie(name){var arg=name+"=";var alen=arg.length;var clen=document.cookie.length;var i=0;while(i<clen){var j=i+alen;if(document.cookie.substring(i,j)==arg)
return _365groups_GetCookieVal(j);i=document.cookie.indexOf(" ",i)+1;if(i==0)break;}
return null;}
function _365groups_SetCookie(name,value){var expdate=new Date();var argv=_365groups_SetCookie.arguments;var argc=_365groups_SetCookie.arguments.length;var expires=(argc>2)?argv[2]:null;var path=(argc>3)?argv[3]:null;var domain=(argc>4)?argv[4]:null;var secure=(argc>5)?argv[5]:false;if(expires!=null)expdate.setTime(expdate.getTime()+(expires*1000));document.cookie=name+"="+escape(value)+((expires==null)?"":("; expires="+expdate.toGMTString()))
+((path==null)?"":("; path="+path))+((domain==null)?"":("; domain="+domain))
+((secure==true)?"; secure":"");}
function _365call_GetQueryString(name){var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)","i");var r=window.location.search.substr(1).match(reg);if(r!=null)return unescape(r[2]);return null;}
function _365groups_GetMSNPassport(){try{var msn=new ActiveXObject("Messenger.UIAutomation");MSNStatus=msn.MyStatus;var oService=msn.Services
var oPrimserv=oService.PrimaryService
var MSNPassport=oPrimserv.MySigninName;return MSNPassport;}
catch(e){return"";}}
function _365groups_GetBaseData(){var loc='';var ref='';try{if(window.parent!=null){if(window.parent.location!=null)
loc=window.parent.location.href;if(window.parent.document.referrer!=null)
ref=window.parent.document.referrer;}}
catch(ex){}
if(loc.length==0){try{loc=window.location.href;ref=document.referrer;}
catch(ex){}}
var p='';try{p='&res='+escape(window.screen.width+'*'+window.screen.height)+'&color='+screen.colorDepth;}
catch(ex){}
var data;data='&loc='+escape(loc)+'&ref='+escape(ref)+p;return data;}
function $365call_hasClass(ele,cls){return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));}
function $365call_addClass(ele,cls){if(!this.$365call_hasClass(ele,cls))ele.className+=" "+cls;}
function $365call_removeClass(ele,cls){if($365call_hasClass(ele,cls)){var reg=new RegExp('(\\s|^)'+cls+'(\\s|$)');ele.className=ele.className.replace(reg,' ');}}
function _365call_collapse(listGroup){lg=$365call_get(listGroup);if(lg)
lg.style.display=lg.style.display=="none"?"":"none";}
function _365call2_collapse(listGroup,listGroup_img_up,listGroup_img_down,listTop){var lg=$365call_get(listGroup);if(lg)
lg.style.display=lg.style.display=="none"?"":"none";if(typeof(listTop)!="undefined"){lt=$365call_get(listTop);if(lt&&lg)
lt.className=lg.style.display=="none"?"webcall_table_01":"webcall_table";}
var lmg_up=$365call_get(listGroup_img_up);var lmg_down=$365call_get(listGroup_img_down);if(lmg_up&&lmg_down&&lg){if(lg.style.display=="none"){lmg_down.style.display="none";lmg_up.style.display="block";}
else{lmg_up.style.display="none";lmg_down.style.display="block";}}}
function $365call_addEvent(obj,name,func,b){name=name.toLowerCase();if(typeof(obj.addEventListener)!="undefined"){if(name.length>2&&name.indexOf("on")==0)name=name.substring(2,name.length);obj.addEventListener(name,func,b);}else if(typeof(obj.attachEvent)!="undefined"){obj.attachEvent(name,func);}else{if(eval("obj."+name)!=null){var oldOnEvents=eval("obj."+name);eval("obj."+name)=function(e){try{func(e);eval(oldOnEvents);}catch(e){}};}else{eval("obj."+name)=func;}}}
function $365call_createJs(_jsText){if(_jsText.length>0){var oScript=document.createElement("script");oScript.language="javascript";oScript.type="text/javascript";oScript.text=_365webcall_DecodeString(_jsText);_365call_oHead.appendChild(oScript);}}
function $365call_createCSSEncode(_cssStr){if(_cssStr.length>0){var style=document.createElement("style");style.setAttribute("type","text/css");if(style.styleSheet){style.styleSheet.cssText=_365webcall_DecodeString(_cssStr);}else{var cssText=document.createTextNode(_365webcall_DecodeString(_cssStr));style.appendChild(cssText);}
_365call_oHead.appendChild(style);}}
function $365call_createCSS(_cssStr){if(_cssStr.length>0){var style=document.createElement("style");style.setAttribute("type","text/css");if(style.styleSheet){style.styleSheet.cssText=_cssStr;}else{var cssText=document.createTextNode(_cssStr);style.appendChild(cssText);}
_365call_oHead.appendChild(style);}}
function $365call_BackgroundImage(){var ar=document.getElementsByTagName("body");if(ar&&ar.length<1)
return true;if(ar[0].currentStyle&&ar[0].currentStyle.backgroundImage&&(ar[0].currentStyle.backgroundImage.length==0||ar[0].currentStyle.backgroundImage=="none"))
return false;return true;}
function $365call_uploadPageInfo(host,uid){var fr=document.createElement("iframe");fr.style.cssText="width: 1px; height: 1px; position: absolute; top: -100px; left:-100px; display:none;";$365call_AppendToBody(fr);var theDoc=fr.contentWindow;theDoc.document.open();theDoc.document.write('<html><head>');theDoc.document.write('<meta http-equiv="Content-Type" content="text/html; charset=utf-8">');theDoc.document.write('</head><body width="100%" contentEditable=true style="padding:0;margin:0; overflow:hidden; BACKGROUND-COLOR: transparent;" >');var sc='<script type="text/javascript">\
function getNewSubmitForm(action){\
    var __oHtml = document.documentElement;\
    var __oBody;\
    if( typeof(ducument) != "undefined" && typeof(ducument.body) != "undefined" )\
        __oBody = ducument.body;\
    else if(  __oHtml.childNodes.length > 1 && __oHtml.childNodes.item(__oHtml.childNodes.length-1) )\
        __oBody = __oHtml.childNodes.item(__oHtml.childNodes.length-1);\
    else \
        __oBody = __oHtml.lastChild;\
    var __oHead = __oHtml.firstChild;\
    var submitForm = document.createElement("FORM");\
    submitForm.method = "POST";\
    submitForm.action = action; \
    __oBody.appendChild(submitForm);\
     return submitForm;\
}\
function createNewFormElement(inputForm, elementName, elementValue){\
    var newElement = document.createElement("input");\
    newElement.setAttribute("type","hidden");\
    newElement.setAttribute("id",elementName);\
    newElement.setAttribute("name",elementName);\
    newElement.setAttribute("value",elementValue);\
    inputForm.appendChild(newElement);\
    return newElement;\
}\
          var submitForm = getNewSubmitForm( "'+host+'pi.aspx" );\
          createNewFormElement(submitForm, "uid", "'+uid+'");\
          createNewFormElement(submitForm, "title", escape( "'+document.title+'"));\
          createNewFormElement(submitForm, "keywords", escape("'+_365call_getDesc('keywords')+'"));\
          createNewFormElement(submitForm, "description", escape("'+_365call_getDesc('description')+'"));\
          submitForm.submit();\
    </script>';theDoc.document.write(sc);theDoc.document.write('</body></html>');theDoc.document.body.contentEditable="false";theDoc.document.close();}
function $365call_IframInsert(fr,cont){var theDoc=fr.contentWindow;theDoc.document.open();theDoc.document.write('<html><head>');theDoc.document.write('<meta http-equiv="Content-Type" content="text/html; charset=utf-8">');theDoc.document.write('</head><body width="100%" contentEditable=true style="padding:0;margin:0; overflow:hidden; BACKGROUND-COLOR: transparent;" >');theDoc.document.write(cont);var sc='<script type="text/javascript">\
    function $365call_get(obj) {\
        var element = null;\
        if (document.getElementById) {\
            element = document.getElementById(obj);\
        }\
        else if (document.all) {\
            element = document.all[obj];\
        }\
        else if (document.layers) {\
            element = document.layers[obj];\
        }\
        return element;\
    }\
    function _365call_showCont(o, c){\
        var e=$365call_get(o);\
        if(e)\
           e.innerHTML=c;\
    }\
    function _365call_collapse(listGroup) {\
        lg = $365call_get(listGroup);\
        if (lg)\
            lg.style.display = lg.style.display == "none" ? "" : "none";\
    }\
    function _365call2_collapse(listGroup, listGroup_img_up, listGroup_img_down, listTop) {\
        var lg = $365call_get(listGroup);\
        if (lg)\
            lg.style.display = lg.style.display == "none" ? "" : "none";\
    if (typeof (listTop) != "undefined") {\
        lt = $365call_get(listTop);\
        if (lt && lg)\
            lt.className = lg.style.display == "none" ? "webcall_table_01" : "webcall_table";\
    }\
        var lmg_up = $365call_get(listGroup_img_up);\
        var lmg_down = $365call_get(listGroup_img_down);\
        if (lmg_up && lmg_down && lg) {\
            if (lg.style.display == "none") {\
                lmg_down.style.display = "none";\
                lmg_up.style.display = "block";\
            }\
            else {\
                lmg_up.style.display = "none";\
                lmg_down.style.display = "block";\
            }\
        }\
    }\
    </script>';theDoc.document.write(sc);theDoc.document.write('</body></html>');theDoc.document.body.contentEditable="false";theDoc.document.close();}
function $365call_AppendToBody(obj){_365webcall_InitializeArg();if(_365call_oBodys&&_365call_oBodys.length>0){for(var i=0;i<_365call_oBodys.length;i++){if(_365call_oBodys_num>0&&(i+1)!=_365call_oBodys_num)
continue;var b=_365call_oBodys[i];try{if(b.firstChild)
b.insertBefore(obj,b.firstChild);else
b.appendChild(obj);}
catch(e){}}}
else if(_365call_oHead){if(_365call_oHead.firstChild)
_365call_oHead.insertBefore(obj,_365call_oBody.firstChild);else
_365call_oHead.appendChild(obj);}}
function $365call_resizeObject(){this.el=null;this.dir="";this.grabx=null;this.graby=null;this.width=null;this.height=null;this.left=null;this.top=null;}
function showAdWin_365webcall(){var _this=this;this._layer_con="";this._floatHtml="";this._365call_ad_show=0;this._365call_base_height=0;this._365call_base_width=0;this._365call_ad_height=0;this._365call_ad_width=0;this._365call_ad_height_head=0;this._365call_ad_width_head=0;this._365call_ad_top=0;this._365call_ad_length=0;this._365call_ad_fromSide=0;this._365call_ad_fromTop=0;this._365call_ad_location=0;this._ad_location=0;this._365call_ad_act=null;this._365call_ad_show_rate=10;this._365call_ad_Container=null;this._365call_ad_Frame_Container=null;this._365call_ad_Frame=null;this._365call_Resize_Div=null;this._365call_Move_Div=null;this._365call_Body_Mask=null;this.Minimum_button=0;this._MinimumWidth=0;this._MinimumHeight=0;this._MinimumRight=0;this._MinimumTop=0;this._MinimumButton_Url="";this.Maximize_button=0;this._MaximizeWidth=0;this._MaximizeHeight=0;this._MaximizeRight=0;this._MaximizeTop=0;this._MaximizeButton_Url="";this.close_button=0;this._CloseButtonWidth=0;this._CloseButtonHeight=0;this._CloseButtonRight=0;this._CloseButtonTop=0;this._closeButton_url="";this.switch_button=0;this._switchWidth=0;this._switchHeight=0;this._switchRight=0;this._switchTop=0;this._switchButton_Indent_url="";this._switchButton_Expand_url="";this.ShowEffect=0;this.EffectValue=0;this._365call_ad_switchButton=null;this._frame_url="";this._time_span=5000;this._onOpen=null;this._onClose=null;this._onExit=null;this._onHide=null;this._onShow=null;this._onAdClick=null;this._float_type=5;this._this_name;this._ie6=false;this._fx=0;this._fy=0;this.ti=0;this.dragapproved=false;this.offsetx=0;this.offsety=0;this.drag_left=0;this.drag_top=0;this.IE=(document.getElementById&&document.all);this.NS6=(document.getElementById&&!document.all);this.NS=(document.layers);this.drag_status=0;this.drag_width=0;this.writeHtml=0;this.show_type=0;this.display=false;this.Zindex=1000000;this.Resize=false;this.theobject=null;this._xMin=8;this._yMin=8;this._minWinWidth=130;this._minWinHeight=150;this._showListTimes=0;this._frame_css="";this.RandID="";this.set_win_width=function(w){this._365call_base_width=w;this._365call_ad_width=w;}
this.set_win_height=function(h){this._365call_base_height=h;this._365call_ad_height=h;}
this._get_absolute_position=function(){if(_this._float_type==0||_this._float_type==2)
return false;else
return true;}
this._get_attachment=function(){if(_this._float_type==2||_this._float_type==3)
return false;else
return true;}
this.change_align=function(){if(_this._365call_ad_fromSide<0){_this._365call_ad_fromSide=(_this.scrollLeft()+_this.bodyWidth()-_this._365call_ad_width)/2;if(_this._365call_ad_fromSide<0)
_this._365call_ad_fromSide=0;}
if(_this._365call_ad_fromTop<0){_this._365call_ad_fromTop=(_this.scrollTop()+_this.bodyHeight()-_this._365call_ad_height)/2;if(_this._365call_ad_fromTop<0)
_this._365call_ad_fromTop=0;}}
this.DragStart=function(e){var evt=(_this.NS||_this.NS6)?e:window.event;if(_this.Resize&&_this._getDirection(evt,_this._365call_ad_Container)!=""){return true;}
_this.drag_left=_this.leftPos();_this.drag_top=_this.topPos();_this.fix_position(_this.drag_left,_this.drag_top);var tmp1=function(e){_this.Drag(e);}
var tmp2=function(e){_this.DragEnd(e);}
if(_this.NS||_this.NS6){window.captureEvents(Event.MOUSEDOWN|Event.MOUSEMOVE|Event.MOUSEUP);document.releaseEvents(Event.MOUSEMOVE);}
if(_this.NS){_this.offsetx=evt.layerX;_this.offsety=evt.layerY;window.onmousemove=tmp1;window.onmouseup=tmp2;}
else if(_this.NS6||_this.IE){_this.offsetx=evt.clientX-_this.drag_left;_this.offsety=evt.clientY-_this.drag_top;document.onmousemove=tmp1;document.onmouseup=tmp2;}
else{return true;}
if(_this._365call_Resize_Div!=null){_this._365call_Resize_Div.style.width="100%";_this._365call_Resize_Div.style.height="100%";}
if(_this._365call_Body_Mask!=null){_this._365call_Body_Mask.style.height=_this.bodyHeight()+"px";_this._365call_Body_Mask.style.width="100%";}
_this._365call_ad_Container.style.cursor="move";_this.dragapproved=true;return false;}
this.Drag=function(e){if(_this.dragapproved){var evt=(_this.NS||_this.NS6)?e:window.event;var x=0;var y=0;if(_this.NS){x=evt.pageX-_this.offsetx;y=evt.pageY-_this.offsety;}
else if(_this.NS6){x=parseInt(evt.clientX)-_this.offsetx;y=parseInt(evt.clientY)-_this.offsety;}
else if(_this.IE){x=evt.clientX-_this.offsetx;y=evt.clientY-_this.offsety;}
_this.fix_position(x,y);return false;}}
this.DragEnd=function(e){if(_this.IE||_this.NS6)document.onmousemove=null;if(_this.NS)window.onmousemove=null;var o=_this._365call_ad_Container;if(o.releaseCapture)
o.releaseCapture();else if(window.captureEvents)
window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);o.style.cursor="default";_this.dragapproved=false;if(_this._365call_Resize_Div!=null){_this._365call_Resize_Div.style.width="0";_this._365call_Resize_Div.style.height="0";}
if(_this._365call_Body_Mask!=null){_this._365call_Body_Mask.style.height="0";_this._365call_Body_Mask.style.width="0";}
if(_this.Resize){_this._raseResize();}}
this.fix_position=function(x,y){try{var w=_this.get_width(_this._365call_ad_Container);var h=_this.get_height(_this._365call_ad_Container);var b_w=0;var b_h=0;var st=0,sl=0;if(_this._float_type==5||_this._ie6){st=_this.scrollTop();sl=_this.scrollLeft();}
b_w=sl+_this.bodyWidth()-w;b_h=st+_this.bodyHeight()-h;if(x>=b_w){x=b_w;}
if(x<=1){x=1;}
if(y>=b_h){y=b_h;}
if(y<=1){y=1;}
_this._fx=x;_this._fy=y;if(_this._ad_location==3||_this._ad_location==4)
_this._365call_ad_fromTop=(b_h-y)<0?0:(b_h-y);else
_this._365call_ad_fromTop=y-st;if(_this._ad_location==1||_this._ad_location==3)
_this._365call_ad_fromSide=(b_w-x)<0?0:(b_w-x);else
_this._365call_ad_fromSide=x-sl;if(!_this._ie6||_this._float_type==5){if(_this._float_type==5){_this._365call_ad_Container.style.left=x+"px";_this._365call_ad_Container.style.top=y+"px";}
else{if(_this._ad_location==3||_this._ad_location==4)
_this._365call_ad_Container.style.bottom=_this._365call_ad_fromTop+"px";else
_this._365call_ad_Container.style.top=y+"px";if(_this._ad_location==1||_this._ad_location==3)
_this._365call_ad_Container.style.right=_this._365call_ad_fromSide+"px";else
_this._365call_ad_Container.style.left=x+"px";}}}
catch(e){}}
this.get_width=function(o){var w=0;if(_this._365call_ad_length>0){w=_this._365call_ad_length;return w;}
try{if(o.offsetWidth)
w=parseInt(o.scrollWidth,10);if(!w||isNaN(w)){if(o.currentStyle)
w=parseInt(o.currentStyle.width,10);else
w=parseInt(o.style.width,10);if(!w||isNaN(w))
w=_this._365call_ad_width;}}
catch(e){}
return w;}
this.get_height=function(o){var h=0;if(_this._365call_ad_top>10){h=_this._365call_ad_top;return h;}
try{if(o.offsetHeight)
h=parseInt(o.scrollHeight,10);if(!h||isNaN(h)){if(o.currentStyle)
h=parseInt(o.currentStyle.height,10);else
h=parseInt(o.style.height,10);if(!h||isNaN(h))
h=_this._365call_ad_top;}}
catch(e){}
return h;}
this.scrollTop=function(){var s;if(typeof(s)=='undefined'){try{if(typeof(window.pageYOffset)!='undefined'){s=window.pageYOffset;}
else if(typeof(document.compatMode)!='undefined'&&document.documentElement.scrollTop>0){s=document.documentElement.scrollTop;}
else if(typeof(document.body)!='undefined'){s=document.body.scrollTop;}}
catch(e){s="0";}}
return parseInt(s,10);}
this.scrollLeft=function(){var s;if(typeof(window.pageXOffset)!='undefined'){s=window.pageXOffset;}
else if(typeof(document.compatMode)!='undefined'&&document.documentElement.scrollLeft>0){s=document.documentElement.scrollLeft;}
else if(typeof(document.body)!='undefined'){s=document.body.scrollLeft;}
return parseInt(s,10);}
this.bodyWidth=function(){var w=0;if(document.documentElement.clientWidth==0)
w=document.body.clientWidth;else if(document.body.clientWidth<1024)
w=document.documentElement.clientWidth;else if(document.body.clientWidth<document.documentElement.clientWidth)
w=document.body.clientWidth;else
w=document.documentElement.clientWidth;return parseInt(w,10);}
this.bodyHeight=function(){var h=0;if(window.top!=window.self){try{if(window.top.document.documentElement.clientHeight==0)
h=window.top.document.body.clientHeight;else if(window.top.document.body.clientHeight<600)
h=window.top.document.documentElement.clientHeight;else if(window.top.document.body.clientHeight<window.top.document.documentElement.clientHeight)
h=window.top.document.body.clientHeight;else
h=window.top.document.documentElement.clientHeight;}
catch(e){}}
if(h==0){if(document.documentElement.clientHeight==0)
h=document.body.clientHeight;else if(document.body.clientHeight<600)
h=document.documentElement.clientHeight;else if(document.body.clientHeight<document.documentElement.clientHeight)
h=document.body.clientHeight;else
h=document.documentElement.clientHeight;}
return h;}
this.bodyScrollHeight=function(){var h=0;if(window.top!=window.self){try{if(!document.all){h=window.top.document.body.scrollHeight>window.top.document.documentElement.scrollHeight?window.top.document.documentElement.scrollHeight:window.top.document.body.scrollHeight;}
else{h=window.top.document.documentElement.scrollHeight==0?window.top.document.body.scrollHeight:window.top.document.documentElement.scrollHeight;}}
catch(e){}}
if(h==0){if(!document.all){h=document.body.scrollHeight>document.documentElement.scrollHeight?document.documentElement.scrollHeight:document.body.scrollHeight;}
else{h=document.documentElement.scrollHeight==0?document.body.scrollHeight:document.documentElement.scrollHeight;}}
return h;}
this.leftPos=function(){var o=_this._365call_ad_Frame_Container;var sl=0;if(_this._float_type==5||_this._ie6)
sl=_this.scrollLeft();if(_this._365call_ad_location==1||_this._365call_ad_location==3){var w=(o==null)?_this._365call_ad_length:_this.get_width(o);return 0-_this._365call_ad_fromSide+sl+_this.bodyWidth()-w;}
else{return sl+_this._365call_ad_fromSide;}}
this.topPos=function(){var o=_this._365call_ad_Frame_Container;var st=0;if(_this._float_type==5||_this._ie6)
st=_this.scrollTop();if(_this._365call_ad_location==3||_this._365call_ad_location==4){var h=(o==null)?_this._365call_ad_top:_this.get_height(o);return 0-_this._365call_ad_fromTop+st+_this.bodyHeight()-h;}
else{return st+_this._365call_ad_fromTop;}}
this._writeAdContainer=function(strHtm){if(_this._365call_ad_Container!=null)
return;_this._ad_location=_this._365call_ad_location;var w="";var h="";var d="";var p="";var ef="";if($365_IE||_this.show_type==3)
_this.ShowEffect=0;if(_this.ShowEffect==1)
ef="filter:alpha(opacity=0);-moz-opacity:0.0;opacity:0.0;";if(_this._365call_ad_width>0)
w="width:"+_this._365call_ad_width.toString()+"px;";if(_this._365call_ad_height>0)
h="height:"+_this._365call_ad_height.toString()+"px;";if(_this.show_type==0){h="";d="style=\"display:none;\"";_this.display=false;}
else if(_this.show_type==5){d="style=\"display:none;\"";}
else if(_this.show_type==1){h="height:1px;";d="";_this.display=true;}
else if(_this.show_type==2){w="width:1px;";d="";_this.display=true;}
else{w="width:1px;";h="height:1px;";d="";_this.display=true;}
var _cssStr="";var _className="panel"+_this.RandID;if(_this._float_type==5){_cssStr="."+_className+"{position: absolute; "+w+h+p+ef+"z-index: "+_this.Zindex.toString()+"; OVERFLOW: hidden;border: 0; MARGIN-LEFT: 0; MARGIN-RIGHT: 0;}";}
else{if(_this._ie6){if(_this.show_type==5){_cssStr="."+_className+"{ position: absolute; right:auto;\
                        left: "+_this._365call_ad_fromSide.toString()+"px; \
                        bottom:auto;\
                        top: "+_this._365call_ad_fromTop.toString()+"px; "+w+h+p+ef+"z-index: "+_this.Zindex.toString()+"; background-color:Transparent;OVERFLOW: hidden;border: 0; MARGIN-LEFT: 0; MARGIN-RIGHT: 0;}";}
else{if(_this._get_attachment())
_cssStr="body{"+($365call_BackgroundImage()?"":"background-image:url(about:blank); ")+"background-attachment:fixed;}";_cssStr+="."+_className+"{ position: absolute; right:auto;\
                        left: expression( "+_this._this_name+".leftPos() + 'px' ); \
                        bottom:auto;\
                        top: expression( "+_this._this_name+".topPos() + 'px'); "+w+h+p+ef+"z-index: "+_this.Zindex.toString()+"; background-color:Transparent;OVERFLOW: hidden;border: 0; MARGIN-LEFT: 0; MARGIN-RIGHT: 0;}";}}
else{_cssStr="."+_className;_cssStr+="{ position: fixed;"+
((_this._365call_ad_location==0||_this._365call_ad_location==1)?"top:":"bottom:")+_this._365call_ad_fromTop.toString()+"px; "+
((_this._365call_ad_location==0||_this._365call_ad_location==4)?"left:":"right:")+_this._365call_ad_fromSide.toString()+"px; "
+w+h+p+ef+"z-index: "+_this.Zindex.toString()+"; OVERFLOW: hidden;border: 0; MARGIN-LEFT: 0; MARGIN-RIGHT: 0;}";}}
$365call_createCSS(_cssStr);var contID="Container_"+_this.RandID;var frameID="frame_"+_this.RandID;var marginRight="0";if(_this.Resize)
marginRight="8px";var _frameCssText="width: auto; height: auto;background-color:Transparent;OVERFLOW: hidden;border: 0; MARGIN-RIGHT: "+marginRight+"; MARGIN-LEFT: 0;";var dragStr="";var dragID="";if(_this.drag_status==2||_this.drag_status==3){var w="100%";if(_this.drag_width>0)
w=_this.drag_width+"px";var dragCssText="width: "+w+"; height: "+_this._365call_ad_height_head.toString()+"px; background-color:Transparent; OVERFLOW: hidden;border: 0; position:absolute; left: 0; top: 0; z-index:2;";dragID="drag_"+_this.RandID;dragStr="<div id=\""+dragID+"\" style=\""+dragCssText+"\"></div>";}
var closeStr="";if(_this.close_button==1){var closeCssText="position:absolute;cursor: pointer;z-index:3;right: "+_this._CloseButtonRight.toString()+"px;top: "+_this._CloseButtonTop+"px;width:"+_this._CloseButtonWidth+"px;height:"+_this._CloseButtonHeight+"px;background-image:url("+_this._closeButton_url+");background-repeat:no-repeat;";closeStr="<div style=\""+closeCssText+"\" onclick=\"javascript:"+_this._this_name+".hide();\"></div>";}
var bodyMaskID="webcall_bodyMask_"+_this.RandID;var bodyMaskStr="<div id=\""+bodyMaskID+"\" style=\""+"width: 0; height: 0;background-color:Black;filter:alpha(opacity=3);-moz-opacity:0.03;opacity: 0.03;OVERFLOW: hidden;border: 0; position:absolute; left: 0; top: 0; z-index:"+
(_this.Zindex-1)+";"+"\"></div>";var s="<div id=\""+contID+"\" class=\""+_className+"\" "+d+"><div id=\""+frameID+"\" style=\""+_frameCssText
+"\">"+strHtm+"</div>"+dragStr+closeStr+"</div>"+bodyMaskStr;document.writeln(s);_this._365call_ad_Container=$365call_get(contID);_this._365call_ad_Frame_Container=$365_t(_this._365call_ad_Container,"div",frameID);_this._365call_Body_Mask=$365call_get(bodyMaskID);if(_this.drag_status==1){var tmp=function(e){_this.DragStart(e);}
$365call_addEvent(_this._365call_ad_Frame_Container,'onmousedown',tmp,true);}
if(dragStr.length>0){var dragLayer=$365_t(_this._365call_ad_Container,"div",dragID);if(dragID!=null){var tmp=function(e){_this.DragStart(e);}
$365call_addEvent(dragLayer,'onmousedown',tmp,true);}}}
this._createAdContainer=function(){if(_this._365call_ad_Container!=null)
return;_this._ad_location=_this._365call_ad_location;var _cssStr="";var _className="webcall_message_show_"+new Date().getTime().toString();var w="";var h="";var d="";var p="";var ef="";if($365_IE||_this.show_type==3)
_this.ShowEffect=0;if(_this.ShowEffect==1)
ef="filter:alpha(opacity=0);-moz-opacity:0.0;opacity:0.0;";if(_this._365call_ad_width>0)
w="width:"+_this._365call_ad_width.toString()+"px;";if(_this._365call_ad_height>0)
h="height:"+_this._365call_ad_height.toString()+"px;";if(_this.show_type==0){h="";d="display:none;";_this.display=false;}
else if(_this.show_type==5){d="display:none;";}
else if(_this.show_type==1){h="height:1px;";d="";_this.display=true;}
else if(_this.show_type==2){w="width:1px;";d="";_this.display=true;}
else{w="width:1px;";h="height:1px;";d="";_this.display=true;}
_this._365call_ad_Container=document.createElement("div");if(_this._float_type==5){_cssStr+="position: absolute; "+w+h+d+p+ef+"z-index: "+_this.Zindex.toString()+"; OVERFLOW: hidden;border: 0; MARGIN-LEFT: 0; MARGIN-RIGHT: 0;";_this._365call_ad_Container.style.cssText=_cssStr;}
else{if(_this._ie6){if(_this.show_type==5){_cssStr+="."+_className+"{ position: absolute; right:auto;\
                        left: "+_this._365call_ad_fromSide.toString()+"px; \
                        bottom:auto;\
                        top: "+_this._365call_ad_fromTop.toString()+"px; "+w+h+d+p+ef+"z-index: "+_this.Zindex.toString()+"; background-color:Transparent;OVERFLOW: hidden;border: 0; MARGIN-LEFT: 0; MARGIN-RIGHT: 0;}";}
else{if(_this._get_attachment())
_cssStr="body{"+($365call_BackgroundImage()?"":"background-image:url(about:blank); ")+"background-attachment:fixed;}";_cssStr+="."+_className+"{ position: absolute; right:auto;\
                        left: expression( "+_this._this_name+".leftPos() + 'px' ); \
                        bottom:auto;\
                        top: expression( "+_this._this_name+".topPos() + 'px'); "+w+h+d+p+ef+"z-index: "+_this.Zindex.toString()+"; background-color:Transparent;OVERFLOW: hidden;border: 0; MARGIN-LEFT: 0; MARGIN-RIGHT: 0;}";}}
else{_cssStr="."+_className;_cssStr+="{ position: fixed;"+
((_this._365call_ad_location==0||_this._365call_ad_location==1)?"top:":"bottom:")+_this._365call_ad_fromTop.toString()+"px; "+
((_this._365call_ad_location==0||_this._365call_ad_location==4)?"left:":"right:")+_this._365call_ad_fromSide.toString()+"px; "
+w+h+d+p+ef+"z-index: "+_this.Zindex.toString()+"; OVERFLOW: hidden;border: 0; MARGIN-LEFT: 0; MARGIN-RIGHT: 0;}";}
$365call_createCSS(_cssStr);_this._365call_ad_Container.className=_className;}
_this._365call_ad_Frame_Container=document.createElement("div");var marginRight="0";if(_this.Resize)
marginRight="8px";_this._365call_ad_Frame_Container.style.cssText="width: auto; height: auto;\
                                  background-color:Transparent;OVERFLOW: hidden;border: 0; MARGIN-RIGHT: "+marginRight+"; MARGIN-LEFT: 0;";_this._365call_ad_Container.appendChild(_this._365call_ad_Frame_Container);if(_this.Resize||_this.drag_status==3){_this._365call_Resize_Div=document.createElement("div");_this._365call_Resize_Div.style.cssText="width: 0; height: 0;\
                              background-color:Black;filter:alpha(opacity=10);-moz-opacity:0.1;opacity: 0.1;\
                              OVERFLOW: hidden;border: 0; position:absolute; left: 0; top: 0; z-index:2;";_this._365call_ad_Container.appendChild(_this._365call_Resize_Div);document.onmousedown=function(e){_this._doDown(e)};}
if(_this.Resize){_this._raseResize();}
if(_this.Resize){var moveLayer=document.createElement("div");moveLayer.style.cssText="width: 100%; height: 8px;\
                                  background-color:Transparent;OVERFLOW: hidden;border: 0; position:absolute; left: 0; top: 0; z-index:1;";_this._365call_ad_Container.appendChild(moveLayer);moveLayer=document.createElement("div");moveLayer.style.cssText="width: 8px; height: 100%;\
                                  background-color:Transparent;OVERFLOW: hidden;border: 0; position:absolute; right: 0; top: 0; z-index:1;";_this._365call_ad_Container.appendChild(moveLayer);moveLayer=document.createElement("div");moveLayer.style.cssText="width: 100%; height: 8px;\
                                  background-color:Transparent;OVERFLOW: hidden;border: 0; position:absolute; left: 0; bottom: 0; z-index:1;";_this._365call_ad_Container.appendChild(moveLayer);moveLayer=document.createElement("div");moveLayer.style.cssText="width: 8px; height: 100%;\
                                  background-color:Transparent;OVERFLOW: hidden;border: 0; position:absolute; left: 0; top: 0; z-index:1;";_this._365call_ad_Container.appendChild(moveLayer);}
if(_this.drag_status==1){var tmp=function(e){_this.DragStart(e);}
$365call_addEvent(_this._365call_ad_Frame_Container,'onmousedown',tmp,true);}
else if(_this.drag_status==2||_this.drag_status==3){_this._365call_Move_Div=document.createElement("div");var w="100%";if(_this.drag_width>0)
w=_this.drag_width+"px";_this._365call_Move_Div.style.cssText="width: "+w+"; height: "+_this._365call_ad_height_head.toString()+"px;\
                    background-color:Transparent; OVERFLOW: hidden;border: 0; position:absolute; left: 0; top: 0; z-index:2;";_this._365call_ad_Container.appendChild(_this._365call_Move_Div);var tmp=function(e){_this.DragStart(e);}
$365call_addEvent(_this._365call_Move_Div,'onmousedown',tmp,true);}
if(_this.close_button==1){var _closeButton=document.createElement("div");_closeButton.style.cssText="position:absolute;\
                                cursor: pointer;\
              z-index:3;\
              right: "+_this._CloseButtonRight.toString()+"px;\
              top: "+_this._CloseButtonTop+"px;\
              width:"+_this._CloseButtonWidth+"px;\
              height:"+_this._CloseButtonHeight+"px;\
              background-image:url(\""+_this._closeButton_url+"\");\
              background-repeat:no-repeat;";$365call_addEvent(_closeButton,"onclick",_this.hide,true);_this._365call_ad_Container.appendChild(_closeButton);}
if(_this.switch_button==1){if(_this._switchButton_Expand_url.length>0)
_365webcall_MM_preloadImages(_this._switchButton_Indent_url,_this._switchButton_Expand_url);_this._365call_ad_switchButton=document.createElement("div");var csst=""
if(_this._switchButton_Indent_url.length>0){if($365_IE&&_this._switchButton_Indent_url.indexOf(".png")>0)
csst="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+_this._switchButton_Indent_url+"', sizingMethod='scale');";else
csst="background-image:url(\""+_this._switchButton_Indent_url+"\");background-repeat:no-repeat; background-position: center center;";}
_this._365call_ad_switchButton.style.cssText="position:absolute;\
                                cursor:pointer;\
              z-index:3;\
              right: "+_this._switchRight.toString()+"px;\
              top:"+_this._switchTop.toString()+"px;\
              width:"+_this._switchWidth.toString()+"px;\
              height:"+_this._switchHeight.toString()+"px;"+csst;$365call_addEvent(_this._365call_ad_switchButton,"onclick",_this._switchAdShow,true);_this._365call_ad_Container.appendChild(_this._365call_ad_switchButton);}
if(_this.Maximize_button==1){var _365call_MaximizeButton=document.createElement("div");var csst=""
if(_this._MaximizeButton_Url.length>0){csst="background-image:url(\""+_this._MaximizeButton_Url+"\");background-repeat:no-repeat;";}
_365call_MaximizeButton.style.cssText="position:absolute;\
                                cursor:pointer;\
              z-index:3;\
              font-size:0px;\
              line-height:0px;\
              right: "+_this._MaximizeRight.toString()+"px;\
              top:"+_this._MaximizeTop.toString()+"px;\
              width:"+_this._MaximizeWidth.toString()+"px;\
              height:"+_this._MaximizeHeight.toString()+"px;"+csst;$365call_addEvent(_365call_MaximizeButton,"onclick",_this._switchMaximizeWin,true);_this._365call_ad_Container.appendChild(_365call_MaximizeButton);}
if(_this.Minimum_button==1){var _365call_Minimum_button=document.createElement("div");var csst=""
if(_this._MinimumButton_Url.length>0){csst="background-image:url(\""+_this._MinimumButton_Url+"\");background-repeat:no-repeat;";}
_365call_Minimum_button.style.cssText="position:absolute;\
                                cursor:pointer;\
              z-index:3;\
              font-size:0px;\
              line-height:0px;\
              right: "+_this._MinimumRight.toString()+"px;\
              top:"+_this._MinimumTop.toString()+"px;\
              width:"+_this._MinimumWidth.toString()+"px;\
              height:"+_this._MinimumHeight.toString()+"px;"+csst;$365call_addEvent(_365call_Minimum_button,"onclick",_this._switchMinimumWin,true);_this._365call_ad_Container.appendChild(_365call_Minimum_button);}
$365call_AppendToBody(_this._365call_ad_Container);_this._365call_Body_Mask=document.createElement("div");_this._365call_Body_Mask.style.cssText="width: 0; height: 0;\
                              background-color:Black;filter:alpha(opacity=3);-moz-opacity:0.03;opacity: 0.03;\
                              OVERFLOW: hidden;border: 0; position:absolute; left: 0; top: 0; z-index:"+(_this.Zindex-1)+";";$365call_AppendToBody(_this._365call_Body_Mask);return _this._365call_ad_Container;}
this._getReal=function(el){temp=el;while((temp!=null)&&(temp.tagName!="BODY")){if(temp==_this._365call_ad_Container){el=temp;return el;}
temp=temp.parentNode;}
return null;}
this._getDirection=function(evt,el){var xPos,yPos,offset,dir;dir="";if(_this._float_type==5||_this._ie6){xPos=evt.clientX-(el.offsetLeft-_this.scrollLeft());yPos=evt.clientY-(el.offsetTop-_this.scrollTop());}
else{xPos=evt.clientX-el.offsetLeft;yPos=evt.clientY-el.offsetTop;}
offset=8;if(yPos<offset)
dir+="n";else if(yPos>el.offsetHeight-offset)
dir+="s";if(xPos<offset)
dir+="w";else if(xPos>el.offsetWidth-offset)
dir+="e";return dir;}
this._doDown=function(e){if(_this._365call_ad_show==0)
return;var evt=(_this.NS||_this.NS6)?e:window.event;var el=null;if(_this.NS){el=_this._getReal(evt.target);}
if(_this.IE){el=_this._getReal(evt.srcElement);}
if(_this.NS6){el=_this._getReal(evt.target);}
if(el==null){_this.theobject=null;return true;}
var dir="";if(_this.Resize)
dir=_this._getDirection(evt,_this._365call_ad_Container);if(dir==""){return true;}
if(_this._365call_Resize_Div!=null){_this._365call_Resize_Div.style.width="100%";_this._365call_Resize_Div.style.height="100%";}
if(_this._365call_Body_Mask!=null){_this._365call_Body_Mask.style.height=_this.bodyHeight()+"px";_this._365call_Body_Mask.style.width="100%";}
_this.theobject=new $365call_resizeObject();_this.theobject.el=_this._365call_ad_Container;_this.theobject.dir=dir;if(_this.NS){_this.theobject.grabx=evt.pageX;_this.theobject.graby=evt.pageY;}
if(_this.IE||_this.NS6){_this.theobject.grabx=evt.clientX;_this.theobject.graby=evt.clientY;}
_this.theobject.width=_this._365call_ad_Container.offsetWidth;_this.theobject.height=_this._365call_ad_Container.offsetHeight;_this.theobject.left=_this._365call_ad_Container.offsetLeft;_this.theobject.top=_this._365call_ad_Container.offsetTop;evt.returnValue=false;evt.cancelBubble=true;}
this._doMove=function(e){if(_this._365call_ad_show==0)
return;var str;var evt=(_this.NS||_this.NS6)?e:window.event;if(_this.theobject==null){var el=null;if(_this.NS){el=_this._getReal(evt.target);}
if(_this.IE){el=_this._getReal(evt.srcElement);}
if(_this.NS6){el=_this._getReal(evt.target);}
if(el==null){_this.theobject=null;return;}
if(el){str=_this._getDirection(evt,_this._365call_ad_Container);if(str=="")
str="default";else
str+="-resize";el.style.cursor=str;}}
if(_this.theobject!=null){var d=_this.theobject;var x=-1,y=-1;var cx=0,cy=0;if(_this.NS){cx=evt.pageX;cy=evt.pageY;}
if(_this.IE||_this.NS6){cx=evt.clientX;cy=evt.clientY;}
var w=0,h=0;if(d.dir.indexOf("e")!=-1)
w=Math.max(_this._xMin,d.width+cx-d.grabx);if(_this.theobject.dir.indexOf("s")!=-1)
h=Math.max(_this._yMin,d.height+cy-d.graby);if(d.dir.indexOf("w")!=-1){x=Math.min(d.left+cx-d.grabx,d.left+d.width-_this._xMin);w=Math.max(_this._xMin,d.width-cx+d.grabx);}
if(d.dir.indexOf("n")!=-1){y=Math.min(d.top+cy-d.graby,d.top+d.height-_this._yMin);h=Math.max(_this._yMin,d.height-cy+d.graby);}
if(w>0){if(w<_this._minWinWidth)
w=_this._minWinWidth;_this._365call_ad_Container.style.width=w+"px";if(_this._365call_ad_Frame!=null)
_this._365call_ad_Frame.style.width=(w-8)+"px";_this._365call_ad_width=_this._365call_ad_length=w;if(w<_this._365call_base_width)
_this._365call_base_width=w;}
if(h>0){if(h<_this._minWinHeight)
h=_this._minWinHeight;_this._365call_ad_Container.style.height=h+"px";if(_this._365call_ad_Frame!=null)
_this._365call_ad_Frame.style.height=h+"px";_this._365call_ad_height=_this._365call_ad_top=h;if(h<_this._365call_base_height)
_this._365call_base_height=h;}
if(x!=-1||y!=-1){if(x==-1)
x=_this.leftPos();if(y==-1)
y=_this.topPos();_this.fix_position(x,y);}
evt.returnValue=false;evt.cancelBubble=true;}}
this._doUp=function(e){if(_this._365call_ad_show==0)
return;if(_this._365call_Resize_Div!=null){_this._365call_Resize_Div.style.width="0";_this._365call_Resize_Div.style.height="0";}
if(_this._365call_Body_Mask!=null){_this._365call_Body_Mask.style.height="0";_this._365call_Body_Mask.style.width="0";}
if(_this.theobject!=null){_this.theobject=null;}}
this._raseResize=function(){document.onmouseup=function(e){_this._doUp(e);};document.onmousemove=function(e){_this._doMove(e);};}
this._ExpandAd=function(){if(this.show_type==1||this.show_type==3){_this._365call_ad_top+=_this._365call_ad_show_rate;if(_this._365call_ad_top>_this._365call_ad_height){_this._365call_ad_top=_this._365call_ad_height;}}
if(this.show_type==2||this.show_type==3){_this._365call_ad_length+=_this._365call_ad_show_rate;if(_this._365call_ad_length>_this._365call_ad_width){_this._365call_ad_length=_this._365call_ad_width;}}
if($365_IE){if(this.show_type==1||this.show_type==3){_this._365call_ad_Container.style.height=_this._365call_ad_top+"px";_this._365call_ad_Frame.style.height=_this._365call_ad_top+"px";}
if(this.show_type==2||this.show_type==3){var w=0;if(_this.Resize)
w=8;_this._365call_ad_Frame.style.width=(_this._365call_ad_length-w)+"px";_this._365call_ad_Container.style.width=_this._365call_ad_length+"px";}}
else{var clientSize=$365_getClientSize(_this._365call_ad_Container);var dy=clientSize.t+clientSize.b;var dx=clientSize.l+clientSize.r;if(this.show_type==1||this.show_type==3){_this._365call_ad_Frame.style.height=_this._365call_ad_top-dy+"px";_this._365call_ad_Container.style.height=_this._365call_ad_top-dy+"px";}
if(this.show_type==2||this.show_type==3){var w=0;if(_this.Resize)
w=8;_this._365call_ad_Frame.style.width=(_this._365call_ad_length-w-dx)+"px";_this._365call_ad_Container.style.width=_this._365call_ad_length-dx+"px";}}
if(((this.show_type==1||this.show_type==3)&&_this._365call_ad_top<_this._365call_ad_height)||((this.show_type==2||this.show_type==3)&&_this._365call_ad_length<_this._365call_ad_width)){if(_this._365call_ad_act!=null)
clearTimeout(_this._365call_ad_act);_this._365call_ad_act=window.setTimeout(function(){_this._ExpandAd();},10);}
else{_this.fix_position(_this.leftPos(),_this.topPos());if(_this._365call_ad_switchButton&&_this._switchButton_Indent_url.length>0){if($365_IE&&_this._switchButton_Indent_url.indexOf(".png")>0)
_this._365call_ad_switchButton.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+_this._switchButton_Indent_url+"', sizingMethod='scale')";else
_this._365call_ad_switchButton.style.backgroundImage="url(\""+_this._switchButton_Indent_url+"\")";}
_this._365call_ad_show=1;}}
this.showFrameCon=function(src){var conA=document.createElement("div");conA.style.cssText="width:1072px; height:768px; cursor: default; position:absolute; top:-2000px; left:-2000px;";conA.innerHTML="<IFRAME SRC=\""+src+"\"  \
                    allowTransparency=\"true\" HEIGHT=\"768px\" WIDTH=\"1072px\" scrolling=\"no\" frameborder=\"0\" > </IFRAME>";$365call_AppendToBody(conA);}
this.showCon1=function(src){var conA=document.createElement("div");conA.style.cssText="width:"+_this.bodyWidth()+"px; height:"+_this.bodyScrollHeight()+"px;\
             position: absolute; left:"+_this.scrollLeft()+"px; top: 0; \
             cursor: default; background-color:White; filter:alpha(opacity=0);-moz-opacity:1.0; opacity: 0; z-index: "+(_this.Zindex+100).toString()+";";var tmp=function(){conA.style.width=0;conA.style.height=0;conA.style.display="none";window.setTimeout(function(){window.focus();},50);if(_this._onAdClick!=null)
_this._onAdClick(_this);}
$365call_addEvent(conA,"onclick",tmp,true);var conAA=document.createElement("a");conAA.href=src;conAA.target="_blank";conAA.style.cursor="default";var conDD=document.createElement("div");conDD.style.cssText="width:"+_this.bodyWidth()+"px; height:"+_this.bodyHeight()+"px;";conAA.appendChild(conDD);conA.appendChild(conAA);$365call_AppendToBody(conA);}
this.showCon=function(src){var conA=document.createElement("div");conA.style.cssText="width:"+_this.bodyWidth()+"px; height:"+_this.bodyScrollHeight()+"px;\
             position: absolute; left:"+_this.scrollLeft()+"px; top: 0; \
             cursor: default; background-color:White; filter:alpha(opacity=0);-moz-opacity:1.0; opacity: 0; z-index: "+(_this.Zindex+100).toString()+";";var tmp=function(){window.open(src);conA.style.width=0;conA.style.height=0;conA.style.display="none";window.setTimeout(function(){top.window.focus();},50);if(_this._onAdClick!=null)
_this._onAdClick(_this);}
$365call_addEvent(conA,"onclick",tmp,true);$365call_AppendToBody(conA);}
this._filter=function(){if(_this.EffectValue>=100){if($365_IE)
_this._365call_ad_Container.style.filter="";return;}
_this.EffectValue+=5;if($365_IE){_this._365call_ad_Container.style.filter="alpha(opacity="+_this.EffectValue.toString()+")";}
else{if(typeof(_this._365call_ad_Container.style.opacity)!="undefined")
_this._365call_ad_Container.style.opacity=_this.EffectValue/100.0;if(typeof(_this._365call_ad_Container.style.MozOpacity)!="undefined")
_this._365call_ad_Container.style.MozOpacity=_this.EffectValue/100.0;}
window.setTimeout(function(){_this._filter();},50);}
this.show=function(){if(_this.show_type==3){_this._switchAdShow();}
else{_this._365call_ad_Container.style.display="block";if(_this._365call_ad_Frame!=null)
_this._365call_ad_Frame.style.display="block";_this.display=true;_this._365call_ad_show=1;if(_this._365call_ad_height==0){_this._365call_ad_height=_this.get_height(_this._365call_ad_Frame_Container);if(_this.show_type==0)
_this._365call_ad_top=_this._365call_ad_height;}
if(_this._365call_ad_width==0)
_this._365call_ad_width=_this.get_width(_this._365call_ad_Frame_Container);if(_this._365call_ad_Frame!=null&&_this._365call_ad_height>1&&_this._365call_ad_width>1){_this._365call_ad_Frame.style.height=_this._365call_ad_height+"px";var w=0;if(_this.Resize)
w=8;_this._365call_ad_Frame.style.width=(_this._365call_ad_width-w)+"px";}
if(_this.ShowEffect==1)
_this._filter();}
if(_this._onShow!=null)
_this._onShow(_this);}
this.hide=function(){if(_this.show_type==3){_this._switchAdShow();}
else{_this._365call_ad_Container.style.display="none";if(_this._365call_ad_Frame!=null)
_this._365call_ad_Frame.style.display="none";}
_this.display=false;_this._365call_ad_show=0;if(_this._onHide!=null)
_this._onHide(_this);}
this._IndentAd=function(){if(this.show_type==1||this.show_type==3){_this._365call_ad_top-=_this._365call_ad_show_rate;if(_this._365call_ad_top<_this._365call_ad_height_head){_this._365call_ad_top=_this._365call_ad_height_head;}}
if(this.show_type==2||this.show_type==3){_this._365call_ad_length-=_this._365call_ad_show_rate;if(_this._365call_ad_length<_this._365call_ad_width_head){_this._365call_ad_length=_this._365call_ad_width_head;}}
if($365_IE){if(this.show_type==1||this.show_type==3){_this._365call_ad_Frame.style.height=_this._365call_ad_top+"px";_this._365call_ad_Container.style.height=_this._365call_ad_top+"px";}
if(this.show_type==2||this.show_type==3){var w=0;if(_this.Resize)
w=8;_this._365call_ad_Frame.style.width=(_this._365call_ad_length-w)+"px";_this._365call_ad_Container.style.width=_this._365call_ad_length+"px";}}
else{var clientSize=$365_getClientSize(_this._365call_ad_Container);var dy=clientSize.t+clientSize.b;var dx=clientSize.l+clientSize.r;if(this.show_type==1||this.show_type==3){_this._365call_ad_Frame.style.height=_this._365call_ad_top-dy+"px";_this._365call_ad_Container.style.height=_this._365call_ad_top-dy+"px";}
if(this.show_type==2||this.show_type==3){var w=0;if(_this.Resize)
w=8;_this._365call_ad_Frame.style.width=(_this._365call_ad_length-w-dx)+"px";_this._365call_ad_Container.style.width=_this._365call_ad_length-dx+"px";}}
if(((this.show_type==1||this.show_type==3)&&_this._365call_ad_top>_this._365call_ad_height_head)||((this.show_type==2||this.show_type==3)&&_this._365call_ad_length>_this._365call_ad_width_head)){if(_this._365call_ad_act!=null)
clearTimeout(_this._365call_ad_act);_this._365call_ad_act=window.setTimeout(function(){_this._IndentAd();},20);}
else{_this.fix_position(_this.leftPos(),_this.topPos());if(_this._365call_ad_switchButton&&_this._switchButton_Expand_url.length>0){if($365_IE&&_this._switchButton_Expand_url.indexOf(".png")>0)
_this._365call_ad_switchButton.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+_this._switchButton_Expand_url+"', sizingMethod='scale')";else
_this._365call_ad_switchButton.style.backgroundImage="url(\""+_this._switchButton_Expand_url+"\")";}}}
this._switchMaximizeWin=function(evnt){if(_this._365call_ad_show==0)
return;var bh=_this.bodyHeight();var bw=_this.bodyWidth();if(_this._365call_ad_top>=bh&&_this._365call_ad_length>=bw)
return;_this._365call_ad_top*=1.5;_this._365call_ad_length*=1.5;if(_this._365call_ad_top>bh)
_this._365call_ad_top=bh;if(_this._365call_ad_length>bw)
_this._365call_ad_length=bw;_this._365call_ad_height=_this._365call_ad_top;_this._365call_ad_width=_this._365call_ad_length;_this._365call_ad_Container.style.height=_this._365call_ad_top+"px";_this._365call_ad_Frame.style.height=_this._365call_ad_top+"px";_this._365call_ad_Container.style.width=_this._365call_ad_length+"px";var w=0;if(_this.Resize)
w=8;_this._365call_ad_Frame.style.width=(_this._365call_ad_length-w)+"px";_this.fix_position(_this.leftPos(),_this.topPos());}
this._switchMinimumWin=function(evnt){if(_this._365call_ad_show==0)
return;if(_this._365call_ad_top<=_this._minWinHeight&&_this._365call_ad_length<=_this._minWinWidth)
return;_this._365call_ad_top/=1.5;_this._365call_ad_length/=1.5;if(_this._365call_ad_top<_this._minWinHeight){_this._365call_ad_top=_this._minWinHeight;_this._365call_base_height=_this._minWinHeight;}
if(_this._365call_ad_length<_this._minWinWidth){_this._365call_ad_length=_this._minWinWidth;_this._365call_base_width=_this._minWinWidth;}
_this._365call_ad_height=_this._365call_ad_top;_this._365call_ad_width=_this._365call_ad_length;_this._365call_ad_Container.style.height=_this._365call_ad_top+"px";_this._365call_ad_Frame.style.height=_this._365call_ad_top+"px";_this._365call_ad_Container.style.width=_this._365call_ad_length+"px";var w=0;if(_this.Resize)
w=8;_this._365call_ad_Frame.style.width=(_this._365call_ad_length-w)+"px";_this.fix_position(_this.leftPos(),_this.topPos());}
this.setVideoWin=function(){if(_this._365call_ad_top>=500&&_this._365call_ad_length>=650)
return;if(_this._365call_ad_top<500)
_this._365call_ad_top=500;if(_this._365call_ad_length<650)
_this._365call_ad_length=650
_this._365call_ad_height=_this._365call_ad_top;_this._365call_ad_width=_this._365call_ad_length;_this._365call_ad_Container.style.height=_this._365call_ad_top+"px";_this._365call_ad_Frame.style.height=_this._365call_ad_top+"px";_this._365call_ad_Container.style.width=_this._365call_ad_length+"px";var w=0;if(_this.Resize)
w=8;_this._365call_ad_Frame.style.width=(_this._365call_ad_length-w)+"px";var x=0;var y=0;if(_this._float_type==5||_this._ie6){x=_this.scrollLeft()+(_this.bodyWidth()-_this._365call_ad_length)/2;y=_this.scrollTop()+(_this.bodyHeight()-_this._365call_ad_top)/2;}
else{x=(_this.bodyWidth()-_this._365call_ad_length)/2;y=(_this.bodyHeight()-_this._365call_ad_top)/2;}
_this.fix_position(x,y);}
this._closeAd=function(evnt){_this._365call_ad_height_head=0;_this._365call_ad_width_head=0;_this._IndentAd();_this._365call_ad_show=0;if(_this._onExit!=null)
_this._onExit(_this);}
this._switchAdShow=function(evnt){if(_this.show_type==1&&_this._365call_ad_top>_this._365call_ad_height_head&&_this._365call_ad_top<_this._365call_ad_height)
return;if(_this.show_type==2&&_this._365call_ad_length>_this._365call_ad_width_head&&_this._365call_ad_length<_this._365call_ad_width)
return;if(_this.show_type==3&&((_this._365call_ad_top>_this._365call_ad_height_head&&_this._365call_ad_top<_this._365call_ad_height)||(_this._365call_ad_length>_this._365call_ad_width_head&&_this._365call_ad_length<_this._365call_ad_width)))
return;if(_this._365call_ad_top<=_this._365call_ad_height_head||_this._365call_ad_length<=_this._365call_ad_width_head){if(_this._onOpen!=null)
_this._onOpen(_this);_this._ExpandAd();}
else{if(_this._onClose!=null)
_this._onClose(_this);_this._365call_ad_show=0;_this._IndentAd();}}
this.FixedFrameSize=function(){try{if(_this.display){var bHeight=_this._365call_ad_Frame.contentWindow.document.body.scrollHeight;var dHeight=_this._365call_ad_Frame.contentWindow.document.documentElement.scrollHeight;var h=Math.max(bHeight,dHeight);if(h<=_this._365call_ad_Frame.height)
h=Math.min(bHeight,dHeight);if(h>0&&parseInt(_this._365call_ad_Frame.style.height)!=h){_this._365call_ad_Container.style.height=h+"px";_this._365call_ad_Frame.style.height=h+"px";_this._365call_ad_height=h;_this._365call_ad_top=h;}
var bWidth=_this._365call_ad_Frame.contentWindow.document.body.scrollWidth;var dWidth=_this._365call_ad_Frame.contentWindow.document.documentElement.scrollWidth;var w=Math.max(bWidth,dWidth);if(w>0&&parseInt(_this._365call_ad_Frame.style.Width)!=w){_this._365call_ad_Container.style.width=w+"px";_this._365call_ad_Frame.style.width=w+"px";_this._365call_ad_width=w;_this._365call_ad_length=w;}}
var t=1000;if(_this._showListTimes<10)
_this._showListTimes++;else
t=100
window.setTimeout(function(){_this.FixedFrameSize();},t);}catch(ex){}}
this.stayTopLeft=function(){if(!_this.dragapproved){_this._fx=_this.leftPos();var dy=(_this.topPos()-_this._fy)/8;if(Math.abs(dy)>0.01){_this._fy+=dy;var rs=false;if($365_IE&&_this._365call_ad_Container.style.display!="none"){rs=true;_this._365call_ad_Container.style.display="none";}
_this._365call_ad_Container.style.left=_this._fx+"px";_this._365call_ad_Container.style.top=_this._fy+"px";if(rs)
_this._365call_ad_Container.style.display="block";}}
window.setTimeout(function(){_this.stayTopLeft();},30);}
this._openFrame=function(){_this._ie6=_365call_isIE6()||($365_IE&&this._get_absolute_position());if(_this._365call_ad_Container!=null){_this._365call_ad_Container.style.display="none";}
_this._createAdContainer();if(_this._layer_con.length==0)
_this._layer_con="IFRAME_365webcall_"+new Date().getTime().toString();_this._365call_ad_Frame_Container.innerHTML="<IFRAME ID=\""+_this._layer_con+"\" SRC=\""+_this._frame_url+"\"  \
                    allowTransparency=\"true\" HEIGHT=\""+($365_IE?_this._365call_ad_height.toString():"1")+"px\" WIDTH=\""+_this._365call_ad_width.toString()+"px\" scrolling=\"no\" frameborder=\"0\"> </IFRAME>";_this._365call_ad_Frame=$365_t(_this._365call_ad_Frame_Container,"IFRAME",_this._layer_con);if(_this._float_type==5){_this._fx=_this.leftPos();_this._fy=_this.topPos()+60;_this.stayTopLeft();}
_this._365call_ad_top=_this._365call_ad_height;_this._365call_ad_length=_this._365call_ad_width;if(this.show_type==1||this.show_type==3){_this._365call_ad_top=0;}
if(this.show_type==2||this.show_type==3){_this._365call_ad_length=0;}
if(this.show_type!=0&&this.show_type!=5){if(_this._365call_ad_Frame==null)
return;window.setTimeout(function(){_this._switchAdShow();},_this._time_span);}}
this._openFrame2=function(){_this._ie6=_365call_isIE6()||($365_IE&&this._get_absolute_position());if(_this._365call_ad_Container!=null){_this._365call_ad_Container.style.display="none";}
var IDs=new Array();_this.RandID=_this._this_name;IDs=_this._this_name.split(".");if(IDs.length>1)
_this.RandID=IDs[1]+new Date().getTime().toString();_this.change_align();if(_this._layer_con.length==0)
_this._layer_con="IFRAME_"+_this.RandID;var w=_this._365call_ad_width;var h=_this._365call_ad_height;if(w==0)
w=1;if(h==0)
h=1;var frameStr="<IFRAME ID=\""+_this._layer_con+"\" allowTransparency=\"true\" HEIGHT=\""+
h.toString()+"\" WIDTH=\""+w.toString()+"px\" scrolling=\"no\" frameborder=\"0\" marginwidth=\"0\" marginHeight=\"0\" frameSpacing=\"0\" > </IFRAME>";if(_this.writeHtml==1){_this._writeAdContainer(frameStr);}
else{_this._createAdContainer();_this._365call_ad_Frame_Container.innerHTML=frameStr;}
_this._365call_ad_Frame=$365_t(_this._365call_ad_Frame_Container,"IFRAME",_this._layer_con);var fcon="";fcon="<style type=\"text/css\">\
        "+_this._frame_css+"\
        </style>\
        "+_this._floatHtml;$365call_IframInsert(_this._365call_ad_Frame,fcon);if(_this._float_type==5){_this._fx=_this.leftPos();_this._fy=_this.topPos()+60;_this.stayTopLeft();}
_this._365call_ad_top=_this._365call_ad_height;_this._365call_ad_length=_this._365call_ad_width;if(_this._365call_ad_height==0||_this._365call_ad_width==0)
_this.FixedFrameSize();}
this._open=function(){_this._ie6=_365call_isIE6()||($365_IE&&this._get_absolute_position());if(_this._365call_ad_Container!=null){_this._365call_ad_Container.style.display="none";}
var IDs=new Array();_this.RandID=_this._this_name;IDs=_this._this_name.split(".");if(IDs.length>1)
_this.RandID=IDs[1]+new Date().getTime().toString();_this.change_align();if(_this.writeHtml==1){_this._writeAdContainer(_this._floatHtml);}
else{_this._createAdContainer();_this._365call_ad_Frame_Container.innerHTML=_this._floatHtml;}
_this._365call_ad_top=_this._365call_ad_height;_this._365call_ad_length=_this._365call_ad_width;if(_this._float_type==5){_this._fx=_this.leftPos();_this._fy=_this.topPos()+60;_this.stayTopLeft();}
if(_this.show_type!=0){window.setTimeout(function(){_this._switchAdShow();},_this._time_span);}
else{_this._365call_ad_top=_this._365call_ad_height;}}}
if(typeof(OnlineSupport_Float_loaded)=='undefined'||!OnlineSupport_Float_loaded)
var OnlineSupport_Float_loaded=true;