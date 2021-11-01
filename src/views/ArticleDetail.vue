<template>
    <div class="article-detail">
        <div class="article-container flex">
            <div class="left flex">
                <ArticleLeftNav></ArticleLeftNav>
            </div>
            <div class="right flex">
                <div class="detail-content">
                    <div class="markdown-content article-card">
                        <Markdown :data="textarea"></Markdown>
                    </div>
                </div>
                <CommentList></CommentList>
                <ArticleList :listData="articleList"></ArticleList>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        ref,
        reactive,
        toRefs
    } from 'vue';
    import CommentList from '@/components/article/CommentList.vue';
    import ArticleList from '@/components/article/ArticleList.vue';
    import ArticleLeftNav from '@/components/article/ArticleLeftNav.vue';
    import Markdown from '@/components/common/Markdown.vue';
    export default {
        components: {
            ArticleLeftNav,
            CommentList,
            ArticleList,
            Markdown
        },
        setup() {
            // 文章列表
            let articleList = reactive([]);
            // markdown
            let textarea = ref('## a撒');
            
            // 定义方法
            /// 获取推荐的相关文章文章列表
            function getArticleList() {
                let temp = [
                    {
                        img: require('@/assets/image/bg.jpg'),
                        title: '这是一段不知名的标题撒娇看到啥看到哈十九点啥叫客户端看见撒谎的看就撒谎框架洒家打开手机打算看了',
                        createTime: '2021-02-20 13:56:11',
                        authorName: '小阿阿萨的',
                        authorSrc: require('@/assets/image/bg.jpg'),
                        readNum: 12010,
                        commendNum: 4546,
                        likeNum: 445
                    }
                ];
                temp = [...temp, ...temp];
                temp = [...temp, ...temp];
                temp = [...temp, ...temp];
                articleList = reactive(temp)
            };
            
            // 调用
            getArticleList();
            return {
              textarea,
              articleList
            }
        },
        watch: {
            textarea(v) {
            }
        },
        data() {
            return {
                // source: '# Hello World!'
            }
        }
    }
</script>

<style scoped lang="less">
    .article-detail {
        // background: #fff;
        .article-container {
            &.flex {
                align-items: flex-start;
            }
        }
        .left {
            width: 500px;
        }

        .right {
            width: calc(~"100% - 500px - 100px");
            padding-top: 30px;
            flex-wrap: wrap;
            &.flex {
                align-items: flex-start;
            }

            .detail-content {
                width: 100%;

                .markdown-content {
                    min-height: 600px;
                    // border: 1px solid @caseBorder;
                    padding: 15px;
                }
            }

            // .markdown-content {
            //     width: 100%;
            // height: 500px;
            //     border: 1px solid @caseBorder;
            //     padding: 15px;
            // }
        }
    }
</style>
