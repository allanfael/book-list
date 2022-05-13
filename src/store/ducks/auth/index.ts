import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  accessToken: string | null;
  loading: boolean;
  signed: boolean;
}

interface AuthPayload {
  accessToken: string;
}

const auth = createSlice({
  name: 'auth',
  initialState: {
    accessToken: null,
    loading: false,
    signed: false,
  } as AuthState,
  reducers: {
    authRequest: (state, action) => {
      state.loading = true;
    },
    authSuccess: (state, action: PayloadAction<AuthPayload>) => {
      state.accessToken = action.payload.accessToken;
      state.loading = false;
      state.signed = true;
    },
    authFailure: (state) => {
      state.loading = false;
    },
    logout: (state) => {
      state.accessToken = null;
      state.signed = false;
    },
  },
});

export const { authRequest, authSuccess, authFailure, logout } = auth.actions;
export default auth.reducer;
