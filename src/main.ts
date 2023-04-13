import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "./components/Home.vue";
import Expression from "./clang/Expression.vue";
import Data from "./clang/Data.vue";
import IO from "./clang/IO.vue";
import SmartHome from "./ai/SmartHome.vue";
import Condition from "./clang/Condition.vue";
import Series from "./electrical/Series.vue";
import katex from "katex";
import "katex/dist/katex.css";
import Residue from "./electrical/residue/Residue.vue";
import Fundamental from "./clang/Fundamental.vue";
import Loop from "./clang/loop/Loop.vue";
import Transport from "./ai/transport/Transport.vue";
import EHomework2 from "./electrical/EHomework2.vue";
import ArrayString from "./clang/array-string/ArrayString.vue";
import LaplaceIndex from "./electrical/laplace/LaplaceIndex.vue";

const app=createApp(App);
const routes = [
    {path: '/',component: Home},
    {path: '/clang/fundamental', component: Fundamental},
    {path: '/clang/expression', component: Expression},
    {path: '/clang/data', component: Data},
    {path: '/clang/io', component: IO},
    {path: '/clang/condition', component: Condition},
    {path: '/clang/loop',component: Loop},
    {path: '/clang/array-string', component: ArrayString},
    { path: '/ai', component: SmartHome, },
    {path: '/ai/transport',component: Transport},
    {path: '/ai/smart-home', component: SmartHome},
    {path: '/electrical/series', component: Series},
    {path: '/electrical/residue',component: Residue},
  {path:'/electrical/laplace',component: LaplaceIndex},
    {path:'/electrical/homework-2',component: EHomework2}
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
