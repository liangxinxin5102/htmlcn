// JavaScript Document
$(function(){
	var _nav_appdown=$("#nav_appdown");
	_nav_appdown.hover(function(){
		_nav_appdown.addClass("app_hover");
		_nav_appdown.find("p").show();
	},function(){
		_nav_appdown.removeClass("app_hover");
		_nav_appdown.find("p").hide();	
	});
	$(window).scroll(function(){
                if ($(window).scrollTop()>100){
                    $(".rightnav_top").fadeIn(500);
					if ($.browser.msie&&($.browser.version == "6.0") && !$.support.style) {
						$('.rightnav_top').hide();
					}
                }
                else
                {
                    $(".rightnav_top").fadeOut(500);
                }
     });
			var _rightnav_tip=$('#rightnav .rightnav_tip');
			var _big=$('#rightnav .big');
			_rightnav_tip.hover(function(){
					var _index=$(this).index();
					if(_index==0){
						_big.attr("class","big big_icon1");	
					};
					if(_index==1){
						_big.attr("class","big big_icon3");
					};
					if(_index==2){
						_big.attr("class","big big_icon2");
					};
					//console.log(_index);
					_big.show();
				},
				function(){
					_big.hide();	
				}
			);
	$("#rightnav .rightnav_top").click(function(){
		$('body,html').animate({scrollTop:0},50);
		return false;
	});
	$('#search_imglist li,#pub_imglist li').live('mouseover',function(){
		$(this).children('a').show();
	});
	$('#search_imglist li,#pub_imglist li').live('mouseout',function(){
		$(this).children('a').hide();
	});
});
//获取时间
function GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = dd.getMonth()+1;//获取当前月份的日期
    var d = dd.getDate();
    return y+"-"+m+"-"+d;
}
$(function(){
	$("input[name=quick_search_sp]").focus(function(){
		if($(this).val() =="年中大促，汽车服务3折起！"){
			$(this).val("");
			}
		});
	$("input[name=quick_search_sp]").blur(function(){
		if($(this).val() ==""){
			$(this).val("年中大促，汽车服务3折起！");
			}
		});
	function CountRoll(num){
		if(!num){ return ;}
		var obj = $(".change-by-mobile .count span").not(".douhao");
		/*if(num.length != length) return false;*/
		obj.eq(obj.length-num.length).prevAll("span").hide();
		var _obj = obj.eq(obj.length-num.length-1).nextAll("span:not('.douhao')");
		var length = _obj.length;
		for(var i =0; i<length;i++){
			_obj.eq(i).addClass("to"+num.charAt(i));
			}
	}
	if($(".change-by-mobile .count").length){
		CountRoll($(".change-by-mobile .count").attr("data-count"));
	}
	
	var _nav_category=$('#nav_category');
	var _nav_category_list_li=$('.nav_category_list li');
	var _nav_cate_item=$('.nav_cate_item');
	
	
	_nav_category_list_li.bind("mouseenter",function(){
		_index=$(this).index();
		$(this).addClass('cur').siblings().removeClass('cur');
		_nav_cate_item.eq(_index).addClass('cur').siblings().removeClass('cur');
		//console.log("ddd"+_index)
	});
	_nav_category.hover(function(){
		_nav_category.addClass('nav_cate_hover');
		},
	function(){
		_nav_category.removeClass('nav_cate_hover');
	});
	
	//底部效果
	var _main_footerulli=$('#main_footerul li');
	_main_footerulli.hover(function(){
		$(this).addClass('cur');
	},function(){
		$(this).removeClass("cur");
	});
	//ie6提示升级
	var ie6=!-[1,]&&!window.XMLHttpRequest;
	if(ie6){
	 $('#tipIE6').html("<div class='tipIE6'>您现在使用的浏览器版本过低，可能会导致部分图片和信息的缺失。请立即<a href='http://www.microsoft.com/china/windows/IE/upgrade/index.aspx' target='_blank'>免费升级</a>或下载使用<a href='http://www.google.cn/intl/zh-CN/chrome/browser/' target='_blank'>谷歌浏览器</a>， 安全更放心！</div>");	
	}
	
});

