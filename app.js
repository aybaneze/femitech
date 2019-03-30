// Initialize Firebase

let registrarme= document.getElementById('registrarme');
let slicks = document.getElementById('slicks');
let btns = document.getElementById('btns-registro');
$('.slick-slider').slick({
    dots: true,
    fade: true,
    arrows: false,
    mobileFirst: true,
});

facebook.addEventListener('click',inFacebook)
google1.addEventListener('click', inGoogle)

registrarme.addEventListener('click',()=>{
    console.log('jola')
    slicks.style.display='none';
    btns.style.display='block';
})

// var platform = new H.service.Platform({
//     'app_id': 'BlZHca8LI24lxVfHfKSV',
//     'app_code': 'mdzpXDgzwv3MAkgr5yQwMg',
//     useHTTPS: true
//   });

//   var pixelRatio = window.devicePixelRatio || 1;

//   var latitud, longitud;
//     // Obtain the default map types from the platform object
//     var maptypes = platform.createDefaultLayers();
// var mapContainer =document.getElementById('mapContainer');
// var map ;
// if(navigator.geolocation){
//     var success = function(position){
//      latitud = position.coords.latitude,
//         longitud = position.coords.longitude;

//         var berlinMarker = new H.map.Marker({
//             lat:latitud,
//             lng:longitud
//           });

//        map = new H.Map(
//             mapContainer,
//             maptypes.normal.map,
//             {
//               zoom: 18,
//               center: { lng: longitud, lat: latitud  },
        
//             });
//             map.addObject(berlinMarker);
          
   
//             // Create the default UI components
        
         
//     }
//     navigator.geolocation.getCurrentPosition(success, function(error){
//         switch(error.code) {
//             case error.PERMISSION_DENIED:
//                 alert("Permission denied by user.");
//                 break;
//             case error.POSITION_UNAVAILABLE:
//                 alert("Location position unavailable.");
//                 break;
//             case error.TIMEOUT:
//                 alert("Request timeout.");
//                 break;
//             case error.UNKNOWN_ERROR:
//                 alert("Unknown error.");
//                 break;
//         }
//     });
//     }


    // Instantiate (and display) a map object:
 

