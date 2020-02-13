var A1PORTAL_COL_DELIMITER = String.fromCharCode(16);
var A1PORTAL_ROW_DELIMITER = String.fromCharCode(15);
var __a1portal_m_bPageLoaded = false;

window.onload = __a1portal_Page_OnLoad;

function __a1portal_ClientAPIEnabled() {
    return typeof(a1portal) != 'undefined';
}

function __a1portal_Page_OnLoad() {
    if (__a1portal_ClientAPIEnabled()) {
        var sLoadHandlers = a1portal.getVar('__a1portal_pageload');
        if (sLoadHandlers != null) eval(sLoadHandlers);

        a1portal.dom.attachEvent(window, 'onscroll', __a1portal_bodyscroll);
    }
    __a1portal_m_bPageLoaded = true;
}

function __a1portal_KeyDown(iKeyCode, sFunc, e) {
    if (e == null) e = window.event;

    if (e.keyCode == iKeyCode) {
        eval(unescape(sFunc));
        return false;
    }
}

function __a1portal_bodyscroll() {
    var oF = document.forms['Form'];
    if (__a1portal_ClientAPIEnabled() && __a1portal_m_bPageLoaded) oF.ScrollTop.value = document.documentElement.scrollTop ? document.documentElement.scrollTop: a1portal.dom.getByTagName("body")[0].scrollTop;
}

function __a1portal_setScrollTop(iTop) {
    if (__a1portal_ClientAPIEnabled()) {
        if (iTop == null) iTop = document.forms['Form'].ScrollTop.value;

        var sID = a1portal.getVar('ScrollToControl');
        if (sID != null && sID.length > 0) {
            var oCtl = a1portal.dom.getById(sID);
            if (oCtl != null) {
                iTop = a1portal.dom.positioning.elementTop(oCtl);
                a1portal.setVar('ScrollToControl', '');
            }
        }
        window.scrollTo(0, iTop);
    }
}

function __a1portal_SetInitialFocus(sID) {
    var oCtl = a1portal.dom.getById(sID);
    if (oCtl != null && __a1portal_CanReceiveFocus(oCtl)) oCtl.focus();
}

function __a1portal_CanReceiveFocus(e) {
    if (e.style.display != 'none' && e.tabIndex > -1 && e.disabled == false && e.style.visible != 'hidden') {
        var eParent = e.parentElement;
        while (eParent != null && eParent.tagName != 'BODY') {
            if (eParent.style.display == 'none' || eParent.disabled || eParent.style.visible == 'hidden') return false;
            eParent = eParent.parentElement;
        }
        return true;
    } else return false;
}

function __a1portal_ContainerMaxMin_OnClick(oLnk, sContentID) {
    var oContent = a1portal.dom.getById(sContentID);
    if (oContent != null) {
        var oBtn = oLnk.childNodes[0];
        var sContainerID = oLnk.getAttribute('containerid');
        var sCookieID = oLnk.getAttribute('cookieid');
        var sCurrentFile = oBtn.src.toLowerCase().substr(oBtn.src.lastIndexOf('/'));
        var sMaxFile;
        var sMaxIcon;
        var sMinIcon;

        if (a1portal.getVar('min_icon_' + sContainerID)) sMinIcon = a1portal.getVar('min_icon_' + sContainerID);
        else sMinIcon = a1portal.getVar('min_icon');

        if (a1portal.getVar('max_icon_' + sContainerID)) sMaxIcon = a1portal.getVar('max_icon_' + sContainerID);
        else sMaxIcon = a1portal.getVar('max_icon');

        sMaxFile = sMaxIcon.toLowerCase().substr(sMaxIcon.lastIndexOf('/'));

        var iNum = 5;
        if (oLnk.getAttribute('animf') != null) iNum = new Number(oLnk.getAttribute('animf'));

        if (sCurrentFile == sMaxFile) {
            oBtn.src = sMinIcon;
            a1portal.dom.expandElement(oContent, iNum);
            oBtn.title = a1portal.getVar('min_text');
            if (sCookieID != null) {
                if (a1portal.getVar('__a1portal_' + sContainerID + ':defminimized') == 'true') a1portal.dom.setCookie(sCookieID, 'true', 365);
                else a1portal.dom.deleteCookie(sCookieID);
            } else a1portal.setVar('__a1portal_' + sContainerID + '_Visible', 'true');
        } else {
            oBtn.src = sMaxIcon;
            a1portal.dom.collapseElement(oContent, iNum);
            oBtn.title = a1portal.getVar('max_text');
            if (sCookieID != null) {
                if (a1portal.getVar('__a1portal_' + sContainerID + ':defminimized') == 'true') a1portal.dom.deleteCookie(sCookieID);
                else a1portal.dom.setCookie(sCookieID, 'false', 365);
            } else a1portal.setVar('__a1portal_' + sContainerID + '_Visible', 'false');
        }
        return true;
    }
    return false;
}

