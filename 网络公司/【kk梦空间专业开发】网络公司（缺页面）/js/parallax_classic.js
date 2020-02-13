/*
 * Parallax Classic v1.4
 *
 * Copyright 2012-2013, LambertGroup
 * http://www.parallaxslider.com/withoutParallaxEffectFullWidthType.html
*/
(function(c) {
    /* /add by z */
    
    function N(a, b, e, h, g, v, j) {
        b = c(b.attr("data-text-id")).children();
        var f, w, u = 0;
        currentText_arr = [];
        j && c(".newFS", g).contents().unwrap();
        b.each(function() {
            currentText_arr[u] = c(this);
            var b = currentText_arr[u];
            j && "true" == b.attr("data-preanimate") ? (b.css({
                display: "block"
            }), f = b.attr("data-final-left"), w = b.attr("data-final-top"), e.responsive && (f = parseInt(f / (e.origWidth / e.width), 10), w = parseInt(w / (e.origWidth / e.width), 10)), b.css({
                left: f + "px",
                top: w + "px",
                opacity: 1,
                display: "block"
            })) : j ? b.css({
                display: "none",
                opacity: 0
            }) : b.css({
                display: "block"
            });
            "true" != b.attr("data-preanimate") && (f = b.attr("data-initial-left"), w = b.attr("data-initial-top"), e.responsive && (f = parseInt(f / (e.origWidth / e.width), 10), w = parseInt(w / (e.origWidth / e.width), 10)), b.css({
                left: f + "px",
                top: w + "px",
                opacity: parseInt(b.attr("data-fade-start"), 10) / 100
            }));
            j || (a.timeouts_arr[a.timeouts_arr.length] = setTimeout(function() {
                var g = O();
                e.responsive && (newCss = "", -1 != b.css("font-size").lastIndexOf("px") ? (fontSize = b.css("font-size").substr(0, b.css("font-size").lastIndexOf("px")), newCss += "font-size:" + fontSize / (e.origWidth / e.width) + "px;") : -1 != b.css("font-size").lastIndexOf("em") && (fontSize = b.css("font-size").substr(0, b.css("font-size").lastIndexOf("em")), newCss += "font-size:" + fontSize / (e.origWidth / e.width) + "em;"), -1 != b.css("line-height").lastIndexOf("px") ? (lineHeight = b.css("line-height").substr(0, b.css("line-height").lastIndexOf("px")), newCss += "line-height:" + lineHeight / (e.origWidth / e.width) + "px;") : -1 != b.css("line-height").lastIndexOf("em") && (lineHeight = b.css("line-height").substr(0, b.css("line-height").lastIndexOf("em")), newCss += "line-height:" + lineHeight / (e.origWidth / e.width) + "em;"), b.wrapInner('<div class="newFS" style="' + newCss + '" />'));
                var h, j, f;
                h = b.attr("data-final-left");
                j = b.attr("data-final-top");
                e.responsive && (h = parseInt(h / (e.origWidth / e.width), 10), j = parseInt(j / (e.origWidth / e.width), 10));
                if ("true" != b.attr("data-preanimate")) {
                    var p = e.defaultEasing;
                    "" != b.attr("data-easing") && void 0 != b.attr("data-easing") && (p = b.attr("data-easing"));
                    f = 1; ! 0 == a.isVideoPlaying && (f = 0); - 1 != g && 9 > g && b.css({
                        opacity: 1
                    });
                    b.stop().animate({
                        opacity: f,
                        left: h + "px",
                        top: j + "px"
                    },
                    1E3 * b.attr("data-duration"), p,
                    function() { ! 0 == a.isVideoPlaying && c(a.currentImg.attr("data-text-id")).children().css("opacity", 0)
                    })
                } else b.css({
                    left: h + "px",
                    top: j + "px",
                    opacity: 1
                })
            },
            1E3 * b.attr("data-delay")));
            u++
        })
    }
    function S(a, b, e, h) {
        for (k = 0; k < h; k++) e = c(a[k]),
        e = c(e.attr("data-text-id")).children(),
        currentText_arr = [],
        e.each(function() {
            currentText_arr[0] = c(this);
            var a = currentText_arr[0];
            if ("true" == a.attr("data-preanimate")) {
                a.css({
                    display: "block"
                });
                var e = a.attr("data-final-left"),
                h = a.attr("data-final-top");
                b.responsive && (e = parseInt(e / (b.origWidth / b.width), 10), h = parseInt(h / (b.origWidth / b.width), 10));
                a.css({
                    left: e + "px",
                    top: h + "px",
                    opacity: 1
                })
            } else a.css({
                display: "none"
            })
        })
    }
    function I(a) {
        if (a) for (var b in a) a[b] && clearTimeout(a[b]);
        a.length = 0
    }
    function F(a, b, e, h, g, v, j, f, w, u, x, l, y, C, E, p, G, s) {
        var q = !0,
        r;
        if (!e.loop && b.current_img_no + a >= h || !e.loop && 0 > b.current_img_no + a) q = !1;
        if (q && !b.slideIsRunning && b.firstLoadingComplete) {
            b.slideIsRunning = !0;
            I(b.timeouts_arr);
            r = b.previous_current_img_no;
            c(b.currentImg.attr("data-text-id")).children().clearQueue();
            var q = c(b.currentImg.attr("data-text-id")).children(),
            z = 0;
            currentText_arr = [];
            q.each(function() {
                currentText_arr[z] = c(this);
                var a = currentText_arr[z],
                d = e.defaultExitLeft;
                void 0 != a.attr("data-exit-left") && "" != a.attr("data-exit-left") && (d = parseInt(a.attr("data-exit-left") / (e.origWidth / e.width), 10));
                var g = e.defaultExitTop;
                void 0 != a.attr("data-exit-top") && "" != a.attr("data-exit-top") && (g = parseInt(a.attr("data-exit-top") / (e.origWidth / e.width), 10));
                var h = e.defaultExitDuration;
                void 0 != a.attr("data-exit-duration") && "" != a.attr("data-exit-duration") && (h = parseFloat(a.attr("data-exit-duration")));
                var j = e.defaultExitDelay;
                void 0 != a.attr("data-exit-delay") && "" != a.attr("data-exit-delay") && (j = parseFloat(a.attr("data-exit-delay")));
                var l = e.defaultExitEasing;
                void 0 != a.attr("data-exit-easing") && "" != a.attr("data-exit-easing") && (l = a.attr("data-exit-easing"));
                var f = e.defaultExitOFF.toString();
                void 0 != a.attr("data-exit-off") && "" != a.attr("data-exit-off") && (f = a.attr("data-exit-off"));
                "true" == f && (h = 0);
                0 < h && parseInt(a.attr("data-final-top") / (e.origWidth / e.width), 10) == parseInt(a.css("top").substr(0, a.css("top").lastIndexOf("px")), 10) ? b.timeouts_arr[b.timeouts_arr.length] = setTimeout(function() {
                    a.stop().animate({
                        left: d + "px",
                        top: g + "px"
                    },
                    1E3 * h, l,
                    function() {
                        "true" != a.attr("data-preanimate") && "false" == f ? a.css({
                            display: "none"
                        }) : (theLeft = a.attr("data-final-left"), theTop = a.attr("data-final-top"), e.responsive && (theLeft = parseInt(theLeft / (e.origWidth / e.width), 10), theTop = parseInt(theTop / (e.origWidth / e.width), 10)), a.css({
                            left: theLeft + "px",
                            top: theTop + "px",
                            opacity: 1
                        }))
                    })
                },
                1E3 * j) : "true" != a.attr("data-preanimate") && "false" == f && a.css({
                    display: "none"
                });
                z++
            });
            e.showCircleTimer && (b.ctx.clearRect(0, 0, b.canvas.width, b.canvas.height), b.ctx.beginPath(), b.ctx.globalAlpha = e.behindCircleAlpha / 100, b.ctx.arc(e.circleRadius + 2 * e.circleLineWidth, e.circleRadius + 2 * e.circleLineWidth, e.circleRadius, 0, 2 * Math.PI, !1), b.ctx.lineWidth = e.circleLineWidth + 2, b.ctx.strokeStyle = e.behindCircleColor, b.ctx.stroke(), b.ctx.beginPath(), b.ctx.globalAlpha = e.circleAlpha / 100, b.ctx.arc(e.circleRadius + 2 * e.circleLineWidth, e.circleRadius + 2 * e.circleLineWidth, e.circleRadius, 0, 0, !1), b.ctx.lineWidth = e.circleLineWidth, b.ctx.strokeStyle = e.circleColor, b.ctx.stroke());
            "bullets" == e.skin ? c(g[b.current_img_no]).removeClass("bottomNavButtonON") : c(l[b.current_img_no]).removeClass("thumbsHolder_ThumbON");
            x.css("display", "none");
            b.current_img_no = b.current_img_no + a >= h ? 0 : 0 > b.current_img_no + a ? h - 1 : b.current_img_no + a;
            e.showBottomNav && ("bullets" == e.skin ? (e.autoHideBottomNav || s.css("display", "block"), c(g[b.current_img_no]).addClass("bottomNavButtonON")) : (e.autoHideBottomNav || G.css("display", "block"), c(l[b.current_img_no]).addClass("thumbsHolder_ThumbON"), currentCarouselLeft = y.css("left").substr(0, y.css("left").lastIndexOf("px")), 0 === b.current_img_no || b.current_img_no === h - 1 ? L(0, y, C, E, e, h, p, b) : L(1001, y, C, E, e, h, p, b)));
            b.currentImg = c(v[b.current_img_no]);
            w.animate({
                left: -1 * b.current_img_no * e.width + "px"
            },
            1E3 * e.scrollSlideDuration, e.scrollSlideEasing,
            function() {
                b.slideIsRunning = !1;
                b.arcInitialTime = (new Date).getTime();
                b.timeElapsed = 0;
                "true" == c(v[b.current_img_no]).attr("data-video") && x.css("display", "block");
                "true" == c(v[b.previous_current_img_no]).attr("data-video") && (c("#contentHolderUnit_" + b.previous_current_img_no, u).html(c(v[b.previous_current_img_no]).html()), T(b.previous_current_img_no, b, e, v, u, j, f));
                I(b.timeouts_arr);
                N(b, c(v[r]), e, j, u, f, !0);
                N(b, b.currentImg, e, j, u, f, !1);
                0 < e.autoPlay && (1 < h && !b.mouseOverBanner) && (clearTimeout(b.timeoutID), b.timeoutID = setTimeout(function() {
                    b.previous_current_img_no = b.current_img_no;
                    F(1, b, e, h, g, v, j, f, w, u, x, l, y, C, E, p, G, s)
                },
                1E3 * e.autoPlay))
            })
        }
    }
    function M(a, b, c, h, g) {
        b = c.origImgsDimensions[b].split(";");
        h.responsive && (b[0] /= h.origWidth / h.width, b[1] /= h.origWidth / h.width);

        //modify by z
        if(h.backgroundKeepCenter){
            //a.width('100%');
            var w = a.width();
            var parent_w = a.parent().width();
            if(w>parent_w){
                a.css({'position':'relative','left':-Math.floor((w-parent_w)/2)})
            }
        }else{
            a.width(b[0]);
            a.height(b[1]);
        }
        
        g && (h.width100Proc && h.height100Proc) && a.css({
            position: "relative",
            left: parseInt(h.width - a.width(), 10) + "px",
            top: parseInt(h.height - a.height(), 10) + "px"
        })
    }
    function T(a, b, e, h, g, v, j) {
        e.responsive && (imgInside = c("#contentHolderUnit_" + a, g).find("img:first"), null != imgInside.width() && M(imgInside, a, b, e, !0), textIdChildren = c(c(h[a]).attr("data-text-id")).children(), k = -1, textIdChildren.each(function() {
            k++;
            imgInside = c(this).find("img:first");
            null != imgInside.width() && M(imgInside, c(h[a]).attr("data-text-id") + "-" + k, b, e, !1)
        }), c(c(h[a]).attr("data-text-id")).css({
            width: e.width + "px",
            left: parseInt(a * e.width, 10),
            top: j.css("top")
        }))
    }
    function L(a, b, c, h, g, v, j, f) {
        currentCarouselLeft = b.css("left").substr(0, b.css("left").lastIndexOf("px"));
        1 === a || -1 === a ? (f.isCarouselScrolling = !0, b.css("opacity", "0.5"), b.animate({
            opacity: 1,
            left: "+=" + a * f.carouselStep
        },
        500, "easeOutCubic",
        function() {
            U(f, b, c, h, g, v, j);
            f.isCarouselScrolling = !1
        })) : currentCarouselLeft != -1 * Math.floor(f.current_img_no / g.numberOfThumbsPerScreen) * f.carouselStep && (f.isCarouselScrolling = !0, b.css("opacity", "0.5"), b.animate({
            opacity: 1,
            left: -1 * Math.floor(f.current_img_no / g.numberOfThumbsPerScreen) * f.carouselStep
        },
        500, "easeOutCubic",
        function() {
            U(f, b, c, h, g, v, j);
            f.isCarouselScrolling = !1
        }))
    }
    function U(a, b, c, h, g, v, j) {
        currentCarouselLeft = b.css("left").substr(0, b.css("left").lastIndexOf("px"));
        0 > currentCarouselLeft ? c.hasClass("carouselLeftNavDisabled") && c.removeClass("carouselLeftNavDisabled") : c.addClass("carouselLeftNavDisabled");
        Math.abs(currentCarouselLeft - a.carouselStep) < (j.width() + a.thumbMarginLeft) * v ? h.hasClass("carouselRightNavDisabled") && h.removeClass("carouselRightNavDisabled") : h.addClass("carouselRightNavDisabled")
    }
    function V(a, b, e, h, g, v, j, f, w, u, x) {
        "thumbs" == b.skin && (x.css({
            bottom: parseInt(b.thumbsWrapperMarginBottom / (b.origWidth / b.width), 10) + "px",
            top: "auto",
            height: parseInt(b.origthumbsHolderWrapperH / (b.origWidth / b.width), 10) + "px"
        }), bgTopCorrection = 0, j.css("background-position", "0px " + ((x.height() - b.origthumbsHolderWrapperH) / 2 + bgTopCorrection) + "px"), f.css("background-position", "0px " + ((x.height() - b.origthumbsHolderWrapperH) / 2 + bgTopCorrection) + "px"), u.css("width", b.width - j.width() - f.width()), b.origWidthThumbsHolderVisibleWrapper = b.origWidth - j.width() - f.width(), g.css({
            width: parseInt(b.origThumbW / (b.origWidthThumbsHolderVisibleWrapper / u.width()), 10) + "px",
            height: parseInt(b.origThumbH / (b.origWidthThumbsHolderVisibleWrapper / u.width()), 10) + "px"
        }), b.numberOfThumbsPerScreen >= e && u.css("left", parseInt((x.width() - (w.width() + a.thumbMarginLeft) * e) / 2, 10) + "px"), c(".thumbsHolder_ThumbOFF", h).find("img:first").css({
            width: g.width() + "px",
            height: g.height() + "px",
            "margin-top": parseInt((x.height() - g.height()) / 2, 10) + "px"
        }), a.thumbMarginLeft = Math.floor((x.width() - j.width() - f.width() - w.width() * b.numberOfThumbsPerScreen) / (b.numberOfThumbsPerScreen - 1)), thumb_i = -1, v.children().each(function() {
            thumb_i++;
            theThumb = c(this);
            theThumb.css("background-position", "center " + b.thumbsOnMarginTop / (b.origWidth / b.width) + "px");
            0 >= thumb_i ? theThumb.css("margin-left", Math.floor((x.width() - j.width() - f.width() - (a.thumbMarginLeft + theThumb.width()) * (b.numberOfThumbsPerScreen - 1) - theThumb.width()) / 2) + "px") : theThumb.css("margin-left", a.thumbMarginLeft + "px")
        }), a.carouselStep = (w.width() + a.thumbMarginLeft) * b.numberOfThumbsPerScreen)
    }
    function O() {
        var a = -1;
        "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (a = parseFloat(RegExp.$1));
        return parseInt(a, 10)
    }
    c.fn.parallax_classic = function(a) {
        a = c.extend({},
        c.fn.parallax_classic.defaults, a);
        return this.each(function() {
            var b = c(this);
            /* add by z */
            var minWidth = a.minWidth;
            var minHeight = a.minHeight;
            /* /add by z */
            responsiveWidth = b.parent().width();
            responsiveHeight = b.parent().height();
            a.responsiveRelativeToBrowser && (responsiveWidth = c(window).width(), responsiveHeight = c(window).height());
            a.origWidth = a.width;
            a.width100Proc && (a.width = responsiveWidth);
            a.origHeight = a.height;
            a.height100Proc && (a.height = responsiveHeight);
            if (a.responsive && (a.origWidth != responsiveWidth || a.width100Proc)) a.width = a.origWidth > responsiveWidth || a.width100Proc ? responsiveWidth: a.origWidth,
            a.height100Proc || (a.height = a.width / (a.origWidth / a.origHeight));
            var e = c("<div></div>").addClass("parallax_classic").addClass(a.skin),
            h = c('<div class="bannerControls"> <div class="leftNav"></div> <div class="rightNav"></div> </div> <div class="contentHolderVisibleWrapper"><div class="contentHolder"></div></div> <div class="playOver"></div> <div class="thumbsHolderWrapper"><div class="thumbsHolderVisibleWrapper"><div class="thumbsHolder"></div></div></div> <canvas class="mycanvas"></canvas>');
            b.wrap(e);
            b.after(h);
            var g = b.parent(".parallax_classic"),
            h = c(".bannerControls", g),
            v = c(".contentHolderVisibleWrapper", g),
            j = c(".contentHolder", g),          
            e = c('<div class="bottomNavLeft"></div>'),
            f = c('<div class="bottomNav"></div>'),
            w = c('<div class="bottomNavRight"></div>');
            b.after(e);
            b.after(f);
            b.after(w);
            a.showAllControllers || h.css("display", "none");
            var u = c(".leftNav", g),
            x = c(".rightNav", g);
            u.css("display", "none");
            x.css("display", "none");
            a.showNavArrows && a.showOnInitNavArrows && (u.css("display", "block"), x.css("display", "block"));
            var l = c(".bottomNav", g),
            y = c(".bottomNavLeft", g),
            C = c(".bottomNavRight", g),
            E;
            l.css("display", "block");
            y.css("display", "block");
            C.css("display", "block");
            l.css({
                bottom: parseInt(a.thumbsWrapperMarginBottom / (a.origWidth / a.width), 10) + "px",
                top: "auto"
            });
            y.css({
                bottom: parseInt(a.thumbsWrapperMarginBottom / (a.origWidth / a.width), 10) + "px",
                top: "auto"
            });
            C.css({
                bottom: parseInt(a.thumbsWrapperMarginBottom / (a.origWidth / a.width), 10) + "px",
                top: "auto"
            });
            a.showBottomNav || (l.css("display", "none"), y.css("display", "none"), C.css("display", "none"));
            a.showOnInitBottomNav || (l.css("left", "-5000px"), y.css("left", "-5000px"), C.css("left", "-5000px"));
            var p = c(".thumbsHolderWrapper", g),
            G = c(".thumbsHolderVisibleWrapper", g),
            s = c(".thumbsHolder", g),
            q,
            r;
            q = c('<div class="carouselLeftNav"></div>');
            r = c('<div class="carouselRightNav"></div>');
            p.append(q);
            p.append(r);
            r.css("right", "0");
            s.css("width", q.width() + "px"); (!a.showBottomNav || !a.showOnInitBottomNav) && p.css({
                opacity: 0,
                display: "none"
            });
            "thumbs" == a.skin && p.css({
                bottom: parseInt(a.thumbsWrapperMarginBottom / (a.origWidth / a.width), 10) + "px",
                top: "auto"
            });
            a.enableTouchScreen && (j.css({
                cursor: "url(" + a.absUrl + "skins/hand.cur),url(" + a.absUrl + "skins/hand.cur),move",
                left: "0px",
                top: "0px",
                position: "absolute"
            }), j.draggable({
                axis: "x",
                distance: 10,
                disabled: !0,
                start: function() {
                    origLeft = parseInt(c(this).css("left"), 10);
                    z.css("display", "none");
                    d.previous_current_img_no = d.current_img_no
                },
                stop: function() {
                    d.slideIsRunning || (finalLeft = parseInt(c(this).css("left"), 10), direction = 1, origLeft < finalLeft && (direction = -1), F(direction, d, a, m, D, n, b, h, j, g, z, thumbsHolder_Thumbs, s, q, r, t, p, l))
                }
            }));

            /* add by z */
            if(minWidth > 0 && a.width<minWidth) a.width = minWidth;
            if(minHeight>0 && a.height<minHeight) a.height = minHeight;
            var isie = getIEVersion()>-1;
            if(isie){
                var document_width = jQuery(document).width();
                if(a.width<document_width){
                    a.width = document_width;
                }
            }
            /* /add by z */
            
            var z = c(".playOver", g);
            z.css({
                left: parseInt((a.width - z.width()) / 2, 10) + "px",
                top: parseInt((a.height - z.height()) / 2, 10) + "px"
            });
            c(".myloader", g).css({
                left: (a.width - c(".myloader", g).width()) / 2 + "px",
                top: (a.height - c(".myloader", g).height()) / 2 + "px"
            });
            var m = 0,
            d = {
                current_img_no: 0,
                currentImg: 0,
                previous_current_img_no: 0,
                slideIsRunning: !1,
                mouseOverBanner: !1,
                isVideoPlaying: !1,
                carouselStep: 0,
                thumbMarginLeft: 0,
                timeoutID: "",
                intervalID: "",
                arcInitialTime: (new Date).getTime(),
                timeElapsed: 0,
                windowWidth: 0,
                origImgsDimensions: [],
                firstLoadingComplete: !1,
                canvas: "",
                ctx: "",
                timeouts_arr: [],
                bannerRatio: a.origWidth / a.origHeight
            },
            P = 0;
            d.canvas = c(".mycanvas", g)[0];
            d.canvas.width = 2 * a.circleRadius + 4 * a.circleLineWidth;
            d.canvas.height = 2 * a.circleRadius + 4 * a.circleLineWidth;
            e = O(); - 1 != e && 9 > e && (a.showCircleTimer = !1);
            a.showCircleTimer && (d.ctx = d.canvas.getContext("2d"));
            g.width(a.width);
            g.height(a.height);
            v.width(a.width);
            v.height(a.height);
            j.width(a.width);
            j.height(a.height);
            h.css("margin-top", parseInt((a.height - u.height()) / 2, 10) + "px");
            var n = b.find("ul:first").children(),
            H,
            Q = 0,
            B,
            t,
            J = 0,
            I = 0,
            A;
            n.each(function() {
                d.currentImg = c(this);
                d.currentImg.is("li") || (d.currentImg = d.currentImg.find("li:first"));
                if (d.currentImg.is("li")) {
                    m++;
                    H = c('<div class="contentHolderUnit" rel="' + (m - 1) + '" id="contentHolderUnit_' + (m - 1) + '">' + d.currentImg.html() + "</div>");
                    H.width(a.width);
                    H.height(a.height);
                    j.append(H);
                    Q += a.width;
                    A = c("#contentHolderUnit_" + (m - 1), g).find("img:first");
                    //add by z
                    if(A.height()==0){
                        A.height(a.height);
                    }
                    //
                    
                    null != A.width() ? (d.origImgsDimensions[m - 1] = A.width() + ";" + A.height(), a.responsive && a.origWidth != responsiveWidth && M(A, m - 1, d, a, !0)) : d.origImgsDimensions[m - 1] = null;
                    if(a.backgroundKeepCenter) M(A, m - 1, d, a, !0); //add by z
                    "bullets" == a.skin ? (B = c('<div class="bottomNavButtonOFF" rel="' + (m - 1) + '"></div>'), l.append(B), J += parseInt(B.css("padding-left").substring(0, B.css("padding-left").length - 2), 10) + B.width(), I = parseInt((l.height() - parseInt(B.css("height").substring(0, B.css("height").length - 2))) / 2, 10), B.css("margin-top", I + "px")) : (image_name = c(n[m - 1]).attr("data-bottom-thumb"), t = c('<div class="thumbsHolder_ThumbOFF" rel="' + (m - 1) + '"><img src="' + image_name + '"></div>'), s.append(t), 0 == a.origThumbW && (0 == a.numberOfThumbsPerScreen && (a.numberOfThumbsPerScreen = Math.floor((a.origWidth - q.width() - r.width()) / t.width())), a.origThumbW = t.width(), a.origThumbH = t.height(), a.origthumbsHolderWrapperH = p.height(), d.thumbMarginLeft = Math.floor((a.origWidth - q.width() - r.width() - t.width() * a.numberOfThumbsPerScreen) / (a.numberOfThumbsPerScreen - 1))), s.css("width", s.width() + d.thumbMarginLeft + t.width() + "px"), thumbsHolder_MarginTop = parseInt((p.height() - parseInt(t.css("height").substring(0, t.css("height").length - 2))) / 2, 10));
                    j.append(c(d.currentImg.attr("data-text-id")));
                    c(d.currentImg.attr("data-text-id")).css({
                        width: a.width + "px",
                        height: "100%",
                        overflow: "hidden",
                        left: parseInt((m - 1) * a.width, 10),
                        top: h.css("top")
                    });
                    var b = -1;
                    c(d.currentImg.attr("data-text-id")).children().each(function() {
                        b++;
                        A = c(this).find("img:first");
                        null != A.width() ? (d.origImgsDimensions[d.currentImg.attr("data-text-id") + "-" + b] = A.width() + ";" + A.height(), a.responsive && a.origWidth != responsiveWidth && M(A, d.currentImg.attr("data-text-id") + "-" + b, d, a, !1)) : d.origImgsDimensions[d.currentImg.attr("data-text-id") + "-" + b] = null
                    })
                }
            });
            j.width(Q);
            "bullets" == a.skin ? (l.width(J), a.showOnInitBottomNav && (l.css("left", parseInt((g.width() - J) / 2, 10) + "px"), y.css("left", parseInt(l.css("left").substring(0, l.css("left").length - 2), 10) - y.width() + "px"), C.css("left", parseInt(l.css("left").substring(0, l.css("left").length - 2), 10) + l.width() + parseInt(B.css("padding-left").substring(0, B.css("padding-left").length - 2), 10) + "px"))) : (G.css({
                width: a.origWidth - q.width() - r.width(),
                left: q.width() + "px"
            }), d.carouselStep = (t.width() + d.thumbMarginLeft) * a.numberOfThumbsPerScreen, q.addClass("carouselLeftNavDisabled"), a.numberOfThumbsPerScreen >= m && (r.addClass("carouselRightNavDisabled"), q.css("display", "none"), r.css("display", "none"), G.css("left", parseInt((p.width() - (t.width() + d.thumbMarginLeft) * m) / 2, 10) + "px")), c(".thumbsHolder_ThumbOFF", g).find("img:first").css("margin-top", thumbsHolder_MarginTop + "px"), a.origthumbsHolder_MarginTop = thumbsHolder_MarginTop);
            thumbsHolder_Thumbs = c(".thumbsHolder_ThumbOFF", g);
            V(d, a, m, g, thumbsHolder_Thumbs, s, q, r, t, G, p);
            c("iframe", g).each(function() {
                var a = c(this).attr("src"),
                b = "?wmode=transparent"; - 1 != a.indexOf("?") && (b = "&wmode=transparent");
                c(this).attr("src", a + b)
            });
            d.current_img_no = 0;
            d.currentImg = c(n[0]);
            g.mouseenter(function() {
                a.pauseOnMouseOver && (1 < m && d.firstLoadingComplete) && (d.mouseOverBanner = !0, clearTimeout(d.timeoutID), nowx = (new Date).getTime(), d.timeElapsed += nowx - d.arcInitialTime);
                a.autoHideNavArrows && a.showNavArrows && (u.css("display", "block"), x.css("display", "block"));
                a.autoHideBottomNav && a.showBottomNav && ("bullets" == a.skin ? (l.css({
                    display: "block",
                    left: parseInt((g.width() - J) / 2, 10) + "px"
                }), y.css({
                    display: "block",
                    left: parseInt(l.css("left").substring(0, l.css("left").length - 2), 10) - y.width() + "px"
                }), C.css({
                    display: "block",
                    left: parseInt(l.css("left").substring(0, l.css("left").length - 2), 10) + l.width() + parseInt(B.css("padding-left").substring(0, B.css("padding-left").length - 2), 10) + "px"
                })) : !(0 > a.thumbsWrapperMarginBottom && d.isVideoPlaying) && a.showBottomNav && (p.css({
                    display: "block"
                }), p.stop().animate({
                    opacity: 1
                },
                500, "swing",
                function() {})))
            });
            g.mouseleave(function() {
                a.pauseOnMouseOver && (1 < m && d.firstLoadingComplete) && (d.mouseOverBanner = !1);
                a.autoHideNavArrows && a.showNavArrows && (u.css("display", "none"), x.css("display", "none"));
                a.autoHideBottomNav && a.showBottomNav && ("bullets" == a.skin ? (l.css("display", "none"), y.css("display", "none"), C.css("display", "none")) : p.stop().animate({
                    opacity: 0
                },
                300, "swing",
                function() {}));
                if (0 < a.autoPlay && 1 < m && !d.isVideoPlaying && a.pauseOnMouseOver && d.firstLoadingComplete) {
                    clearTimeout(d.timeoutID);
                    nowx = (new Date).getTime();
                    d.arcInitialTime = (new Date).getTime();
                    var c = parseInt(1E3 * a.autoPlay - (d.timeElapsed + nowx - d.arcInitialTime), 10);
                    d.timeoutID = setTimeout(function() {
                        F(1, d, a, m, D, n, b, h, j, g, z, thumbsHolder_Thumbs, s, q, r, t, p, l)
                    },
                    c)
                }
            });
            H = c(".contentHolderUnit", j);


            /* add by z
               调整背景图片居中
            */
            H.each(function(i,div){
                var div = jQuery(div);
                var img = div.find('img');
                var imgwidth = img.width();
                var divwidth = div.width();
                if(divwidth<imgwidth){
                    img.css('margin-left',Math.floor((divwidth-imgwidth)/2));
                }else if(divwidth>imgwidth){
                    img.css('margin-left',Math.floor((divwidth-imgwidth)/2));
                }else img.css('margin-left',0);
            });
            /* /add by z */

            
            H.click(function() {
                var b = c(this).attr("rel");
                "true" == c(n[d.current_img_no]).attr("data-video") ? b != d.current_img_no ? d.isVideoPlaying = !1 : (clearTimeout(d.timeoutID), A = c(this).find("img:first"), A.css("display", "none"), z.css("display", "none"), d.isVideoPlaying = !0, "thumbs" == a.skin && a.thumbsWrapperMarginBottom > -1 * a.origthumbsHolderWrapperH && p.css("display", "none"), "bullets" == a.skin && 0 <= a.thumbsWrapperMarginBottom && l.css("display", "none")) : void 0 != c(n[d.current_img_no]).attr("data-link") && (b == d.current_img_no && "" != c(n[d.current_img_no]).attr("data-link")) && (b = a.target, void 0 != c(n[d.current_img_no]).attr("data-target") && "" != c(n[d.current_img_no]).attr("data-target") && (b = c(n[d.current_img_no]).attr("data-target")), "_blank" == b ? window.open(c(n[d.current_img_no]).attr("data-link")) : window.location = c(n[d.current_img_no]).attr("data-link"))
            });
            z.click(function() {
                z.css("display", "none");
                clearTimeout(d.timeoutID);
                A = c("#contentHolderUnit_" + d.current_img_no, g).find("img:first");
                A.css("display", "none");
                d.isVideoPlaying = !0;
                "thumbs" == a.skin && a.thumbsWrapperMarginBottom > -1 * a.origthumbsHolderWrapperH && p.css("display", "none");
                "bullets" == a.skin && 0 <= a.thumbsWrapperMarginBottom && l.css("display", "none")
            });
            c(".parallax_classic_texts", g).click(function() {
                if (void 0 != c(n[d.current_img_no]).attr("data-link") && "" != c(n[d.current_img_no]).attr("data-link") && !d.slideIsRunning) {
                    var b = a.target;
                    void 0 != c(n[d.current_img_no]).attr("data-target") && "" != c(n[d.current_img_no]).attr("data-target") && (b = c(n[d.current_img_no]).attr("data-target"));
                    "_blank" == b ? window.open(c(n[d.current_img_no]).attr("data-link")) : window.location = c(n[d.current_img_no]).attr("data-link")
                }
            });
            u.click(function() {
                d.slideIsRunning || (d.isVideoPlaying = !1, d.previous_current_img_no = d.current_img_no, clearTimeout(d.timeoutID), F( - 1, d, a, m, D, n, b, h, j, g, z, thumbsHolder_Thumbs, s, q, r, t, p, l))
            });
            x.click(function() {
                d.slideIsRunning || (d.isVideoPlaying = !1, d.previous_current_img_no = d.current_img_no, clearTimeout(d.timeoutID), F(1, d, a, m, D, n, b, h, j, g, z, thumbsHolder_Thumbs, s, q, r, t, p, l))
            });
            var R = !1;
            c(window).resize(function() {
                var e = O();
                doResizeNow = !0; - 1 != navigator.userAgent.indexOf("Android") && (0 == a.windowOrientationScreenSize0 && 0 == window.orientation && (a.windowOrientationScreenSize0 = c(window).width()), 0 == a.windowOrientationScreenSize90 && 90 == window.orientation && (a.windowOrientationScreenSize90 = c(window).height()), 0 == a.windowOrientationScreenSize_90 && -90 == window.orientation && (a.windowOrientationScreenSize_90 = c(window).height()), a.windowOrientationScreenSize0 && (0 == window.orientation && c(window).width() > a.windowOrientationScreenSize0) && (doResizeNow = !1), a.windowOrientationScreenSize90 && (90 == window.orientation && c(window).height() > a.windowOrientationScreenSize90) && (doResizeNow = !1), a.windowOrientationScreenSize_90 && ( - 90 == window.orientation && c(window).height() > a.windowOrientationScreenSize_90) && (doResizeNow = !1), 0 == d.windowWidth && (doResizeNow = !1, d.windowWidth = c(window).width())); - 1 != e && (9 == e && 0 == d.windowWidth) && (doResizeNow = !1);
                d.windowWidth == c(window).width() ? (doResizeNow = !1, a.windowCurOrientation != window.orientation && -1 != navigator.userAgent.indexOf("Android") && (a.windowCurOrientation = window.orientation, doResizeNow = !0)) : d.windowWidth = c(window).width();
                a.responsive && doResizeNow && (!1 !== R && clearTimeout(R), R = setTimeout(function() {
                    var e = d,
                    f = a,
                    K = m,
                    w = n,
                    x = h,
                    y = z,
                    A = D,
                    B = thumbsHolder_Thumbs,
                    C = t;
                    responsiveWidth = b.parent().parent().width();
                    responsiveHeight = b.parent().parent().height();
                    f.responsiveRelativeToBrowser && (responsiveWidth = c(window).width(), responsiveHeight = c(window).height());
                    f.width100Proc && (f.width = responsiveWidth);
                    f.height100Proc && (f.height = responsiveHeight);
                    if (f.origWidth != responsiveWidth || f.width100Proc) {
                        f.origWidth > responsiveWidth || f.width100Proc ? f.width = responsiveWidth: f.width100Proc || (f.width = f.origWidth);
                        f.height100Proc || (f.height = f.width / e.bannerRatio);

                        /* add by z */
                        if(f.width<a.minWidth && a.minWidth) f.width = a.minWidth;
                        if(f.height<a.minHeight && a.minHeight) f.height = a.minHeight;
                        var isie = getIEVersion()>-1;
                        if(isie){
                            var document_width = jQuery(document).width();
                            if(f.width<document_width){
                                f.width = document_width;
                            }
                        }
                        /* /add by z */
                        
                        g.width(f.width);
                        g.height(f.height);
                        v.width(f.width);
                        v.height(f.height);
                        j.width(f.width);
                        j.height(f.height);
                        x.css("margin-top", parseInt((f.height - u.height()) / 2, 10) + "px");
                        S(w, f, b, K);

                        contentHolderUnit = c(".contentHolderUnit", g);

                        /* add by z
                           调整背景图片居中
                         */
                        contentHolderUnit.each(function(i,div){
                            var div = jQuery(div);
                            var img = div.find('img');
                            var imgwidth = img.width();
                            var divwidth = div.width();
                            if(divwidth<imgwidth){
                                img.css('margin-left',Math.floor((divwidth-imgwidth)/2));
                            }else if(divwidth>imgwidth){
                                img.css('margin-left',Math.floor((divwidth-imgwidth)/2));
                            }else img.css('margin-left',0);
                        });
                        /* /add by z */
                        
                        contentHolderUnit.width(f.width);
                        contentHolderUnit.height(f.height);
                        holderWidth = f.width * K;
                        for (i = 0; i < K; i++) T(i, e, f, w, g, b, x);
                        j.width(holderWidth);
                        "bullets" == f.skin ? 0 <= f.thumbsWrapperMarginBottom ? l.css({
                            left: parseInt((g.width() - l.width()) / 2, 10) + "px",
                            bottom: parseInt(f.thumbsWrapperMarginBottom / (f.origWidth / f.width), 10) + "px",
                            top: "auto"
                        }) : l.css({
                            left: parseInt((g.width() - l.width()) / 2, 10) + "px"
                        }) : V(e, f, K, g, B, s, q, r, C, G, p);
                        y.css({
                            left: parseInt((f.width - y.width()) / 2, 10) + "px",
                            top: parseInt((f.height - y.height()) / 2, 10) + "px"
                        });
                        clearTimeout(e.timeoutID);
                        F(1, e, f, K, A, w, b, x, j, g, y, B, s, q, r, C, p, l)
                    }
                },
                300))
            });
            if ("bullets" == a.skin) {
                var D = c(".bottomNavButtonOFF", g);
                D.click(function() {
                    if (!d.slideIsRunning && d.firstLoadingComplete) {
                        d.isVideoPlaying = !1;
                        var e = c(this).attr("rel");
                        d.current_img_no != e && (c(D[d.current_img_no]).removeClass("bottomNavButtonON"), d.previous_current_img_no = d.current_img_no, d.current_img_no = e - 1, F(1, d, a, m, D, n, b, h, j, g, z, thumbsHolder_Thumbs, s, q, r, t, p, l))
                    }
                });
                D.mouseenter(function() {
                    var b = c(this),
                    d = b.attr("rel");
                    if (a.showPreviewThumbs) {
                        E = c('<div class="bottomOverThumb"></div>');
                        b.append(E);
                        var e = c(n[d]).attr("data-bottom-thumb"),
                        f = c(n[P]).attr("data-bottom-thumb"),
                        g = 80,
                        h = -80;
                        P > d && (g = -80, h = 80);
                        E.html("");
                        E.html('<div class="innerBottomOverThumb"><img src="' + f + '"style="margin:0px;" id="oldThumb"><img src="' + e + '" style="margin-top:-80px; margin-left:' + g + 'px;" id="newThumb"></div>');
                        c("#newThumb").stop().animate({
                            marginLeft: "0px"
                        },
                        150,
                        function() {
                            E.html('<div class="innerBottomOverThumb"><img src="' + e + '"></div>')
                        });
                        c("#oldThumb").stop().animate({
                            marginLeft: h + "px"
                        },
                        150,
                        function() {});
                        P = d
                    }
                    b.addClass("bottomNavButtonON")
                });
                D.mouseleave(function() {
                    var b = c(this),
                    e = b.attr("rel");
                    a.showPreviewThumbs && E.remove();
                    d.current_img_no != e && b.removeClass("bottomNavButtonON")
                })
            }
            thumbsHolder_Thumbs.mousedown(function() {
                arrowClicked = !0;
                if (!d.effectIsRunning && d.firstLoadingComplete) {
                    d.isVideoPlaying = !1;
                    var e = c(this).attr("rel");
                    d.current_img_no != e && (c(thumbsHolder_Thumbs[d.current_img_no]).removeClass("thumbsHolder_ThumbON"), d.previous_current_img_no = d.current_img_no, d.current_img_no = e - 1, F(1, d, a, m, D, n, b, h, j, g, z, thumbsHolder_Thumbs, s, q, r, t, p, l))
                }
            });
            thumbsHolder_Thumbs.mouseup(function() {
                arrowClicked = !1
            });
            thumbsHolder_Thumbs.mouseenter(function() {
                var a = c(this);
                a.attr("rel");
                a.addClass("thumbsHolder_ThumbON")
            });
            thumbsHolder_Thumbs.mouseleave(function() {
                var a = c(this),
                b = a.attr("rel");
                d.current_img_no != b && a.removeClass("thumbsHolder_ThumbON")
            });
            q.click(function() {
                d.isCarouselScrolling || (currentCarouselLeft = s.css("left").substr(0, s.css("left").lastIndexOf("px")), 0 > currentCarouselLeft && L(1, s, q, r, a, m, t, d))
            });
            r.click(function() {
                d.isCarouselScrolling || (currentCarouselLeft = s.css("left").substr(0, s.css("left").lastIndexOf("px")), Math.abs(currentCarouselLeft - d.carouselStep) < (t.width() + d.thumbMarginLeft) * m && L( - 1, s, q, r, a, m, t, d))
            });
            "bullets" == a.skin ? c(D[d.current_img_no]).addClass("bottomNavButtonON") : c(thumbsHolder_Thumbs[d.current_img_no]).addClass("thumbsHolder_ThumbON");
            setTimeout(function() {
                c(".myloader", g).css("display", "none");
                S(n, a, b, m);
                d.firstLoadingComplete = !0;
                a.enableTouchScreen && j.draggable("option", "disabled", !1);
                d.arcInitialTime = (new Date).getTime();
                d.mouseOverBanner = !1;
                d.timeElapsed = 0;
                N(d, d.currentImg, a, b, g, h, !1, d.current_img_no);
                0 < a.autoPlay && 1 < m && (a.showCircleTimer && (d.intervalID = setInterval(function() {
                    var b = d,
                    c = a;
                    nowx = (new Date).getTime(); ! b.mouseOverBanner && (!b.effectIsRunning && c.showCircleTimer && !b.slideIsRunning) && (b.ctx.clearRect(0, 0, b.canvas.width, b.canvas.height), b.ctx.beginPath(), b.ctx.globalAlpha = c.behindCircleAlpha / 100, b.ctx.arc(c.circleRadius + 2 * c.circleLineWidth, c.circleRadius + 2 * c.circleLineWidth, c.circleRadius, 0, 2 * Math.PI, !1), b.ctx.lineWidth = c.circleLineWidth + 2, b.ctx.strokeStyle = c.behindCircleColor, b.ctx.stroke(), b.ctx.beginPath(), b.ctx.globalAlpha = c.circleAlpha / 100, b.ctx.arc(c.circleRadius + 2 * c.circleLineWidth, c.circleRadius + 2 * c.circleLineWidth, c.circleRadius, 0, 2 * ((b.timeElapsed + nowx - b.arcInitialTime) / 1E3) / c.autoPlay * Math.PI, !1), b.ctx.lineWidth = c.circleLineWidth, b.ctx.strokeStyle = c.circleColor, b.ctx.stroke())
                },
                125)), d.timeoutID = setTimeout(function() {
                    F(1, d, a, m, D, n, b, h, j, g, z, thumbsHolder_Thumbs, s, q, r, t, p, l)
                },
                1E3 * a.autoPlay))
            },
            1E3 * a.myloaderTime);
            "true" == c(n[d.current_img_no]).attr("data-video") && z.css("display", "block")
        })
    };
    c.fn.parallax_classic.defaults = {
        skin: "bullets",
        width: 918,
        height: 382,
        /* add by z */
        minWidth: null,//918,
        minHeight: null,//382,
        backgroundKeepCenter:!1, //背景图片是否保持100%宽度(适合静态图片展示，焦点图不适用，因为背景图100%宽时高度会等比变小，但焦点元素仍然按原尺寸计算，元素会超出图片区域)
        /* /add by z */
        width100Proc: !1,
        height100Proc: !1,
        autoPlay: 7,
        loop: !0,
        target: "_blank",
        absUrl: "",
        showAllControllers: !0,
        showNavArrows: !0,
        showOnInitNavArrows: !0,
        autoHideNavArrows: !0,
        showBottomNav: !0,
        showOnInitBottomNav: !0,
        autoHideBottomNav: !0,
        showPreviewThumbs: !0,
        enableTouchScreen: !0,
        pauseOnMouseOver: !0,
        showCircleTimer: !0,
        showCircleTimerIE8IE7: !1,
        circleRadius: 10,
        circleLineWidth: 4,
        circleColor: "#FF0000",
        circleAlpha: 100,
        behindCircleColor: "#000000",
        behindCircleAlpha: 50,
        responsive: !1,
        responsiveRelativeToBrowser: !0,
        thumbsWrapperMarginBottom: -35,
        scrollSlideDuration: 0.8,
        scrollSlideEasing: "easeOutQuad",
        numberOfThumbsPerScreen: 0,
        thumbsOnMarginTop: 10,
        defaultEasing: "swing",
        myloaderTime: 4,
        defaultExitLeft: 0,
        defaultExitTop: 0,
        defaultExitDuration: 0,
        defaultExitDelay: 0,
        defaultExitEasing: "swing",
        defaultExitOFF: !1,
        origWidth: 0,
        origHeight: 0,
        origThumbW: 0,
        origThumbH: 0,
        origthumbsHolderWrapperH: 0,
        origWidthThumbsHolderVisibleWrapper: 0,
        windowOrientationScreenSize0: 0,
        windowOrientationScreenSize90: 0,
        windowOrientationScreenSize_90: 0,
        windowCurOrientation: 0
    }
})(jQuery);
