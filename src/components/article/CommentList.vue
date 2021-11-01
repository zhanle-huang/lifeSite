<template>
    <div class="comment-list article-card">
        <ul class="list">
            <li class="item">
                <div class="top flex">
                    <div class="left flex">
                        <img class="user-img" src="../../assets/image/bg.jpg" ondragstart="return false;">
                        <span class="user-name">xxx</span>
                        <time :datetime="xxx">xxx</time>
                    </div>
                    <div class="right flex">
                        <span class="reply">回复</span>
                    </div>
                </div>
                <!-- <div class="linear"></div> -->
                <div class="bottom">
                    <p class="comment comment-content">
                        这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容
                    </p>
                </div>
                <div class="linear"></div>
            </li>
            <li class="item">
                <div class="top flex">
                    <div class="left flex">
                        <img class="user-img" src="../../assets/image/bg.jpg" ondragstart="return false;">
                        <span class="user-name">xxx</span>
                        <div class="bereply flex">
                            <span class="atto">@</span><img class="user-img" src="../../assets/image/bg.jpg" ondragstart="return false;">
                            <span class="user-name">xxx</span>
                        </div>
                        <time :datetime="xxx">xxx</time>
                    </div>
                    <div class="right flex">
                        <span class="reply">回复</span>
                    </div>
                </div>
                <div class="middle">
                    <p class="comment bereply-content" title="这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容">
                        <span class="relpy-tag">回复: </span>这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容
                    </p>
                </div>
                <div class="linear-dashed"></div>
                <div class="bottom">
                    <p class="comment comment-content">
                        这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容这是被回复的内容
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
</script>

<style scoped lang="less">
    .comment-list {
        width: 100%;
        margin: 30px 0;
        padding: 10px;
        .top {
            justify-content: space-between;
        }
    }
</style>
