
//	

Router.configure({
	layoutTemplate: "MainLayout",
	loadingTemplate: "Loading"
});


Router.plugin('ensureSignedIn', {
	except: ['home']
});
