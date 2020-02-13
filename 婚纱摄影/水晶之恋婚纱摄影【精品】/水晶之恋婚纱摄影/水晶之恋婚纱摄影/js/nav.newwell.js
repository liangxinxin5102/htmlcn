/**
 * 获取导航插入页面
 * @author newwell<hubei_java@qq.com>20160510
 */

 if(  !$('#globalCtn', window.parent.document).length ){

 	var nav_url = "http://www.4007087688.com/index.php?getnav";

 	var _footerNav = '<nav class="floatHead g-widthmin"><div class="g-width g-wrap f-ovh"><a id="fhLogo" href="/"><img src="template/crystal/theme/bg/fh-logo.png" alt="水晶之恋"></a><ul class="fhSns m-li-h"><li><a href="javascript:;" id="BizQQWPA3"><img src="template/crystal/theme/bg/fh-qq.png" alt="水晶之恋官方QQ"></a></li><li><a  href="template/crystal/images/wb.jpg"  fancy="image"><img src="template/crystal/theme/bg/fh-wb.png" alt="水晶之恋官方微博"></a></li><li><a  href="template/crystal/images/wx.jpg"  fancy="image"><img src="template/crystal/theme/bg/fh-wx.png" alt="水晶之恋官方微信"></a></li></ul><ul class="fhNav m-li-h"><li><a href="http://www.4007087688.com">首页<span>HOME</span></a></li><li><a href="index.php?list-7.html">作品<span>work</span></a></li><li><a href="index.php?list-12.html">客片<span>GUEST</span></a></li><li><a href="http://www.4007087688.com/activity/NewHD/" target="_blank">优惠<span>ACTIVITY</span></a></li><li><a href="index.php?travel.html">全球旅拍<span>travel</span></a></li></ul></div></nav>'

	$.getJSON(nav_url,function(data){

		if(data.e==0){
			$("body").prepend(data.d);
			
		}
		$(".head li").hover(function(){
			var num=$(this).index();
			$(this).addClass("current").find(".navbox").stop().slideDown("fast");	
		},function(){
			$(this).removeClass("current").find(".navbox").stop().slideUp("fast");	
		});

		$("head").prepend('<base href="http://www.4007087688.com/" />');
		$("body").append(_footerNav);
		
	});

	$(window).scroll(function(){

	    var topNav = 148;

	    // console.log( $(window).scrollTop() );

	    if( $(window).scrollTop() >= topNav ){

	        $(".floatHead").show();

	    }else{

	        $(".floatHead").hide();

	    }

	})


 }



