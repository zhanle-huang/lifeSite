<template>
    <div class="edit-article">
        <div class="edit-head flex">
            <el-input class="title-input" v-model="titleInput" placeholder="Please input">
                <template #prepend>文章标题</template>
            </el-input>
            <el-button type="danger">发布</el-button>
            <el-button>草稿</el-button>
        </div>
        <div class="linear"></div>
        <div class="edit-content flex">
            <div class="elit-area mk-content">
                <el-input
                    class="markdown-input"
                    v-model="textarea"
                    type="textarea"
                    placeholder="Please input"
                    :autosize="{ minRows: 12, maxRows: 10000 }"
                  />
            </div>
            <div class="markdown-content mk-content">
                <Markdown :data="textarea"></Markdown>
            </div>
        </div>

    </div>
</template>

<script>
    import { ref } from 'vue';
    import Markdown from '@/components/common/Markdown.vue'
    export default {
        components: {
            Markdown
        },
        setup() {
            // 定义变量
            const titleInput = ref('2021-4')
            // markdown
            let textarea = ref('## 在');
            return {
                titleInput,
                textarea
            }
        }
    }
</script>

<style scoped lang="less">
    .edit-article {
        .edit-head {
            justify-content: center;
            margin: auto;
            margin: 15px 0;
            .title-input {
                width: 1000px;
                margin-right: 15px;
            }
        }
        .edit-content {
            justify-content: space-between;
            align-items: flex-start;
            .markdown-content {
                width: 100%;
                .markdown-input {
                    border: none;
                }
            }
            .mk-content {
                width: 48%;
                min-height: 600px;
                border: 1px solid @caseBorder;
                padding: 15px;
            }
        }
        /deep/.el-textarea__inner {
            resize: none;
            font-size: 30px;
            line-height: 60px;
        }
        .elit-area {
            font-size: 24px;
        }
    }
</style>
