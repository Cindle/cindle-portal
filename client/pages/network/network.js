
Meteor.subscribe("Geolocation");

Template.Network.onRendered(function() {  
	GoogleMaps.load();
	Meteor.call('geoClear');
});

Template.Network.onCreated(function() {  
  GoogleMaps.ready('map', function(map) {
    google.maps.event.addListener(map.instance, 'click', function(event) {
		Meteor.call('geoInsert',event.latLng.lat(),event.latLng.lng(),0);
    });

	var markers = {};

	Geolocation.find({}).observe({  
		added: function(document) {
			// Create a marker for this document			
			var marker = new google.maps.Marker({
				draggable: true,
				animation: google.maps.Animation.DROP,
				position: new google.maps.LatLng(document.lat, document.lng),
				map: map.instance,
				// We store the document _id on the marker in order 
				// to update the document within the 'dragend' event below.
				id: document._id
			});
			if (document.owner != 0){
				var iconSize = 60;
				var icon = {
				    url: "test_icons/pc_principal.jpg", // url
				    scaledSize: new google.maps.Size(iconSize,iconSize), // scaled size
				    origin: new google.maps.Point(0,0), // origin
				    anchor: new google.maps.Point(iconSize/2,iconSize/2)
				};
				marker.setIcon(icon);
			}

			// This listener lets us drag markers on the map and update their corresponding document.
			google.maps.event.addListener(marker, 'dragend', function(event) {
				Meteor.call('geoUpdate',marker.id,event.latLng.lat(),event.latLng.lng());
			});

			// Store this marker instance within the markers object.
			markers[document._id] = marker;
			console.log(markers[document._id]);
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
			var styles = [
			{
				stylers: [
				{ hue: "#44DA53" },
				{ saturation: -20 }
				]
			},{
				featureType: "road",
				elementType: "geometry",
				stylers: [
				{ lightness: 100 },
				{ visibility: "simplified" },
				{ color: "#fafafa" }
				]
			},{
				featureType: "water",
				elementType: "geometry",
				stylers: [
				{ color: "#90caf9" }
				]
			},{
				featureType: "landscape.man_made",
				elementType: "geometry",
				stylers: [
				{ color: "#bbdefb" },
				{ saturation: -50 }
				]
			},{
				featureType: "administrative",
				elementType: "geometry",
				stylers: [
				{ color: "#b2dfdb" }
				]
			},{
				featureType: "poi",
				elementType: "geometry",
				stylers: [
				{ color: "#dcedc8" }
				]
			}
			];
			return {
				center: new google.maps.LatLng(51.4510, 5.4620),
				zoom: 15,
				styles: styles
				// mapTypeId: google.maps.MapTypeId.SATELLITE
			};
		}
	}
});

Template.Network.events({
	'click #buttonLocation': function (event) {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(locationGet,function(error){
				console.log("no geolocation access");
			});
		} else {
			console.log("no geolocation access");
		}

		function locationGet(position) {
			Meteor.call('geoInsert',position.coords.latitude,position.coords.longitude,Meteor.userId());
		}
    }
});