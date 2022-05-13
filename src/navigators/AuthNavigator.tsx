import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '@screens/auth/Login';

export const AuthStacks = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Login}
        name='LoginScreen'
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
