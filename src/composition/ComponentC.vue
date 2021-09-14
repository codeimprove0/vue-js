<template>
  <div>
    <h1>Component C {{channelName}} -- {{testId}}</h1>
  </div>
</template> 
<script> 
import {inject} from 'vue'
export default {
  name: "Componentc", 
  setup(){
    const channelName = inject('channelName')
     const testId = inject('testId2','00000000009')
    return {
      channelName,
      testId
    }
  }
//  inject:['channelName','testId']
};
</script>
 
