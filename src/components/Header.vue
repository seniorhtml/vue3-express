<script setup lang="ts">
import { ElAvatar } from 'element-plus';
import { ref } from 'vue';

const headerLinks = ref([
  {
    path: '/',
    label: 'Home'
  },
  {
    path: '/products',
    label: 'Products'
  },
  {
    path: '/products/create',
    label: 'Create product'
  }
]);
</script>

<template>
  <div class="flex items-center justify-between py-3">
    <div class="flex items-center gap-5">
      <router-link v-for="item in headerLinks" :key="item.path" :to="item.path" class="text-md font-medium text-slate-500 hover:text-slate-700">
        {{ item.label }}
      </router-link>
    </div>
    <div class="flex items-center gap-2 cursor-pointer group">
      <h1 class="text-md font-medium text-slate-500 group-hover:text-slate-700">username</h1>
      <el-avatar class="" src="https://picsum.photos/200/200" />
    </div>
  </div>
</template>
