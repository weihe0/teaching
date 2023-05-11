<script setup lang="tsx">
import type { Component } from 'vue'
import Slide from '@/layouts/Slide.vue'
import CLayout from '@/layouts/CLayout.vue'
import { RouterLink } from 'vue-router'

const slides: Component[] = [
  {
    setup() {
      return () => (
        <Slide title="目录">
          <ul class="two-columns">
            <li>
              <RouterLink to="/c/basic">第1到4章 C语言基础</RouterLink>
            </li>
            <li>
              <RouterLink to="/c/data">第5章 基础数据类型</RouterLink>
            </li>
            <li>
              <RouterLink to="/c/io">第6章 输入输出</RouterLink>
            </li>
            <li>
              <RouterLink to="/c/expression">第7章 运算符与表达式</RouterLink>
            </li>
            <li>
              <RouterLink to="/c/condition">第8章 条件判断语句</RouterLink>
            </li>
            <li>
              <RouterLink to="/c/loop">第9章 循环语句</RouterLink>
            </li>
            <li>
              <RouterLink to="/c/array">第10章 数组</RouterLink>
            </li>
            <li>
              <RouterLink to="/c/string">第11章 字符串</RouterLink>
            </li>
            <li>
              <RouterLink to="/c/function">第12章 函数</RouterLink>
            </li>
            <li>
              <RouterLink to="/c/pointer">第13章 指针</RouterLink>
            </li>
            <li>
              <RouterLink to="/c/struct">第14章 结构体</RouterLink>
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

<style scoped></style>
