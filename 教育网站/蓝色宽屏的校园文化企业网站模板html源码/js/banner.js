// JavaScript Document

function banner(){	
	var bn_id = 0;
	var bn_id2= 1;
	var speed33=5000;
	var qhjg = 1;
    var MyMar33;
	$("#banner .d1").hide();
	$("#banner .d1").eq(0).fadeIn("slow");
	if($("#banner .d1").length>1)
	{
		$("#banner_id div").eq(0).addClass("nuw");
		function Marquee33(){
			bn_id2 = bn_id+1;
			if(bn_id2>$("#banner .d1").length-1)
			{
				bn_id2 = 0;
			}
			$("#banner .d1").eq(bn_id).css("z-index","2");
			$("#banner .d1").eq(bn_id2).css("z-index","1");
			$("#banner .d1").eq(bn_id2).show();
			$("#banner .d1").eq(bn_id).fadeOut("slow");
			$("#banner_id div").removeClass("nuw");
			$("#banner_id div").eq(bn_id2).addClass("nuw");
			bn_id=bn_id2;
		};
	
		MyMar33=setInterval(Marquee33,speed33);
		
		$("#banner_id div").click(function(){
			var bn_id3 = $("#banner_id div").index(this);
			if(bn_id3!=bn_id&&qhjg==1)
			{
				qhjg = 0;
				$("#banner .d1").eq(bn_id).css("z-index","2");
				$("#banner .d1").eq(bn_id3).css("z-index","1");
				$("#banner .d1").eq(bn_id3).show();
				$("#banner .d1").eq(bn_id).fadeOut("slow",function(){qhjg = 1;});
				$("#banner_id div").removeClass("nuw");
				$("#banner_id div").eq(bn_id3).addClass("nuw");
				bn_id=bn_id3;
			}
		})
		$("#banner_id").hover(
			function(){
				clearInterval(MyMar33);
			}
			,
			function(){
				MyMar33=setInterval(Marquee33,speed33);
			}
		)	
	}
	else
	{
		$("#banner_id").hide();
	}
}
	
	
	
	var Speed = new Array(); //速度(毫秒)
