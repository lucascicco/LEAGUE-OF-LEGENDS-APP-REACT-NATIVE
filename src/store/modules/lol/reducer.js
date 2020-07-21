import produce from 'immer'

const INITIAL_STATE = {
    Matchlist:[]
};

export default function auth(state = INITIAL_STATE, action){
    return produce(state, draft => {
        switch(action.type){
            case '@auth/MATCH_LIST_ADD': {
                    draft.Matchlist = action.type.payload.Matchlist;
                    break
            }  
            case '@auth/MATCH_LIST_REMOVEALL': {
                    draft.Matchlist = null;
                    break
            }
            default:
                return state;
        }     
    })
}