$(function(){
    //cleditor
    $("#cleditor").cleditor();
    
    //datetimepicker start
    $('#datetimepicker_start').datetimepicker();
    $('#datetimepicker_end').datetimepicker();
    $('#datetimepicker_time').datetimepicker();
});
/* Goole Maps */
var map;
function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644)
  };
  map = new google.maps.Map(document.getElementById('gmap'),
      mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);