jq(document).ready(function(){
	jq('#chat_f1').hide();
	jq('#chat_f2').show();
	
	jq('.chat_f1_expr').animate({height:'200px'}, 1000 );
	jq('#close').click(function(){
		jq('#chat_f1').hide();
		jq('#chat_f2').show();
	})
	jq('#chat_f2').click(function(){
		jq(this).hide();
		jq('#chat_f1').show();
	})
	jq('.name').hover(function(){
		jq(this).children('.detail').show();
		jq(this).children('.arrow').css('color','#679B08');
		},function(){
		jq(this).children('.detail').hide();	
		jq(this).children('.arrow').css('color','#fff');
	})
})

function opennewwin(urlstr,w,h){
	 var t = (screen.height-h)/2;
	 var l = (screen.width-w)/2;
	 window.open(urlstr,"","width="+w+",height="+h+",top="+t+",left="+l);
}

/*
var online= new Array();
var urlroot = "/images_demo/kf/";
var tOut = -1;
var drag = false;
var g_safeNode = null;
lastScrollY = 0;

window.setTimeout("kf_sleepShow()",5000);
window.setTimeout("kf_moveWithScroll()",1);

function kf_getSafeHTML(s)
{
	var html = "";
	var safeNode = g_safeNode;
	
	if(!safeNode)
	{
		safeNode = document.createElement("TEXTAREA");
	}

	if(safeNode)
	{
		safeNode.innerText = s;
		html = safeNode.innerHTML;
		safeNode.innerText = "";
		
		g_safeNode = safeNode;
	}
	
	return html;
}

function kf_moveWithScroll() 
{ 
	 if(typeof window.pageYOffset != 'undefined') { 
        nowY = window.pageYOffset; 
     } 
     else if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') { 
        nowY = document.documentElement.scrollTop; 
     } 
     else if(typeof document.body != 'undefined') { 
        nowY = document.body.scrollTop; 
     }  

		percent = .1*(nowY - lastScrollY);
		if(percent > 0) 
		{
			percent=Math.ceil(percent);
		} 
		else
		{
			percent=Math.floor(percent);
		}

	 if(document.getElementById("kfpopupDiv"))
	 {
	 	document.getElementById("kfpopupDiv").style.top = parseInt(document.getElementById("kfpopupDiv").style.top) + percent+"px";
	 }
	 lastScrollY = lastScrollY + percent;
	 tOut = window.setTimeout("kf_moveWithScroll()",1);
}

function kf_hide() 
{
	if(tOut!=-1)
	{
		clearTimeout(tOut);   
		tOut=-1;
	}
}

function kf_hidekfpopup()
{
	if(tOut!=-1)
	{
		clearTimeout(tOut);   
		tOut=-1;
	}
	document.getElementById("kfpopupDiv").style.visibility = "hidden";
	tOut=window.setTimeout("kf_moveWithScroll()",1);
}

function kf_getPopupDivHtml()
{
	
	var temp = '<div style="cursor:pointer;height:23px;width:100%;position:relative; line-height:23px" id="acc_title">\
			<div style="float:left;width:8px; background:url(http://www11.53kf.com/img/new06/fu-t-l.gif) no-repeat; height:23px;"></div>\
			<div style="float:left;width:384px;height:23px; background:url(http://www11.53kf.com/img/new06/fu-t-c.gif) repeat-x ;line-height:23px;color:#ffffff;text-align:left;">华夏名网在线客服系统热忱为您服务</div>\
			<div style="float:left;width:8px; background:url(http://www11.53kf.com/img/new06/fu-t-r.gif) no-repeat; height:23px;"></div>\
		</div>\
		<div style="clear:both;width:400px;background:url(http://www11.53kf.com/img/ivt/53kf01bg.gif);height:auto; overflow:hidden;">\
			<div style="float:left;height:100%;width:100px;background: url(http://www11.53kf.com/img/ivt/53kf01bg.gif) left;text-align:center;"><img src="http://www11.53kf.cm/img/kflogo/ivt_cn.gif" style="DISPLAY: inline;margin-top:10px;cursor:pointer;"></div>\
			<div style="float:right;height:auto;*height:auto;*height:auto !important;width:300px;*width:298px;* width:295px !important; background:url(http://www11.53kf.com/img/ivt/53kf01bg.gif) right; text-align:left;">\
				<div style="clear:both;width:95%;padding-top:10px; text-align:left;line-height:17px;font-family:tahoma;font-size:12px;color:#000000; height:auto; overflow:hidden;">		欢迎您！来自四川省成都市[电信]的朋友 <br><span id="hz6d_acc_content">购腾讯企业邮局送iPad4/iPhone5s等豪礼。。。</span></div>    \
				<div style="clear:both;width:95%;margin-top:5px;text-align:right;"><button style="DISPLAY: inline; cursor:pointer;height:24px;width:76px;border:0px;background:none;" onclick=";onliner_zdfq=2;window.open(&quot;talk_openurl&quot;,&quot;_blank&quot;,&quot;height=473,width=703,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no&quot;);hidden_ivt();" id="hz6d_53kf_invite_acc"><img src="http://www11.53kf.com/img/new06/fu-button1_cn.gif" style="DISPLAY: inline;"></button>&nbsp;&nbsp;<button style="DISPLAY: inline;cursor:pointer;height:24px;width:76px;border:0px;background:none;" onclick="kf_hidekfpopup();return false;"><img id="hz6d_53kf_invite_hid" src="http://www11.53kf.com/img/new06/fu-button2_cn.gif" style="DISPLAY: inline;"></button></div>\
			</div>\
		</div>\
		<div style="height:8px;width:100%;clear:both; line-height:8px; float:left;">  \
			<div style="height:8px;width:8px;float:left; background:url(http://www11.53kf.com/img/new06/fu-b-l.gif) no-repeat;line-height:8px;"></div>    \
			<div style="height:8px;width:384px;float:left; background:url(http://www11.53kf.com/img/new06/fu-b-c.gif) repeat-x;line-height:8px;"></div>    \
			<div style="height:8px;width:8px;float:right; background:url(http://www11.53kf.com/img/new06/fu-b-r.gif) no-repeat;line-height:8px;"></div>\
		</div>';

    return temp;
}

function kf_processWelcomeword(word)
{
	word = word.substr(0,57+10);
	var result = '';
	var count = 0;	
	var temp = word.indexOf('<brT>');
	
  while(count<57 && temp!=-1)
  {

  	if(temp<=19) 
  	{
  		count += 19;
  		if(count<=57)
  		{
  		   result += word.substr(0,temp+5);
  	  }
  	  else
  	  {
  	  	 result += word.substr(0,57-count>word.length?word.length:57-count);
  	  }
  	}
  	else if(temp<=38)
  	{
  		count += 38;
  		if(count<=57)
  		{
  		   result += word.substr(0,temp+5);
  	  }
  	  else
  	  {
  	  	 result += word.substr(0,57-count>word.length?word.length:57-count);
  	  }
  	}
  	else if(temp<=57)
  	{
  		count += 57;
  		if(count<=57)
  		{
  		   result += word.substr(0,temp+5);
  	  }
  	  else
  	  {
  	  	 result += word.substr(0,57-count>word.length?word.length:57-count);
  	  }
  	}
  	
  	word = word.substr(temp+5); 
  	temp = word.indexOf('<brT>');
  }
  
  if(count<57)
  {
      result += word.substr(0,57-count>word.length?word.length:57-count);
  }
  
  return result;
}

function kf_setCookie(name, value, exp, path, domain)
{
	var nv = name + "=" + escape(value) + ";";

	var d = null;
	if(typeof(exp) == "object")
	{
		d = exp;
	}
	else if(typeof(exp) == "number")
	{
		d = new Date();
		d = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() + exp, d.getSeconds(), d.getMilliseconds());
	}
	
	if(d)
	{
		nv += "expires=" + d.toGMTString() + ";";
	}
	
	if(!path)
	{
		nv += "path=/;";
	}
	else if(typeof(path) == "string" && path != "")
	{
		nv += "path=" + path + ";";
	}

	if(!domain && typeof(VS_COOKIEDM) != "undefined")
	{
		domain = VS_COOKIEDM;
	}
	
	if(typeof(domain) == "string" && domain != "")
	{
		nv += "domain=" + domain + ";";
	}

	document.cookie = nv;
}

function kf_getCookie(name)
{
	var value = "";
	var cookies = document.cookie.split("; ");
	var nv;
	var i;

	for(i = 0; i < cookies.length; i++)
	{
		nv = cookies[i].split("=");

		if(nv && nv.length >= 2 && name == kf_rTrim(kf_lTrim(nv[0])))
		{
			value = unescape(nv[1]);
		}
	}

	return value;
} 

function kf_sleepShow()   
{   
	var position = 314;
	popupDivHtml = '<div id="kfpopupDiv" onmousedown="MyMove.Move(\'kfpopupDiv\',event,1);"  style="display: block; overflow: hidden; height: auto; width: 400px; z-index: 10088; font-size: 12px; position: absolute; top: 300px; left: 300px;">';
    popupDivHtml += kf_getPopupDivHtml();
    popupDivHtml += '</div>';
    document.body.insertAdjacentHTML("beforeEnd",popupDivHtml);
} 

function kf_dealErrors() 
{
	kf_hide();
	return true;
}

function kf_lTrim(str)
{
  while (str.charAt(0) == " ")
  {
    str = str.slice(1);
  }
  return str;
}

function kf_rTrim(str)
{
  var iLength = str.length;
  while (str.charAt(iLength - 1) == " ")
  {
    str = str.slice(0, iLength - 1);
	iLength--;
  }
  return str;
}

window.onerror = kf_dealErrors;
var MyMove = new Tong_MoveDiv();   

function Tong_MoveDiv()
{ 
 	  this.Move=function(Id,Evt,T) 
 	  {    
 	  	if(Id == "") 
		{
			return;
		} 
 	  	var o = document.getElementById(Id);    
 	  	if(!o) 
		{
			return;
		}    
 	    evt = Evt ? Evt : window.event;    
 	    o.style.position = "absolute";    
 	    o.style.zIndex = 200;    
 	    var obj = evt.srcElement ? evt.srcElement : evt.target;   
 	    var w = o.offsetWidth;      
 	    var h = o.offsetHeight;      
 	    var l = o.offsetLeft;      
 	    var t = o.offsetTop;  
 	    var div = document.createElement("DIV");  
 	    document.body.appendChild(div);   
 	    div.style.cssText = "filter:alpha(Opacity=10,style=0);opacity:0.2;width:"+w+"px;height:"+h+"px;top:"+t+"px;left:"+l+"px;position:absolute;background:#000";      
 	    div.setAttribute("id", Id +"temp");    
 	    this.Move_OnlyMove(Id,evt,T); 
 	}  
 	
 	this.Move_OnlyMove = function(Id,Evt,T) 
 	{    
 		  var o = document.getElementById(Id+"temp");    
 		  if(!o)
		  {
			return;
		  }   
 		  evt = Evt?Evt:window.event; 
 		  var relLeft = evt.clientX - o.offsetLeft;
 		  var relTop = evt.clientY - o.offsetTop;    
 		  if(!window.captureEvents)    
 		  {      
 		  	 o.setCapture();           
 		  }   
 		  else   
 		  {     
 		  	 window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);      
 		  }       
 		  			  
	      document.onmousemove = function(e)
	      {
	            if(!o)
	            {
	                return;
	            }
	            e = e ? e : window.event;
	
	        	var bh = Math.max(document.body.scrollHeight,document.body.clientHeight,document.body.offsetHeight,
	        						document.documentElement.scrollHeight,document.documentElement.clientHeight,document.documentElement.offsetHeight);
	        	var bw = Math.max(document.body.scrollWidth,document.body.clientWidth,document.body.offsetWidth,
	        						document.documentElement.scrollWidth,document.documentElement.clientWidth,document.documentElement.offsetWidth);
	        	var sbw = 0;
	        	if(document.body.scrollWidth < bw)
	        		sbw = document.body.scrollWidth;
	        	if(document.body.clientWidth < bw && sbw < document.body.clientWidth)
	        		sbw = document.body.clientWidth;
	        	if(document.body.offsetWidth < bw && sbw < document.body.offsetWidth)
	        		sbw = document.body.offsetWidth;
	        	if(document.documentElement.scrollWidth < bw && sbw < document.documentElement.scrollWidth)
	        		sbw = document.documentElement.scrollWidth;
	        	if(document.documentElement.clientWidth < bw && sbw < document.documentElement.clientWidth)
	        		sbw = document.documentElement.clientWidth;
	        	if(document.documentElement.offsetWidth < bw && sbw < document.documentElement.offsetWidth)
	        		sbw = document.documentElement.offsetWidth;
	             
	            if(e.clientX - relLeft <= 0)
	            {
	                o.style.left = 0 +"px";
	            }
	            else if(e.clientX - relLeft >= bw - o.offsetWidth - 2)
	            {
	                o.style.left = (sbw - o.offsetWidth - 2) +"px";
	            }
	            else
	            {
	                o.style.left = e.clientX - relLeft +"px";
	            }
	            if(e.clientY - relTop <= 1)
	            {
	                o.style.top = 1 +"px";
	            }
	            else if(e.clientY - relTop >= bh - o.offsetHeight - 30)
	            {
	                o.style.top = (bh - o.offsetHeight) +"px";
	            }
	            else
	            {
	                o.style.top = e.clientY - relTop +"px";
	            }
	      }
 		   
 		  document.onmouseup = function()      
 		  {       
 		   	   if(!o) return;       
 		   	   	
 		   	   if(!window.captureEvents) 
			   {
			   	  o.releaseCapture();  
			   }         		   	   	      
 		   	   else  
			   {
			   	  window.releaseEvents(Event.MOUSEMOVE|Event.MOUSEUP); 
			   }     
 		   	   	        
 		   	   var o1 = document.getElementById(Id);       
 		   	   if(!o1) 
			   {
			      return; 
			   }        		   	   	
 		   	   var l0 = o.offsetLeft;       
 		   	   var t0 = o.offsetTop;       
 		   	   var l = o1.offsetLeft;       
 		   	   var t = o1.offsetTop;   
 		   	   
 		   	   //alert(l0 + " " +  t0 +" "+ l +" "+t);     
 		   	   
 		   	   MyMove.Move_e(Id, l0 , t0, l, t,T);       
 		   	   document.body.removeChild(o);       
 		   	   o = null;      
 		}  
 	}  
 	
 	
 	this.Move_e = function(Id, l0 , t0, l, t,T)     
 	{      
 		    if(typeof(window["ct"+ Id]) != "undefined") 
			{
				  clearTimeout(window["ct"+ Id]);   
			}
 		    
 		    var o = document.getElementById(Id);      
 		    if(!o) return;      
 		    var sl = st = 8;      
 		    var s_l = Math.abs(l0 - l);      
 		    var s_t = Math.abs(t0 - t);      
 		    if(s_l - s_t > 0)  
			{
				if(s_t) 
				{
					sl = Math.round(s_l / s_t) > 8 ? 8 : Math.round(s_l / s_t) * 6; 
				}       
 		    		      
 		        else
				{
					sl = 0; 
				}            		      
			}        		    	   
 		    else
			{
				if(s_l)
				{
					st = Math.round(s_t / s_l) > 8 ? 8 : Math.round(s_t / s_l) * 6;   
				}          		    		    
 		        else  
			    {
			  	    st = 0;
			    }       		      	  
			}       
 		    	       		      	
 		    if(l0 - l < 0) 
			{
				sl *= -1; 
			}  		    	     
 		    if(t0 - t < 0) 
			{
				st *= -1; 
			}   		    	     
 		    if(Math.abs(l + sl - l0) < 52 && sl) 
			{
 		    	sl = sl > 0 ? 2 : -2; 					
			}    
 		    if(Math.abs(t + st - t0) < 52 && st) 
			{
	        	st = st > 0 ? 2 : -2;  					
			}      
 		    if(Math.abs(l + sl - l0) < 16 && sl) 
			{
 		    	sl = sl > 0 ? 1 : -1;  					
			}   
 		    if(Math.abs(t + st - t0) < 16 && st) 
			{
 		    	st = st > 0 ? 1 : -1;    					
			} 
 		    if(s_l == 0 && s_t == 0)
			{
     		    return;   				
			} 
 		    if(T)      
 		    {    
 		    	o.style.left = l0 +"px";    
 		    	o.style.top = t0 +"px";    
 		    	return;      
 		    }      
 		    else      
 		    {    
 		    	if(Math.abs(l + sl - l0) < 2) 
				{
					o.style.left = l0 +"px";  
				}       		    		 
 		    	else     
				{
					o.style.left = l + sl +"px";   
				}   		    	 
 		    	if(Math.abs(t + st - t0) < 2) 
				{
					o.style.top = t0 +"px";   
				}        		    		 
 		    	else    
				{
					o.style.top = t + st +"px";   

				}
 		    		         		    	
 		    	window["ct"+ Id] = window.setTimeout("MyMove.Move_e('"+ Id +"', "+ l0 +" , "+ t0 +", "+ (l + sl) +", "+ (t + st) +","+T+")", 1);      
 		    }     
 		}   
} 
*/