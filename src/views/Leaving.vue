<template>
    <div class="leaving">
        <div class="leaving-ctrl flex">
            <el-input class="leving-input" v-if="loginStatus" type="textarea" :rows="5" placeholder="请输入留言内容" v-model="makeComment"
                resize="none"></el-input>
            <div class="commendShadow" v-if="!loginStatus">
                <p>
                    <router-link to="/login" class="login">登录</router-link>后才能发表留言
                </p>
            </div>
            <el-button type="primary" plain @click="sendComment(makeComment)" id="sendComment" v-if="loginStatus">发表评论</el-button>
        </div>
        <div class="leaving-content">
            <ul class="leaving-list">
                <li class="item" v-for="(item, index) in levingList" :key="index">
                    <div class="top">
                        <div class="left">
                            <img :src="item.userSrc" ondragstart="return false;">
                            <span class="userName">{{item.userName}}</span>
                        </div>
                        <div class="right">
                            <time :datetime="item.time">{{showTime(item.createTime)}}</time>
                            <!-- <span class="reply">回复</span> -->
                        </div>
                    </div>
                    <div class="bottom">
                        <p class="content">{{item.content}}</p>
                    </div>
                    <div class="linear"></div>
                </li>
            </ul>
            <div class="page">
                <el-pagination v-model:currentPage="pageNum" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize"
                    background layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"></el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        ref
    } from 'vue';
    import {
        mapState
    } from 'vuex';
    import {
        leavingReq
    } from '@/api/index.js';
    import moment from 'moment';
    export default {
        setup() {
            // 定义变量
            let pageNum = ref(1);
            let pageSize = ref(10);
            let total = ref(1000);
            let makeComment = ref('');
            let levingList = ref([]);

            // 定义方法
            // 页大小改变
            const handleSizeChange = (val) => {
                console.log(`${val} items per page`);
                pageNum.value = val;
                getLeavingList();
            }
            // 页码该改变
            const handleCurrentChange = (val) => {
                console.log(`current page: ${val}`);
                pageNum.value = val;
                getLeavingList();
            }

            const getLeavingList = () => {
                let param = {
                    pageNum: pageNum.value,
                    pageSize: pageSize.value
                }
                leavingReq.getLevingList(param).then(res => {
                    if (res.status === 1) {
                        levingList.value = res.data.list;
                        total.value = res.data.total;
                    } else {
                        this.$message.error(res.msg);
                    }
                }).catch(err => {
                    this.$message.error(err);
                })
            }
            
            // 调用方法
            getLeavingList();
            return {
                pageNum,
                pageSize,
                total,
                makeComment,
                handleSizeChange,
                handleCurrentChange,
                levingList
            }
        },
        data() {
            return {
                // levingList: [{
                //         id: "2",
                //         userId: "123456",
                //         name: "跳着来",
                //         src: require("@/assets/image/icon/case.png"),
                //         content: "如何快速入门",
                //         time: "2020-09-25 10:00:02"
                //     },
                //     {
                //         id: "2",
                //         userId: "123456",
                //         name: "跳着来",
                //         src: require("@/assets/image/icon/case.png"),
                //         content: "如何快速入门",
                //         time: "2020-09-25 10:00:02"
                //     },
                //     {
                //         id: "2",
                //         userId: "123456",
                //         name: "跳着来",
                //         src: require("@/assets/image/icon/case.png"),
                //         content: "如何快速入门",
                //         time: "2020-09-25 10:00:02"
                //     }
                // ]
            }
        },
        computed: {
            ...mapState({
                loginStatus: state => state.loginStatus
            })
        },
        methods: {
            /**
             * 发送评论
             * @param {type}  
             * */
            sendComment(value) {
                let userInfo = JSON.parse(localStorage.getItem('userInfo'));
                let param = {
                    userId: userInfo.phone,
                    content: value
                }
                leavingReq.addLeving(param).then(res => {
                    if (res.status === 1) {
                        this.makeComment = '';
                        this.$message({
                            message: '留言成功！',
                            type: 'success'
                        });
                    } else {
                        this.$message.error(res.msg);
                    }
                }).catch(err => {
                    this.$message.error(err);
                })
            },
            // 显示时间
            showTime(time) {
                return moment(new Date(time)).format('YYYY-MM-DD HH:mm:ss');
            }
        }
    }
</script>

<style scoped lang="less">
    .leaving {
        padding-left: 5%;

        .leaving-ctrl {
            align-items: flex-end;
            width: 652px;
            padding-left: 48px;

            .commendShadow {
                width: 100%;
                height: 80px;
                text-align: center;
                line-height: 80px;
                letter-spacing: 1px;
            }
        }

        .leaving-list {
            .item {
                padding: 15px;
                width: 700px;

                .top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .left {
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;

                        img {
                            width: 40px;
                            height: auto;
                            border-radius: 50%;
                            margin-right: 5px;
                            cursor: pointer;
                        }

                        .userName {
                            font-size: 20px;
                            margin-right: 15px;
                            cursor: pointer;

                            &:hover {
                                color: @hoverColor;
                            }
                        }

                        time {
                            color: @timeColor;
                        }
                    }
                    .right {
                        padding-right: 10px;
                    }

                    .reply {
                        color: #5f5f5f;
                        font-size: 15px;
                        padding: 5px 10px;
                        background: @activeBg;
                        cursor: pointer;
                        border-radius: 10px;

                        &:hover {
                            color: #fff;
                            background: @hoverBg;
                        }
                    }
                }

                .bottom {
                    margin-top: 10px;

                    .content {
                        text-indent: 2em;
                        color: @commentColor;
                    }
                }
            }
        }
    }
</style>
