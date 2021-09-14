export default { 
    namespaced : true,
    state:{
        userType:'Super Admin'
    },
    mutations:{
        userTypeChange(state,payload){
            state.userType = payload.user_type
        }
    }
}