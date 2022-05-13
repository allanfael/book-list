import styled from 'styled-components/native';

import { marginTop } from '@utils/dimensions';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    marginTop: marginTop(0),
  },
})`
  flex: 1;
  padding: 16px;
  margin-top: ${marginTop(0)}px;
`;

export const ImageContainer = styled.View`
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6);
  elevation: 3;
`;

export const Image = styled.Image`
  width: 240px;
  height: 350px;
  margin-top: 20px;
`;

export const AspasContainer = styled.View`
  margin: 2px;
`;

export const Aspas = styled.Image``;

export const BackArrow = styled.Image``;

export const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  border: 1px solid rgba(51, 51, 51, 0.2);
  justify-content: center;
  align-items: center;
  align-self: flex-start;
`;
