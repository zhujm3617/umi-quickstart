import { Plugin } from 'E:/icode/shop-admin-web/node_modules/@umijs/runtime/dist/index.js';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','dva','getInitialState','request',],
});
plugin.register({
  apply: require('E:/icode/shop-admin-web/src/.umi/plugin-dva/runtime.tsx'),
  path: 'E:/icode/shop-admin-web/src/.umi/plugin-dva/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };
