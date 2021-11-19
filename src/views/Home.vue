<template>
    <div class="home full-height">
        <div class="content container">
            <el-carousel class="carousel" :interval="5000" arrow="always">
                <el-carousel-item v-for="item in carouselList" :key="item.id">
                    <!-- <h3>{{ item.desc }}</h3> -->
                    <img class="carousel-img" :src="item.src" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import { commonReq } from '@/api/index.js';
    export default {
        name: 'Home',
        components: {},
        setup() {
            // 定义变量
            let carouselList = ref([]);
            
            // 定义方法
            function getCarousel() {
                commonReq.getCourselList().then(res => {
                    if (res.status === 1) {
                        res.data.list.map(item => {
                            // item.src = require('http://localhost:3002/lifeSite' + item.src);
                            item.src = 'http://localhost:3002/lifeSite' + item.src
                            // console.log(item)
                        })
                        console.log(res.data.list)
                        carouselList.value = res.data.list;
                    }
                })
            }
            
            // 方法调用
            getCarousel();
            
            return {
                carouselList
            }
        },
        mounted() {
            console.log('mounted')
        }
    }
</script>

<style scoped lang="less">
    .home {
        height: 100%;
        .content {
            height: 100%;
            .carousel {
                height: 100%;
                /deep/.el-carousel__container {
                    height: 100%;
                }
                /deep/.el-carousel__button {
                    
                }
                .carousel-img {
                    display: block;
                    width: 100%;
                    // height: auto;
                    height: 100%;
                }
            }
            .el-carousel__item h3 {
                color: #475669;
                font-size: 18px;
                opacity: 0.75;
                line-height: 300px;
                margin: 0;
                text-align: center;
            }
            
            .el-carousel__item:nth-child(2n) {
                background-color: #99a9bf;
            }
            
            .el-carousel__item:nth-child(2n + 1) {
                background-color: #d3dce6;
            }
        }
    }
</style>
