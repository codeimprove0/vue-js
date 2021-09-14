<template>
  <div> 
     <h1>Edit</h1> 
     <h2>{{title}}</h2> 
  </div>
</template>
 
<script> 
 import {useRoute} from 'vue-router'
export default {
  name: 'Edit', 
  data(){
      return {
          title:''
      }
  }, 
  mounted(){
      let routeData = useRoute();
      console.log(routeData.params)
      this.title = routeData.params.editId +' ID data'
  } ,
  updated(){
       let routeData = useRoute();
      console.log(routeData.params)
      this.title = routeData.params.editId +' ID data'
  } 
}
</script>
 
