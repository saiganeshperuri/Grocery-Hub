import React, { ReactNode } from 'react';
import { ImageBackground, View, StyleProp, ViewStyle } from 'react-native';
import { styles } from './styles';

interface AuthTemplateProps {
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function AuthTemplate({
  children,
  containerStyle,
}: AuthTemplateProps) {
  return (
    <ImageBackground
      source={require('../../../theme/images/login-background.png')}
      style={styles.image}
      resizeMode="cover"
    >
      <View style={[styles.container, containerStyle]}>{children}</View>
    </ImageBackground>
  );
}
