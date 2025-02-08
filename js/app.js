// app.js

// Initialize AOS for animations
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

// Initialize Google Maps for modals
function initMaps() {
  // Map for The Backs
  var mapBacks = new google.maps.Map(document.getElementById('map-backs'), {
    center: { lat: 52.2053, lng: 0.1218 },
    zoom: 15,
    disableDefaultUI: true,
    styles: [ /* Custom styles if desired */ ]
  });

  // Map for Corpus Clock
  var mapCorpus = new google.maps.Map(document.getElementById('map-corpus'), {
    center: { lat: 52.2043, lng: 0.1196 },
    zoom: 17,
    disableDefaultUI: true,
    styles: [ /* Custom styles if desired */ ]
  });
}

window.initMaps = initMaps;