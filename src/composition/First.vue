<template>
  <div> 
     <h1>First</h1>   
     <h3>{{topic}} --- {{topic_new}} </h3>
     <h4>{{title}}</h4>
     <p>{{formData.email}}  {{age}}</p>
  </div>
</template> 
<script> 
import {ref,reactive} from 'vue' 
export default {
  name: 'First',  
  setup(){
      const topic = ref("Test Composition") 
       const topic_new = ref("Test  New Composition") 
       const formData = reactive({
           firstname:"Demo",
           email:'demo@gmail.com',
           age:11
       });
      setTimeout(()=>topic.value = 'test api',2000)
      return {
          topic,
          topic_new,
          formData,
          age: formData.age
      }
  },

  data(){
      return {
          title : 'Old Value'
      }
  }

}
</script>
 
