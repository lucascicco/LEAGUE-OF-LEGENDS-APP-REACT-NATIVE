import React, { useState } from 'react';
import Background from '~/components/Background';
import Tier from '~/components/Tier';
import ButtonTouchable from '~/components/ButtonTouchable' ;
import api from '~/services/api';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, Input, Title , FormView } from './styles';

export default function SearchScreen(){
        const [rank,setRank] = useState({})
        const [nickname, setNickname] = useState('')
        const [loading, setLoading] = useState(false)

        async function HandleOnSubmit(){
            try{        
                setLoading(true)
                const response = await api.get('searchingLeagueTierRoute', {
                    params: {
                        nickname
                    }
                })
                setRank(response.data)
                setLoading(false)
            }catch(e){
                setError(e)
                setLoading(false)
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
                    
                    {rank && <Tier RankedStatus={rank}/>}
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