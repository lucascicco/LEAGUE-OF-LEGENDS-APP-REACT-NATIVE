import React, {useState, useEffect} from 'react';
import { Animated, LayoutAnimation, Alert} from 'react-native';
import { useDispatch } from 'react-redux';
import { updateNicknameRequest } from '~/store/modules/user/actions';
import Background from '~/components/Background';
import ButtonTouch from '~/components/ButtonTouchable';
import api from '~/services/api';

import {
    Container,
    Input,
    Title
} from './styles';


export default function FirstAccess() {
        const dispatch = useDispatch();
        const [nickname, setNickname] =  useState('');  
        const [loading, setLoading] = useState(false)

        function sleep(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }

        async function handleSubmit() {
            if(nickname.length === 0){

                Alert.alert(
                    'Campo vazio',
                    'Por favor, preencha o campo.'
                )

            }else{

                setLoading(true)

                dispatch(updateNicknameRequest(nickname))
                   
                const animation = LayoutAnimation.create(
                     500,
                     LayoutAnimation.Types.easeInEaseOut,
                     LayoutAnimation.Properties.opacity
                 )
                   
                 LayoutAnimation.configureNext(animation)
                 
         }}


          const LayoutOpacity = new Animated.Value(0)

          useEffect(() => {
            Animated.timing(LayoutOpacity, {
                toValue: 1,
                duration: 2000,
                delay: 750,
                useNativeDriver: true,
            }).start()
          }, [])

        return (
            <Background>
                    <Container>
                        <Animated.View style={{ 
                            opacity: LayoutOpacity, 
                            alignItems: 'center',
                            
                        }}>
                            <Title>Digite seu nome em jogo</Title>
                            <Input
                                icon="person-outline"
                                placeholder="Nickname"
                                autoCorrect={false}
                                autoCapitalize="none"
                                returnKeyType="next"
                                onSubmitEditing={handleSubmit}
                                value={nickname}
                                onChangeText={setNickname}
                            />
                            <ButtonTouch onPress={handleSubmit} loading={loading}>
                                Continuar
                            </ButtonTouch>
                        </Animated.View>
                    </Container>
            </Background>
        )
}
