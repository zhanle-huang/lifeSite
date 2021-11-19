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
            <div class="elit-area mk-content" ref="markdownInput">
                <el-input
                    class="markdown-input"
                    v-model="textarea"
                    type="textarea"
                    placeholder="Please input"
                    :autosize="{ minRows: 12, maxRows: 10000 }"
                  />
            </div>
            <div class="markdown-content mk-content" ref="markdownContent">
                <Markdown class="markdown-body" :data="textarea"></Markdown>
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
        height: 100%;
        .edit-head {
            justify-content: center;
            margin: auto;
            padding: 15px 0;
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
                width: 47%;
                // height: calc(~"100% - 70px");
                height: 650px;
                border: 1px solid @caseBorder;
                padding: 15px;
                overflow: hidden scroll;
                .markdown-body {
                    min-height: 700px;
                }
            }
        }
        /deep/.el-textarea__inner {
            border: none;
            resize: none;
            font-size: 26px;
            line-height: 26px;
        }
        .elit-area {
            font-size: 24px;
        }
    }
</style>
