import React from 'react';
import LoginTemplate from '../../components/templates/LoginTemplate/LoginTemplate';
import { useLogin } from './useLogin';

// type Nav = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export function LoginScreen() {
  // const navigation = useNavigation<Nav>();
  const {
    email,
    password,
    showPassword,
    isLoading,
    validationErrorMessage,
    setEmail,
    setPassword,
    togglePassword,
    onLogin,
    onSignUp,
  } = useLogin();

  return (
    <LoginTemplate
      email={email}
      password={password}
      showPassword={showPassword}
      isLoading={isLoading}
      error={validationErrorMessage}
      setEmail={setEmail}
      setPassword={setPassword}
      togglePassword={togglePassword}
      onLogin={onLogin}
      onGoToSignUp={onSignUp}
    />
  );
}
