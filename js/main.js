smoothScroll.init({
	offset: 46
});

$(function() {
	var $window = $(window);
	var $headerImage = $('#header-image');
	var $programBackground = $('#program-background');
	var scrollTop;
	var touchDevice = false;
	var programOffset = 0;
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

			programOffset = (scrollTop - $programBackground.offset().top) / 2;

			$programBackground.css({
				"-webkit-transform": "translate3d(0," + programOffset + "px,0)",
				"-moz-transform": "translate3d(0," + programOffset + "px,0)",
				"-ms-transform": "translate3d(0," + programOffset + "px,0)",
				"-o-transform": "translate3d(0," + programOffset + "px,0)",
				"transform": "translate3d(0," + programOffset + "px,0)"
			});
		}
	});

	/*var map = new GMaps({
	  div: '#gmaps',
	  lat: -12.043333,
	  lng: -77.028333
	});

	map.addMarker({
		lat: -12.043333,
		lng: -77.028333,
		title: 'Lima'
	});*/
	
	var $map = $('#gmaps');
	var $mapImg = $('<img/>');
	function updateMap() {
		var mapUrl = GMaps.staticMapURL({
			size: [$map.width(), $map.height()],
			lat: 61.5009506,
			lng: 23.76100139999994,
			markers: [
				{lat: 61.5009506, lng: 23.76100139999994}
			]
		});
		$mapImg.attr('src', mapUrl)
	}
	updateMap();
	$map.html($mapImg);
	$window.smartresize(updateMap);
});