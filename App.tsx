import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import { LogBox } from 'react-native';
import AppLoading from 'expo-app-loading';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import {
  useFonts,
  Heebo_400Regular,
  Heebo_600SemiBold,
  Heebo_700Bold,
} from '@expo-google-fonts/heebo';

import '@config/ReactotronConfig';

import theme from '@themes/colors';

import { RootNavigator } from '@navigator';

import { store, persistor } from '@store';

LogBox.ignoreLogs(['Require cycle']);

export default function App() {
  let [fontsLoaded] = useFonts({
    Heebo_400Regular,
    Heebo_600SemiBold,
    Heebo_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
