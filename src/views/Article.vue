<template>
    <div class="article">
        <div class="head-menu">
            <ul class="show-menu">
                <li :class="['menu-item', {'active': curTag === index}]" v-for="(item, index) in tagList" :key="item.id" @click="selectTag(item, index)">
                    <el-tag :type="menuTagType[tagIndex[index]]">{{item.name}}</el-tag>
                </li>
            </ul>
            <div class="article-container flex">
                <div class="left flex">
                    <ArticleLeftNav></ArticleLeftNav>
                </div>
                <div class="right flex">
                    <div class="article-content">
                        <ArticleList :listData="articleList"></ArticleList>
                        <div class="page">
                            <el-pagination v-model:currentPage="pageNum" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize" background layout="total, sizes, prev, pager, next, jumper"
                                :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange"></el-pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ArticleList from '@/components/article/ArticleList.vue';
    import ArticleLeftNav from '@/components/article/ArticleLeftNav.vue';
    import { ref, reactive, toRefs } from 'vue';
    import { artcleReq } from '@/api/index.js';
    export default {
        components: {
            ArticleList,
            ArticleLeftNav
        },
        setup() {
            // 定义变量
            const menuTagType = reactive(['', 'success', 'info', 'warning', 'danger']);
            let curTag = ref(0);
            let tagList = ref([])
            let pageNum = ref(1); // 页码
            let pageSize = ref(10); // 页大小
            let total = ref(100); // 总数
            let articleList = ref([]);
            // 定义方法
            // 选中tag
            function selectTag(item, index) {
                curTag.value = index
            }
            // 获取tag列表数据
            function getTagList() {
                let param = {
                    pageNum: 1,
                    pageSize: 20
                }
                artcleReq.getTagList(param).then(res => {
                    console.log(res.data)
                    tagList.value = res.data.list
                })
            }
            // 页大小改变
            const handleSizeChange = (val) => {
                console.log(`${val} items per page`);
                pageNum.value = val;
                getArticleList()
            }
            // 页码该改变
            const handleCurrentChange = (val) => {
                console.log(`current page: ${val}`);
                pageNum.value = val;
                getArticleList()
            }
            /// 获取文章列表
            function getArticleList() {
                console.log(pageNum, pageSize)
                let param = {
                    pageNum: pageNum.value,
                    pageSize: pageSize.value
                }
                artcleReq.getArticleList(param).then(res => {
                    console.log(res.data)
                    articleList.value = res.data.list
                    total.value = res.data.total
                })
            }
            // 方法调用
            getTagList()
            getArticleList();
            return {
                curTag,
                menuTagType,
                selectTag,
                tagList,
                total,
                articleList,
                handleCurrentChange,
                handleSizeChange
            }
        },
        data() {
            return {
                tagIndex: []
            }
        },
        computed: {
            getTagNum() {
                return Math.random() * 4;
            }
        },
        methods: {
            getTagIndex() {
                this.tagIndex = []
                for(var k in this.menuTagType) {
                    this.tagIndex.push(Math.floor(Math.random() * 5))
                }
            }
        },
        created() {
            this.getTagIndex()
            setInterval(() => {
                this.getTagIndex()
            }, 5 * 60 * 1000)
        },
        mounted() {
            // this.$nextTick(() => {
            //     let navContent = document.querySelector('.nav .content');
            //     navContent.style.height = 'auto';
            // })
        },
        beforeUnmount() {
            console.log('xss')
            // this.$nextTick(() => {
            //     let navContent = document.querySelector('.nav .content');
            //     navContent.style.height = 'calc(100% - 0.5rem)';
            // })
        }
    }
</script>

<style scoped lang="less">
    @horverPadding: 2px;
    @moveBlockColor: rgba(170, 85, 255, 1.0);
    .article {
        padding: 15px 80px;
        .show-menu {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 0px 15px 15px 15px;
            .menu-item {
                position: relative;
                margin: 8px;
                cursor: pointer;
                padding: @horverPadding;
                // border: 1px dotted rgba(0, 165, 247, .6);
                border-radius: 4px;
                -webkit-touch-callout: none;
                /* iOS Safari */
                -webkit-user-select: none;
                /* Chrome/Safari/Opera */
                -khtml-user-select: none;
                /* Konqueror */
                -moz-user-select: none;
                /* Firefox */
                -ms-user-select: none;
                /* Internet Explorer/Edge */
                user-select: none;
                &.active,
                &:hover {
                    padding: 0px;
                    border: 2px dotted rgba(0, 165, 247, .6);
                }
                &.active {
                    &::before {
                        position: absolute;
                        // top: -2px;
                        // right: -2px;
                        content: '';
                        width: 3px;
                        height: 2px;
                        background: @moveBlockColor;
                        animation: dotrun 6s infinite;
                    }
                    &::after {
                        position: absolute;
                        content: '';
                        width: 3px;
                        height: 2px;
                        background: @moveBlockColor;
                        animation: dotrun 7s infinite;
                    }
                }
            }
        }
        .article-container {
            justify-content: space-between;
            align-items: flex-start;
            padding: 0 15px;
            .right {
                width: 70%;
            }
            .article-content {
                width: 100%;
                border-radius: 2px;
                padding: 15px;
                .page {
                    height: 50px;
                }
            }
        }
    }
    @keyframes dotrun {
        0% {
            top: -2px;
            left: 0px;
        }
        25% {
            top: -2px;
            left: 100%;
        }
        50% {
            top: 100%;
            left: 100%;
        }
        75% {
            top: 100%;
            left: -2px;
        }
        100% {
            top: -2px;
            left: -2px;
        }
    }
</style>
