import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 81px;
  height: 122px;
  margin-right: 16px;
`;

export const ContentContainer = styled.View``;
