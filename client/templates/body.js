Template.adminBody.events({
	'click [data-action="logout"]': function (evt, template) {
		evt.preventDefault();

		Meteor.logout();
	}
});