<template>
    <div class="left-menu">
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
</template>

<script>
    export default {
        data() {
            return {
                curMenu: '',
                menuList: [
                    {
                        title: 'web',
                        menu: [
                            {
                                title: 'html',
                                type: 'html'
                            },
                            {
                                title: 'css',
                                type: 'css'
                            },
                            {
                                title: 'js',
                                type: 'js'
                            },
                            {
                                title: 'mySql',
                                type: 'mySql'
                            }
                        ]
                    },
                    {
                        title: 'web2',
                        menu: [
                            {
                                title: 'html',
                                type: 'html1'
                            },
                            {
                                title: 'css',
                                type: 'css2'
                            },
                            {
                                title: 'js',
                                type: 'js3'
                            },
                            {
                                title: 'mySql',
                                type: 'mySql4'
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            /**
             * 选择菜单
             * @param {Object} menu 菜单项  
             * */
            selectMenu(menu) {
                this.curMenu = menu.type
                this.$emit('select-menu', menu.type)
            }
        }
    }
</script>

<style scoped lang="less">
    @import '~@/assets/css/common.less';
    .left-menu {
        border-right: 1px solid #000;
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
</style>
