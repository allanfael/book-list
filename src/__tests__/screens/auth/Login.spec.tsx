import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import * as ReactRedux from 'react-redux';

import { authRequest } from '@store/ducks/auth';
import Login from '@screens/auth/Login';

const initialState = {
  auth: {
    loading: false,
  },
};
const mockStore = configureStore();
let store;
store = {
  ...mockStore(initialState),
  dispatch: jest.fn(),
};

test('Login renders correctly', () => {
  const { getByTestId } = render(
    <ReactRedux.Provider store={store}>
      <Login />
    </ReactRedux.Provider>
  );

  expect(getByTestId('login-screen')).toBeTruthy();
});

describe('Input', () => {
  it('should render email input', () => {
    const { getByTestId } = render(
      <ReactRedux.Provider store={store}>
        <Login />
      </ReactRedux.Provider>
    );

    expect(getByTestId('email-input')).toBeTruthy();
  });
  it('should render password input', () => {
    const { getByTestId } = render(
      <ReactRedux.Provider store={store}>
        <Login />
      </ReactRedux.Provider>
    );

    expect(getByTestId('password-input')).toBeTruthy();
  });
  it('should render button input', () => {
    const { getByTestId } = render(
      <ReactRedux.Provider store={store}>
        <Login />
      </ReactRedux.Provider>
    );

    expect(getByTestId('login-button')).toBeTruthy();
  });
  it('should render default values', () => {
    const { getByTestId } = render(
      <ReactRedux.Provider store={store}>
        <Login />
      </ReactRedux.Provider>
    );

    expect(getByTestId('email-input').props.value).toBe(
      'desafio@ioasys.com.br'
    );
    expect(getByTestId('password-input').props.value).toBe('12341234');
  });
});

// it('should be able to dispatch email and password', async () => {
//   const mockDispatch = jest.fn();
//   jest.mock('react-redux', () => ({
//     useSelector: jest.fn(),
//     useDispatch: () => {},
//   }));

//   beforeEach(() => {
//     mockDispatch.mockClear();
//   });

//   const CHANGE_TEXT_EMAIL = 'desafio@ioasys.com.br';
//   const CHANGE_TEXT_PASSWORD = '12341234';

//   const { getByTestId } = render(
//     <ReactRedux.Provider store={store}>
//       <Login />
//     </ReactRedux.Provider>
//   );

//   fireEvent.changeText(getByTestId('email-input'), CHANGE_TEXT_EMAIL);
//   expect(getByTestId('email-input')).toHaveProp('value', CHANGE_TEXT_EMAIL);

//   fireEvent.changeText(getByTestId('email-input'), CHANGE_TEXT_PASSWORD);
//   expect(getByTestId('email-input')).toHaveProp('value', CHANGE_TEXT_PASSWORD);

//   const button = getByTestId('login-button');

//   const dispatch = jest.fn();
//   mockDispatch.mockReturnValue(dispatch);

//   await act(async () => fireEvent.press(button));

//   expect(dispatch).toHaveBeenCalledWith(
//     authRequest({
//       password: CHANGE_TEXT_PASSWORD,
//       email: CHANGE_TEXT_EMAIL,
//     })
//   );

//   mockDispatch.mockClear();
// });
