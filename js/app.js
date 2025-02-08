// js/app.js

// Initialize interactive maps if needed using the Google Maps API
function initMaps() {
  // Create a map for each interactive element (example for The Backs)
  var mapBacks = new google.maps.Map(document.getElementById('map-backs'), {
    center: { lat: 52.2053, lng: 0.1218 },
    zoom: 15,
    disableDefaultUI: true,
    styles: [ /* Custom map styles for a modern look */ ]
  });
  // Similarly, initialize other maps...
}

window.initMaps = initMaps;