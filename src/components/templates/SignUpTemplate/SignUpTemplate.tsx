import React from 'react';
import { View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

import AuthTemplate from '../AuthTemplate/AuthTemplate';
import AppText from '../../atoms/AppText/AppText';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import InlineLink from '../../atoms/InlineLink/InlineLink';
import PasswordField from '../../molecules/PasswordField/PasswordField';

import { styles } from './styles';

interface Props {
  email: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
  submitting: boolean;
  error: string;

  setEmail: (t: string) => void;
  setPassword: (t: string) => void;
  setConfirmPassword: (t: string) => void;

  togglePassword: () => void;
  toggleConfirmPassword: () => void;

  onSignUp: () => Promise<void>;
  onGoToLogin: () => void;
}

export default function SignUpTemplate({
  email,
  password,
  confirmPassword,
  showPassword,
  showConfirmPassword,
  submitting,
  error,
  setEmail,
  setPassword,
  setConfirmPassword,
  togglePassword,
  toggleConfirmPassword,
  onSignUp,
  onGoToLogin,
}: Props) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
    >
      {/* <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      > */}
      <AuthTemplate>
        <AppText style={styles.title}>Sign Up</AppText>

        {error ? <AppText style={styles.error}>{error}</AppText> : null}

        <Input
          placeholder="Email"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          editable={!submitting}
        />

        <PasswordField
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secure={!showPassword}
          onToggle={togglePassword} // 👈 CLEAN!
          editable={!submitting}
        />

        <PasswordField
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secure={!showConfirmPassword}
          onToggle={toggleConfirmPassword} // 👈 CLEAN!
          editable={!submitting}
        />

        <Button
          title="Create Account"
          onPress={onSignUp}
          loading={submitting}
        />

        <View style={styles.row}>
          <AppText style={styles.rowText}>Already have an Account?</AppText>
          <InlineLink label=" Login" onPress={onGoToLogin} />
        </View>
      </AuthTemplate>
      {/* </ScrollView> */}
    </KeyboardAvoidingView>
  );
}
