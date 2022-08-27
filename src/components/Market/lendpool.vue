<template>
    <div class="show">
        <p ></p>
        <div class="lendpool" v-for="i in (parseInt(current))" :key="i">
              <table>
            <tr>
                 <td>Index</td>
                <td>
                    Amount
                </td>
                <td>Borrowed</td>
                <td>
                  <button class="viewdata-button" @click="payback(i-1)">Payback</button>
                </td>
            </tr>
            <tr>
                      <td>{{i-1}}</td>
                <td>
                    ${{this.amount[i-1]/100000000000000000000}}
                </td>
               <td>{{this.isborrow[i-1]}}</td>
                <td>
                   <button class="borrow-button" @click="borrow(i-1)">Borrow</button>
                </td>
            </tr>
        </table>
        </div>
        
    </div>
</template>
<script>
import { Options , Vue} from "vue-class-component";
import transactions from "@/mixins/transactions";
import store from "@/store";
@Options({
data(){

    return{
        isMarket:false,
        amount:[],
        current:store.state.currentIndex,
        isborrow:[]
    }
},methods:{
    async borrow(index){
         transactions.prototype.getLatestprice();
        let price=await store.state.currentPrice
        
        let amt=this.amount[index];
        let amt1=parseInt((amt*0.01)/price)
        console.log("final-amt",amt1)
        transactions.prototype.borrow(amt1,index)
    },
    async payback(index){
        transactions.prototype.payback(index)
    }
},
beforeMount(){
    let pool=[]
    let borrow=[]
           console.log(store.state.totalData)
          for (let index = 1; index < store.state.totalData.length; index++) {
              pool.push(store.state.totalData[index])
              borrow.push(store.state.isborrowed[index])    
          }
          this.amount=pool
          this.isborrow=borrow
          console.log(this.isborrow)
       }
})
export default class Lendpool extends Vue{

}
</script>
<style>
.lendpool{
    width: 90%;
    border-radius: 12px;
    background-color: rgba(77, 72, 72, 0.486);
    height: auto;
    position: static;
    margin-right: auto;
    margin-left: auto;
    margin-top: 40px;
}
.borrow-button{
    width: 100%;
  background-color: rgb(224, 64, 64);
    padding: 10px;
    border-radius: 12px;
    font-weight: 600;
    font-size: 17px;
    cursor: pointer;
    border: 0px;
}.viewdata-button{
    width: 100%;
  background-color: rgb(82, 197, 226);
    padding: 10px;
    border-radius: 12px;
    font-weight: 600;
    font-size: 17px;
    cursor: pointer;
    border: 0px;
}
</style>