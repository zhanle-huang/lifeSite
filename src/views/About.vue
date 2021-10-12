<template>
    <div class="about">
        <h1>This is an about page</h1>
    </div>
</template>

<script>
import { computed, toRef } from 'vue'
export default {
    props: ['title'],
    data() {
        
    },
    created() {
        console.log('创建')
    },
    setup(props) {
        const title = toRef(props, 'title')
        console.log(title.value)
        console.log('ss')
        let counter = 0
        const twiceTheCounter = computed(() => 1 * 2)
        counter++
        console.log(counter) // 1
        console.log(twiceTheCounter.value) // 2
    }
}
</script>
