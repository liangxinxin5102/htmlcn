$(document).ready(function() {
    var $star = $("#star");
	var $li = $star.find("li");
	//var $strong = $star.find("strong");
	var $span = $star.find("span");
	var i = iScore = iStar = 0;

	$li.hover(function()
	{
		var index = $(this).index()+1;
		//$p.css("display","none");
		//$(this).find("span").css("display","block");
		curPoint(index);
	},
	function()
	{
		//$span.css("display","none");
		curPoint();
	})

	$li.click(function()
	{
		var index = $(this).index()+1;
		var sText = $(this).find("span").text();
		iStar = $(this).index()+1;
		//$strong.text(sText);
	})

	function curPoint(pNum)
	{
		if(pNum){
			iScore = pNum;
		}else{
			iScore = iStar;
		}
		for (i = 0; i < $li.length; i++)
		{
			if(i < iScore){
				$li.eq(i).addClass("on");
			}else{
				$li.eq(i).removeClass("on");
			}
		}
	}
});