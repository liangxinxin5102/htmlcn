/**
 * 
 * 获取cookie
 */
function getCookie(name){
    var strCookie=document.cookie;
    var arrCookie=strCookie.split("; ");
    for(var i=0;i<arrCookie.length;i++){
          var arr=arrCookie[i].split("=");
          if(arr[0]==name)return decodeURIComponent(arr[1]).replace(/\+/g, '&nbsp');
    }
    return "";
}

/**
 * 是否包含中文
 * @param str
 * @returns {Boolean}
 */
function isChinese(str) {
    return strlen(str) != str.length;
}
;

/**
 * 字符串长度
 * @param str
 * @returns {Number}
 */
function strlen(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            len++;
        } else {
            len += 2;
        }
    }
    return len;
}
;

/**
 * 替换字符串两边的空格
 * @param str
 * @returns
 */
function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
;

/**
 * 移除字符串左边空格
 * @param str
 * @returns
 */
function ltrim(str) {
    return str.replace(/(^\s*)/g, "");
}
;

/**
 * 移除字符串右边空格
 * @param str
 * @returns
 */
function rtrim(str) {
    return str.replace(/(\s*$)/g, "");
}
;


/**
 * jQuery ajax封装
 * @param url
 * @param post
 * @param callback
 * @returns
 * @author Pipes
 * @modify Pipes 2013-07-29
 */
var ajaxCmy = function(url, post, callback) {
    post = typeof(post) == 'string' ? post : (typeof(post) == 'undefined' ? '' : post.join('&'));
    if (typeof(callback) == 'undefined' || (typeof(callback) != 'object' && typeof(callback) != "function")) {
        callback = function(text) {
            alert(text);
        }
    }
    if (url.indexOf('.html') != -1 && typeof(post) != 'undefined' && post != '') {
        url = url.replace('.html', '');
        url += '/';
        if(typeof(post) == 'string'){
            var paramsArray = post.split('&');
            for (var i = 0; i <= (paramsArray.length - 1); i++) {
                if (i > 0) {
                    url += '-';
                }
                var valArray = paramsArray[i].split('=');
                url += valArray[0] + '-' + valArray[1];
            }
        }
        else{
            for(var i = 0; i <= (post.length - 1); i++){
                if (i > 0) {
                    url += '-';
                }
                var valArray = post[i].split('=');
                url += valArray[0] + '-' + valArray[1];
            }
        }
        url += '.html';
    }
    else{
        if(typeof(post) != 'undefined' && post != '')
            url += url.indexOf('?') == -1 ? '?' + post : '&' + post;
    }
    var ajaxjson = {
        url: url,
        data: '',
        success: function(text) {
            callback(text);
        }
    };
    arguments.length > 3 && typeof(arguments[3]) == 'object' && $.extend(ajaxjson, arguments[3]);
    $.ajax(ajaxjson);
};

/**
 * URL构造器(不支持重写模式)
 * @param index
 * @param act
 * @param params String|Array
 * @returns URI
 * @author Pipes 2013-07-09
 * @modify
 */
var urlCmyR = function(index, act, params) {
    var url = "";
    if (index.length == 0 || act.length == 0) {
        console.log("index and act must defined");
        return false;
    }
    url = index + '/' + act;
    if (typeof(params) != 'undefined') {
        url += '/';
        if(typeof(params) == 'string'){
            var paramsArray = params.split('&');
            for (var i = 0; i <= (paramsArray.length - 1); i++) {
                if (i > 0) {
                    url += '-';
                }
                var valArray = paramsArray[i].split('=');
                url += valArray[0] + '-' + valArray[1];
            }
        }
        else{
            for(var i = 0; i <= (params.length - 1); i++){
                if (i > 0) {
                    url += '-';
                }
                var valArray = params[i].split('=');
                url += valArray[0] + '-' + valArray[1];
            }
        }
        url += '.html';
    }
    else {
        url += '.html';
    }
    //return 'http://' + location.host + '/' + url;
	 return 'http://' + DomainConfig.main_site_domain + '/' + url;
};

var urlCmy = function(index, act, params) {
     var url = '';
     url = index + '.php';
     
     var args = new Array();
     if( typeof(act) != 'undefined' && act.length > 0 ) {
     args.push( 'act=' + act );
     }
     if( typeof(params) != 'undefined' ) {
     
     if( typeof(params) == 'string' ) {
     if( params.length > 0 ) {
     args.push(params);
     }
     } else {
     if( params.length >0 ) {
     args.push( params.join('&') );
     }
     }
     }
     
     if( args.length > 0 ) {
     url += '?' + args.join('&') + '&_t=' + Math.random();
     } else {
     url += '?' + Math.random()
     }
     return DomainConfig.main_site_domain + '/' + url;
};

(function($) {
    /**
     * ajax上传文件(依赖fileuploader.js)
     *
     * 调用方式：$('#test').uploader(options);
     * 配置说明：
     *
     * btnid: 触发按钮ID
     * action_url: 服务器处理地址
     * input_id: 返回值存放输入框ID
     * input_name: 服务端接受参数KEY
     *
     * showMessage:
     * onSubmit:
     * onComplete：
     *
     * 默认服务器必须返回JSON数据 result.status(状态) result.msg(提示信息)
     * 如果自定义回调函数则自行处理
     *
     * @author andery
     */
    $.fn.uploader = function(options) {
        var settings = {
            btnid: $(this).attr('id'),
            action_url: '',
            input_id: 'J_img',
            input_name: 'img',
            showMessage: function(message) {
                //console.log(settings.btnid);
                alert(message);
            },
            onSubmit: function(id, fileName) {
            },
            onComplete: function(id, fileName, result) {
                if (result.status == '1') {
                    $('#' + settings.input_id).val(result.data);
                } else {
                    alert(result.msg);
                }
            }
        };
        if (options) {
            $.extend(settings, options);
        }
        new qq.FileUploaderBasic({
            allowedExtensions: ['jpg', 'gif', 'jpeg', 'png', 'bmp', 'pdg', 'swf'],
            button: document.getElementById(settings.btnid),
            multiple: false,
            action: settings.action_url,
            inputName: settings.input_name,
            forceMultipart: true, //用$_FILES
            messages: {
                typeError: '不允许上传的文件类型！',
                sizeError: '文件大小不能超过{sizeLimit}！',
                minSizeError: '文件大小不能小于{minSizeLimit}！',
                emptyError: '文件为空，请重新选择！',
                noFilesError: '没有选择要上传的文件！',
                onLeave: '正在上传文件，离开此页将取消上传！'
            },
            showMessage: settings.showMessage,
            onSubmit: settings.onSubmit,
            onComplete: settings.onComplete
        });
    }

})(jQuery);
