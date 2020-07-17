import React, { Component } from 'react'

import Background from '~/components/Background';

import Tier from '~/components/Tier';
import Match from '~/components/Match';

import {Container} from './styles';

export default class Dashboard extends Component {
    render() {
        return (
            <Background>
                <Container>
                    <Tier />
                    <Match />
                </Container>
            </Background>
        )
    }
}
