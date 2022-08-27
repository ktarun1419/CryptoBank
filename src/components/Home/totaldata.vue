<template>
    <div class="totaldata">
       <div class="total-section">
          <h1>Lending Pool</h1>
          <h2>${{totalLendAmount}}</h2>
       </div>
       <div class="table-section">
           <table>
               <tr>
                   <td>Token</td>
                   <td>POBC</td>
               </tr>
               <tr>
                  <td>APY</td>
                  <td>3%</td>
               </tr>
               <tr>
                   <td>Interst</td>
                   <td>5%</td>
               </tr>
               <tr>
                   <td>Collateral-Token</td>
                   <td>ETH</td>
               </tr>
           </table>
       </div>
    </div>
</template>
<script lang="ts">
import store from "@/store";
import { Options , Vue} from "vue-class-component";

@Options({

})
export default class Totaldata extends Vue{
    
    public get totalLendAmount() : number {
        return (store.state.totallendamount*0.01)
    }
    
}
</script>
<style>
h1{
    color: rgb(199, 164, 199);
}
.totaldata{
    width: 40%;
    display: inline-block;
    position: static;
    margin: 20px;
}
.total-section{
    background-color: rgba(48, 47, 47, 0.705);
    border-radius: 12px;
    padding: 5px;
    margin: 20px;
    
}.table-section{
     background-color: rgba(48, 47, 47, 0.705);
    border-radius: 12px;
    padding: 5px;
    margin: 20px;
}
th,
td {
  border-bottom: 0px solid rgb(199, 164, 199);
  padding: 18px;
  text-align: left;
  color: white;
  font-size: 20px;
  font-family: "Inter var", sans-serif;
  font-weight: 600;
}
table{
    width: 100%;
}
@media screen and (max-width: 840px){
    .totaldata{
        width: 100%;
        margin: 0;
        margin-top: 30px;
    }
}
</style>