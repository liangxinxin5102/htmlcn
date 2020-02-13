// JavaScript Document

var rollCoun;
var rollPeriod = 2000;
var isStart = true;
var nn = 1;
var tt = false;
function change_img() {
  if (isStart) {
    if (nn > rollCount) {
	  nn = 1;
	}
    setFocus(nn);
  }else{
    tt = setTimeout('change_img()', 1000);
  } 
}
function setFocus(i){
  if (tt) {
	clearTimeout(tt);
  }
  selectLayer1(i);
  nn=parseInt(i)+1;
  tt=setTimeout('change_img()', rollPeriod);
}
function selectLayer1(i){
  for (var j = 1; j <= rollCount; j++) {
	if (j == i)	{
	  document.getElementById("focus" + j).style.display = "block";
	  document.getElementById("change" + j).className="current";
	} else {
	  document.getElementById("focus" + j).style.display = "none";
	  document.getElementById("change" + j).className="";
	}
  }
}