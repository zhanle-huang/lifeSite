<template>
    <div class="article-time">
        <div class="head flex">
            <span class="icon icon-liked"></span><h3 class="title-h3">归档</h3>
        </div>
        <div class="dot-linear"></div>
        <ul :class="['list', {'more-list': moreStatus}]">
            <li class="item">
                <h3 class="time-title">2021</h3>
                <ul class="time-list flex">
                    <li class="time-item">9月</li>
                    <li class="time-item">9月</li>
                    <li class="time-item">9月</li>
                    
                    <li class="time-item">9月</li>
                    <li class="time-item">9月</li>
                    <li class="time-item">9月</li>
                    <li class="time-item">9月</li>
                    <li class="time-item">9月</li>
                    <li class="time-item">9月</li>
                    <li class="time-item">9月</li>
                    <li class="time-item">9月</li>
                    <li class="time-item">9月</li>
                </ul>
            </li>
            <li class="item">
                <h3 class="time-title">2021</h3>
                <ul class="time-list flex">
                    <li class="time-item">9月</li>
                    <li class="time-item">9月</li>
                    <li class="time-item">9月</li>
                    
                    <li class="time-item">9月</li>
                    <li class="time-item">9月</li>
                </ul>
            </li>
            <li class="item">
                <h3 class="time-title">2021</h3>
                <ul class="time-list flex">
                    <li class="time-item">9月</li>
                    <li class="time-item">9月</li>
                    <li class="time-item">9月</li>
                    
                    <li class="time-item">9月</li>
                    <li class="time-item">9月</li>
                </ul>
            </li>
            <li class="item">
                <h3 class="time-title">2021</h3>
                <ul class="time-list flex">
                    <li class="time-item">9月</li>
                    <li class="time-item">9月</li>
                    <li class="time-item">9月</li>
                    
                    <li class="time-item">9月</li>
                    <li class="time-item">9月</li>
                </ul>
            </li>
        </ul>
        <div class="dot-linear"></div>
        <p class="more" v-if="!moreStatus" @click="showMore(true)">展开更多</p>
        <p class="more" v-else @click="showMore(false)">收起</p>
    </div>
</template>

<script>
    import { ref } from 'vue';
    export default {
        setup() {
            // 变量
            let moreStatus = ref(false);
            // 方法
            function showMore(status) {
                moreStatus.value = status;
            }
            // 调用
            
            return {
                moreStatus,
                showMore
            }
        },
        data() {
            return {
                
            }
        },
        methods: {
        }
    }
</script>

<style scoped lang="less">
    .article-time {
        width: @articleLeftWidth;
        border: 1px solid #DDDDDD;
        padding: 10px;
        box-shadow: 1px 1px 1px 0px #DDDDDD;
        margin: 30px 0;
        background: @cardbg;
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
        .time-title {
            font-size: 20px;
            font-weight: bold;
        }
        .list {
            height: 200px;
            overflow: hidden;
            transition: all .3s ease;
            &.more-list {
                height: 500px;
            }
            .item {
                .time-list {
                    flex-wrap: wrap;
                    .time-item {
                        padding: 15px 20px;
                        cursor: pointer;
                        &:hover {
                            color: @activeColor;
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }
</style>
