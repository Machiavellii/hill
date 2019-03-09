//MAP
mapboxgl.accessToken =
  'pk.eyJ1Ijoic2VydmFsbGwiLCJhIjoiY2pndjdmbTZuMWNpNDJxcWpoYzNhY2g1MSJ9.dFx4HTNrmc2PTrWl6eFApw';

let lng = 18.508744;
let lat = 42.463891;

let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10',
  zoom: 16,
  center: [lng, lat]
});

//Marker
let marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);

//Zoom Control
map.addControl(new mapboxgl.NavigationControl());

//SCROLL SMOOTH
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 800
});

//GALLERY
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

//BACK TO TOP
let backToTop = document.querySelector('.back-to-top');

function scrollFunction() {
  if (document.documentElement.scrollTop > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
}

window.onscroll = function() {
  scrollFunction();
};

//Footer Year
$('#year').text(new Date().getFullYear());
