/**
 * NewYear About
 */
//设置body模式
$(function () {
    var win_width = $(window).width();
    if ($(window).width() >= 1200) {
        $("body").css("overflow-x", "hidden");
    } else {
        $(".index-ny-l").css("display", "none");
        $(".index-ny-r").css("display", "none");
        $(".index-nym-l").css("display", "none");
        $(".index-nym-r").css("display", "none");
    }
});
//窗口改变时设置body模式
window.onresize = function () {
    var win_width = $(window).width();
    if ($(window).width() >= 1200) {
    	$("body").css("overflow-x", "hidden");
    } else {
    	$(".index-ny-l").css("display", "none");
        $(".index-ny-r").css("display", "none");
        $(".index-nym-l").css("display", "none");
        $(".index-nym-r").css("display", "none");
    }
}

$(document).ready(function(){
	
	var windowWidth;
	var windowHeight;
	var popHeight;
	var popWidth;

	function init() {
		windowWidth = $(window).width();
		if(window.innerHeight){
			windowHeight = window.innerHeight;
		}else{
			windowHeight = $(window).height();
		}
		popWidth = $("#box-dialog-index").width();
		popHeight = $("#box-dialog-index").height();
	}
	
	function popDialog() {
		init();
		popWidth = $("#box-dialog-index").width();
		popHeight = $("#box-dialog-index").height();
    	var popX = (windowWidth - popWidth) / 2;
		var popY = (windowHeight - popHeight) / 2;
    	$("#box-dialog-index").css("left",popX).css("top",popY);
    	$("#box-dialog-index").css("z-index","1002");
		
	//	$("#box-dialog-bg").show();
	//	$("#box-dialog-index").show();
		$("#dialog-close").click(function(){
			$("#box-dialog-index").hide();
			$("#box-dialog-bg").hide();
		});
		$("#bd-btn-index").click(function(){
			$("#box-dialog-index").hide();
			$("#box-dialog-bg").hide();
		});
	}
	
	popDialog();
	
});