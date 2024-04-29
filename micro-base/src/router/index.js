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
];

const router = new VueRouter({
  routes: routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
