<script setup lang="ts">
import Progress from '@/components/Progress.vue'
const contents = [
  '人工智能总论',
  '人工智能的预备知识',
  '智能机器人',
  '无人机',
  '大数据',
  '建立大数据思维',
  '智能家居',
  '智能交通',
  '自动驾驶',
  '人工智能+医疗'
]
</script>

<template>
  <Progress
    :total_hour="32"
    :week_hour="2"
    textbook="人工智能技术与应用"
    grading="考查"
    :contents="contents"
    author="王建华、王万森、马俊"
    classes="机电211 212 213"
    name="人工智能概论"
    :count="112"
    publisher="广东教育出版社"
    category="理论课"
    :start_week="2"
  />
</template>

<style scoped></style>
