$(function(){

	//微博、微信下拉
	;(function( social ){
		if ( !social.length ) return;
		var show = {
			"display" : "block",
			"top" : 12,
			"opacity" : 1
		};
		var hide = {
			"display" : "none",
			"top" : 0,
			"opacity" : 0
		};

		social.on("mouseenter", ".slist", function(){
			var self = $(this),
				otherLink = social.find(".slist").not( this ),
				siblings = self.find(".sqrcode_wrap"),
				otherBox = social.find(".sqrcode_wrap").not( siblings );

			if ( self.hasClass("active") ) return;

			otherLink.removeClass("active");
			TweenLite.to( otherBox, 0.3, hide);

			self.addClass("active");
			TweenLite.to( siblings, 0.3, show);

			// $(document).one("click", function(){
			// 	self.removeClass("active");
			// 	TweenLite.to( siblings, 0.3, hide);
			// });

			return false;
		// }).on("click", ".sqrcode_wrap", function(){
		// 	return false;
		}).on("mouseleave", ".slist", function(){
				$(this).removeClass("active");
				TweenLite.to( $(this).find(".sqrcode_wrap"), 0.3, hide);
		});
	})( $("#social") );

	//menu
	;(function( menu ){
		if ( !menu.length ) return;
		menu.find(".mlink").each(function(){
			var self = $(this),
				mico = self.find(".micoi"),
				mname = self.children(".mname"),
				top = parseInt( mico.css("top") );

			if ( self.hasClass("curr") ) return;

			self.hover(function(){
				TweenLite.to( self, 0.3, {
					"backgroundColor" : "#4d4d4d"
				});

				TweenLite.to( mico, 0.5, {
					"top" : top - 48
				});

				TweenLite.to( mname, 0.3, {
					"color" : "#ffffff"
				});
			}, function(){
				TweenLite.to( $(this), 0.3, {
					"backgroundColor" : "#ffffff"
				});

				TweenLite.to( mico, 0.5, {
					"top" : top
				});

				TweenLite.to( mname, 0.3, {
					"color" : "#373737"
				});
			});
		});
	})( $("#menu") );

	//banner
	(function( banner, ctrlWrap ){
		if( !banner.length ) return;
		var li = banner.find(".bquery>.blist");
		var link = li.children("a");

		var firstli = li.eq(0);
		var currli = firstli;
		var currlink = currli.find("a").attr("href");
		var currurl = currli.find("img").attr("src");
		var nextli = currli.next("li");

		var filterWrap = $('<div class="bfilter">').appendTo( banner );
		var queue = $( Array(21).join('<a href="javascript:void(0);"><img src="" /></a>') ).appendTo( filterWrap );
		var reverseQueue = Array.prototype.reverse.call( filterWrap.children("a") );
		var filterImg = queue.children("img");

		var ctrl = $( $.map(li, function(){//创建控制点
			return '<a href="javascript:void(0);"></a>';
		}).join() ).appendTo( ctrlWrap );

		var currLeft = 0;
		var imgWidth = 0;
		var winWidth = $(window).width();
		function autoResize( speed ){
			var currWidth = 0;

			if ( winWidth <= 1000 ) {
				currWidth = 1000;
				currLeft = ( 1000 - imgWidth ) / 2;
			} else if( winWidth >= imgWidth ) {
				currWidth = imgWidth;
				currLeft = 0;
			} else {
				currWidth = winWidth;
				currLeft = ( winWidth - imgWidth ) / 2;
			}

			TweenLite.to( link, speed, {
				"left" : currLeft
			});

			banner.add( li ).width( currWidth );

			queue.width( Math.ceil( currWidth / queue.length ) );

			banner.find(".bfilter").children("a").each(function(i){//resize滤镜图片 位置
	            $(this).children("img").css( "left", -$(this).position().left + currLeft );
	        });
		}

		var timer = null;
		function winResize(){
			winWidth = $(window).width();
			if ( timer ) {
				clearTimeout( timer );
				timer = null;
			}

			timer = setTimeout(function(){
				autoResize( 0.2 );
			}, 200)
		}

		var autoTimer = null;
		var isRun = false;
		function imgLoad(){
			winWidth = $(window).width();
			imgWidth = img.width;
			autoResize(0);
			$(window).on("resize", winResize);

			ctrlWrap.children("a:eq(0)").addClass("curr");

			li.eq(0).show();
			banner.find(".bfilter").children("a").each(function(i){//初始化滤镜图片 位置 及宽度
				$(this).css( "left", ( i * 5 ) + "%" );
				$(this).children("img").css( "left", -$(this).position().left + currLeft );
			});
			queue.attr("href", currlink);
			filterImg.attr("src", currurl);//初始化

			ctrl.on("click", function(){
				if ( isRun || $(this).hasClass("curr") ) return;
				isRun = true;
				
				ctrl.removeClass("curr");
				$(this).addClass("curr");
				nextli = li.eq( $(this).index() );
				init();

				if ( autoTimer ) {
	            	clearTimeout( autoTimer );
	            	autoTimer = null;
	            }
			});
		}

		var img = new Image();
		$(img).on("load", imgLoad);
		img.src = link.children("img")[0].src;

        function complete(){
            currli = nextli;
            currurl = nextli.find("img").attr("src");
            nextli = currli.next("li");
            nextli = nextli.length ? nextli : firstli;
            filterImg.attr("src", currurl);
            
            isRun = false;

            autoTimer = setTimeout(function(){
            	var curr = ctrl.filter(".curr").next("a");
            	curr = curr.length ? curr : ctrl.eq(0);
            	curr.trigger("click");
            },3000);
        }

        function reset(){
            filterWrap.css({
                "bottom" : 0
            });
            queue.css({
                "top" : "auto",
                "bottom" : "auto",
                "opacity" : 1
            });
        }

        function animate(target, css){
            TweenMax.staggerTo( target , 1 , css, 0.05, complete);
        }

        var css = {
            top :  {
                "top" : -570,
                "opacity" : 0
            },
            bottom : {
                "bottom" : -570,
                "opacity" : 0
            },
            lr : {
                "opacity" : 0
            }
        }

        var filter = {
            top : function(){
                animate(queue, css.top);
            },
            topReverse : function(){
                animate(reverseQueue,  css.top);
            },
            bottom : function(){
                animate(queue, css.bottom);
            },
            bottomReverse : function(){
                animate(reverseQueue, css.bottom);
            },
            left : function(){
                animate(queue, css.lr);
            },
            right : function(){
                animate(reverseQueue, css.lr);
            }
        }

        function init(){
            reset();
            filter[ ["top", "topReverse", "bottom", "bottomReverse", "left", "right"][ Math.round( Math.random() * 5 ) ] ]();
            currli.hide();
            nextli.show();
        }

        autoTimer = setTimeout(function(){
        	var curr = ctrl.filter(".curr").next("a");
        	curr = curr.length ? curr : ctrl.eq(0);
        	curr.trigger("click");
        },3000);

	})( $("#bannerQuery"), $("#bannerCtrl") );

	//
	
	;(function( service ){
		if ( !service.length ) return;
		var timer = null;
		var speed = 5000;
		var serLi = service.children(".serLi");
		var isAuto = serLi.length > 4 ? true : false;

		var config = {
			topHover : {
				"top" : -12
			},
			topLink : {
				"top" : 0
			},
			bgHover : {
				"backgroundColor" : "#da482e"
			},
			bgLink : {
				"backgroundColor" : "#999999"
			},
			bgGrey : {
				"backgroundColor" : "#cbcbcb"
			},
			opaHover : {
				"opacity" : 0
			},
			opaLink : {
				"opacity" : 1
			},
			removeStyle : {
				"width" : 229,
				"marginRight" : 14,
				"marginLeft" : 14
			}
		}

		function ctrl( status ){//控制
			if ( !isAuto ) return;
			if ( status) {
				timer = setTimeout(autoSwitch, 3000);
			} else {
				clearTimeout( timer );
			}
		}

		function autoSwitch(){//自动切换
			TweenLite.to( serLi.eq(0), 1, {
				opacity : 0,
				"onComplete" : function(){
					TweenLite.to( serLi.eq(0), 0.5, {
						"width" : 0,
						"marginLeft": 0,
						"marginRight": 0,
						"onComplete" : function(){
							serLi.eq(0).appendTo( service ).css( config.removeStyle );
							serLi = service.children(".serLi");
							TweenLite.fromTo( serLi.eq(3).show() , 1, {
								opacity : 0
							}, {
								opacity : 1
							});
							clearTimeout( timer );
							timer = setTimeout(autoSwitch, speed);
						}
					});
				}
			});
		}

		serLi.filter(":gt(3)").hide();//隐藏多余

		ctrl( true );//start

		serLi.each(function(){//hover
			var self = $(this);
			var wrap = self.children(".serWrap")
			var ico = self.find(".serIco");
			var button = self.find(".serBtnLink");

			self.hover(function(){
				TweenLite.to( wrap, 0.3, config.topHover);
				TweenLite.to( ico, 0.5, config.bgHover);
				TweenLite.to( button, 0.5, config.opaHover);
				ctrl( false);
			}, function(){
				TweenLite.to( wrap, 0.3, config.topLink);
				TweenLite.to( ico, 0.5, config.bgLink);
				TweenLite.to( button, 0.5, config.opaLink);
				ctrl( true );
			});
		});

		var detBtn = $(".icaseDetLink");
		detBtn.hover(function(){
			TweenLite.to( detBtn, 0.5, config.bgHover);
		}, function(){
			TweenLite.to( detBtn, 0.5, config.bgGrey);
		});
	})( $("#service") );

	//case scroll
	;(function( caseSwitch ){
		if ( !caseSwitch.length ) return;
		var prevBtn = caseSwitch.find(".icasebPrev");
		var nextBtn = caseSwitch.find(".icasebNext");
		var wrap = caseSwitch.find(".icaseBanner");
		var list = wrap.children(".icasebli");
		var isAnimate = false;

		list.not(":eq(0)").hide();

		prevBtn.on("click", prev);
		nextBtn.on("click", next);

		function prev(){
			if ( isAnimate ) return;
			isAnimate = true;
			var curr = wrap.children(".icasebli:first");
			var prev = wrap.children(".icasebli:last");
			TweenLite.to(curr, 0.3, {
				"left" : 402
			});

			TweenLite.fromTo(prev, 0.3, {
				"left" : -402,
				"display" : "block"
			}, {
				"left" : 0,
				"onComplete" : function(){
					wrap.prepend( prev );
					curr.hide();
					isAnimate = false;
				}
			});
		}

		function next(){
			if ( isAnimate ) return;
			isAnimate = true;
			var curr = wrap.children(".icasebli:first");
			var next = curr.next(".icasebli");
			TweenLite.to(curr, 0.3, {
				"left" : -402
			});

			TweenLite.fromTo(next, 0.3, {
				"left" : 402,
				"display" : "block"
			}, {
				"left" : 0,
				"onComplete" : function(){
					curr.appendTo( wrap ).hide();
					isAnimate = false;
				}
			});
		}
	})( $("#caseSwitch") );

	//case query
	;(function( inQuery ){
		if ( !inQuery.length ) return;
		var query = inQuery.children(".icaserQuery");
		query.each(function(){
			var self = $(this);
			var mask = self.find(".icaserMask");
			var link = self.find(".icaserLink");

			self.hover(function(){
				TweenLite.to( self, 0.3, {
					"backgroundColor" : "#454545"
					
				});
				TweenLite.to( mask, 0.3, {
					"display" : "block",
					"opacity" : 0.3
				});
				TweenLite.to( link, 0.3, {
					"top" : 68
				});
			}, function(){
				TweenLite.to( self, 0.3, {
					"backgroundColor" : "#ffffff"
				});
				TweenLite.to( mask, 0.3, {
					"display" : "none",
					"opacity" : 0
				});
				TweenLite.to( link, 0.3, {
					"top" : -45
				});
			})

		});
	})( $("#icaseRight") );

	//About
	;(function( iabout ){
		if ( !iabout.length ) return;
		var prev = iabout.find(".iaPrev");
		var next = iabout.find(".iaNext");
		var ctrlBox = iabout.find(".iaCtrl");
		var wrap = iabout.find(".iaQuery");
		var list = wrap.children(".iaList");
		var config = {
			maskHide : {
				bottom : -36
			},
			maskShow : {
				bottom : 0
			},
			topHide : {
				"top" : -100,
				"opacity" : 0
			},
			leftHide : {
				"left" : -64,
				"opacity" : 0
			},
			picShow : {
				"left" : 20,
				"opacity" : 1
			},
			nameShow : {
				"top" : -55,
				"opacity" : 1
			},
			introHide : {
				"right" : -64,
				"opacity" : 0
			},
			introShow : {
				"right" : 14,
				"opacity" : 1
			}
		}

		var a = "";
		for(var i = 0; i < list.length; i++ ) {
			a += '<a href="javascript:void(0);"></a>';
		}
		ctrlBox.append( a );

		var ctrl = ctrlBox.find("a");

		list.not(":eq(0)").hide();

		ctrl.eq(0).addClass("curr");

		list.find(".iaPicMask,.iaPicName").css( config.maskHide );

		list.find(".iaPic").css( config.leftHide ).eq(0).css( config.picShow ).find(".iaPicMask,.iaPicName").css( config.maskShow );

		list.find(".iaName").css( config.topHide ).eq(0).css( config.nameShow );
		list.find(".iaIntro").css( config.introHide ).eq(0).css( config.introShow );

		ctrlBox.on("click", "a", function(){
			var self = $(this);
			var index = self.index();
			var curr = list.eq( index );
			var prevIndex = ctrl.filter(".curr").index();
			var prev = list.eq( prevIndex );

			ctrl.removeClass( "curr" );
			self.addClass( "curr" );

			TweenLite.to(prev.find(".iaPic"), 0.2, config.leftHide);
			TweenLite.to(prev.find(".iaName"), 0.1, config.topHide);
			TweenLite.to(prev.find(".iaIntro"), 0.2, {
				css : config.introHide,
				"onComplete" : function(){
					prev.hide();
					curr.show();
					TweenLite.to(curr.find(".iaPic"), 0.3, {
						css : config.picShow,
						onComplete : function(){
							prev.find(".iaPicMask,.iaPicName").css( config.maskHide );

							TweenLite.to(curr.find(".iaPicMask,.iaPicName"), 0.3,  config.maskShow);
						}
					});
					TweenLite.to(curr.find(".iaName"), 0.2, config.nameShow);
					TweenLite.to(curr.find(".iaIntro"), 0.3, config.introShow);
				}
			});
		});

		prev.on("click", function(){
			var curr = ctrl.filter(".curr");
			if( curr.prev("a").length ) {
				curr.prev("a").trigger("click");
			} else {
				ctrl.filter(":last").trigger("click");
			}
		});
		next.on("click", function(){
			var curr = ctrl.filter(".curr");
			if( curr.next("a").length ) {
				curr.next("a").trigger("click");
			} else {
				ctrl.filter(":first").trigger("click");
			}
		});
	})( $("#iabout") );

	//News
	;(function( news ){
		if ( !news.length ) return;
		var prev = news.find(".inPrev");
		var next = news.find(".inNext");
		var query = news.find(".inQuery");
		var list = query.find(".inList");
		var isAnimate = false;
		var config = {
			left : {
				"left" : 0
			},
			right : {
				"left" : -598
			},
			bgLink : {
				"backgroundColor" : "#ffffff"
			},
			bgHover : {
				"backgroundColor" : "#545454"
			}
		}

		if( list.length <= 2 ) return;

		list.filter(":gt(1)").hide();

		prev.on("click", function(){
			var self = $(this);
			var a = list.filter(":visible:eq(0)");
			var b = list.filter(":visible:eq(1)");
			var index = a.index();
			if ( index === 0 ) return;
			var top = list.eq( index - 1 );
			var bottom = list.eq( index - 2 );

			isAnimate = true;

			top.show();
			bottom.show();

			a.addClass("inListTop").show();
			b.addClass("inListBottom").show();

			query.css( config.right );

			TweenLite.to( query, 0.6, {
				"css" : config.left,
				"onComplete" : function(){
					isAnimate = false;
					list.hide();
					top.removeClass("inListTop").show();
					bottom.removeClass("inListBottom").show();
					query.css( config.left );

				}
			});
		});

		next.on("click", function(){
			var index = list.filter(":visible").last().index();
			var top = list.eq( index + 1 );
			var bottom = list.eq( index + 2 );

			if ( !top.length || isAnimate ) return;
			isAnimate = true;
			top.addClass("inListTop").show();

			if( bottom.length ) bottom.addClass("inListBottom").show();

			TweenLite.to( query, 0.6, {
				css : config.right,
				"onComplete" : function(){
					isAnimate = false;
					list.hide();
					top.removeClass("inListTop").show();
					bottom.removeClass("inListBottom").show();
					query.css( config.left );

				}
			});
		});

		list.hover(function(){
			TweenLite.to($(this).find(".inLableDate"), 0.3, {
				"backgroundColor" : "#4d4d4d"
			});
		}, function(){
			TweenLite.to($(this).find(".inLableDate"), 0.3, {
				"backgroundColor" : "#9b9b9b"
			});
		});

		news.find(".inMore,.inNext,.inPrev").hover(function(){
			TweenLite.to( $(this), 0.5, config.bgHover);
		}, function(){
			TweenLite.to( $(this), 0.5, config.bgLink)
		})
	})( $("#iNews") );

	//image link
	;(function( link ){
		if ( !link.length ) return;
		var tier = null;
		var speed = 5000;
		var isHover = false;
		link.find(".plList").hover(function(){
			TweenLite.to( $(this).find(".plGrey"), 1, {
				"opacity" : 0
			});
			isHover = true;
			clearTimeout( timer );
		}, function(){
			TweenLite.to( $(this).find(".plGrey"), 1, {
				"opacity" : 1
			});
			isHover = false;
			timer = setTimeout( autoSwitch , 5000 );
		});

		link.find(".plList:gt(4)").hide();

		function autoSwitch(){
			var curr = link.find(".plList:lt(5)");
			TweenMax.staggerTo(curr, 0.5, {
				"opacity" : 0,
				"onComplete" : function(){
					var target = $( this.target );
					var after = link.find(".plList:eq(5)").css({
						opacity : 0,
						display : "block"
					});
					target.after( after );
					target.appendTo( link ).hide();
					TweenLite.to(after, 2, {
						opacity : 1
					});
				}
			}, 0.25)
			if( !isHover ) timer = setTimeout( autoSwitch , 5000 );
		}

		timer = setTimeout( autoSwitch , 5000 );
	})( $("#plQuery") );

	//service
	;(function(){
		var dialog = $("#serDetaile");

		if ( !dialog.length ) return;

		var dialogTitle = dialog.find(".sdTitle");
		var dialogContent = dialog.find(".sdContent");
		var inner = dialog.find(".sdContentInner");
		var dialogClose = dialog.find(".sdCloseBtn");
		var mask = $("#mask");
		var target = null;
		var content = null;

		dialogContent.mCustomScrollbar();

		$("#serlist").on("click", ".serDet", function(){
			target = $(this).closest("li");
			content = target.find(".serCon").appendTo( inner );
			dialogTitle.text( target.find(".serlTitle").text() );

			TweenMax.to( mask, 0.2, {
				"display" : "block",
				"opacity" : 0.5,
				"onComplete" : function(){
					TweenMax.to(dialog, 0.5, {
						"top" : "50%",
						"display" : "block",
						"ease" : Back.easeOut.config(2),
						"onComplete" : function(){
							dialogContent.mCustomScrollbar("update");
						}
					});
				}
			});
		}).on("mouseenter",".serli", function(){
			var self = $(this);
			TweenLite.to( self.find(".serlIco"), 0.5, {
				"backgroundColor" : "#da482e"
			});
			TweenLite.to( self.find(".serdLink"), 0.5, {
				"opacity" : 0
			});
		}).on("mouseleave",".serli", function(){
			var self = $(this);
			TweenLite.to( self.find(".serlIco"), 0.5, {
				"backgroundColor" : "#666666"
			});
			TweenLite.to( self.find(".serdLink"), 0.5, {
				"opacity" : 1
			});
		});

		dialogClose.on("click", function(){
			TweenMax.to(dialog, 0.5, {
				"top" : -606,
				"display" : "none",
				"ease" : Back.easeIn.config(2),
				"onComplete" : function(){
					TweenMax.to( mask, 0.2, {
						"display" : "none",
						"opacity" : 0
					});
					content.appendTo( target.find(".serRight") );
					target = null;
					content = null;
				}
			});
		});
	})();


	//case page
	;(function(){
		var wrap = $("#csQuery");
		var li = $("#csQuery>li");
		var maxWidth = li.outerWidth( true );
		var maxHeight = li.outerHeight( true );

/*		if ( !wrap.length ) return;

		li.css({
			"position" : "absolute",
			"left" : "50%",
			"top" : 0,
			"opacity" : 0,
			"display" : "none"
		});

		TweenMax.to( wrap, 1, {
			"height" : maxHeight * Math.ceil( li.length / 3 )
		});
		console.log( maxHeight * Math.ceil( li.length / 3 ) );
		li.each(function(key, value){
			TweenMax.to( $(this), 1, {
				"top" : maxHeight * Math.floor( key / 3 ) + 42, 
				"left" : maxWidth *  ( key % 3 ) + 31,
				"opacity" : 1,
				"display" : "block"
			});
		});

		$("#clside").on("click", "a", function(){
			var data = $(this).data("type");
			li.css({
				"position" : "absolute",
				"left" : "50%",
				"top" : 0,
				"opacity" : 0,
				"display" : "none",
				"z-index" : 0
			});

			curr = li.filter(function(){
				if ( $(this).data("type") === data ) return true;
			}).css({
				"z-index" : 9
			});

			console.log( Math.round( curr.length / 3 ), curr.length);

			TweenMax.to( wrap, 1, {
				"height" : maxHeight * Math.ceil( curr.length / 3 )
			});

			curr.each(function(key, value){
				TweenMax.to( $(this), 1, {
					"top" : maxHeight * Math.floor( key / 3 ) + 42, 
					"left" : maxWidth *  ( key % 3 ) + 31,
					"opacity" : 1,
					"display" : "block"
				});
			});
		});*/

		wrap.on("mouseenter", ".csli",function(){
			var self = $(this);
			TweenMax.to( self.find("img"), 0.5, {
				"opacity" : 0.4
			});
			TweenMax.to( self.find(".cslLink"), 0.5, {
				"backgroundColor" : "#d21f3d"
			});
		}).on("mouseleave", ".csli", function(){
			var self = $(this);
			TweenMax.to( self.find("img"), 0.5, {
				"opacity" : 1
			});
			TweenMax.to( self.find(".cslLink"), 0.5, {
				"backgroundColor" : "#4d4d4d"
			});
		});
	})();

	//case detaile
	;(function( header ){
		if ( !header.length ) return;
		header.find(".chLeft li a").hover(function(){
			TweenMax.to( $(this), 1, {
				"backgroundColor" : "#666666"
			});
		}, function(){
			TweenMax.to( $(this), 1, {
				"backgroundColor" : "#000000"
			});
		});

		header.find(".chRight li").hover(function(){
			TweenMax.to( $(this), 0.2, {
				"backgroundColor" : "#666666"
			});
			TweenMax.to( $(this).children("a"), 0.2, {
				"top" : -53
			});
		}, function(){
			TweenMax.to( $(this), 0.2, {
				"backgroundColor" : "#000000"
			});
			TweenMax.to( $(this).children("a"), 0.2, {
				"top" : 0
			});
		});

	})( $("#caseHeader") );

	//join
	;(function(){
		var dialog = $("#joinDialog");

		if ( !dialog.length ) return;

		var dialogClose = dialog.find(".sdCloseBtn");
		var mask = $("#mask");
		var joInput = dialog.find(".jobNameInput");
		
		$("#joWrap .joList:last").addClass("noBottomBorder");

		$("#joWrap").on("click", ".joSendBtn", function(){
			joInput.val( $(this).closest(".joList").find(".joName").text() );
			TweenMax.to( mask, 0.2, {
				"display" : "block",
				"opacity" : 0.5,
				"onComplete" : function(){
					TweenMax.to(dialog, 0.5, {
						"top" : "50%",
						"display" : "block",
						"ease" : Back.easeOut.config(2)
					});
				}
			});
		}).on("mouseenter", ".joSendBtn", function(){
			TweenMax.to( $(this).find(".josbLink"), 0.5, {
				opacity : 0
			});
		}).on("mouseleave", ".joSendBtn", function(){
			TweenMax.to( $(this).find(".josbLink"), 0.5, {
				opacity : 1
			});
		});

		dialog.on("click", ".sdCloseBtn,.jfCancel", function(){
			TweenMax.to(dialog, 0.5, {
				"top" : -606,
				"display" : "none",
				"ease" : Back.easeIn.config(2),
				"onComplete" : function(){
					TweenMax.to( mask, 0.2, {
						"display" : "none",
						"opacity" : 0
					});
				}
			});
		});

		$("#jfBtn").on("mouseenter", "span", function(){
			TweenMax.to( $(this).find(".jfBtnLink"), 0.5, {
				"opacity" : 0
			});
		}).on("mouseleave", "span", function(){
			TweenMax.to( $(this).find(".jfBtnLink"), 0.5, {
				"opacity" : 1
			});
		});


	})();

	//case
	;(function(){
        var li = $("#clside>li");
        var length = li.length;

        li.each(function(i){
        	$(this).css( "z-index", length - i);
        });
        
        $("#clsideWrap").hover(function(){
        	var i = 0;
            var top = 0;
            var delay = -0.1;
            li.each(function(){
				TweenMax.to( this, 0.3, {
					"top" : top += 76,
					"ease" : Back.easeOut
				});
            });
        }, function(){
            TweenMax.to(li, 0.2, {
                top : 0
            });
        });
    })();

    //contact
    ;(function(){
    	//tab1
		var tab = $("#catTab");

		if( !tab.length ) return;

		var tabQuery = tab.children(".catLabel");
		var con = $("#catQuery");
		var query = con.children(".catCon");

		query.each(function(){
			$(this).data("height", $(this).height());
		});

		tabQuery.eq(0).addClass("curr");
		query.not(":eq(0)").css("display", "none");

		tab.on("click", ".catLabel", function(){
			tabQuery.removeClass("curr");
			var index = $(this).addClass("curr").index();
			TweenLite.to( query.not(":eq(" + index + ")"), 0.5, {
				"height" : 0,
				"display" : "none"
			});
			TweenLite.to( query.eq( index ), 0.5, {
				"height" : query.eq( index ).data("height"),
				"display" : "block"
			});
		});

		//tab2
		var wrap = $("#catContr");

		if( !wrap.length ) return;

		var qrQuery = wrap.find(".catqTab")
		var qrimg = wrap.find(".catqc");

		qrQuery.eq(0).addClass("curr");
		qrimg.not(":eq(0)").css("display", "none");

		wrap.on("click", ".catqTab", function(){
			var self = $(this);
			var catqc = self.siblings(".catqc")

			if ( self.hasClass("curr") ) return;

			qrQuery.removeClass("curr");
			self.addClass("curr");

			TweenLite.to(qrimg, 0.1, {
				"opacity" : 0,
				"display" : "none",
				"onComplete" : function(){
					TweenLite.to(catqc, 0.3, {
						"opacity" : 1,
						"display" : "block"
					});
				}
			});
		});

		$("#catwBtn").on("mouseenter", ".catwSubmit,.catwReset", function(){
			TweenMax.to( $(this).find(".catwBtnLink"), 0.5, {
				"opacity" : 0
			});
		}).on("mouseleave", ".catwSubmit,.catwReset", function(){
			TweenMax.to( $(this).find(".catwBtnLink"), 0.5, {
				"opacity" : 1
			});
		});
	})();

	//news
	;(function(){
		var li = $("#nqtWrap>li");

		if ( !li.length ) return;

		var url = window.location.href;
		li.removeClass("curr").find("a").each(function(){
			if ( url.indexOf( $(this).attr("href") ) !== -1 ) {
				$(this).closest("li").addClass("curr");
				return false;
			}
		});

		var curr = li.filter(".curr").find("a");
		curr = curr.length > 0 ? curr : li.eq(0).children("a");
		var underline = $('<div class="nqUnderline">').appendTo("#nqType");

		TweenMax.to(underline, 0.2, {
			left : curr.position().left + 23,
			ease : Back.easeOut
		});

		TweenMax.to(underline, 0.5, {
			width : curr.width()
		});

		li.children("a").hover(function(){
			TweenMax.to(underline, 0.2, {
				left : $(this).position().left + 23,
				ease : Back.easeOut
			});
			TweenMax.to(underline, 0.5, {
				width : $(this).width()
			});
		}, function(){
			TweenMax.to(underline, 0.2, {
				left : curr.position().left + 23,
				ease : Back.easeOut
			});
			TweenMax.to(underline, 0.5, {
				width : curr.width()
			});
		});

		$("#nqlWrap").on("mouseenter", ".nqli", function(){
			var self = $(this);
			TweenMax.to( self.find(".nqlDate"), 0.5, {
				"backgroundColor" : "#ec173a"
			});
		}).on("mouseleave", ".nqli", function(){
			var self = $(this);
			TweenMax.to( self.find(".nqlDate"), 0.5, {
				"backgroundColor" : "#787878"
			});
		});
	})();

	//about
	;(function(){
		//定位栏
		var link = $("#aboutSide>a");

		if ( link.length ) {

			var headHeight = $(".header").height();
			var posTop = $.map($("#astepWrap>.astep"), function(value,key){
				return $(value).offset().top - headHeight;
			});
			var timer = null;

			$("#aboutSide").on("click", "a", function(){
				var self = $(this);
				var index = self.index();

				if ( index >= posTop.lnegth || self.hasClass("curr") ) return;

				link.removeClass("curr");
				self.addClass("curr");

				TweenMax.to( $("html,body"), 1, {
					scrollTop : posTop[ index ]
				});
			});

			$(window).on("scroll", function(){
				if ( timer ) {
					clearTimeout( timer );
					timer = null;
				}
				timer = setTimeout(function(){
					var scrollTop = $(window).scrollTop();
					$.each(posTop, function(key, value){
						if ( scrollTop >= value && ( scrollTop < posTop[ key + 1 ] || !posTop[ key + 1 ] ) ) {
							link.removeClass("curr").eq( key ).addClass( "curr" );
						}
					});
				});
			});
		}

		//banner
		var query = $("#as5Query");
		var li = query.children("li");

		if ( !query.length || !li.length ) return;

		var allImg = li.find("img");
		var prev = $("#asPrev");
		var next = $("#asNext");
		var resizeTimer = null;
		var isRun = false;
		var winWidth = $(window).width();
		var imgWidth = 0;
		
		var currli = li.eq(0);

		li.hide();

		var img = new Image();
		$(img).on("load", function(){
			winWidth = $(window).width()
			currli.show();
			imgWidth = allImg.eq(0).width();
			atuo();
			prev.on("click", prevFun);
			next.on("click", nextFun);
			$(window).on("resize", winResize);
		});
		img.src = allImg[0].src;

		function atuo(){
			if ( winWidth <= 1000 ) {
				query.width( 1000 );
				li.width( 1000 );
				TweenMax.to(allImg, 0.2, {
					"left" : -( imgWidth - 1000 ) / 2
				});
			} else if( winWidth >= imgWidth ){
				query.width( imgWidth );
				li.width( imgWidth );
				TweenMax.to(allImg, 0.2, {
					"left" : 0
				});
			} else  {
				query.width( winWidth );
				li.width( winWidth );
				TweenMax.to(allImg, 0.2, {
					"left" : -( imgWidth - winWidth ) / 2
				});
			}
		}

		function winResize(){
			winWidth = $(window).width();

			if ( resizeTimer ) {
				clearTimeout( resizeTimer );
				resizeTimer = null;
			}

			resizeTimer = setTimeout(function(){
				atuo();
			}, 200)
		};

		function prevFun(){
			if ( isRun ) return;
			isRun = true;

			var prevLi = currli.prev("li");
			prevLi = prevLi.length ? prevLi : li.last();

			TweenMax.to(currli, 0.5, {
				left : winWidth,
				display : "none"
			});

			TweenMax.fromTo(prevLi, 0.5, {
				display : "block",
				left : - winWidth
			}, {
				left : 0,
				"onComplete" : function(){
					currli = prevLi;
					isRun = false;
				}
			});
		};

		function nextFun(){
			if ( isRun ) return;
			isRun = true;

			var nextLi = currli.next("li");
			nextLi = nextLi.length ? nextLi : li.first();

			TweenMax.to(currli, 0.5, {
				left : - winWidth,
				display : "none"
			});

			TweenMax.fromTo(nextLi, 0.5, {
				display : "block",
				left : winWidth
			}, {
				left : 0,
				"onComplete" : function(){
					currli = nextLi;
					isRun = false;
				}
			});
		};
	})();

	//placeholder
	;(function(){
		
		if ( navigator.userAgent.toLowerCase().match(/msie ([\d.]+)/) && navigator.userAgent.toLowerCase().match(/msie ([\d.]+)/)[1] <= 9 ) {
			$("[type='text'][placeholder],textarea[placeholder]").on({
				focus : function(){
					var self = $(this);
					if ( self.val() === self.attr("placeholder") ) {
						self.val("").removeClass("placeholder");
						self.addClass("focus");
					}
				},
				blur : function(){
					var self = $(this);
					if ( !self.val() ) {
						self.val( self.attr("placeholder") ).addClass("placeholder");
						self.removeClass("focus");
					}
				}
			}).each(function(){
				var self = $(this);
				self.val( self.attr("placeholder") ).addClass("placeholder");
			});
		}
	})();
});