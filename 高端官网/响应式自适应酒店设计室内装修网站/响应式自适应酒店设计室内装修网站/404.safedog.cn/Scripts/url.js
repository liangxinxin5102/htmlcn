var eCode=document.getElementById("eCode").innerHTML;
var Referrer=document.referrer;
var pattl=new RegExp("(gov|edu)","g");
if(!pattl.test(Referrer)){
    //	window.top.location="http://404.safedog.net.cn?eMsg="+eCode;
}
