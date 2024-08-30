import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import TabStack from './TabStack';
import FoodDetails from '../screens/Main/Details/FoodDetails';
import ShopDetails from '../screens/Main/Details/ShopDetails';
import Checkout from '../screens/Main/Checkout';
import OrderDetails from '../screens/Main/OrderDetails';
import OrderPrepairing from '../screens/Main/OrderDetails/OrderPrepairing';
import OrderDelivered from '../screens/Main/OrderDetails/OrderDelivered';
import Success from '../screens/Main/Success';
import AddRating from '../screens/Main/Ratings/AddRating';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName="TabStack">
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="TabStack" component={TabStack} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="AddRating" component={AddRating} />
      <Stack.Screen name="ShopDetails" component={ShopDetails} />
      <Stack.Screen name="FoodDetails" component={FoodDetails} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="OrderDelivered" component={OrderDelivered} />
      <Stack.Screen name="OrderPrepairing" component={OrderPrepairing} />
    </Stack.Navigator>
  );
};

export default MainStack;
