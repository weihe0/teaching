import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import hljs from 'highlight.js/lib/core';
import hljsVuePlugin from "@highlightjs/vue-plugin";
import c from 'highlight.js/lib/languages/c'
hljs.registerLanguage('c',c);
import AI from './components/AI.vue'
import CLang from "./components/CLang.vue";
import lottery from "./components/lottery.vue";
import BasicElectrical from "./components/BasicElectrical.vue";
import Home from "./components/Home.vue";

const app=createApp(App);
const routes = [
    {path: '/',component: Home},
    { path: '/clang', component: CLang, },
    { path: '/ai', component: AI, },
    { path: '/electrical', component: BasicElectrical},
    {path: '/lottery',component: lottery}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
app.use(router);
app.use(hljsVuePlugin);
app.mount('#app');
