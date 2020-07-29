import styled from 'styled-components/native';
import { Platform } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';


export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'height',
  })`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    padding: 45px 30px;
`;

export const Form = styled.View`
    align-self: stretch;
    margin-top: 15px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const Strong = styled.Text`
  font-weight: bold;
`;

