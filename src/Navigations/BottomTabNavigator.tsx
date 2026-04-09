import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import your screens
import { HomeScreen } from '../Screens/Home/HomeScreen';
import { SearchScreen } from '../Screens/Search/SearchScreen';
import { CartScreen } from '../Screens/Cart/CartScreen';
import { FavouritesScreen } from '../Screens/Favourites/FavouritesScreen';

import { StackNavigator } from './StackNavigator';
import { Icon } from '../components/atoms/Icon/Icon';

export type BottomTabParamList = {
  Home: undefined;
  Search: { category: string | null };
  Cart: undefined;
  Favourites: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: true,
      headerTitleAlign: 'center',
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerTitle: 'Home',
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000',
        tabBarActiveBackgroundColor: '#E0E0E0',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIcon: () => <Icon name="home" />,
      }}
    />

    <Tab.Screen
      name="Search"
      component={SearchScreen}
      listeners={({ navigation }) => ({
        tabPress: e => {
          e.preventDefault();
          navigation.reset({
            index: 0,
            routes: [{ name: 'Search', params: { category: null } }],
          });
        },
      })}
      options={({ navigation }) => ({
        headerTitle: 'Search',
        headerLeft: () => (
          <Icon
            name="backIcon"
            size={22}
            style={{ marginLeft: 10 }}
            onPress={() => navigation.navigate('Home')}
          />
        ),
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000',
        tabBarActiveBackgroundColor: '#E0E0E0',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIcon: () => <Icon name="search" />,
      })}
    />

    <Tab.Screen
      name="Cart"
      component={CartScreen}
      options={{
        headerTitle: 'My Cart',
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000',
        tabBarActiveBackgroundColor: '#E0E0E0',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIcon: () => <Icon name="cart" />,
      }}
    />

    <Tab.Screen
      name="Favourites"
      component={FavouritesScreen}
      options={{
        headerTitle: 'Favourites',
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000',
        tabBarActiveBackgroundColor: '#E0E0E0',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIcon: () => <Icon name="favourites" />,
      }}
    />

    <Tab.Screen
      name="Account"
      component={StackNavigator}
      options={{
        headerTitle: 'My Account',
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000',
        tabBarActiveBackgroundColor: '#E0E0E0',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIcon: () => <Icon name="account" />,
      }}
    />
  </Tab.Navigator>
);
