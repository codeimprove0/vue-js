<template>
  <div>
    <h1>Code Improve</h1>  
    <h3>First Name :- {{firstname}} || Last Name:- {{lastName}} </h3> 
    <h4>{{fullName}}</h4> 
 
     <button v-on:click="setName('Demo Test')"> Change Name </button>
  </div> 
</template> 
<script>
export default {
  name: "Filters", 
  data() {
    return { 
      firstname:'Code',
      lastName:'Improve' 
    };
  }, 
  methods:{
      getFullName(){
            return this.firstname+' '+ this.lastName
      },
      setName(value){ 
          this.fullName = value;
          /* const names = value.split(' ');
          this.firstname = names[0];
          this.lastName =  names[1]; */

      }
  },
  computed:{
    //   fullName(){
    //       return this.firstname+' '+ this.lastName
    //   }
     fullName:{
         get(){
             return 'Mr   '+this.firstname+' '+ this.lastName
         },
         set(value){
              const names = value.split(' ');
            this.firstname = 'jhsjhjsdjhsjdjshdjhj'
            this.lastName =  names[1];
         }
     }
  }   
};
</script>
 
