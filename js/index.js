function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(5.014750,7.917449),
        zoom:4,
    };
    var map = new google.maps.Map(document.getElementById('mapBox'),mapProp);
} 
var email = document.getElementById("email");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Pls type a valid email!");
  } else {
    email.setCustomValidity("");
  }
});
$(document).ready(function () {
  $('.datepicker').datepicker({
     format:'mm-dd-yy',
     autoclose: true,
     dayhighlight: true
  });
});
