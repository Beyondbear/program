import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';


import '@/assets/css/resets.css'
import '@/assets/css/border.css'
import '@/assets/js/common.js'

createApp(App).use(store).use(router).mount('#app')
