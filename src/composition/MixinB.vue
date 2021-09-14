<template>
  <div>
    <h3>MixinB</h3>
    <button @click="incrementData">click {{ count }}</button>
  </div>
</template> 
<script> 
import countFiveComp from '../mixins/countFiveComp' 
export default {
  name: "MixinB",  
  setup(){
    const  {count,incrementData} = countFiveComp(5);
    return {
      count,
      incrementData
    }
  }
};
</script>
 
