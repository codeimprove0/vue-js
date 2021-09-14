<template>
  <div> 
     <h1>Add=============</h1> 
  </div>
</template> 
<script> 
export default {
  name: 'Add',
  beforeRouteLeave(){
    console.log('leave',this.$store.state)
  },
  beforeRouteEnter(f,s,next){
    next(ob=>{
      console.log('Enter',ob.$store.state)
    })

  }

}
</script>
 
