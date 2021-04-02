<template>
    <div>
        <van-card v-for="item in list" :key="item.filmId"
        num="2"
        price="2.00"
        desc="描述信息"
        :thumb=item.poster
        >
         <template #title>
            {{item.name}}
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
        let data = await this.$http.get(url.getComingSoon);
        this.list =data.data.films;
    }
}
</script>