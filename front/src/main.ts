import './assets/styles/main.pcss';
import 'element-plus/dist/index.css';

import type { AxiosInstance } from 'axios';
import axiosNpm from 'axios';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from '@/App.vue';
import { toast } from '@/helpers/functions';
import { routes } from '@/router';

const app = createApp(App);

//? Plugin: pinia
const pinia = createPinia();
app.use(pinia);

//? Plugin: axios
const token = localStorage.getItem('token');
export const axios: AxiosInstance = axiosNpm.create({
  baseURL: 'http://localhost:4002',
  headers: {
    Authorization: token ? `Bearer ${token}` : ''
  }
});
axios.interceptors.response.use(
  (response) => {
    if (response.config.method !== 'get') {
      toast({ type: 'success', message: 'Success' });
    }
    return response;
  },
  (error) => {
    toast({
      message: `${error?.request.responseURL}\n${error.message}`,
      type: 'error'
    });
  }
);

//? Plugin: router
const router = createRouter({
  history: createWebHistory(),
  routes
});
app.use(router);

app.mount('#app');
