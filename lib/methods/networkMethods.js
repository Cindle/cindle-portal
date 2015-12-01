Meteor.methods({
	'geoInsert': function(latitude,longitude){
		Geolocation.insert({ lat: latitude, lng: longitude });
	},
	'geoUpdate': function(id,latitude,longitude){
		Geolocation.update(id, { $set: { lat: latitude, lng: longitude }});
	},
	'geoClear': function(){
		Geolocation.remove({});
	}
});