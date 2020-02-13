function $2(ObjID){return document.getElementById(ObjID);}
function DisDiv(ObjID,Val){if(Val==0){$2(ObjID).style.display="none";}
else{$2(ObjID).style.display="block";}}
function DisDivs(ObjID){if($2(ObjID).style.display=="none"){$2(ObjID).style.display="block";}
else{$2(ObjID).style.display="none";}}
function CheckSearch(){var SearchKey=$2("search_key");if(SearchKey.value==""||SearchKey.value=="请输入搜索关键词"||SearchKey.value=="Please enter keywords"){alert("请输入搜索关键词！");SearchKey.focus();return;}
location.href="products.php?search_key="+encodeURI(SearchKey.value);}
function CheckSearch2(Evt){Evt=Evt?Evt:(window.event?window.event:"");var Key=Evt.keyCode?Evt.keyCode:Evt.which;if(Key==13){var SearchKey=$2("search_key");if(SearchKey.value==""||SearchKey.value=="请输入搜索关键词"||SearchKey.value=="Please enter keywords"){alert("请输入搜索关键词！");SearchKey.focus();return;}
location.href="products.php?search_key="+encodeURI(SearchKey.value);}}
function PicWidth(){$(".editorc img").each(function(){if(parseInt($(this).css("width"))>$(".editorc").width())$(this).css({"width":"100%","height":"auto"});});}