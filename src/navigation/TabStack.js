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
    color={focused ? colors.primaryColor : colors.grey2}
    size={23}
  />
);

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: colors.primaryColor,
        tabBarInactiveTintColor: colors.grey2,
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
        tabBarLabelStyle: { fontSize: 12, fontFamily: fonts.semiBold, top: -5 },
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name={'home'} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="briefcase-outline" focused={focused} />
          ),
        }}
        name="Favourites"
        component={Favourites}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="map" family={'Feather'} focused={focused} />
          ),
        }}
        name="Map"
        component={MapScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="map" family={'Feather'} focused={focused} />
          ),
        }}
        name="Cart"
        component={Cart}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="user" family="Feather" focused={focused} />
          ),
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
    height: 80,
    paddingBottom: 10,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    elevation: 0,
    borderTopWidth: 0,
  },
});
