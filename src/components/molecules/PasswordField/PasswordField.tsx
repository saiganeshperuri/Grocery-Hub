import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Input from '../../atoms/Input/Input';
import { styles } from './styles';

interface PasswordFieldProps {
  value: string;
  onChangeText: (t: string) => void;
  placeholder: string;
  secure: boolean; // true = hidden, false = visible
  onToggle?: () => void; // optional
  editable?: boolean;
}

export default function PasswordField({
  value,
  onChangeText,
  placeholder,
  secure,
  onToggle,
  editable = true,
}: PasswordFieldProps) {
  return (
    <View style={styles.wrapper}>
      <Input
        placeholder={placeholder}
        secureTextEntry={secure}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
      />
      {onToggle && (
        <TouchableOpacity
          style={styles.toggle}
          onPress={onToggle}
          hitSlop={{ top: 8, right: 8, bottom: 8, left: 8 }}
          accessibilityRole="button"
          accessibilityLabel={secure ? 'Show password' : 'Hide password'}
        >
          <Image
            source={
              secure
                ? require('../../../theme/icons/eye-off.png') // hidden -> eye-off
                : require('../../../theme/icons/eye-on.png') // visible -> eye-on
            }
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
