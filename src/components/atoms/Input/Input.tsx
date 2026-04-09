import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';
import { colors } from '../../../theme/colors';

export default function Input(props: TextInputProps) {
  return (
    <TextInput
      {...props}
      placeholderTextColor={colors.placeholder}
      style={[styles.input, props.style]}
    />
  );
}
