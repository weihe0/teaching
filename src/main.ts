import { createApp } from 'vue';
import { createRouter, createWebHistory, RouterView } from 'vue-router';
import FunctionIndex from './c/function/FunctionIndex.vue';
import IntegralIndex from '@/ee/integral/IntegralIndex.vue';
import ExpressionIndex from '@/c/expression/ExpressionIndex.vue';
import Assignment1 from '@/c/assignments/Assignment1.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/c/function', component: FunctionIndex },
    { path: '/c/expression', component: ExpressionIndex },
    { path: '/c/assignment1', component: Assignment1 },
    { path: '/ee/integral', component: IntegralIndex },
  ],
});

const app = createApp(RouterView);
app.use(router);
app.mount('#app');
