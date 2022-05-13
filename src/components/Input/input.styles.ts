import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  height: 60px;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.32);
`;

export const InputContainer = styled.View`
  height: 60px;
`;

export const Input = styled.TextInput`
  height: 30px;
  width: 100%;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-family: 'Heebo_400Regular';
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  height: 36px;
  width: 85px;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
