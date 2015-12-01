
//	global iron router config

Router.configure({
	layoutTemplate: "MainLayout",
	loadingTemplate: "Loading"
});



//	Activate route protection
Router.plugin('ensureSignedIn', {
	except: ['welcome']
});
