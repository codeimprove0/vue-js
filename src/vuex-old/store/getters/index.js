export default {
    hashAdd(state){
        return state.secretKey +'##!!!!!'
    },
    hashNewAdd(state,getters){
        return state.utr +' /'+getters.hashAdd;
    },
    newSecret:(state)=>(data)=>{
        return data+'$$'+state.secretKey
    }
}