import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/Navigations/RootNavigator';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    // Hide splash screen when app loads
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
