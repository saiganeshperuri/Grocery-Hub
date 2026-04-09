import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigator } from './StackNavigator';
import { BottomTabNavigator } from './BottomTabNavigator';
import type { ParamListBase } from '@react-navigation/native';

export type RootStackParamList = ParamListBase & {
  Auth: undefined;
  Main: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => (
  <RootStack.Navigator
    initialRouteName="Main"
    screenOptions={{ headerShown: false }}
  >
    <RootStack.Screen name="Auth" component={StackNavigator} />
    <RootStack.Screen name="Main" component={BottomTabNavigator} />
  </RootStack.Navigator>
);
