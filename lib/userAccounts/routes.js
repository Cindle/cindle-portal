

Router.route('logout', {
	name: 'logout',
	onBeforeAction: function () {
		if(Meteor.user()){
			Meteor.logout();
			Router.go('/welcome');
		}else{
			this.next();
		}
	},
	action: function () {
		
	}
});