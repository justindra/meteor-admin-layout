if (typeof AdminLayoutConfig === 'undefined') { AdminLayoutConfig = {}; }
if (typeof AdminLayout === 'undefined') { AdminLayout = {}; }

AdminLayoutConfig['config'] = function (config) {
	AdminLayout['data'] = {
		brandName: config.brandName || 'brand name',
		brandLogo: config.brandLogo || false,
		showRightSidebar: config.brandName || true,
		sidebarLinks: config.sidebarLinks || [],
		adminSubscriptions: config.adminSubscriptions || [],
		breadcrumb: config.breadcrumb || true
	}
}