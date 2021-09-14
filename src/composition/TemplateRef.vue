<template>
  <div> 
     <h3>TemplateRef</h3>   
     <input type="text" class="testclass abcd" ref="nameRef"/>
     <button @click="getInfo"> Get</button>
  </div>
</template> 
<script>   
import {ref} from 'vue'
export default {
  name: 'TemplateRef',
  setup(){
    const nameRef = ref(null);

    const getInfo = () =>{
      nameRef.value.focus();
       console.log(nameRef.value)
    }
    return {
      nameRef,
      getInfo
    }
  }
}
</script>
 
