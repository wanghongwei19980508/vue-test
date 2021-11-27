<template>
  <van-sticky v-show="offsetTop">
    <van-tabs v-model="active" @click="onChange">
      <van-tab title="正在热映"></van-tab>
      <van-tab title="即将上映"></van-tab>
    </van-tabs>
  </van-sticky>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs, Sticky } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Sticky);

export default {
  data() {
    return {
      active: 0,
      hrf: ["/movie/HotMovie", "/movie/UpcomingMovie"],
      offsetTop: true,
    };
  },
  created() {
    this.active = this.hrf.indexOf(this.$route.fullPath);
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let top = document.documentElement.scrollTop;
      if (top > 200 || top < 50) {
        this.offsetTop = true;
      } else {
        this.offsetTop = false;
      }
    });
  },
  methods: {
    onChange: function (index) {
      this.$router.push({ path: this.hrf[index] });
    },
  },
};
</script>