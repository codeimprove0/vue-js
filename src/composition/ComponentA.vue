<template>
  <div> 
     <h1>Component A</h1>
     <ComponentB/>
  </div>
</template> 
<script>
import {provide} from 'vue'
import ComponentB from "./ComponentB.vue"; 
export default {
  name: 'ComponentA',  
  components: {
    ComponentB
  }, 
  setup(){
    provide('testId','901111111111222')
    provide('channelName','#########')
  }
  // provide(){
  //   return { 
  //     testId:'909009090009090',
  //     channelName:'Code Improve'
  //   }
  // }
}
</script>
 
