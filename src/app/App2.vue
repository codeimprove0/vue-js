<template> 
  <HelloWorld v-bind:msg="mainTitle"/>
  <Child v-on:changeTitle1="newTitleSet($event)" v-bind:title="titleName" v-bind:age=20 v-bind:showData="true" id="childFirstId" /> 

  <h1>{{mainTitle}}</h1>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Child from './components/Child.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Child
  },
  data(){
    return {
      titleName:'Vue js Series',
      mainTitle:"Props Type & Attribute"
    }
  },
  methods:{
    newTitleSet(data){
      this.mainTitle = data
    }
  }
}
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
