import { ApplyPluginsType } from 'E:/icode/shop-admin-web/node_modules/@umijs/runtime/dist/index.js';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": require('@/layouts/layout').default,
    "routes": [
      {
        "path": "/home",
        "component": require('@/pages/index').default,
        "exact": true
      },
      {
        "path": "/modules/index",
        "component": require('@/pages/index').default,
        "exact": true
      },
      {
        "path": "/modules/pic-slide-img/:id",
        "component": require('@/pages/modules/pic-slide-img/index').default,
        "exact": true
      },
      {
        "path": "/modules/sp-single-product/:id",
        "component": require('@/pages/modules/sp-single-product/index').default,
        "exact": true
      },
      {
        "component": require('@/pages/index').default,
        "exact": true
      }
    ]
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
