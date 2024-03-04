<script setup lang="ts">
import { ElDialog, ElMessageBox } from 'element-plus';

import Create from '@/modules/Products/pages/Create.vue';

withDefaults(
  defineProps<{
    modelValue: boolean;
  }>(),
  {}
);

defineEmits<{
  (event: 'update:modelValue', value: boolean): void;
}>();

function handleClose(done: () => void) {
  ElMessageBox.confirm('Are you sure to close this dialog?').then(() => {
    done();
  });
}
</script>

<template>
  <el-dialog
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    width="60%"
    destroy-on-close
    :before-close="handleClose">
    <Create />
  </el-dialog>
</template>
