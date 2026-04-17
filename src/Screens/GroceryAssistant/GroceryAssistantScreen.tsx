import React from 'react';
import GroceryAssistantTemplate from '../../components/templates/GroceryAssistantTemplate/GroceryAssistantTemplate';
import { useGroceryAssistant } from './useGroceryAssistant';
import { useFetchProducts } from '../../hooks/useFetchProducts';

export function GroceryAssistant() {
  useFetchProducts();

  const {
    query,
    setQuery,
    submitQuery,
    loading,
    error,
    hasSubmitted,
    suggestedItems,
    matchedProducts,
  } = useGroceryAssistant();

  return (
    <GroceryAssistantTemplate
      query={query}
      loading={loading}
      error={error}
      hasSubmitted={hasSubmitted}
      suggestedItems={suggestedItems}
      products={matchedProducts}
      onChange={setQuery}
      onSubmit={submitQuery}
    />
  );
}
