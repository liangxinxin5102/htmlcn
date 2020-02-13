(function($){
	$.fn.Show = function(){
		var self = $(this);
		var tab = self.find('.font li');
		tab.hover(function(){
			self.find('.info').find("p").removeClass("on");
			tab.removeClass("on");
			$(this).addClass("on");
			var class_name = $(this).data("id");
			$("."+class_name).addClass("on");
		});
		}
	}
)(jQuery);