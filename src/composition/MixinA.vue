<template>
  <div>
    <h3>MixinA</h3>
    <button @click="incrementData">click {{ count }}</button>
  </div>
</template> 
<script>
import countFiveComp from '../mixins/countFiveComp' 
export default {
  name: "MixinA",  
  setup(){
    const  {count,incrementData} = countFiveComp(20);
    return {
      count,
      incrementData
    }
  }
};
</script>
 
