Template.adminHeader.helpers({
	brandName: function () {
		return AdminLayout.data.brandName;
	},
	brandLogo: function () {
		return AdminLayout.data.brandLogo;
	},
	showRightSidebar: function () {
		return AdminLayout.data.showRightSidebar;
	}
});

Template.adminHeader.events({
	'click .sidebar-toggle-box': function (evt, template) {
		$('body').toggleClass('sidebar-closed');
	}
});