<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus';
import { ElButton, ElCheckbox, ElDatePicker, ElForm, ElFormItem, ElInput, ElOption, ElSelect } from 'element-plus';
import { reactive, ref } from 'vue';

import type { PartialNullable } from '@/helpers/types';

import type { Product } from '../types';

const form = reactive<PartialNullable<Product>>({
  model: null,
  releaseYear: null,
  category: null,
  retailPrice: null,
  visible: false
});
const formRef = ref<FormInstance>();
const rules = reactive<FormRules>({
  model: { required: true, message: 'Please input model', trigger: 'blur' },
  releaseYear: {
    required: true,
    message: 'Please input release year',
    trigger: 'change'
  },
  category: {
    required: true,
    message: 'Please input category',
    trigger: 'blur'
  },
  retailPrice: {
    required: true,
    message: 'Please input retailPrice',
    trigger: 'change'
  }
});

async function submitForm(formEl: FormInstance | undefined) {
  if (!formEl) {
    return;
  }
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!');
    }
  });
}

function resetForm(formEl: FormInstance | undefined) {
  if (!formEl) {
    return;
  }
  formEl.resetFields();
}

const options = ['one', 'two', 'three'];
</script>

<template>
  <div class="center">
    <el-form class="w-1/3" label-position="top" ref="formRef" :model="form" :rules="rules" status-icon>
      <el-form-item label="model" prop="model">
        <el-select v-model="form.model" placeholder="Please select model">
          <el-option v-for="item in options" :key="item" :label="item" :value="item" />
        </el-select>
      </el-form-item>
      <el-form-item label="releaseYear" prop="releaseYear">
        <el-date-picker v-model="form.releaseYear" type="date" placeholder="Pick a date" />
      </el-form-item>
      <el-form-item label="category" prop="category">
        <el-select v-model="form.category" placeholder="Please select category">
          <el-option v-for="item in options" :key="item" :label="item" :value="item" />
        </el-select>
      </el-form-item>
      <el-form-item label="retailPrice" prop="retailPrice">
        <el-input
          v-model="form.retailPrice"
          placeholder="Please input retailPrice"
          :formatter="(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
          :parser="(value) => value.replace(/\D/g, '')" />
      </el-form-item>
      <el-form-item prop="visible">
        <el-checkbox v-model="form.visible" label="visible" />
      </el-form-item>
      <div>
        <el-button type="primary" @click="submitForm(formRef)"> Submit </el-button>
        <el-button type="info" @click="resetForm(formRef)"> Reset </el-button>
      </div>
    </el-form>
  </div>
</template>
