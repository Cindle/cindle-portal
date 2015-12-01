
//	HOME Route

Router.route('/', {
	name: 'home',
	action: function () {
		this.render('MainNav', {to: 'nav'});
		this.render('Home');
		this.render('Footer', {to: 'footer'});
	}
});

