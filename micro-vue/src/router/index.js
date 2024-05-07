// import { createRouter, createWebHistory } from 'vue-router';

// const routers = createRouter({
//   // history: createWebHistory(),
//   routes: [
//     {
//       path: '/',
//       redirect: '/home',
//     },
//     {
//       path: '/home',
//       name: 'Home',
//       component: () => import('../views/HomePage.vue'),
//     },
//     // {
//     //   path: '/:catchAll(.*)*',
//     //   name: 'error',
//     //   meta: {
//     //     name: '404',
//     //   },
//     //   component: () => import('../views/404.vue'),
//     // },
//   ],
// });

const routers = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/HomePage.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutPage.vue'),
  },
];

export default routers;
