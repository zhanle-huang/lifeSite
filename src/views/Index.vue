<template>
    <div class="index">
        <Head :curType="curMenu"></Head>
        <div class="content">
            <router-view/>
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
                curMenu: '',
                reLoadPath: ['/home', '/article', '/case', '/leaving']
            }
        },
        watch: {
            $route(to, from) {
                if (whiteName.menuNameList.indexOf(to.path) > -1) {
                    this.curMenu = to.path.substring(1)
                }
            }
        },
        methods: {
            getReload() {
                if (this.reLoadPath.indexOf(this.$route.fullPath) > -1) {
                    sessionStorage.setItem('routePath', this.$route.fullPath)
                } else {
                    sessionStorage.removeItem('routePath')
                }
            }
        },
        // created() {
        //     console.log('xxx')
        //     this.$router.push('/home')
        // }
        created() {
            let route = sessionStorage.getItem('routePath')
            if (route) {
                this.$router.push(route)
                sessionStorage.removeItem('routePath')
            }
            // window.onbeforeunload = () => {
            //     sessionStorage.setItem('routePath', this.$route.fullPath)
            // };
            window.addEventListener('beforeunload', this.getReload)
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
