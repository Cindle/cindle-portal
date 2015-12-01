
//	HOME Route
Router.route('/', {
	name: 'home',
	action: function () {
		this.render('MainNav', {to: 'nav'});
		this.render('Home');
		this.render('Footer', {to: 'footer'});
	}
});



//	INSPIRATION Route
Router.route('/inspiration', {
	name: 'inspiration',
	action: function () {
		this.render('MainNav', {to: 'nav'});
		this.render('Inspiration');
		this.render('Footer', {to: 'footer'});
	}
});


//	TASKS Route
Router.route('/tasks', {
	name: 'tasks',
	action: function () {
		this.render('MainNav', {to: 'nav'});
		this.render('Tasks');
		this.render('Footer', {to: 'footer'});
	}
});
