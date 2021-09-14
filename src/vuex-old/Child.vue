<template>
  <div>     
      <h3>Child</h3> 
         <p>{{$store.state.admin.userType}}</p>
         <button @click="userNewType({user_type:'Employee'})">Change User</button>
  </div>
</template> 
<script>   
import { mapActions } from 'vuex'
export default {
  name: 'Child',  
  methods:{
    // ...mapMutations({
    //   userNewType:'admin/userTypeChange'
    // })
      
    ...mapActions({
      userNewType:'admin/newUser2'
    })
  }
}
</script>
 
