import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'MicroBaseHomePage',
    meta: {
      title: '主应用',
    },
    component: () => import('@/HomePage.vue'),
  },
  {
    path: '/about',
    name: 'AboutPage',
    meta: {
      title: '主应用-关于我们',
    },
    component: () => import('@/views/AboutPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
