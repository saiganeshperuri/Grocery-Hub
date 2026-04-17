import { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchAiResponse } from '../../store/ai/aiThunk';
import { Product } from '../../store/products/types';
import {
  buildGroceryPrompt,
  parseAiResponse,
} from '../../store/Transformators/aiTransformer';

export const useGroceryAssistant = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [query, setQuery] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const { response, loading, error } = useSelector(
    (state: RootState) => state.ai,
  );

  const products = useSelector((state: RootState) => state.products.items);

  const submitQuery = useCallback(() => {
    if (!query.trim()) return;
    setHasSubmitted(true);
    dispatch(fetchAiResponse(buildGroceryPrompt(query)));
  }, [query, dispatch]);

  const normalize = (s: string) => s.toLowerCase().trim();
  const suggestedItems = useMemo<string[]>(() => {
    if (!response) return [];
    return parseAiResponse(response).map(normalize);
  }, [response]);

  /** Products whose names exactly match suggested items */
  const matchedProducts = useMemo<Product[]>(() => {
    if (!hasSubmitted || suggestedItems.length === 0) return [];

    return products.filter(product =>
      suggestedItems.includes(normalize(product.product_name)),
    );
  }, [products, suggestedItems, hasSubmitted]);

  return {
    query,
    setQuery,
    submitQuery,
    loading,
    error,
    hasSubmitted,
    suggestedItems,
    matchedProducts,
  };
};
