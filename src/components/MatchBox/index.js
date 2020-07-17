import React from 'react';
import { Image } from 'react-native';

import {
    Container,
    Status,
    Title,
    KDA
} from './styles';

export default function MatchBox({ uri, win, kills, deaths, assists }) {
    const AMA = `${kills}/${deaths}/${assists}`

    return (
        <Container win={win}> 
            <Image
                source={{uri: 'https://iconbug.com/data/06/512/0ee4271455327b88c47ab2326dde7e78.png' }}
                style={{ borderRadius: 10, width: 80, height: 80}}
                resizeMode='contain'
            />

            <Status>
                <Title>{win ? 'Vitória' : 'Derrota' }</Title>
                <KDA>{AMA}</KDA>
            </Status>

        </Container>
    )
}

