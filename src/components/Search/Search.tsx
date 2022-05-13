import React from 'react';
import { ViewStyle } from 'react-native';

import lupa from '@assets/images/lupa.png';

import { Container, Input, Button, Icon } from './search.styles';

interface SearchProps {
  style?: ViewStyle;
  value: string;
  onChangeText: (text: string) => void;
  searchOnPress: () => void;
}

const Search = ({ style, value, onChangeText, searchOnPress }: SearchProps) => {
  return (
    <Container style={style}>
      <Input
        placeholder='Procure um livro'
        value={value}
        onChangeText={onChangeText}
      />
      <Button onPress={searchOnPress}>
        <Icon source={lupa} />
      </Button>
    </Container>
  );
};

export default Search;
