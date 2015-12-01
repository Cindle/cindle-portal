

Router.route('logout', {
	name: 'logout',
	onBeforeAction: function () {
		if(Meteor.user()){
			Meteor.logout();
		}
		Router.redirect('/');
	},
	action: function () {

	}
});