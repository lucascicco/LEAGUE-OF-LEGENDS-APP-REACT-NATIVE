import React, {Fragment} from 'react';
import { Image } from 'react-native';
import {GenerationRequire} from '~/utils/GenerateImage';
import PropTypes from 'prop-types';

import {
    Container,
    Title,
    SmallText
} from './styles';

export default function Tier({RankedStatus}) {
    const {queueType, tier, rank, leaguePoints, wins, losses} = RankedStatus
    return (
        <Container>
            {tier !== 'UNRANKED' ? (
                <Fragment>
                        <Title>{tier} {rank}</Title>
                        <Image 
                            source={GenerationRequire(tier)}
                            style={{width: 100, height: 100, marginTop: 5, marginBottom: 5}}
                            resizeMode='contain'
                        />
                        <SmallText>V:{wins} D:{losses}</SmallText>
                    <SmallText>{leaguePoints} PDL</SmallText>
                </Fragment>
            ) : (
                <Fragment>
                    <Title>Jogador Unranked</Title>
                    <Image 
                        source={GenerationRequire('UNRANKED')}
                        style={{width: 100, height: 100, marginTop: 5}}
                        resizeMode='contain'
                    />
                </Fragment>
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