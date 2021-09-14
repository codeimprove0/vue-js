import { createStore } from 'vuex' 
import adminModule from './module/adminModule'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export default createStore({ 
    modules:{
        admin: adminModule
    },
    state: {
        name: 'code Improve',
        mainTitle: '****1 No Title 1***',
        utr: 909090,
        secretKey:'888'
    },
    mutations: mutations,
    actions: actions,
    getters:getters
})