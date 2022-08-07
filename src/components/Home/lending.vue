<template>
<div class="lending">
     <div class="lending-div">
        <h3 class="lending-head">Your Lendings</h3><br>
        <h4 class="lending-content">No Lendings</h4>
    </div>
    <div class="lending-div">
        <h3 class="lending-head">Your Borrowings</h3><br>
        <h4 class="lending-content">No Borrowings</h4>
    </div>
</div>
   
</template>
<script lang="ts">
import { Options , Vue} from "vue-class-component";

@Options({

})
export default class Lending extends Vue{

}
</script>
<style>
.lending-div{
    padding: 10px;
    height: 185px;
    margin: 20px;
    
    background-color: rgba(48, 47, 47, 0.705);
    border-radius: 12px;
}
.lending{
    width: 40%;
    margin: 30px;
    position: static;
    vertical-align: -205px;
    display: inline-block;
}
.lending-head{
    float: left;
    color: rgb(199, 164, 199);
}
.lending-content{
    margin-top: 50px;
}
</style>