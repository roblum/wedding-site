(function($){
	var map;

	function __init__(){
		gMaps._init();
		events._mainContainer();
		events._pin();
        events._backHome();
	}

	var events = {
		_mainContainer: function() {
			$('.main-container').click(function(){
				var chelsea = new google.maps.LatLng(
									gMapsData.chelseaLocation.latitude,
									gMapsData.chelseaLocation.longitude
									);

					$(this).addClass('animated fadeOut').hide();
					map.panTo(chelsea)
					map.setZoom(15);
					map.setOptions(mapOptionsLoaded);
					gMaps._addMarker();
			});
		},
		_pin: function() {
			$('body').on('click touchstart', '.lighthouse', function() {
				$('#event-modal').modal('show');
			});
		},
        _backHome: function() {
            $('body').on('click touchstart', '.back-home', function() {
                $('#event-modal').modal('hide');
                $('.main-container').removeClass('fadeOut')
                                    .fadeIn();
                map.setOptions(mapOptions);                    
            });
        },
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
		closeZoom : 15,
		pin : './images/lighthouse_shadow.png',
		glow : './images/light_glow.png'
	}

	var mapOptions = {
     	center: { lat: gMapsData.startLocation.latitude, lng: gMapsData.startLocation.longitude},
     	zoom: gMapsData.zoom,
     	styles: gMapStyles,
	};

	var mapOptionsLoaded = {
     	center: { lat: gMapsData.chelseaLocation.latitude, lng: gMapsData.chelseaLocation.longitude},
     	zoom: gMapsData.closeZoom,
     	styles: gMapStylesLoaded,
     	minZoom: 2,
	};

	var gMaps = {
		_init: function(){
			var mapOptions = {
	          	center: { lat: gMapsData.startLocation.latitude, lng: gMapsData.startLocation.longitude},
	          	zoom: gMapsData.zoom,
	          	styles: gMapStyles,
        		};

	        	map = new google.maps.Map(document.getElementById('google-maps'), mapOptions);
		},
		_addMarker: function(){
			var chelsea = new google.maps.LatLng(
								gMapsData.chelseaLocation.latitude,
								gMapsData.chelseaLocation.longitude
						);

			var cMarker = new RichMarker({
                  	position: chelsea,
	        		map: map,
                    content: '<div class="lighthouse" style="background-image:url(' + gMapsData.pin + ');">'
                    			+ '<img class="glow blink" src="' + gMapsData.glow + '"/>'
                    			+ '</div>'
               });

 	          cMarker.setMap(map);
		},
	}

	google.maps.event.addDomListener(window, 'load', __init__);
})(jQuery);

