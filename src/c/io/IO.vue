<script setup lang="tsx">
import type { Component } from 'vue'
import CLayout from '@/layouts/CLayout.vue'
import Slide from '@/layouts/Slide.vue'
import PrintfDef from '@/c/io/PrintfDef.vue'
import PrintfAnime from '@/c/io/PrintfAnime.vue'
import ScanfDef from '@/c/io/ScanfDef.vue'
import ScanfAnime from '@/c/io/ScanfAnime.vue'
import Format from '@/c/io/Format.vue'
import CodeBlock from '@/components/CodeBlock.vue'

const slides: Component[] = [
  {
    render() {
      return (
        <Slide title="第6章 输入输出">
          <ul>
            <li>输入输出的概念</li>
            <li>printf输出</li>
            <li>scanf输入</li>
            <li>字符的输入输出</li>
          </ul>
        </Slide>
      )
    }
  },
  {
    render() {
      return (
        <Slide title="什么是输入输出">
          <ul>
            <li>
              <dfn>输入</dfn>就是把用户输入的数据存入变量中
            </li>
            <li>
              <dfn>输出</dfn>就是把变量的值显示到屏幕上
            </li>
            <li>C语言的输入输出需要stdio.h头文件</li>
          </ul>
        </Slide>
      )
    }
  },
  PrintfDef,
  PrintfAnime,
  ScanfDef,
  ScanfAnime,
  Format,
  {
    render() {
      return (
        <Slide title="字符的输入输出">
          <CodeBlock>
            char ch;
            <br />
            ch = getchar();
            <br />
            putchar(ch);
            <br />
          </CodeBlock>
          <p>getchar输入字符，putchar输出字符</p>
          <footer>回车键也会被当做'\n'字符</footer>
        </Slide>
      )
    }
  }
]
</script>
<template>
  <CLayout :slides="slides" />
</template>
