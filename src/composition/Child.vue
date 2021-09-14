<template>
  <div> 
     <h4>Child</h4>  
     <p>{{title}} </p>
     <p>{{mytest}} </p>
     <button @click="newTitle">Change</button>
  </div>
</template> 
<script>  
import {ref} from 'vue'
export default {
  name: 'Child', 
 // props:['title','heading']
  props:{
      title:{
          require:true
      },
      heading:{
          require:true
      }
  } ,
  setup(props,context){
      const mytest = ref(props.heading)

      const newTitle = ()=>{
          context.emit('newParentData','Yes Child changed')
          mytest.value = 'kuch bhi'
      }
       
       return {
           mytest,
           newTitle
       }

  } 
}
</script>
 
