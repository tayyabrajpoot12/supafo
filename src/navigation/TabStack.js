/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';

// screens ----------------------------
import Cart from '../screens/Main/Cart';
import Profile from '../screens/Main/Profile';
import MapScreen from '../screens/Main/MapScreen';
import Favourites from '../screens/Main/Favourites';
import Home from '../screens/Main/Home';
// ------------------------------------

import fonts from '../assets/fonts';
import Icons from '../components/Icons';
import { colors } from '../utils/colors';

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, family, focused }) => (
  <Icons
    name={name}
    family={family}
    color={focused ? colors.primaryColor : colors.black}
    size={name === 'location' ? 22 : 20}
  />
);

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primaryColor,
        tabBarInactiveTintColor: colors.black,
        tabBarStyle:
          route.name === 'Cart' ? { display: 'none' } : styles.tabBarStyle,
        headerShown: false,
        tabBarLabelStyle: { fontSize: 12, fontFamily: fonts.medium, top: -6 },
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name={'home'} family={'Feather'} />
          ),
          tabBarLabel: 'Anasayfa',
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="hearto" focused={focused} family={'AntDesign'} />
          ),
          tabBarLabel: 'Favoriler',
        }}
        name="Favourites"
        component={Favourites}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="location" family={'IonIcons'} focused={focused} />
          ),
          tabBarLabel: 'Keşfet',
        }}
        name="Map"
        component={MapScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="bag-outline" family={'IonIcons'} focused={focused} />
          ),
          tabBarLabel: 'Sepet',
        }}
        name="Cart"
        component={Cart}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="user" family="Feather" focused={focused} />
          ),
          tabBarLabel: 'Profil',
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabStack;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 70,
    paddingBottom: 10,
  },
});
