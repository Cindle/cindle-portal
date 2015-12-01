
Meteor.subscribe("Geolocation");

Template.Network.onRendered(function() {  
  GoogleMaps.load();
  Meteor.call('geoClear');
});

Template.Network.onCreated(function() {  
  GoogleMaps.ready('map', function(Network) {
    google.maps.event.addListener(Network.instance, 'click', function(event) {
      Meteor.call('geoInsert',event.latLng.lat(),event.latLng.lng());
    });

	var markers = {};

	Geolocation.find().observe({  
		added: function(document) {
		// Create a marker for this document
			var marker = new google.maps.Marker({
				draggable: true,
				animation: google.maps.Animation.DROP,
				position: new google.maps.LatLng(document.lat, document.lng),
				map: Network.instance,
				// We store the document _id on the marker in order 
				// to update the document within the 'dragend' event below.
				id: document._id
			});

			// This listener lets us drag markers on the map and update their corresponding document.
			google.maps.event.addListener(marker, 'dragend', function(event) {
				Meteor.call('geoUpdate',marker.id,event.latLng.lat(),event.latLng.lng());
			});

			// Store this marker instance within the markers object.
			markers[document._id] = marker;
			},
			changed: function(newDocument, oldDocument) {
				markers[newDocument._id].setPosition({ lat: newDocument.lat, lng: newDocument.lng });
			},
			removed: function(oldDocument) {
				// Remove the marker from the map
				markers[oldDocument._id].setMap(null);

				// Clear the event listener
				google.maps.event.clearInstanceListeners(
					markers[oldDocument._id]);

				// Remove the reference to this marker instance
				delete markers[oldDocument._id];
			}
		});

	});
});

Template.Network.helpers({  
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(51.4510, 5.4620),
        zoom: 15
      };
    }
  }
});