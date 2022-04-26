//API key: AIzaSyAzpWmunPd6hktwkhSIfDOvE7tNfvRGR1o
function initMap() {
    var adler = {lat: 41.8661, lng: 87.6196};
    var mapOptions = {
        center: adler,
        zoom: 10
    };
    var googlemap = new google.maps.Map(document.getElementById("map"), mapOptions);
}