import { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '../../Navigations/StackNavigator';

type Nav = NativeStackNavigationProp<AuthStackParamList, 'SignUp'>;
export function useSignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [validationErrorMessage, setValidationErrorMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigation = useNavigation<Nav>();

  const showValidationError = useCallback((msg: string) => {
    setValidationErrorMessage(msg);
    Alert.alert('Validation Failed', msg);
  }, []);

  const onLogin = () => {
    navigation.navigate('Login');
  };

  const resetFormState = useCallback(() => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setShowPassword(false);
    setShowConfirmPassword(false);
    setValidationErrorMessage('');
  }, []);

  const validateInputSchema = useCallback(() => {
    const normalizedEmail = email.trim();
    const normalizedPassword = password.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validationSchema = [
      { valid: normalizedEmail !== '', msg: 'Email is required' },
      {
        valid: normalizedEmail == email,
        msg: 'Email should not contain trailing spaces',
      },
      { valid: emailRegex.test(normalizedEmail), msg: 'Invalid email format' },

      { valid: password !== '', msg: 'Password is required' },
      {
        valid: password.length >= 6,
        msg: 'Password must be at least 6 characters',
      },
      {
        valid: normalizedPassword === password,
        msg: 'Password should not contain trailing spaces',
      },

      { valid: confirmPassword !== '', msg: 'Confirm password is required' },
      { valid: password === confirmPassword, msg: 'Passwords do not match' },
    ];

    for (const validator of validationSchema) {
      if (!validator.valid) {
        showValidationError(validator.msg);
        return false;
      }
    }

    setValidationErrorMessage('');
    return true;
  }, [email, password, confirmPassword, showValidationError]);

  const onSignUp = useCallback(async () => {
    if (!validateInputSchema()) return;

    try {
      console.log('sai');
      setSubmitting(true);

      await auth().createUserWithEmailAndPassword(
        email.trim(),
        password.trim(),
      );

      resetFormState();
      Alert.alert(
        'Account Created',
        'Your account has been created successfully.',
      );
      navigation.navigate('Home');
    } catch (err: any) {
      const errorMessages: Record<string, string> = {
        'auth/email-already-in-use': 'Email already in use',
        'auth/invalid-email': 'Invalid email',
        'auth/weak-password': 'Weak password',
        'auth/network-request-failed': 'Network error',
      };

      const message = errorMessages[err?.code] || 'Something went wrong.';

      Alert.alert('Sign Up Failed', message);
    } finally {
      setSubmitting(false);
    }
  }, [email, password, validateInputSchema, resetFormState]);

  return {
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
    togglePassword: () => setShowPassword(prev => !prev),
    toggleConfirmPassword: () => setShowConfirmPassword(prev => !prev),
    onSignUp,
    onLogin,
  };
}
