import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  flex-direction: row;
  height: 48px;
  width: 100%;
  border-radius: 2px;
  border: 1px solid rgba(51, 51, 51, 0.2);
  justify-content: space-around;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
`;

export const Input = styled.TextInput`
  height: 100%;
  width: 86%;
  color: rgba(153, 153, 153, 0.7);
  font-size: 12px;
  font-family: 'Heebo_600SemiBold';
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.Image``;
