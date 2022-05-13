import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookList from '@screens/app/BookList';
import BookDetails from '@screens/app/BookDetails';

export const AppStacks = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'fullScreenModal',
      }}
    >
      <Stack.Screen component={BookList} name='BookListScreen' />
      <Stack.Screen component={BookDetails} name='BookDetailsScreen' />
    </Stack.Navigator>
  );
};
