//by gyn
//教师页面tab栏
$(".tea_hd ul li").click(function(){
	$(this).addClass("cur").siblings().removeClass("cur");
	$(".tea_con .tea_txt").eq($(this).index()).addClass("tea_txt_cur").siblings().removeClass("tea_txt_cur");
	$("img").lazyload({effect: "fadeIn"});
	mao = $(this).attr('bz');
	window.location.hash=mao;
})
//师资页面根据参数获取学科信息
function teacherchange(teacherid){
	$('.'+teacherid).addClass("cur").siblings().removeClass("cur");
	$(".tea_con .tea_txt").eq($('.'+teacherid).index()).addClass("tea_txt_cur").siblings().removeClass("tea_txt_cur");
}
var hash;
hash=(!window.location.hash)?"#aandroid":window.location.hash;
window.location.hash=hash;
hash=hash.substr(1);
teacherchange(hash);