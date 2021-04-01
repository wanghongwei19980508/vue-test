<template>
  <div>
    <Footer></Footer>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
</style>

<script>
import Footer from "@/Components/Navigation/Footer.vue";
// import url from "@/config/url";
export default {
  components: {
    Footer,
  },
  //   async created(){
  //     let data = await this.$http.get(url.getCity);
  //     console.log(data);
  //   }
};
</script>