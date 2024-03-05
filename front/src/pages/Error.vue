<script setup lang="ts">
import { ElButton, ElEmpty } from 'element-plus';
import { useRouter } from 'vue-router';

const router = useRouter();

function backToPrevPage() {
  router.back();
}
</script>

<template>
  <el-empty description="Error">
    <el-button type="primary" @click="backToPrevPage"> Back to previous page </el-button>
  </el-empty>
</template>
