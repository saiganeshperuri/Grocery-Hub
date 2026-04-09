// screens/Cart/CartScreen.tsx
import React from 'react';
import { View } from 'react-native';
import { useCart } from '../../hooks/useCart';
import CartTemplate from '../../components/templates/CartTemplate/CartTemplate';

export function CartScreen() {
  const {
    cartItems,
    isCartEmpty,
    incrementProductInCart,
    decrementProductInCart,
    removeProductFromCart,
  } = useCart();

  return (
    <View style={{ flex: 1 }}>
      <CartTemplate
        items={cartItems}
        isEmpty={isCartEmpty}
        onIncrement={incrementProductInCart}
        onDecrement={decrementProductInCart}
        onRemove={removeProductFromCart}
      />
    </View>
  );
}
