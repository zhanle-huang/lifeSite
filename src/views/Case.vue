<template>
    <div class="case">
        <div class="content">
            <div class="left">
                <LeftMenu @select-menu="selectMenu"></LeftMenu>
            </div>
            <div class="right">
                <div class="box-shadow"></div>
                <div class="content-list">
                    <ul class="case-list" v-myLoading="loading">
                        <li class="case-item" v-for="(item, index) in demoList" :key="index">
                            <div class="top">
                                <img src="../assets/image/icon/case.png" alt="">
                                <h3 class="title-h3">{{item.name}}</h3>
                            </div>
                            <div class="bottom">
                                <span class="online" @click="onLinePreView(item.path)">在线预览</span>
                                <div class="ctrl-btn-group">
                                    <span class="btn icon icon-download" title="下载"></span>
                                    <span v-if="!item.like" class="btn icon icon-like" title="收藏" @click="collectCase(item.id)"></span>
                                    <span v-else class="btn icon icon-liked" title="已收藏" @click="cancleCollectCase(item.id)"></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- 分页 -->
                <div class="page">
                    <el-pagination v-model:currentPage="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize" background layout="total, sizes, prev, pager, next, jumper"
                        :total="demoTotal" @size-change="handleSizeChange" @current-change="handleCurrentChange"></el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LeftMenu from '@/components/layout/LeftMenu.vue';
    import {
        ref
    } from 'vue';
    export default {
        components: {
            LeftMenu
        },
        setup() {
            // 页大小改变
            const handleSizeChange = (val) => {
                console.log(`${val} items per page`);
            }
            // 页码该改变
            const handleCurrentChange = (val) => {
                console.log(`current page: ${val}`);
            }
            /**
             * 选择菜单
             * @param {Object} type 菜单类型
             * */
            const selectMenu = (type) => {
                console.log(type);
            }
            /**
             * 在线预览
             * @param {String} path 路径  
             * */
            const onLinePreView = (path) => {
                window.open(path)
            }
            return {
                currentPage: ref(1),
                pageSize: ref(10),
                demoTotal: ref(1000),
                loading: ref(false),
                handleSizeChange,
                handleCurrentChange,
                selectMenu,
                onLinePreView
            }
        },
        data() {
            return {
                demoList: [{
                        id: '1',
                        name: '滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示',
                        path: 'static/demo/scroll出现.html',
                        downName: '滚动显示',
                        time: '2021-02-08 13:00:00',
                        like: false
                    },
                    {
                        id: '2',
                        name: '滚动显示1',
                        path: 'static/demo/scroll出现.html',
                        downName: '滚动显示1',
                        time: '2021-02-08 13:00:00',
                        like: true
                    },
                    {
                        id: '3',
                        name: '滚动显示2',
                        path: 'static/demo/scroll出现.html',
                        downName: '滚动显示2',
                        time: '2021-02-08 13:00:00',
                        like: false
                    },
                    {
                        id: '1',
                        name: '滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示',
                        path: 'static/demo/scroll出现.html',
                        downName: '滚动显示',
                        time: '2021-02-08 13:00:00',
                        like: false
                    },
                    {
                        id: '2',
                        name: '滚动显示1',
                        path: 'static/demo/scroll出现.html',
                        downName: '滚动显示1',
                        time: '2021-02-08 13:00:00',
                        like: true
                    },
                    {
                        id: '3',
                        name: '滚动显示2',
                        path: 'static/demo/scroll出现.html',
                        downName: '滚动显示2',
                        time: '2021-02-08 13:00:00',
                        like: false
                    },
                    {
                        id: '1',
                        name: '滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示',
                        path: 'static/demo/scroll出现.html',
                        downName: '滚动显示',
                        time: '2021-02-08 13:00:00',
                        like: false
                    },
                    {
                        id: '2',
                        name: '滚动显示1',
                        path: 'static/demo/scroll出现.html',
                        downName: '滚动显示1',
                        time: '2021-02-08 13:00:00',
                        like: true
                    },
                    {
                        id: '3',
                        name: '滚动显示2',
                        path: 'static/demo/scroll出现.html',
                        downName: '滚动显示2',
                        time: '2021-02-08 13:00:00',
                        like: false
                    },
                    {
                        id: '1',
                        name: '滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示',
                        path: 'static/demo/scroll出现.html',
                        downName: '滚动显示',
                        time: '2021-02-08 13:00:00',
                        like: false
                    },
                    {
                        id: '2',
                        name: '滚动显示1',
                        path: 'static/demo/scroll出现.html',
                        downName: '滚动显示1',
                        time: '2021-02-08 13:00:00',
                        like: true
                    },
                    {
                        id: '3',
                        name: '滚动显示2',
                        path: 'static/demo/scroll出现.html',
                        downName: '滚动显示2',
                        time: '2021-02-08 13:00:00',
                        like: false
                    },
                    {
                        id: '1',
                        name: '滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示',
                        path: 'static/demo/scroll出现.html',
                        downName: '滚动显示',
                        time: '2021-02-08 13:00:00',
                        like: false
                    },
                    {
                        id: '2',
                        name: '滚动显示1',
                        path: 'static/demo/scroll出现.html',
                        downName: '滚动显示1',
                        time: '2021-02-08 13:00:00',
                        like: true
                    },
                    {
                        id: '3',
                        name: '滚动显示2',
                        path: 'static/demo/scroll出现.html',
                        downName: '滚动显示2',
                        time: '2021-02-08 13:00:00',
                        like: false
                    },
                    {
                        id: '1',
                        name: '滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示滚动显示',
                        path: 'static/demo/scroll出现.html',
                        downName: '滚动显示',
                        time: '2021-02-08 13:00:00',
                        like: false
                    },
                    {
                        id: '2',
                        name: '滚动显示1',
                        path: 'static/demo/scroll出现.html',
                        downName: '滚动显示1',
                        time: '2021-02-08 13:00:00',
                        like: true
                    },
                    {
                        id: '3',
                        name: '滚动显示2',
                        path: 'static/demo/scroll出现.html',
                        downName: '滚动显示2',
                        time: '2021-02-08 13:00:00',
                        like: false
                    },

                ]
            }
        },
        methods: {
            /**
             * 收藏
             * @param {String} id 编号
             * */
            collectCase(id) {
                console.log(id);
            },
            // 取消收藏
            cancleCollectCase(id) {
                console.log(id);
            }
        },
        mounted() {
            console.log(this)
        }
    }
