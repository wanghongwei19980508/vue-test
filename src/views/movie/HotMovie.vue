<template>
  <div id="content">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-card v-for="item in list" :key="item.filmId" @click="clickCard(item.filmId)">
        <template #title>
          <div>
            {{ item.name }}<span>{{ item.filmType.name }}</span>
          </div>
        </template>
        <template #num>
          <div>观众评分：{{ item.grade && 0 }}</div>
        </template>
        <template #price class="w100p">
          <div class="w100p van-ellipsis">主演：{{ computedName(item.actors) }}</div>
        </template>
        <template #desc>
          <div>{{ item.nation }} || {{ item.runtime }}</div>
        </template>
        <template #thumb>
          <img :src="item.poster" style="width: 98%; height: 100px" />
        </template>
      </van-card>
    </van-pull-refresh>
  </div>
</template>
<style lang="less" scoped>
.name {
  margin: 0 5px;
}
.w100p{
    width:100%
}
.van-card__price{
    .w100p
}
</style>
<script>
import Vue from "vue";
import { Card, PullRefresh, Toast } from "vant";
import url from "@/config/url";

Vue.use(Card);
Vue.use(PullRefresh);

export default {
  data() {
    return {
      list: [],
      isLoading: false,
      pageNum: 1,
      pageSize: 10,
    };
  },
  methods: {
    getData(callback = null) {
      this.$http
        .get(
          url.getNowPlaying +
            `?pageNum=${this.pageNum}&pageSize=${this.pageSize}`
        )
        .then((res) => {
          this.list = res.data.films.concat(this.list);
          if (callback) {
            callback();
          }
        });
    },
    onRefresh() {
      this.pageNum++;
      this.getData(() => {
        Toast("刷新成功");
        this.isLoading = false;
      });
    },
    clickCard(filmId){
        this.$router.push("/movie/FilmDetails/" + filmId);
    }
  },
  computed: {
    computedName() {
      return function (data) {
        var str = "";
        for (let i = 0; i < data.length; i++) {
          str += `${data[i].name} `;
        }
        return str;
      };
    },
  },
  created() {
    this.getData();
  },
};
</script>
