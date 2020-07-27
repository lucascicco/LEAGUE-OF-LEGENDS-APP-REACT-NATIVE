import React, {useState, useEffect, Fragment} from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSelector ,useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import Background from '~/components/Background';
import { withNavigationFocus } from 'react-navigation';
import {  MatchListAdd } from '~/store/modules/lol/actions';
import PropTypes from 'prop-types';

import api from '~/services/api';
import Tier from '~/components/Tier';
import Match from '~/components/Match';

import {Alert} from 'react-native';
import {Container} from './styles';



function Dashboard(){
        const [ranked, setRanked] = useState([])
        const [refresh, setRefresh] = useState(false)
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState('')

        const dispatch = useDispatch()

        const nickname = useSelector(state => state.user.profile.nickname);
        const matchlist = useSelector(state => state.lol.Matchlist);

        async function HandleGrabRanked(){
            try{    
                const responseTier = await api.get('searchingLeagueTierRoute', {
                    params: {
                        nickname
                    }
                })

                setRanked(responseTier.data)
            }catch(e){
                Alert.alert(
                    'Erro no sistema',
                    'Por favor, aguarde um instante.'
                )
                setError('Erro 1')
            }
        }

        async function handleOnRefresh(){
            setRefresh(true)
            await HandleMatchList()
        }


        async function HandleMatchList(){
            try{   
                const responseMatches = await api.get('MatchListRankedGames', {
                    params: {
                        nickname
                    }
                })  
                
                const matches = responseMatches.data
                
                const linking = async (matches) => {
                  let results=[]
                    for(let item of matches){
                        const details = await api.get('MatchDetailRoute', {
                            params: {
                              gameId: item.gameId
                            }
                        })
                        results.push(details.data)
                    }

                    return results
                }

                linking(matches).then(results => {
                   dispatch(MatchListAdd(results))
                })  

                setLoading(false)
                setRefresh(false)
            }catch(e){
                setError('Erro 2')
                Alert.alert(
                    'Erro no sistema X',
                    'Por favor, aguarde um instante.'
                )
                setRefresh(false)
                setLoading(false)
            }
        }
        
        useEffect(() => {
            async function fecthdata(){
                await HandleGrabRanked()
            }
            
            fecthdata()          
        },[nickname])


        return(
                <Background>
                    <Container>
                        {loading ? (
                            <View>
                                {/* Aguarde invocador... estamos buscando seus dados!*/}
                                <ActivityIndicator size="large" color="#fff" />
                            </View>
                        ) : (
                            <Fragment>
                                <Tier RankedStatus={ranked}/>
                                {matchlist && (
                                    <Match Matches={matchlist} refreshing={refresh} onRefresh={handleOnRefresh}/>
                                )}
                            </Fragment>
                        )} 
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

export default withNavigationFocus(Dashboard);

