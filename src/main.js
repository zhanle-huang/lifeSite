import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/rem.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(ElementPlus)

let positionStatus = ''
let div = null
let timer = null
app.directive('myLoading', {
    mounted(el, binding) {
        console.log('xxxaa', binding, app)
        if (binding.value) {
            let h = el.offsetHeight;
            let w = el.offsetWidth;
            div = document.createElement('div');
            div.className = 'my-loading';
            div.style.height = h + 'px';
            div.style.width = w + 'px';
            let position = getComputedStyle(el, null).getPropertyValue("position");
            positionStatus = position
            console.log(h, w)
            if (position === 'static') {
                el.style.position = 'relative';
            }
            el.appendChild(div)
            timer = setTimeout(() => {
                el.style.position = positionStatus
                if (div) {
                    el.removeChild(div)
                }
                app.config.globalProperties.$message.error({
                    message: '加载失败!'
                })
            }, 3 * 1000)
        } else {
            if (timer) {
                clearTimeout(timer)
            }
            el.style.position = positionStatus
            if (div) {
                el.removeChild(div)
            }
        }
    }
})
app.use(store).use(router).mount('#app')
