Template.adminBody.events({
	'click [data-action="logout"]': function (evt, template) {
		evt.preventDefault();

		Meteor.logout();
	}
});

Template.adminBody.onCreated(function () {
	var instance = this;

	var subscriptionsRequired = AdminLayout.data.adminSubscriptions;
	_.each(subscriptionsRequired, function (subs) {
		instance.subscribe(subs);
	});
});