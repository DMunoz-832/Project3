var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.835471, lng: -87.625888},
    zoom: 16
  });

  var marker = new google.maps.Marker({
		position: new google.maps.LatLng(41.866344, -87.607402),
		map: map, 
        iconImage: 'https://www.adlerplanetarium.org/wp-content/uploads/IMG0020.jpg'
  });

  var infowindow = new google.maps.InfoWindow({
    content: "<h1>Adler Planetarium</h1><p>I've only been here once when I was a kid but I enjoyed every minute of it, especially looking at the mini planet demonstrations they had on display<p>"
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(map, marker);
  });

  var marker2 = new google.maps.Marker({
		position: new google.maps.LatLng(41.8349, 87.6270),
		map: map, 
        iconImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Illinois_Institute_of_Technology_%28seal%29.svg/1200px-Illinois_Institute_of_Technology_%28seal%29.svg.png'
  });

  var infowindow2 = new google.maps.InfoWindow({
    content: "<h1>IIT Chicago</h1><p>Funny enough, put IIT on Google and you get the Indian Institutes of Technology, hence the Chicago at the end<p>"
  });

  google.maps.event.addListener(marker2, 'mouseover', function() {
    infowindow2.open(map, marker2);
  });
}
google.maps.event.addDomListener(window, 'load', initMap);
/*
addMarker({
   coords:chicken,
   iconImage: 'https://cdn.britannica.com/07/183407-050-C35648B5/Chicken.jpg',
   content: '<h1>Windy City Poultry</h1>',
});
*/