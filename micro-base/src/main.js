import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false;

const getMenus = () => {
  return 'getMenus-function';
};

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
]);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

start();
