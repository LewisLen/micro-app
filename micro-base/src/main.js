import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false;

registerMicroApps([
  {
    name: 'react app', // app name registered
    entry: '//localhost:3000',
    container: '#app',
    activeRule: '/sub-react',
  },
  {
    name: 'vue app',
    entry: { scripts: ['//localhost:7100/main.js'] },
    container: '#yourContainer2',
    activeRule: '/yourActiveRule2',
  },
]);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

start();
