<?php 
define("SITENAME","有美 南庄農特產");
define("TITLE","桂花釀-有美農特產-南庄美食團購宅配");
define("DESCRIPTION1","有美桂花釀位於苗栗南庄老街,提供以傳統手工作法精製的桂花釀,在桂花巷中擁有良好的口碑,每年熱銷數萬瓶各式桂花釀玫瑰釀,及相關系列產品,並宅配線上購買,歡迎大家來南庄玩,並品嚐道地美食。");
define("KEYWORD1","桂花釀");
define("KEYWORD2","桂花釀");

define("NAME","露營區場地");

define("MOBIL","0919-825503");
define("PHONE","0919-825503");
define("EMAIL","sony66@gmail.com");
define("ADDRESS","353苗栗縣南庄鄉文化路南庄老街桂花巷內");
define("GPS","N24.35.51.9　E121.01.5.9"); 

$EMAIL_ADDRESS="sony66@gmail.com";
$EMAIL_SERVICE="sony66@gmail.com";

$SHORTNAME="露營場地 "; //店家比較簡短的名稱(桂花釀) 創始店
$DNS="http://www.uma.tw"; //店家官方網站
$FACEBOOK="https://www.facebook.com/pages/%E9%87%91%E6%88%90%E9%9C%B2%E7%87%9F%E6%B8%A1%E5%81%87%E5%B1%B1%E8%8E%8A/229261877087769?pnref=lhc";
?>
<?php 
if($_SERVER['HTTP_HOST']=="localhost" || $_SERVER['HTTP_HOST']=="192.168.1.100"){
  $path="http://localhost/uma/Boffice/";
  $SITEURL="/uma/";
  }else{
	  $path="http://camp.ioneone.com/Boffice/";
	  $SITEURL="http://camp.ioneone.com/";
	  }
?>
