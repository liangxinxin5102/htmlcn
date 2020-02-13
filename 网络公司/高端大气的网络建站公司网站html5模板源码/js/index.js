var sina={$:function(objName){if(document.getElementById){return eval('document.getElementById("'+objName+'")')}else{return eval('document.all.'+objName)}},isIE:navigator.appVersion.indexOf("MSIE")!=-1?true:false,addEvent:function(l,i,I){if(l.attachEvent){l.attachEvent("on"+i,I)}else{l.addEventListener(i,I,false)}},delEvent:function(l,i,I){if(l.detachEvent){l.detachEvent("on"+i,I)}else{l.removeEventListener(i,I,false)}},readCookie:function(O){var o="",l=O+"=";if(document.cookie.length>0){var i=document.cookie.indexOf(l);if(i!=-1){i+=l.length;var I=document.cookie.indexOf(";",i);if(I==-1)I=document.cookie.length;o=unescape(document.cookie.substring(i,I))}};return o},writeCookie:function(i,l,o,c){var O="",I="";if(o!=null){O=new Date((new Date).getTime()+o*3600000);O="; expires="+O.toGMTString()};if(c!=null){I=";domain="+c};document.cookie=i+"="+escape(l)+O+I},readStyle:function(I,l){if(I.style[l]){return I.style[l]}else if(I.currentStyle){return I.currentStyle[l]}else if(document.defaultView&&document.defaultView.getComputedStyle){var i=document.defaultView.getComputedStyle(I,null);return i.getPropertyValue(l)}else{return null}}};

