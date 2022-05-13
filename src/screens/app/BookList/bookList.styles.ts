import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { marginTop } from '@utils/dimensions';

export const FlatList = styled(Animated.FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})`
  flex: 1;
  margin-top: ${marginTop(0)}px;
`;

export const Container = styled(LinearGradient).attrs({
  colors: ['#E5E5E5', 'rgba(255, 255, 255, 1)'],
})`
  flex: 1;
`;
