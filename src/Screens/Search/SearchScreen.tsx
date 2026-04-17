import React, { useMemo, useCallback } from 'react';
import { View } from 'react-native';
import ProductListTemplate from '../../components/templates/ProductListTemplate/ProductListTemplate';
import { useProductList } from './useProductList';
import { useRoute, RouteProp } from '@react-navigation/native';
import { BottomTabParamList } from '../../Navigations/BottomTabNavigator';
import { useCart } from '../../hooks/useCart';
import { useFetchProducts } from '../../hooks/useFetchProducts';

type SearchRouteProp = RouteProp<BottomTabParamList, 'Search'>;

export function SearchScreen() {
  useFetchProducts();

  const route = useRoute<SearchRouteProp>();
  const category = route.params?.category || null;

  const { products, loading, error } = useProductList(category);

  const {
    quantitiesById,
    addProductToCart,
    incrementProductInCart,
    decrementProductInCart,
  } = useCart();

  const quantities = useMemo(() => quantitiesById, [quantitiesById]);

  return (
    <View style={{ flex: 1 }}>
      <ProductListTemplate
        data={products}
        loading={loading}
        error={error}
        quantitiesById={quantities}
        onAdd={addProductToCart}
        onInc={incrementProductInCart}
        onDec={decrementProductInCart}
      />
    </View>
  );
}
