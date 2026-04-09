import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { BottomTabParamList } from '../../Navigations/BottomTabNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type Nav = BottomTabNavigationProp<BottomTabParamList, 'Home'>;

export function useHome() {
  const navigation = useNavigation<Nav>();

  const categories = [
    {
      id: 1,
      key: 'fruits',
      label: 'Fruits',
      imageUrl:
        'https://www.news-medical.net/images/Article_Images/ImageForArticle_14459_1718253799749257.jpg',
    },
    {
      id: 2,
      key: 'vegetables',
      label: 'Vegetables',
      imageUrl:
        'https://www.organicfacts.net/wp-content/uploads/vegetarianfood.jpg',
    },
    {
      id: 3,
      key: 'stationery',
      label: 'stationery',
      imageUrl:
        'https://media.gettyimages.com/id/1008722314/photo/overhead-shot-of-back-to-school-office-supplies-on-white-background-with-paper-note-book-into.jpg?s=612x612&w=gi&k=20&c=q40wcqLapQfbnNkmzofI5dtvaDvtIg-0I98SfHNM1Mw=',
    },
    {
      id: 4,
      key: 'Mocktails',
      label: 'cool Drinks & Mocktails',
      imageUrl:
        'https://c8.alamy.com/comp/R9T9DN/poznan-poland-nov-16-2018-bottles-and-cans-of-global-soft-drink-brands-including-products-of-coca-cola-company-and-pepsico-R9T9DN.jpg',
    },
  ];

  const onPressCategory = useCallback(
    (key: string) => {
      navigation.navigate('Search', { category: key });
    },
    [navigation],
  );

  return { categories, onPressCategory };
}
