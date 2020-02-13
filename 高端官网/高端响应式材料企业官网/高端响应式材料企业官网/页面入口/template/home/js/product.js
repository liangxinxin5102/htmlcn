$('.productImg').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	centerPadding: "620px",
	dots: false,
	centerMode: true,
	focusOnSelect: true,
	responsive: [{
		breakpoint: 1800,
		settings: {
			centerMode: true,
			centerPadding: '550px',
			slidesToShow: 1
		}
	}, {
		breakpoint: 1600,
		settings: {
			centerMode: true,
			centerPadding: '500px',
			slidesToShow: 1
		}
	}, {
		breakpoint: 1440,
		settings: {
			centerMode: true,
			centerPadding: '420px',
			slidesToShow: 1
		}
	}, {
		breakpoint: 1370,
		settings: {
			centerMode: true,
			centerPadding: '350px',
			slidesToShow: 1
		}
	}, {
		breakpoint: 1280,
		settings: {
			centerMode: true,
			centerPadding: '300px',
			slidesToShow: 1
		}
	}, {
		breakpoint: 1024,
		settings: {
			centerMode: true,
			centerPadding: '180px',
			slidesToShow: 1
		}
	}, {
		breakpoint: 860,
		settings: {
			centerMode: false,
			centerPadding: '0',
			slidesToShow: 1
		}
	}]
});
var len = 0;
jQuery(".productImg .item").each(function() {
	var ir = jQuery(this).hasClass("slick-cloned");
	if (!ir) {
		len = len + 1;
	}
});
if (len > 10) {
	jQuery(".control .len").html(len);
} else {
	jQuery(".control .len").html("0" + len);
};
jQuery(".productImg").on('beforeChange', function(event, slick, currentSlide, nextSlide) {
	if ((nextSlide + 1) > 10) {
		jQuery(".control .num").html(nextSlide + 1);
	} else {
		jQuery(".control .num").html("0" + (nextSlide + 1));
	}
});