export function updateProfileRequest(data){
    return {
        type: '@user/UPDATE_PROFILE_REQUEST',
        payload: { data }
    }
}

export function updateProfileSuccess(profile){
    return {
        type: '@user/UPDATE_PROFILE_SUCCESS',
        payload: { profile }
    }
}

export function updateProfileFailure(data){
    return {
        type: '@user/UPDATE_PROFILE_FAILURE',
        payload: { data }
    }
}

export function updateNicknameRequest(nickname){
    return {
        type: '@user/UPDATE_NICKNAME_REQUEST',
        payload: {
            nickname
        }
    }
}

export function updateNicknameSuccess({nickname, account_id, id}){
    return {
        type: '@user/UPDATE_NICKNAME_SUCCESS',
        payload: {
            nickname,
            account_id,
            id
        }
    }
}