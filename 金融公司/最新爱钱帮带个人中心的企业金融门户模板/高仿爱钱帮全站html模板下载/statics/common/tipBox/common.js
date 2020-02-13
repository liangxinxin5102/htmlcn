var Mix = {
	confirm : function(conTit, conMsg, conYes, conNo, btns, btn, type) {
		this.closeLoad();
		conTit = (conTit) ? conTit : "确认信息";
		type = type || 4;
		btns = btns || 2;
		btn = btn || [ '确定', '取消' ];
		layer.confirm(conMsg, conYes, conTit, conNo, btns, btn, type)
	},
	alert : function(alertMsg, alertTit, alertYes, alertType) {
		this.closeLoad();
		alertTit = (alertTit) ? alertTit : "提示信息";
		alertType = (alertType) ? alertType : 5;
		layer.alert(alertMsg, alertType, alertTit, alertYes)
	},
	msg : function(msgText, msgType, msgTime, callback, showShade) {
		this.closeLoad();
		switch (msgType) {
		case 'success':
			msgType = 1;
			break;
		case 'fail':
			msgType = 5;
			break;
		case 'smaile':
			msgType = 9;
			break;
		case 'cry':
			msgType = 8;
			break;
		case 'lock':
			msgType = 7;
			break;
		case 'warn':
			msgType = 0;
			break
		}
		msgTime = (msgTime) ? msgTime : 3;
		msgType = (msgType) ? msgType : 0;
		layer.msg(msgText, msgTime, msgType, callback, showShade)
	},
	load : function(loadmsg, loadgif, loadShade) {
		loadTime = 1000;
		loadgif = (loadgif) ? loadgif : 2;
		layer.load(loadTime, loadgif, loadShade, loadmsg)
	},
	tip : function(selector, html, guide, time, maxWidth, style) {
		this.closeLoad();
		guide = (!guide) ? 0 : 1;
		layer.tips(html, selector, time, maxWidth, guide, style)
	},
	closeLoad : function() {
		(jQuery('.xubox_loading').length > 0) && layer.loadClose()
	},
	get : function(url, title, date) {
		title = (title) ? title : '';
		date = (date) ? date : {};
		jQuery.colorbox( {
			"href" : url,
			"title" : title,
			"data" : date,
			onComplete : function() {
				if (typeof ajaxBoxComplete == "function") {
					ajaxBoxComplete(this)
				}
			},
			onCleanup : function() {
				if (typeof ajaxBoxBeforeClose == "function") {
					ajaxBoxBeforeClose(this)
				}
			},
			onClosed : function() {
				if (typeof ajaxBoxClosed == "function") {
					ajaxBoxClosed(this)
				}
			}
		})
	},
	close : function(index) {
		if (index === true)
			this.closeLoad();
		else if (index)
			layer.close(index);
		else
			jQuery.colorbox.close()
	}
};