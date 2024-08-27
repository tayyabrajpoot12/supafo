import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import TabStack from './TabStack';
import FoodDetails from '../screens/Main/Details/FoodDetails';
import ShopDetails from '../screens/Main/Details/ShopDetails';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName="TabStack">
      <Stack.Screen name="TabStack" component={TabStack} />
      <Stack.Screen name="FoodDetails" component={FoodDetails} />
      <Stack.Screen name="ShopDetails" component={ShopDetails} />
    </Stack.Navigator>
  );
};

export default MainStack;
