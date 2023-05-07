<script setup lang="ts">
import Progress from '@/components/Progress.vue'
const contents = [
  '复数的运算',
  '复变函数',
  '解析函数',
  '曲线积分',
  '无穷级数',
  '留数定理',
  '留数的应用',
  'Laplace变换与卷积',
  '行列式的定义与性质',
  '行列式的计算及克拉默法则'
]
</script>

<template>
  <Progress
    :total_hour="32"
    :week_hour="2"
    textbook="电气工程基础能力"
    grading="考查"
    :contents="contents"
    author="电气教研室"
    classes="机器人222 223"
    name="电气工程基础能力"
    :count="112"
    publisher="电气教研室"
    category="理论课"
    :start_week="2"
  />
</template>

<style scoped></style>
