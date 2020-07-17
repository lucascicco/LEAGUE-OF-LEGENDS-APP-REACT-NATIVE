import React from 'react';
import { Image } from 'react-native';
import {GenerationRequire} from '~/utils/GenerateImage';
import PropTypes from 'prop-types';

import {
    Container,
    Title,
    Pdl
} from './styles';

export default function Tier({ rank, pdl }) {
    return (
        <Container>
            <Title>{rank}</Title>
            <Image 
                source={GenerationRequire(rank)}
                style={{width: 100, height: 100 }}
                resizeMode='contain'
            />
            {pdl && (
                <Pdl>{pdl} PDL</Pdl>
            )}
        </Container>
    )

}

Tier.protoTypes = {
    rank: PropTypes.string.isRequired,
    pdl: PropTypes.string
}

Tier.defaultProps = {
    rank: 'UNRANKED',
    pdl: 50
}