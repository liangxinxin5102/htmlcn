      $('#banner .flexslider').flexslider({
          animation: "slide",
          animationLoop: true,
          slideshow: false,
          prevText:"",
          nextText:"",
          controlNav: false,
          directionNav: true,
          pauseOnHover: true,
          slideshowSpeed: 3000, 
          start:function(slider){

        },
      before: function(){
          $('.flexslider').resize();
      },
      after: function(slider) {
        initState();
          move();
      }
      });
      function initState(){
        $('#banner .animated').each(function(){
          var dataAnimate = $(this).data('animate');
          $(this).removeClass(dataAnimate);
        })
      }
      function move(){
        var h5 = $('#banner .slides li.flex-active-slide').find('h5');
        var h2 = $('#banner .slides li.flex-active-slide').find('h2');
        var h3 = $('#banner .slides li.flex-active-slide').find('h3');
        var h4 = $('#banner .slides li.flex-active-slide').find('h4');
        var h6 = $('#banner .slides li.flex-active-slide').find('h6');
          h5.addClass( h5.data('animate') );
          h2.addClass( h2.data('animate') );
          h3.addClass( h3.data('animate') );
          h4.addClass( h4.data('animate') );
          h6.addClass( h6.data('animate') );
      }
      //第一次的时候执行动画
      $(window).load(function(){
        move();
      })