function ScrollPic(scrollContId, arrLeftId, arrRightId, dotListId) {
    this.scrollContId = scrollContId;
    this.arrLeftId = arrLeftId;
    this.arrRightId = arrRightId;
    this.dotListId = dotListId;
    this.dotClassName = "dotItem";
    this.dotOnClassName = "dotItemOn";
    this.dotObjArr = [];
    this.pageWidth = 0;
    this.frameWidth = 0;
    this.speed = 10;
    this.space = 10;
    this.pageIndex = 0;
    this.autoPlay = true;
    this.autoPlayTime = 5;
    var _autoTimeObj, _scrollTimeObj, _state = "ready";
    this.stripDiv = document.createElement("DIV");
    this.listDiv01 = document.createElement("DIV");
    this.listDiv02 = document.createElement("DIV");
    if (!ScrollPic.childs) {
        ScrollPic.childs = []
    };
    this.ID = ScrollPic.childs.length;
    ScrollPic.childs.push(this);
    this.initialize = function() {
        if (!this.scrollContId) {
            throw new Error("必须指定scrollContId.");
            return
        };
        this.scrollContDiv = sina.$(this.scrollContId);
        if (!this.scrollContDiv) {
            throw new Error("scrollContId不是正确的对象.(scrollContId = \"" + this.scrollContId + "\")");
            return
        };
        this.scrollContDiv.style.width = this.frameWidth + "px";
        this.scrollContDiv.style.overflow = "hidden";
        this.listDiv01.innerHTML = this.listDiv02.innerHTML = this.scrollContDiv.innerHTML;
        this.scrollContDiv.innerHTML = "";
        this.scrollContDiv.appendChild(this.stripDiv);
        this.stripDiv.appendChild(this.listDiv01);
        this.stripDiv.appendChild(this.listDiv02);
        this.stripDiv.style.overflow = "hidden";
        this.stripDiv.style.zoom = "1";
        this.stripDiv.style.width = "32766px";
        this.listDiv01.style.cssFloat = "left";
        this.listDiv02.style.cssFloat = "left";
        sina.addEvent(this.scrollContDiv, "mouseover", Function("ScrollPic.childs[" + this.ID + "].stop()"));
        sina.addEvent(this.scrollContDiv, "mouseout", Function("ScrollPic.childs[" + this.ID + "].play()"));
        if (this.arrLeftId) {
            this.arrLeftObj = sina.$(this.arrLeftId);
            if (this.arrLeftObj) {
                sina.addEvent(this.arrLeftObj, "mousedown", Function("ScrollPic.childs[" + this.ID + "].rightMouseDown()"));
                sina.addEvent(this.arrLeftObj, "mouseup", Function("ScrollPic.childs[" + this.ID + "].rightEnd()"));
                sina.addEvent(this.arrLeftObj, "mouseout", Function("ScrollPic.childs[" + this.ID + "].rightEnd()"))
            }
        };
        if (this.arrRightId) {
            this.arrRightObj = sina.$(this.arrRightId);
            if (this.arrRightObj) {
                sina.addEvent(this.arrRightObj, "mousedown", Function("ScrollPic.childs[" + this.ID + "].leftMouseDown()"));
                sina.addEvent(this.arrRightObj, "mouseup", Function("ScrollPic.childs[" + this.ID + "].leftEnd()"));
                sina.addEvent(this.arrRightObj, "mouseout", Function("ScrollPic.childs[" + this.ID + "].leftEnd()"))
            }
        };
        if (this.dotListId) {
            this.dotListObj = sina.$(this.dotListId);
            if (this.dotListObj) {
                var pages = Math.round(this.listDiv01.offsetWidth / this.frameWidth + 0.4),
                i,
                tempObj;
                for (i = 0; i < pages; i++) {
                    tempObj = document.createElement("span");
                    this.dotListObj.appendChild(tempObj);
                    this.dotObjArr.push(tempObj);
                    if (i == this.pageIndex) {
                        tempObj.className = this.dotClassName
                    } else {
                        tempObj.className = this.dotOnClassName
                    };
                    //tempObj.title = "第" + (i + 1) + "页";
                    sina.addEvent(tempObj, "click", Function("ScrollPic.childs[" + this.ID + "].pageTo(" + i + ")"))
                }
            }
        };
        if (this.autoPlay) {
            this.play()
        }
    };
    this.leftMouseDown = function() {
        if (_state != "ready") {
            return
        };
        _state = "floating";
        _scrollTimeObj = setInterval("ScrollPic.childs[" + this.ID + "].moveLeft()", this.speed)
    };
    this.rightMouseDown = function() {
        if (_state != "ready") {
            return
        };
        _state = "floating";
        _scrollTimeObj = setInterval("ScrollPic.childs[" + this.ID + "].moveRight()", this.speed)
    };
    this.moveLeft = function() {
        if (this.scrollContDiv.scrollLeft + this.space >= this.listDiv01.scrollWidth) {
            this.scrollContDiv.scrollLeft = this.scrollContDiv.scrollLeft + this.space - this.listDiv01.scrollWidth
        } else {
            this.scrollContDiv.scrollLeft += this.space
        };
        this.accountPageIndex()
    };
    this.moveRight = function() {
        if (this.scrollContDiv.scrollLeft - this.space <= 0) {
            this.scrollContDiv.scrollLeft = this.listDiv01.scrollWidth + this.scrollContDiv.scrollLeft - this.space
        } else {
            this.scrollContDiv.scrollLeft -= this.space
        };
        this.accountPageIndex()
    };
    this.leftEnd = function() {
        if (_state != "floating") {
            return
        };
        _state = "stoping";
        clearInterval(_scrollTimeObj);
        var fill = this.pageWidth - this.scrollContDiv.scrollLeft % this.pageWidth;
        this.move(fill)
    };
    this.rightEnd = function() {
        if (_state != "floating") {
            return
        };
        _state = "stoping";
        clearInterval(_scrollTimeObj);
        var fill = -this.scrollContDiv.scrollLeft % this.pageWidth;
        this.move(fill)
    };
    this.move = function(num, quick) {
        var thisMove = num / 5;
        if (!quick) {
            if (thisMove > this.space) {
                thisMove = this.space
            };
            if (thisMove < -this.space) {
                thisMove = -this.space
            }
        };
        if (Math.abs(thisMove) < 1 && thisMove != 0) {
            thisMove = thisMove >= 0 ? 1 : -1
        } else {
            thisMove = Math.round(thisMove)
        };
        var temp = this.scrollContDiv.scrollLeft + thisMove;
        if (thisMove > 0) {
            if (this.scrollContDiv.scrollLeft + thisMove >= this.listDiv01.scrollWidth) {
                this.scrollContDiv.scrollLeft = this.scrollContDiv.scrollLeft + thisMove - this.listDiv01.scrollWidth
            } else {
                this.scrollContDiv.scrollLeft += thisMove
            }
        } else {
            if (this.scrollContDiv.scrollLeft - thisMove <= 0) {
                this.scrollContDiv.scrollLeft = this.listDiv01.scrollWidth + this.scrollContDiv.scrollLeft - thisMove
            } else {
                this.scrollContDiv.scrollLeft += thisMove
            }
        };
        num -= thisMove;
        if (Math.abs(num) == 0) {
            _state = "ready";
            if (this.autoPlay) {
                this.play()
            };
            this.accountPageIndex();
            return
        } else {
            this.accountPageIndex();
            setTimeout("ScrollPic.childs[" + this.ID + "].move(" + num + "," + quick + ")", this.speed)
        }
    };
    this.next = function() {
        if (_state != "ready") {
            return
        };
        _state = "stoping";
        this.move(this.pageWidth, true)
    };
    this.play = function() {
        if (!this.autoPlay) {
            return
        };
        clearInterval(_autoTimeObj);
        _autoTimeObj = setInterval("ScrollPic.childs[" + this.ID + "].next()", this.autoPlayTime * 1000)
    };
    this.stop = function() {
        clearInterval(_autoTimeObj)
    };
    this.pageTo = function(num) {
        if (_state != "ready") {
            return
        };
        _state = "stoping";
        var fill = num * this.frameWidth - this.scrollContDiv.scrollLeft;
        this.move(fill, true)
    };
    this.accountPageIndex = function() {
        this.pageIndex = Math.round(this.scrollContDiv.scrollLeft / this.frameWidth);
        if (this.pageIndex > Math.round(this.listDiv01.offsetWidth / this.frameWidth + 0.4) - 1) {
            this.pageIndex = 0
        };
        var i;
        for (i = 0; i < this.dotObjArr.length; i++) {
            if (i == this.pageIndex) {
                this.dotObjArr[i].className = this.dotClassName
            } else {
                this.dotObjArr[i].className = this.dotOnClassName
            }
        }
    }
};

