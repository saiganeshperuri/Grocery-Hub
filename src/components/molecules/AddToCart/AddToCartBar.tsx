import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { styles } from './styles';

type Props = {
  qty: number;
  onAdd: () => void;
  onInc: () => void;
  onDec: () => void;
};

export default function AddToCartBar({ qty, onAdd, onInc, onDec }: Props) {
  const added = qty > 0;

  return (
    <View style={styles.container}>
      {!added ? (
        <Pressable style={styles.bar} onPress={onAdd}>
          <Text style={styles.addText}>Add to Cart</Text>
        </Pressable>
      ) : (
        <View style={styles.bar}>
          <Pressable onPress={onDec} style={styles.stepBtn}>
            <Text style={styles.stepText}>−</Text>
          </Pressable>

          <Text style={styles.qty}>{qty}</Text>

          <Pressable onPress={onInc} style={styles.stepBtn}>
            <Text style={styles.stepText}>+</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
