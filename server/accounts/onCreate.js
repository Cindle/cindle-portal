

Accounts.onCreateUser(function(options, user){
    
    var userProfile = {};

    userProfile.avatar = '/images/defaultProfile.jpg';
    userProfile.firstname = 'nobody';
    userProfile.lastname = 'nobody';
    userProfile.gender = 'neutral';
    userProfile.age = 0;
    user.profile = userProfile;

    var userSettings = {};

    userSettings.geolocation = false;
    user.appSettings = userSettings;

    return user;
});