import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchProducts } from '../../store/products/productThunk';

export const useProductList = (category: string | null) => {
  const dispatch = useDispatch<AppDispatch>();
  const productsState = useSelector(
    (rootState: RootState) => rootState.products,
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    if (!category) return productsState.items;
    return productsState.items.filter(
      product => product.Category?.toLowerCase() === category.toLowerCase(),
    );
  }, [category, productsState.items]);

  const data = {
    products: filteredProducts,
    loading: productsState.loading,
    error: productsState.error,
    refetch: () => dispatch(fetchProducts()),
  };
  console.log(data);
  return data;
};
