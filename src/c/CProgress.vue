<script setup lang="ts">
import Progress from '@/components/Progress.vue'
const contents = [
  'C语言编程入门',
  '基本的C程序结构',
  '基本数据类型',
  '输入输出函数',
  '运算符与表达式',
  '条件选择语句',
  '循环语句',
  '数组',
  '字符串',
  '函数'
]
</script>

<template>
  <Progress
    :total_hour="48"
    :week_hour="4"
    textbook="C语言入门很简单"
    grading="考试"
    :contents="contents"
    author="马磊"
    classes="机器人223"
    name="C语言程序设计"
    :count="52"
    publisher="清华大学出版社"
    category="理论课"
    :start_week="3"
  />
</template>

<style scoped></style>
