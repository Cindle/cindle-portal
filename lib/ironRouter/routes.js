

//	HOME Route
//		Overview of:
//		- new inspiration
//		- upcoming & new tasks
//		- network updates

Router.route('/', {
	name: 'home',
	action: function () {
		this.render('MainNav', {to: 'nav'});
		this.render('Home');
		this.render('Footer', {to: 'footer'});
	}
});




//	WELCOME Route
//		Should provide a quick overview or tutorial on the Cindle portal

Router.route('/welcome', {
	name: 'welcome',
	action: function () {
		this.render('Welcome');
	}
});





//	INSPIRATION Route
//		place to share inspiring posts and start discussion (by commenting)

Router.route('/inspiration', {
	name: 'inspiration',
	action: function () {
		this.render('MainNav', {to: 'nav'});
		this.render('Inspiration');
		this.render('Footer', {to: 'footer'});
	}
});



//	TASKS Route
//		used to:
//		- add new tasks for a team
//		- review tasks
//		- add activity to a task (hours worked)
//		(- upload work/deliverables, links to github?)

Router.route('/tasks', {
	name: 'tasks',
	action: function () {
		this.render('MainNav', {to: 'nav'});
		this.render('Tasks');
		this.render('Footer', {to: 'footer'});
	}
});



//	NETWORK Route
//		page that shows:
//		- your network / friends / colleagues on cindle portal
//		- real time location of your team
//		- global activity of others
//		- profiles of others

Router.route('/network', {
	name: 'network',
	action: function () {
		this.render('MainNav', {to: 'nav'});
		this.render('Network');
		this.render('Footer', {to: 'footer'});
	}
});
