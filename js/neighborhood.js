var map;
$(document).ready(function(){
  map = new GMaps({
    el: '#map',
    lat: 36.1532540,
    lng: -86.7922290,
    zoom: 17
  });
  map.addMarker({
    lat: 36.1532540,
    lng: -86.7922290,
    title: 'The Cadence',
    infoWindow: {
      content: '<p><stong>The Cadence</stong></p><p>1600 McGavock St</p><p>Nashville, TN 37203</p>'
    }
  });
});
