import '@/global.css'
import '@fontsource/jetbrains-mono'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import CBasic from '@/c/basic/CBasicIndex.vue'
import IntegralIndex from '@/ee/integral/IntegralIndex.vue'
import CContents from '@/c/CContents.vue'
import Education from '@/ai/Education.vue'
import Playground from '@/layouts/Playground.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/ai/education', component: Education },
    { path: '/c/basic', component: CBasic },
    { path: '/c', component: CContents },
    { path: '/ee/integral', component: IntegralIndex },
    { path: '/playground', component: Playground }
  ]
})

const app = createApp(App)

app.use(router)

app.mount('#app')
