<template>
    <van-tabs v-model="active" @click="onChange">
        <van-tab title="正在热映"></van-tab>
        <van-tab title="即将上映"></van-tab>
    </van-tabs>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);

export default {
    data(){
        return {
            active: 0,
            hrf:['/movie/HotMovie','/movie/UpcomingMovie']
        }
    },
    created(){
        this.active=this.hrf.indexOf(this.$route.fullPath);
    },
    methods: {
        onChange: function (index) {
            this.$router.push({path:this.hrf[index]})
        },
    },
}
</script>