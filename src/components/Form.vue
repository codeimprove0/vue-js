<template>
  <div>
    <h1>Code Improve</h1> 
    <p>{{formData}}</p>
    <form autocomplete="off">
        <label>Name</label>
        <!-- <input type="text" id="firstname" v-model.trim.lazy="formData.firstname"><br/><br/> -->
      <input type="text" id="firstname" @keyup.enter="submitData" v-model.trim="formData.firstname"><br/><br/>
     <label>Status</label>
        <select v-model="formData.status">
            <option value="Yes">Yes</option>
             <option value="No">No</option>
        </select><br/><br/>

    <label>gender</label> 
    <input type="radio" value="male" v-model="formData.gender"/>Male
    <input type="radio" value="female" v-model="formData.gender"/>Female
    <br><br/>
     <button v-on:click.prevent="submitData">Submit</button>
    </form>
  </div>
</template> 
<script>
export default {
  name: "Form", 
  data() {
    return {
      pageName: "Home Page",
      formData:{
          firstname:'',
          status:'',
          gender:''
      }
      
    };
  },
  methods: {
 /*    submitData(e){
        e.preventDefault();
        console.log(this.formData) 
    } */
      submitData(){ 
        console.log(this.formData) 
    }
  },
};
</script>
 
