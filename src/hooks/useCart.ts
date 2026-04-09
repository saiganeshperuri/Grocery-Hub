import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addToCart,
  incrementCartItem,
  decrementCartItem,
  removeFromCart,
  setItemQuantity,
} from '../store/cart/cartSlice';

import {
  selectCartItems,
  selectCartItemsById,
  selectCartTotalQuantity,
} from '../store/selectors/cartSelectors';

import { Product } from '../store/products/types';

export function useCart() {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const cartItemsById = useSelector(selectCartItemsById);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);

  const quantitiesById = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(cartItemsById).map(([id, item]) => [id, item.quantity]),
      ),
    [cartItemsById],
  );

  const addProductToCart = (product: Product, quantity = 1) =>
    dispatch(addToCart({ product, quantity }));

  const incrementProductInCart = (productId: string) =>
    dispatch(incrementCartItem({ productId }));

  const decrementProductInCart = (productId: string) =>
    dispatch(decrementCartItem({ productId }));

  const removeProductFromCart = (productId: string) =>
    dispatch(removeFromCart({ productId }));

  const setProductQuantity = (product: Product, quantity: number) =>
    dispatch(setItemQuantity({ product, quantity }));

  const isCartEmpty = cartItems.length === 0;

  return {
    cartItems,
    cartItemsById,
    quantitiesById,
    cartTotalQuantity,
    isCartEmpty,
    addProductToCart,
    incrementProductInCart,
    decrementProductInCart,
    removeProductFromCart,
    setProductQuantity,
  };
}
