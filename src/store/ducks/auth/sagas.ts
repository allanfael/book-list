import { put, takeLatest } from 'redux-saga/effects';

import { authApi } from '@services/ioasys-api/auth';

import { authSuccess, authFailure } from './';

function* authRequest(action) {
  try {
    const response = yield authApi.login(action.payload);
    const { headers } = response;
    const accessToken = headers.authorization;
    yield put(authSuccess({ accessToken }));
  } catch (error) {
    yield put(authFailure());
  }
}

export default takeLatest('auth/authRequest', authRequest);
