<template>
  <div> 
     <h1>Component A</h1>
     <ComponentB/>
  </div>
</template> 
<script>
import ComponentB from "./ComponentB.vue";
export default {
  name: 'ComponentA',  
  components: {
    ComponentB
  },
  provide(){
    return { 
      testId2:'909009090009090'
    }
  }
}
</script>
 
