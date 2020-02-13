
if (window.ActiveXObject)
 {
   var IEVersion=0;
   if(navigator.appVersion.match(/7./i)=="7.")
   {
     IEVersion=7;
   }
   else if(navigator.appVersion.match(/8./i)=="8.")
   {
     IEVersion=8;
   }
   else if(navigator.appVersion.match(/9./i)=="9.")
   {
     IEVersion=9;
   }
   else if(navigator.appVersion.match(/6./i)=="6.")
   {
    IEVersion=6;
   } 
  if(IEVersion==9)
   {
    document.write('<script src="/e/incs/pie/PIE_IE9.js" type="text/javascript"></script>');
   }
  else if(IEVersion>0 && IEVersion<9)
   {
    document.write('<script src="/e/incs/pie/PIE_IE678.js" type="text/javascript"></script>');
   }
 }
