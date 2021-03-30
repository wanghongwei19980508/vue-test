<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">

</style>

<script>
import url from "@/config/url";
export default {
  async created(){
    let data = await this.$http.get(url.getCity);
    console.log(data);
  }
}
</script>