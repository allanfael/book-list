import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  width: 100%;
  align-items: center;
  background: ${({ theme }) => theme.secondary};
`;

export const RowContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const Image = styled(Animated.Image)``;

export const ExitButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  border: 1px solid rgba(51, 51, 51, 0.2);
  justify-content: center;
  align-items: center;
`;
