import '@/global.css'
import '@fontsource/jetbrains-mono'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import CBasic from '@/c/basic/CBasicIndex.vue'
import IntegralIndex from '@/ee/integral/IntegralIndex.vue'
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
import IO from '@/c/IO.vue'
import Expression from '@/c/Expression.vue'
import ConditionIndex from '@/c/condition/ConditionIndex.vue'
import Loop from '@/c/loop/Loop.vue'
import ArrayString from '@/c/array-string/ArrayString.vue'
import CString from '@/c/CString.vue'
import Pointer from '@/c/Pointer.vue'
import Struct from '@/c/Struct.vue'
import ComplexIndex from '@/ee/complex/ComplexIndex.vue'
import Analytic from '@/ee/Analytic.vue'
import Series from '@/ee/Series.vue'
import Residue from '@/ee/residue/Residue.vue'
import Laplace from '@/ee/Laplace.vue'
import DetIndex from '@/ee/det/DetIndex.vue'
import AIContents from '@/ai/AIContents.vue'
import EEContents from '@/ee/EEContents.vue'
import CPlan from '@/c/CPlan.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/ai/contents',component:AIContents},
    {path:'/ai/general',component:General},
    {path:'/ai/robot',component:Robot},
    {path:'/ai/drone',component:Drone},
    {path:'/ai/bigdata',component:Bigdata},
    {path:'/ai/ehome',component:EHome},
    {path:'/ai/transport',component:Transport},
    {path:'/ai/medicine',component:Medicine},
    {path:'/ai/finance',component:Finance},
    {path:'/ai/education',component:Education},
    {path:'/c/plan',component:CPlan},
    {path:'/c/contents',component:CContents},
    { path: '/c/basic', component: CBasic },
    {path:'/c/data',component:Data},
    {path:'/c/io',component:IO},
    {path:'/c/expression',component:Expression},
    {path:'/c/condition',component:ConditionIndex},
    {path:'/c/loop',component:Loop},
    {path:'/c/array',component:ArrayString},
    {path:'/c/string',component:CString},
    {path:'/c/pointer',component:Pointer},
    {path:'/c/struct',component:Struct},
    {path:'/ee/contents',component:EEContents},
    {path:'/ee/complex',component:ComplexIndex},
    {path:'/ee/analytic',component:Analytic},
    { path: '/ee/integral', component: IntegralIndex },
    {path:'/ee/series',component:Series},
    {path:'/ee/residue',component:Residue},
    {path:'/ee/laplace',component:Laplace},
    {path:'/ee/det',component:DetIndex},
    { path: '/playground', component: Playground }
  ]
})

const app = createApp(App)

app.use(router)

app.mount('#app')
