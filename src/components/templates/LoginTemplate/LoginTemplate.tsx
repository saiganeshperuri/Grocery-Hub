// components/templates/LoginTemplate/LoginTemplate.tsx
import React from 'react';
import { View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

import AuthTemplate from '../AuthTemplate/AuthTemplate';
import AppText from '../../atoms/AppText/AppText';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import InlineLink from '../../atoms/InlineLink/InlineLink';
import PasswordField from '../../molecules/PasswordField/PasswordField';

import { styles } from './styles';

export interface LoginTemplateProps {
  email: string;
  password: string;
  showPassword: boolean;
  isLoading: boolean;
  error: string;

  setEmail: (t: string) => void;
  setPassword: (t: string) => void;
  togglePassword: () => void;

  onLogin: () => Promise<void>;
  onGoToSignUp: () => void;
}

export default function LoginTemplate({
  email,
  password,
  showPassword,
  isLoading,
  error,
  setEmail,
  setPassword,
  togglePassword,
  onLogin,
  onGoToSignUp,
}: LoginTemplateProps) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <AuthTemplate containerStyle={styles.Container}>
          <AppText style={styles.title}>Login</AppText>

          {error ? <AppText style={styles.error}>{error}</AppText> : null}

          <Input
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            editable={!isLoading}
          />

          <PasswordField
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secure={!showPassword}
            onToggle={togglePassword}
            editable={!isLoading}
          />

          <Button title="Sign in" onPress={onLogin} loading={isLoading} />

          <View style={styles.row}>
            <AppText style={styles.rowText}>Don't have an account?</AppText>
            <InlineLink label=" Sign up" onPress={onGoToSignUp} />
          </View>
        </AuthTemplate>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
