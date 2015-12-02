Meteor.methods({
	'geoInsert': function(latitude,longitude, userId){
		Geolocation.insert({ lat: latitude, lng: longitude, owner: userId });
	},
	'geoUpdate': function(id,latitude,longitude){
		Geolocation.update(id, { $set: { lat: latitude, lng: longitude }});
	},
	'geoClear': function(){
		Geolocation.remove({});
	}
});