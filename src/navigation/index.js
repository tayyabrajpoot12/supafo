import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';

//screens
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import Intro from '../screens/Auth/Intro';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  //

  const { hasSeen } = useSelector(store => store.user);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      {!hasSeen ? (
        <Stack.Screen name="Intro" component={Intro} />
      ) : (
        <>
          <Stack.Screen name="AuthStack" component={AuthStack} />
          <Stack.Screen name="MainStack" component={MainStack} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigation;
