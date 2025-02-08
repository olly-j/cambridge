// app.js

// Initialize AOS for smooth animations
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

// Initialize Google Maps for modals
function initMaps() {
  // Map for The Backs
  var mapBaks = new google.maps.Map(document.getElementById("googleMapBaks"), {
    center: { lat: 52.2053, lng: 0.1218 }, // Cambridge center
    zoom: 15,
    disableDefaultUI: true,
    styles: [
      // Optional custom map styles here
    ]
  });
  
  // Map for Corpus Clock
  var mapCorpus = new google.maps.Map(document.getElementById("googleMapCorpus"), {
    center: { lat: 52.2043, lng: 0.1196 }, // Corpus Clock area
    zoom: 17,
    disableDefaultUI: true,
    styles: [
      // Optional custom map styles here
    ]
  });
}

window.initMaps = initMaps;