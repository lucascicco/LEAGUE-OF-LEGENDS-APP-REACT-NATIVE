import React, { Component } from 'react';
import Background from '~/components/Background';
import Tier from '~/components/Tier';
import ButtonTouchable from '~/components/ButtonTouchable' 

import { Container, Input, Title } from './styles';

export default class SearchScreen extends Component {
    render() {
        return (
            <Background>
                <Container>
                    <Title>Pesquise o rank</Title>
                    <Input 
                        placeholder="Nome do invocador"
                    />
                    <ButtonTouchable>
                        Pesquisar
                    </ButtonTouchable>
                    <Tier />
                </Container>
            </Background>
        )
    }
}
