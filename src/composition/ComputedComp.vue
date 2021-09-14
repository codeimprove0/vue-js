<template>
  <div>     
      <h3>{{topic}}</h3> 
      <p>{{fullName}}</p>
     <form>
         <input type="text" placeholder="First Name" v-model="firstname"><br/>
         <input type="text" placeholder="Last Name" v-model="lastname"><br/>
     </form>
  </div>
</template> 
<script> 
import {ref,reactive,toRefs,computed} from 'vue' 
export default {
  name: 'ComputedComp',  
  setup(){  
        const topic = ref("Composition API")  
       const formData = reactive({
           firstname:"",
           lastname:"",
           email:'demo@gmail.com',
           age:11
       });  
       const fullName = computed(()=>{
           return formData.firstname+' '+formData.lastname;
       })
       return  {
           topic,
           ...toRefs(formData),
           fullName
       }
  }
}
</script>
 
