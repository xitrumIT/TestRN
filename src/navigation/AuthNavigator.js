import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREEN_NAME } from '@/constants';
import {
  LoginScreen,
  ForgotPasswordScreen,
  RegisterScreen,
} from '@/screens/Auth';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={LoginScreen}
        name={SCREEN_NAME.LOGIN_SCREEN}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={ForgotPasswordScreen}
        name={SCREEN_NAME.FORGOT_PASSWORD_SCREEN}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={RegisterScreen}
        name={SCREEN_NAME.REGISTER_SCREEN}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
