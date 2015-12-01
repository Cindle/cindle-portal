

Router.configure({
	layoutTemplate: 'MainLayout',
	loadingTemplate: 'Loading',
	yieldTemplates: {
		'Nav': {to: 'nav'}
	}
});


Router.route('/', {
	name: 'home',
	action: function () {
		this.render('Nav', {to: 'nav'});
		this.render('Home');
	},

});