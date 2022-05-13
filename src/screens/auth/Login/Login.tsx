import React, { useRef } from 'react';
import * as yup from 'yup';
import { TextInput } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '@store';
import { authRequest } from '@store/ducks/auth';
import { RootState } from '@store/ducks/rootReducer';

import { Input, Typography } from '@components';

import background from '@assets/images/background_image.png';

import { Container } from './login.styles';

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.auth.loading);

  const passwordRef = useRef<null | TextInput>(null);

  const signInSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(4),
  });

  const { handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = async (data: FormData) => {
    dispatch(authRequest(data));
  };

  return (
    <Container source={background} testID='login-screen'>
      <Typography
        variant='bigBold'
        color='background'
        style={{
          alignSelf: 'flex-start',
        }}
      >
        Aplicação Exemplo
      </Typography>

      <Controller
        control={control}
        name='email'
        rules={{
          required: true,
        }}
        defaultValue={__DEV__ ? 'desafio@ioasys.com.br' : ''}
        render={({ field: { onChange, value } }) => (
          <Input
            label='Login'
            style={{ marginTop: 100 }}
            testIDInput='email-input'
            autoCompleteType='email'
            textContentType='emailAddress'
            autoCapitalize='none'
            keyboardType='email-address'
            returnKeyType='next'
            onSubmitEditing={() => passwordRef.current?.focus()}
            onChangeText={(value) => {
              onChange(value);
            }}
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name='password'
        rules={{
          required: true,
        }}
        defaultValue={__DEV__ ? '12341234' : ''}
        render={({ field: { onChange, value } }) => (
          <Input
            ref={passwordRef}
            testIDInput='password-input'
            testIDButton='login-button'
            label='Senha'
            style={{ marginTop: 20 }}
            variant='password'
            textContentType='password'
            autoCompleteType='password'
            secureTextEntry
            returnKeyType='done'
            onChangeText={(value) => {
              onChange(value);
            }}
            value={value}
            onSubmitEditing={handleSubmit(onSubmit)}
            onPress={handleSubmit(onSubmit)}
            loading={loading}
          />
        )}
      />
    </Container>
  );
};

export default Login;
