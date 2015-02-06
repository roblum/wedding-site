(function($){
	var map;

	function __init__(){
		gMaps._init();
		events._mainContainer();
	}

	var events = {
		_mainContainer: function(){
			$('.main-container').click(function(){
				var chelsea = new google.maps.LatLng(
									gMapsData.chelseaLocation.latitude, 
									gMapsData.chelseaLocation.longitude
									);

					$(this).addClass('animated fadeOut');
					map.panTo(chelsea)
					map.setZoom(16);
			});
		}
	}

	var gMapsData = {
		startLocation : {
			latitude: 40.7238493,
			longitude: -74.0026836
		},
		zoom : 13,
		chelseaLocation : {
			latitude: 40.74757,
			longitude: -74.008509,
		},	
	}

	var gMaps = {
		_init: function(){
			var mapOptions = {
	          	center: { lat: gMapsData.startLocation.latitude, lng: gMapsData.startLocation.longitude},
	          	zoom: gMapsData.zoom,
	          	styles: gMapStyles,
	          	scrollwheel: false
        	};

	        map = new google.maps.Map(document.getElementById('google-maps'), mapOptions);

	      	// google.maps.event.addDomListener(window, 'load', gMaps.init);
		},
	}

	google.maps.event.addDomListener(window, 'load', __init__);
})(jQuery);

        