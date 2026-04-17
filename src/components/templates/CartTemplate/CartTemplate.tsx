import React from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { CartItem } from '../../../store/cart/types';
import AddToCartBar from '../../molecules/AddToCart/AddToCartBar';
import AppText from '../../atoms/AppText/AppText';
import Price from '../../atoms/Price/Price';
import { Icon } from '../../atoms/Icon/Icon';

type CartTemplateProps = {
  items: CartItem[];
  isEmpty: boolean;
  onIncrement: (productId: string) => void;
  onDecrement: (productId: string) => void;
  onRemove: (productId: string) => void;
};

export default function CartTemplate({
  items,
  isEmpty,
  onIncrement,
  onDecrement,
  onRemove,
}: CartTemplateProps) {
  if (isEmpty) {
    return (
      <View style={styles.centerContent}>
        <Icon name="emptyCart" size={60} style={styles.emptyIcon} />
        <Text style={styles.emptyText}>Your cart is empty</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={items}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => {
        const totalPrice = item.Price * item.quantity;

        return (
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image_url }} style={styles.image} />
            </View>

            <View style={styles.infoContainer}>
              <View style={styles.headerRow}>
                <View style={styles.titleWrap}>
                  <AppText numberOfLines={2} style={styles.title}>
                    {item.product_name}
                  </AppText>

                  {!!item.Category && (
                    <AppText numberOfLines={1} style={styles.subtitle}>
                      {item.Category}
                    </AppText>
                  )}
                </View>

                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel="Remove item from cart"
                  onPress={() => onRemove(item.id)}
                >
                  {/* <Text style={styles.deleteIcon}>🗑</Text> */}
                  <Icon name="delete" size={26} />
                </Pressable>
              </View>

              <View style={styles.footerRow}>
                <Price value={totalPrice} />

                <AddToCartBar
                  qty={item.quantity}
                  onAdd={() => onIncrement(item.id)}
                  onInc={() => onIncrement(item.id)}
                  onDec={() => onDecrement(item.id)}
                />
              </View>
            </View>
          </View>
        );
      }}
    />
  );
}
