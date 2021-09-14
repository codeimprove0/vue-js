import {USER_TYPE_CHANGE} from '../constants'
export default {
    setNewTitle(state, payload) {
        //  state.mainTitle = '######'+payload
        state.mainTitle = '######' + payload.title
    },
    [USER_TYPE_CHANGE](state,payload){
        state.userType = payload.user_type+'1'
    }
}