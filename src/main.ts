import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from "./components/HelloWorld.vue";
import AI from './components/AI.vue'
import CLang from "./components/CLang.vue";
const app=createApp(App);
const routes = [
    { path: '/', component: CLang, },
    { path: '/ai', component: AI, },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
app.use(router);
app.mount('#app');
