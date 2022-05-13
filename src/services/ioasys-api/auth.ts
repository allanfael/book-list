import callBaseApi from '../base';

const authApi = {
  login: (data: { email: string; password: string }) =>
    callBaseApi({
      title: 'Auth - Login',
      method: 'POST',
      endpoint: '/auth/sign-in',
      data: {
        email: data.email,
        password: data.password,
      },
    }),
};

export { authApi };
