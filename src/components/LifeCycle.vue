<template>
  <div> 
     <h1>About</h1> 
     <h2>{{title}}</h2> 
     <button @click="title='LifeCyle Tutorial'">Change Title </button>
       <button @click="showData=false">Remove Header </button>
     <Header v-if="showData"/>
  </div>
</template> 
<script>  
import Header from "./Header.vue"; 
export default {
  name: 'LifeCycle',  
  components:{
    Header
  } , 
  data(){
    return{
      title:'Code Improve',
      showData:true
    }
  },
  beforeCreate(){  
    console.log('***************before create***************')
  },
  created(){ 
    // this.title ='Test Demo'
    console.log('***************created***************') 
  },
  beforeMount(){  
    console.log('+++++++++++++ beforemount ++++++++++++++')
  },
  mounted(){ 
    console.log('+++++++++++++mounted ++++++++++++++++')
  },

  beforeUpdate(){
    console.log('----------------beforeUpdate--------------')
  },
  updated(){
    console.log('----------------updated---------------')
  },

}
</script>
 
