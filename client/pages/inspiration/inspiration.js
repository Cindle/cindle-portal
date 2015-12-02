Template.Inspiration.rendered = function(){
	Deps.autorun(function() {
		Meteor.subscribe("Posts",Meteor.userId());
	})
}

// post handling
Template.Inspiration.helpers({
	fetchPosts : function() {
		return Posts.find({parent:null}).fetch().reverse();
	}
});

Template.Inspiration.events({
	'keydown.posttext':function(evt,tmpl){
		if(evt.which === 13){
			var posttext = tmpl.find('#posttext').value;
			var options = {text:posttext,parent:null};
			Meteor.call('addPost',options);
			$('.posttext').val("").select().focus();
		};
	}
});


// comment handling 
Template.Inspiration.helpers({
	fetchComments: function () {
		return Posts.find({parent:this._id});
	}
});

Template.Inspiration.events({
	'keydown.comment':function(evt,tmpl){
		if(evt.which === 13){
			var comment = tmpl.find('#comment').value;
			var options = {text:comment,parent:this._id};
			Meteor.call('addPost',options);
			$('.comment').val("").select();
		};
	}
});