</script>

<style scoped lang="less">
    // @import '~@/assets/css/common.less';
    .case {
        height: 100%;
        .content {
            height: 100%;
            display: flex;
            justify-content: space-between;
            .left {
                width: 400px;
            }

            .right {
                width: calc(~"100% - 400px - 130px");
                padding: 15px;
                padding-right: 0;
                -moz-user-select:none;
                -webkit-user-select:none;
                user-select:none;
                .content-list {
                    height: calc(~"100% - 80px");
                    padding-right: 100px;
                    overflow-y: scroll;
                    .case-list {
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        margin-top: 20px;
                        .case-item {
                            // flex: 0 0 46%;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            margin-bottom: 20px;
                            width: 46%;
                            height: 76px;
                            border: 1px solid @caseBorder;
                            padding: 10px;
                            border-radius: 4px;
                            cursor: pointer;
                            box-shadow: 0px 0px 10px 2px @caseBorder;
                            &:hover {
                                transform: scale(0.99);
                                box-shadow: 0px 0px 20px 4px #a0cfff;
                                .top {
                                    img {
                                        transform: rotate(360deg);
                                    }
                                }
                            }
                    
                            .top {
                                margin-bottom: 10px;
                                img {
                                    width: 30px;
                                    height: auto;
                                    margin-right: 10px;
                                    transition: all 1s ease;
                                }
                    
                                .title-h3 {
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    padding-right: 60px;
                                }
                            }
                    
                            .top,
                            .bottom {
                                display: flex;
                                justify-content: flex-start;
                                align-items: center;
                            }
                    
                            .bottom {
                                justify-content: space-between;
                    
                                .online {
                                    &:hover {
                                        color: @hoverColor;
                                    }
                                }
                            }
                        }
                    }
                }
                .page {
                    display: flex;
                    justify-content: center;
                    padding: 15px;
                    margin: 15px 0;
                }
            }
        }
    }
</style>
