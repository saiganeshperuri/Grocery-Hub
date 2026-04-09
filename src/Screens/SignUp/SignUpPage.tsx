import React from 'react';
import { useSignUp } from './useSignUp';
import SignUpTemplate from '../../components/templates/SignUpTemplate/SignUpTemplate';

export function SignUpScreen() {
  const {
    email,
    password,
    confirmPassword,
    showPassword,
    showConfirmPassword,
    validationErrorMessage,
    submitting,
    setEmail,
    setPassword,
    setConfirmPassword,
    togglePassword,
    toggleConfirmPassword,
    onSignUp,
    onLogin,
  } = useSignUp();

  return (
    <SignUpTemplate
      email={email}
      password={password}
      confirmPassword={confirmPassword}
      showPassword={showPassword}
      showConfirmPassword={showConfirmPassword}
      submitting={submitting}
      error={validationErrorMessage}
      setEmail={setEmail}
      setPassword={setPassword}
      setConfirmPassword={setConfirmPassword}
      togglePassword={togglePassword}
      toggleConfirmPassword={toggleConfirmPassword}
      onSignUp={onSignUp}
      onGoToLogin={onLogin}
    />
  );
}
