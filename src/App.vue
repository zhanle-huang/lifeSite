<template>
    <div id="nav">
    </div>
    <router-view />
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style lang="less">
@import "~@/assets/css/reset.css";
@import "~@/assets/css/common.less";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // color: #2c3e50;
    font-size: 18px;
}
</style>
