import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import { createBlacklistFilter } from 'redux-persist-transform-filter';

export default (reducers) => {
  const authBlackList = createBlacklistFilter('auth', ['loading']);

  const persistedReducer = persistReducer(
    {
      key: 'ioasys',
      storage: AsyncStorage,
      whitelist: ['auth'],
      transforms: [authBlackList],
    },
    reducers
  );

  return persistedReducer;
};
