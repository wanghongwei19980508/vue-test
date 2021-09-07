<template>
    <div>
        <van-card v-for="item in list" :key="item.filmId">
            <template #title>
                <div>{{item.name}}<span>{{item.filmType.name}}</span></div>
            </template>
            <template #num>
                <div>观众评分：{{item.grade && 0}}</div>
            </template>
            <template #price>
                <div>主演：{{item.actors.name}}</div>
            </template>
            <template #desc>
                <div>{{item.nation}} || {{item.runtime}}</div>
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