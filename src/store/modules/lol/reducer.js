import produce from 'immer'

const INITIAL_STATE = {
    Matchlist:[]
};

export default function lol(state = INITIAL_STATE, action){
    return produce(state, draft => {
        switch(action.type){
            case '@auth/MATCH_LIST_ADD': {
                    draft.Matchlist = action.payload.Matchlist;
                    break
            }  
            case '@auth/SIGN_OUT': {
                    draft.Matchlist = [];
                    break
            }
            default:
                return state;
        }     
    })
}