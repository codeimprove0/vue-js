<template>
  <div> 
     <h1>Component B {{channelName}}</h1>
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
inject:['channelName']
}
</script>
 
