<template>
  <div> 
    <h3> {{pageName}}</h3>   
    <h4 v-if="total==80">Topper</h4> 
    <h4 v-else-if="total==70">Good</h4>
    <h4 v-else>Average</h4>

    <p v-if="showMessage">This is Text Message</p>
   <p v-show="showMessage">SHOW:-This is Text Message</p>

   <h3 v-for="(name,index) in names" :key="name">{{name}} --{{index}}</h3>


    <ul>
        <li v-for="item in itemList" :key="item.id">{{item.id}} ----- {{item.name}}</li>
      </ul>
  </div>
</template> 
<script>
export default {
  name: 'Condition', 
  data(){
      return {
          pageName:'Home Page',
          total:60,
          showMessage:true,
          names: ['A','B','C'],
          itemList:[
            {
              id:100,name:'Ram'
            },
             {
              id:2,name:'Rahul'
            },
             {
              id:3,name:'Hariom'
            }
          ]
      }
  }
}
</script>
 
