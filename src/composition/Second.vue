<template>
  <div>   
      <h3>{{topic}}</h3>   
     <p>{{formData.email}} - {{emailId}}  </p>
  </div>
</template> 
<script> 
import {ref,reactive,isRef,isReactive,toRefs} from 'vue' 
export default {
  name: 'Second',  
  setup(){ 
        const topic = ref("Test Composition")  
        console.log(isRef(topic))
       const formData = reactive({
           firstname:"Demo",
           email:'demo@gmail.com',
           age:11
       }); 
       setTimeout(()=>{
           topic.value = 'New Topic',
           formData.email = 'test@gmail.com'
       },1500)
       console.log(isReactive(formData))   
       let newData  = toRefs(formData)
      return   {
          topic,
         formData,
         emailId : newData.email
      }
  }
}
</script>
 
