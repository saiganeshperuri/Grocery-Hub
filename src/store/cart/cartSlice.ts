import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState } from './types';
import { Product } from '../products/types';

const initialState: CartState = {
  itemsById: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: Product; quantity?: number }>,
    ) => {
      const { product, quantity = 1 } = action.payload;
      const existing = state.itemsById[product.id];

      if (existing) {
        existing.quantity += quantity;
      } else {
        state.itemsById[product.id] = { ...product, quantity };
      }
    },

    incrementCartItem: (
      state,
      action: PayloadAction<{ productId: string }>,
    ) => {
      const item = state.itemsById[action.payload.productId];
      if (item) item.quantity += 1;
    },

    decrementCartItem: (
      state,
      action: PayloadAction<{ productId: string }>,
    ) => {
      const item = state.itemsById[action.payload.productId];
      if (!item) return;

      item.quantity -= 1;
      if (item.quantity <= 0) delete state.itemsById[action.payload.productId];
    },

    removeFromCart: (state, action: PayloadAction<{ productId: string }>) => {
      delete state.itemsById[action.payload.productId];
    },

    setItemQuantity: (
      state,
      action: PayloadAction<{ product: Product; quantity: number }>,
    ) => {
      const { product, quantity } = action.payload;

      if (quantity <= 0) {
        delete state.itemsById[product.id];
        return;
      }

      const existing = state.itemsById[product.id];
      if (existing) existing.quantity = quantity;
      else state.itemsById[product.id] = { ...product, quantity };
    },
  },
});

export const {
  addToCart,
  incrementCartItem,
  decrementCartItem,
  removeFromCart,
  setItemQuantity,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
