<template>
    <div class="head-container">
        <div class="left">
            <div class="logo-box">
                <img class="logo-img" src="../../assets/image/logo.png"/>
                <span class="logo-title">笃学亭</span>
            </div>
            <ul class="menuList">
                <li :class="['menu-item', {'active': curMenu === item.type}]" v-for="(item, index) in menuList" :key="index" @click="selectMenu(item)">{{item.name}}</li>
            </ul>
        </div>
        <div class="right">
            <div class="userInfo" v-if="loginStatus" @click="gotoWirte">
                <img class="user-img" src="../../assets/image/logo.png"/>
                <span class="user-title">创作</span>
            </div>
            <div class="userInfo" v-if="loginStatus">
                <img class="user-img" src="../../assets/image/logo.png"/>
                <span class="user-title">个人中心</span>
            </div>
            <div class="ctrl-btn">
                <el-button class="login" type="primary" @click="$router.push('/login')" v-if="!loginStatus">登录</el-button>
                <el-button class="register"  @click="$router.push('/register')" v-if="!loginStatus">注册</el-button>
                <el-button class="register" plain v-if="loginStatus" @click="exitLogin">退出</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';
    export default {
        props: ['curType'],
        data() {
            return {
                curMenu: 'home',
                menuList: [
                    {
                        name: '11',
                        type: 'home',
                        path: '/home'
                    },
                    {
                        name: '22',
                        type: 'article',
                        path: '/article'
                    },
                    {
                        name: '33',
                        type: 'case',
                        path: '/case'
                    },
                    {
                        name: '44',
                        type: 'leaving',
                        path: '/leaving'
                    },
                    {
                        name: 'map',
                        type: 'map',
                        path: '/map'
                    },
                ]
            }
        },
        computed: {
            ...mapState({
                loginStatus: state => state.loginStatus
            })
        },
        watch: {
            curType(v) {
                this.curMenu = v
            }
        },
        methods: {
            /**
             * 选择菜单
             * @param {Object} item 菜单对象
             * */
            selectMenu(item) {
                this.curMenu = item.type
                this.$router.push(item.path)
            },
            // 跳转到创作页面
            gotoWirte() {
                this.$router.push('/article-edit')
            },
            // 退出登录
            exitLogin() {
                localStorage.removeItem('userInfo');
                this.updateParams(['loginStatus', false])
                this.updateParams(['userInfo', {}])
                console.log(this.loginStatus)
            }
        },
        created() {
            this.curMenu = this.$route.fullPath.substr(1)
        }
    }
</script>

<style scoped lang="less">
    @import '~@/assets/css/common.less';
    .head-container {
        position: sticky;
        top: 0;
        z-index: 999;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // padding: 0 15px;
        background-image: @headbg;
        .left {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            height: 100%;
            margin-left: 50px;
            .head-container {
                height: @headHeight;
            }
            .logo-box {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-right: 15px;
                .logo-img {
                    width: 40px;
                    margin-right: 5px;
                }
                .logo-title {
                    color: @blueColor;
                    font-weight: bold;
                    font-size: 28px;
                    font-style: italic;
                }
            }
            .menuList {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                .menu-item {
                    width: 130px;
                    height: @headHeight;
                    line-height: @headHeight;
                    text-align: center;
                    cursor: pointer;
                    color: #f4f4f4;
                    font-size: 24px;
                    &.active,
                    &:hover {
                        color: ;
                        background: @headbgHover;
                    }
                }
            }
        }
        .right {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-right: 50px;
            .userInfo {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-right: 15px;
                color: @deepGreyColor;
                cursor: pointer;
                &:hover {
                    color: @deepGreyHover;
                }
                .user-img {
                    width: 40px;
                    margin-right: 5px;
                }
            }
        }
    }
</style>
