import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@auth/SIGN_UP_SUCCESS': {
        draft.profile = action.payload.user;
        break
      }
      case '@user/UPDATE_NICKNAME_SUCCESS':{
        draft.profile.nickname = action.payload.nickname;
        draft.profile.account_id = action.payload.account_id;
        draft.profile.idLol = action.payload.id;
        break
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      default:
        return state;
    }
  });
}