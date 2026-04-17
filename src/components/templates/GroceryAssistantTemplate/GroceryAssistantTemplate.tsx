import React from 'react';
import { View, FlatList, TextInput, Text } from 'react-native';

import { Product } from '../../../store/products/types';
import AppText from '../../atoms/AppText/AppText';

import Button from '../../atoms/Button/Button';
import PLPCard from '../../organisms/PLPCard/PLPCard';

import { styles } from './styles';
import { Icon } from '../../atoms/Icon/Icon';
import { colors } from '../../../theme/colors';

type Props = {
  query: string;
  loading: boolean;
  error?: string;
  hasSubmitted: boolean;
  suggestedItems: string[];
  products: Product[];
  onChange: (value: string) => void;
  onSubmit: () => void;
};

export default function GroceryAssistantTemplate({
  query,
  loading,
  error,
  hasSubmitted,
  suggestedItems,
  products,
  onChange,
  onSubmit,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <AppText style={styles.titleText}>
          Are you looking for something but not able to find it? Don’t worry,
          ask me — I will find the right groceries for you
          <Icon name="smile" size={18} style={styles.titleIcon} />
        </AppText>
      </View>

      <TextInput
        value={query}
        onChangeText={onChange}
        placeholder="E.g: vegetables for cooking, fruits for wellness"
        placeholderTextColor={colors.placeHolder}
        multiline
        style={styles.input}
      />

      <Button
        title={loading ? 'Thinking…' : 'Ask Smart AI'}
        loading={loading}
        onPress={onSubmit}
      />

      {!!error && <AppText style={styles.error}>{error}</AppText>}

      {hasSubmitted && suggestedItems.length > 0 && (
        <AppText style={styles.suggestions}>
          {suggestedItems.join(', ')}
        </AppText>
      )}

      {hasSubmitted && !loading && products.length === 0 && (
        <AppText style={styles.empty}>No matching products found 🙁</AppText>
      )}

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <PLPCard
            product={item}
            quantity={0}
            onAdd={() => {}}
            onInc={() => {}}
            onDec={() => {}}
          />
        )}
      />
    </View>
  );
}
