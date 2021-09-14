<template>
  <div>
    <h1>Watcher</h1>   
    <h2>{{totalMarks}}</h2>  
    <button v-on:click="addMask(10)">Add</button>

    <button v-on:click="minMask(10)">Minus</button><br/>

    <input type="text" v-model="username"><br/>
      <input type="text" v-model="address.city">
  </div> 
</template> 
<script>
export default {
  name: "Watcher", 
  data() {
    return { 
      totalMarks:20, 
      username:'',
      address:{
        city:''
      }
    };
  } ,
  methods:{ 
    addMask(value){
      this.totalMarks =  value + this.totalMarks
    },
     minMask(value){
      this.totalMarks =   this.totalMarks - value;
    }
  },  
  watch:{
    totalMarks(value,prev){ 
      if(value ==40 && value > prev){
        console.log('pass ho gya')
      } 
    },

    // username(value){
    //   console.log('user name is change',value)
    // },
  username:{
    handler(value){
       console.log('user name is change',value)
    },
    immediate:true
  },
  address:{
      handler(value){
       console.log('address is change',value)
    },
    deep:true,
     immediate:true
  },
    

  }
};
</script>
 
