import styled from 'styled-components/native';
import { Platform } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';


export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding'
  })`
    flex: 1;
    padding: 0 10px;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.View`
    align-self: stretch;
    margin-top: 10px;
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

export const Title = styled.Text`
    color: #fff;
    font-size: 30px;
    margin-bottom: 10px;
`;

export const SignOutButton = styled(Button)`
  margin-top: 20px;
  background: #f64c75;
`;