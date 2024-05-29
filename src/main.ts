import { createApp } from 'vue';
import { createRouter, createWebHistory, RouterView } from 'vue-router';
import FunctionIndex from './c/function/FunctionIndex.vue';
import IntegralIndex from '@/ee/integral/IntegralIndex.vue';
import ExpressionIndex from '@/c/expression/ExpressionIndex.vue';
import Assignment2 from '@/c/assignments/Assignment2.vue';
import PointerIndex from '@/c/pointer/PointerIndex.vue';
import ReAssignment from '@/c/assignments/ReAssignment.vue';
import MidAssignment from '@/ee/MidAssignment.vue';
import SeriesIndex from '@/ee/series/SeriesIndex.vue';
import Project from '@/c/assignments/Project.vue';
import Exam1 from '@/c/exams/exam1/Exam1.vue';
import Random from '@/c/exams/template/Random.vue';
import Answer1 from '@/c/exams/exam1/Answer1.vue';
import Exam2 from '@/c/exams/exam2/Exam2.vue';
import Answer2 from '@/c/exams/exam2/Answer2.vue';
import Exam3 from '@/c/exams/exam3/Exam3.vue';
import Answer3 from '@/c/exams/exam3/Answer3.vue';
import Exam4 from '@/c/exams/exam4/Exam4.vue';
import Answer4 from '@/c/exams/exam4/Answer4.vue';
import Exam5 from '@/c/exams/exam5/Exam5.vue';
import Answer5 from '@/c/exams/exam5/Answer5.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/c/function', component: FunctionIndex },
    { path: '/c/expression', component: ExpressionIndex },
    { path: '/c/pointer', component: PointerIndex },
    { path: '/c/assignment-2', component: Assignment2 },
    { path: '/c/assignment-retake', component: ReAssignment },
    { path: '/c/project', component: Project },
    { path: '/c/exam-1', component: Exam1 },
    { path: '/c/answer-1', component: Answer1 },
    { path: '/c/exam-2', component: Exam2 },
    { path: '/c/answer-2', component: Answer2 },
    { path: '/c/exam-3', component: Exam3 },
    { path: '/c/answer-3', component: Answer3 },
    { path: '/c/exam-4', component: Exam4 },
    { path: '/c/answer-4', component: Answer4 },
    { path: '/c/exam-5', component: Exam5 },
    { path: '/c/answer-5', component: Answer5 },
    { path: '/c/random', component: Random },
    { path: '/ee/integral', component: IntegralIndex },
    { path: '/ee/series', component: SeriesIndex },
    { path: '/ee/assignment', component: MidAssignment },
  ],
});

const app = createApp(RouterView);
app.use(router);
app.mount('#app');
