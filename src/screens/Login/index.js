import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {Image} from 'react-native';
import Background from '~/components/Background';


import { useDispatch } from 'react-redux';
import { signInRequest } from '~/store/modules/auth/actions';

import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    SignLink,
    SignLinkText,
    Strong,
  } from './styles';

export default function Login({ navigation }){
        const dispatch = useDispatch()
        
        const loading = useSelector(state => state.auth.loading)

        const passwordRef = useRef();
        
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        function handleSubmit(){
          dispatch(signInRequest(email, password));
        }

        return (
            <Background>
                <Container>
                    <Image 
                       source={require('~/assets/Lol1.png')}
                       style={{height: 200, width: 300 }} 
                       resizeMode="contain"
                    />
              
                    <Form>
                        <FormInput
                          icon="mail-outline"
                          placeholder="Email"
                          keyboardType="email-address"
                          autoCorrect={false}
                          autoCapitalize="none"
                          returnkeytype="next"
                          onSubmitEditing={() => passwordRef.current.focus()}
                          value={email}
                          onChangeText={setEmail}

                        />

                        <FormInput
                            icon="lock-outline"
                            secureTextEntry
                            placeholder="Senha"
                            returnkeytype="send"
                            ref={passwordRef}
                            onSubmitEditing={handleSubmit}
                            value={password}
                            onChangeText={setPassword}
                        />

                        <SubmitButton onPress={handleSubmit} loading={loading}>
                          Acessar
                        </SubmitButton>

                    </Form>

                    <SignLink onPress={() => navigation.navigate('SignUp')}>
                        <SignLinkText>
                            <Strong>Criar conta gratuita</Strong> 
                        </SignLinkText>
                    </SignLink>

                </Container>
            </Background>
        )
}
