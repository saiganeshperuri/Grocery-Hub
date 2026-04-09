// store/products/productThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { productApi } from '../../service/productApi';
import { Product } from './types';

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetch',
  async () => {
    return await productApi.getProducts();
  },
);
