smoothScroll.init({
	offset: 46
});

$(function() {
	var $window = $(window);

	var headerImg = new Image();
	$(headerImg).load(function() {
		$('body').addClass('loaded');
	});
	headerImg.src = "img/header-bg.jpg";

	// Parallax scrolling (disabled on touch devices)
	if(!Modernizr.touch) {
		var $headerImage = $('#header-image');
		//var $programBackground = $('#program-background');
		var scrollTop;
		//var programOffset = 0;
		$window.scroll(function() {
			scrollTop = $window.scrollTop();
			$headerImage.css({
				"-webkit-transform": "translate3d(0," + (scrollTop/2) + "px,0)",
				"-moz-transform": "translate3d(0," + (scrollTop/2) + "px,0)",
				"-ms-transform": "translate3d(0," + (scrollTop/2) + "px,0)",
				"-o-transform": "translate3d(0," + (scrollTop/2) + "px,0)",
				"transform": "translate3d(0," + (scrollTop/2) + "px,0)"
			});
			/*
			programOffset = (scrollTop - $programBackground.offset().top) / 2;

			$programBackground.css({
				"-webkit-transform": "translate3d(0," + programOffset + "px,0)",
				"-moz-transform": "translate3d(0," + programOffset + "px,0)",
				"-ms-transform": "translate3d(0," + programOffset + "px,0)",
				"-o-transform": "translate3d(0," + programOffset + "px,0)",
				"transform": "translate3d(0," + programOffset + "px,0)"
			});*/
		});
	}
	
	// Map
	var $map = $('#gmaps');
	var $mapImg = $('<img/>');
	var mapUrl;
	function updateMap() {
		mapUrl = GMaps.staticMapURL({
			size: [$map.width(), $map.height()],
			lat: 61.5009506,
			lng: 23.76100139999994,
			markers: [
				{lat: 61.5009506, lng: 23.76100139999994}
			]
		});
		$mapImg.attr('src', mapUrl);
	}
	updateMap();
	$map.html($mapImg);
	$window.smartresize(updateMap);
});