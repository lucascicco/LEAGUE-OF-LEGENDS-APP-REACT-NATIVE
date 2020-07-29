import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '~/services/api';
import { updateProfileSuccess , updateProfileFailure, updateNicknameSuccess } from './actions';

export function* updateProfile({payload}){
   try{
      const {email, nickname, ...rest } = payload.data;
      console.log(nickname)

      const profile = {
          email,
          nickname,
          ...(rest.oldPassword ? rest : {}),
        };

      const response = yield call(api.put, 'users', profile)

      const NicknameOnChange = yield call(api.get, 'searchingNameRoute', {
         params: {
            nickname
         }
      })
      
      console.log(NicknameOnChange.data)

      yield put(updateProfileSuccess(response.data))
      yield put(updateNicknameSuccess(NicknameOnChange.data))

      Alert.alert(
         'Sucesso!',
         'Perfil atualizado com successo!'
      )

   }catch(e){
      Alert.alert(
         'Falha na autenticação',
         'Houve um erro na atualização, verifique seus dados.'
      )
    
      yield put(updateProfileFailure());
    
   }
}

export function* updateNickname({ payload }){
   try{
      const nickname = payload.nickname

      const response = yield call(api.get, 'searchingNameRoute', {
         params: {
            nickname
         }
      })

      yield put(updateNicknameSuccess(response.data))
      
      yield call(api.put, 'users', {
         nickname: response.data.nickname
      })

      
   }catch(e){

      Alert.alert(
         'Invocador não existente',
         'Digite seu nome novamente.'
     )

     yield put(updateProfileFailure());
   }
}

export default all([
    takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
    takeLatest('@user/UPDATE_NICKNAME_REQUEST', updateNickname)
])