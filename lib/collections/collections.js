

//	Collections used to maintain tasks and amount of hours worked (activities)
Tasks = new Mongo.Collection('Tasks');
Activities = new Mongo.Collection('Activities');


//	Collection to maintain all inspiration/posts
// Inspiration = new Mongo.Collection('Inspiration');

//	Collection that holds all posts (& Comments)
Posts = new Mongo.Collection('Posts');


//	Collection for sharing location
Geolocation = new Mongo.Collection('Geolocation');