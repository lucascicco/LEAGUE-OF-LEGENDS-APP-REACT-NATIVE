import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { updateNicknameRequest, updateProfileRequest} from '~/store/modules/user/actions';
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

         function handleSubmit() {
            dispatch(updateNicknameRequest(nickname))
          }

        return (
            <Background>
                <Container>
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
                    <ButtonTouch onPress={handleSubmit}>
                        Continuar
                    </ButtonTouch>
                </Container>
            </Background>
        )
}
