<script setup lang='ts'>

import PlanLayout from '@/layouts/PlanLayout.vue'
import Plan from '@/layouts/Plan.vue'
</script>

<template>
  <PlanLayout>
    <Plan :count='1' :week='1' :weekday='2' :classNumber='1' topic='C语言基础' keynote='C语言的特点'
          difficulty='C语言的基本结构的各个部分'>
      <template #body>
      <ol>
        <li>C语言历史</li>
        <ol>
          <li>机器语言：计算机能直接识别并执行的二进制指令</li>
          <li>汇编语言：机器指令的助记符</li>
          <li>高级语言：接近自然语言和数学语言的编程语言</li>
        </ol>
        <li>C语言的特点</li>
        <ol>
          <li>数据类型丰富</li>
          <li>运算类型丰富</li>
          <li>运行效率高</li>
          <li>程序自由度高</li>
        </ol>
        <li>最简单的C程序</li>
        <ol>
          <li>最简单的C程序仅仅包含一个main函数</li>
          <li>main函数的返回值类型是int</li>
          <li>main函数内的圆括号必须保留</li>
          <li>要在main函数内加上return语句</li>
        </ol>
        <li>使用Dev-C++编辑并运行C程序</li>
        <ol>
          <li>新建源程序文件</li>
          <li>编辑源程序</li>
          <li>编译程序，如果出错，仔细检查并修改源程序</li>
          <li>编译并运行C程序</li>
        </ol>
      </ol>
      </template>
      <template #question>
      <ol>
        <li>讨论第一次编写C程序的体会</li>
        <li>编写程序时那些地方容易写错？</li>
      </ol>
      </template>
      <template #result>
      <ol>
        <li>学生的计算机基础技能较弱，部分学生甚至不知键盘上的几个特殊符号的输入方法</li>
        <li>学生英语基础较弱，使用英文版的编程软件有一定困难，下次换用中文版软件</li>
        <li>大部分学生都能顺利输入和运行最简单的 C 程序，为后续的课程打下了良好的基础</li>
      </ol>
      </template>
    </Plan>
    <Plan :count='2' :week='1' :weekday='4' :classNumber='1' topic='C语言程序基本结构' keynote='C程序的main函数'
          difficulty='什么地方必须加空格，什么地方可以不加空格'>
      <template #body>
      <ol>
        <li>剖析第一个C语言程序</li>
        <ol>
          <li>#include指令和stdio.h文件</li>
          <li>主函数</li>
          <li>函数体</li>
          <li>执行语句</li>
          <li>return语句</li>
        </ol>
        <li>注释</li>
        <ol>
          <li>单行注释</li>
          <li>多行注释</li>
          <li>文档注释</li>
        </ol>
        <li>关键词与标识符</li>
        <ol>
          <li>标识符的命名规范</li>
          <li>标识符的推荐命名</li>
          <li>关键词</li>
        </ol>
        <li>C程序的编程规范</li>
        <ol>
          <li>使用空格</li>
          <li>使用换行</li>
          <li>多写注释</li>
        </ol>
      </ol>
      </template>
      <template #question>
      <ol>
        <li>哪些字符序列是合法的标识符？为什么？</li>
        <li>最短的C程序必须包含哪些标识符与符号？</li>
        <li>为什么要写注释？</li>
      </ol>
      </template>
      <template #result>
      <ol>
        <li>由于引入的概念太多，学生一时难以掌握</li>
        <li>学生的英语水平较差，无法记住所有的关键词</li>
        <li>学生基本掌握了最简单的C程序的写法</li>
      </ol>
      </template>
    </Plan>
    <Plan :count='3' :week='2' :weekday='2' :classNumber='1' topic='变量与常量' keynote='变量的定义'
          difficulty='不同整数类型的大小范围'>
      <template #body>
        <ol>
          <li>常量</li>
          <ol>
            <li>常量的含义</li>
            <li>整数常量</li>
            <li>整数的进制</li>
          </ol>
          <li>变量</li>
          <ol>
            <li>变量的含义</li>
            <li>定义整数类型变量</li>
            <li>初始化整数类型变量</li>
            <li>不同整数类型的范围比较</li>
            <li>输出整数</li>
          </ol>
          <li>浮点类型</li>
          <ol>
            <li>浮点类型常量</li>
            <li>定义浮点类型变量</li>
            <li>初始化浮点类型变量</li>
            <li>输出浮点数</li>
          </ol>
        </ol>
      </template>
      <template #question>
        <ol>
          <li>整数常量有几种进制？</li>
          <li>如何定义short与long类型的变量与常量？</li>
          <li>整数类型按照其表示范围如何排列？</li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>部分学生很难理解为什么要定义不同范围的整数类型</li>
          <li>部分学生记不清不同类型整数常量与变量的定义方法</li>
          <li>学生对输出整数和浮点数类型的数据掌握较好</li>
        </ol>
      </template>
    </Plan>
    <Plan :count='4' :week='2' :weekday='4' :classNumber='1' topic='字符类型与类型转换' keynote='类型转换'
          difficulty='什么时候应用自动类型转换，什么时候应用强制类型转换'>
      <template #body>
        <ol>
          <li>字符类型</li>
          <ol>
            <li>字符常量</li>
            <li>字符变量</li>
            <li>输出字符以及字符的编码</li>
            <li>字符类型与整数类型的相似处与不同处</li>
            <li>常见转义字符</li>
            <li>编码转义为字符</li>
          </ol>
          <li>自动类型转换</li>
          <ol>
            <li>浮点类型转换</li>
            <li>整数类型向浮点类型转换</li>
            <li>有符号整数类型的转换</li>
            <li>无符号整数类型的转换</li>
            <li>有符号整数类型与无符号整数类型的转换</li>
            <li>类型转换的推荐做法</li>
          </ol>
          <li>强制类型转换</li>
          <ol>
            <li>赋值运算的强制类型转换</li>
            <li>强制类型转换运算符</li>
          </ol>
        </ol>
      </template>
      <template #question>
        <ol>
          <li>int类型与float类型运算，结果是什么类型？</li>
          <li>short类型与int类型运算，会发生什么样的类型转换？</li>
          <li>unsigned int与signed short之间如何转换？</li>
        </ol>
      </template>
      <template #result>
        <ol>
          <li>学生很难理解转义字符的含义</li>
          <li>学生对于整数类型的转换掌握较好</li>
          <li>有符号整数与无符号整数的区别较难理解</li>
        </ol>
      </template>
    </Plan>
    <Plan :count='5' :week='3' :weekday='2' :classNumber='1' topic='常见数据输入输出函数' keynote='格式化输入输出'
          difficulty='格式化输入输出函数的模板字符串的匹配过程'>
      <ol>

      </ol>
    </Plan>
  </PlanLayout>
</template>

<style scoped>

</style>
