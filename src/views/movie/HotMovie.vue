<template>
    <div>
        <van-card v-for="item in list" :key="item.filmId">
            <template #title>
                <div>{{item.name}}</div>
            </template>
            <template #num>
                <div>{{item.name}}</div>
            </template>
            <template #price>
                <div>{{item.name}}</div>
            </template>
            <template #desc>
                <div>{{item.name}}</div>
            </template>
            <template #thumb>
                <img :src=item.poster style="width:98%;height:100px;">
            </template>
        </van-card>
    </div>
</template>
<script>
import Vue from 'vue';
import { Card } from 'vant';
import url from "@/config/url";
Vue.use(Card);

export default {
    data(){
        return{
            list:[]
        }
    },
    async created(){
        let data = await this.$http.get(url.getNowPlaying);
        this.list =data.data.films;
    }
}
</script>