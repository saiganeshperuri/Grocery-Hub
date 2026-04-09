import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

type Props = { value: number };

export default function Price({ value }: Props) {
  return <Text style={styles.price}>₹ {value}</Text>;
}
