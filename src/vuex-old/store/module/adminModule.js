import mutations from '../mutations'
export default { 
    namespaced : true,
    state:{
        userType:'Super Admin'
    },
    mutations:mutations,
    actions:{
        newUser2(context){ 
            context.dispatch({
                type:'userTypeChange', user_type:'Title Action 2 Data'
            })
        } 
    }
}