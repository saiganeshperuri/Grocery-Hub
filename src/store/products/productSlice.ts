// store/products/productSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './productThunk';
import { ProductState } from './types';

const initialState: ProductState = {
  items: [],
  loading: false,
  error: '',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load products';
      });
  },
});

export const productsReducer = productsSlice.reducer;
