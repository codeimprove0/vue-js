<template>
  <div> 
     <h1>List</h1>  
     <ul>
       <li v-for="blog in blogList" :key="blog.id">{{blog.id}} ---- {{blog.name}}</li>
       </ul>
    <button @click="loadData">Load </button>
  </div>
</template> 
<script>   
import axios from 'axios'
export default {
  name: 'List',  
  data(){
    return {
      blogList:[]
    }
  }, 
  created(){
    this.loadData()
  },
  methods:{
   async loadData(){
     let result = await axios('http://localhost/api/article-list'); 
      this.blogList = result.data.data
    }
  }
}
</script>
 
