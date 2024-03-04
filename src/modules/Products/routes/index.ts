import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/products',
    name: 'products',
    component: () => import('../pages/List.vue')
  },
  {
    path: '/products/create',
    name: 'create-product',
    component: () => import('../pages/Create.vue')
  }
];
