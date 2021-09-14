<template>
  <div>
    <h1>LifeCycleHook</h1>
  </div>
</template> 
<script>    
import {onBeforeMount,onMounted} from 'vue'
export default {
  name: 'LifeCycleHook',  
  setup(){

      onBeforeMount(()=>{
          console.log('onBeforeMount')
      })

      onMounted(()=>{
          console.log('onMounted')
      })

  } 
}
</script>
 
