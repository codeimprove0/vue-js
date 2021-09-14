<template>
  <div>     
      <h3>{{topic}}</h3>
     <p>{{email}} {{age}}   </p>
  </div>
</template> 
<script> 
import {ref,reactive,toRefs} from 'vue' 
export default {
  name: 'Third',  
  setup(){  
          const topic = ref("Test Composition")  
       const formData = reactive({
           firstname:"Demo",
           email:'demo@gmail.com',
           age:11
       });  
       return  {
           topic,
           ...toRefs(formData)
       }
  }
}
</script>
 
