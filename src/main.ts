import '@fontsource/jetbrains-mono'
import '@fontsource/noto-sans-mono'
import '@/global.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Basic from '@/c/basic/Basic.vue'
import Integral from '@/ee/integral/Integral.vue'
import CContents from '@/c/CContents.vue'
import Education from '@/ai/Education.vue'
import Playground from '@/layouts/Playground.vue'
import General from '@/ai/General.vue'
import Robot from '@/ai/Robot.vue'
import Drone from '@/ai/Drone.vue'
import Bigdata from '@/ai/Bigdata.vue'
import EHome from '@/ai/EHome.vue'
import Transport from '@/ai/Transport.vue'
import Medicine from '@/ai/Medicine.vue'
import Finance from '@/ai/Finance.vue'
import Data from '@/c/Data.vue'
import IO from '@/c/io/IO.vue'
import Expression from '@/c/Expression.vue'
import Condition from '@/c/condition/Condition.vue'
import Loop from '@/c/loop/Loop.vue'
import CArray from '@/c/array/CArray.vue'
import CString from '@/c/string/CString.vue'
import Pointer from '@/c/Pointer.vue'
import Struct from '@/c/Struct.vue'
import Complex from '@/ee/complex/Complex.vue'
import Analytic from '@/ee/Analytic.vue'
import Series from '@/ee/Series.vue'
import Residue from '@/ee/residue/Residue.vue'
import Laplace from '@/ee/Laplace.vue'
import Det from '@/ee/det/Det.vue'
import AIContents from '@/ai/AIContents.vue'
import EEContents from '@/ee/EEContents.vue'
import CPlan from '@/c/CPlan.vue'
import AIPlan from '@/ai/AIPlan.vue'
import EEPlan from '@/ee/EEPlan.vue'
import Training from '@/components/Training.vue'
import CFunction from '@/c/CFunction.vue'
import CProgress from '@/c/CProgress.vue'
import AIProgress from '@/ai/AIProgress.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/ai/plan', component: AIPlan },
    {path:'/ai/progress',component:AIProgress},
    { path: '/ai/contents', component: AIContents },
    { path: '/ai/general', component: General },
    { path: '/ai/robot', component: Robot },
    { path: '/ai/drone', component: Drone },
    { path: '/ai/bigdata', component: Bigdata },
    { path: '/ai/ehome', component: EHome },
    { path: '/ai/transport', component: Transport },
    { path: '/ai/medicine', component: Medicine },
    { path: '/ai/finance', component: Finance },
    { path: '/ai/education', component: Education },
    { path: '/c/plan', component: CPlan },
    { path: '/c/progress', component: CProgress },
    { path: '/c/contents', component: CContents },
    { path: '/c/basic', component: Basic },
    { path: '/c/data', component: Data },
    { path: '/c/io', component: IO },
    { path: '/c/expression', component: Expression },
    { path: '/c/condition', component: Condition },
    { path: '/c/loop', component: Loop },
    { path: '/c/array', component: CArray },
    { path: '/c/string', component: CString },
    { path: '/c/function', component: CFunction },
    { path: '/c/pointer', component: Pointer },
    { path: '/c/struct', component: Struct },
    { path: '/ee/plan', component: EEPlan },
    { path: '/ee/contents', component: EEContents },
    { path: '/ee/complex', component: Complex },
    { path: '/ee/analytic', component: Analytic },
    { path: '/ee/integral', component: Integral },
    { path: '/ee/series', component: Series },
    { path: '/ee/residue', component: Residue },
    { path: '/ee/laplace', component: Laplace },
    { path: '/ee/det', component: Det },
    { path: '/training', component: Training },
    { path: '/playground', component: Playground }
  ]
})

const app = createApp(App)

app.use(router)

app.mount('#app')
