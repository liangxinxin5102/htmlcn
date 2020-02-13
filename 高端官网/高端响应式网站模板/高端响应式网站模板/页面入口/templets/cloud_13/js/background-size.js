(function(window, $) {
  $.fn.extend({
    background: function(options) {
      var BGX, BGY, PNM, calculate, isIE, position, settings, style;
      BGX = 'backgroundPositionX';
      BGY = 'backgroundPositionY';
      PNM = {
        top: '0%',
        right: '100%',
        bottom: '100%',
        left: '0%',
        center: '50%'
      };
      position = function(el, type, diff, overflow) {
        var calcValue, value;
        value = el[0].currentStyle != null ? el[0].currentStyle[type] : el.css(type);
        if (/px/.test(value)) {
          return -parseInt(value.replace('px', ''));
        } else {
          if (!/%/.test(value)) {
            value = PNM[value];
          }
          if ((type === BGX && overflow === true) || (type === BGY && overflow === false)) {
            return 0;
          }
          calcValue = (parseInt(value.replace('%', ''))) / 100;
          return -(calcValue * diff);
        }
      };
      calculate = function(el, image, k) {
        var elementHeight, elementWidth, extraClass, height, imageHeight, imageWidth, left, newHeight, newWidth, overflow, styleString, top, width;
        imageWidth = image.width();
        imageHeight = image.height();
        if (imageWidth === 0 || imageHeight === 0) {
          setTimeout(function() {
            return calculate(el, image, k);
          }, 5);
          return;
        }
        elementWidth = el.width();
        elementHeight = el.height();
        overflow = elementWidth / imageWidth < elementHeight / imageHeight ? settings.size === 'contain' : settings.size === 'cover';
        width = newWidth = elementWidth;
        height = elementHeight;
        newHeight = imageHeight / (imageWidth / width);
        left = position(el, BGX, 0, overflow);
        top = position(el, BGY, elementHeight - newHeight, overflow);
        if ((settings.size === 'cover' && newHeight < height) || (settings.size === 'contain' && newHeight > height)) {
          newWidth = Math.ceil(imageWidth / (imageHeight / height));
          left = position(el, BGX, elementWidth - newWidth, overflow);
        }
        styleString = 'display:block;position:absolute;left:' + -left + 'px;top:' + -top + 'px;width: ' + newWidth + 'px;clip:rect(' + top + 'px ' + (width + left) + 'px ' + (height + top) + 'px ' + left + 'px);';
        if (settings.isIE && settings.isIE < 8) {
          image.attr('style', styleString);
          if (el.css('position') === 'static') {
            return el.css('position', 'relative');
          }
        } else {
          extraClass = el.css('position') === 'static' ? ".bgs-parent" + k + "{position:relative}" : "";
          return style.append('<style>.bgs' + k + '{' + styleString + '}' + extraClass + '</style>');
        }
      };
      isIE = function() {
        var nav;
        nav = navigator.userAgent.toLowerCase();
        if (nav.indexOf('msie') !== -1) {
          return parseInt(nav.split('msie')[1]);
        } else {
          return false;
        }
      };
      settings = {
        size: 'cover',
        force: false,
        isIE: false
      };
      settings.isIE = isIE();
      settings = $.extend(settings, options);
      if ((!settings.isIE || settings.isIE > 8) && settings.force === false) {
        return this;
      }
      style = $('#bgs-styles');
      if (!style.length) {
        style = $('<div id="bgs-styles"><style>.bgs-image{display:none;}.bgs-parent{background-image:none!important;}</style></div>');
        $('body').append(style);
      }
      this.each(function() {
        var image, path, randomKey, reference, res;
        randomKey = Math.ceil(Math.random() * 100000001);
        reference = $(this);
        res = /url\((.*?)\)/i.exec(reference.css('backgroundImage'));
        if (!res) {
          return console.log("Missing background picture for: <div class=\"" + this.className + "\" />");
        }
        path = res[1];
        image = $('<img src=' + path + ' class="bgs-image bgs' + randomKey + '" />');
        reference.addClass("bgs-parent bgs-parent" + randomKey);
        calculate(reference, image, randomKey);
        reference.append(image);
        reference.size = {
          x: reference.width(),
          y: reference.height()
        };
        $(window).on('resize', function() {
          if (reference.size.x !== reference.width() || reference.size.y !== reference.height()) {
            reference.size = {
              x: reference.width(),
              y: reference.height()
            };
            return calculate(reference, image, randomKey);
          }
        });
      });
      return this;
    }
  });
  $.fn.extend({
    cover: function() {
      this.each(function() {
        $(this).background({
          size: 'cover'
        });
      });
      return this;
    }
  });
  $.fn.extend({
    contain: function() {
      this.each(function() {
        $(this).background({
          size: 'contain'
        });
      });
      return this;
    }
  });
})(window, jQuery);
