import {createWebHistory,createRouter} from 'vue-router'
import Add from './components/Blog/Add'
import Edit from './components/Blog/Edit'
import List from './components/Blog/List' 
//import store from './vuex/store'

const routes = [
    {
        name:'Add',
        path:'/add',
        component:Add
    },
    {
        name:'Edit',
        path:'/edit/:editId',
        component:Edit
    },
    {
        name:'List',
        path:'/list',
        component:List
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
 
// router.beforeEach(()=>{
//     console.log(store,'====')
// })


export default router