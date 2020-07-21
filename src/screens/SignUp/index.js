import React, { useRef, useState } from 'react';
import Background from '~/components/Background';


import { useDispatch, useSelector } from 'react-redux';
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
        const loading = useSelector(state => state.auth.loading)

        const emailRef = useRef();
        const passwordRef = useRef();
    
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        function handleSubmit(){
            console.log(email, password)
            dispatch(signUpRequest(email, password))
       }

        return (
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
                                returnKeyType="send"
                                onSubmitEditing={handleSubmit}
                                value={password}
                                onChangeText={setPassword}
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
        )
}
