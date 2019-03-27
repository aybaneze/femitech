let registrarme= document.getElementById('registrarme');
let slicks = document.getElementById('slicks');
let btns = document.getElementById('btns-registro');
$('.slick-slider').slick({
    dots: true,
    fade: true,
    arrows: false,
    mobileFirst: true,
});

registrarme.addEventListener('click',()=>{
    slicks.style.display='none';
    btns.style.display='block';
})

var platform = new H.service.Platform({
    'app_id': 'BlZHca8LI24lxVfHfKSV',
    'app_code': 'mdzpXDgzwv3MAkgr5yQwMg',
    useHTTPS: true
  });

  var pixelRatio = window.devicePixelRatio || 1;

  var latitud, longitud;
    // Obtain the default map types from the platform object
    var maptypes = platform.createDefaultLayers( {tileSize: pixelRatio === 1 ? 256 : 512,
        ppi: pixelRatio === 1 ? undefined : 320});
var mapContainer =document.getElementById('mapContainer');
var map ;
if(navigator.geolocation){
    var success = function(position){
     latitud = position.coords.latitude,
        longitud = position.coords.longitude;

        var berlinMarker = new H.map.Marker({
            lat:latitud,
            lng:longitud
          });

       map = new H.Map(
            mapContainer,
            maptypes.normal.map,
            {
              zoom: 18,
              center: { lng: longitud, lat: latitud  },
              pixelRatio: pixelRatio
            });
            map.addObject(berlinMarker);
            function moveMapToBerlin(map){
                map.setCenter({lat:latitud, lng:longitud});
                map.setZoom(14);
              }
        
            var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
        
            // Create the default UI components
            var ui = H.ui.UI.createDefault(map, maptypes);
        
            moveMapToBerlin(map);
         
    }
    navigator.geolocation.getCurrentPosition(success, function(error){
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert("Permission denied by user.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location position unavailable.");
                break;
            case error.TIMEOUT:
                alert("Request timeout.");
                break;
            case error.UNKNOWN_ERROR:
                alert("Unknown error.");
                break;
        }
    });
    }


    // Instantiate (and display) a map object:
 

   