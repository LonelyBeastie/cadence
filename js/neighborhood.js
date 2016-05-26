var map;
$(document).ready(function(){
  map = new GMaps({
    el: '#map',
    lat: 36.1532540,
    lng: -86.7922290
  });
  map.addMarker({
    lat: 36.1532540,
    lng: -86.7922290,
    title: 'The Cadence',
    infoWindow: {
      content: '<p>The Cadence</p>'
    }
  });
});
