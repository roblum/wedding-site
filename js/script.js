(function(){

	var gMapsData = {
		startLocation : {
			latitude: 40.7238493,
			longitude: -74.0026836
		},
		zoom : 12
	}

	var gMaps = {
		init: function(){
			var mapOptions = {
	          	center: { lat: gMapsData.startLocation.latitude, lng: gMapsData.startLocation.longitude},
	          	zoom: gMapsData.zoom,
	          	styles: gMapStyles,
	          	scrollwheel: false
        	};

	        var map = new google.maps.Map(document.getElementById('google-maps'), mapOptions);

	      	// google.maps.event.addDomListener(window, 'load', gMaps.init);
		},
	}

	google.maps.event.addDomListener(window, 'load', gMaps.init);
})();

        