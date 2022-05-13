import React, { forwardRef } from 'react';
import { TextInputProps, ViewStyle } from 'react-native';

import { Typography } from '../Typography';
import Loading from '../Loading';

import {
  Container,
  Button,
  Input as InputComponent,
  InputContainer,
} from './input.styles';

interface InputProps extends TextInputProps {
  label: string;
  style?: ViewStyle;
  variant?: 'password';
  onPress?: () => void;
  testIDButton?: string;
  testIDInput?: string;
  loading?: boolean;
}

const Input = (
  {
    label,
    style,
    variant,
    onPress,
    testIDButton,
    testIDInput,
    loading,
    ...restProps
  }: InputProps,
  ref
) => {
  return (
    <Container style={style}>
      <InputContainer
        ref={ref}
        style={{ width: variant === 'password' ? '70%' : '100%' }}
      >
        <Typography variant='smallMedium' color='background' testID='logo'>
          {label}
        </Typography>
        <InputComponent {...restProps} testID={testIDInput} />
      </InputContainer>

      {variant === 'password' && (
        <Button onPress={onPress} testID={testIDButton}>
          {loading ? (
            <Loading />
          ) : (
            <Typography variant='normalMedium'>Entrar</Typography>
          )}
        </Button>
      )}
    </Container>
  );
};

export default forwardRef(Input);
