
function initMap() {
    var adler = {lat: 41.8661, lng: 87.6196};
    //adler: 
    var mapOptions = {
        center: adler,
        zoom: 10
    };
    var googlemap = new google.maps.Map(document.getElementById("map"), mapOptions);
}
/*
addMarker({
    coords:adler,
    iconImage: 'https://www.adlerplanetarium.org/wp-content/uploads/IMG0020.jpg',
    content: '<h1>Adler Planetarium</h1>',
});

addMarker({
    coords:IIT,
    iconImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Illinois_Institute_of_Technology_%28seal%29.svg/1200px-Illinois_Institute_of_Technology_%28seal%29.svg.png',
    content: '<h1>IIT Chicago</h1>',
});

addMarker({
   coords:chicken,
   iconImage: 'https://cdn.britannica.com/07/183407-050-C35648B5/Chicken.jpg',
   content: '<h1>Windy City Poultry</h1>',
});

function addMarker(props) {
    const marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    });

    //check for icon
    if(props.iconImage){
      marker.setIcon(props.iconImage);
    }
  
   //check for content
   if(props.content){
     var infoWindow = new google.maps.InfoWindow({
     content:props.content
   });
  
   marker.addListener('click', function(){
     infoWindow.open(map, marker);
   });
    }
  
    //add marker on click
    google.maps.event.addListener(map, 'click', function(event){
      addMarker({coords:event.latLng});
    });
   }
  window.addEventListener('load', initMap)
*/