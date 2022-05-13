import React from 'react';
import { ViewStyle } from 'react-native';

import { Container } from './cardBase.styles';

interface CardBaseProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const CardBase = ({ children, style }: CardBaseProps) => {
  return <Container style={style}>{children}</Container>;
};

export default CardBase;
