Template.adminSidebar.onRendered(function () {
	 $('#nav-accordion').dcAccordion({
	    eventType: 'click',
	    autoClose: true,
	    saveState: true,
	    disableLink: true,
	    speed: 'slow',
	    showCount: false,
	    autoExpand: true,
	    classExpand: 'dcjq-current-parent'
	});
});

Template.adminSidebar.helpers({
	sidebarLinks: function () {
		return AdminLayout.data.sidebarLinks;
	}
});