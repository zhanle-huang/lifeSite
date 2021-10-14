<template>
    <div class="index">
        <Head :curType="curMenu"></Head>
        <div class="content">
            <router-view />
        </div>
    </div>
</template>

<script>
    import Head from '@/components/layout/Head.vue'
    import whiteName from 'static/json/whiteName.json'
    export default {
        components: {
            Head
        },
        data() {
            return {
                curMenu: ''
            }
        },
        watch: {
            $route(to, from) {
                console.log('xxx', from.path); //从哪来
                console.log(to.path); //到哪去
                if (whiteName.menuNameList.indexOf(to.path) > -1) {
                    this.curMenu = to.path.substring(1)
                }
            }
        },
        created() {
            console.log('xxx')
            this.$router.push('/home')
        }
    }
</script>

<style scoped lang="less">
    .index {
        height: 100%;
        .content {
            // height: calc(~"100% - 50px");
            height: calc(~"100% - 70px");
        }
    }
</style>
