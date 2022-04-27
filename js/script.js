function initMap() {
    const adler = { lat: 41.866344, lng: -87.607402 };
    const iit = { lat: 41.8349, lng: 87.6270 };
    const chicken = { lat: 41.923702499459694, lng: -87.7754261104509 };
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

    google.maps.event.addDomListener(window, 'load', initMap);

//IIT Chicago Marker
  var iitImage = {
  url: "https://www.iit.edu/sites/default/files/2020-08/illinois-tech-logo-thumbnail.png",
  scaledSize: new google.maps.Size(100, 100),
  };

const iitMarker = new google.maps.Marker({
  position: iit,
  map,
  icon: iitImage,
});

//information Window
var iitInfoWindow = new google.maps.InfoWindow({
content: "<h1>IIT</h1><p>School... how fun<p>"
});

google.maps.event.addListener(iitMarker, 'mouseover', function() {
iitInfoWindow.open(map, iitMarker);
});

google.maps.event.addDomListener(window, 'load', initMap);

//Chicken Marker
  var chickenImage = {
  url: "https://cdn.mos.cms.futurecdn.net/BX7vjSt8KMtcBHyisvcSPK.jpg",
  scaledSize: new google.maps.Size(100, 100),
};

const chickenMarker = new google.maps.Marker({
  position: chicken,
  map,
  icon: chickenImage,
});

//information Window
var chickenInfoWindow = new google.maps.InfoWindow({
content: "<h1>John's Live Poultry</h1><p>I mean I only go there for the cheap chicken feed. Not to see the poor ones get killed T-T<p>"
});

google.maps.event.addListener(chickenMarker, 'mouseover', function() {
chickenInfoWindow.open(map, chickenMarker);
});

google.maps.event.addDomListener(window, 'load', initMap);
  }

  //code for slider
var slide_index = 1;
slidesDisplay(slide_index);

function nextSlide(n) {
  slidesDisplay(slide_index += n);
}
  
function currentSlide(n) {
  slidesDisplay(slide_index = n);
}
  
function slidesDisplay(n) {
  var i;
  var slides = document.getElementsByClassName("showSlider");
  if (n > slides.length) { slide_index = 1 }
  if (n < 1) { slide_index = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";
}