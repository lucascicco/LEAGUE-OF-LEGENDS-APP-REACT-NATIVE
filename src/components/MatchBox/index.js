import React from 'react';
import { Image } from 'react-native';

import {
    Container,
    Status,
    Title,
    KDA
} from './styles';

export default function MatchBox({ championUrl, win, kills, deaths, assists }) {
    const AMA = `${kills}/${deaths}/${assists}`
    return (
        <Container win={win}> 
            <Image
                source={{uri: championUrl }}
                style={{ borderRadius: 60, width: 100, height: 90}}
                resizeMode="stretch"      
            />
            <Status>
                <Title>{win ? 'Vitória' : 'Derrota' }</Title>
                <KDA>{AMA}</KDA>
            </Status>

        </Container>
    )
}

