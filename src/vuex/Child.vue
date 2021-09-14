<template>
  <div>     
      <h3>Child</h3> 
         <p>{{$store.state.admin.userType}}</p>
         <button @click="userNewType({user_type:'Employee'})">Change User</button>
  </div>
</template> 
<script>   
import { mapMutations } from 'vuex'
export default {
  name: 'Child',  
  methods:{
    // ...mapMutations({
    //   userNewType:'admin/userTypeChange'
    // })
     ...mapMutations('admin',{
      userNewType:'userTypeChange'
    })
  }
}
</script>
 
