<template> 
{{channelName}}
  <component :is="formType"></component> 
  <button @click="changeForm('First')">First Form</button>
  <button @click="formType =='Form2'">Second Form</button> 

</template>

<script> 
import Form1 from "./components/Form1.vue";
import Form2 from "./components/Form2.vue";

export default {
  name: "App",
  components: { 
    Form1,
    Form2
  },
  data(){
    return{
      channelName:'TEST Code',
      formType:'Form2'
    }
  },
  provide(){
    return {
      channelName: this.channelName,
      testId:'567655776'
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
