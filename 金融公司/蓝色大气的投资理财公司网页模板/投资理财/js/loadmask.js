/**
 * 描述：jQuery插件，自动在容器中创建背景遮罩及进度条
 * 参数：boolean类型	显示或销毁背景遮罩及进度条		默认“true”——显示
 * 		string类型	进度条中显示的文本，支持HTML		默认“Loading...”
 * 	    object: style = { backStyle:css,frontTyle:css}  前后层样式
 * 用法：$(document.body).loadmask("导入中...")		在body中显示，进度条中显示“导入中...”
 * 		$(document.body).loadmask(false);		    隐藏body中的背景遮罩和进度条
 * 	    $(document.body).loadmask({backStyle:{opacity:1}}); 不透明样式
 */
$.fn.loadmask = function(){
    var _t = "请耐心等待...";
    var _b = true;
    var _o = null;
    //从隐藏参数中读取参数并按类型进行匹配
    for(var i=0;i<arguments.length&&i<3;i++){
        var obj = arguments[i];
        if(typeof(obj) == "string"){
            _t = obj;
        }else if(typeof(obj) == "boolean"){
            _b = obj;
        }else if(typeof(obj) == "object"){
            _o = obj;
        }
    }
    _o = $.extend({"bgcolor":"#fff","opacity":1,"txtbgcolor":"#fff","txtcolor":"#666","txtbdcolor":"#ddd"},_o);
    //
    var _getStyle = function(){
        var doc = this;
        if(this.tagName=='BODY') doc = document[document.compatMode=="CSS1Compat" ? "documentElement" : "body"];
        var wi = Math.max(doc.clientHeight,doc.scrollWidth);
        var hi = Math.max(doc.clientHeight,doc.scrollHeight);
        var ti = $(this).offset().top;
        var li = $(this).offset().left;
        return {
            backStyle: {
                "position": "absolute",
                "z-index": 99999,
                "top": ti,
                "left": li,
                "width": wi,
                "height": hi,
                "background-color": _o.bgcolor,
                "opacity": _o.opacity
            },
            frontStyle:{
                "font-size": "9pt",
                "position": "absolute",
                "z-index": 100000,
                "top": 50,
                "left": li+wi/2-35,
                "width": "auto",
                "min-height": "20px",
                "vertical-align": "middle",
                "line-height": "20px",
                "text-align": "center",
                "color": _o.txtcolor,
                "background":"url("+basePath+"/images/loading.gif) no-repeat left center",
                "background-color": _o.txtbgcolor,
                "padding": "1px 1px 1px 18px",
                "border": "3px solid",
                "border-color": _o.txtbdcolor
            }
        };
    }
    var _destroy = function(){
        //销毁背景遮罩及进度条
        var random = $(this).attr('jQuery-LoadMask-ID');
        var backId = 'jQuery-LoadMask-B'+random;
        var frontId = 'jQuery-LoadMask-F'+random;
        $(this).find('#'+frontId+',#'+backId).animate({opacity:'hide'},function(){
            $(this).remove();
        });
        $(this).removeAttr('jQuery-LoadMask-ID');
    }
    $(this).each(function(){
        _destroy.call(this);
        if(_b){
            //显示背景遮罩及进度条
            var random = Math.floor(Math.random()*10000+1);
            var backId = 'jQuery-LoadMask-B'+random;
            var frontId = 'jQuery-LoadMask-F'+random;
            var style = _getStyle.call(this);
            $(this).attr('jQuery-LoadMask-ID',random);
            $('<div id="'+backId+'">&nbsp;</div>').css(style.backStyle).appendTo($(this));
            if(_t!="-"){
                $('<div id="'+frontId+'">'+_t+'</div>').css(style.frontStyle).appendTo($(this));
            }
        }
    });
}