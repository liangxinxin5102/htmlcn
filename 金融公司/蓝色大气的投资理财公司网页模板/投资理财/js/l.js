function OnlineSupport_365webcall(name){var _this=this;this._name=name;this._365call_new_win="";this._365call_invite_content="";this._365call_MSNPassport="";this._365call_host="";this._365call_settings="";this._365call_title="";this._365call_IpAddress="";this._365call_l_language="";this._365call_l_icon_width=100;this._365call_l_icon_padding=0;this._365call_l_icon_top=0;this._365call_l_icon_align="left";this._365call_l_icon_valign="top";this._365call_l_icon_hide=0;this._365call_box_width=0;this._365call_box_height=0;this._365groups_CallCount=0;this._365groups_UID="";this._365groups_dID="0";this._365call_charset="0";this._365call_timeLapse=5;this._365call_AccountID;this._365call_UserID;this._365call_ClientID="";this._365call_l_inviteWay=0;this._365call_l_ifInvite=1;this._365call_l_invite_width=402;this._365call_l_invite_height=142;this._365call_l_invite_padding=0;this._365call_l_invite_top=0;this._365call_l_invite_align="left";this._365call_l_invite_valign="top";this._365call_Inner_Invite="";this._365call_Inner_Cont="";this._365call_cssStr="";this.noMonitoring=0;this._365call_UserStatus="online";this._365call_Robot=false;this._365call_Invite_UserID=0;this._365call_Invite_Send=0;this._365call_have_closed=0;this._365call_if_urlclosed="_365call_if_urlclosed_"+this._name;this._365call_minIcon_Float=null;this._365call_inviteFloat=null;this._365call_Invite_container="_365call_Invite_container_"+this._name;this._365call_inviteIcon="_365call_inviteIcon_"+this._name;this._365call_spanCont="_365call_spanCont_"+this._name;this._365call_imFloat=null;this._365call_Icon_container="_355call_Icon_container_"+this._name;this._365call_serviceIcon="_365call_serviceIcon_"+this._name;this._365call_iframe_update=null;this._365call_iframe_update_no=0;this._xaduid="";this._365call_AdMessage=null;this._365call_webchat_win=null;this._365webcall_miniLeaveWord=null;this._365call_ChatSession="";this._365call_GetChatStatus_Time=20000;this._365call_ChatWinStatus_act=null;this._365call_ChatWin_Available=false;this._365call_ChatWin_nIndex=0;this._365call_Show_Type=0;this.alexa=0;this.ActiveCall=0;this.ActiveWidth=350;this.ActiveHeight=400;this.ActiveLocation=1;this.skin_class="";this.close_button=0;this.float_type=5;this.float_type1=5;this.float_type2=5;this.float_type3=5;this.minIcon="";this.showMinIcon=0;this.minIconWidth=21;this.StatWebInserted=0;this.blw_mode="";this.win_url="";this.leaveMsgTrans="";this.intoFrame=0;this.miniLeaveWordRequire=0;this.miniLeaveWordLocation=0;this.VideoStatus=0;this.Heartbeat=true;this.getCommandDelay=20000;this._365call_adContent="";this._365call_webAdIPId=0;this._365call_urlInfo=0;this._prevent=0;this._prevent_url="";this.Active_lrSide=0;this.Active_tbSide=0;this.noFloat=0;this.InviteParaCustom=0;this.againTimeLapse=0;this.writeHtml=0;this.XYTX_LOGIN_NAME="";this._365call_iframe_update_art=null;this.isMobile=false;this._PageClosed=function(evnt){if(_this._365call_have_closed)
return;_this._365call_have_closed=1;var url=_this._365call_host+"chat/pageClosed.aspx?uID="+_this._365groups_UID+"&dID="+_this._365groups_dID+"&webID="+_this._365call_AccountID+"&userID="+_this._365call_UserID;var pageClose=$365call_get(_this._365call_if_urlclosed);if(pageClose)
pageClose.src=url;}
this._openChatWin=function(p_user,invite,obj){if((_365call_Browser()=="sougou"||this.isMobile)&&typeof(obj)=='undefined')
return true;if((_365call_Browser()!="sougou"&&!this.isMobile)&&typeof(obj)!='undefined')
return true;var chatDir;if(_this._365call_UserStatus=="offline"&&_this.leaveMsgTrans.length>0){window.open(_this.leaveMsgTrans);return;}
if(_this.win_url.length>0){chatDir=_this.win_url;if(_this.win_url.toLowerCase().indexOf("onlinechat2")!=-1){chatDir+="?h="+escape(_365webcall_GetUrlSub(_this._365call_host));}
else{chatDir+="?h="+escape(_this._365call_host);}
if((_this._365call_UserStatus=="offline"&&_this._365call_Robot)||p_user==-1){chatDir+="&r=1";}}
else{if((_this._365call_UserStatus=="offline"&&_this._365call_Robot)||p_user==-1){if(_this._365call_new_win==2)
chatDir=_this._365call_host+"chat/newRobotWin3.aspx";else if(_this._365call_new_win==1)
chatDir=_this._365call_host+"chat/newRobotWin.aspx";else
chatDir=_this._365call_host+"chat/RobotChatWin.aspx";}
else{if(_this._365call_new_win==2)
chatDir=_this._365call_host+"chat/ChatWin3.aspx";else if(_this._365call_new_win==1)
chatDir=_this._365call_host+"chat/newChatWin.aspx";else
chatDir=_this._365call_host+"chat/VIPBeforeChatWin.aspx";}
chatDir+="?h=";}
var url=chatDir+"&settings="+_this._365call_settings;if(p_user>0)
url+="&UserID="+p_user.toString();if(_this._365call_l_language.length>0)
url+="&LL="+_this._365call_l_language;if(typeof(invite)!='undefined'&&invite==1){if(p_user>0)
url+="&accessWay=2";else
url+="&accessWay=1";}
url+="&chs="+_this._365call_charset;if(_this.blw_mode.length>0)
url+="&op="+_this.blw_mode;if(_this.skin_class.length>0)
url+="&sk="+escape(_this.skin_class);if(_this._365call_MSNPassport.length>0)
url+="&msn="+escape(_this._365call_MSNPassport);if(_this._xaduid.length>0)
url+="&xuid="+escape(_this._xaduid);if(typeof(_365call_memberID)!='undefined'&&_365call_memberID.length>0&&_365call_memberID!="0")
url+="&memberid="+escape(_365call_memberID);else if(typeof(_webcall_memberID)!='undefined'&&_webcall_memberID.length>0&&_webcall_memberID!="0")
url+="&memberid="+escape(_webcall_memberID);if(typeof(_365call_clientName)!='undefined'&&_365call_clientName.length>0)
url+="&name="+escape(_365call_clientName);else if(typeof(_webcall_clientName)!='undefined'&&_webcall_clientName.length>0)
url+="&name="+escape(_webcall_clientName);if(typeof(_365call_note)!='undefined'&&_365call_note.length>0)
url+="&note="+escape(_365call_note);else if(typeof(_webcall_note)!='undefined'&&_webcall_note.length>0)
url+="&note="+escape(_webcall_note);url+="&ClientID="+_this._365call_ClientID+_365groups_GetBaseData();if((_365call_Browser()=="sougou"||this.isMobile)&&typeof(obj)!='undefined'){obj.href=url;return true;}
else{var _webcall_left=(screen.width-_this._365call_box_width)/2;var _webcall_top=(screen.height-_this._365call_box_height)/2;window.open(url,_this._365call_settings+"0","width="+_this._365call_box_width+",height="+_this._365call_box_height+", top="+_webcall_top+",left="+_webcall_left+",toolbar=no, menubar=no, scrollbars=no, resizable=yes,location=no, status=no,center=yes");return false;}}
this._openGroupChatWin=function(listGroup,group_status,obj){if((_365call_Browser()=="sougou"||this.isMobile)&&typeof(obj)=='undefined')
return true;if((_365call_Browser()!="sougou"&&!this.isMobile)&&typeof(obj)!='undefined')
return true;var url="";if(group_status==9){var chatDir;if(_this.win_url.length>0){chatDir=_this.win_url;if(_this.win_url.toLowerCase().indexOf("onlinechat2")!=-1)
chatDir+="?r=1&h="+escape(_365webcall_GetUrlSub(_this._365call_host));else
chatDir+="?r=1&h="+escape(_this._365call_host);}
else{if(_this._365call_new_win==2)
chatDir=_this._365call_host+"chat/newRobotWin3.aspx";else if(_this._365call_new_win==1)
chatDir=_this._365call_host+"chat/newRobotWin.aspx";else
chatDir=_this._365call_host+"chat/RobotChatWin.aspx";chatDir+="?h=";}
url=chatDir+"&settings="+_this._365call_settings+"&ClientID="+_this._365call_ClientID;}
else{var chatDir;if(_this.win_url.length>0){chatDir=_this.win_url;if(_this.win_url.toLowerCase().indexOf("onlinechat2")!=-1)
chatDir+="?h="+escape(_365webcall_GetUrlSub(_this._365call_host));else
chatDir+="?h="+escape(_this._365call_host);}
else{if(_this._365call_new_win==2)
chatDir=_this._365call_host+"chat/ChatWin3.aspx";else if(_this._365call_new_win==1)
chatDir=_this._365call_host+"chat/newChatWin.aspx";else
chatDir=_this._365call_host+"chat/VIPBeforeChatWin.aspx";chatDir+="?h=";}
url=chatDir+"&settings="+_this._365call_settings+"&ClientID="+_this._365call_ClientID+"&listGroup="+listGroup.toString();}
url+="&chs="+_this._365call_charset;if(_this.skin_class.length>0)
url+="&sk="+escape(_this.skin_class);if(_this._365call_l_language.length>0)
url+="&LL="+_this._365call_l_language;if(_this._365call_MSNPassport.length>0)
url+="&msn="+escape(_this._365call_MSNPassport);if(_this._xaduid.length>0)
url+="&xuid="+escape(_this._xaduid);if(typeof(_365call_memberID)!='undefined'&&_365call_memberID.length>0&&_365call_memberID!="0")
url+="&memberid="+escape(_365call_memberID);else if(typeof(_webcall_memberID)!='undefined'&&_webcall_memberID.length>0&&_webcall_memberID!="0")
url+="&memberid="+escape(_webcall_memberID);if(typeof(_365call_clientName)!='undefined'&&_365call_clientName.length>0)
url+="&name="+escape(_365call_clientName);else if(typeof(_webcall_clientName)!='undefined'&&_webcall_clientName.length>0)
url+="&name="+escape(_webcall_clientName);if(typeof(_365call_note)!='undefined'&&_365call_note.length>0)
url+="&note="+escape(_365call_note);else if(typeof(_webcall_note)!='undefined'&&_webcall_note.length>0)
url+="&note="+escape(_webcall_note);url+=_365groups_GetBaseData();if(typeof(obj)!='undefined'){obj.href=url;return true;}
if((_365call_Browser()=="sougou"||this.isMobile)&&typeof(obj)!='undefined'){obj.href=url;return true;}
else{var _webcall_left=(screen.width-_this._365call_box_width)/2;var _webcall_top=(screen.height-_this._365call_box_height)/2;window.open(url,_this._365call_settings+"0","width="+_this._365call_box_width+",height="+_this._365call_box_height+", top="+_webcall_top+",left="+_webcall_left+",toolbar=no, menubar=no, scrollbars=no, resizable=yes,location=no, status=no,center=yes");return false;}}
this.AdStatusUpdate=function(){if(_this._365call_webAdIPId==0)
return;var url=_this._365call_host+"U.aspx?id="+_this._365call_webAdIPId.toString();var js_obj=document.createElement("script");js_obj.type="text/javascript";js_obj.setAttribute("src",url);_365call_oHead.appendChild(js_obj);}
this.InsertStatWeb=function(){if(_this.StatWebInserted==1)
return;_this.StatWebInserted=1;var url=_this._365call_host+"I.aspx?cb="+_this._name+".onInsertStatWebAvailable"+"&ch="+_this._365call_charset+"&a="+_this._365call_AccountID+"&u="+_this._365call_UserID+"&c="+_this._365call_ClientID+"&alx="+_this.alexa.toString()+
_365groups_GetBaseData()+"&timeStamp="+new Date().getTime().toString();var o_js_obj=$365call_get("_365call_Command");if(o_js_obj)
o_js_obj.parentNode.removeChild(o_js_obj);var js_obj=document.createElement("script");js_obj.type="text/javascript";js_obj.setAttribute("src",url);js_obj.setAttribute("id","_365call_Command");_365call_oHead.appendChild(js_obj);}
this._getCommandFromServer=function(){if(_this._365groups_UID.length==0)
return;var url=_this._365call_host+"chat/applyStatus.aspx?uID="+_this._365groups_UID+"&CallCount="+_this._365groups_CallCount.toString()+"&AccountID="+_this._365call_AccountID+"&UserID="+_this._365call_UserID+"&charset="+_this._365call_charset+"&CallBackFunction="+_this._name+".onCommandFromServerAvailable"+"&CallBackFunction1="+_this._name+".onAdMessageReceive"+"&f2="+_this._name+"._show365Message&timeStamp="+new Date().getTime().toString();var o_js_obj=$365call_get("_365call_Command");if(o_js_obj)
o_js_obj.parentNode.removeChild(o_js_obj);var js_obj=document.createElement("script");js_obj.type="text/javascript";js_obj.setAttribute("src",url);js_obj.setAttribute("id","_365call_Command");_365call_oBody.appendChild(js_obj);window.setTimeout(function(){_this._getCommandFromServer();},_this.getCommandDelay);}
this._show365Message=function(sContent){if(sContent.length==0)
return;if(_this._365call_imFloat!=null)
_this._365call_imFloat.showCon(sContent);else if(_this._365call_webchat_win!=null){_this._365call_webchat_win.showCon(sContent);}}
this._show365MessageFrame=function(sContent){if(sContent.length==0)
return;if(_this._365call_imFloat!=null)
_this._365call_imFloat.showFrameCon(sContent);else if(_this._365call_webchat_win!=null){_this._365call_webchat_win.showFrameCon(sContent);}}
this._getXaduid=function(){var x=_365call_GetQueryString("365webcall_xaduid");if(x!=null)
this._xaduid=x;}
this._UpdateClientInfo=function(){this._365call_iframe_update_no++;var _memberID;var _clientName;var _email;var _phone;var _msn;var _qq;var _note;if(typeof(_365call_memberID)=='undefined'||typeof(_365call_clientName)=='undefined'||typeof(_365call_email)=='undefined'||typeof(_365call_phone)=='undefined'||typeof(_365call_msn)=='undefined'||typeof(_365call_qq)=='undefined'||typeof(_365call_note)=='undefined'){if(typeof(_webcall_memberID)=='undefined'||typeof(_webcall_clientName)=='undefined'||typeof(_webcall_email)=='undefined'||typeof(_webcall_phone)=='undefined'||typeof(_webcall_msn)=='undefined'||typeof(_webcall_ww)=='undefined'||typeof(_webcall_qq)=='undefined'||typeof(_webcall_note)=='undefined'){if(this._365call_iframe_update_no<4){clearTimeout(_this._365call_iframe_update_art);_this._365call_iframe_update_art=window.setTimeout(function(){_this._UpdateClientInfo();},2000);}
return;}
else{_memberID=_webcall_memberID;_clientName=_webcall_clientName;_email=_webcall_email;_phone=_webcall_phone;_msn=_webcall_msn;_qq=_webcall_qq;_note=_webcall_note;}}
else{_memberID=_365call_memberID;_clientName=_365call_clientName;_email=_365call_email;_phone=_365call_phone;_msn=_365call_msn;_qq=_365call_qq;_note=_365call_note;}
if(this._365call_iframe_update==null)
this._365call_iframe_update=this._createIframe("_365call_iframe_update");var url=_this._365call_host+"chat/UpdateClientInfo.aspx?AccountID="+_this._365call_AccountID+"&UserID="+_this._365call_UserID+"&MemberID="+escape(_memberID)+"&clientName="+escape(_clientName)+"&email="+escape(_email)+"&phone="+escape(_phone)+"&msn="+escape(_msn)+"&qq="+escape(_qq)+"&note="+escape(_note)+"&labelID="+_this._365call_ClientID;if(typeof(_365call_login_time)!='undefined')
url=url+"&lt="+escape(_365call_login_time);else if(typeof(_webcall_login_time)!='undefined')
url=url+"&lt="+escape(_webcall_login_time);if(typeof(_365call_login_times)!='undefined')
url=url+"&lts="+escape(_365call_login_times);else if(typeof(_webcall_login_times)!='undefined')
url=url+"&lts="+escape(_webcall_login_times);if(typeof(_365call_regist_time)!='undefined')
url=url+"&rt="+escape(_365call_regist_time);else if(typeof(_webcall_regist_time)!='undefined')
url=url+"&et="+escape(_webcall_regist_time);if(typeof(_365call_deal_count)!='undefined')
url=url+"&dc="+escape(_365call_deal_count);else if(typeof(_webcall_deal_count)!='undefined')
url=url+"&dc="+escape(_webcall_deal_count);if(typeof(_365call_deal_weight)!='undefined')
url=url+"&dw="+escape(_365call_deal_weight);else if(typeof(_webcall_deal_weight)!='undefined')
url=url+"&dw="+escape(_webcall_deal_weight);if(typeof(_365call_contacts)!='undefined')
url=url+"&ct="+escape(_365call_contacts);else if(typeof(_webcall_contacts)!='undefined')
url=url+"&ct="+escape(_webcall_contacts);if(this._365call_iframe_update!=null)
this._365call_iframe_update.src=url;}
this._hideInvite=function(a){if(_365call_Browser()=="sougou"&&typeof(a)!='undefined'){window.setTimeout(function(){_this._hideInvite();},1000);return true;}
if(_this._365call_inviteFloat)
_this._365call_inviteFloat.hide();_this._365call_Invite_Send=0;}
this._hidePanel=function(){if(_this._365call_imFloat)
_this._365call_imFloat.hide();}
this._365call_onClosed=function(){this._createIframe(_this._365call_if_urlclosed);if(window.addEventListener){window.addEventListener("beforeunload",_this._PageClosed,false);}
else if(window.attachEvent){window.attachEvent("onbeforeunload",_this._PageClosed);}
if(window.addEventListener){window.addEventListener("unload",_this._PageClosed,false);}
else if(window.attachEvent){window.attachEvent("onunload",_this._PageClosed);}}
this._createIframe=function(iframeID){var oFrm=document.createElement("iframe");oFrm.setAttribute("id",iframeID);oFrm.style.display="none";if(_365call_oBody){if(_365call_oBody.firstChild)
_365call_oBody.insertBefore(oFrm,_365call_oBody.firstChild);else
_365call_oBody.appendChild(oFrm);}
else if(_365call_oHead){if(_365call_oHead.firstChild)
_365call_oHead.insertBefore(oFrm,_365call_oBody.firstChild);else
_365call_oHead.appendChild(oFrm);}
return oFrm;}
this._getChatStatusFromServer=function(){if(!(_this._365call_ChatWin_Available))
return
var url=_this._365call_host+"chat/getChatSessionInfo.aspx?s="+_this._365call_ChatSession+"&u="+_this._365groups_UID.toString()+"&b="+this._name+"._onChatStatusFromServerAvailable&timeStamp="+new Date().getTime().toString();var o_js_obj=$365call_get("_365call_Get_ChatStatus");if(o_js_obj)
o_js_obj.parentNode.removeChild(o_js_obj);var js_obj=document.createElement("script");js_obj.type="text/javascript";js_obj.setAttribute("src",url);js_obj.setAttribute("id","_365call_Get_ChatStatus");_365call_oHead.appendChild(js_obj);if(_this._365call_ChatWinStatus_act!=null)
clearTimeout(_this._365call_ChatWinStatus_act);_this._365call_ChatWinStatus_act=window.setTimeout(function(){_this._getChatStatusFromServer();},_this._365call_GetChatStatus_Time);}
this._onChatStatusFromServerAvailable=function(nIndex,StatwebUID,finished,user_status,sessionID,video){if(_this._365call_webchat_win==null)
return;if((StatwebUID!=_this._365groups_UID||finished=="1")&&_this._365call_ChatWin_nIndex>0){_this._365call_ChatWin_nIndex=0;if(_this._365call_webchat_win._365call_ad_show!=0){if(this._365call_webchat_win.show_type==0||this._365call_webchat_win.show_type==5)
_this._365call_webchat_win.hide();else
_this._365call_webchat_win._closeAd(_this);}
_this._365call_GetChatStatus_Time=10000;return;}
if(nIndex>_this._365call_ChatWin_nIndex&&StatwebUID==_this._365groups_UID&&finished!="1"){if(_this._365call_webchat_win._365call_ad_show==0){if(this._365call_webchat_win.show_type==0||this._365call_webchat_win.show_type==5)
_this._365call_webchat_win.show();else
_this._365call_webchat_win._switchAdShow();}
_this._365call_ChatWin_nIndex=nIndex;_this._365call_ChatSession=sessionID;}
if(video!=0&&StatwebUID==_this._365groups_UID&&finished!="1"){if(_this.VideoStatus!=video){_this.VideoStatus=video;if(_this.VideoStatus==1){if(_this._365call_webchat_win._365call_ad_show==0){if(this._365call_webchat_win.show_type==0||this._365call_webchat_win.show_type==5)
_this._365call_webchat_win.show();else
_this._365call_webchat_win._switchAdShow();}
_this._365call_webchat_win.setVideoWin();}}}}
this._onExpandWin=function(e){_this._365call_GetChatStatus_Time=20000;}
this._onIndentWin=function(e){_this._365call_GetChatStatus_Time=5000;if(_this._365call_ChatWinStatus_act!=null)
clearTimeout(_this._365call_ChatWinStatus_act);_this._getChatStatusFromServer();}
this._onExitWin=function(e){if(_this._365call_Show_Type!=3){if(_this._365call_ChatWinStatus_act!=null)
clearTimeout(_this._365call_ChatWinStatus_act);_this._365call_ChatWin_Available=false;}}
this._JumpUrl=function(){try{if(_this._prevent==0||_this._prevent_url.length==0){_this._prevent_url=_365groups_GetCookie("_365webcall_Prevent_Url");if(_this._prevent_url!=null&&_this._prevent_url.length>0)
_this._prevent=1;}
else{_365groups_SetCookie("_365webcall_Prevent_Url",_this._prevent_url,60*60);}}
catch(e){}
if(_this._prevent==1&&_this._prevent_url.length>0){var loc=window.location;try{if(window.parent!=null){if(window.parent.location!=null)
loc=window.parent.location;}}
catch(ex){loc=window.location;}
loc.href=_this._prevent_url;}}}
OnlineSupport_365webcall.prototype={set_Arg:function(a){this._365call_invite_content=a["_365call_invite_content"];this._365call_ClientID=a["_365call_ClientID"];this._365call_UserID=a["_365call_UserID"];this._365call_MSNPassport=a["_365call_MSNPassport"];this._365call_host=a["_365call_host"];this._365call_settings=a["_365call_settings"];this._365call_title=a["_365call_title"];this._365call_l_language=a["_365call_l_language"];this._365call_l_icon_width=a["_365call_l_icon_width"];this._365call_l_icon_padding=a["_365call_l_icon_padding"];this._365call_l_icon_top=a["_365call_l_icon_top"];this._365call_l_icon_align=a["_365call_l_icon_align"];this._365call_l_icon_valign=a["_365call_l_icon_valign"];this._365call_l_invite_width=a["_365call_l_invite_width"];this._365call_l_invite_height=a["_365call_l_invite_height"];this._365call_l_invite_padding=a["_365call_l_invite_padding"];this._365call_l_invite_top=a["_365call_l_invite_top"];this._365call_l_invite_align=a["_365call_l_invite_align"];this._365call_l_invite_valign=a["_365call_l_invite_valign"];this._365call_l_inviteWay=a["_365call_l_inviteWay"];this._365call_l_ifInvite=a["_365call_l_ifInvite"];this._365call_l_icon_hide=a["_365call_l_icon_hide"];this._365call_box_width=a["_365call_box_width"];this._365call_box_height=a["_365call_box_height"];this._365groups_CallCount=a["_365groups_CallCount"];this._365groups_UID=a["_365groups_UID"];this._365groups_dID=a["_365groups_dID"];this._365call_charset=a["_365call_charset"];this._365call_AccountID=a["_365call_AccountID"];this._365call_Inner_Invite=_365webcall_DecodeString(a["_365call_Inner_Invite"]);this._365call_Inner_Cont=_365webcall_DecodeString(a["_365call_Inner_Cont"]);this._365call_cssStr=a["_365call_cssStr"];this.noMonitoring=a["noMonitoring"];this._365call_UserStatus=a["_365call_UserStatus"];this._365call_Robot=a["_365call_Robot"];this._365call_IpAddress=a["_365call_IpAddress"];this._365call_timeLapse=a["_365call_timeLapse"];this._365call_new_win=a["_365call_new_win"];this.ActiveCall=a["ActiveCall"];this.ActiveWidth=a["ActiveWidth"];this.ActiveHeight=a["ActiveHeight"];this.ActiveLocation=a["ActiveLocation"];this.skin_class=a["skin_class"];this.close_button=a["close_button"];this.float_type=a["float_type"];this.float_type1=a["float_type1"];this.float_type2=a["float_type2"];this.float_type3=a["float_type3"];this.minIcon=a["minIcon"];this.showMinIcon=a["showMinIcon"];this.minIconWidth=a["minIconWidth"];this._365call_Show_Type=a["show_type"];this.blw_mode=a["blw_mode"];this.win_url=a["win_url"];this.leaveMsgTrans=a["leaveMsgTrans"];this.intoFrame=a["intoFrame"];this.miniLeaveWordRequire=a["miniLeaveWordRequire"];this.miniLeaveWordLocation=a["miniLeaveWordLocation"];this.Heartbeat=a["Heartbeat"];this.getCommandDelay=a["CommandDelay"];this._365call_adContent=a["adContent"];this._365call_webAdIPId=a["webAdIPId"];this._365call_urlInfo=a["urlInfo"];this._prevent=a["prevent"];this._prevent_url=a["prevent_url"];this.Active_lrSide=a["Active_lrSide"];this.Active_tbSide=a["Active_tbSide"];this.noFloat=a["noFloat"];this.InviteParaCustom=a["InviteParaCustom"];this.againTimeLapse=a["againTimeLapse"];this.writeHtml=a["writeHtml"];_365call_oBodys_num=a["oBodys_num"];this.XYTX_LOGIN_NAME=a["XYTX_LOGIN_NAME"];this.isMobile=a["isMobile"];},Run:function(){this._JumpUrl();var _this=this;try{if(navigator.userAgent.toLowerCase().indexOf("alexa")!=-1)
_this.alexa=1;}
catch(e){}
if(this.minIcon.length>0){this._365call_minIcon_Float=new showAdWin_365webcall();this._365call_minIcon_Float._this_name=this._name+"._365call_minIcon_Float";this._365call_minIcon_Float._365call_ad_width=this.minIconWidth;this._365call_minIcon_Float._365call_ad_fromSide=0;this._365call_minIcon_Float._365call_ad_fromTop=this._365call_l_icon_top+30;this._365call_minIcon_Float._365call_ad_location=this._365call_l_icon_align;this._365call_minIcon_Float.drag_status=0;this._365call_minIcon_Float.switch_button=0;this._365call_minIcon_Float.close_button=0;this._365call_minIcon_Float.show_type=0;this._365call_minIcon_Float._floatHtml=this.minIcon;this._365call_minIcon_Float.Zindex=this._365call_minIcon_Float.Zindex-1;this._365call_minIcon_Float._float_type=this.float_type;this._365call_minIcon_Float.writeHtml=this.writeHtml;this._365call_minIcon_Float._open();this._365call_minIcon_Float.show();if(this.showMinIcon==0||(this.showMinIcon==2&&!this.isMobile))
this._365call_minIcon_Float.hide();}
$365call_createCSS(this._365call_cssStr);if(this._365call_Show_Type!=3){if(this._365call_Inner_Cont.length>0&&this._365call_Show_Type!=1){this._365call_imFloat=new showAdWin_365webcall();this._365call_imFloat._this_name=this._name+"._365call_imFloat";this._365call_imFloat._365call_ad_width=this._365call_l_icon_width;this._365call_imFloat._365call_ad_fromSide=this._365call_l_icon_padding;this._365call_imFloat._365call_ad_fromTop=this._365call_l_icon_top;this._365call_imFloat._365call_ad_location=this._365call_l_icon_align;if(this.noFloat==1){this._365call_imFloat.drag_status=0;}
else{if(this.intoFrame==1){if(this._365call_Show_Type==2||this._365call_Show_Type==4){this._365call_imFloat.drag_status=2;this._365call_imFloat.drag_width=this._365call_l_icon_width-20;this._365call_imFloat._365call_ad_height_head=30;}
else{this._365call_imFloat.drag_status=0;}}
else{this._365call_imFloat.drag_status=1;}}
this._365call_imFloat.switch_button=0;this._365call_imFloat.close_button=this.close_button;this._365call_imFloat._CloseButtonWidth=11;this._365call_imFloat._CloseButtonHeight=11;this._365call_imFloat._CloseButtonRight=2;this._365call_imFloat._CloseButtonTop=2;this._365call_imFloat._closeButton_url=this._365call_host+"image/style/close.gif";this._365call_imFloat.show_type=0;this._365call_imFloat._layer_con=this._365call_serviceIcon;this._365call_imFloat._floatHtml=this._365call_Inner_Cont;this._365call_imFloat._float_type=this.float_type;this._365call_imFloat._frame_css=this._365call_cssStr;this._365call_imFloat.writeHtml=this.writeHtml;this._365call_imFloat._onHide=function(e){if(_this._365call_minIcon_Float)
_this._365call_minIcon_Float.show();};if(this.intoFrame==1)
this._365call_imFloat._openFrame2();else
this._365call_imFloat._open();if(this._365call_l_icon_hide!=1&&(this.showMinIcon==0||(this.showMinIcon==2&&!this.isMobile)))
this._365call_imFloat.show();this._365call_imFloat._onAdClick=function(e){_this.AdStatusUpdate();};}
if(this._365call_Inner_Invite.length>0){this._365call_inviteFloat=new showAdWin_365webcall();this._365call_inviteFloat._this_name=this._name+"._365call_inviteFloat";this._365call_inviteFloat._365call_ad_width=this._365call_l_invite_width;this._365call_inviteFloat._365call_ad_height=this._365call_l_invite_height;this._365call_inviteFloat._365call_ad_fromSide=this._365call_l_invite_padding;this._365call_inviteFloat._365call_ad_fromTop=this._365call_l_invite_top;this._365call_inviteFloat._365call_ad_location=this._365call_l_invite_align;if(this.noFloat==1){this._365call_inviteFloat.drag_status=0;}
else{if(this.intoFrame==1){this._365call_inviteFloat.drag_status=2;this._365call_inviteFloat.drag_width=this._365call_l_invite_width-20;this._365call_inviteFloat._365call_ad_height_head=50;}
else{this._365call_inviteFloat.drag_status=1;}}
this._365call_inviteFloat.switch_button=0;this._365call_inviteFloat.show_type=0;this._365call_inviteFloat.ShowEffect=1;this._365call_inviteFloat._layer_con=this._365call_inviteIcon;this._365call_inviteFloat._floatHtml=this._365call_Inner_Invite;this._365call_inviteFloat._float_type=this.float_type1;this._365call_inviteFloat._frame_css=this._365call_cssStr;this._365call_inviteFloat.writeHtml=this.writeHtml;if(this.intoFrame==1)
_this._365call_inviteFloat._openFrame2();else
_this._365call_inviteFloat._open();if(this._365call_l_ifInvite==1||(this._365call_UserStatus=="online"&&this._365call_l_ifInvite==2)){if(this._365call_l_inviteWay==1||(window.name!="365call"&&_365webcall_firstAccess())){var tmp1=function(){if(_this._365call_Invite_Send==0){_this._365call_Invite_Send=1;_this._365call_inviteFloat.show();window.name="365call";}}
window.setTimeout(tmp1,this._365call_timeLapse*1000);if(_this.againTimeLapse>0){this._365call_inviteFloat._onHide=function(e){if(_this.againTimeLapse>0)
window.setTimeout(tmp1,_this.againTimeLapse*1000);};}}}}}
else{this._365call_Invite_UserID=0;this.onOpenWebChatWin1();if(this._365call_adContent.length>0){if(_this.alexa==1)
_this._show365Message(this._365call_adContent);else
_this._show365MessageFrame(this._365call_adContent);}
if(this._365call_urlInfo>0){$365call_uploadPageInfo(this._365call_host,this._365groups_UID);}
_365webcall_host=this._365call_host;if(_365webcall_frameDomain_p==null){_365webcall_frameDomain_p=this._createIframe("_365webcall_frameDomain");}}
if(this.miniLeaveWordRequire!=0)
this.onOpenMiniLeaveWord();if(!this.noMonitoring){if(this._365call_Show_Type!=3)
this.InsertStatWeb();this._365call_onClosed();}
if(_this._365call_iframe_update_art==null)
_this._365call_iframe_update_art=setTimeout(function(){_this._UpdateClientInfo();},500);_this._getXaduid();},Show:function(){if(this._365call_Show_Type!=3){if(this._365call_imFloat)
this._365call_imFloat.show();}
else{if(this._365call_webchat_win)
this._365call_webchat_win.show();}},onInsertStatWebAvailable:function(uid,did,callcount,adContent,webAdIPId,urlInfo,prevent,prevent_url){this._prevent=prevent;this._prevent_url=prevent_url;this._JumpUrl();this._365groups_CallCount=callcount;this._365call_webAdIPId=webAdIPId;this._365groups_UID=uid;this._365groups_dID=did;var _this=this;if(typeof(adContent)!='undefined'&&adContent.length>0){if(_this.alexa==1)
_this._show365Message(adContent);else
_this._show365MessageFrame(adContent);}
if(typeof(urlInfo)!='undefined'&&urlInfo>0){$365call_uploadPageInfo(this._365call_host,this._365groups_UID);this._365call_urlInfo=urlInfo;}
if(_this.Heartbeat)
window.setTimeout(function(){_this._getCommandFromServer();},200);},onCommandFromServerAvailable:function(Invite_UserID,CallCount,Content,SessionID){if(CallCount==77777){this._prevent=1;this._prevent_url=Content;this._JumpUrl();return;}
if(this._365call_ChatSession.length==0)
this._365call_ChatSession=SessionID;if(this.ActiveCall==1&&this._365call_ChatSession.length>0){if(!(this._365call_ChatWin_Available)){this._365call_ChatWin_Available=true;this._365call_Invite_UserID=Invite_UserID;this._365groups_CallCount=CallCount;this.onOpenWebChatWin(Content);}}
else{if(this._365call_Invite_Send==0){this._365call_Invite_Send=1;this._365call_Invite_UserID=Invite_UserID;this._365groups_CallCount=CallCount;var Invite_Content=this._365call_invite_content;if(Content.length>0){Invite_Content=Content;}
if(this.intoFrame==1){this._365call_inviteFloat._365call_ad_Frame.contentWindow._365call_showCont(this._365call_spanCont,Invite_Content);}
else{var _365call_spanCont1=$365call_get(this._365call_spanCont);if(_365call_spanCont1)
_365call_spanCont1.innerHTML=Invite_Content;}
window.focus();this._365call_inviteFloat.show();}}},CreateIconImg:function(spanID,pUser,noImg){var oSp=$365call_get(spanID);var _this=this;if(oSp){if(_365webcall_getDomTagName(spanID)=="a"){oSp.style.cursor="pointer";oSp.onclick=function(){_this._openChatWin(pUser,0);}
oSp.onmouseover=function(){_this._openChatWin(pUser,0,oSp);}}
else{oSp.style.cursor="pointer";oSp.onclick=function(){_this._openChatWin(pUser);}}
if(typeof(noImg)=='undefined'||noImg!="1"){if(typeof(noImg)!='undefined'&&noImg=="2"){var imgs=oSp.getElementsByTagName("img");for(var i=0;i<imgs.length;i++){if(i==0){if(_this._365call_UserStatus=="offline")
imgs[i].style.display="none";else
imgs[i].style.display="";}
else if(i==1){if(_this._365call_UserStatus=="offline")
imgs[i].style.display="";else
imgs[i].style.display="none";}}}
else{var oImg=document.createElement("img");oImg.border="0";oImg.alt=this._365call_title;oImg.src=_this._365call_Inner_Cont;if(oSp.firstChild)
oSp.insertBefore(oImg,oSp.firstChild);else
oSp.appendChild(oImg);}}}},onOpenWebChatWin:function(content){var _this=this;if(this._365call_webchat_win==null)
this._365call_webchat_win=new showAdWin_365webcall();this._365call_webchat_win._this_name=this._name+"._365call_webchat_win";this._365call_ChatWin_Available=true;this._365call_GetChatStatus_Time=10000;this._365call_webchat_win._365call_ad_show_rate=100;this._365call_webchat_win.set_win_width(this.ActiveWidth);this._365call_webchat_win.set_win_height(this.ActiveHeight);this._365call_webchat_win._365call_ad_height_head=30;this._365call_webchat_win._365call_ad_width_head=220;this._365call_webchat_win._365call_ad_fromSide=this.Active_lrSide;this._365call_webchat_win._365call_ad_fromTop=this.Active_tbSide;this._365call_webchat_win._365call_ad_location=this.ActiveLocation;if(this.noFloat==1)
this._365call_webchat_win.drag_status=0;else
this._365call_webchat_win.drag_status=2;this._365call_webchat_win.show_type=3;this._365call_webchat_win.Resize=true;this._365call_webchat_win.switch_button=1;this._365call_webchat_win._switchWidth=39;this._365call_webchat_win._switchHeight=26;this._365call_webchat_win._switchRight=9;this._365call_webchat_win._switchTop=1;this._365call_webchat_win._switchButton_Indent_url=this._365call_host+"image/style/m1.png";this._365call_webchat_win._switchButton_Expand_url=this._365call_host+"image/style/m2.png";this._365call_webchat_win._float_type=this.float_type2;this._365call_webchat_win._frame_url=this._365call_host+"chat/webChatWin.aspx?settings="+this._365call_settings+"&ClientID="+this._365call_ClientID+"&UserID="+this._365call_Invite_UserID.toString()+"&iv=1&accessWay=3"+"&sd="+this._365groups_UID+"&sq="+escape(content)+
_365groups_GetBaseData()+(this._365call_l_language.length>0?("&LL="+this._365call_l_language):"");if(this.XYTX_LOGIN_NAME.length>0)
this._365call_webchat_win._frame_url=this._365call_webchat_win._frame_url+"&xyln="+this.XYTX_LOGIN_NAME;this._365call_webchat_win._time_span=10000;this._365call_webchat_win._onOpen=function(e){_this._onExpandWin(e);};this._365call_webchat_win._onClose=function(e){_this._onIndentWin(e);};this._365call_webchat_win._onExit=function(e){_this._onExitWin(e);};this._365call_webchat_win._openFrame();_this._365call_ChatWinStatus_act=window.setTimeout(function(){_this._getChatStatusFromServer();},_this._365call_GetChatStatus_Time);},onOpenWebChatWin1:function(){var _this=this;if(this._365call_webchat_win==null)
this._365call_webchat_win=new showAdWin_365webcall();this._365call_webchat_win._this_name=this._name+"._365call_webchat_win";this._365call_ChatWin_Available=true;this._365call_GetChatStatus_Time=10000;this._365call_webchat_win._365call_ad_show_rate=40;this._365call_webchat_win.set_win_width(this._365call_box_width);this._365call_webchat_win.set_win_height(this._365call_box_height);this._365call_webchat_win._365call_ad_height_head=38;this._365call_webchat_win._365call_ad_fromSide=this._365call_l_icon_padding;this._365call_webchat_win._365call_ad_fromTop=this._365call_l_icon_top;this._365call_webchat_win._365call_ad_location=this._365call_l_icon_align;if(this.noFloat==1)
this._365call_webchat_win.drag_status=0;else
this._365call_webchat_win.drag_status=3;this._365call_webchat_win.show_type=0;this._365call_webchat_win.Resize=true;this._365call_webchat_win.Minimum_button=1;this._365call_webchat_win._MinimumWidth=25;this._365call_webchat_win._MinimumHeight=21;this._365call_webchat_win._MinimumRight=59;this._365call_webchat_win._MinimumTop=8;this._365call_webchat_win.Maximize_button=1;this._365call_webchat_win._MaximizeWidth=25;this._365call_webchat_win._MaximizeHeight=21;this._365call_webchat_win._MaximizeRight=34;this._365call_webchat_win._MaximizeTop=8;this._365call_webchat_win.close_button=1;this._365call_webchat_win._CloseButtonWidth=25;this._365call_webchat_win._CloseButtonHeight=21;this._365call_webchat_win._CloseButtonRight=9;this._365call_webchat_win._CloseButtonTop=8;this._365call_webchat_win._float_type=this.float_type;this._365call_webchat_win._frame_url=this._365call_host+"chat/newChatWin2.aspx?settings="+this._365call_settings+"&ClientID="+this._365call_ClientID+"&accessWay=3"+"&sd="+this._365groups_UID+_365groups_GetBaseData()+(this._365call_l_language.length>0?("&LL="+this._365call_l_language):"");if(this.XYTX_LOGIN_NAME.length>0)
this._365call_webchat_win._frame_url=this._365call_webchat_win._frame_url+"&xyln="+this.XYTX_LOGIN_NAME;this._365call_webchat_win._time_span=3000;this._365call_webchat_win._onHide=function(e){if(_this._365call_minIcon_Float)
_this._365call_minIcon_Float.show();_this._onIndentWin(e);};this._365call_webchat_win._onShow=function(e){if(_this._365call_minIcon_Float)
_this._365call_minIcon_Float.hide();_this._onExpandWin(e);};this._365call_webchat_win._onAdClick=function(e){_this.AdStatusUpdate();};this._365call_webchat_win._openFrame();if(this.showMinIcon==0||(this.showMinIcon==2&&!this.isMobile))
_this._365call_webchat_win.show();_this._365call_ChatWinStatus_act=window.setTimeout(function(){_this._getChatStatusFromServer();},_this._365call_GetChatStatus_Time);},onOpenMiniLeaveWord:function(){var _this=this;if(this._365webcall_miniLeaveWord==null)
this._365webcall_miniLeaveWord=new showAdWin_365webcall();this._365webcall_miniLeaveWord._this_name=this._name+"._365webcall_miniLeaveWord";this._365webcall_miniLeaveWord._365call_ad_show_rate=10;var n=0;if((this.miniLeaveWordRequire&0x01)!=0)
n++;if((this.miniLeaveWordRequire&0x04)!=0)
n++;if((this.miniLeaveWordRequire&0x10)!=0)
n++;if((this.miniLeaveWordRequire&0x40)!=0)
n++;if((this.miniLeaveWordRequire&0x100)!=0)
n++;if((this.miniLeaveWordRequire&0x400)!=0)
n++;if((this.miniLeaveWordRequire&0x1000)!=0)
n++;if((this.miniLeaveWordRequire&0x4000)!=0)
n++;if((this.miniLeaveWordRequire&0x10000)!=0)
n++;if((this.miniLeaveWordRequire&0x40000)!=0)
n++;this._365webcall_miniLeaveWord.set_win_width(215);this._365webcall_miniLeaveWord.set_win_height(144+n*27);this._365webcall_miniLeaveWord._365call_ad_height_head=28;this._365webcall_miniLeaveWord._365call_ad_fromSide=0;this._365webcall_miniLeaveWord._365call_ad_fromTop=0;this._365webcall_miniLeaveWord._365call_ad_location=this.miniLeaveWordLocation+3;this._365webcall_miniLeaveWord.drag_status=0;this._365webcall_miniLeaveWord.switch_button=1;this._365webcall_miniLeaveWord.show_type=1;this._365webcall_miniLeaveWord._switchWidth=34;this._365webcall_miniLeaveWord._switchHeight=17;this._365webcall_miniLeaveWord._switchRight=12;this._365webcall_miniLeaveWord._switchTop=0;this._365webcall_miniLeaveWord._float_type=this.float_type;var pr=_365groups_GetBaseData();this._365webcall_miniLeaveWord._frame_url=this._365call_host+"chat/miniLeaveWord.aspx?settings="+this._365call_settings+"&ClientID="+this._365call_ClientID+pr+(this._365call_l_language.length>0?("&LL="+this._365call_l_language):"");this._365webcall_miniLeaveWord._time_span=5000;_this._365webcall_miniLeaveWord._switchButton_Indent_url=_this._365call_host+"chat/images/newChat2/close.gif";_this._365webcall_miniLeaveWord._switchButton_Expand_url=_this._365call_host+"chat/images/newChat2/zoom.gif";this._365webcall_miniLeaveWord._openFrame();},onAdMessageReceive:function(height,width,head_height,fromBottom,location,fromSide,AcctID,StyleID,callRequestID){var _this=this;if(_this._365call_AdMessage!=null){if(_this._365call_AdMessage._365call_ad_show==1)
return;_this._365call_AdMessage._closeAd();}
_this._365call_AdMessage=new showAdWin_365webcall();_this._365call_AdMessage._this_name=_this._name+"._365call_AdMessage";_this._365call_AdMessage._365call_ad_show_rate=5;_this._365call_AdMessage._365call_ad_height=height;_this._365call_AdMessage._365call_ad_width=width;_this._365call_AdMessage._365call_ad_height_head=head_height;_this._365call_AdMessage._365call_ad_top=0;_this._365call_AdMessage._365call_ad_fromSide=fromSide;_this._365call_AdMessage._365call_ad_fromTop=fromBottom;_this._365call_AdMessage._365call_ad_location=4;_this._365call_AdMessage.drag_status=0;_this._365call_AdMessage.switch_button=1;_this._365call_AdMessage.show_type=5;_this._365call_AdMessage._switchWidth=15;_this._365call_AdMessage._switchHeight=15;_this._365call_AdMessage._switchRight=5;_this._365call_AdMessage._switchTop=5;_this._365call_AdMessage._float_type=_this.float_type3;_this._365call_AdMessage._frame_url=_this._365call_host+"365webcall_asd.html";_this._365call_AdMessage._time_span=5000;_this._365call_AdMessage._switchButton_Indent_url=_this._365call_host+"image/style/exact/qq/bot_01.gif";_this._365call_AdMessage._switchButton_Expand_url=_this._365call_host+"image/style/exact/qq/bot_01a.gif";_this._365call_AdMessage._openFrame();}}
if(typeof(OnlineSupport_365webcall_loaded)=='undefined'||!OnlineSupport_365webcall_loaded)
var OnlineSupport_365webcall_loaded=true;