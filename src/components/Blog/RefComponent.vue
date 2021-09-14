<template>
  <div>
    <h1 id="testHeading" class="colorClass" ref="head">RefComponent</h1> 
    <form>
      <input type="text" ref="userName" value="Test" class="form-data"/><br/>
      <button @click="submitData">Add</button>
      </form>
  </div>
</template> 
<script>
export default {
  name: "RefComponent", 
  mounted(){
    console.log(this.$refs.head)
  },
  methods:{
    submitData(e){
      e.preventDefault();
      console.log(this.$refs.userName.value)
      this.$refs.userName.focus()
    }
  }
};
</script>
 
