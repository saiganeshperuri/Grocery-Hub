import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectCartItemsById = (state: RootState) => state.cart.itemsById;

export const selectCartItems = createSelector(
  [selectCartItemsById],
  itemsById => Object.values(itemsById),
);

export const selectCartTotalQuantity = createSelector(
  [selectCartItems],
  items => items.reduce((sum, item) => sum + item.quantity, 0),
);
