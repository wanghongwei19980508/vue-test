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

export default {
  components: {
    Footer,
  },

};
</script>