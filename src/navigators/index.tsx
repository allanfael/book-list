import React from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import colors from '@themes/colors';

// Screens
import { AuthStacks } from './AuthNavigator';
import { AppStacks } from './AppNavigator';
import { RootState } from '@store/ducks/rootReducer';

function RootNavigator() {
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      background: colors.background,
    },
  };

  const Stack = createNativeStackNavigator();

  const signed = useSelector((state: RootState) => state.auth.signed);

  return (
    <NavigationContainer theme={CustomDefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_left',
        }}
      >
        {signed ? (
          <Stack.Screen
            name='App'
            component={AppStacks}
            options={{
              animationTypeForReplace: signed ? 'pop' : 'push',
            }}
          />
        ) : (
          <Stack.Screen name='Auth' component={AuthStacks} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { RootNavigator };
