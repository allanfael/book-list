import { combineReducers } from '@reduxjs/toolkit';

import auth from './auth';
import books from './books';

export const rootReducer = combineReducers({ auth, books });

export type RootState = ReturnType<typeof rootReducer>;
