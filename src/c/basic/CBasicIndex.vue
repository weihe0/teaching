<script setup lang="tsx">
import type { Component } from 'vue'
import Slide from '@/layouts/Slide.vue'
import CLayout from '@/layouts/CLayout.vue'
import Math from '@/components/Math.vue'
import { onMounted, ref } from 'vue'
import BasicStruct from '@/c/basic/BasicStruct.vue'
const slides: Component[] = [
  {
    render() {
      return (
        <Slide title="C语言基础">
          <ol>
            <li>什么是C语言</li>
            <li>C语言的发展史</li>
            <li>C语言的软件</li>
            <li>C程序基本结构</li>
          </ol>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="C语言历史">
          <ol>
            <li>CPL、BCPL、B、C</li>
            <li>1971年，Dennis M.Ritchie发明了C语言</li>
            <li>C语言用于多种计算机，包括大型机、PC、Mac甚至任天堂FC</li>
            <li>1990年，国际标准化组织首次出版C语言标准</li>
            <li>
              C语言标准更新：1999年、2011年、2017年、<em>2023年</em>
            </li>
          </ol>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="C语言编写的软件">
          <ul>
            <li>操作系统：Windows、Mac、Android、iOS、PS5 Orbis系统、Switch大气层系统</li>
            <li>设备控制：机器人控制软件、汽车控制软件、F-35战斗机控制软件</li>
            <li>游戏：《毁灭战士》、《雷神之锤》、《半条命：反恐精英》</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="C语言的特点">
          <ul>
            <li>语言简洁、紧凑，使用方便、灵活</li>
            <li>数据类型丰富</li>
            <li>运算符丰富</li>
            <li>具有结构化的控制语句，用函数作为模块</li>
            <li>程序的自由度高，限制不严格</li>
            <li>程序执行效率高</li>
          </ul>
        </Slide>
      )
    }
  },
  BasicStruct,
  {
    render() {
      return (
        <Slide title="基本结构解释">
          <ul>
            <li>
              <code>#include &lt;stdio.h&gt;</code>表示包含stdio.h文件
            </li>
            <li>
              <code>main</code>表示main函数，不能<em>拼错</em>，否则程序
            </li>
            <li>
              main函数后面有一对()，main函数的执行内容放在{}中，这两对括号<em>不能省略</em>
            </li>
            <li>
              printf函数的作用是输出<em>双引号内</em>的内容到屏幕
            </li>
            <li>return 0;表示main函数的返回值</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="C语言程序的编写与执行流程">
          <ol>
            <li>
              编辑：用文本编辑器或者其它软件编写<em>源程序</em>
            </li>
            <li>
              编译：将源程序翻译为<em>可执行程序</em>
            </li>
            <li>运行：执行可执行程序</li>
          </ol>
          <tfoot>
            为什么需要编译：因为可执行程序是用<em>机器语言</em>描述的，源程序不能<em>直接执行</em>
          </tfoot>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="Dev-C++">
          <ul>
            <li>
              Dev-C++是C语言的一个<em>集成开发环境</em>
            </li>
            <li>
              包含<em>编辑</em>、<em>编译</em>、<em>运行</em>、<em>调试</em>等功能
            </li>
            <li>
              使用简单，有中文界面，适合<em>初学者</em>
            </li>
          </ul>
          <tfoot>
            在实践中，一般使用Visual Studio (Windows)或者XCode
            (Mac)开发C程序，但两者功能复杂，不适合初学者
          </tfoot>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="Dev-C++流程">
          <ol>
            <li>
              选择<em>新建源文件</em>，不要选择新建项目
            </li>
            <li>编辑源文件</li>
            <li>
              保存源文件，保存时一定要把<em>文件类型</em>设为C Source File
            </li>
            <li>点击“编译并执行”</li>
            <li>
              执行完后要<em>关闭执行窗口</em>，否则无法继续编译
            </li>
          </ol>
        </Slide>
      )
    }
  }
]
</script>

<template>
  <CLayout :slides="slides" />
</template>

<style scoped></style>
