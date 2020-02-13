
function setTab(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
}
}


function isShow(tab_id,div_id,t_Style,ss)    //
{
   for(var i = 0;i < 2;i++)
   {
    document.getElementById("divs_"+i).style.display="none";
	document.getElementById("tabs_"+i).style.backgroundImage='none';
	document.getElementById("tabs_"+i).className="li";
   }
   document.getElementById(div_id).style.display=t_Style;
   document.getElementById(tab_id).style.backgroundImage='url(images/th.jpg)';
   document.getElementById(tab_id).className="hover";
   document.getElementById('11').innerHTML=ss;
}

function isShow2(tab2_id,div2_id,t_Style,ss)    //
{
   for(var i = 0;i < 2;i++)
   {
    document.getElementById("divs2_"+i).style.display="none";
	document.getElementById("tabs2_"+i).style.backgroundImage='none';
	 document.getElementById("tabs2_"+i).className="li";
   }
   document.getElementById(div2_id).style.display=t_Style;
   document.getElementById(tab2_id).style.backgroundImage='url(images/th.jpg)';
   document.getElementById(tab2_id).className="hover";
   document.getElementById('22').innerHTML=ss;
}

function isShow3(tab3_id,div3_id,t_Style,ss)    //
{
   for(var i = 0;i < 2;i++)
   {
    document.getElementById("divs3_"+i).style.display="none";
	document.getElementById("tabs3_"+i).style.backgroundImage='none';
	document.getElementById("tabs3_"+i).className="li";
   }
   document.getElementById(div3_id).style.display=t_Style;
   document.getElementById(tab3_id).style.backgroundImage='url(images/th.jpg)';
   document.getElementById(tab3_id).className="hover";
   document.getElementById('33').innerHTML=ss;
}

function isShow4(tab4_id,div4_id,t_Style,ss)    //
{
   for(var i = 0;i < 2;i++)
   {
    document.getElementById("divs4_"+i).style.display="none";
	document.getElementById("tabs4_"+i).style.backgroundImage='none';
	document.getElementById("tabs4_"+i).className="li";
   }
   document.getElementById(div4_id).style.display=t_Style;
   document.getElementById(tab4_id).style.backgroundImage='url(images/zxbs.jpg)';
   document.getElementById(tab4_id).className="hover";
   document.getElementById('44').innerHTML=ss;
}

 // JavaScript Document
$(function(){
	function leftscroll(){
		var _scroll = $(".style_scroll_listt ul");
		_scroll.animate({marginLeft:"-186px"},500,function(){
			_scroll.css({marginLeft:0}).find("li:first").appendTo(_scroll);
		});
	};
	function rightscroll(){
		var _scroll = $(".style_scroll_listt ul");
		_scroll.css({marginLeft:"-186px"}).find("li:last").prependTo(_scroll);
		_scroll.animate({marginLeft:0},500);
	};
	
	var _scrollling = setInterval(leftscroll,2000);
		
	$(".style_scroll_list ul,.prev,.next").hover(function(){
			clearInterval(_scrollling);
		},
		function(){
			_scrollling = setInterval(leftscroll,2000);}
	)
	$(".prev").click(function(){
		leftscroll();	
	});
	$(".next").click(function(){
		rightscroll();	
	});
})//end .stylelist

