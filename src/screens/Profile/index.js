import React, { Component } from 'react';
import {Image} from 'react-native'
import Background from '~/components/Background';

import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    Strong,
    Title
  } from './styles';

export default class Profile extends Component {
    render() {
        return (
            <Background>
                <Container>
                    <Title>Atualize seus dados</Title>
                    <Form>
                         <FormInput
                            placeholder="Nome de Invocador"
                            autoCorrect={false}
                            autoCapitalize="none"
                            returnKeyType="Próximo"
                        />

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
                            placeholder="Senha Atual"
                            returnkKeyType="Próximo"
                        />

                        <FormInput
                            icon="lock-outline"
                            secureTextEntry
                            placeholder="Nova Senha"
                            returnkKeyType="Enviar"
                        />

                        <SubmitButton>
                            Atualizar
                        </SubmitButton>
                    </Form>
                </Container>
            </Background>
        )
    }
}
