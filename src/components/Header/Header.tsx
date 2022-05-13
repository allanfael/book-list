import React from 'react';
import { ViewStyle, ImageStyle } from 'react-native';

import exit from '@assets/images/exit.png';

import Search from '../Search';

import { Container, Image, ExitButton, RowContainer } from './header.styles';
import { Typography } from '../Typography';

interface HeaderProps {
  style?: ViewStyle;
  searchOpacity?: number;
  onPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
  searchOnPress?: () => void;
}

const Header = ({
  style,
  searchOpacity,
  onPress,
  value,
  onChangeText,
  searchOnPress,
}: HeaderProps) => {
  return (
    <Container style={style}>
      <RowContainer>
        <Typography variant='bigBold' color='text'>
          List Books
        </Typography>
        <ExitButton onPress={onPress}>
          <Image source={exit} />
        </ExitButton>
      </RowContainer>
      <Search
        style={{ opacity: searchOpacity }}
        value={value}
        onChangeText={onChangeText}
        searchOnPress={searchOnPress}
      />
    </Container>
  );
};

export default Header;