var Space = new Array(); //每次移动(px)
var PageWidth = new Array(); //翻页宽度
var interval = new Array(); //翻页间隔时间
var fill = new Array(); //整体移位
var MoveLock = new Array();
var MoveTimeObj = new Array();
var MoveWay = new Array();
var Comp = new Array();
var AutoPlayObj= new Array();
var ISL_Cont= new Array();
function GetObj(objName){if(document.getElementById){return eval('document.getElementById("'+objName+'")')}else{return eval('document.all.'+objName)}}
function AutoPlay_1(n){clearInterval(AutoPlayObj[n]);AutoPlayObj[n]=setInterval('ISL_GoDown_1('+n+');ISL_StopDown_1('+n+');',interval[n])}
function ISL_GoUp_1(n){if(MoveLock[n])return;clearInterval(AutoPlayObj[n]);MoveLock[n]=true;MoveWay[n]="left";MoveTimeObj[n]=setInterval('ISL_ScrUp_1('+n+');',Speed[n]);}
function ISL_StopUp_1(n){if(MoveWay[n] == "right"){return};clearInterval(MoveTimeObj[n]);if((GetObj('ISL_Cont_'+n).scrollLeft-fill[n])%PageWidth[n]!=0){Comp[n]=fill[n]-(GetObj('ISL_Cont_'+n).scrollLeft%PageWidth[n]);CompScr_1(n)}else{MoveLock[n]=false}
AutoPlay_1(n)}
function ISL_ScrUp_1(n){if(GetObj('ISL_Cont_'+n).scrollLeft<=0){GetObj('ISL_Cont_'+n).scrollLeft=GetObj('ISL_Cont_'+n).scrollLeft+GetObj('List1_'+n).offsetWidth}
GetObj('ISL_Cont_'+n).scrollLeft-=Space[n]}
function ISL_GoDown_1(n){clearInterval(MoveTimeObj[n]);if(MoveLock[n])return;clearInterval(AutoPlayObj[n]);MoveLock[n]=true;MoveWay[n]="right";ISL_ScrDown_1(n);MoveTimeObj[n]=setInterval('ISL_ScrDown_1('+n+')',Speed[n])}
function ISL_StopDown_1(n){if(MoveWay[n] == "left"){return};clearInterval(MoveTimeObj[n]);if(GetObj('ISL_Cont_'+n).scrollLeft%PageWidth[n]-(fill[n]>=0?fill[n]:fill[n]+1)!=0){Comp[n]=PageWidth[n]-GetObj('ISL_Cont_'+n).scrollLeft%PageWidth[n]+fill[n];CompScr_1(n)}else{MoveLock[n]=false}
AutoPlay_1(n)}
function ISL_ScrDown_1(n){if(GetObj('ISL_Cont_'+n).scrollLeft>=GetObj('List1_'+n).offsetWidth){GetObj('ISL_Cont_'+n).scrollLeft=GetObj('ISL_Cont_'+n).scrollLeft-GetObj('List1_'+n).offsetWidth}
GetObj('ISL_Cont_'+n).scrollLeft+=Space[n]}
function CompScr_1(n){if(Comp[n]==0){MoveLock[n]=false;return}
var num,TempSpeed=Speed[n],TempSpace=Space[n];if(Math.abs(Comp[n])<PageWidth[n]/1){TempSpace=Math.round(Math.abs(Comp[n]/Space[n]));if(TempSpace<1){TempSpace=1}}
if(Comp[n]<0){if(Comp[n]<-TempSpace){Comp[n]+=TempSpace;num=TempSpace}else{num=-Comp[n];Comp[n]=0}
GetObj('ISL_Cont_'+n).scrollLeft-=num;setTimeout('CompScr_1('+n+')',TempSpeed)}else{if(Comp[n]>TempSpace){Comp[n]-=TempSpace;num=TempSpace}else{num=Comp[n];Comp[n]=0}
GetObj('ISL_Cont_'+n).scrollLeft+=num;setTimeout('CompScr_1('+n+')',TempSpeed)}}
function picrun_ini(Width,time,n){
Speed[n] = 5; //速度(毫秒)
Space[n] = 10; //每次移动(px)
PageWidth[n] = Width; //翻页宽度
interval[n] = time; //翻页间隔时间
fill[n] = 0; //整体移位
MoveLock[n] = false;
MoveWay[n] ="right";
Comp[n] = 0;
AutoPlayObj[n] =null;
	
GetObj('List2_'+n).innerHTML=GetObj('List1_'+n).innerHTML;
GetObj('ISL_Cont_'+n).scrollLeft=fill[n]>=0?fill[n]:GetObj('List1_'+n).scrollWidth-Math.abs(fill[n]);
GetObj('ISL_Cont_'+n).onmouseover=function(){clearInterval(AutoPlayObj[n])}
GetObj('ISL_Cont_'+n).onmouseout=function(){AutoPlay_1(n)}
AutoPlay_1(n);
}

//设为首页
function setHomePage()
{
if(document.all)
{
var obj = document.links(0);
if (obj)
{
obj.style.behavior = 'url(#default#homepage)';
obj.setHomePage(window.location.href);
}
  	}
else
{
if(window.netscape)
{
try
{
netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
}
catch (e)
{
window.alert("此操作被浏览器拒绝，请通过浏览器菜单完成此操作！");
}
}
   	}
}

//加入收藏
function addFavorite()
{
var url	 = document.location.href;
var title	= document.title;
if (document.all)
{
window.external.addFavorite(url,title);
}
else if (window.sidebar)
{
window.sidebar.addPanel(title, url,"");
}
}
