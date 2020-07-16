import React, { Component } from 'react';
import {Image} from 'react-native'
import Background from '~/components/Background';

import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    SignLink,
    SignLinkText,
    Strong,
  } from './styles';

export default class Login extends Component {
    render() {
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
                          returnKeyType="Próximo"
                        />

                        <FormInput
                          icon="lock-outline"
                          secureTextEntry
                          placeholder="Senha"
                        returnkKeyType="Enviar"
                        />
                        <SubmitButton>
                          Acessar
                        </SubmitButton>
                    </Form>

                    <SignLink>
                        <SignLinkText>
                            <Strong>Criar conta gratuita</Strong> 
                        </SignLinkText>
                    </SignLink>
                </Container>
            </Background>
        )
    }
}
