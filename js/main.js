smoothScroll.init({
	offset: 46
});

$(function() {
	var $window = $(window);
	var $body = $('body')



  function removeHash () {
      var scrollV, scrollH, loc = window.location;
      if ("pushState" in history)
          history.pushState("", document.title, loc.pathname + loc.search);
      else {
          // Prevent scrolling by storing the page's current scroll offset
          scrollV = document.body.scrollTop;
          scrollH = document.body.scrollLeft;

          loc.hash = "";

          // Restore the scroll offset, should be flicker free
          document.body.scrollTop = scrollV;
          document.body.scrollLeft = scrollH;
      }
  }

	var $codeOfConduct = $('#code-of-conduct')

	var showConduct = function() {
		$codeOfConduct.addClass('visible');
		$body.addClass('modal-visible');
		window.location.hash = 'conduct';
	}

	$('.show-code-of-conduct').click(function(e) {
		e.preventDefault();
		showConduct();
		return false;
	});

	$codeOfConduct.find('.modal-overlay, .modal-close-icon').click(function() {
		$codeOfConduct.removeClass('visible');
		$body.removeClass('modal-visible');
		removeHash();
	})

	if(window.location.hash == '#conduct') {
		showConduct();
	}

	var headerImg = new Image();
	$(headerImg).load(function() {
		$body.addClass('loaded');
	});
	headerImg.src = "img/header-bg-v2.jpg";

	// Parallax scrolling
	var $headerImage = $('#header-image');
	var scrollTop;
	$window.scroll(function() {
		scrollTop = $window.scrollTop();
		$headerImage.css({
			"-webkit-transform": "translate3d(0," + (scrollTop/2) + "px,0)",
			"-moz-transform": "translate3d(0," + (scrollTop/2) + "px,0)",
			"-ms-transform": "translate3d(0," + (scrollTop/2) + "px,0)",
			"-o-transform": "translate3d(0," + (scrollTop/2) + "px,0)",
			"transform": "translate3d(0," + (scrollTop/2) + "px,0)"
		});
	});

	// Map
	var $map = $('#gmaps');
	var $mapImg = $('<img/>');
	var mapUrl;
	function updateMap() {
		mapUrl = GMaps.staticMapURL({
			size: [$map.width(), $map.height()],
			lat: 61.48624011838221,
			lng: 23.759887218475342,
			zoom: 13,
			markers: [
				{lat: 61.48624011838221, lng: 23.759887218475342}
			]
		});
		$mapImg.attr('src', mapUrl);
	}
	updateMap();
	$map.html($mapImg);
	$window.smartresize(updateMap);
});
