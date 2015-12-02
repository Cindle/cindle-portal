Meteor.publish("Geolocation", function() {
	return Geolocation.find();
});

Meteor.publish("Posts", function(userId) {
	return Posts.find();
});