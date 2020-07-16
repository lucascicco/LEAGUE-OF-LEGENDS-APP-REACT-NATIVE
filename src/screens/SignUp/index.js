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

export default class SignUp extends Component {
    render() {
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
                          returnKeyType="Próximo"
                        />

                        <FormInput
                          icon="lock-outline"
                          secureTextEntry
                          placeholder="Senha"
                         returnkKeyType="Próximo"
                        />

                        <FormInput
                            icon="lock-outline"
                            secureTextEntry
                            placeholder="Confirmar Senha"
                            returnkKeyType="Enviar"
                        />

                        <SubmitButton>
                          Cadastrar
                        </SubmitButton>
                    </Form>

                    <SignLink>
                        <SignLinkText>
                            <Strong>Já possui conta?</Strong> 
                        </SignLinkText>
                    </SignLink>
                </Container>
            </Background>
        )
    }
}
