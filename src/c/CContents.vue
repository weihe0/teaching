<script setup lang="tsx">
import type { Component } from 'vue'
import Slide from '@/layouts/Slide.vue'
import CLayout from '@/layouts/CLayout.vue'

const slides: Component[] = [
  {
    setup() {
      return () => (
        <Slide title="目录">
          <ul>
            <li>
              <router-link to="/c/basic">第1到4章 C语言基础</router-link>
            </li>
            <li>
              <router-link to="/c/data">第5章 基础数据类型</router-link>
            </li>
            <li>
              <router-link to="/c/io">第6章 输入输出</router-link>
            </li>
            <li>
              <router-link to="/c/expression">第7章 运算符与表达式</router-link>
            </li>
            <li>
              <router-link to="/c/condition">第8章 条件判断语句</router-link>
            </li>
            <li>
              <router-link to="/c/loop">第9章 循环语句</router-link>
            </li>
            <li>
              <router-link to="/c/array">第10章 数组</router-link>
            </li>
            <li>
              <router-link to="/c/string">第11章 字符串</router-link>
            </li>
            <li>
              <router-link to="/c/function">第12章 函数</router-link>
            </li>
            <li>
              <router-link to="/c/pointer">第13章 指针</router-link>
            </li>
            <li>
              <router-link to="/c/struct">第14章 结构体</router-link>
            </li>
          </ul>
        </Slide>
      )
    }
  }
]
</script>

<template>
  <CLayout title="C语言目录" :slides="slides" />
</template>

<style scoped>
ul {
    font-size: xx-small;
  column-count: 2;
  max-height: 5em;
}
</style>
