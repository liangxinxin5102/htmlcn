document.write("<script src=\"/e/js/dialog.js\" type=\"text/javascript\"></script>");
var imageindex=0;
var viewobj,picture,thumbnail,thumbnails,c_setInterval,RollTime,RollWidth,Direction;
function LoadImg(i)
 {
   picture=document.getElementsByName("picture");
   thumbnail=document.getElementsByName("thumbnail");
   HideAllpic();
   picture[i].style.display="block";
   thumbnail[i].className="current";
   imageindex=i;
 }

function HideAllpic()
 {
  for(i=0;i<picture.length;i++)
   {
     picture[i].style.display="none";
     thumbnail[i].className=thumbnail[i].className.replace(new RegExp("( ?|^)current\\b"),"");
   }
 }



function roll(direction) 
 {
  RollTime=10;
  Direction=direction;
  c_setInterval=setInterval(startroll,RollTime);
 }

function startroll()
 {
   thumbnails=document.getElementById("thumbnails");
   RollWidth=thumbnails.scrollLeft;
   if(Direction=="left")
    {
      thumbnails.scrollLeft-=2;
      if(thumbnails.scrollLeft==0)
       {
        stoproll();
       }
    }
   else
    {
      thumbnails.scrollLeft+=2;
      if(thumbnails.scrollLeft==RollWidth)
       {
        stoproll();
       }
    }
 }

function stoproll()
 {
    clearInterval(c_setInterval);
 }

function ShowImage()
 {
   var Url=document.getElementsByName("picture")[imageindex].getAttribute('big');
   document.getElementById("currentimage").value=Url;
   var Width=850;
   var Height=550;
   var Left=(window.screen.availWidth-10-Width)/2;
   var Top=(window.screen.availHeight-30-Height)/2;
   var v=window.open("/e/incs/showimage.html","imagesview","width="+Width+",height="+Height+",top="+Top+",left="+Left+",toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no");
 }