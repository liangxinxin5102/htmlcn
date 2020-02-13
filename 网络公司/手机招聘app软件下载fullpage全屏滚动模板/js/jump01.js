
// 在前面显示的元素，隐藏在后面的元素
var width = document.body.scrollWidth;
var height = document.body.scrollHeight;
var heightbox = $('.pageone').height();
var widthbox = $('.pageone').width();

function ina(){
	$(".flip1").addClass("in-img").removeClass("out-img");
	$(".flip").addClass("out-img").removeClass("in-img");
	}	;
function out(){
	$(".flip1").addClass("out-img").removeClass("in-img");
	$(".flip").addClass("in-img").removeClass("out-img");
	
	
	
	};
function seto(){
	 var i=1;
	setInterval(function () { 
	if(i<4){
			i++;
		}else{
			i=1;
			}
		$(".img1").attr("src","images/about/WIFI-0"+i+"_01.png");
		$(".img2").attr("src","images/about/WIFI-0"+i+"_02.png");
		$(".img3").attr("src","images/about/WIFI-0"+i+"_03.png");
		$(".img4").attr("src","images/about/WIFI-0"+i+"_04.png");
		$(".img5").attr("src","images/about/WIFI-0"+i+"_05.png");
		$(".img6").attr("src","images/about/WIFI-0"+i+"_06.png");
		$(".img7").attr("src","images/about/WIFI-0"+i+"_07.png");
		$(".img8").attr("src","images/about/WIFI-0"+i+"_08.png");
		$(".img9").attr("src","images/about/WIFI-0"+i+"_09.png");
		$(".img10").attr("src","images/about/WIFI-0"+i+"_10.png");
		
    }, 500)
	
	};



// JavaScript Document
	$(function () {
    $(".showbtn").click(function () {
        $("#bg").css({
            display: "block", height: $(document).height()
        });
        var $box = $('.jump01');
		$box.css({
			display: "block"
			})
    });
    //点击关闭按钮的时候，遮罩层关闭
    $(".close").click(function () {
        $("#bg,.jump01").css("display", "none");
    });
});


	$(function () {
    $(".showbtn1").click(function () {
		// 任何需要执行的js特效
			setTimeout(function () { 
					ina();
					
				}, 1000);
				setTimeout(function () { 
					out();
					seto()
				}, 3000);
				$("#bg").css({
					display: "block", height: $(document).height()
				});
				var $box2 = $('.jump02');
				$box2.css({
					display: "block"
					})
			});
    //点击关闭按钮的时候，遮罩层关闭
    $(".close").click(function () {
        $("#bg,.jump02").css("display", "none");
    });
});




	$(function () {
    $(".showbtn2").click(function () {
        $("#bg").css({
            display: "block", height: $(document).height()
        });
        var $box3 = $('.jump03');
        $box3.css({
			display: "block"
			})
    });
    //点击关闭按钮的时候，遮罩层关闭
    $(".close").click(function () {
        $("#bg,.jump03").css("display", "none");
    });
});


	$(function () {
    $(".showbtn3").click(function () {
        $("#bg").css({
            display: "block", height: $(document).height()
        });
        var $box4 = $('.jump04');
        $box4.css({
			display: "block"
			})
    });
    //点击关闭按钮的时候，遮罩层关闭
    $(".close").click(function () {
        $("#bg,.jump04").css("display", "none");
    });
});
       
$( document).ready(function(e) {
    
	var n=1;/*想要改变初始位置，就得记得在开始的设置上，也就是in的属性上进行调整，让它也移动一张图片*/
$(".arrowrihgt").click(function(){
	if(n<6){n=n+1;}/*这是一个函数，它的值会赋值给外面调用它的的动作。*/else{n=1}/*给0增加1是为了当实现循环后，会出现卡一下的状况，所以需要跳转到下一张的图片上*/
	$(".in").stop().animate({marginLeft:-1000*n},function(){
		if(n==6){
		$(".in").css("margin-left",-1000)/*这是很关键的一步，让到头的图片一瞬间回到制定的位置，所以要增一张位置0的图片，这样才有指定的图片执行这个动作，且可以达到衔接的作用*/
		n=1;/*通常是要验证的，输出在标题栏目上，到最后一张的时候尽管跳转到第一章还是显示的是最后一张的数字，所以到达时强制转换为0.这就避免了以后调用位置出错（后期要展示效果所以加一了）*/
		}else if(n==2){
				var options = {
				useEasing : true, 
				useGrouping : true, 
				separator : ',', 
				decimal : '.', 
				prefix : '', 
				suffix : '' 
				};
				var ii1=$('#ii1').text();
				var ii2=$('#ii2').text();
			
				var ii1 = new CountUp("ii1", 0, ii1, 0, 2.5, options);
				var ii2 = new CountUp("ii2", 0, ii2, 0, 2.5, options);
				ii1.start();
				ii2.start();
			
			}
		 $(".button span").eq(n-1).addClass("current").siblings().removeClass("current")
		})
		 
	})

	$(".arrowleft").click(function(){
		if(n>0){n=n-1}
		else{n=0}
		$(".in").stop().animate({marginLeft:-1000*n},function(){
			if(n==0){
			$(".in").css("margin-left",-1000*5)
			n=5
			}else if(n==2){
				var options = {
				useEasing : true, 
				useGrouping : true, 
				separator : ',', 
				decimal : '.', 
				prefix : '', 
				suffix : '' 
				};
				var ii1=$('#ii1').text();
				var ii2=$('#ii2').text();
			
				var ii1 = new CountUp("ii1", 0, ii1, 0, 2.5, options);
				var ii2 = new CountUp("ii2", 0, ii2, 0, 2.5, options);
				ii1.start();
				ii2.start();
			
			}
				  $(".button span").eq(n-1).addClass("current").siblings().removeClass("current")
			})
			
			})
			
	

});


