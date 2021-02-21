function loadMap() {

    var mapOptions = {
        center: new google.maps.LatLng(19.373341, 78.662109),
        zoom: 7
    }

    var map = new google.maps.Map(document.getElementById("sample"), mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(17.088291, 78.442383),
        map: map,
    });
}