import React, {useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import Background from '~/components/Background';
import { withNavigationFocus } from 'react-navigation';
import {  MatchListAdd } from '~/store/modules/lol/actions';
import PropTypes from 'prop-types';
import axios from 'axios';
import api from '~/services/api';
import Tier from '~/components/Tier';
import Match from '~/components/Match';

import {Container} from './styles';
import { Alert } from 'react-native';


function Dashboard({isFocused}){
        const [ranked, setRanked] = useState([])
        const [matches, setMatches] = useState([])
        const [e, setError] = useState('')
        const [loading, setLoading] = useState('')

        const nickname = useSelector(state => state.user.profile.nickname)
        
        async function HandleGrabRanked(){
            try{    
                const responseTier = await api.get('searchingLeagueTierRoute', {
                    params: {
                        nickname
                    }
                })

                setRanked(responseTier.data)

            }catch(e){
                setError(e)
            }
        }

        async function HandleMatchList(){
            try{    
                const responseMatches = await api.get('MatchListRoute', {
                    params: {
                        nickname
                    }
                })  
                
                const dataMatches= responseMatches.data.matches

                const RANKED_SOLO_5v5 = dataMatches.filter(item => {
                    return item.queue === 420
                })

                const partidas = RANKED_SOLO_5v5.slice(0,1)
                
                const promises = partidas.map(async item => {
                    const responseMatch = await api.get('MatchDetailRoute', {
                        params: {
                            gameId: item.gameId
                        }
                    })

                    const data = responseMatch.data.data
                 
                    const {participantId} = data.participantIdentities.find(item => {
                        return item.player.summonerName.toLowerCase() === nickname.toLowerCase()
                    })
        
                    const participant = data.participants.find(item => {
                        return item.participantId === participantId
                    })
        
                    const {win, kills, deaths, assists} = participant.stats
                    const {championId} = participant
        
                    return {
                        gameId: data.gameId,
                        win,
                        kills,
                        deaths,
                        assists,
                        championId
                    }
                })
    
                const results = await Promise.all(promises)
            }catch(e){
                setError(e)
            }
        }
        
        useEffect(() => {
            if(isFocused){
                HandleGrabRanked()
                HandleMatchList()
            } 
        },[nickname, isFocused])


        return(
                <Background>
                    <Container>
                        <Tier RankedStatus={ranked}/>
                        <Match Matches={matches} />
                    </Container>
                </Background>
            )
}  



Dashboard.navigationOptions = {
    tabBarLabel: 'Meu Perfil',
    tabBarIcon: ({ tintColor }) =>  (
        <MaterialIcons name="account-circle" size={20} color={tintColor} />
    )  
}

Dashboard.propTypes = {
    isFocused: PropTypes.bool.isRequired,
  };

export default withNavigationFocus(Dashboard);
