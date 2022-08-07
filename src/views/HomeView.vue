<template>
  <div class="home">
   <Totaldata/>
   <Lending/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Totaldata from "@/components/Home/totaldata.vue";
import Lending from "@/components/Home/lending.vue";
@Options({
  components: {
    Totaldata,
    Lending
  },
})
export default class HomeView extends Vue {}
</script>
