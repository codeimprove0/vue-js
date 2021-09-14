<template>
  <HelloWorld v-bind:msg="mainTitle" />
  <SlotComponent>
    
    <template v-slot:default="slotProps">
      <h2>This is Slot Testssss {{slotProps.fname}} -- {{slotProps.addr}}</h2>
    </template>

    <template v-slot:desc>
      <p>Description:-9878978878789789789789</p>
    </template>

    <template v-slot:footer>
      <h1>Heading...........</h1>
    </template>
  </SlotComponent>
</template>

<script>
import HelloWorld from "./components/ComponentA.vue";
import SlotComponent from "./components/SlotComponent.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    SlotComponent,
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
