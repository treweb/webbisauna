smoothScroll.init({
	offset: 46
});

$(function() {
	var $window = $(window);
	var $headerImage = $('#header-image');
	var scrollTop;
	var touchDevice = false;
	$window.on('touchstart', function() {
		touchDevice = true;
	});

	$window.scroll(function() {
		if(!touchDevice) {
			scrollTop = $window.scrollTop();
			$headerImage.css({
				"-webkit-transform": "translate3d(0," + (scrollTop/2) + "px,0)",
				"-moz-transform": "translate3d(0," + (scrollTop/2) + "px,0)",
				"-ms-transform": "translate3d(0," + (scrollTop/2) + "px,0)",
				"-o-transform": "translate3d(0," + (scrollTop/2) + "px,0)",
				"transform": "translate3d(0," + (scrollTop/2) + "px,0)"
			});
		}
	});
});