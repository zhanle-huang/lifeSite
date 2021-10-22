<template>
    <div class="article">
        <div class="head-menu">
            <ul class="show-menu">
                <li class="menu-item">
                    <el-tag :type="menuTag[getTagNum]">Tag 2</el-tag>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menuTag: ['', 'success', 'info', 'warning', 'danger']
            }
        },
        computed: {
            getTagNum() {
                return Math.random() * 4;
            }
        }
    }
</script>

<style>
</style>
