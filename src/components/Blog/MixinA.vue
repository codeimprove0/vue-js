<template>
  <div> 
     <h3>MixinA</h3>  
     <button @click="incrementData"> click {{count}} </button>
  </div>
</template> 
<script> 
import CountFive from '../../mixins/countFive'
export default {
  name: 'MixinA',
  mixins:[CountFive]
}
</script>
 
