import React, { ReactNode } from 'react';
import { Text, TextProps } from 'react-native';
import { styles } from './styles';

interface AppTextProps extends TextProps {
  children: ReactNode;
}

export default function AppText({ children, style, ...rest }: AppTextProps) {
  return (
    <Text style={[styles.base, style]} {...rest}>
      {children}
      {/* you include {children} only if your component is designed to wrap another component*/}
      {/* if your component renders fixed UI - no children required */}
    </Text>
  );
}
