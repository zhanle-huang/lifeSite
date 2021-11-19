<template>
    <div class="nav">
        <div class="content">
            <router-view />
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from '@/components/layout/Footer.vue'
    import whiteName from 'static/json/whiteName.json'
    import fulScreenName from 'static/json/fulScreenName.json'
    import { mapMutations } from 'vuex';
    export default {
        components: {
            Footer
        },
        data() {
            return {}
        },
        watch: {
            $route(to, from) {
                if (whiteName.menuNameList.indexOf(to.path) > -1) {
                    this.curMenu = to.path.substring(1)
                }
                if (fulScreenName.fulName.indexOf(to.path) > -1) {
                    this.$nextTick(() => {
                        let navContent = document.querySelector('.nav .content');
                        navContent.style.height = 'calc(100% - 0.5rem)';
                    })
                } else {
                    this.$nextTick(() => {
                        let navContent = document.querySelector('.nav .content');
                        navContent.style.height = 'auto';
                        navContent.style.minHeight = 'calc(100% - 0.5rem)';
                    })
                }
            }
        },
        methods: {
            ...mapMutations(['updateParams'])
        },
        created() {
            let userInfo = localStorage.getItem('userInfo');
            if (userInfo) {
                this.updateParams(['loginStatus', true])
                this.updateParams(['userInfo', userInfo])
            }
        }
    }
</script>

<style lang="less">
@import "~@/assets/css/reset.css";
@import "~@/assets/css/theme.less";
@import "~@/assets/css/elementPlus.less";
@import '~@/assets/css/markdown.less';
html,body,#app{
  height: 100%;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // color: #2c3e50;
    font-size: 18px;
    // height: 100%;
    // background: rgba(250, 250, 250, 1.0);
}
.nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .content {
        height: calc(~"100% - 50px");
    }
}
</style>
