Template.login.events({
	'submit #login-form': function (evt, template) {
		evt.preventDefault();

		Meteor.loginWithPassword(evt.target.username.value, evt.target.password.value);
	}
});