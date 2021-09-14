<template>
  <div>
    <h3>Parent</h3>
    <h2>{{ subHeading }}</h2> 
    <Child title="props data test" heading="no data" @newParentData = "newParentValue"/>
  </div>
</template> 
<script>
import {ref} from 'vue'
import Child from "./Child";
export default {
  name: "Parent",
  setup() {
    const subHeading = ref("Child Change Value");
    const newParentValue = (val) => {
      subHeading.value = val;
    };
    return {
      subHeading,
      newParentValue,
    };
  },
  components: {
    Child,
  },
};
</script>
 