function __a1portal_Help_OnClick(sHelpID) {
    var oHelp = a1portal.dom.getById(sHelpID);
    if (oHelp != null) {
        if (oHelp.style.display == 'none') oHelp.style.display = '';
        else oHelp.style.display = 'none';

        return true;
    }
    return false;
}

function __a1portal_SectionMaxMin(oBtn, sContentID) {
    var oContent = a1portal.dom.getById(sContentID);
    if (oContent != null) {
        var sMaxIcon = oBtn.getAttribute('max_icon');
        var sMinIcon = oBtn.getAttribute('min_icon');
        var bCallback = oBtn.getAttribute('userctr') != null;
        var sVal;
        if (oContent.style.display == 'none') {
            oBtn.src = sMinIcon;
            oContent.style.display = '';
            if (bCallback) sVal = 'True';
            else a1portal.setVar(oBtn.id + ':exp', 1);
        } else {
            oBtn.src = sMaxIcon;
            oContent.style.display = 'none';
            if (bCallback) sVal = 'False';
            else a1portal.setVar(oBtn.id + ':exp', 0);
        }
        if (bCallback) a1portalcore.setUserProp(oBtn.getAttribute('userctr'), oBtn.getAttribute('userkey'), sVal, null);
        return true;
    }
    return false;
}

function __a1portal_enableDragDrop() {
    var aryConts = a1portal.getVar('__a1portal_dragDrop').split(";");
    var aryTitles;
    a1portal.dom.positioning.disableSelectText();
    var aryContsLength = aryConts.length;
    for (var i = 0; i < aryContsLength; i++) {
        aryTitles = aryConts[i].split(" ");
        if (aryTitles[0].length > 0) {
            var oCtr = a1portal.dom.getById(aryTitles[0]);
            var oTitle = a1portal.dom.getById(aryTitles[1]);
            //laputa move block
            if(oTitle.modulePaneId == 'undefined' || oTitle.modulePaneId==null)
            {
                oTitle.modulePaneId = aryTitles[3];
            }
            if(oTitle.moveBlockId == 'undefined' || oTitle.moveBlockId==null)
            {
                oTitle.moveBlockId = aryTitles[4];
            }
            if(oTitle.pagePaneId == 'undefined' || oTitle.pagePaneId==null)
            {
                oTitle.pagePaneId = aryTitles[5];
            }
            if (oCtr != null && oTitle != null) {
                //oCtr.setAttribute('moduleid', aryTitles[2]);
                a1portal.dom.positioning.enableDragAndDrop(oCtr, oTitle);
            }
        }
    }
}

var __a1portal_oPrevSelPane = null;
var __a1portal_oPrevSelModule = null;
var __a1portal_dragPlaceholderId = 'a1portal_drag_placeholder';
var __a1portal_oPrevIIndex = null;
var __a1portal_dragPlaceholder = null;

