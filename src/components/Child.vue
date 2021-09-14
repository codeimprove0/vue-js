<template>
  <div> 
    <h3 v-bind="$attrs"> {{pageName}} -- {{title}} --{{age}} -- {{showData}} </h3>   
    <button v-on:click="setTitle">Set Title</button>
  </div>
</template> 
<script>
export default {
  name: 'Child',
/*  props:[
      "title",
      "age"
  ],   */
  props:{
    title:String,
    age:Number,
    showData:Boolean
  },
 
  data(){
      return {
          pageName:'Home Page', 
      }
  },
  methods:{
      setTitle(){
          this.$emit('changeTitle1','Code Test Data')
          console.log("yess")
      }
  },
  inheritAttrs:false
}
</script>
 
