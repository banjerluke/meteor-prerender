Package.describe({
  name: 'dferber:prerender',
  summary: 'Node wrapper for prerender',
  version: '3.1.1',
  git: 'https://github.com/dferber90/meteor-prerender',
});

Npm.depends({
  'prerender-node': '3.1.1',
});

Package.onUse(function packageConfiguration(api) {
  api.use(['templating'], 'client');
  api.use(['webapp'], 'server');
  api.versionsFrom('METEOR@0.9.1.1');
  api.addFiles('server/prerender.js', 'server');
  api.addFiles('client/prerender.html', 'client');
});
