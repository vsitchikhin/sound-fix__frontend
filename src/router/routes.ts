import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
 {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), name: 'main' },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '/login', component: () => import('pages/Auth/LogIn/LogIn.vue'), name: 'login'},
      { path: '/singup', component: () => import('pages/Auth/SignUp/SignUp.vue'), name: 'singup'},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Errors/ErrorNotFound.vue'),
  },
];

export default routes;