function __a1portal_dragOver() {
    var oCont = a1portal.dom.positioning.dragCont;
    var oPane = __a1portal_getMostSelectedPane();
    if (oPane != null) {
        var iIndex = __a1portal_getPaneControlIndex(oCont, oPane);
        //var iIndex = __a1portal_getPaneControlIndex2(oCont, oPane);
        //__a1portal_getPaneControlIndex2(oCont, oPane);
		
        if (__a1portal_oPrevSelPane != null) {
            if (__a1portal_oPrevSelPane.id != oPane.id) {
                __a1portal_oPrevSelPane.pane.style.border = __a1portal_oPrevSelPane.origBorder;
            } else if (__a1portal_oPrevIIndex == iIndex && __a1portal_oPrevSelModule != null) {
                return;
            }
        }
        a1portal.dom.positioning.removePlaceholder(__a1portal_dragPlaceholder, __a1portal_dragPlaceholderId);
	if (__a1portal_oPrevSelPane != null) {
		__a1portal_RecalculatePaneControlDims(__a1portal_oPrevSelPane);
	}
	__a1portal_RecalculatePaneControlDims(oPane);

        oPane.pane.style.outline = '1px dotted ' + A1PORTAL_HIGHLIGHT_COLOR;
        var oPrevCtl;
        var oNextCtl;
        var selNode;
        var dragPlaceholder;
        var oPaneControlsLength = oPane.controls.length;
        for (var i = 0; i < oPaneControlsLength; i++) {
            var oPaneControlsId = oPane.controls[i].id;
            var oPaneControls = oPane.controls[i];
            var oContId = oCont.id;
            if (iIndex > i && oPaneControlsId != oContId) oPrevCtl = oPaneControls;
            if (iIndex <= i && oPaneControlsId != oContId) {
                oNextCtl = oPaneControls;
                break;
            }
        }

        if (__a1portal_dragPlaceholder == null) {
            __a1portal_dragPlaceholder = document.createElement("div");
            __a1portal_dragPlaceholder.setAttribute("id", __a1portal_dragPlaceholderId);
            __a1portal_dragPlaceholder.setAttribute("class", "moduleMovePlaceholder");
            __a1portal_dragPlaceholder.style.border = '1px dotted red';
            __a1portal_dragPlaceholder.style.margin = '4px 0px 4px 0px';
        }

        var paneElementWidth = a1portal.dom.positioning.elementWidth(oPane.pane);
        if (paneElementWidth != null) {
            if (paneElementWidth <= oCont.elementWidth) {
				if (oNextCtl != null) {
					paneElementWidth = document.id(oNextCtl.control).getSize().x;
				} else if (oPrevCtl != null) {
					paneElementWidth = document.id(oPrevCtl.control).getSize().x;
				}
				__a1portal_dragPlaceholder.style.width = (paneElementWidth - 2) + 'px';
			} else {
				__a1portal_dragPlaceholder.style.width = "";
			}
        }
        //__a1portal_dragPlaceholder.style.height = parseInt(oCont.elementWidth * oCont.elementHeight / paneElementWidth) + 'px';
        __a1portal_dragPlaceholder.style.height = '50px';
        if (oNextCtl != null) {
            __a1portal_oPrevSelModule = oNextCtl;
            selNode = a1portal.dom.getNonTextNode(oNextCtl.control);
            selNode.parentNode.insertBefore(__a1portal_dragPlaceholder, selNode);
        } else if (oPrevCtl != null) {
            __a1portal_oPrevSelModule = oPrevCtl;
            selNode = a1portal.dom.getNonTextNode(oPrevCtl.control);
            a1portal.dom.insertAfter(__a1portal_dragPlaceholder, selNode);
        } else {
            selNode = a1portal.dom.getById(oPane.id);
            a1portal.dom.appendChild(selNode, __a1portal_dragPlaceholder);
        }
        //__a1portal_oPrevSelPane = oPane;        
        __a1portal_oPrevIIndex = iIndex;
	__a1portal_RecalculatePaneDims();
    }
}

