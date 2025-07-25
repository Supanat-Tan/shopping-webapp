import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import '@/styles/global.scss'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
