<script setup lang="ts">
import { RouterView } from 'vue-router';

import Header from '@/components/Header.vue';
</script>

<template>
  <div class="container grid gap-4">
    <Header />
    <RouterView />
  </div>
</template>

<style scoped></style>
