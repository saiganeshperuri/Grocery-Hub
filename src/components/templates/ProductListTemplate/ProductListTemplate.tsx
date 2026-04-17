import React from 'react';
import { FlatList, View, ActivityIndicator, Text } from 'react-native';
import PLPCard from '../../organisms/PLPCard/PLPCard';
import { styles } from './styles';
import { Product } from '../../../store/products/types';

type ProductListTemplateProps = {
  data: Product[];
  loading: boolean;
  error?: string;
  onRefresh?: () => void;

  quantitiesById: Record<string, number>;
  onAdd: (product: Product) => void;
  onInc: (productId: string) => void;
  onDec: (productId: string) => void;
};

export default function ProductListTemplate({
  data,
  loading,
  error,
  onRefresh,
  quantitiesById,
  onAdd,
  onInc,
  onDec,
}: ProductListTemplateProps) {
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={product => product.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.cell}>
          <PLPCard
            product={item}
            quantity={quantitiesById[item.id] ?? 0}
            onAdd={onAdd}
            onInc={onInc}
            onDec={onDec}
          />
        </View>
      )}
    />
  );
}
