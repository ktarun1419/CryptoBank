<template>
<Topbar/>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/market">Market</router-link>
  </nav>
  <router-view/>
</template>
<script lang='ts'>
import { Options, setup, Vue } from "vue-class-component";
import store from "@/store";
import Topbar from "@/components/topbar.vue";
import datasetup from "@/mixins/datasetup";
import transactions from "@/mixins/transactions";
@Options({
  components:{
    Topbar
  },
  data(){
    return{
      getdata:[]
    }
  },
 beforeCreate(){
   let data=datasetup.prototype.provider();
   data.then((result)=>{
     if (result){
       transactions.prototype.getLatestprice();
       transactions.prototype.gettotalLendAmount()
       transactions.prototype.getCurrentIndex()
    //    let total=transactions.prototype.totalData()
    //    this.getdata=total;
    //    console.log(this.getdata[0])
      }
   })
   
 }
})
export default class App extends Vue {
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: rgb(19, 16, 34);
  position: absolute;
  left: 0;
  top: 0;
  height: auto;
  min-height: 1000px;
  width: 100%;
}

nav {
  padding: 20px;

  a {
    font-weight: bold;
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #868c92;

    &.router-link-exact-active {
      color: rgb(199, 164, 199);
    }
  }
}
</style>
