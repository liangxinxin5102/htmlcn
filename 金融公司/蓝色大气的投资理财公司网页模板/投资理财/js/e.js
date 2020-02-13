var _365webcall_tblEncodeString1=new Array
(108,112,88,117,99,85,68,69,121,113,81,51,106,111,70,80,77,74,86,104,67,115,72,71,48,73,65,103,107,102,49,110,114,83,98,82,50,100,54,75,66,105,97,87,120,76,56,55,84,116,79,109,52,78,118,89,57,53,119,101);var _365webcall_tblEncodeString2=new Array
(51,70,117,68,101,97,82,72,113,87,76,88,108,104,99,71,106,115,121,56,100,52,110,84,54,89,75,102,86,111,109,67,85,66,116,53,78,120,119,118,77,69,83,49,65,50,55,80,107,74,112,79,98,105,57,114,73,48,103,81);function _365webcall_ExistsInBytes(b,s){for(var i=0;i<s.length;i++){if(s[i]==parseInt(b,10))
return i;}
return-1;}
function _365webcall_AdjustStringLen(s,len){if(s.length>=len)
return s;var rc=new String;rc=s;while(rc.length<len){rc="0"+rc;}
return rc;}
function _365webcall_EncodeString(s){var rc="";if(s.length==0)
return rc;var i=0;var sb=new String;for(i=0;i<s.length;i++){var v=parseInt(s.charCodeAt(i).toString(16),16);if(v<0x0FF){if(v==90||v==122){sb+=String.fromCharCode(v);sb+="x";continue;}
var nPos=_365webcall_ExistsInBytes(v,_365webcall_tblEncodeString1);if(nPos!=-1){sb+=String.fromCharCode(_365webcall_tblEncodeString2[nPos]);continue;}
sb+="z"+_365webcall_AdjustStringLen(s.charCodeAt(i).toString(16),2);}
else{sb+="Z"+_365webcall_AdjustStringLen(s.charCodeAt(i).toString(16).toUpperCase(),4);}}
return sb;}
function _365webcall_DecodeString(s){var rc=""
if(s.length==0)
return rc;var sb=new String;var pos=0;while(pos<s.length){var v=parseInt(s.charCodeAt(pos).toString(16),16);if(v!=90&&v!=122){var nPos=_365webcall_ExistsInBytes(v,_365webcall_tblEncodeString2);if(nPos==-1)
return"";sb+=String.fromCharCode(_365webcall_tblEncodeString1[nPos]);pos++;}
else{if(s.charCodeAt(pos+1)<=121&&s.charCodeAt(pos+1)>=103)
{sb+=String.fromCharCode(v);pos+=2;continue;}
if(v==122)
{if(pos+3>s.Length){return"";}
var v=parseInt(s.charAt(pos+1),16)*16+parseInt(s.charAt(pos+2),16);sb+=String.fromCharCode(v);pos+=3;}
else{if(pos+5>s.Length){return"";}
var value=parseInt(s.charAt(pos+1),16)*16*16*16+parseInt(s.charAt(pos+2),16)*256+parseInt(s.charAt(pos+3),16)*16+parseInt(s.charAt(pos+4),16);sb+=String.fromCharCode(value);pos+=5;}}}
return sb;}
function _365webcall_IntToStr(value,radix,len){var rc=value.toString(radix);for(i=0;i<len-rc.length;i++){rc="0"+rc;}
return rc;}
function _365webcall_EncodeStrings(){var argv=EncodeStrings.arguments;var argc=EncodeStrings.arguments.length;var maxLen=0;var i=0;for(i=0;i<argc;i++){if(argv[i].length>maxLen)
maxLen=argv[i].length;}
var value="";for(i=0;i<argc;i++){if(maxLen<100){value+=_365webcall_IntToStr(argv[i].length,10,2)+argv[i];}
else if(maxLen<=0x0FF){value+=_365webcall_IntToStr(argv[i].length,16,2)+argv[i];}
else if(maxLen<=0x0FFF){value+=_365webcall_IntToStr(argv[i].length,16,3)+argv[i];}
else if(maxLen<=0x0FFFF){value+=_365webcall_IntToStr(argv[i].length,16,4)+argv[i];}
else
value+=_365webcall_IntToStr(argv[i].length,16,7)+argv[i];}
var date=new Date();if(maxLen<=99)
value="168"+_365webcall_IntToStr(date.getHours(),10,2)+_365webcall_IntToStr(date.getMinutes(),10,2)+value;else if(maxLen>99&&maxLen<=0x0FF)
value="167"+_365webcall_IntToStr(date.getHours(),10,2)+_365webcall_IntToStr(date.getMinutes(),10,2)+value;else if(maxLen>0x0FF&&maxLen<=0x0FFF)
value="166"+_365webcall_IntToStr(date.getHours(),10,2)+_365webcall_IntToStr(date.getMinutes(),10,2)+value;else if(maxLen>0x0FFF&&maxLen<=0x0FFFF)
value="165"+_365webcall_IntToStr(date.getHours(),10,2)+_365webcall_IntToStr(date.getMinutes(),10,2)+value;else
value="164"+_365webcall_IntToStr(date.getHours(),10,2)+_365webcall_IntToStr(date.getMinutes(),10,2)+value;var amount=0;for(i=0;i<value.length;i++){amount+=value.charCodeAt(i);}
amount=amount%100;value+=_365webcall_IntToStr(amount,10,2);return value;}
function _365webcall_DecodeStrings(value){if(value.Length<12)
return null;var s=value.substring(0,3);if((s!="168")&&(s!="167")&&(s!="166")&&(s!="165")&&(s!="164"))
return null;var nTag=0,nLen=2;if(s=="167")
nTag=1;else if(s=="166"){nLen=3;nTag=2;}
else if(s=="165"){nLen=4;nTag=3;}
else if(s=="164"){nLen=7;nTag=3;}
var temp=value.substring(3,7);if(isNaN(parseInt(temp,10)))
return null;var amount=0;var i=0;for(i=0;i<value.length-2;i++){amount+=value.charCodeAt(i);}
amount=amount%100;if(value.substring(value.length-2,value.length)!=_365webcall_IntToStr(amount,10,2)){return null;}
var arr=new Array();var count=0;var mid=value.substring(7,value.length-2);while(true){temp=mid.substring(0,nLen);var strlen=0;if(nTag==0)
strlen=parseInt(temp,10);else
strlen=parseInt(temp,16);if(isNaN(strlen))
return null;if(mid.length<nLen+strlen)
return null;arr[count++]=mid.substring(nLen,strlen+nLen);if(mid.length>nLen+strlen){mid=mid.substring(nLen+strlen,mid.length);}
else
break;}
return arr;}