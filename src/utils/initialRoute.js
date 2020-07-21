export default (signed, hasNickname) => {
    if(signed){
        if(hasNickname){
            return 'App'
        }else{
            return 'FirstAccess'
        }
    }else{
        return 'Sign'
    }
}