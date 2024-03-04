import type { RouteRecordRaw } from 'vue-router';

import { productsRoutes } from '@/modules/Products';

const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    name: '404 page',
    component: () => import('../pages/Error.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Home.vue')
  }
];

export const routes = baseRoutes.concat(productsRoutes);
