<template>
    <van-tabbar v-model="active" @change="onChange">
        <van-tabbar-item>
        <van-icon class="iconfont icon-dianying" slot="icon" size="1.1rem"></van-icon>
            <span>电影</span>
            </van-tabbar-item>
        <van-tabbar-item>
            <van-icon class="iconfont icon-yingyuan" slot="icon" size="1.1rem"></van-icon>
            <span>影院</span>
        </van-tabbar-item>
        <van-tabbar-item>
            <van-icon class="iconfont icon-yixianshi_huaban" slot="icon" size="1.1rem"></van-icon>
            <span>我的</span>
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
    // 导入需要使用的图标css
    import "@/assets/icon/iconfont.css";
    import Vue from "vue";
    import { Tabbar, TabbarItem, Icon } from "vant";

    Vue.use(Tabbar);
    Vue.use(TabbarItem);
    Vue.use(Icon);

    export default {
        data() {
            return {
                active: 0,
                hrf: ["/Movies", "/Cinema", "/My"],
            };
        },
        created(){
            if(this.hrf.indexOf(this.$route.path) >= 0){
                this.active=this.hrf.indexOf(this.$route.path)
            }else{
                this.active=0;
            }
        },
        methods: {
            onChange: function (index) {
                this.$router.push({path:this.hrf[index]})
            },
        },
    };
</script>
