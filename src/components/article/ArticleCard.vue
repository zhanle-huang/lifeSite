<template>
    <div class="article-card">
        <div class="head flex">
            <span class="icon icon-liked"></span><h3 class="title-h3">{{title}}</h3>
        </div>
        <div class="dot-linear"></div>
        <ul class="list">
            <li class="item flex" v-for="(item, index) in data" :key="index">
                <p class="tip-title">{{item.title}}</p><span>{{item.type}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['data', 'title'],
        data() {
            return {}
        }
    }
</script>

<style scoped lang="less">
    .article-card {
        background: @cardbg;
        width: @articleLeftWidth;
        padding: 10px;
        margin: 30px 0;
        &:hover {
            transform: scale(0.99);
            box-shadow: 2px 2px 1px 1.5px #DDDDDD;
        }
        .head {
            background-image: linear-gradient(90deg, rgba(0, 96, 140, .06) 50%, rgba(0, 96, 140, 0) 0%);
            background-size: 20px 5px;
            .title-h3 {
                font-weight: normal;
            }
        }
        .list {
            .item {
                justify-content: space-between;
                margin: 15px 0;
                color: @commentColor;
                .tip-title {
                    width: 340px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow:ellipsis;
                    cursor: pointer;
                    &:hover {
                        color: @activeColor;
                        text-decoration: underline;
                    }
                }
                span {
                    cursor: pointer;
                    font-size: 18px;
                    &:hover {
                        color: @activeColor;
                    }
                }
            }
        }
    }
</style>
