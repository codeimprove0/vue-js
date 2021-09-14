<template>
  <div>
    <h1>Directives</h1>   
    <h2 v-once>{{name}}</h2>   
      <h3>{{name}}</h3>  

        <h3 v-pre>Test variable is {{name}}</h3>  
      <p v-html="textData"></p>
      <button v-on:click="setName('Test Data')">Change Name</button>
  </div> 
</template> 
<script>
export default {
  name: "Directives", 
  data() {
    return { 
      name:'code Improve',
      isDisble:false,
      textData:'hello <b>Code</b>'

    };
  } ,
  methods:{
    setName(value){
      this.name = value
    }
  } 
};
</script>
 
