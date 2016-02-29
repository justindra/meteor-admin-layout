Package.describe({
  name: 'justindra:admin-layout',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'An admin/dashboard layout',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use([
      'templating',
      'less@1.0.0 || 2.5.0'
    ], 'client');
  api.addFiles('justindra-admin-layout.js');
  api.addFiles([
      'client/stylesheets/configs.import.less',
      'client/stylesheets/header.import.less',
      'client/stylesheets/main.less',
      'client/templates/sidebar.html',
      'client/templates/header.html',
      'client/templates/header.js',
      'client/templates/body.html'
    ], 'client');

  api.export(['AdminLayoutConfig'], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('justindra-admin-layout');
  api.addFiles('justindra-admin-layout-tests.js');
});
