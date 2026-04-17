import React from 'react';
import { View, Image } from 'react-native';
import AppText from '../../atoms/AppText/AppText';
import Price from '../../atoms/Price/Price';
import { styles } from './styles';
import AddToCartBar from '../../molecules/AddToCart/AddToCartBar';
import { Product } from '../../../store/products/types';

export type PLPCardProps = {
  product: Product;
  quantity: number;
  onAdd: (product: Product) => void;
  onInc: (productId: string) => void;
  onDec: (productId: string) => void;
};

export default function PLPCard({
  product,
  quantity,
  onAdd,
  onInc,
  onDec,
}: PLPCardProps) {
  const effectiveQty = quantity || 1;
  const totalPrice = product.Price * effectiveQty;

  return (
    <View style={styles.card}>
      <View style={styles.imageWrap}>
        <Image source={{ uri: product.image_url }} style={styles.img} />
      </View>

      <View style={styles.nameContainer}>
        <AppText numberOfLines={2} style={styles.name}>
          {product.product_name}
        </AppText>

        <View style={styles.row}>
          <Price value={totalPrice} />
          <AddToCartBar
            qty={quantity}
            onAdd={() => onAdd(product)}
            onInc={() => onInc(product.id)}
            onDec={() => onDec(product.id)}
          />
        </View>
      </View>
    </View>
  );
}
