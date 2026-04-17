import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchProducts } from '../store/products/productThunk';

export const useFetchProducts = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { items, loading } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (items.length === 0 && !loading) {
      dispatch(fetchProducts());
    }
  }, [dispatch, items.length, loading]);
};