function __a1portal_dragComplete() {
    var oCont = a1portal.dom.positioning.dragCont;
    var sModuleID = oCont.getAttribute('moduleid');
    var sModuleIdentifier = oCont.getAttribute('moduleidentifier');
    var oPane = __a1portal_getMostSelectedPane();
    var iIndex;
    if (oPane == null) {
        var oPanes = __a1portal_Panes();
        var oPanesLength = oPanes.length
        for (var i = 0; i < oPanesLength; i++) {
            if (oPanes[i].id == oCont.parentNode.id) oPane = oPanes[i];
        }
    }
    if (oPane != null) {
        iIndex = __a1portal_getPaneControlIndex(oCont, oPane);
        //iIndex = __a1portal_getPaneControlIndex2(oCont, oPane);
        __a1portal_MoveToPane(oPane, oCont, iIndex);
        a1portal.dom.positioning.destroyDragEvent();
        showPageLoader('');
        a1portal.callPostBack('MoveToPane', 'moduleid=' + sModuleID,'moduleidentifier=' + sModuleIdentifier, 'pane=' + oPane.paneName, 'order=' + iIndex * 2);
    }
}

function __a1portal_MoveToPane(oPane, oCont, iIndex) {
    if (oPane != null) {
        var aryCtls = new Array();
        var oPaneControlsLength = oPane.controls.length;
        for (var i = iIndex; i < oPaneControlsLength; i++) {
            if (oPane.controls[i].control.id != oCont.id) aryCtls[aryCtls.length] = oPane.controls[i].control;

            a1portal.dom.removeChild(oPane.controls[i].control);
        }
        a1portal.dom.appendChild(oPane.pane, oCont);
        oCont.style.top = 0;
        oCont.style.left = 0;
        oCont.style.position = 'relative';
        var aryCtlsLength = aryCtls.length;
        for (var i = 0; i < aryCtlsLength; i++) {
            a1portal.dom.appendChild(oPane.pane, aryCtls[i]);
        }
        __a1portal_RefreshPanes();
    } else {
        oCont.style.top = 0;
        oCont.style.left = 0;
        oCont.style.position = 'relative';
    }
}

function __a1portal_RefreshPanes() {
    var aryPanes = a1portal.getVar('__a1portal_Panes').split(';');
    var aryPaneNames = a1portal.getVar('__a1portal_PaneNames').split(';');
    __a1portal_m_aryPanes = new Array();
    var aryPanesLength = aryPanes.length;
    for (var i = 0; i < aryPanesLength; i++) {
        if (aryPanes[i].length > 0) __a1portal_m_aryPanes[__a1portal_m_aryPanes.length] = new __a1portal_Pane(a1portal.dom.getById(aryPanes[i]), aryPaneNames[i]);
    }
}

var __a1portal_m_aryPanes;
var __a1portal_m_aryModules;
function __a1portal_Panes() {
    if (__a1portal_m_aryPanes == null) {
        __a1portal_m_aryPanes = new Array();
        __a1portal_RefreshPanes();
    }
    return __a1portal_m_aryPanes;
}

function __a1portal_RecalculatePaneDims(){
	var oPanes = __a1portal_Panes();
	var a1portalPanesLength = oPanes.length
	for (var i = 0; i < a1portalPanesLength; i++) {
		var oPane = oPanes[i];
		oPane.dims = a1portal.dom.positioning.dims2(oPane.pane);
	}
}

function __a1portal_RecalculatePaneControlDims(oPane){
	if(oPane != null){
		var oPaneControls = oPane.controls;
		var oPaneControlsLength = oPaneControls.length;
		var oCont = null;
		for (var i = 0; i < oPaneControlsLength; i++) {
			oCont = oPaneControls[i];
			oCont.dims = a1portal.dom.positioning.dims2(oCont.control);			
		}
	}
}

