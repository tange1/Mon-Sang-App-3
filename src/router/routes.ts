import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: '/meinprofil',
        component: () => import('pages/MeinProfil.vue'),
      },
      {
        path: '/meinprofil_2',
        component: () => import('pages/MeinProfil_2.vue'),
      },
      {
        path: '/informationen',
        component: () => import('pages/Informationen.vue'),
      },
      {
        path: '/einstellungen',
        component: () => import('pages/Einstellungen.vue'),
      },
      {
        path: '/home',
        component: () => import('pages/Home.vue'),
      },
      {
        path: '/login',
        component: () => import('src/pages/LoginUser.vue'),
      },
      {
        path: '/fragebogen',
        component: () => import('src/pages/FrageBogen.vue'),
      },
      {
        path: '/testpage',
        component: () => import('src/pages/TestPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
