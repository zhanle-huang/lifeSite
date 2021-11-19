<template>
    <div class="left-menu">
        <div class="menu">
            <div class="menu-logo">
                <img src="../../assets/image/logo.png" alt="">&nbsp;&nbsp;&nbsp;^ _ ^
                <div>重启寄存器</div>
            </div>
            <div class="menu-content">
                <div class="menu-item" v-for="(item, index) in menuList" :key="index">
                    <h3 class="title-h3">{{item.title}}</h3>
                    <div :class="['item', {'active': curMenu === menu.type}]" v-for="(menu, mIndex) in item.menu" :key="mIndex + 100" @click="selectMenu(menu)">
                        {{menu.title}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { toRefs, reactive, inject, onMounted } from 'vue';
    export default {
        props: ['menuList'],
        setup(props) {
            // 定义变量
            // 定义方法
            // console.log('props', props.menuList)
            // let menuList1 = reactive(props.menuList)
            // console.log('menuList1', menuList1)
            // // 调用方法
            return {
                // userLocation
            }
        },
        data() {
            return {
                curMenu: ''
            }
        },
        watch: {
            menuList: {
                handler(v) {
                    console.log('watch', v)
                    if (v.length > 0) {
                        this.selectMenu(this.menuList[0].menu[0])
                    }
                },
                deep: true
            }
        },
        methods: {
            /**
             * 选择菜单
             * @param {Object} menu 菜单项  
             * */
            selectMenu(menu) {
                this.curMenu = menu.type
                this.$emit('select-menu', menu)
            }
        },
        mounted() {
            console.log('ccc', this.menuList)
            // this.selectMenu(this.menuList[0].menu[0])
        }
    }
</script>

<style scoped lang="less">
    @import '~@/assets/css/common.less';
    .left-menu {
        height: 100%;
        border-right: 1px solid #000;
        overflow-y: scroll;
        .menu {
            -moz-user-select:none;
            -webkit-user-select:none;
            user-select:none;
            .menu-logo {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-wrap: wrap;
                margin-bottom: 15px;
                img {
                    width: 40px;
                    height: auto;
                    margin: 15px 0 10px @menuPaddingLeft;
                }
                div {
                    width: 100%;
                    padding-left: @menuPaddingLeft;
                }
            }
            .menu-content {
                padding: 10px;
                .menu-item {
                    .title-h3 {
                        padding: 15px 0 15px @menuPaddingLeft - 15px;
                    }
                    .item {
                        padding: 15px 0 15px @menuPaddingLeft;
                        font-size: @menuFontSize;
                        cursor: pointer;
                        &.active {
                            background: @activeBg;
                            border-radius: 4px;
                        }
                        &:hover {
                            color: @activeColor;
                        }
                    }
                }
            }
        }
    }
</style>
