<template>
    <div class="home">
        <img src="static/logo.png" alt="" />
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <div class="name">展乐</div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld
    }
}
</script>

<style scoped lang="less">
.home {
    .name {
        width: 1850px;
        background: #55ff7f;
    }
}
</style>
