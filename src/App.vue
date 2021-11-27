<template>
  <div>
    <Footer v-show="$store.state.isFooterShow"></Footer>
    <router-view></router-view>
  </div>
</template>


<script>
import Footer from "@/Components/Navigation/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>

<style lang="less">
#content {
  margin-bottom: 50px;
}
</style>