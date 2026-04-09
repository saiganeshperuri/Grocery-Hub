import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { colors } from '../../../theme/colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
}

export default function Button({ title, onPress, loading }: ButtonProps) {
  const isDisabled = !!loading;

  return (
    <TouchableOpacity
      style={[styles.button, isDisabled && styles.disabled]}
      onPress={onPress}
      disabled={isDisabled}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
