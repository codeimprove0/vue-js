<template>
  <div>
    <h1>Header</h1>
    <teleport to="#header">
      <h3>Test</h3>
    </teleport>

    <teleport to="#footer">
      <h3>Footer 8988789</h3>
    </teleport>
  </div>
</template> 
<script>
export default {
  name: "Header",
  beforeUnmount() {
    console.log("===========beforeunmount===============");
  },
  unmounted() {
    console.log("============unmounted=================");
  },
};
</script>
 
