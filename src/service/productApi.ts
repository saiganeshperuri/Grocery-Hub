import { apiClient } from './apiClient';
import { Product } from '../store/products/types';

export const productApi = {
  async getProducts(): Promise<Product[]> {
    const { data } = await apiClient.get('/Groceries');
    return data;
  },
};
