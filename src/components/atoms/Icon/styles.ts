import { StyleSheet } from 'react-native';

export const iconStyles = (size: number) =>
  StyleSheet.create({
    icon: {
      width: size,
      height: size,
      resizeMode: 'contain',
    },
  });
