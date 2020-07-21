export function MatchListAdd(Matchlist){
    return {
        type: '@auth/MATCH_LIST_ADD',
        payload: {Matchlist}
    }
}


export function MatchListClean(){
    return {
        type: '@auth/MATCH_LIST_REMOVEALL',
    }
}
