<template>
    <div class="article-nav">
        <!-- 推荐 -->
        <ArticleCard title="推荐" :data="articleRecommend"></ArticleCard>
        <!-- 最新 -->
        <ArticleCard title="最新" :data="articleRecommend"></ArticleCard>
        <!-- 最热 -->
        <ArticleCard title="热门" :data="articleRecommend"></ArticleCard>
        <!-- 归档 -->
        <ArticleFileTime></ArticleFileTime>
    </div>
</template>

<script>
    import { reactive } from 'vue';
    import ArticleCard from './ArticleCard.vue';
    import ArticleFileTime from './ArticleFileTime.vue';
    export default {
        components: {
            ArticleCard,
            ArticleFileTime
        },
        setup() {
            let articleRecommend = reactive([])
            // 获取推荐文章
            function getRecommend() {
                articleRecommend = reactive([
                    {
                        id: 'xxx',
                        title: '这是一个有趣的故事，你想听也不想听，谱写自己的故事',
                        type: 'EY咚咚'
                    },
                    {
                        id: 'xxx',
                        title: '这是一个有趣的故事，你想听也不想听，谱写自己的故事',
                        type: 'EY咚咚'
                    },
                    {
                        id: 'xxx',
                        title: '这是一个有趣的故事，你想听也不想听，谱写自己的故事',
                        type: 'EY咚咚'
                    },
                    {
                        id: 'xxx',
                        title: '这是一个有趣的故事，你想听也不想听，谱写自己的故事',
                        type: 'EY咚咚'
                    }
                ])
            }
            // 调用
            getRecommend()
            return {
                articleRecommend
            }
        }
    }
</script>

<style>
</style>