function __a1portal_Modules(sModuleID) {
    if (__a1portal_m_aryModules == null) __a1portal_RefreshPanes();

    return __a1portal_m_aryModules[sModuleID];
}

function __a1portal_getMostSelectedPane() {
    //laputa modify:sectionPane support
    var oTopPane = new Array();
    var ev = a1portal.dom.event.object;
    var de = document.documentElement;
    var b = document.body;
    var cursor_x = ev.pageX || (ev.clientX + (de.scrollLeft || b.scrollLeft));
    var cursor_y = ev.pageY || (ev.clientY + (de.scrollTop || b.scrollTop));
	
	if (__a1portal_oPrevSelPane != null) {
		var oPDims = __a1portal_oPrevSelPane.dims;
		if ((cursor_x > oPDims.l) && (cursor_y > oPDims.t) && (cursor_x < (oPDims.l + oPDims.w)) && (cursor_y < (oPDims.t + oPDims.h))) {
			oTopPane[0] = __a1portal_oPrevSelPane;
		}
	}
	
	if(oTopPane.length == 0){
		var oPanes = __a1portal_Panes();
		var a1portalPanesLength = oPanes.length
		for (var i = 0; i < a1portalPanesLength; i++) {
			var oPane = oPanes[i];
			var oPDims = oPane.dims;
			if ((cursor_x > oPDims.l) && (cursor_y > oPDims.t) && (cursor_x < (oPDims.l + oPDims.w)) && (cursor_y < (oPDims.t + oPDims.h))) {
				oTopPane[oTopPane.length+1] = oPane;
			}
		}
	}
    return oTopPane[oTopPane.length-1];
}

function __a1portal_getPaneControlIndex(oContent, oPane) {
    if (oPane == null) return;
	var y = oContent.getOffsets().y
	    //alert(oContent.id+'______'+y);
    var oCont;
    if (oPane.controls.length == 0) return 0;
    var oPaneControlsLength = oPane.controls.length;
    for (var i = 0; i < oPaneControlsLength; i++) {
        oCont = oPane.controls[i];
		var oIDims = oCont.dims;
		//alert(y +'<'+oIDims.t)
		//laputa modify best move to top
		if (oCont.control != oContent && y < oIDims.t+50){ return oCont.index;}
    }
    if (oCont != null) return oCont.index + 1;
    else return 0;
}

function __a1portal_getPaneControlIndex2(oContent, oPane) {
    if (oPane == null) return;
	var y = oContent.getOffsets().y
    var oCont;
    var oPaneControlsLength = oPane.controls.length;
    if (oPaneControlsLength == 0) return 0;    
    var i = 0;
    for (i; i < oPaneControlsLength; i++) {
        oCont = oPane.controls[i];
		if (oCont.control == oContent) break;
    }
    
    var oPreCont = null;
    var oNextCont = null;
    if(i == 0){
        if(oPaneControlsLength > 1){
            oNextCont = oPane.controls[1];
        }else{
            //return oPane.controls[i].index;
            return 0;
        }
    }else if(i == oPaneControlsLength -1){
        oPreCont = oPane.controls[i-1];
    }else{
        oPreCont = oPane.controls[i-1];
        oNextCont = oPane.controls[i+1];
    }
    
    if(oPreCont != null && y < oPreCont.dims.t) return oPreCont.index;
    if(oNextCont != null && y > oNextCont.dims.t) return oNextCont.index;
    
}

