//判断客户端是手机还是PC    iPad划分到PC中
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
//判断是不是移动端
function IsMobile() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod", "iPad"];
    var flag = false;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = true;
            break;
        }
    }
    return flag;
}

/*start 获取t值*/
function getpara()
{
	var url=document.URL;
	var para="";
	var t=""
	if(url.lastIndexOf("?")>0){
		para=url.substring(url.lastIndexOf("?")+1,url.length);
		var arr=para.split("&");
		para="";
		for(var i=0;i<arr.length;i++){
			if(arr[i].split("=")[0] == "t"){
				t = arr[i].split("=")[1];
			}
		}
	}
	/**by xy 20150722*/
	if(t.indexOf("#")>-1){
		t = t.substring(0,t.indexOf("#"));
	}
	
	return t;
}
/*end 获取t值*/

document.write('<script type="text/javascript" src="/js/topad.js"></script>');