function quiver(ele,times){
	for(var i = 0; i < times ;i++){
		$(ele).animate({top:'-15px'},100);
		$(ele).animate({top:'15px'},100);
		$(ele).animate({top:'0px'},100);
	}	
}
$(function(){  
	
	$(".PartFour li").eq(1).css("margin","10px 27px","_margin","10px 13px");
	$(".PartFour li").eq(2).css("marginRight","27px","_marginRight","13px");
	$(".idxMask").css({display:"none",opacity:0});
	$(".Products div.d").hover(function(){
		$(this).find(".idxMask").css({display:"block"}).animate({ opacity:0.3},300).dequeue();
		$(this).find(".idxContent").css({borderBottom:"1px solid #efefef"}).animate({top:"160px"},300).dequeue();
	},function(){
		$(this).find(".idxMask").animate({ opacity:0},300,function(){$(this).css({display:"none"})}).dequeue();
		$(this).find(".idxContent").css({borderBottom:"none"}).animate({top:"200px"},300).dequeue()	;
	})

	var commentIndex = 0;
	var commentValue = 3;
	var bH1C = new Array();
	var bH3C = new Array();
	var bBH = new Array();
	var banner;
	var bannerBgColor = ["#F2044D","#7CDCD8","#F7E73A","#D47BF7","#79d179"]; 
	var bannerImg = ["images/banner_home_left_01.png","images/banner_home_left_02.jpg","images/banner_home_left_03.png","images/banner_home_left_04.png","images/banner_home_left_05.jpg"];//定义左边的图片
	var bannerIcon = ["images/banner_home_right_icon_01.png","images/banner_home_right_icon_02.png","images/banner_home_right_icon_03.png","images/banner_home_right_icon_04.png","images/banner_home_right_icon_05.png"];
	for(var i = 0 ; i < 5 ; i++){
		bH1C.push($(".bannerInner div").attr("h1content"));
		bH3C.push($(".bannerInner div").attr("h3content"));
		bBH.push($(".bannerInner div").attr("buttonLink"));
	}
	var bannerNowIndex = 0;
	var bannerNumber = $(".bannerInner div").length - 1;
	var bannerAutoPlayHolder;
	function chageTime(){
			var gTid = Math.floor(Math.random()*1000+600);
			return gTid;
		}	
	$(".CButtonRight").click(function(){
		commentIndex++;
		$(this).css({background:"#F8044E"});
		$(".CButtonRight , .CButtonLeft").css({visibility:"visible",background:"#f3f3f3"});
		if(commentIndex == commentValue){
		      $(this).css({visibility:"hidden"});
		}
		for(var j = 0; j < commentIndex ; j++){
			$(".commentContent").eq(j).animate({marginLeft:"-394px",opacity:0},300);
		}
		$(".commentContent").eq(commentIndex).animate({marginLeft:"0px",opacity:1},300);	
	})
	$(".CButtonLeft").click(function(){
		commentIndex--;
		$(this).css({background:"#F8044E"});
		$(".CButtonRight , .CButtonLeft").css({visibility:"visible",background:"#f3f3f3"});
		if(commentIndex == 0){
			$(".CButtonLeft").css({visibility:"hidden"});
		}
        $(".commentContent").eq(commentIndex).animate({marginLeft:"0px",opacity:1},300);		
	})
	function chageState(){var gid=Math.floor(Math.random()*29);switch(gid){case 0:x='easeInQuad';break;case 1:x='easeOutQuad';break;case 2:x='easeInOutQuad';break;case 3:x='easeInCubic';break;case 4:x='easeOutCubic';break;case 5:x='easeInOutCubic';break;case 6:x='easeInQuart';break;case 7:x='easeOutQuart';break;case 8:x='easeInOutQuart';break;case 9:x='easeInQuint';break;case 10:x='easeOutQuint';break;case 11:x='easeInOutQuint';break;case 12:x='easeInSine';break;case 13:x='easeOutSine';break;case 14:x='easeInOutSine';break;case 15:x='easeInExpo';break;case 16:x='easeOutExpo';break;case 17:x='easeInOutExpo';break;case 18:x='easeInCirc';break;case 19:x='easeOutCirc';break;case 20:x='easeInOutCirc';break;case 21:x='easeInElastic';break;case 22:x='easeOutElastic';break;case 23:x='easeInOutElastic';break;case 24:x='easeInBack';break;case 25:x='easeOutBack';break;case 26:x='easeInOutBack';break;case 27:x='easeInBounce';break;case 28:x='easeOutBounce';break;case 29:x='easeInOutBounce';break;}return x;};
	function bannerAutoPlay(){
			bannerNowIndex++;
			if(bannerNowIndex > bannerNumber){bannerNowIndex = 0;}
			changWallPaper();
		}
	function changWallPaper(btnIndex){
			$(".bannerImage  , .bannerSlogan").remove().empty().detach();
			
			if(btnIndex != null){bannerNowIndex = btnIndex;}
	
			$(".Banner").css({background:bannerBgColor[bannerNowIndex]});
			switch(bannerNowIndex){
				case 0:	
					createBanner(0);
					$(".bannerImage").animate({top:"0",opacity:1},chageTime(),chageState());
					$(".bannerSlogan").animate({top:"200px",right:"0",opacity:1},chageTime(),chageState(),function(){changeTip();});
					break;
				case 1:
					createBanner(1);
					$(".bannerImage").animate({top:"180px",opacity:1},chageTime(),chageState());
					$(".bannerSlogan").animate({bottom:"100px",opacity:1},chageTime(),chageState(),function(){changeTip();});
					break;
				case 2:
					createBanner(2);
					$(".bannerImage").animate({right:"500px",opacity:1},chageTime(),chageState());
					$(".bannerSlogan").animate({top:"200px",opacity:1},chageTime(),chageState(),function(){changeTip();});
					break;
				case 3:
					createBanner(3);
					$(".bannerImage").animate({top:"135px",opacity:1},chageTime(),chageState());
					$(".bannerSlogan").animate({bottom:"100px",opacity:1},chageTime(),chageState(),function(){changeTip();});
					break;
				case 4:
					createBanner(4);
					$(".bannerImage").animate({top:"103px",opacity:1},chageTime(),chageState());
					$(".bannerSlogan").animate({bottom:"100px",opacity:1},chageTime(),chageState(),function(){changeTip();});
					break;
				default:
					break;
			}
			$(".bannerControl li").css({background:"black"});
			$(".bannerControl li").eq(bannerNowIndex).css({background:"#FF009D"});
		}
			function createBanner(i){
			banner = "<img src='"+bannerImg[i]+"' class='bannerImage bannerI"+i+"'  />" +
					"<div class='bannerSlogan bannerS"+i+"'>" +
						"<div class='bAS C'>" +
							"<div class='bannerIcon'>" +
								"<img src='"+bannerIcon[0]+"' /></div>" +
								"<div class='bannerTitle'>"+bH1C[i]+"</div>" + 
								"<div class='bannerDesc'>"+bH3C[i]+"</div>" + 
								"<div class='bannerButton'>" +
									"<a href='"+bBH[i]+"'>ReadMore</a>" +
								"</div></div></div>";
								
			$(".bannerInner").append(banner);
			$(".bannerImage").css("position","absolute");
		}
	
	if(typeof document.body.style.maxHeight === "undefined") {
			window.browserIE6 = true;
	}
	
	if(window.browserIE6){
		$(".bannerInner , .bannerLeftBar , .bannerControl , .bannerRightBar").css({display:"none"});
		$(".Banner").css({background:"url(images/IEBANNER.jpg) no-repeat center"});
	}else{
		changWallPaper();
		bannerAutoPlayHolder = setInterval(bannerAutoPlay,6000);	
		function changeTip(){
			$(".bannerIcon").animate({left:0},500,chageState());
			$(".bannerTitle").animate({top:"20px"},500,chageState());
			$(".bannerDesc").animate({left:"5px"},500,chageState());
			$(".bannerButton").animate({right:"85px"},500,chageState());
		}
		
	
	
		
		$(".bannerControl li").click(function(){
			clearInterval(bannerAutoPlayHolder);
			var blI = $(this).index(); 
			changWallPaper(blI);
			bannerAutoPlayHolder = setInterval(bannerAutoPlay,6000);
		})
		
		
		$(".bannerLeftBar").click(function(){
			clearInterval(bannerAutoPlayHolder);
			bannerNowIndex--;
			if(bannerNowIndex < 0 ){bannerNowIndex = bannerNumber;}
			changWallPaper();
			bannerAutoPlayHolder = setInterval(bannerAutoPlay,6000);
		})
		$(".bannerRightBar").click(function(){
			clearInterval(bannerAutoPlayHolder);
			bannerNowIndex++;
			if(bannerNowIndex > bannerNumber ){bannerNowIndex = 0;}
			changWallPaper();
			bannerAutoPlayHolder = setInterval(bannerAutoPlay,6000);
		});
		 $(".bannerLeftBar , .bannerRightBar").css({opacity:0});
			$(".Banner").hover(function(){
			   $(".bannerLeftBar , .bannerRightBar").animate({opacity:1},200).dequeue();
		 },function(){
			   $(".bannerLeftBar , .bannerRightBar").animate({opacity:0},200).dequeue();
		 })
	}
	
	 
	 if(window.browserIE6 == true){
		$(".PartFour li").hover(function(){
			$(this).css({background:"#F2044D"});
			$(this).find("span").css({color:"white"});
			$(this).find("h3").css({color:"white"});		
		},function(){
			$(this).css({background:"none"});	
			$(this).find("h3").css({color:"#4c4c59"});
			$(this).find("span").css({color:"#787887"});
		});
	}else{
		$(".PartFour li").hover(function(){
		$(this).find(".smallP").animate({width:"229px",left:0},300,'easeOutQuart',function(){
			$(this).parent().parent().find("span , h3").css({color:"#fff"});
			$(this).animate({top:0,height:"100%"},300,'easeOutQuart')
		}).dequeue();
		},function(){
			$(this).find(".smallP").animate({height:"90px"},300,'easeOutQuart',function(){
			$(this).parent().parent().find("h3").css({color:"#4c4c59"}).parent().parent().find("span.w70").css({color:"#787887"});
			$(this).animate({left:"115px",width:"0px",height:"90px",top:"0px"}),300,'easeOutQuart'}).dequeue();	
		});
	}
	$(".Features a").hover(function(){
		//alert($(this).index());
		var aN = -$(this).index()*66 - 396;
		//alert(aN);
		$(this).find("dt").css({background:"url(../images/home_product_czxixi2014.png) "+aN+"px -80px "});
	},function(){
		var aN = -$(this).index()*66;
		$(this).find("dt").css({background:"url(../images/home_product_czxixi2014.png)  "+aN+"px -80px "});
	});
	
	
	$(".CButtonLeft , .CButtonRight , #LeftArr , #RightArr").hover(function(){$(this).css({background:"#F8044E"})},function(){$(this).css({background:"#f3f3f3"});})

	$(".newsTitle span").click(function(){
		var x = $(this).index();
		$(".newsTitle span").css({background:"#EDEDED",borderBottom:"1px solid #D8D8D8"});
		if(x == 0){
			$(".news_part").animate({marginTop:"0",opacity:0},500).dequeue();
		}else if(x == 1){
			$(".news_part").eq(0).animate({marginTop:"-290px",opacity:0},500).dequeue();
		}else{
			$(".news_part").eq(0).animate({marginTop:"-290px",opacity:0},500).dequeue();
			$(".news_part").eq(1).animate({marginTop:"-290px",opacity:0},500).dequeue();
			$(".news_part").eq(2).animate({marginTop:"0",opacity:0},500).dequeue();
		}
		$(this).css({background:"#fff",borderBottom:"none"});
		$(".news_part").eq(x).animate({marginTop:"0",opacity:1},500).dequeue();
	});
	$(".news_part_Content li").hover(function(){
		$(this).find("span.l").animate({textIndent:"50px"},300).dequeue();	
	},function(){
		$(this).find("span.l").animate({textIndent:"30px"},300).dequeue();	
	});
	$(".newsTitle span").eq(0).css({background:"#fff",borderBottom:"none"});
	
	var cooperate = "<span class='box'></span><span class='box'></span><span class='box'></span><span class='box'></span><span class='box'></span><span class='box'></span><span class='box'></span><span class='box'></span><span class='box'></span><span class='box'></span><span class='box'></span>";
	$("#ISL_Cont_1 div").eq(0).append(cooperate);
	for(var i = 0 ; i < 11 ; i++){
		$(".box").eq(i).css({background:"url(http://www.czxixi.com/images/home_product_czxixi2014.png) -"+140*i+"px 0"});
	}
	$("#ISL_Cont_1 div").eq(1).append(cooperate);
	for(var i = 0 ; i < 11 ; i++){
		$(".box").eq(i).css({background:"url(http://www.czxixi.com/images/home_product_czxixi2014.png) -"+140*i+"px 0"});
	}
	quiver($(".Logo"),2);
	$(".Logo").mouseover(function(){
		quiver($(".Logo"),2);
	})
	
	$(".blk_29 , #LeftArr , #RightArr").hover(function(){
			clearInterval(cE);
	},function(){
		cE = setInterval(changeCe,5000);
	})
	function changeCe(){
		$(".cooperateControl #LeftArr").trigger("click");
	}
	
	var cE = setInterval(changeCe,5000);
	
	$(".Products li").hover(function(){
		$(this).find(".proImg2").animate({left:0},300).dequeue();
		$(this).find(".proBelow").animate({top:"195px"},300).dequeue();	
		$(this).find(".proTitle").css({background:"#EC054B",color:"#fff"});
	},function(){
		$(this).find(".proImg2").animate({left:'-320px'},300).dequeue();
		$(this).find(".proBelow").animate({top:"220px"},300).dequeue();	
		$(this).find(".proTitle").css({background:"none",color:"black"});
	});
	$(".proCUp").click(function(){
		var proA = new Array();
		for(var i = 0 ; i < 3 ; i++){
			proA[i] = $(".Products .proRow").eq(0);	
		}
		proA[3] = proA[0];
		$(proA[0]).animate({opacity:0,height:0},400,function(){
			$(proA[3]).appendTo($(".Products"));
			$(".Products .proRow").last().css({height:"252px",opacity:1});
		}).dequeue();	
	});
	$(".proCDown").click(function(){
		var proA = new Array();
		for(var i = 0 ; i < 3 ; i++){
			proA[i] = $(".Products .proRow").eq(0);	
		}
		proA[3] = proA[2];
		$(".Products .proRow").last().css({opacity:0,height:0}).insertBefore($(".Products .proRow").eq(0)).animate({height:'252px',opacity:1},300).dequeue();
		
	})
	
})