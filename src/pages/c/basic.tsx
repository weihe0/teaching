import {Slide} from "@/components/slide";
import {CLayout} from "@/components/layouts";

export default function Basic() {
  return <CLayout>
    <Slide title={'第1-4章 C语言基础'}>
      <ol>
        <li>什么是C语言</li>
        <li>C语言的发展史</li>
        <li>C语言的软件</li>
        <li>C程序基本结构</li>
      </ol>
    </Slide>
    <Slide title="C语言历史">
      <ol>
        <li>CPL、BCPL、B、C</li>
        <li>1971年，Dennis M.Ritchie发明了C语言</li>
        <li>C语言用于多种计算机，包括大型机、PC、Mac甚至任天堂FC</li>
        <li>1990年，国际标准化组织出版C语言标准</li>
        <li>C语言标准更新：1999年、2011年、2017年、<em>2023年</em></li>
      </ol>
    </Slide>
    <Slide title="C语言编写的软件">
      <ul>
        <li>操作系统：Windows、Mac、Android、iOS、PS5 Orbis系统、Switch大气层系统</li>
        <li>设备控制：机器人控制软件、汽车控制软件、F-35战斗机控制软件</li>
        <li>游戏：《毁灭战士》、《雷神之锤》、《半条命：反恐精英》</li>
      </ul>
    </Slide>
  </CLayout>
}
