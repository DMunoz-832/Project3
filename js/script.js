function initMap() {
    const adler = { lat: 41.866344, lng: -87.607402 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: adler,
      mapTypeId: "terrain",
    });
//Adler Marker 
    var adlerImage = {
        url: "https://www.adlerplanetarium.org/wp-content/uploads/IMG0020.jpg",
        scaledSize: new google.maps.Size(100, 100),
      };

    const adlerMarker = new google.maps.Marker({
        position: adler,
        map,
        icon: adlerImage,
    });
    //information Window
    var infoWindow = new google.maps.InfoWindow({
      content: "<h1>Adler Planetarium</h1><p>I've only been here once when I was a kid but I enjoyed every minute of it, especially looking at the mini planet demonstrations they had on display<p>"
    });
    google.maps.event.addListener(adlerMarker, 'mouseover', function() {
      infoWindow.open(map, adlerMarker);
    });

//Other Marker coordinates
    const iit = { lat: 41.8349, lng: 87.6270 };
    const chicken = { lat: 41.923702499459694, lng: -87.7754261104509 };

//IIT Chicago Marker
    var iitImage = {
        url: "https://d2jyir0m79gs60.cloudfront.net/college/logos/Illinois_Institute_of_Technology.gif",
        scaledSize: new google.maps.Size(100,100),
    };

    const iitMarker = new google.maps.Marker({
        position:iit,
        map,
        icon:iitImage,
    });
  }
  /*working code
  //Adler Marker 1
  var marker = new google.maps.Marker({
		position: new google.maps.LatLng(41.866344, -87.607402),
		map: map, 
  });
  //Info window about Adler
  var infowindow = new google.maps.InfoWindow({
    content: "<h1>Adler Planetarium</h1><p>I've only been here once when I was a kid but I enjoyed every minute of it, especially looking at the mini planet demonstrations they had on display<p>"
  });
  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(map, marker);
  });
    //IIT Chicago Marker 2
    var marker = new google.maps.Marker({
		position: new google.maps.LatLng(41.8349, 87.6270),
		map: map, 
        iconImage: ''
  });
  //Info window about Adler
  var infowindow = new google.maps.InfoWindow({
    content: "<h1>Adler Planetarium</h1><p>I've only been here once when I was a kid but I enjoyed every minute of it, especially looking at the mini planet demonstrations they had on display<p>"
  });
  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(map, marker);
  });
*/
  

  /*
  //IIT Chicago Marker 2
  var marker2 = new google.maps.Marker({
		position: new google.maps.LatLng(41.8349, 87.6270),
		map: map, 
        iconImage: 'https://d2jyir0m79gs60.cloudfront.net/college/logos/Illinois_Institute_of_Technology.gif'
  });
  //Info Window about IIT Chicago
  var infowindow2 = new google.maps.InfoWindow({
    content: "<h1>IIT Chicago</h1><p>Funny enough, put IIT on Google and you get the Indian Institutes of Technology, hence the Chicago at the end<p>"
  });
  google.maps.event.addListener(marker2, 'mouseover', function() {
    infowindow2.open(map, marker2);
  });
}
google.maps.event.addDomListener(window, 'load', initMap);
  //Chicken Marker 3
var marker3 = new google.maps.Marker({
    position: new google.maps.LatLng(41.8349, 87.6270),
    map: map, 
    iconImage: 'https://cdn.mos.cms.futurecdn.net/BX7vjSt8KMtcBHyisvcSPK.jpg'
});
  //Info Window about Chicken feed
var infowindow3 = new google.maps.InfoWindow({
content: "<h1>Windy City Poultry</h1><p>Cheap chicken feed for Paco<p>"
});
google.maps.event.addListener(marker2, 'mouseover', function() {
infowindow3.open(map, marker2);
});
google.maps.event.addDomListener(window, 'load', initMap);
*/
