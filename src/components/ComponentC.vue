<template>
  <div>
    <h1>Component C {{channelName}} -- {{testId}}</h1>
  </div>
</template> 
<script>
export default {
  name: "Componentc",
  inject:['channelName','testId']
};
</script>
 
