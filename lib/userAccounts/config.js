
var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 3,
  },
  pwd
]);

AccountsTemplates.configure({

    // Behavior
    confirmPassword: false,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: true,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    /*
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',
    */

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 1000,

    // Hooks
    /*
    onLogoutHook: myLogoutFunc,
    onSubmitHook: mySubmitFunc,
    preSignUpHook: myPreSubmitFunc,
    */

    // Texts
      // texts: {
      //   button: {
      //       signUp: "Register Now!"
      //   },
      // socialSignUp: "Register",
      // socialIcons: {
      //     "meteor-developer": "fa fa-rocket"
      // },
      // title: {
      //     forgotPwd: "Recover Your Password"
      // },
});

//Routes
//AccountsTemplates.configureRoute('changePwd');
//AccountsTemplates.configureRoute('enrollAccount');
//AccountsTemplates.configureRoute('forgotPwd');
//AccountsTemplates.configureRoute('resetPwd');
// AccountsTemplates.configureRoute('signIn', {
//     name: 'signin',
//     path: '/signin',
//     redirect: function(){
//         var user = Meteor.user();
//         if (user)
//           Router.go('/devices/' + user._id);
//     }
// });
//AccountsTemplates.configureRoute('signUp');
//AccountsTemplates.configureRoute('verifyEmail');

