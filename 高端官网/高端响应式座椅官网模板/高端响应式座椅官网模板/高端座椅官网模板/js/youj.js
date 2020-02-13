function iEsc(){ return false; }
function iRec(){ return true; }
function DisableKeys() {
if(event.ctrlKey || event.shiftKey || event.altKey)  {
window.event.returnValue=false;
iEsc();}
}
document.ondragstart=iEsc;
document.onkeydown=DisableKeys;
document.oncontextmenu=iEsc;
if (typeof document.onselectstart !="undefined")
document.onselectstart=iEsc;
else{//qsyz.net
document.onmousedown=iEsc;
document.onmouseup=iRec;
}
function DisableRightClick(www_qsyz_net){
if (window.Event){
if (www_qsyz_net.which == 2 || www_qsyz_net.which == 3)
iEsc();}
else
if (event.button == 2 || event.button == 3){
event.cancelBubble = true
event.returnValue = false;
iEsc();}
}