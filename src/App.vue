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
    export default {
        components: {
            Footer
        },
        data() {
            return {}
        }
    }
</script>

<style lang="less">
@import "~@/assets/css/reset.css";
@import "~@/assets/css/common.less";
@import "~@/assets/css/elementPlus.less";
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
