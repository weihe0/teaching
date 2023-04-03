import { createApp } from 'vue'
import './style.css'
import "bootstrap/dist/css/bootstrap.css"
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import AI from './components/AI.vue'
import Home from "./components/Home.vue";
import Electrical from "./components/Electrical.vue";
import Expression from "./clang/Expression.vue";
import Data from "./clang/Data.vue";
import IO from "./clang/IO.vue";
import SmartHome from "./ai/SmartHome.vue";
import Condition from "./clang/Condition.vue";
import Series from "./electrical/Series.vue";
import katex from "katex";
import Residue from "./electrical/Residue.vue";

const app=createApp(App);
const routes = [
    {path: '/',component: Home},
    {path: '/clang', component: Data},
    {path: '/clang/expression', component: Expression},
    {path: '/clang/data', component: Data},
    {path: '/clang/io', component: IO},
    {path: '/clang/condition', component: Condition},
    { path: '/ai', component: AI, },
    {path: '/ai/smart-home', component: SmartHome},
    { path: '/electrical', component: Series},
    {path: '/electrical/series', component: Series},
    {path: '/electrical/residue',component: Residue}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

app.directive("katex",{
    created(el:HTMLElement){
        if(el.textContent){
            el.innerHTML = katex.renderToString(el.textContent, {output:"html"});
        }
    }
});
app.use(router);
app.mount('#app');
