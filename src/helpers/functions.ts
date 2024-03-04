import { ElMessage } from 'element-plus';

export function toast(options: any) {
  return ElMessage({
    showClose: true,
    ...options
  });
}
