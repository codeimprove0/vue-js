<template>
  <div>
    <h3>{{ topic }}</h3>
    <button @click="newTitle">Change</button>
        <button @click="newHeading('Code Improve')">Change2</button>
  </div>
</template> 
<script> 
import {ref} from 'vue' 
export default {
  name: 'MethodComp',  
  setup(){ 
        const topic = ref("Test Composition")  
        function newTitle(){
           topic.value = 'New Value'
        }  

        const newHeading = (title)=>{
            topic.value = title
        } 
       
      return   {
          topic,
          newTitle,
          newHeading
      }
  },
}
</script>
 
