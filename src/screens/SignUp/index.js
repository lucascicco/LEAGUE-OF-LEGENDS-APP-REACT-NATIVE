import React, { useRef, useState } from 'react';
import Background from '~/components/Background';
import { TouchableWithoutFeedback , Keyboard, Alert} from 'react-native';
import { useDispatch } from 'react-redux';
import { signUpRequest } from '~/store/modules/auth/actions';


import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    SignLink,
    SignLinkText,
    Strong,
  } from './styles';

export default function SignUp({ navigation }){
        const dispatch = useDispatch();
        
        const emailRef = useRef();
        const passwordRef = useRef();
        const ConfirmPasswordRef = useRef();

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [ConfirmPassword, setConfirmPassword] = useState('');

        function handleSubmit(){
       
            if(password !== ConfirmPassword){
                Alert.alert(
                    'Erro',
                    'As senhas não se correspondem.'
                )
            
            }else{
                dispatch(signUpRequest(email, password))
                
            }    
       }

        return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Background>
                <Container> 
                    <Form>
                    
                         <FormInput
                                icon="mail-outline"
                                placeholder="Email"
                                keyboardType="email-address"
                                autoCorrect={false}
                                autoCapitalize="none"
                                ref={emailRef}
                                returnKeyType="next"
                                onSubmitEditing={() => passwordRef.current.focus()}
                                value={email}
                                onChangeText={setEmail}
                            />

                            <FormInput
                                icon="lock-outline"
                                placeholder="Senha"
                                secureTextEntry
                                ref={passwordRef}
                                returnKeyType="next"
                                onSubmitEditing={() => ConfirmPasswordRef.current.focus()}
                                value={password}
                                onChangeText={setPassword}
                            />

                            <FormInput
                                icon="lock-outline"
                                placeholder="Confirmar Senha"
                                secureTextEntry
                                ref={ConfirmPasswordRef}
                                returnKeyType="send"
                                onSubmitEditing={handleSubmit}
                                value={ConfirmPassword}
                                onChangeText={setConfirmPassword}
                            />

                        <SubmitButton onPress={handleSubmit}>
                            Cadastrar
                        </SubmitButton>

                    </Form>

                    <SignLink onPress={() => navigation.navigate('Login')}>
                        <SignLinkText>
                            <Strong>Já possui conta?</Strong> 
                        </SignLinkText>
                    </SignLink>
                    
                </Container>
            </Background>
        </TouchableWithoutFeedback>
    )
}
