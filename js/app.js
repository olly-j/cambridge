// app.js

// This function initializes Google Maps for each modal map container.
function initMaps() {
  // Map for The Backs
  var mapBacks = new google.maps.Map(document.getElementById('map-backs'), {
    center: { lat: 52.2053, lng: 0.1218 }, // Approximate center for Cambridge
    zoom: 15,
    disableDefaultUI: true,
    styles: [ /* You can include custom map styles here for a modern look */ ]
  });

  // Map for Corpus Clock
  var mapCorpus = new google.maps.Map(document.getElementById('map-corpus'), {
    center: { lat: 52.2043, lng: 0.1196 }, // Approximate location for Corpus Clock
    zoom: 17,
    disableDefaultUI: true,
    styles: [ /* Custom styles for the map */ ]
  });
}

// Expose initMaps to the global scope so that the callback from the Google Maps API works
window.initMaps = initMaps;