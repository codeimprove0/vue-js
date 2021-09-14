<template>    
  <h1>Routing </h1>
  <router-link to="/add"> Blog Add </router-link><br/>
  <router-link to="/list"> Blog List </router-link><br/>
  <router-link to="/edit/1"> Blog Edit 1 </router-link><br/>
    <router-link to="/edit/2"> Blog Edit 2</router-link><br/>
  <router-view></router-view>
</template>

<script> 
export default {
  name: "App", 
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
