<script setup lang="ts">
import { ElCheckbox, ElDatePicker, ElForm, ElFormItem, ElInput, ElOption, ElSelect } from 'element-plus';
import { reactive, watch } from 'vue';

import type { PartialNullable } from '@/helpers/types';

import type { Product } from '../types';

const emits = defineEmits<{
  (event: 'handleFilter', value: PartialNullable<Product>): void;
}>();

const form = reactive<PartialNullable<Product>>({
  model: null,
  releaseYear: null,
  category: null,
  retailPrice: null,
  visible: false
});

const options = ['one', 'two', 'three'];

function handleFormChange(value) {
  emits('handleFilter', value);
}

watch(form, handleFormChange);
</script>

<template>
  <div class="center">
    <el-form class="w-full" label-position="top">
      <el-form-item label="model">
        <el-select v-model="form.model" placeholder="Please select model">
          <el-option v-for="item in options" :key="item" :label="item" :value="item" />
        </el-select>
      </el-form-item>
      <el-form-item label="releaseYear">
        <el-date-picker v-model="form.releaseYear" type="date" format="YYYY/MM/DD" value-format="YYYY/MM/DD" placeholder="Pick a date" />
      </el-form-item>
      <el-form-item label="category">
        <el-select v-model="form.category" placeholder="Please select category">
          <el-option v-for="item in options" :key="item" :label="item" :value="item" />
        </el-select>
      </el-form-item>
      <el-form-item label="retailPrice">
        <el-input
          v-model="form.retailPrice"
          placeholder="Please input retailPrice"
          :formatter="(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
          :parser="(value) => value.replace(/\D/g, '')" />
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="form.visible" label="visible" />
      </el-form-item>
    </el-form>
  </div>
</template>
