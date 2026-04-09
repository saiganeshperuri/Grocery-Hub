import React from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';

import AppText from '../../atoms/AppText/AppText';
import { styles } from './styles';

export interface CategoryItem {
  id: number;
  key: string;
  label: string;
  imageUrl: string;
}

export interface HomeTemplateProps {
  categories: CategoryItem[];
  onPressCategory: (key: string) => void;
}

export default function HomeTemplate({
  categories,
  onPressCategory,
}: HomeTemplateProps) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <AppText style={styles.header}>Categories</AppText>

        {categories.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => onPressCategory(item.key)}
          >
            <Image source={{ uri: item.imageUrl }} style={styles.image} />

            <View style={styles.labelBox}>
              <AppText style={styles.labelText}>{item.label}</AppText>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
