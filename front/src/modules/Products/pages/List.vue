<script setup lang="ts">
import { ElButton, ElEmpty, ElMessageBox, ElPagination, ElTable, ElTableColumn } from 'element-plus';
import { ref } from 'vue';

import EditDialog from '@/modules/Products/components/EditDialog.vue';
import FilterProducts from '@/modules/Products/components/FilterProducts.vue';

import type { Product } from '../types';

const products = ref<Product[]>([
  {
    id: 1,
    model: 'model',
    releaseYear: 2021,
    category: 'category',
    retailPrice: 1000,
    addedDate: '2021-01-01',
    visible: true
  },
  {
    id: 1,
    model: 'model',
    releaseYear: 2021,
    category: 'category',
    retailPrice: 1000,
    addedDate: '2021-01-01',
    visible: true
  }
]);

const dialogVisible = ref(false);

function handleEdit() {
  dialogVisible.value = true;
}
function handleDelete() {
  ElMessageBox.confirm('Are you sure to delete this product?').then(() => {
    console.log('delete');
  });
}

function handleFilter(value) {
  console.log(value);
}
</script>

<template>
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-9">
      <el-table :data="products" class="shadow-xl" stripe border>
        <el-table-column prop="id" label="id" width="180" />
        <el-table-column prop="model" label="model" width="180" />
        <el-table-column prop="releaseYear" label="releaseYear" />
        <el-table-column prop="category" label="category" />
        <el-table-column prop="retailPrice" label="retailPrice" />
        <el-table-column prop="addedDate" label="addedDate" />
        <el-table-column prop="visible" label="visible" />
        <el-table-column fixed="right" label="Operations">
          <template #default>
            <div class="flex justify-around">
              <el-button link type="primary" size="small" @click="handleEdit"> Edit </el-button>
              <el-button link type="primary" size="small" @click="handleDelete"> Delete </el-button>
            </div>
          </template>
        </el-table-column>
        <template #empty>
          <el-empty :image-size="200" />
        </template>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="1000" class="mt-4 flex justify-end" />
    </div>
    <div class="col-span-3">
      <FilterProducts @handle-filter="handleFilter" />
    </div>
  </div>

  <EditDialog v-model="dialogVisible" />
</template>
