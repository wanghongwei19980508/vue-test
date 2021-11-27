<template>
    <div>这是电影详情</div>
</template>

<script>
import url from "@/config/url";
export default {
    data(){
        return{
            
        }
    },
    created(){
        this.$store.commit('ChangeFooter',false);
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
    beforeDestroy(){
        this.$store.commit('ChangeFooter',true);
    }
}
</script>
