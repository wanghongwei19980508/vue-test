<template>
    <div id="app">
        <router-view></router-view>
        <div @click="goto_HotMovie()">正在热映</div>
        <div @click="goto_UpcomingMovie()">即将上映</div>
    </div>
</template>

<script>
export default {
    name: "App",
    components:{

    },
    methods:{
        goto_HotMovie:function(){
            this.$router.push({path:'/HotMovie'})
        },
        goto_UpcomingMovie:function(){
            this.$router.push({path:'/UpcomingMovie'})

        }
    }
}
</script>