(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {


    function getMat(color){
      // our material is a phong material, with no shininess (highlight) and a black specular
      return new THREE.MeshStandardMaterial({
        color:color,
        roughness:.9,
        transparent: true,
        opacity: 0,
        emissive:0x270000,
        shading:THREE.FlatShading
      });
    }

    var Colors = {
      red : 0xf85051,
      orange: 0xea8962,
      yellow: 0xdacf75,
      beige: 0xccc58f,
      grey: 0xbab7a1,
      blue: 0x4379a8,
      ocean: 0x4993a8,
      green: 0x24a99b
    };

    var colorsLength = Object.keys(Colors).length;

    function randomRange(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    function getRandomColor(){
      var colIndx = Math.floor(Math.random()*colorsLength);
      var colorStr = Object.keys(Colors)[colIndx];
      return Colors[colorStr];
    }

    function shiftPosition(pos, radius){
      if(Math.abs(pos) < radius){
        if(pos >= 0){
          return pos + radius;
        } else {
          return pos - radius;
        }
      } else {
        return pos;
      }
    }

    // Default parameters
    var parameters = {
      minRadius : 30,
      maxRadius : 50,
      minSpeed:.015,
      maxSpeed:.025,
      particles:500,
      minSize:.1,
      maxSize:2
    };

    // For a THREEJS project we need at least
    // a scene
    // a renderer
    // a camera
    // a light (1 or many)
    // a mesh (an object to display)

    var scene, renderer, camera, light;
    var stars = [];
    var nbPlanetsMax = 4;
    var planets = [];
    var WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight;


    // initialise the world
    function initWorld(){
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, WIDTH/HEIGHT, .1, 2000);
      camera.position.z = 100;

      //
      // THE RENDERER
      //
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      });
      renderer.setSize(WIDTH, HEIGHT);
      renderer.shadowMap.enabled = true;

      container = document.getElementById('universe');
      container.appendChild(renderer.domElement);


      // Lights
      ambientLight = new THREE.AmbientLight(0x663344,2);
      scene.add(ambientLight);

      light = new THREE.DirectionalLight(0xffffff, 1.5);
      light.position.set(200,100,200);
      light.castShadow = true;
      light.shadow.camera.left = -400;
      light.shadow.camera.right = 400;
      light.shadow.camera.top = 400;
      light.shadow.camera.bottom = -400;
      light.shadow.camera.near = 1;
      light.shadow.camera.far = 1000;
      light.shadow.mapSize.width = 2048;
      light.shadow.mapSize.height = 2048;

      scene.add(light);


      //
      // HANDLE SCREEN RESIZE
      //
      window.addEventListener('resize', handleWindowResize, false);

      // Creating firts planets
      for(var i = 0; i < nbPlanetsMax; i++){
        planets.push(new Planet(-2000/nbPlanetsMax * i - 500));
      }
      addStarts();
      loop();

  }

  function animateStars(z) {

  // loop through each star
    for(var i=0; i<stars.length; i++) {

      star = stars[i];
      // if the particle is too close move it to the back
      if(star.position.z>z) star.position.z-=2000;

    }

  }

  function addStarts(){

      for ( var z= -2000; z < 0; z+=20 ) {

        var geometry   = new THREE.SphereGeometry(0.5, 32, 32)
        var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
        var sphere = new THREE.Mesh(geometry, material)

        sphere.position.x = randomRange(-1 * Math.floor(WIDTH/2),Math.floor(WIDTH/2));
        sphere.position.y = randomRange(-1 * Math.floor(HEIGHT/2),Math.floor(HEIGHT/2));

        // Then set the z position to where it is in the loop (distance of camera)
        sphere.position.z = z;

        // scale it up a bit
        sphere.scale.x = sphere.scale.y = 2;

        //add the sphere to the scene
        scene.add( sphere );

        //finally push it to the stars array
        stars.push(sphere);
      }
  }

  var Planet = function(z){
    // the geometry of the planet is a tetrahedron
    this.planetRadius = randomRange(12,30);
    var planetDetail = randomRange(2,3);
    var geomPlanet = new THREE.TetrahedronGeometry(this.planetRadius, planetDetail);

    var noise = randomRange(1,5);
    for(var i=0; i<geomPlanet.vertices.length; i++){
      var v = geomPlanet.vertices[i];
      v.x += -noise/2 + Math.random()*noise;
      v.y += -noise/2 + Math.random()*noise;
      v.z += -noise/2 + Math.random()*noise;
    }

    // create a new material for the planet
    var color = getRandomColor();
    var matPlanet = getMat(color);
    // create the mesh of the planet
    this.planet = new THREE.Mesh(geomPlanet, matPlanet);

    this.ring = new THREE.Mesh();
    this.nParticles = 0;

    // create the particles to populate the ring
    this.updateParticlesCount();

    // Create a global mesh to hold the planet and the ring
    this.mesh = new THREE.Object3D();
    this.mesh.add(this.planet);
    this.mesh.add(this.ring);

    this.planet.castShadow = true;
    this.planet.receiveShadow = true;

    // update the position of the particles => must be moved to the loop
    this.mesh.rotation.x = (Math.random()*2-1) * 2 * Math.PI;
    this.mesh.rotation.z = (Math.random()*2-1) * 2 * Math.PI;

    var posX = randomRange(-1 * Math.floor(WIDTH/4),Math.floor(WIDTH/4));
    var posY = randomRange(-1 * Math.floor(HEIGHT/4),Math.floor(HEIGHT/4));
    posX = shiftPosition(posX, this.planetRadius);
    posY = shiftPosition(posY, this.planetRadius);

    this.mesh.position.set(posX,posY,z);
    scene.add(this.mesh);
  }
  Planet.prototype.destroy = function(){
    scene.remove( this.mesh );
  }
  Planet.prototype.updateParticlesCount = function(){
    var parameters = {
      minRadius : randomRange(this.planetRadius + 10 , 60),
      maxRadius : randomRange(40,70),
      minSpeed: randomRange(0,5)*0.1 + randomRange(0,9) * 0.01,
      maxSpeed: randomRange(0,5)*0.1 + randomRange(0,9) * 0.01,
      particles: randomRange(0,1) * randomRange(20,30),
      minSize: randomRange(1,3) + randomRange(0,9) * 0.1,
      maxSize: randomRange(1,3) + randomRange(0,9) * 0.1
    };

    if (this.nParticles < parameters.particles){
      // Remove particles
      for (var i=this.nParticles; i< parameters.particles; i++){
        var p = new Particle();
        p.mesh.rotation.x = Math.random()*Math.PI;
        p.mesh.rotation.y = Math.random()*Math.PI;
        p.mesh.position.y = -2 + Math.random()*4;
        this.ring.add(p.mesh);
      }
    }else{
      // add particles
      while(this.nParticles > parameters.particles){
        var m = this.ring.children[this.nParticles-1];
        this.ring.remove(m);
        m.userData.po = null;
        this.nParticles--;
      }
    }
    this.nParticles = parameters.particles;

    // We will give a specific angle to each particle
    // to cover the whole ring we need to
    // dispatch them regularly
    this.angleStep = Math.PI*2/this.nParticles;
    this.updateParticlesDefiniton();
  }

  // Update particles definition
  Planet.prototype.updateParticlesDefiniton = function(){

    for(var i=0; i<this.nParticles; i++){
      var m = this.ring.children[i];
      var s = parameters.minSize + Math.random()*(parameters.maxSize - parameters.minSize);
      m.scale.set(s,s,s);

      // set a random distance
      m.userData.distance = parameters.minRadius +  Math.random()*(parameters.maxRadius-parameters.minRadius);

      // give a unique angle to each particle
      m.userData.angle = this.angleStep*i;
      // set a speed proportionally to the distance
      m.userData.angularSpeed = rule3(m.userData.distance,parameters.minRadius,parameters.maxRadius,parameters.minSpeed, parameters.maxSpeed);
    }
  }

  var Particle = function(){
    // Size of the particle, make it random
    var s = 1;

    // geometry of the particle, choose between different shapes
    var geom,
    random = Math.random();

    if (random<.25){
      // Cube
      geom = new THREE.BoxGeometry(s,s,s);

    }else if (random < .5){
      // Pyramid
      geom = new THREE.CylinderGeometry(0,s,s*2, 4, 1);

    }else if (random < .75){
      // potato shape
      geom = new THREE.TetrahedronGeometry(s,2);

    }else{
      // thick plane
      geom = new THREE.BoxGeometry(s/6,s,s); // thick plane
    }
    // color of the particle, make it random and get a material
    var color = getRandomColor();
    var mat = getMat(color);

    // create the mesh of the particle
    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.receiveShadow = true;
    this.mesh.castShadow = true;
    this.mesh.userData.po = this;
  }


  // Update particles position
  Planet.prototype.updateParticlesRotation = function(){

    // increase the rotation of each particle
    // and update its position

    for(var i=0; i<this.nParticles; i++){
      var m = this.ring.children[i];
      // increase the rotation angle around the planet
      m.userData.angle += m.userData.angularSpeed;

      // calculate the new position
      var posX = Math.cos(m.userData.angle)*m.userData.distance;
      var posZ = Math.sin(m.userData.angle)*m.userData.distance;
      m.position.x = posX;
      m.position.z = posZ;

      //*
      // add a local rotation to the particle
      m.rotation.x += Math.random()*.05;
      m.rotation.y += Math.random()*.05;
      m.rotation.z += Math.random()*.05;
      //*/
    }
  }

  function addPlanet(z){
    planets.push(new Planet(z));
  }

  function loop(){
    var horizon = - 2000 + camera.position.z;
    for(var i = 0; i < planets.length; i++){
      if(planets[i].mesh.position.z > camera.position.z){
        planets[i].destroy();
        planets.splice(i, 1);
      }

      // If the planet is arriving
      if(planets[i].mesh.position.z > horizon && planets[i].planet.material.opacity < 1){
        planets[i].planet.material.opacity += 0.005;
        for(var j=0; j< planets[i].mesh.children[1].children.length; j++){
          planets[i].mesh.children[1].children[j].material.opacity += 0.005;
        }
      }
    }


    // Adding stars
    animateStars(camera.position.z);

    if(planets.length < nbPlanetsMax){
      addPlanet(camera.position.z - 2000);
    }

    for(var i = 0; i < planets.length; i++){
      planets[i].planet.rotation.y-= 0.01;
      planets[i].updateParticlesRotation();
    }

    camera.position.z -= 3;

    //
    // RENDER !
    //
    renderer.render(scene, camera);

    //
    // REQUEST A NEW FRAME
    //
    requestAnimationFrame(loop);
  }

  function handleWindowResize() {
    // Recalculate Width and Height as they had changed
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;

    // Update the renderer and the camera
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
  }



  initWorld();




  function rule3(v,vmin,vmax,tmin, tmax){
    var nv = Math.max(Math.min(v,vmax), vmin);
    var dv = vmax-vmin;
    var pc = (nv-vmin)/dv;
    var dt = tmax-tmin;
    var tv = tmin + (pc*dt);
    return tv;

  }
}());
},{}],2:[function(require,module,exports){
(function() {
    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    var myChart2 = echarts.init(document.getElementById('main2'));
    var myChart3 = echarts.init(document.getElementById('main3'));

//指定图表的配置项和数据
    var option = {
        title : {
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '占比',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:343, name:'10K-15K',itemStyle: { normal: {color: '#C8D94A',}}},
                    {value:242, name:'15K-20K',itemStyle: { normal: {color: '#80DF64',}}},
                    {value:152, name:'20K-30K',itemStyle: { normal: {color: '#ED831B',}}},
                    {value:21, name:'30K-50K',itemStyle: { normal: {color: '#64645B',}}},
                    {value:15, name:'其他',itemStyle: { normal: {color: '#64E572',}}},
                    {value:140, name:'其他',itemStyle: { normal: {color: '#D6D6B4',}}},
                    {value:130, name:'其他',itemStyle: { normal: {color: '#24cbe5',}}}
                ],
                label: {
                    normal: {
                        textStyle: {
                            color: '#333'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#333'
                        }
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.3)'
                    }
                },

            }
        ]
    };
    var option2 = {
        textStyle: {
            color: '#FFF45C',
        },
        itemStyle: {
            normal: {
                color: '#FFF45C'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} : {c}K'
        },
        xAxis: {
            type: 'category',
            name: 'x',
            splitLine: {show: false},
            data: [
                {value: '应届毕业生',textStyle: {fontSize: 16,}},
                {value: '',textStyle: {fontSize: 16,}},
                {value: '3-5年',textStyle: {fontSize: 16,}},
                {value: '',textStyle: {fontSize: 16,}},
                {value: '8-10年',textStyle: {fontSize: 16,}}
            ],
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
        },
        yAxis: {
            name: '(单位：K)',
            axisLine: {
                lineStyle: {
                    color: '#041527'
                }
            }
        },
        series: [
            {
                name: '平均薪资',
                type: 'line',
                data: [5, 11, 15, 18, 25,]
            }
        ]
    };
    var option3 = {
        textStyle: {
            color: '#FFF45C',
        },
        itemStyle: {
            normal: {
                color: '#FFF45C'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} : {c}K'
        },
        xAxis: {
            type: 'category',
            name: 'x',
            splitLine: {show: false},
            data: [
                {value: '2010',textStyle: {fontSize: 16,}},
                {value: '2011',textStyle: {fontSize: 16,}},
                {value: '2012',textStyle: {fontSize: 16,}},
                {value: '2013',textStyle: {fontSize: 16,}},
                {value: '2014',textStyle: {fontSize: 16,}},
                {value: '2015',textStyle: {fontSize: 16,}}
            ],
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            name: '(单位：K)',
            axisLine: {
                lineStyle: {
                    color: '#041527'
                }

            }
        },
        series: [
            {
                name: '平均薪资',
                type: 'line',
                data: [4, 6.5, 7, 8.5, 9.9, 13,]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    myChart2.setOption(option2);
    myChart3.setOption(option3);
}());
},{}],3:[function(require,module,exports){
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

},{}],4:[function(require,module,exports){
(function(){
	var fsBanner = function(container,options) {
		var self = this;

		var defaults = {
			'showName':true,
			'toUpdate':{},
			'whenEmpty':{},
			'trigger':'click',
			'hideParent':null,
			'onChanged':null
		}

		this.options = $.extend({}, defaults, options);

		this.ilast = -1;

		this.setup = function() {
			this.container = $(container);
			this.items = this.container.find('div');

			if (!this.container.width()) this.container.width(this.container.parent().width());

			this.part = this.container.width() / this.items.length;
			this.mini = this.part/4;
			this.widmain = this.container.width() - (this.mini*this.items.length-1);

			this.items.css({'height':this.container.height(),'width':this.widmain+this.mini});

			if (!this.options.showName) this.items.find('.name').hide();

			this.items.each(function(i) {
				var $item = $(this);
				$item.css({'z-index':i});
				if (self.options.trigger == 'click') $item.on('click',function() { self.selectItem($item,i); });
				if (self.options.trigger == 'mouse') $item.on('mouseenter',function() { self.selectItem($item,i,true); });
			});

			if (self.options.trigger == 'mouse') {
				this.container.on('mouseleave',function() { self.resetcss(); });
			}

			this.resetcss();
			this.container.show();
		}

		this.resetcss = function() {
			this.items.each(function(i) {
				var $item = $(this);
				$item.stop().animate({'left':i*self.part});

				if (self.options.showName) {
					var $name = $item.find('.name');
					if ($name.hasClass('minimized')) $name.hide().removeClass('minimized').fadeIn('fast');
				}
			});
			this.ilast = null;
			this.updateHtml();
		};

		this.selectItem = function($expanded,iexpanded,forceClick) {
			this.$lastexpanded = this.$expanded;

			if (forceClick) this.ilast = null;
			if (iexpanded == this.ilast) {
				this.$expanded = null;
				this.resetcss();
			} else {
				this.$expanded = $expanded;
				this.items.each(function(i) {
					var $item = $(this);
					if (i <= iexpanded) {
						$item.stop().animate({'left':i*self.mini});
					} else {
						$item.stop().animate({'left':i*self.mini+self.widmain});
					}
					if (self.options.showName) {
						var $name = $item.find('.name');
						var method = (i == iexpanded) ? 'removeClass' : 'addClass';
						if (method == 'addClass' && $name.hasClass('minimized')) method = '';
						if (method) $name.hide()[method]('minimized').fadeIn('fast');
					}
				});
				this.ilast = iexpanded;
				this.updateHtml($expanded);
			}
			this.fireChanged();
		};

		this.updateHtml = function($expanded) {
			this.$expanded = $expanded;

			var $parent = $(self.options.hideParent);
			$.each(this.options.toUpdate,function(field,selector) {
				var $obj = $(selector);
				var showit = false;
				var value = '';
				if ($expanded) {
					$parent.show();
					value = $expanded.find('.'+field).html();
					showit = true;
				} else {
					if ($parent.length) {
						showit = false;
						$parent.hide();
					} else {
						if (self.options.whenEmpty[field]) {
							value = self.options.whenEmpty[field];
							showit = true;
						}
					}
				}
				$obj.hide();
				if (showit) $obj.html(value).fadeIn('fast');
			});
		};

		this.fireChanged = function() {
			if (this.options.onChanged) {
				this.options.onChanged(this.$expanded,this.$lastexpanded);
			}
		};

		this.setup();
	};

	$.fn.fsBanner = function(options) {
		return new fsBanner(this,options);
	};
}());
},{}],5:[function(require,module,exports){
(function(){
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };
    $(window).parallaxmouse({
        invert: true,
        range: 400,
        elms: [
            {el: $('#star1'), rate: 0.2},
            {el: $('#star2'), rate: 0.2},
            {el: $('#star3'), rate: 0.2},
            {el: $('#star4'), rate: 0.2},
            {el: $('#star5'), rate: 0.2},
            {el: $('#planet'), rate: 0.3},
            {el: $('#robot'), rate: 0.4},
            {el: $('#astronaut'), rate: 0.48},
            {el: $('#asteroid'), rate: 0.7}
        ]
    });
    (function($){
        $.fn.extend({
            Scroll:function(opt,callback){
                //参数初始化
                if(!opt) var opt={};
                var _this=this.eq(0).find("table:first");
                var lineH=_this.find("tr:first").height(), //获取行高
                    line=opt.line?parseInt(opt.line,10):parseInt(this.height()/lineH,10),
                    speed=opt.speed?parseInt(opt.speed,10):5000, //卷动速度，数值越大，速度越慢（毫秒）
                    timer=opt.timer?parseInt(opt.timer,10):5000; //滚动的时间间隔（毫秒）
                if(line==0) line=1;
                var upHeight=0-line*lineH;
                //滚动函数
                scrollUp=function(){
                    _this.animate({
                        marginTop:upHeight
                    },speed,function(){
                        for(i=1;i<=line;i++){
                            _this.find("tr:first").appendTo(_this);
                        }
                        _this.css({marginTop:0});
                    });
                }
                //鼠标事件绑定
                _this.hover(function(){
                    clearInterval(timerID);
                },function(){
                    timerID=setInterval("scrollUp()",timer);
                }).mouseout();
            }
        })
    })(jQuery);
    $(function(){
        $("#scrollDiv").Scroll({line:1,speed:500,timer:1000});
        $('#demo-3').fsBanner({'trigger':'mouse'});
        $(".box6 li").mouseenter(function(){
            $(this).addClass("cur").siblings().removeClass("cur");
            $(".box6 .imgbox img").stop().eq($(this).index()).slideDown().siblings().hide();
        })
        $(".box9 .list ul li").mouseenter(function(){
            $(this).addClass("cur").siblings().removeClass("cur");
            $(".tabbox .tab_list").stop().eq($(this).index()).show().siblings().hide();
        })
        var winh=$("document").height();
        $("zhe").css("height",winh+"px");
        $(".tt-grid li").click(function(){
            var liimg = $(this).find("img").attr("alt");
            $(".zhe").show().siblings(".xyzp").show();
            $("."+liimg).slideDown();
        })
        $(".a_kc").click(function(){
            $(".box9").slideDown();
        })
        $(".xyzp").click(function(){
            $(".zhe").slideUp('fast');
            $(this).hide().children("img").hide();
        })
        $(".zhe").click(function(){
            $(".xyzp").slideUp('fast');
            $(this).hide().children("img").hide();
        })
        $('.ban').on('mousemove', function(e) {
            var offsetX = e.clientX / window.innerWidth - 0.5,
                offsetY = e.clientY / window.innerHeight - 0.5;
            var _left = -40 * offsetX;    //如果想动的幅度更大，可以调整 -40 的值
            var _top = -40 * offsetY;     //如果想动的幅度更大，可以调整 -40 的值
            //应用公式
            $('.ban .move').css('left',_left*1.4).css('top',_top*0.4);  //将您的left值和top值先+此数值，*的小数越大，动的越大，否则越小
        });
    });
}());

},{}],6:[function(require,module,exports){
(function(){
    var nodes = document.querySelectorAll('.li_3d'), _nodes = [].slice.call(nodes, 0);
    var getDirection = function (ev, obj) {
        var w = obj.offsetWidth, h = obj.offsetHeight, x = ev.pageX - obj.offsetLeft - w / 2 * (w > h ? h / w : 1), y = ev.pageY - obj.offsetTop - h / 2 * (h > w ? w / h : 1), d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
        return d;
    };
    var addClass = function (ev, obj, state) {
        var direction = getDirection(ev, obj), class_suffix = '';
        obj.className = '';
        switch (direction) {
            case 0:
                class_suffix = '-top';
                break;
            case 1:
                class_suffix = '-right';
                break;
            case 2:
                class_suffix = '-bottom';
                break;
            case 3:
                class_suffix = '-left';
                break;
        }
        obj.classList.add(state + class_suffix);
    };
    _nodes.forEach(function (el) {
        el.addEventListener('mouseover', function (ev) {
            addClass(ev, this, 'in');
        }, false);
        el.addEventListener('mouseout', function (ev) {
            addClass(ev, this, 'out');
        }, false);
    });
}());
},{}],7:[function(require,module,exports){
(function() {

	'use strict';

	// some dummy data to play with..
	var allImages = {
		page1 : ['<a href="javacript:;"><img src="images/1.jpg" alt="img01"/></a>','<a href="javacript:;"><img src="images/2.jpg" alt="img02"/></a>','<a href="javacript:;"><img src="images/3.jpg" alt="img03"/></a>','<a href="javacript:;"><img src="images/4.jpg" alt="img04"/></a>','<a href="javacript:;"><img src="images/5.jpg" alt="img05"/></a>','<a href="javacript:;"><img src="images/6.jpg" alt="img06"/></a>'],
		page2 : ['<a href="javacript:;"><img src="images/7.jpg" alt="img07"/></a>','<a href="javacript:;"><img src="images/8.jpg" alt="img08"/></a>','<a href="javacript:;"><img src="images/9.jpg" alt="img09"/></a>','<a href="javacript:;"><img src="images/10.jpg" alt="img10"/></a>','<a href="javacript:;"><img src="images/11.jpg" alt="img11"/></a>','<a href="javacript:;"><img src="images/12.jpg" alt="img12"/></a>'],
		page3 : ['<a href="javacript:;"><img src="images/13.jpg" alt="img13"/></a>','<a href="javacript:;"><img src="images/14.jpg" alt="img14"/></a>','<a href="javacript:;"><img src="images/15.jpg" alt="img15"/></a>','<a href="javacript:;"><img src="images/16.jpg" alt="img16"/></a>','<a href="javacript:;"><img src="images/17.jpg" alt="img17"/></a>','<a href="javacript:;"><img src="images/18.jpg" alt="img18"/></a>'],

	};

	// http://coveroverflow.com/a/11381730/989439
	function mobilecheck() {
		var check = false;
		(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	}

	var animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		},
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		// event type (if mobile use touch events)
		eventtype = mobilecheck() ? 'touchstart' : 'click',
		// support for css animations
		support = Modernizr.cssanimations;

	function onAnimationEnd( elems, len, callback ) {
		var finished = 0,
			onEndFn = function() {
				this.removeEventListener( animEndEventName, onEndFn );
				++finished;
				if( finished === len ) {
					callback.call();
				}
			};

		elems.forEach( function( el,i ) { el.querySelector('a').addEventListener( animEndEventName, onEndFn ); } );
	}

	function init() {
		[].forEach.call( document.querySelectorAll( '.tt-grid-wrapper' ), function( el ) {

			var grid = el.querySelector( '.tt-grid' ),
				items = [].slice.call( grid.querySelectorAll( 'li' ) ),
				navDots = [].slice.call( el.querySelectorAll( 'nav > a' ) ),
				isAnimating = false,
				current = 0;

			navDots.forEach( function( el, i ) {
				el.addEventListener( eventtype, function( ev ) {
					if( isAnimating || current === i ) return false;
					ev.preventDefault();
					isAnimating = true;
					updateCurrent( i );
					loadNewSet( i );
				} );
			} );

			function updateCurrent( set ) {
				classie.remove( navDots[ current ], 'tt-current' );
				classie.add( navDots[ set ], 'tt-current' );
				current = set;
			}

			// this is just a way we can test this. You would probably get your images with an AJAX request...
			function loadNewSet( set ) {
				var newImages = allImages.page1;
				switch( set ) {
					case 1 : newImages = allImages.page2; break;
					case 2 : newImages = allImages.page3; break;
					default : newImages = allImages.page1; break;
				};

				items.forEach( function( el ) {
					var itemChild = el.querySelector( 'a' );
					// add class "tt-old" to the elements/images that are going to get removed
					if( itemChild ) {
						classie.add( itemChild, 'tt-old' );
					}
				} );

				// apply effect
				setTimeout( function() {
					
					// append new elements
					[].forEach.call( newImages, function( el, i ) { items[ i ].innerHTML += el; } );

					// add "effect" class to the grid
					classie.add( grid, 'tt-effect-active' );
					
					// wait that animations end
					var onEndAnimFn = function() {
						// remove old elements
						items.forEach( function( el ) {
							// remove old elems
							var old = el.querySelector( 'a.tt-old' );
							if( old ) { el.removeChild( old ); }
							// remove class "tt-empty" from the empty items
							classie.remove( el, 'tt-empty' );
							// now apply that same class to the items that got no children (special case)
							if ( !el.hasChildNodes() ) {
								classie.add( el, 'tt-empty' );
							};
						} );
						// remove the "effect" class
						classie.remove( grid, 'tt-effect-active' );
						isAnimating = false;
					};
					if( support ) {
						onAnimationEnd( items, items.length, onEndAnimFn );
					}
					else {
						onEndAnimFn.call();
					}
				}, 25 );				
			}
		} );
	}	
	init();
})();
},{}],8:[function(require,module,exports){
'use strict';

/*
 * 依赖库
 * */
/*
 var $ = jQuery = require('./lib/jQuery.min.js');
 require('./lib/three.min.js');
 require('./lib/echarts.min.js');
 require('./lib/wow.min.js');
 require('./lib/jquery.parallaxmouse.min.js');
 require('./lib/modernizr.custom.js');
 */

require('../../commom/js/ban_3d.js');
require('../../commom/js/chart.js');
require('../../commom/js/classie.js');
require('../../commom/js/fsbanner.js');
require('../../commom/js/parallax.js');
require('../../commom/js/teacher.js');
require('../../commom/js/thumbnailGridEffects.js');


},{"../../commom/js/ban_3d.js":1,"../../commom/js/chart.js":2,"../../commom/js/classie.js":3,"../../commom/js/fsbanner.js":4,"../../commom/js/parallax.js":5,"../../commom/js/teacher.js":6,"../../commom/js/thumbnailGridEffects.js":7}]},{},[8]);
