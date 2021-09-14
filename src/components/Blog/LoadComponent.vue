<template>
  <div> 
     <h1>LoadComponent</h1> 
     <p>{{name}}</p>
         <ul>
       <li v-for="blog in list" :key="blog">{{blog}}</li>
       </ul>
  </div>
</template> 
<script> 
export default {
  name: 'LoadComponent', 
  data(){
      return {
          name:'Test',
          list:[1,2,3,4,5,6,7,8,9]
      }
  },
 async created(){
     let data =  await this.getInfo();
    this.name = data
  },
 async beforeCreate(){
     let data =  await this.getInfo();
    this.name = data
  },
  methods:{
    getInfo(){
      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve('OK')
        },2000)
      })
    },
    
  }  

}
</script>
 
