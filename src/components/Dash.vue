<template>
  <div> 
    <h3> {{pageName}}</h3>  
    <h4>{{getName('Test')}}</h4>

    <button v-on:click="changeName" id="nameId" class="xyz">Change Name</button>
      <button v-on:mouseover="overChanges">Over</button>
      <button @click="setName('Article Page',$event)">My Name</button>
  </div>
</template>

<script>
export default {
  name: 'Dash', 
  data(){
      return {
          pageName:'Home Page', 
      }
  },
  methods:{
    getName(type){
      return 'Home Page Desc Item '+ type
    },
    changeName(event){
      console.log(event)
      this.pageName = 'Blog Page'
    },
    overChanges(){
      console.log('yess')
    },
    setName(name,event){
      console.log(event)
      this.pageName = name
    }
  }
}
</script>
 
