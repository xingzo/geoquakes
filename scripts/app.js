// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!

  var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.78, lng: -122.44},
          zoom: 8 }
        );

  var marker = new google.maps.Marker({
            position: {lat: 37.78, lng: -122.44},
            map: map
          });

  $.ajax({
  	method: 'GET',
  	url: weekly_quakes_endpoint,
  	data: {
      // generated: 1517955446000,
      // // url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson",
      // title: "USGS Significant Earthquakes, Past Week",
      // status: 200,
      // api: "1.5.8",
      // count: 3

  	},
  	success: function( response ) {

      for(var i = 0; i < response.features.length; i++){
        $("#info").append(`<p>${response.features[i].properties.title}</p>`);

        var marker = new google.maps.Marker({
                  position: {lat: parseInt(response.features[i].geometry.coordinates[0]),
                    lng: parseInt(response.features[i].geometry.coordinates[1])},
                  map: map
                });
      }

      // console.log(response.features[0].geometry.coordinates[0]);

  	},
  	error: function() {
  	  alert('There was an error getting weather data.');
  	}
  	// beforeSend: function () {
  	//   $('#page').append('Loading');
  	// }
  });


});
