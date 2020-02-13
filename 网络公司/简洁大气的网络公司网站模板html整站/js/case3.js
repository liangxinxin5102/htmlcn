jQuery.extend(jQuery.easing, {
  easeInOutBack: function(e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158
    }
    if ((f /= h / 2) < 1) {
      return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
    }
    return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
  }
});
$(function(){
  $(".item").hover(function() {
    $(this).addClass("item_hover");
  },
  function() {
    $(this).removeClass("item_hover");
  });
  var flag = $("#cate").attr('data-ajax');
  if (!flag) {
    $("#pagenavi").css("display", "none").before('<div id="ajax-loader"></div>')
  }
  var i = '<img src="'+root+'images/ajax_loading.gif" />',
  x = $("#ajax-loader").html(i),
  s = 5,
  t,
  w = $(window),
  v = 2,
  p = parseInt($("#post-count").text()),
  k = true, 
  gz = true;
  
  
  $("#ajax-loader").css({
    width: 120,
    height: 20,
    margin: "0px auto",
    display: "none"
  });
  $("#case_list").waterfall({
    isResizable: false,
    isAnimated: gz,
	columnCount:4,
    Duration: 500,
    Easing: 'easeInOutBack'
  });
  w.scroll(function() {
    if (flag) return false;
    var d = w.scrollTop(),
    c = $("#footer").offset().top,
    a = w.height(),
	//b = c - d - a;
	
	//减去100，减少滚动高度，更快加载文章内容（Edit by Dream 2013-5-2）
    b = c - d - a-100;
	
    if (k != false && b <= 0) {
      r()
    }
   
  });
  function q() { (s < 0) ? (s = 5, x.html(i), q()) : (x[0].innerHTML += "·", s--, t = setTimeout(q, 200))
  }
  var class_id=$("#class_id").val();
  var keywords=$("#keywords").val();
  function r() {
    if (v <= p) {
      var b = $("#cate").text(),
	  /*首页只显示UED/行业动态分类内容,并排除交互设计、用户研究、设计理念及行业动态分类*/
      a = root+"/Cases/ajax_get_more?class_id="+class_id+"&page=" + v+"&keywords="+encodeURI(keywords);
      $.ajax({
        url: a,
        beforeSend: function() {
          k = false;
          x.fadeIn(200);
          q()
        },
        success: function(d) {
          var c = $(d);
          /*c.find(".post-thumbnail a").colorTip({});*/
          $("#case_list").append(c).waterfall({
            isResizable: false,
            isAnimated: gz,
            Duration: 800,
			columnCount:4,
            Easing: 'easeInOutBack',
            endFn: function() {
              k = true;
              x.fadeOut(500);
              clearTimeout(t);
              $(".item").hover(function() {
                $(this).addClass("item_hover")
              },
              function() {
                $(this).removeClass("item_hover")
              });
              t = null;
              v++
            }
          })
        }
      })
    } else {
      x.css("width", 180).fadeIn(200).html("");
      setTimeout(function() {
        x.fadeOut(500,
        function() {
          k = false
        })
      },
      5000);
      return false
    }
  }
  
   $(window).scroll(function(){
		$(window).scrollTop()>500 ? $("#gotopbtn").css('display','').click(function(){
			$(window).scrollTop(0);
		}):$("#gotopbtn").css('display','none');	
	});
 
});