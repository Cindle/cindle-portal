Meteor.publish("Geolocation", function() {
	return Geolocation.find();
});