<template>
    <div class="home full-height">
        <div class="content container">
            <el-carousel class="carousel" :interval="5000" arrow="always">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    // import { ref, onMounted } from 'vue';
    export default {
        name: 'Home',
        components: {},
        setup() {

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
