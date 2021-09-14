<template>
  <div>
    <h3>Vuex {{xyz}}  {{abc}}</h3>
    <p>{{ $store.state.mainTitle }}</p>
    <h4>{{privateKey}} === {{secretKey('AAAAAABB')}} </h4>
    <button @click="newTitleM({title:'Title Action Data2001'})">Change Title</button>
    <Child />
  </div>
</template> 
<script>
import Child from "./Child";  
import { mapState,mapGetters,mapActions,mapMutations } from 'vuex'
export default {
  name: "First",
  components: {
    Child,
  },
  computed:{  
    ...mapState({
      xyz :(state) => state.utr,
      abc :(state) =>state.name
    }),

    ...mapGetters({
        privateKey : 'hashAdd',
        secretKey : 'newSecret'
    }),
    // privateKey(){
    //   return this.$store.getters.hashNewAdd;
    // },
    // secretKey(){
    //   return this.$store.getters.newSecret('EETT'); 
    // }
  },
  methods: {
    ...mapActions({
      newTitle:'newTitle2'
    }),
    ...mapMutations({
      newTitleM : 'setNewTitle'
    })
    // newTitle() {
    //   // this.$store.state.mainTitle = 'abcd'
    //   //this.$store.commit('setNewTitle','new title change')
    //   //this.$store.commit('setNewTitle',{title:'New again DATA'})
    //   // this.$store.commit({
    //   //   type:'setNewTitle', title:'New again DATA888'
    //   // })

    //   //######## ACTION ##########
    //   // this.$store.dispatch({
    //   //   type:'newTitle', title:'Title Action Data'
    //   // })

    //   //----------- 2 -----------
    //   // this.$store.dispatch({
    //   //   type:'newTitle', title:'Title Action Data'
    //   // }).then((response)=>{
    //   //   console.log('called',response)
    //   // })

    //   //-----------3 ---------

    //    this.$store.dispatch({
    //     type:'newTitle2', title:'Title Action Data2'
    //   })  
    // },

  },
};
</script>
 
