/**
 * layoutConfig
 *
 * author: Andrei Dinca
 * email: andrei.webdeveloper@gmail.com
 *
 * version 1.0 release date: 23.11.2010
 *
**/

var layoutConfig = {
	o: {
		element : 'div.style', // slideshow html element
		menuElm : 'ul#jDropDown '
	},
	
	// just init
	option:{},
	
	init: function(customOption) {
		var self = this;
		
		// extend default option
		self.option = $.extend({}, self.o, customOption);
		
		// oveserv and init color swich
		self.styleSwich();
		
		// init color piker
		self.colorPicker();
		
		// init ownColor observer
		self.ownColor();
		
		// int initLoweRezolution observer
		self.initLoweRezolution();
	},
	
	// dinamic set custom value
	set_option: function(key, value, key2){
		var self = this;
		
		//self.key = value;
		if(key2 != ""){
			self['option'][key2][key] = value;
		}else{
			self['option'][key] = value;
		}
	},
	
	styleSwich: function(){
		var self = this;
		
		$(self.option.element).click(function(){
			var $this = $(this);
			
			// remove last on
			$(self.option.element).parent('div').find('.on').removeClass('on');
			
			// set current selected
			$this.addClass('on');
			
			// change old class with new one
			$(self.option.menuElm).attr('class', $this.find('span').attr('class'));
		});
	},
	
	colorPicker: function(){
		var self = this;
		
		$('#colorpicker-top, #colorpicker-middle, #colorpicker-bottom').ColorPicker({
			onSubmit: function(hsb, hex, rgb, el) {
				$(el)
					.val(hex)
					.ColorPickerHide()
					.css("background-color", "#" + hex);
			},
			onBeforeShow: function () {
				$(this).ColorPickerSetColor(this.value).css("background-color", "#" + this.value);
			}
		})
		.bind('keyup', function(){
			$(this).ColorPickerSetColor(this.value);
		});
	},
	
	ownColor: function(){
		var self = this;
		
		$("#ownColor").submit(function(){
			var collors = {
				'top' 		: $("#colorpicker-top").val(),
				'middle' 	: $("#colorpicker-middle").val(),
				'bottom'	: $("#colorpicker-bottom").val()
			};

			$(self.option.menuElm).css({
				'background-color' 	: "#" + collors.top,
				'border-color'		: "#" + collors.top,
				
				/* css 3 */
				'background' 	: "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#" + collors.top + "), to(#" + collors.bottom + "), color-stop(.5,#" + collors.middle + "))",
				'background' 	: "-moz-linear-gradient(top, #" + collors.top + " 0%, #" + collors.middle + " 50%, #" + collors.bottom + " 100%)",
			});
			$(self.option.menuElm).find('>li').css({
				'border-color'		: "#" + collors.top
			});

			return false;
		});
		
		$("#getCode").click(function(){
		
			var collors = {
				'top' 		: $("#colorpicker-top").val(),
				'middle' 	: $("#colorpicker-middle").val(),
				'bottom'	: $("#colorpicker-bottom").val()
			};

			$("#getCodeConsole, #fade").remove();
			$("body").append('<div id="getCodeConsole"><h2>Copy your source code:</h2> <span class="close"> Close </span> <pre id="cssCode" style="background-color: #e3e9ec;"></pre></div>');
			$("#getCodeConsole").css({
				'width'			: '645px',
				'height'		: '250px',
				'overflow'		: 'auto',
				'padding'		: '0px',
				'position'		: 'absolute',
				'top'			: '20%',
				'left'			: '50%',
				'margin-left'	: '-480px',
				'z-index'		: 10000001
			});
			
			$("body").append('<div id="fade"></div>');
			$("#fade").css({
				'width'			: '100%',
				'height'		: '100%',
				'position'		: 'absolute',
				'top'			: '0%',
				'left'			: '0%',
				'background'	: '#000',
				'opacity'		: 0.8,
				'z-index'		: 10000000
			});
			
			// create temporary css file
			var str = '';
				str += "/* Your custom color */ \n .customColor { \n";
				str += "\t background-color: #" + collors.top + ";\n";
				str += "\t border-color: #" + collors.top + ";\n";
				str += "\t/* css 3 */\n";
				str += "\t background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#" + collors.top + "), to(#" + collors.bottom + "), color-stop(.5,#" + collors.middle + "));\n";
				str += "\t background: -moz-linear-gradient(top, #" + collors.top + " 0%, #" + collors.middle + " 50%, #" + collors.bottom + " 100%);\n";
				str += "}\n";
				str += "\n";
				str += "ul.customColor > li  {#" + collors.top + ";}\n";
				
			$("#cssCode").html(str);
			return false;
		});
		
		// live because in document ready elements ".close" not exist
		$("#getCodeConsole .close, #fade").live('click',function(){
			$("#getCodeConsole").fadeOut(400);
			$("#fade").fadeOut(100);
			return false;
		});
	},
	
	initLoweRezolution: function(){
		if($(window).width() < 1562){
			$("div.colorSwich").css({
				zIndex: 2,
				left: "-270px"
			});
			
			$(".colorpicker").css('z-index', 1000);
			
			$(".slideBtn").click(function(){	
				if(parseInt($("div.colorSwich").css('left')) < 0){
					$("div.colorSwich").css('left', '10px');
					$(this).removeClass('open').addClass('close');
				}else{
					$("div.colorSwich").css('left', "-270px");
					$(this).removeClass('close').addClass('open');
				}
				return false;
			});
		}else{
			$("div.colorSwich").find('.slideBtn').remove();
		}
	}
	
};

$(document).ready(function(){

	layoutConfig.init();
});