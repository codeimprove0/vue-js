<template>
  <div> 
    <slot name="footer"></slot>
    <h1>Slots</h1>   
    <slot :fname="fname" :addr="detail.pin"></slot> 
    <h3>Description:-</h3>
      <slot name="desc"></slot> 
  </div>  
</template> 
<script>
export default {
  name: "SlotComponent", 
  data() {
    return { 
      fname:'code',  
      detail:{
        pin:'0909099'
      }
    };
  } 
};
</script>
 
