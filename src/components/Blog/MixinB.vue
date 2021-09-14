<template>
  <div>
    <h3>MixinB</h3>
    <button @click="incrementData">click {{ count }}</button>
  </div>
</template> 
<script>
import CountFive from '../../mixins/countFive'
export default {
  name: "MixinB",
    mixins:[CountFive]
};
</script>
 
