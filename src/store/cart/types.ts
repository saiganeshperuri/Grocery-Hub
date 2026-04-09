import { Product } from '../products/types';

export type CartItem = Product & { quantity: number };

export type CartState = {
  itemsById: Record<string, CartItem>;
};
