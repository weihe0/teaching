import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import AI from './components/AI.vue'
import CLang from "./components/CLang.vue";
import lottery from "./components/lottery.vue";
import Home from "./components/Home.vue";
import Electrical from "./components/Electrical.vue";
import Expression from "./clang/Expression.vue";

const app=createApp(App);
const routes = [
    {path: '/',component: Home},
    { path: '/clang', component: CLang, },
    {path: '/clang/expression', component: Expression},
    { path: '/ai', component: AI, },
    { path: '/electrical', component: Electrical},
    {path: '/lottery',component: lottery}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
app.use(router);
app.mount('#app');
