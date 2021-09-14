import { createStore } from 'vuex' 
import adminModule from './adminModule'

export default createStore({ 
    modules:{
        admin: adminModule
    },
    state: {
        name: 'code Improve',
        mainTitle: '**** No Title ***',
        utr: 909090,
        secretKey:'888'
    },
    mutations: {
        setNewTitle(state, payload) {
            //  state.mainTitle = '######'+payload
            state.mainTitle = '######' + payload.title
        }
    },
    actions: {
        // newTitle(context,payload){ 
        //     setTimeout(()=>{
        //         context.commit('setNewTitle',payload)
        //     },2000) 
        // }

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
    },
    getters:{
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
})