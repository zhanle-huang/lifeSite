<template>
    <div class="leaving">
        <div class="leaving-ctrl">
            <el-input class="leving-input" v-if="isLogin" type="textarea" :rows="5" placeholder="请输入留言内容" v-model="makeComment" resize="none"></el-input>
            <div class="commendShadow" v-if="!isLogin">
            	<p>
            		<router-link to="/login" class="login">登录</router-link>后才能发表留言
            	</p>
            </div>
            <el-button type="primary" plain @click="sendComment(makeComment)" id="sendComment" v-if="isLogin">发表评论</el-button>
        </div>
        <div class="leaving-content">
            <ul class="leaving-list">
                <li class="item" v-for="(item, index) in levingList" :key="index">
                    <div class="top">
                        <div class="left">
                            <img :src="item.src" ondragstart="return false;">
                            <span class="userName">{{item.name}}</span>
                            <time :datetime="item.time">{{item.time}}</time>
                        </div>
                        <span class="reply">回复</span>
                    </div>
                    <div class="bottom">
                        <p class="content">{{item.content}}</p>
                    </div>
                    <div class="linear"></div>
                </li>
            </ul>
            <div class="page">
                <el-pagination v-model:currentPage="pageNum" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize" background layout="total, sizes, prev, pager, next, jumper"
                    :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange"></el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';
    export default {
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
             * 发送评论
             * @param {type}  
             * */
            const sendComment = (value) => {
                console.log(value)
            }
            return {
                pageNum: ref(1),
                pageSize: ref(10),
                total: ref(1000),
                isLogin: ref(true),
                makeComment: ref(''),
                handleSizeChange,
                handleCurrentChange,
                sendComment
            }
        },
        data() {
            return {
                levingList: [
                    {
                        id: "2",
                        userId: "123456",
                        name: "跳着来",
                        src: require("@/assets/image/icon/case.png"),
                        content: "如何快速入门",
                        time: "2020-09-25 10:00:02"
                    },
                    {
                        id: "2",
                        userId: "123456",
                        name: "跳着来",
                        src: require("@/assets/image/icon/case.png"),
                        content: "如何快速入门",
                        time: "2020-09-25 10:00:02"
                    },
                    {
                        id: "2",
                        userId: "123456",
                        name: "跳着来",
                        src: require("@/assets/image/icon/case.png"),
                        content: "如何快速入门",
                        time: "2020-09-25 10:00:02"
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    .leaving {
        padding-left: 5%;
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
