import { AxiosError } from 'axios';

import { store } from '@store';
import { logout } from '@store/ducks/auth';

export const handleApiErros = (error: AxiosError) => {
  switch (error.message) {
    case 'Request failed with status code 401':
      store.dispatch(logout());
      break;
    default:
      break;
  }
};
