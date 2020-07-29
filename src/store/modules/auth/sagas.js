import { Alert } from 'react-native'
import { takeLatest , call, put, all } from 'redux-saga/effects';
import { signInSuccess, signFailure, signUpSuccess} from './actions';
import { updateNicknameSuccess } from '../user/actions';
import api from '~/services/api';

export function* signIn({ payload }){
    try{
        const { email, password } = payload;

        const response = yield call(api.post, 'login', {
            email,
            password
        });

        const { token , user } = response.data;
            
        api.defaults.headers.Authorization = `Bearer ${token}`

        yield put(signInSuccess(token, user))


        if(user.nickname){
            const NicknameResponse = yield call(api.get, 'searchingNameRoute', {
                params: {
                   nickname: user.nickname
                }

             })

            yield put(updateNicknameSuccess(NicknameResponse.data))
        }
        
    }catch(e){

        Alert.alert(
        'Falha no login', 
        'Houve um erro no login, verfique seus dados.'
        );

        yield put(signFailure())
    };
}

export function* signUp({ payload }){
    try{
        const { email, password } = payload   

        const response = yield call(api.post, 'users', {
            email: email,
            password: password
        })
        
        const { token , user } = response.data;
        
        api.defaults.headers.Authorization = `Bearer ${token}`

        yield put(signUpSuccess(token, user))
    }catch(err){
        Alert.alert(
            'Falha no cadastro', 
            'Houve um erro no cadastro, verfique seus dados.'
            );

        yield put(signFailure())
    }
      
}

export function setToken({ payload }){
    if(!payload) return;
    
    const { token } = payload.auth;

    if(token){
        api.defaults.headers.Authorization = `Bearer ${token}`
    }
}


export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
])