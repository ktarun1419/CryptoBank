<template>
  <div class="about">
    <Button/>
    <Lendpool/>
  </div>
</template>
<script lang="ts">
import { Options , Vue} from "vue-class-component";
import Button from "@/components/Market/buttons.vue";
import Lendpool from "@/components/Market/lendpool.vue";

@Options({
  components:{
    Button,
    Lendpool
  }
})
export default class AboutView extends Vue{

}
</script>