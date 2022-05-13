import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import books from './books/sagas';

export default function* rootSaga() {
  return yield all([auth, books]);
}
