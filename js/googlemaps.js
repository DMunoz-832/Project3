function init() {
    var AdlerPlanet = new google.maps.LatLng(41.8661, 87.6196);
    var mapOp = {
        zoom: 13,
        center: AdlerPlanet,
		mapTypeId: 'satellite'
		};	
    var Map = new google.maps.Map(mapOp);

    var marker = new google.maps.Marker({
        position: AdlerPlanet,
        map: Map,
        title: "Adler Planetarium",
        animation: google.maps.Animation.BOUNCE,
        icon: 'images/bottle.png'
    });

    var conString = '<h1>Adler Planetarium</h1>>';
    var infowindow = new google.maps.InfoWindow({
        content: conString
    });

    google.maps.event.addListener(marker, 'mouseover', function() {
        infowindow.open(Map, marker);
    });

    marker.addListener("click", toggleBounce);

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

}

google.maps.event.addDomListener(window, 'load', init);