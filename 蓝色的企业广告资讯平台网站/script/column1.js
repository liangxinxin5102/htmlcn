
function setTab(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
}
}


function isShow2(tab2_id,div2_id,t_Style,ss)    //
{
   for(var i = 0;i < 10;i++)
   {
    document.getElementById("divs2_"+i).style.display="none";
	document.getElementById("tabs2_"+i).style.backgroundImage='url(images/jian.jpg)';
	 document.getElementById("tabs2_"+i).className="li";
   }
   document.getElementById(div2_id).style.display=t_Style;
   document.getElementById(tab2_id).style.backgroundImage='url(images/jian.jpg)';
   document.getElementById(tab2_id).className="hover";
   document.getElementById('22').innerHTML=ss;
}

