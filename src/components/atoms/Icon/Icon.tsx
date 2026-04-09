// // components/atoms/Icon.tsx

// import React from 'react';
// import { Image, ImageStyle, StyleProp } from 'react-native';
// import { iconMap } from '../../../theme/icons';
// import { iconStyles } from './styles';

// type IconName = keyof typeof iconMap;

// type Props = {
//   name: IconName;
//   size?: number;
//   style?: StyleProp<ImageStyle>;
// };

// export const Icon = ({ name, size = 30, style }: Props) => {
//   const styles = iconStyles(size);

//   return <Image source={iconMap[name]} style={[styles.icon, style]} />;
// };

import React from 'react';
import { Image, Pressable, ImageStyle, StyleProp } from 'react-native';
import { iconMap } from '../../../theme/icons';
import { iconStyles } from './styles';

type IconName = keyof typeof iconMap;

type Props = {
  name: IconName;
  size?: number;
  style?: StyleProp<ImageStyle>;
  onPress?: () => void;
};

export const Icon = ({ name, size = 30, style, onPress }: Props) => {
  const styles = iconStyles(size);

  return (
    <Pressable onPress={onPress} disabled={!onPress}>
      <Image source={iconMap[name]} style={[styles.icon, style]} />
    </Pressable>
  );
};
