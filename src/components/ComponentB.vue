<template>
  <div> 
     <h1>Component B {{channelName}} {{testId2}}</h1>
     <ComponentC/>
  </div>
</template> 
<script>
import ComponentC from "./ComponentC.vue";
export default {
  name: 'ComponentB',  
  components: {
    ComponentC
  }, 
inject:['channelName','testId2']
}
</script>
 
