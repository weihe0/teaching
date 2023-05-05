<script setup lang="tsx">
import type { Component } from 'vue'
import Slide from '@/layouts/Slide.vue'
import AILayout from '@/layouts/AILayout.vue'

const slides: Component[] = [
  {
    setup() {
      return () => (
        <Slide title="目录">
          <ul>
            <li><router-link to="/ai/general">项目一 总论</router-link></li>
            <li><router-link to="/ai/robot">项目二 智能机器人</router-link></li>
            <li><router-link to="/ai/drone">项目三 无人机</router-link></li>
            <li><router-link to="/ai/bigdata">项目四 大数据</router-link></li>
            <li><router-link to="/ai/ehome">项目五 智能家居</router-link></li>
            <li><router-link to="/ai/transport">项目六 智能交通</router-link></li>
            <li><router-link to="/ai/medicine">项目七 人工智能+医疗</router-link></li>
            <li><router-link to="/ai/finance">项目八 人工智能+金融</router-link></li>
            <li><router-link to="/ai/education">项目九 人工智能+教育</router-link></li>
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

<style scoped>
ul {
    column-count: 2;
    max-height: 5em;
}
</style>
