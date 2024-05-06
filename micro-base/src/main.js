import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false;

const getMenus = () => {
  return 'getMenus-function';
};

function genActiveRuleEx(routerPrefix) {
  return (location) => location.pathname === routerPrefix;
}

function genActiveRule(routerPrefix) {
  return (location) => location.pathname.startsWith(routerPrefix);
}

registerMicroApps([
  {
    name: 'micro-react', // app name registered
    entry: '//localhost:3301',
    // entry: { scripts: ['//localhost:3301/static/js/bundle.js'] },
    // entry: {
    //   // scripts: ['//localhost:3301/micro-react/dist/main.js'],
    //   scripts: ['//localhost:3301/main.js'],
    // },
    container: '#container',
    activeRule: '/sub-react',
    props: {
      token: 'token======xasdfafdsafdeqwr3q453543',
      getMenus,
    },
  },
  {
    name: 'micro-vue',
    // entry: { scripts: ['//localhost:3302/main.js'] },
    entry: '//localhost:3302',
    container: '#container',
    activeRule: '/sub-vue',
    props: {
      token: 'token======xasdfafdsafdeqwr3q453543',
      getMenus,
    },
  },
  {
    name: 'micro-jquery',
    // 这里要具体到传统页面
    entry: '//localhost:5500/micro-jquery/index.html',
    container: '#container',
    activeRule: '/micro-jquery',
    props: {
      token: 'token======xasdfafdsafdeqwr3q453543',
      getMenus,
    },
    // activeRule: genActiveRuleEx('/micro-jquery/index.html'),
  },
  // {
  //   name: 'micro-jquery-about',
  //   // 这里要具体到传统页面
  //   entry: '//localhost:5500/micro-jquery/about.html',
  //   container: '#container',
  //   activeRule: '/micro-jquery',
  // },
]);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

start();
