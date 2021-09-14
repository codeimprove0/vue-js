export default { 
    newTitle(context, payload) {
        return new Promise((resolve) => {
            setTimeout(() => {
                context.commit('setNewTitle', payload)
                resolve('ok me aa gya')
            }, 2000)
        })
    },

    newTitle2(context){
        context.dispatch({
            type:'newTitle', title:'Title Action 2 Data'
        }).then((response)=>{
            console.log('=====',response)
        })
    } 
}