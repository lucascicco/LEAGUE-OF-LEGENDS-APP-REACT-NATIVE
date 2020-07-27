import React, { useState, Fragment} from 'react';
import Background from '~/components/Background';
import Tier from '~/components/Tier';
import ButtonTouchable from '~/components/ButtonTouchable' ;
import api from '~/services/api';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, Input, Title , FormView } from './styles';
import {Alert , Keyboard, LayoutAnimation } from 'react-native';

const State = {
    Launching: 'Launching',
    WillTransitionIn: 'WillTransitionIn',
};

  
export default function SearchScreen(){
        const [rank,setRank] = useState()
        const [nickname, setNickname] = useState('')
        const [loading, setLoading] = useState(false)
        const [transitionState, setTransitionState] = useState(State.Launching)

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
          }

        async function HandleOnSubmit(){
           if(!nickname){
                Alert.alert(
                    'Erro',
                    'Preencha o campo!'
                )
           }else{
               Keyboard.dismiss()
                try{        
                    setLoading(true)
                    const response = await api.get('searchingLeagueTierRoute', {
                        params: {
                            nickname
                        }
                    })
                    
                    await sleep(500);

                    const animation = LayoutAnimation.create(
                        750,
                        LayoutAnimation.Types.easeInEaseOut,
                        LayoutAnimation.Properties.opacity
                    )
                    
                    LayoutAnimation.configureNext(animation)

                    setTransitionState(State.WillTransitionIn)
                    setRank(response.data)
                    setLoading(false)
                   
        
                }catch(e){
                    Alert.alert(
                        'Erro',
                        e
                    )
                    setLoading(false)
                }
           }
        }


        return (
            <Background>

                    <Container>
                        <FormView>
                            <Title>Pesquise o rank</Title>
                            <Input 
                                placeholder="Nome de Invocador"
                                autoCorrect={false}
                                autoCapitalize="none"
                                returnkeytype="next"
                                value={nickname}
                                onChangeText={setNickname}
                            />
                            <ButtonTouchable onPress={HandleOnSubmit} loading={loading} >
                                Pesquisar
                            </ButtonTouchable>
                        </FormView>
                         {transitionState !== State.Launching && (
                            <Fragment>
                                {rank && <Tier RankedStatus={rank}/>}
                            </Fragment>
                        )}
                    </Container>        
            </Background>
        )
}

SearchScreen.navigationOptions = {
    tabBarLabel: 'Pesquisar',
    tabBarIcon: ({ tintColor }) =>  (
        <MaterialIcons name="search" size={20} color={tintColor} />
    )  
}