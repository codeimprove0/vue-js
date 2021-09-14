<template>  

<h1> Dynamic components</h1>
<keep-alive>
  <component :is="formType"></component>
</keep-alive>
<br/>
<button @click="changeForm('Form1')"> Form 1</button>
<button @click="changeForm('Form2')"> Form 2</button>

</template>

<script>
import Form1 from "./components/Form1.vue";
import Form2 from "./components/Form2.vue";

export default {
  name: "App",
  components: {
    Form1,
    Form2,
  },
  data() {
    return {
      formType: "Form1",
    };
  },
  methods: {
    changeForm(type) {
      this.formType = type;
    },
  },
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
