if (typeof AdminLayoutConfig === 'undefined') { AdminLayoutConfig = {}; }
if (typeof AdminLayout === 'undefined') { AdminLayout = {}; }

Meteor.startup(function () {
	AdminLayout['data'] = {
		brandName: AdminLayoutConfig.brandName || 'brand name',
		showRightSidebar: AdminLayoutConfig.brandName || true
	}
});