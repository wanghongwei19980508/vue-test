<template>
    <div>
        <div class="infinite-list-wrapper" style="overflow:auto">
            <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
                <li v-for="item in comments" :key="item.comment_id">
                <img src={{item.avatar}} />
                <div class="border-my:item.is_author">{{ item.nickname }}</div>
                <div>{{ item.text }}</div>
                <div>{{ item.digg_num }}</div>
                <div>{{ showTime(item.date) }}</div>
                <div v-for="i in item.sub_comment" :key="i.comment_id">
                    <div class="border-my:i.is_author">{{ i.nickname }}</div>
                    <div>{{ i.text }}</div>
                    <div>{{ i.digg_num }}</div>
                    <div>{{ showTime(i.date) }}</div>
                </div>
                </li>
            </ul>
            <p v-if="loading">加载中...</p>
            <p v-if="noMore">没有更多了</p>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import Element from "element-ui";
Vue.use(Element, { size: "small", zIndex: 3000 });
export default {
  data() {
    return {
      count: 10,
      loading: false,
    };
  },
  created() {
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 2000);
    },
  },
  computed: {
    noMore() {
      return this.count >= 20;
    },
    disabled() {
      return this.loading || this.noMore;
    },
    showTime() {
      return function (time) {
        var dateTime = new Date(time);
        var year = dateTime.getFullYear();
        var month = dateTime.getMonth() + 1;
        var day = dateTime.getDate();
        var now = new Date();
        var now_new = Date.parse(now.toDateString());
        var milliseconds = now_new - dateTime;
        var timeSpanStr;
        console.log(milliseconds);
        if (milliseconds <= 1000 * 60 * 1) {
          timeSpanStr = "刚刚";
        } else if (
          1000 * 60 * 1 < milliseconds &&
          milliseconds <= 1000 * 60 * 60
        ) {
          timeSpanStr = Math.round(milliseconds / (1000 * 60)) + "分钟前";
        } else if (
          1000 * 60 * 60 * 1 < milliseconds &&
          milliseconds <= 1000 * 60 * 60 * 24
        ) {
          timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + "小时前";
        } else if (
          1000 * 60 * 60 * 24 < milliseconds &&
          milliseconds <= 1000 * 60 * 60 * 24 * 30
        ) {
          timeSpanStr =
            Math.round(milliseconds / (1000 * 60 * 60 * 24)) + "天前";
        } else {
          timeSpanStr = year + "-" + month + "-" + day;
        }
        return timeSpanStr;
      };
    },
  },
};
</script>