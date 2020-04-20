import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin-top: ${getStatusBarHeight}px;
  flex: 1;
`;

export const ModalTransfer = styled.Modal``;

export const ContainerModal = styled.View`
  justify-content: flex-end;
  flex: 1;
`;

export const HeaderModal = styled.View`
  height: 100%;
  background: #ccc;
`;

export const Input = styled.TextInput`
  margin-top: 50px;
  font-size: 25px;
  text-align: center;
  color: green;
`;

export const SubmitButton = styled.Button`
  justify-content: center;
  align-items: center;
  background: #7759c1;
  height: 20px;
  width: 20px;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
`;
