import { axios } from '@/main';

import type { Product } from '../types';

export default class ProductService {
  static async getProducts() {
    return axios.get('/products');
  }

  static async getProduct(id: string) {
    return axios.get(`/products/${id}`);
  }

  static async createProduct(product: Product) {
    return axios.post('/products', product);
  }

  static async updateProduct(product: Product) {
    return axios.put(`/products/${product.id}`, product);
  }

  static async deleteProduct(id: string) {
    return axios.delete(`/products/${id}`);
  }
}
