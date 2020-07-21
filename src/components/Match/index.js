import React from 'react';
import { FlatList } from 'react-native';
import MatchBox from '../MatchBox';
import matches from '~/utils/matches';

import {
    Container
} from './styles';

export default function Match({Matches}) {
    return (
        <Container>
            <FlatList 
                data={Matches}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.gameId.toString()}
                renderItem={({item}) => (
                    <MatchBox 
                        champion={item.championId}
                        win={item.win}
                        kills={item.kills}
                        deaths={item.deaths}
                        assists={item.assists}
                    />
                )}       
            />
        </Container>
    )
}
