import React from 'react';
import HomeTemplate from '../../components/templates/HomeTemplate/HomeTemplate';
import { useHome } from './useHome';

export function HomeScreen() {
  const { categories, onPressCategory } = useHome();

  return (
    <HomeTemplate categories={categories} onPressCategory={onPressCategory} />
  );
}
