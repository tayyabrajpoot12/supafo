import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import TabStack from './TabStack';

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
    </Stack.Navigator>
  );
};

export default MainStack;
