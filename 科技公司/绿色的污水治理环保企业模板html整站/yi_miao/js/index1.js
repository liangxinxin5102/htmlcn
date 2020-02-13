	window.onload=function(){
 	var wu=document.getElementById('wu');
	var wu2=document.getElementById('wu2');
	var cute=document.getElementById('cute');
	var zuo=document.getElementById('zuo');
	var you=document.getElementById('you');
	var timer=null;
	var time=null;
		wu2.innerHTML=wu.innerHTML;
		function show()
		{
			cute.scrollLeft=cute.scrollLeft+1;
			if(cute.scrollLeft==cute.clientWidth)
			{
				cute.scrollLeft=0;
			}
			if(cute.scrollLeft%200==0)
			{
			 	clearInterval(timer);
			 	time=setTimeout(clock,1000);
			}
		}
		function clock()
		{
			timer=setInterval(show,1);
		}
		clock();
		zuo.onclick = function()
		{
			clock();
		}
		you.onclick = function(){
			clearInterval(timer);
			if(time){
				clearTimeout(time);
			};
			function run1(){
				cute.scrollLeft = cute.scrollLeft-1;
				if(cute.scrollLeft<=0){
					cute.scrollLeft = 200;
				}
				if(cute.scrollLeft%200==0){
					clearInterval(timer);
					time = setTimeout(clock1,1000);
				}
			}
			function clock1(){
				clearInterval(timer);
				clearTimeout(time);
				timer = setInterval(run1,0);
			}
			time = setTimeout(clock1,0);

			}



	var outer = document.getElementById('outerr');
	var inner = document.getElementById('innerr');
	var btn1 = document.getElementById('btn1');
	var time = null;
	inner.innerHTML+=inner.innerHTML;
	function ou()
	{
		clearInterval(time);
		function run()
		{
			outer.scrollTop++;
			if(outer.scrollTop == outer.clientHeight)
		{
			outer.scrollTop=0;
		}
	}
	time=setInterval(run,50);
	}
	ou();
	}