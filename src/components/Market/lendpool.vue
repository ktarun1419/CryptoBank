<template>
    <div class="show">
        <div class="lendpool" v-for="i in amount" :key="i">
              <table>
            <tr>
                <td>
                    Amount
                </td>
                <td>
                  <button class="viewdata-button">View Data</button>
                </td>
            </tr>
            <tr>
                <td>
                    {{i}}
                </td>
               
                <td>
                   <button class="borrow-button" @click="borrow">Borrow</button>
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
        amount:[]
    }
},methods:{
    borrow(){
    }
},
beforeCreate(){
     let total=transactions.prototype.totalData();
       total.then((result)=>{
           console.log(store.state.totalData)
           
          for (let index = 1; index < store.state.totalData.length; index++) {
              this.amount.push(store.state.totalData[index])
              
          }
          console.log(this.amount)
       })}
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