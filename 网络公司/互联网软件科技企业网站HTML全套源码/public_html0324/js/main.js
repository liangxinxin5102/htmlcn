//回到顶部
function goTop(){
	$('html,body').animate({'scrollTop':0},600);
}	

$(function(){$.fn.bannerShow=function(g){g=jQuery.extend({wraper:"fshow",autotime:6000,isAuto:true,ind:0,changeColor:null},g||{});return this.each(function(){var o;var n=0;var i=this;var j=$("#bnav"),k=$("li",j);var h=[["#002c4a","#005584"],["#35ac03","#3f4303"],["#ac0908","#cd5726"],["18bbff","#00486b"]];$(this).hover(function(){g.isAuto=false},function(){g.isAuto=true});m(0);k.each(function(p,q){$(q).mouseover(function(){n=p;k.removeClass().eq(n).addClass("current");m(n)})});o=setInterval(function(){if(!g.isAuto){return false}k.each(function(p,q){if($(q).hasClass("current")){n=p}m(n)});if(n==k.size()-1){n=0;m(n);k.removeClass().eq(n).addClass("current")}else{n+=1;m(n);k.removeClass().eq(n).addClass("current")}},g.autotime);function m(p){$(".banners",i).hide();$(".banners",i).eq(p).show();if(g.changeColor){g.changeColor(h[p]).set()}}})};if(!!document.createElement("canvas").getContext){$.getScript("http://im-img.qq.com/pcqq/js/200/cav.js",function(){var t={width:1.5,height:1.5,depth:10,segments:12,slices:6,xRange:0.8,yRange:0.1,zRange:1,ambient:"#525252",diffuse:"#FFFFFF",speed:0.0002};var G={count:2,xyScalar:1,zOffset:100,ambient:"#002c4a",diffuse:"#005584",speed:0.001,gravity:1200,dampening:0.95,minLimit:10,maxLimit:null,minDistance:20,maxDistance:400,autopilot:false,draw:false,bounds:CAV.Vector3.create(),step:CAV.Vector3.create(Math.randomInRange(0.2,1),Math.randomInRange(0.2,1),Math.randomInRange(0.2,1))};var m="canvas";var E="svg";var x={renderer:m};var i,n=Date.now();var L=CAV.Vector3.create();var k=CAV.Vector3.create();var z=document.getElementById("container");var w=document.getElementById("anitOut");var D,I,h,q,y;var g;var r;function C(){F();p();s();B();v();K(z.offsetWidth,z.offsetHeight);o()}function F(){g=new CAV.CanvasRenderer();H(x.renderer)}function H(N){if(D){w.removeChild(D.element)}switch(N){case m:D=g;break}D.setSize(z.offsetWidth,z.offsetHeight);w.appendChild(D.element)}function p(){I=new CAV.Scene()}function s(){I.remove(h);D.clear();q=new CAV.Plane(t.width*D.width,t.height*D.height,t.segments,t.slices);y=new CAV.Material(t.ambient,t.diffuse);h=new CAV.Mesh(q,y);I.add(h);var N,O;for(N=q.vertices.length-1;N>=0;N--){O=q.vertices[N];O.anchor=CAV.Vector3.clone(O.position);O.step=CAV.Vector3.create(Math.randomInRange(0.2,1),Math.randomInRange(0.2,1),Math.randomInRange(0.2,1));O.time=Math.randomInRange(0,Math.PIM2)}}function B(){var O,N;for(O=I.lights.length-1;O>=0;O--){N=I.lights[O];I.remove(N)}D.clear();for(O=0;O<G.count;O++){N=new CAV.Light(G.ambient,G.diffuse);N.ambientHex=N.ambient.format();N.diffuseHex=N.diffuse.format();I.add(N);N.mass=Math.randomInRange(0.5,1);N.velocity=CAV.Vector3.create();N.acceleration=CAV.Vector3.create();N.force=CAV.Vector3.create()}}function K(O,N){D.setSize(O,N);CAV.Vector3.set(L,D.halfWidth,D.halfHeight);s()}function o(){i=Date.now()-n;u();M();requestAnimationFrame(o)}function u(){var Q,P,O,R,T,V,U,S=t.depth/2;CAV.Vector3.copy(G.bounds,L);CAV.Vector3.multiplyScalar(G.bounds,G.xyScalar);CAV.Vector3.setZ(k,G.zOffset);for(R=I.lights.length-1;R>=0;R--){T=I.lights[R];CAV.Vector3.setZ(T.position,G.zOffset);var N=Math.clamp(CAV.Vector3.distanceSquared(T.position,k),G.minDistance,G.maxDistance);var W=G.gravity*T.mass/N;CAV.Vector3.subtractVectors(T.force,k,T.position);CAV.Vector3.normalise(T.force);CAV.Vector3.multiplyScalar(T.force,W);CAV.Vector3.set(T.acceleration);CAV.Vector3.add(T.acceleration,T.force);CAV.Vector3.add(T.velocity,T.acceleration);CAV.Vector3.multiplyScalar(T.velocity,G.dampening);CAV.Vector3.limit(T.velocity,G.minLimit,G.maxLimit);CAV.Vector3.add(T.position,T.velocity)}for(V=q.vertices.length-1;V>=0;V--){U=q.vertices[V];Q=Math.sin(U.time+U.step[0]*i*t.speed);P=Math.cos(U.time+U.step[1]*i*t.speed);O=Math.sin(U.time+U.step[2]*i*t.speed);CAV.Vector3.set(U.position,t.xRange*q.segmentWidth*Q,t.yRange*q.sliceHeight*P,t.zRange*S*O-S);CAV.Vector3.add(U.position,U.anchor)}q.dirty=true}function M(){D.render(I)}function J(O){var Q,N,S=O;var P=function(T){for(Q=0,l=I.lights.length;Q<l;Q++){N=I.lights[Q];N.ambient.set(T);N.ambientHex=N.ambient.format()}};var R=function(T){for(Q=0,l=I.lights.length;Q<l;Q++){N=I.lights[Q];N.diffuse.set(T);N.diffuseHex=N.diffuse.format()}};return{set:function(){P(S[0]);R(S[1])}}}function v(){window.addEventListener("resize",j)}function A(N){CAV.Vector3.set(k,N.x,D.height-N.y);CAV.Vector3.subtract(k,L)}function j(N){K(z.offsetWidth,z.offsetHeight);M()}C();$("#fshow").bannerShow({changeColor:J})})}else{$("#fshow").bannerShow()}$("#copytime").html((new Date()).getFullYear());$("#ovpage").click(function(g){g.preventDefault();$("html, body").animate({scrollTop:$("#container").height()},1000)});var c=function(){};if(typeof(pgvMain)!="function"){var f="http://pingjs.qq.com/tcss.ping.js?v=1";$.getScript(f,function(){if(typeof(pgvMain)=="function"){pgvMain()}c=pgvSendClick;$(".forTcss").click(function(){var g=$(this).attr("name");var h=window.setTimeout(function(){c({hottag:g})},500)})})}window.online_resp=function(g){if(g&&g.c){$("#cur_online").text(g.c.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"));$("#max_online").text(g.h.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"))}};});

$(document).ready(function(){	

	/*banner*/
	$("#mangoShow").kinMaxShow({
		height: 600,
		button: {
		  showIndex: false,
		  normal: { background: 'url(images/fsl_a.png) no-repeat', marginRight: '8px', border: '0', left: '47%', bottom: '0', height: '36px', width: '38px' },
		  focus: { background: 'url(images/fsl_a.jpg) no-repeat', border: '0' }
		},
		callback: function (index, action) {
		switch (index) {
			case 0:
			  if (action == 'fadeIn') {
			      $(this).find('.sub_1_1').animate({ top: '4px' ,opacity : '1'}, 600)
			      $(this).find('.sub_1_2').animate({ bottom: '40px',opacity : '1' }, 600)
			  } else {
			      $(this).find('.sub_1_1').animate({ top: '-163px' ,opacity : '0'}, 600)
			      $(this).find('.sub_1_2').animate({ bottom: '-286px' , opacity : '0'}, 600)
			  };
			  break;

			case 1:
			  if (action == 'fadeIn') {
			      $(this).find('.sub_2_1').animate({ left: '65%' ,opacity : '1'}, 600)
			      $(this).find('.sub_2_2').animate({ left: '48%',opacity : '1' }, 900)
			  } else {
			      $(this).find('.sub_2_1').animate({ left: '100%' ,opacity : '0'}, 600)
			      $(this).find('.sub_2_2').animate({ left: '0' ,opacity : '0'}, 600)
			  };
			  break;

			case 2:
			  if (action == 'fadeIn') {
			      $(this).find('.sub_3_1').animate({ top: '35px' ,opacity : '1'}, 400)
			      $(this).find('.sub_3_2').animate({ top: '310px' ,opacity : '1'}, 800)
			      $(this).find('.sub_3_3').animate({ top: '230px' ,opacity : '1'}, 900)
			  } else {
			      $(this).find('.sub_3_1').animate({ top: '-162px' ,opacity : '0'}, 400)
			      $(this).find('.sub_3_2').animate({ bottom: '-297px',opacity : '0' }, 800)
			      $(this).find('.sub_3_3').animate({ top: '230px'}, 900)
			  };
			  break;
			}
			
		}
		
    });
		
	//6大产品特色
	$(".item").hover(
		function(){
			var that=this;
			item6Timer=setTimeout(function(){
				$(that).find("div").animate({width:167,height:167,left:0,top:0},300,function(){
					$(that).find("h2").fadeOut(200);
					$(that).find("dl").fadeIn(200);
				});
			},100);			
		},
		function(){
			var that=this;
			clearTimeout(item6Timer);
			$(that).find("dl").fadeOut(200);
			$(that).find("div").stop().animate({width:0,height:0,left:84,top:84},300);
			$(that).find("h2").fadeIn(200);
		}
	);
		
	//32大功能
	$(".tabBar").slide({ mainCell:".conWrap", effect:"left", trigger:"click", pnLoop:true });
		
	//案例展示
	var none_unit_width = $(".carou ul li").width();
	var $parent = $(".carou ul");
	$('.right').click(function() {
		if (!$parent.is(":animated")) {
			$parent.animate({
				marginLeft: -none_unit_width - 50 + "px"
			},
			"slow",
			function() {
				$parent.css({
					marginLeft: 0
				}).find("li:first").appendTo($parent);
			});
		}
	});
	$('.left').click(function() {
		if (!$parent.is(":animated")) {
			$parent.css({
				marginLeft: -none_unit_width + "px"
			}).find("li:last").prependTo($parent);
			$parent.animate({
				marginLeft: 0
			},
			"slow");
		}
	});
	$('.cover_right').click(function() {
		if (!$parent.is(":animated")) {
			$parent.animate({
				marginLeft: -none_unit_width - 50 + "px"
			},
			"slow",
			function() {
				$parent.css({
					marginLeft: 0
				}).find("li:first").appendTo($parent);
			});
		}
	});
	$('.cover_left').click(function() {
		if (!$parent.is(":animated")) {
			$parent.css({
				marginLeft: -none_unit_width + "px"
			}).find("li:last").prependTo($parent);
			$parent.animate({
				marginLeft: 0
			},
			"slow");
		}
	});
	 $('.news_con dl dt').shake();
	
	//地图
	$('#dituContent,.contact').hover(function(){
		$(this).find('#mask').stop().animate({'opacity':'0'});
		$('.address').css({'background-color':'#0F496F'});
	},function(){
		$(this).find('#mask').stop().animate({'opacity':'1'});
		$('.address').css({'background-color':''});
	});

	$(".side ul li").hover(function(){
		$(this).find(".sidebox").stop().animate({"width":"124px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#019DD6"})	
	},function(){
		$(this).find(".sidebox").stop().animate({"width":"54px"},200).css({"opacity":"0.8","filter":"Alpha(opacity=80)","background":"#000"})	
	});


});