const routes = [
  {
    path: '/',
    component: () => import('pages/ThePage.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: '/tilbud', component: () => import('pages/SalePage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