$.fn.extend({
	PubDateModule : function(config){
		var option = {
			ableBeforeToday : true,
			appoint : function(){
				var date = new Date();
				return date.getFullYear() + "-" + (date.getMonth()+1) +"-" +date.getDate();
				},
			before_after : 0
			};
		option = config ? $.extend(option,config) : option;
		return $(this).each(function(index, element) {
				$(this).append(DateModuleStr());
				$(this).css("border","none");
				/**  **/
				var Obj  = $(this), 
            	    obj  = $(this).find('.pub-date-input'),
					view = $(this).find('.pub-date-view');
					obj.bind('click',function(e){
						view.toggle();
						$(this).toggleClass('cur');
						e.stopPropagation();
						});
					view.bind('click',function(e){
						e.stopPropagation();
						});
					$(document).click(function(){
						view.hide();
						obj.removeClass('cur');
						});
				/**  **/		
				var monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
				var D = new Date(),
					Y = D.getFullYear(),
					M = D.getMonth();
					view.find('.year-input').html(Y);
					view.find('.month-input').html( M<9 ? '0'+(M+1):M+1 );
					for(var i = 2000;i<=2018;i++){
						view.find('.year-list').append('<li>'+i+'</li>');
						}
					NewCalenda();			
				/**  **/	
					// 绑定点击选择年份下拉框	
					view.find('.year-input').bind('click',function(){
						$(this).siblings('.year-list').toggle();
						$(this).toggleClass('cur');
						});
					// 绑定点击选择月份下拉框	
					view.find('.month-input').bind('click',function(){
						$(this).siblings('.month-list').toggle();
						$(this).toggleClass('cur');
						});
					// 选择年份下拉框	
					view.find('.year-list li').bind('click',function(e){
						view.find('.year-input').html($(this).html());
						view.find('.year-input').removeClass('cur');
						view.find('.year-list').hide();
						NewCalenda();
						e.stopPropagation();
						});
					// 选择月份下拉框	
					view.find('.month-list li').bind('click',function(e){
						view.find('.month-input').html($(this).html());
						view.find('.month-input').removeClass('cur');
						view.find('.month-list').hide();
						NewCalenda();
						e.stopPropagation();
						});
					// 点击上一年
					view.find('a.pre-year').bind('click',function(e){
						var y = view.find('.year-input').html();
						if(y==2000) return false;
						view.find('.year-input').html(parseInt(y)-1);
						NewCalenda();
						e.stopPropagation();
						});
					// 点击下一年
					view.find('a.next-year').bind('click',function(e){
						var y = view.find('.year-input').html();
						if(y==2018) return false;
						view.find('.year-input').html(parseInt(y)+1);
						NewCalenda();
						e.stopPropagation();
						});
					// 点击上个月
					view.find('a.pre-month').bind('click',function(e){
						var m = view.find('.month-input').html();
						if(parseInt(m)!=1){
							view.find('.month-input').html(parseInt(m) <= 10 ? '0'+(parseInt(m)-1) : parseInt(m)-1 );
							}
							else{
								view.find('.month-input').html(12);
								view.find('.year-input').html(parseInt(view.find('.year-input').html())-1);
								}
						NewCalenda();
						//e.stopPropagation();
						});
					// 点击下个月
					view.find('a.next-month').bind('click',function(e){
						var m = view.find('.month-input').html();
						if(parseInt(m)!=12){
							view.find('.month-input').html(parseInt(m) < 9 ? '0'+(parseInt(m)+1) : parseInt(m)+1 );
							}
							else{
								view.find('.month-input').html('01');
								view.find('.year-input').html(parseInt(view.find('.year-input').html())+1);
								}
						NewCalenda();
						//e.stopPropagation();
						});
					//点击选择日期
					Obj.find('.pub-date-calenda span').bind('click',function(){
						if($(this).html() =="") return;
						if(!$(this).hasClass("day"))return;
						var date = view.find('.year-input').html() +'-'+ parseInt(view.find('.month-input').html()) + '-' +$(this).html();
						Obj.find('.time-text').html(date);
						
						var tomorrow=GetDateStr(3);
						
						if(tomorrow==date){
							console.log("ddd")	
						}
						Obj.find(".hidden-pub-date").val(date);
						view.hide();
						obj.toggleClass('cur');
						
						$.ajax({
							url:"flow.php?step=changetime",
							async:true,
							data:{changetime: date},
							type:"GET",
							timeout: 10000
						});
						
						
						
						});
					//点击页面其他区域
					
					
				/**  **/
				function GetDay(datestr){
						var date = new Date(datestr);
						return date.getDay();
						}
				function NewCalenda(){
					var _y = parseInt(view.find('.year-input').html());
					var _m = parseInt(view.find('.month-input').html());
					var _today = new Date();
					_today = _today.getFullYear()+"/"+(_today.getMonth()+1)+"/"+_today.getDate();
					var now=(new Date(_today)).getTime(),_this,_class='day';
					Obj.find('.pub-date-calenda span').html('').removeClass("day");
					var L = monthDays;
					if(_y % 4 == 0 && _y % 100 != 0 || _y % 400 == 0 ){
						L[1] = 29;
						}
					var day1 = parseInt(GetDay(_y+'/'+_m+'/'+1));
					var getdate = GetDate();
					getdate = getdate.split("-");
					getdate[2] = (getdate[2]<9 ? "0" : "") +  getdate[2];
					var appoint = new Date(getdate.join("/")).getTime();
					for(var i = 0; i <monthDays[parseInt(_m)-1];i++){
						if(option.ableBeforeToday==false){
							_this = (new Date(_y+'/'+_m+'/'+(i+1))).getTime();
							_class = appoint > _this ? "" : "day";
							}
						view.find('.pub-date-calenda').find('span').eq(i+day1).html(i+1).addClass(_class);
						}
					}	
        });	
		
		function DateModuleStr(){
			  var str = ""+
			  "   <div class='pub-date-input'>"+
			  "		<div class='time-text'>"+ GetDate() +"</div>"+
			  "		<em class='pub-date-ico'></em>"+
			  "		<input type='hidden' class='hidden-pub-date' name='app_start_time' value='"+ GetDate() +"'/>"+
			  "	</div>"+
			  "	<div class='pub-date-view'>"+
			  "		<div class='pub-date-select'>"+
			  "			<a class='pre-year'><b></b><b></b></a>"+
			  "			<a class='pre-month'><b></b></a>"+
			  "			<span class='date-now'>"+
			  "				<div class='year-select'>"+
			  "					<div class='year-input'>2014</div>"+
			  "					<ul class='year-list'>"+
									  
			  "					</ul>"+
			  "				</div>"+
			  "				<div class='yyy'>年</div>"+
							  
			  "				<div class='month-select'>"+
			  "					<div class='month-input'>03</div>"+
			  "					<ul class='month-list'>"+
			  "						<li>01</li><li>02</li><li>03</li><li>04</li>"+
			  "						<li>05</li><li>06</li><li>07</li><li>08</li>"+
			  "						<li>09</li><li>10</li><li>11</li><li>12</li>"+
			  "					</ul>"+
			  "				</div>"+
			  "				<div class='mmm'>月</div>"+
			  "			</span>"+
			  "			<a class='next-month'><b></b></a>"+
			  "			<a class='next-year'><b></b><b></b></a>"+
			  "		</div>"+
			  "		<div class='day-number'>"+
			  "			<span>日</span> <span>一</span> <span>二</span> <span>三</span> <span>四</span> <span>五</span> <span>六</span>"+
			  "		</div>"+
			  "		<div class='pub-date-calenda'>"+
			  "			<span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>"+
			  "			<span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>"+
			  "			<span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>"+
			  "			<span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>"+
			  "			<span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>"+
			  "			<span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>"+
			  "		</div>"+
			  "	</div>";
			  return str;
			  
		  };
		  function GetDate(){
				  //如果传入配置中没有指定日期
				  if(Object.prototype.toString.call(option.appoint) == "[object Function]"){
					  //传入配置中没有设定浮动天数
					  if(option.before_after == 0 ){
						  return option.appoint();
						  }
						  else{
							  var date = new Date(),
							  		 y = date.getFullYear(),
							  		 m = date.getMonth(),
							  		 d = date.getDate(),
							  	  _val = option.before_after;
							  monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
							  if(_val>0){
								  if(d> monthDays[m]-_val){
									  d = _val-monthDays[m] +d;
									  m = m+1;
									  }
									  else{
										  d = d+_val;
									  }
								  }
							  if(_val<0){
								  if(d<=Math.abs(_val)){
									  d = monthDays[m-1] + d + _val;
									  m = m-1;
									  }
									  else{
										  d = d + _val;
										  }
								  }
								m = m+1;
								m = m<10? "0"+m : m;
								d = d <10 ? "0"+d : d;
							  return  (y +"-"+ m + "-" + d);
							}
					  }
					  else{
						  return option.appoint;
						  }
			  }
	}
});
NoticeTimer = null;
jQuery.notice = jQuery.prototype  = function(string,type){
	clearTimeout(NoticeTimer);
	NoticeTimer  = null;
	$('.jquery-notice').remove();
	var type = type == 'undefined' ? '' : type;
		type = type == 1 ? 'warning' : type == 2 ? 'error' : type == 3 ? 'tip' : type;
	var notice = "<div class='jquery-notice "+ type +"'>"+
				 "	<div class='jquery-notice-bg'></div>"+
    			 "	<div class='jquery-notice-box'>"+
    			 "		<a class='jquery-notice-close'></a>"+
        		 "		<span>"+ string +"</span>"+
    			 "	</div>"+
				 "</div>";
	$('body').append(notice);
	$('.jquery-notice').css("margin-top",-105+$(document).scrollTop()+"px");
	NoticeTimer = setTimeout(function(){
		$('.jquery-notice').remove();
		},5000);
	$('.jquery-notice-close').bind('click',function(){
		$('.jquery-notice').remove();
		});
};
//单选下拉框
$.fn.ruleSingleSelect = function () {
    var singleSelect = function (parentObj) {
        parentObj.addClass("single-select"); //添加样式
        parentObj.children().hide(); //隐藏内容
        var divObj = $('<div class="boxwrap"></div>').prependTo(parentObj); //前插入一个DIV
        //创建元素
        var titObj = $('<a class="select-tit" href="javascript:;"><span></span><i></i></a>').appendTo(divObj);
        var itemObj = $('<div class="select-items"><ul></ul></div>').appendTo(divObj);
        var arrowObj = $('<i class="arrow"></i>').appendTo(divObj);
        var selectObj = parentObj.find("select").eq(0); //取得select对象
        //遍历option选项
        selectObj.find("option").each(function (i) {
            var indexNum = selectObj.find("option").index(this); //当前索引
            var liObj = $('<li>' + $(this).text() + '</li>').appendTo(itemObj.find("ul")); //创建LI
            if ($(this).prop("selected") == true) {
                liObj.addClass("selected");
                titObj.find("span").text($(this).text());
            }
            //检查控件是否启用
            if ($(this).prop("disabled") == true) {
                liObj.css("cursor", "default");
                return;
            }
            //绑定事件
            liObj.click(function () {
                $(this).siblings().removeClass("selected");
                $(this).addClass("selected"); //添加选中样式
                selectObj.find("option").prop("selected", false);
                selectObj.find("option").eq(indexNum).prop("selected", true); //赋值给对应的option
                titObj.find("span").text($(this).text()); //赋值选中值
                arrowObj.hide();
                itemObj.hide(); //隐藏下拉框
                selectObj.trigger("change"); //触发select的onchange事件
                //alert(selectObj.find("option:selected").text());
            });
        });
        //设置样式
        //titObj.css({ "width": titObj.innerWidth(), "overflow": "hidden" });
        //itemObj.children("ul").css({ "max-height": $(document).height() - titObj.offset().top - 62 });
        
        //检查控件是否启用
        if (selectObj.prop("disabled") == true) {
            titObj.css("cursor", "default");
            return;
        }
        //绑定单击事件
        titObj.click(function (e) {
            e.stopPropagation();
            if (itemObj.is(":hidden")) {
                //隐藏其它的下位框菜单
                $(".single-select .select-items").hide();
                $(".single-select .arrow").hide();
                //位于其它无素的上面
                arrowObj.css("z-index", "1");
                itemObj.css("z-index", "1");
                //显示下拉框
                arrowObj.show();
                itemObj.show();
            } else {
                //位于其它无素的上面
                arrowObj.css("z-index", "");
                itemObj.css("z-index", "");
                //隐藏下拉框
                arrowObj.hide();
                itemObj.hide();
            }
        });
        //绑定页面点击事件
        $(document).click(function (e) {
            selectObj.trigger("blur"); //触发select的onblure事件
            arrowObj.hide();
            itemObj.hide(); //隐藏下拉框
        });
    };
    return $(this).each(function () {
        singleSelect($(this));
    });
};
$(function(){
	$(".rule-single-select").ruleSingleSelect();
});
var timershow, timerhide;
function itemover() {         
	if (timerhide) { window.clearInterval(timerhide); }
	if (document.getElementById("sub1").style.display != "block") {
		timershow = window.setTimeout(navShow, 200)
	}
}
function subsover() {
	if (timerhide) { window.clearInterval(timerhide); }     
}
function settimerhide() {
	timerhide = window.setTimeout(navHide, 200)
}
  
function navShow(){
	$('.myinfo h1').addClass('cur');
	$('.myinfo_ul').stop().animate({height:"96px"},100);
};
function navHide(){
	$('.myinfo_ul').stop().animate({height:"0px"},100);	
	$('.myinfo h1').removeClass('cur');
};
