import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import AI from './components/AI.vue'
import Home from "./components/Home.vue";
import Electrical from "./components/Electrical.vue";
import Expression from "./clang/Expression.vue";
import Data from "./clang/Data.vue";
import IO from "./clang/IO.vue";

const app=createApp(App);
const routes = [
    {path: '/',component: Home},
    {path: '/clang/expression', component: Expression},
    {path: '/clang/data', component: Data},
    {path: '/clang/io', component: IO},
    { path: '/ai', component: AI, },
    { path: '/electrical', component: Electrical},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
app.use(router);
app.mount('#app');
