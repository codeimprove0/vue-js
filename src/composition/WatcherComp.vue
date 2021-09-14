<template>
  <div>
    <h2>{{ heading }}</h2>
    <h3>{{ topic }}</h3>
    <button @click="topic = 'Test Api'">Change Topic</button>
    <button @click="heading = 'Blog Page'">Change Heading</button>
    <p>{{ firstname }}</p>
    <form>
      <input type="text" placeholder="First Name" v-model="firstname" /><br />
      <input type="text" placeholder="Last Name" v-model="lastname" /><br />
      <input
        type="text"
        placeholder="Address City"
        v-model="address.city"
      /><br />
    </form>
  </div>
</template> 
<script>
import { ref, reactive, toRefs, watch } from "vue";
import _ from 'lodash'
export default {
  name: "WatcherComp",
  setup() {
    const topic = ref("Composition Api");
    const heading = ref("Home Page");
    const formData = reactive({
      firstname: "",
      lastname: "",
      email: "demo@gmail.com",
      age: 11,
      address: {
        city: "",
        pincode: "",
      },
    });

    // watch(topic,(newVal,oldVal)=>{
    //     console.log(newVal,'==',oldVal)
    // },{immediate:true})

    // watch([topic,heading],(newVal,oldVal)=>{
    //     console.log(newVal,'==',oldVal)
    // })

    // watch(()=>{
    //     return {...formData}
    // },(newVal,oldVal)=>{
    //     console.log(newVal,'==',oldVal)
    // })

    // watch(()=>{
    //     return formData.firstname
    // },(newVal,oldVal)=>{
    //     console.log(newVal,'==',oldVal)
    // })

    watch(
      () => {
        return _.cloneDeep(formData.address);
      },
      (newVal, oldVal) => {
        console.log(newVal, "==", oldVal);
      },{
          deep:true
      }
    );
    return {
      topic,
      heading,
      ...toRefs(formData),
    };
  },
};
</script>
 