function __a1portal_Pane(ctl, sPaneName) {
    this.pane = ctl;
    this.id = ctl.id;
    this.controls = new Array();
    this.origBorder = ctl.style.border;
    this.paneName = sPaneName;
    var iIndex = 0;
    var strModuleOrder = '';
    var ctlChildNodesLength = ctl.childNodes.length;
    for (var i = 0; i < ctlChildNodesLength; i++) {
        var oNode = ctl.childNodes[i];
        if (a1portal.dom.isNonTextNode(oNode)) {
            if (__a1portal_m_aryModules == null) __a1portal_m_aryModules = new Array();

            var sModuleID = oNode.getAttribute('moduleid');
            if (sModuleID != null && sModuleID.length > 0) {
                strModuleOrder += sModuleID + '~';
                this.controls[this.controls.length] = new __a1portal_PaneControl(oNode, iIndex);
                __a1portal_m_aryModules[sModuleID] = oNode.id;
                iIndex += 1;
            }
        }
    }
    this.moduleOrder = strModuleOrder;
	this.dims = a1portal.dom.positioning.dims2(this.pane);
}

function __a1portal_PaneControl(ctl, iIndex) {
    this.control = ctl;
    this.id = ctl.id;
    this.index = iIndex;
    this.origBorder = ctl.style.border;
	this.dims = a1portal.dom.positioning.dims2(this.control);
}

function __a1portalcore() {
    this.GetUserVal = 0;
    this.SetUserVal = 1;
}

__a1portalcore.prototype = {
    getUserProp: function(sNameCtr, sKey, pFunc) {
        this._doUserCallBack(a1portalcore.GetUserVal, sNameCtr, sKey, null, new a1portalcore.UserPropArgs(sNameCtr, sKey, pFunc));
    },

    setUserProp: function(sNameCtr, sKey, sVal, pFunc) {
        this._doUserCallBack(a1portalcore.SetUserVal, sNameCtr, sKey, sVal, new a1portalcore.UserPropArgs(sNameCtr, sKey, pFunc));
    },

    _doUserCallBack: function(iType, sNameCtr, sKey, sVal, pFunc) {
        if (a1portal && a1portal.xmlhttp) {
            var sPack = iType + COL_DELIMITER + sNameCtr + COL_DELIMITER + sKey + COL_DELIMITER + sVal;
            a1portal.xmlhttp.doCallBack('__Page', sPack, a1portalcore._callBackSuccess, pFunc, a1portalcore._callBackFail, null, true, null, 0);
        } else alert('Client Personalization not enabled');
    },

    _callBackSuccess: function(result, ctx, req) {
        if (ctx.pFunc) ctx.pFunc(ctx.namingCtr, ctx.key, result);
    },

    _callBackFail: function(result, ctx) {
        window.status = result;
    }
}

__a1portalcore.prototype.UserPropArgs = function(sNameCtr, sKey, pFunc) {
    this.namingCtr = sNameCtr;
    this.key = sKey;
    this.pFunc = pFunc;
}

var a1portalcore = new __a1portalcore();

function __a1portal_GetRelatedTarget(e)
{
	if (!e) {
		return null;
	}
	return e.relatedTarget || (e.type == "mouseout" ? e.toElement: e.fromElement);
}

function __a1portal_IsChildOf(container, element) {
    if (element == container) {
        return false;
    }
    while (element && (element != document.body)) {
        if (element == container) {
            return true;
        }
        try {
            element = element.parentNode;
        } catch(e) {
            return false;
        }
    }
    return false;
}

function __a1portal_isElementOver(element, evt){
	var oRelatedTarget = __a1portal_GetRelatedTarget(evt);
	if (__a1portal_IsChildOf(element, oRelatedTarget) || element == oRelatedTarget) {
		return true;
	}
	return false;
}

function __a1portal_isElementOut(element, evt){
	var oRelatedTarget = __a1portal_GetRelatedTarget(evt);
	if (oRelatedTarget && (__a1portal_IsChildOf(element, oRelatedTarget) || element == oRelatedTarget)) {
		return true;
	}
	return false;
}

function toggleDiv(element){
      if(document.getElementById(element).style.display == 'none')
      {
        document.getElementById(element).style.display = 'block';
      }
      else if(document.getElementById(element).style.display == 'block')
      {
        document.getElementById(element).style.display = 'none';
      }
}
