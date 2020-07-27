import React , { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';
import Background from '~/components/Background';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback , Keyboard} from 'react-native';

import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    SignOutButton,
    Title
  } from './styles';

export default function Profile(){
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    const emailRef = useRef();
    const oldPasswordRef = useRef();
    const passwordRef = useRef();

    const [nickname, setNickname] = useState(profile.nickname);
    const [email, setEmail] = useState(profile.email);
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');


    function handleSubmit() {
        dispatch(
          updateProfileRequest({
            nickname,
            email,
            oldPassword,
            password,
          })
        );
      }

      function handleSignOut(){
          dispatch(signOut())
      }
      
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Background>
                     <Container>
                         <Title>Atualize seus dados</Title>
                         <Form>
                              <FormInput
                                 placeholder="Nome de Invocador"
                                 autoCorrect={false}
                                 autoCapitalize="none"
                                 returnkeytype="next"
                                 value={nickname}
                                 onChangeText={setNickname}
                                 onSubmitEditing={() => emailRef.current.focus()}
                             />

                             <FormInput
                                 icon="mail-outline"
                                 placeholder="Email"
                                 keyboardType="email-address"
                                 autoCorrect={false}
                                 autoCapitalize="none"
                                 returnkeytype="next"
                                 value={email}
                                 onChangeText={setEmail}
                                 ref={emailRef}
                                 onSubmitEditing={() => oldPasswordRef.current.focus()}
                             />

                             <FormInput
                                 icon="lock-outline"
                                 secureTextEntry
                                 placeholder="Senha Atual"
                                 returnkeytype="next"
                                 value={oldPassword}
                                 onChangeText={setOldPassword}   
                                 ref={oldPasswordRef}
                                 onSubmitEditing={() => passwordRef.current.focus()}
                             />

                             <FormInput
                                 icon="lock-outline"
                                 secureTextEntry
                                 placeholder="Nova Senha"
                                 returnkeytype="send"
                                 value={password}
                                 onChangeText={setPassword}
                                 ref={passwordRef}
                                 onSubmitEditing={() => handleSubmit}
                             />

                             <SubmitButton onPress={handleSubmit}>
                                 Atualizar
                             </SubmitButton>

                             <SignOutButton onPress={handleSignOut}>
                                 Sair
                             </SignOutButton>
                         </Form>
                     </Container>
                    </Background>
            </TouchableWithoutFeedback>
        )
}

Profile.navigationOptions = {
    tabBarLabel: 'Atualizar Perfil',
    tabBarIcon: ({ tintColor }) =>  (
        <MaterialIcons name="settings" size={20} color={tintColor} />
    )  
}