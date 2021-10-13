<template>
    <div class="case">
        <div class="content">
            <div class="left">
                <LeftMenu @select-menu="selectMenu"></LeftMenu>
            </div>
            <div class="right">
                <ul class="case-list">
                    <li class="case-item" v-for="(item, index) in demoList" :key="index">
                        <div class="top">
                            <img src="../assets/image/icon/case.png" alt="">
                            <h3 class="title-h3">{{item.name}}</h3>
                        </div>
                        <div class="bottom">
                            <span class="online">在线测试</span>
                            <div class="ctrl-btn-group">
                                <span class="btn icon icon-like"></span>
                                <span class="btn icon icon-like"></span>
                                <span class="btn icon icon-like"></span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import LeftMenu from '@/components/layout/LeftMenu.vue'
    export default {
        components: {
            LeftMenu
        },
        data() {
            return {
                demoList: [
                    {
                        name: '滚动显示',
                        path: 'static/demo/scroll出现.html',
                        downName: '滚动显示',
                        time: '2021-02-08 13:00:00'
                    },
                    {
                        name: '滚动显示1',
                        path: 'static/demo/scroll出现.html',
                        downName: '滚动显示1',
                        time: '2021-02-08 13:00:00'
                    },
                    {
                        name: '滚动显示2',
                        path: 'static/demo/scroll出现.html',
                        downName: '滚动显示2',
                        time: '2021-02-08 13:00:00'
                    }
                ]
            }
        },
        methods: {
            /**
             * 选择菜单
             * @param {Object} type 菜单类型
             * */
            selectMenu(type) {
                console.log(type)
            }
        }
    }
</script>

<style scoped lang="less">
    // @import '~@/assets/css/common.less';
    .case {
        .content {
            display: flex;
            justify-content: space-between;
            .left {
                width: 400px;
            }
            .right {
                width: calc(~"100% - 400px - 130px");
                padding: 15px;
                margin-right: 50px;
                .case-list {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    .case-item {
                        flex: 0 0 46%;
                        margin-bottom: 20px;
                        border: 1px solid @caseBorder;
                        padding: 10px;
                        border-radius: 4px;
                        cursor: pointer;
                        &:hover {
                            transform: scale(0.97);
                            box-shadow: 0px 0px 20px 4px #a0cfff;
                        }
                        .top {
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            img {
                                width: 40px;
                                height: auto;
                                margin-right: 10px;
                            }
                        }
                    }
                }
                
                
            }
        }
    }
</style>
