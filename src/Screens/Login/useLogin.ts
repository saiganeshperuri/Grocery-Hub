// Screens/LoginPage/useLogin.ts
import { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '../../Navigations/StackNavigator';

type Nav = NativeStackNavigationProp<AuthStackParamList, 'Login'>;

export function useLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrorMessage, setValidationErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<Nav>();

  const onSignUp = () => {
    navigation.navigate('SignUp');
  };

  const resetFormState = useCallback(() => {
    setEmail('');
    setPassword('');
    setShowPassword(false);
    setValidationErrorMessage('');
  }, []);
  // Returns an error string if invalid, otherwise empty string
  const validate = useCallback((): string => {
    const normalizedEmail = email.trim();
    const normalizedPassword = password.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return (
      (!email && 'Email is required') || //!'' (empty string is falsy) → true
      (normalizedEmail !== email &&
        'Email must not contain leading or trailing spaces') ||
      (!emailRegex.test(normalizedEmail) && 'Invalid email format') || //emailRegex.test("userexample.com")--no @ symbol → regex fails,Returns: false-->!false = true
      (!password && 'Password is required') ||
      (normalizedPassword !== password &&
        'Password must not contain leading or trailing spaces') ||
      (normalizedPassword.length < 6 &&
        'Password must be at least 6 characters') ||
      ''
    );
  }, [email, password]);

  const onLogin = useCallback(async () => {
    const validationMsg = validate();
    if (validationMsg) {
      setValidationErrorMessage(validationMsg);
      Alert.alert('Validation Failed', validationMsg);
      return; // Stop if validation fails
    }
    setValidationErrorMessage('');
    // Normalize only AFTER validation succeeds
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim(); // we validated that raw === trimmed, so safe

    try {
      setIsLoading(true);
      await auth().signInWithEmailAndPassword(
        normalizedEmail,
        normalizedPassword,
      );

      resetFormState();

      Alert.alert('Success', `Logged in as ${normalizedEmail}`);
      navigation.navigate('Home');
    } catch (err: any) {
      const code = err?.code as string | undefined;

      // Compact error mapping (handles new consolidated + legacy codes)
      const msgMap: Record<string, string> = {
        'auth/invalid-email': 'Invalid email',
        'auth/user-disabled': 'User is disabled',
        'auth/user-not-found': 'No account found with this email',
        'auth/wrong-password': 'Incorrect password',
        'auth/invalid-password': 'Incorrect password',
        'auth/invalid-credential': 'Incorrect credentials',
        'auth/invalid-login-credentials': 'Incorrect password',
        'auth/network-request-failed': 'Network error',
        'auth/too-many-requests': 'Too many attempts. Try again later',
        'auth/operation-not-allowed':
          'Email/password sign-in is not enabled for this project',
      };

      const message = (code && msgMap[code]) || 'Something went wrong.';
      setValidationErrorMessage(message);
      Alert.alert('Login Failed', message);
    } finally {
      setIsLoading(false);
    }
  }, [email, password, validate]);

  return {
    email,
    password,
    showPassword,
    isLoading,
    validationErrorMessage,
    setEmail,
    setPassword,
    togglePassword: () => setShowPassword(prev => !prev),
    onLogin,
    onSignUp,
  };
}
