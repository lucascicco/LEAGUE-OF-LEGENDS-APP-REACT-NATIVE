import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import MatchBox from '../MatchBox';


import {
    Container
} from './styles';

export default function Match({Matches, refreshing, onRefresh}) {
    return (
        <Container>
            <FlatList 
                data={Matches}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <MatchBox
                        championUrl={item.championUrl}
                        champion={item.championId}
                        win={item.win}
                        kills={item.kills}
                        deaths={item.deaths}
                        assists={item.assists}
                    />
                )}  
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        title="Puxe para recarregar"
                        tintColor="#fff"
                        titleColor="#fff"
                        colors={["red", "green", "blue"]}
                     />
                  }
            />
        </Container>
    )
}
