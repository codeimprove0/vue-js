<template>
  <h1>This is my first component :- {{ name }}</h1>
  <p v-text="pText"></p>
  <p v-html="ptextHml"></p>

  <h3 v-bind:id="headingId">Attribute Bind</h3>
  <button v-bind:disabled="flag">Button Enable/Disable</button>

  <p v-bind:class="active" class="othercls">Class Bind</p>
  <p v-bind:class="isLogin && 'login'">Login Class</p>

  <p v-bind:class="isLogin ? 'login' : 'logOut'">Login Class 2</p>

  <p v-bind:class="[isLogin && 'class1', 'class2']">Array</p>

  <h4
    v-bind:style="{
      color: 'red',
      fontSize: fontSizePx,
    }"
  >
    Style Binding
  </h4>

  <h4
    v-bind:style="styleObj1"  >
    Style Binding object
  </h4>
  <h2  v-bind:style="[styleObj1,styleObj2]"> Multiple Style Bind</h2>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      name: "Code Improve",
      pText: "This is p tag text testing",
      ptextHml: "<h3>This is p tag text testing</h3>",

      headingId: "attribute-head-id",
      flag: true,

      active: "active-cls",
      isLogin: true,
      fontSizePx: "30px",

      styleObj1: {
        color: "red",
      
      },
      styleObj2:{
  fontSize: '25px',
      }
    };
  },
};
</script>

<style>
h1 {
  color: red;
}
</style>