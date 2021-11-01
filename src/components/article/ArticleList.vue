<template>
    <div class="artile-list">
        <ul class="list">
            <li class="item" v-for="(item, index) in listData" :key="index">
                <div class="top flex">
                    <div class="left flex" @click="getArticleDetail(item)">
                        <img class="article-list" src="../../assets/image/bg.jpg" alt="">
                        <h3 class="title-h3 article-title">{{item.title}}</h3>
                    </div>
                    <div class="right flex">
                        <time datetime="2021-2-2">{{item.createTime}}</time>
                    </div>
                </div>
                <div class="bottom flex">
                    <div class="left flex">
                        <img class="user-img" src="../../assets/image/bg.jpg" alt="">
                        <span class="user-name">{{item.authorName}}</span>
                    </div>
                    <div class="right flex">
                        <span class="btn icon icon-download" title="read">2021</span>
                        <span class="btn icon icon-like" title="commend">1022</span>
                        <span class="btn icon icon-liked" title="liked">333</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['listData'],
        setup(props) {
            console.log(props)
            // 定义变量
            // 定义方法
            return {
            }
        },
        methods: {
            /**
             * 查看文章详情
             * */
            getArticleDetail() {
                this.$router.push({name: 'ArticleDetail'})
            }
        }
    }
</script>

<style scoped lang="less">
    .artile-list {
        width: 100%;
        .list {
            .item {
                padding: 10px;
                margin: 15px 0;
                background: linear-gradient(to right, rgba(0, 96, 140, 0.03), rgba(0, 96, 140, 0.02));
                border: 1px solid rgba(143, 162, 162, .2);
                border-radius: 2px;
                &:hover {
                    background: linear-gradient(to right, rgba(0, 96, 140, 0.05), rgba(0, 96, 140, 0.03));
                    padding: 8px;
                    border: 3px solid rgba(143, 162, 162, .1);
                }
                .top {
                    justify-content: space-between;
                    align-items: flex-start;
                    .left {
                        align-items: flex-start;
                    }
                    time {
                        margin-top: 4px;
                    }
                }
                .bottom {
                    justify-content: space-between;
                    align-items: center
                }
            }
        }
    }
</style>
