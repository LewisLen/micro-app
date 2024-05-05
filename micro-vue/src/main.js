import './public-path';
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './router';

if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 定义特性标志
window.__VUE_PROD_DEVTOOLS__ = false;
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

let router;
let app;

function render(props = {}) {
  const { container } = props;
  console.log('===container===', container);
  router = createRouter({
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/sub-vue' : '/'),
    routes,
  });

  app = createApp(App);
  app.use(router).mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// 导出第一次进入当前子应用的钩子函数
export async function bootstrap() {}

// 导出每次创建挂载时的钩子函数
export async function mount(props) {
  console.log('===mount-props===', props);
  console.log('===getMenus===', props.getMenus());
  render(props);
}

// 导出每次销毁时的钩子函数
export async function unmount(props) {
  app.unmount();
  app._container.innerHTML = '';
  app = null;
  router = null;
}
