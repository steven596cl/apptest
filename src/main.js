import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载全局样式
import './styles/index.less'

// 自动设置REM基准值（html标签字体大小）
import 'amfe-flexible'

import './assets/iconfont/iconfont.js'

import './assets/icon.css'

import './assets/iconfont/iconfont.css'

createApp(App).use(store).use(router).mount('#app')
