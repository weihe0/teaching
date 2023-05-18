<script setup lang="tsx">
import type { Component } from 'vue'
import Slide from '@/layouts/Slide.vue'
import AILayout from '@/layouts/AILayout.vue'
import { RouterLink } from 'vue-router'

const slides: Component[] = [
  {
    setup() {
      return () => (
        <Slide title="目录">
          <ul class="two-columns">
            <li>
              <RouterLink to="/ai/general">项目一 总论</RouterLink>
            </li>
            <li>
              <RouterLink to="/ai/robot">项目二 智能机器人</RouterLink>
            </li>
            <li>
              <RouterLink to="/ai/drone">项目三 无人机</RouterLink>
            </li>
            <li>
              <RouterLink to="/ai/bigdata">项目四 大数据</RouterLink>
            </li>
            <li>
              <RouterLink to="/ai/ehome">项目五 智能家居</RouterLink>
            </li>
            <li>
              <RouterLink to="/ai/transport">项目六 智能交通</RouterLink>
            </li>
            <li>
              <RouterLink to="/ai/medicine">项目七 人工智能+医疗</RouterLink>
            </li>
            <li>
              <RouterLink to="/ai/finance">项目八 人工智能+金融</RouterLink>
            </li>
            <li>
              <RouterLink to="/ai/education">项目九 人工智能+教育</RouterLink>
            </li>
            <li>
              <RouterLink to="/ai/python">项目十 人工智能语言Python</RouterLink>
            </li>
          </ul>
        </Slide>
      )
    }
  }
]
</script>

<template>
  <AILayout title="C语言目录" :slides="slides" />
</template>

<style scoped></style>
