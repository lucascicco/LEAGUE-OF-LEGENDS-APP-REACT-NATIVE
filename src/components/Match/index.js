import React from 'react';
import { FlatList } from 'react-native';
import MatchBox from '../MatchBox';
import matches from '~/utils/matches';

import {
    Container
} from './styles';

export default function Match() {

    return (
        <Container>
            <FlatList 
                data={matches}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.gameId}
                renderItem={({ item }) => (

                    <MatchBox 
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
