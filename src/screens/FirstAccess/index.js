import React, { Component } from 'react';

import Background from '~/components/Background';

import ButtonTouch from '~/components/ButtonTouchable';

import {
    Container,
    Input,
    Title
  } from './styles';


export default class FirstAccess extends Component {
    render() {
        return (
            <Background>
                <Container>
                    <Title>Digite seu nome em jogo</Title>
                    <Input
                    
                    />
                    <ButtonTouch>
                        Continuar
                    </ButtonTouch>
                </Container>
            </Background>
        )
    }
}
