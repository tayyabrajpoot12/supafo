import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

//screens
import ForgotPassword from '../screens/Auth/ForgotPassword';
import NewPassword from '../screens/Auth/ForgotPassword/NewPassword';
import VerifyOtp from '../screens/Auth/ForgotPassword/VerifyOtp';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';
import EmailMessage from '../screens/Auth/Signup/EmailMessage';
import VerifyUser from '../screens/Auth/Signup/VerifyUser';
import GetStarted from '../screens/Auth/GetStarted';
import ForgotByPhone from '../screens/Auth/ForgotPassword/ForgotByPhone';
import ForgotByEmail from '../screens/Auth/ForgotPassword/ForgotByEmail';
import PasswordSuccess from '../screens/Auth/ForgotPassword/PasswordSuccess';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  //

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="EmailMessage" component={EmailMessage} />
      <Stack.Screen name="VerifyUser" component={VerifyUser} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ForgotByEmail" component={ForgotByEmail} />
      <Stack.Screen name="ForgotByPhone" component={ForgotByPhone} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
      <Stack.Screen name="PasswordSuccess" component={PasswordSuccess} />
    </Stack.Navigator>
  );
};

export default AuthStack;
