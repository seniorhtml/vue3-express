import { defineStore } from 'pinia';

import { axios } from '@/main';

export const useStore = defineStore('MainStore', {
  state: () => ({
    products: [],
    product: {},
    categories: [],
    models: [],
    loading: false,
    pagination: null
  }),
  actions: {
    async getProducts() {}
  }
});
