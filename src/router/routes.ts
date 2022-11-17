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
        path: '/meinprofil',
        component: () => import('pages/profil/ProfilPersonalien.vue'),
      },
      {
        path: '/meinprofil',
        component: () => import('pages/profil/ProfilBlutgruppe.vue'),
      },
      {
        path: '/meinprofil',
        component: () => import('pages/profil/ProfilHistorie.vue'),
      },
      {
        path: '/meinprofil',
        component: () => import('pages/profil/ProfilEinstellungen.vue'),
      },
      {
        path: '/meinprofil',
        component: () => import('pages/profil/ProfilDatenschutz.vue'),
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
        path: '/spendeblut',
        component: () => import('src/pages/SpendeBlut.vue'),
      },
      {
        path: '/home',
        component: () => import('pages/Home.vue'),
      },
      {
        path: '/fragebogen',
        component: () => import('src/pages/FrageBogen.vue'),
      },
      {
        path: '/fragebogen_gruppiert',
        component: () => import('src/pages/FrageBogen_gruppiert.vue'),
      },
      {
        path: '/check',
        component: () => import('src/pages/VorabCheck.vue'),
      },
      {
        path: '/termin',
        component: () => import('src/pages/TerminVereinbarung.vue'),
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
