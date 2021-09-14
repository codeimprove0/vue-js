<template>
  <div>     
      <h3>Child </h3> 
      <p>User Type :-{{userType}} </p>
      <p> UTR :- {{utr}} </p>
  </div>
</template> 
<script>    
import { useStore } from 'vuex'

export default {
  name: 'CompChild',  
  setup(){
      const store = useStore();
      return {
          userType: store.state.admin.userType,
          utr: store.state.utr
      }
  }
}
</script>
 
