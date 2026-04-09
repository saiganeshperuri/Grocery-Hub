import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface InlineLinkProps {
  label: string;
  onPress: () => void;
}

export default function InlineLink({ label, onPress }: InlineLinkProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.link}>{label}</Text>
    </TouchableOpacity>
  );
}
