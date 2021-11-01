<template>
    <div class="markdown">
        <VueMarkdownIt :source="data" :plugins="plugins" style="height: 100%;padding-left: 8px;margin-top: 7px;"></VueMarkdownIt>
    </div>
</template>

<script>
    import { reactive, ref, toRef } from 'vue';
    import VueMarkdownIt from 'vue3-markdown-it';
    import MarkdownItEmoji from 'markdown-it-emoji';
    import MarkdownItDeflist from 'markdown-it-deflist';
    import MarkdownItSub from 'markdown-it-sub';
    import MarkdownItSup from 'markdown-it-sup';
    import MarkdownItAbbr from 'markdown-it-abbr';
    export default {
        props: ['data'],
        components: {
            VueMarkdownIt
        },
        setup(props) {
            // markdown
            let plugins = reactive([{
                plugin: MarkdownItAbbr
            }, {
                plugin: MarkdownItSub
            }, {
                plugin: MarkdownItSup
            }, {
                plugin: MarkdownItDeflist
            }, {
                plugin: MarkdownItEmoji
            }]);
            return {
                plugins
            }
        },
        mounted() {
        }
    }
</script>

<style>
</style>
