import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const useProductList = (category: string | null) => {
  const productsState = useSelector(
    (rootState: RootState) => rootState.products,
  );

  const filteredProducts = useMemo(() => {
    if (!category) return productsState.items;
    return productsState.items.filter(
      product => product.Category?.toLowerCase() === category.toLowerCase(),
    );
  }, [category, productsState.items]);

  return {
    products: filteredProducts,
    loading: productsState.loading,
    error: productsState.error,
  };
};
