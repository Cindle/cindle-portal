

Meteor.publish('userProfile', function () {
	if (this.userId) {
	    return Meteor.users.find({_id: this.userId},
	        {fields: {'profile': 1}}
	    );
	} else {
		this.ready();
	}
});


Meteor.publish('userSettings', function () {
	if (this.userId) {
	    return Meteor.users.find({_id: this.userId},
	        {fields: {'appSettings': 1}}
	    );
	} else {
		this.ready();
	}
});