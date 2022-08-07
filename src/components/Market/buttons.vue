<template>
    <div>
        <button class="lend-button" @click="lend">LEND</button>
    </div>
</template>
<script lang="ts">
import { Options , Vue} from "vue-class-component";

@Options({
methods:{
    lend(){
         this.$router.replace({name:"lend"})
    }
},
})
export default class Button extends Vue{

}
</script>
<style>
.lend-button{
    width: 25%;
    padding: 10px;
    background-color:rgb(199, 164, 199) ;
    color: rgb(0, 0, 0);
    font-weight: 600;
    font-size: 20px;
    border: 0px;
    border-radius: 12px;
    cursor: pointer;
    margin-top: 3%;

}
</style>