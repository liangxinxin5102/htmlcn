 $(function(){
          $('#silder').imgSilder({
			s_width:'100%', //容器宽度
			s_height:600, //容器高度
			is_showTit:true, // 是否显示图片标题 false :不显示，true :显示
			s_times:2000, //设置滚动时间
			css_link:'css/style.css'
		});

         // 第一个tab
		$('.box15 em a').mouseover(function(){
			var t2 = $(this).index();
			$('.box15 em a').removeClass();
			$(this).addClass('select');
			$('.box15 ul div').css('display','none');
			$('.box15 ul div').eq(t2).css('display','block');
		})
	});